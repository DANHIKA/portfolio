import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Moon = (props) => {
  const gltf = useLoader(GLTFLoader, '/assets/models/moon.glb'); // Ensure this path is correct
  return <primitive object={gltf.scene} {...props} />;
};

export default Moon;
