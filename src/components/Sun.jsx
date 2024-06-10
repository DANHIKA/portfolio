import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Sun = (props) => {
  const gltf = useLoader(GLTFLoader, '/assets/models/sun.glb'); // Ensure this path is correct
  return <primitive object={gltf.scene} {...props} />;
};

export default Sun;