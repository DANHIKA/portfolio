import React, { Suspense, useRef } from 'react';
import { Canvas, useThree, extend } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Sun from './Sun';

extend({ OrbitControls }); // Extend OrbitControls for use in React Three Fiber

const SunScene = () => {
  return (
    <Canvas camera={{ position: [2, 0, 12.25], fov: 15 }} style={{ height: '500px', width: '100%' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Sun position={[0.025, -0.9, 0]} /> */}
      </Suspense>
      <Controls />
    </Canvas>
  );
};

const Controls = () => {
  const { camera, gl } = useThree(); // Access camera and WebGL renderer
  const controlsRef = useRef(); // Create a ref for the OrbitControls

  useThree((state) => {
    controlsRef.current = new OrbitControls(state.camera, state.gl.domElement);
    controlsRef.current.enableDamping = true; // Enable damping for smoother controls
  });

  return null;
};

export default SunScene;
