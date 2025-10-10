"use client";

import { Html, useProgress } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

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
