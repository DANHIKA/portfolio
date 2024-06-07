import React, { useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export function Moon(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { nodes, materials } = useGLTF('/assets/models/moon.glb');

  useEffect(() => {
    if (nodes && materials) {
      setLoading(false);
    } else {
      setError('Failed to load GLB file.');
    }
  }, [nodes, materials]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Sphere_Material002_0.geometry} material={materials['Material.002']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  );
}

useGLTF.preload('/assets/models/moon.glb');
