"use client";

import { Box, Cylinder, Html, Text, useProgress } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// RC Car Component
function RCCar({ position }: { position: [number, number, number] }) {
  const carRef = useRef<THREE.Group>(null!);
  const wheelRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state, delta) => {
    if (carRef.current) {
      // Gentle bobbing motion using state.clock.elapsedTime instead of Date.now()
      carRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 3) * 0.1;
      carRef.current.rotation.y += delta * 0.2;
    }

    // Spinning wheels
    wheelRefs.current.forEach((wheel) => {
      if (wheel) {
        wheel.rotation.x += delta * 8;
      }
    });
  });

  return (
    <group ref={carRef} position={position}>
      {/* Car Body */}
      <Box args={[2, 0.6, 1]} position={[0, 0.3, 0]}>
        <meshStandardMaterial
          color="#ff4444"
          emissive="#ff1111"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </Box>

      {/* Car Hood */}
      <Box args={[0.8, 0.3, 0.9]} position={[0.6, 0.45, 0]}>
        <meshStandardMaterial
          color="#00f5ff"
          emissive="#00f5ff"
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.1}
        />
      </Box>

      {/* Wheels */}
      {[
        [-0.7, -0.1, 0.6],
        [-0.7, -0.1, -0.6],
        [0.7, -0.1, 0.6],
        [0.7, -0.1, -0.6],
      ].map((wheelPos, index) => (
        <Cylinder
          key={index}
          args={[0.3, 0.3, 0.2]}
          position={wheelPos as [number, number, number]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial
            color="#111111"
            emissive="#333333"
            emissiveIntensity={0.2}
          />
        </Cylinder>
      ))}

      {/* Racing stripes */}
      <Box args={[1.8, 0.01, 0.2]} position={[0, 0.61, 0]}>
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.3}
        />
      </Box>
    </group>
  );
}

// Racing Track Component
function RacingTrack() {
  const trackRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (trackRef.current) {
      trackRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group>
      {/* Main track ring */}
      <mesh
        ref={trackRef}
        position={[0, -2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <ringGeometry args={[4, 5, 32]} />
        <meshStandardMaterial
          color="#333333"
          emissive="#111111"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Track lines */}
      <mesh position={[0, -1.98, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[4.4, 4.6, 32]} />
        <meshStandardMaterial
          color="#ffff00"
          emissive="#ffff00"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}

// Particle System for Racing Effects
function RacingParticles() {
  const particlesRef = useRef<THREE.Points>(null!);

  useFrame((_, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.5;

      // Update particle positions for movement effect
      const positions = particlesRef.current.geometry.attributes.position
        .array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] -= delta * 2; // Move particles down
        if (positions[i + 1] < -10) {
          positions[i + 1] = 10; // Reset to top
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);

  // Use deterministic positions based on index instead of Math.random()
  for (let i = 0; i < particleCount; i++) {
    const t = i / particleCount; // 0 to 1
    positions[i * 3] = (t - 0.5) * 20; // x position
    positions[i * 3 + 1] = ((i * 7) % 20) - 10; // y position (pseudo-random pattern)
    positions[i * 3 + 2] = (((i * 13) % 20) / 20 - 0.5) * 20; // z position (pseudo-random pattern)
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#00f5ff" size={0.1} transparent opacity={0.6} />
    </points>
  );
}

export default function LoadingScene() {
  const { progress } = useProgress();

  return (
    <>
      {/* Enhanced Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={15} color="#00f5ff" />
      <pointLight position={[-10, -10, -10]} intensity={10} color="#ff4444" />
      <directionalLight
        position={[0, 10, 5]}
        intensity={5}
        color="#ffffff"
        castShadow
      />

      {/* Racing Track */}
      <RacingTrack />

      {/* RC Cars */}
      <RCCar position={[0, 1, 0]} />
      <RCCar position={[3, 0.5, 2]} />
      <RCCar position={[-3, 0.8, -2]} />

      {/* Racing Particles */}
      <RacingParticles />

      {/* Enhanced UI */}
      <Html center>
        <div className="text-center w-80 pointer-events-none">
          {/* Racing-themed logo */}
          <div className="mb-6">
            <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-cyan-400 animate-pulse">
              ADDOVEDI
            </h1>
            <p className="text-xl font-bold text-cyan-400 tracking-widest mt-2">
              TECH FEST 2025
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-800 rounded-full h-3 mb-4 overflow-hidden border-2 border-cyan-400">
            <div
              className="h-full bg-gradient-to-r from-red-500 via-yellow-400 to-cyan-400 transition-all duration-300 ease-out animate-pulse"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Progress Text */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-2">
              {progress.toFixed(0)}%
            </h2>
          </div>

          {/* Racing Elements */}
          <div className="flex justify-center mt-6 space-x-4">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
            <div
              className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="w-2 h-2 bg-green-500 rounded-full animate-ping"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </div>
      </Html>
    </>
  );
}
