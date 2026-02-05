'use client';

import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

// Mars Particle Sphere (resembling Mars dust particles)
const MarsParticles: React.FC<{ count?: number }> = ({ count = 4000 }) => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 2 + Math.random() * 0.5;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count]);
  
  const colors = useMemo(() => {
    const cols = new Float32Array(count * 3);
    const marsColors = [
      new THREE.Color('#ff4d00'),
      new THREE.Color('#cf4520'),
      new THREE.Color('#e27b58'),
      new THREE.Color('#c1440e'),
    ];
    
    for (let i = 0; i < count; i++) {
      const color = marsColors[Math.floor(Math.random() * marsColors.length)];
      cols[i * 3] = color.r;
      cols[i * 3 + 1] = color.g;
      cols[i * 3 + 2] = color.b;
    }
    return cols;
  }, [count]);
  
  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005;
      pointsRef.current.rotation.x += 0.0002;
    }
  });
  
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.015} vertexColors transparent opacity={0.8} />
    </points>
  );
};

// Orbiting Moons (Phobos and Deimos)
const OrbitingMoon: React.FC<{ 
  radius: number; 
  speed: number; 
  size: number;
  color: string;
  initialAngle?: number;
}> = ({ radius, speed, size, color, initialAngle = 0 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const angle = useRef(initialAngle);
  
  useFrame(() => {
    if (meshRef.current) {
      angle.current += speed;
      meshRef.current.position.x = Math.cos(angle.current) * radius;
      meshRef.current.position.z = Math.sin(angle.current) * radius;
      meshRef.current.position.y = Math.sin(angle.current * 0.5) * 0.2;
    }
  });
  
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

// Main Mars Scene
const MarsSceneContent: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ff6b35" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#cf4520" />
      
      <MarsParticles />
      
      {/* Phobos */}
      <OrbitingMoon radius={3.5} speed={0.008} size={0.08} color="#888888" initialAngle={0} />
      
      {/* Deimos */}
      <OrbitingMoon radius={4.5} speed={0.004} size={0.05} color="#666666" initialAngle={Math.PI} />
      
      {/* Background stars */}
      <Stars radius={100} depth={50} count={3000} factor={2} fade />
    </>
  );
};

export const MarsScene: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <MarsSceneContent />
      </Canvas>
    </div>
  );
};

export default MarsScene;
