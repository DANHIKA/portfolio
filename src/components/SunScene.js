import React, {Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Sun } from './Sun'; // Import the Moon component correctly

const SunScene = () => {
  return (
    <Canvas camera={{ position: [2, 0, 12.25], fov: 15 }} style={{ height: '500px', width: '100%' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
      <Sun position={[0.025, -0.9, 0]} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default SunScene; // Export the Moon3D component
