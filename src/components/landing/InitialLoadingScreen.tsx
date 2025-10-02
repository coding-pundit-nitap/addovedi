"use client";

import { Box, Cylinder } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef,useState } from "react";
import * as THREE from "three";

// Client-side only Particle Effects component
function ParticleEffects() {
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      top: number;
      left: number;
      duration: number;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    setIsClient(true);

    // Generate deterministic particle positions
    const particleArray = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      top: (i * 47) % 100, // Pseudo-random using modulo
      left: (i * 73) % 100, // Different multiplier for variety
      duration: 2 + i * 0.1,
      delay: i * 0.1,
    }));

    setParticles(particleArray);
  }, []);

  if (!isClient) {
    return null; // Don't render on server
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-50"
          style={{
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            animation: `particle ${particle.duration}s linear infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

// Fast RC Car Component for loading
function LoadingRCCar({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) {
  const carRef = useRef<THREE.Group>(null!);
  const wheelRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state, delta) => {
    if (carRef.current) {
      // Fast movement animation
      carRef.current.position.x =
        position[0] + Math.sin(state.clock.elapsedTime * 2) * 3;
      carRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 4) * 0.2;
      carRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 2) * 0.3;
      carRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 3) * 0.1;
    }

    // Super fast spinning wheels
    wheelRefs.current.forEach((wheel) => {
      if (wheel) {
        wheel.rotation.x += delta * 20;
      }
    });
  });

  return (
    <group ref={carRef} position={position}>
      {/* Car Body */}
      <Box args={[1.5, 0.4, 0.8]} position={[0, 0.2, 0]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.1}
        />
      </Box>

      {/* Wheels */}
      {[
        [-0.5, -0.1, 0.4],
        [-0.5, -0.1, -0.4],
        [0.5, -0.1, 0.4],
        [0.5, -0.1, -0.4],
      ].map((wheelPos, index) => (
        <Cylinder
          key={index}
          ref={(el) => {
            if (el) wheelRefs.current[index] = el;
          }}
          args={[0.2, 0.2, 0.15]}
          position={wheelPos as [number, number, number]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial
            color="#111111"
            emissive="#333333"
            emissiveIntensity={0.3}
          />
        </Cylinder>
      ))}
    </group>
  );
}

// 3D Racing Track for loading
function LoadingTrack() {
  const trackRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    if (trackRef.current) {
      trackRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={trackRef} position={[0, -1, 0]}>
      {/* Track */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3, 4, 32]} />
        <meshStandardMaterial
          color="#333333"
          emissive="#111111"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Track lines */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.4, 3.6, 32]} />
        <meshStandardMaterial
          color="#f97316"
          emissive="#f97316"
          emissiveIntensity={0.6}
        />
      </mesh>
    </group>
  );
}

// Main loading screen component
export default function InitialLoadingScreen({
  onLoadComplete,
}: {
  onLoadComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [loadingStage, setLoadingStage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const loadingStages = [
    "STARTING ENGINES...",
    "LOADING TRACK DATA...",
    "INITIALIZING SYSTEMS...",
    "WARMING UP TIRES...",
    "CALIBRATING SENSORS...",
    "FINAL SYSTEMS CHECK...",
    "READY TO RACE!",
  ];

  useEffect(() => {
    const duration = 4000; // 4 seconds total loading time
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    const progressIncrement = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + progressIncrement;

        // Update loading stage based on progress
        const stageIndex = Math.floor(
          (newProgress / 100) * loadingStages.length,
        );
        setLoadingStage(Math.min(stageIndex, loadingStages.length - 1));

        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onLoadComplete, 500);
          }, 800);
          return 100;
        }

        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadComplete, loadingStages.length]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-8">
        <div className="grid grid-cols-12 h-full animate-pulse">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className={`${
                Math.floor(i / 12) % 2 === i % 2
                  ? "bg-blue-400"
                  : "bg-transparent"
              } animate-pulse`}
              style={{ animationDelay: `${(i * 0.1) % 3}s` }}
            />
          ))}
        </div>
      </div>

      {/* Tech stripes background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 opacity-15 animate-pulse" />
        <div
          className="absolute top-0 right-1/4 w-2 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-blue-500 opacity-15 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 2, 6], fov: 60 }}>
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={12} color="#3b82f6" />
          <pointLight position={[-5, 3, -5]} intensity={10} color="#8b5cf6" />
          <pointLight position={[0, 8, 0]} intensity={15} color="#6366f1" />

          {/* Racing Cars */}
          <LoadingRCCar position={[0, 0, 0]} color="#3b82f6" />
          <LoadingRCCar position={[2, 0.5, 1]} color="#8b5cf6" />
          <LoadingRCCar position={[-2, 0.3, -1]} color="#6366f1" />

          {/* Racing Track */}
          <LoadingTrack />
        </Canvas>
      </div>

      {/* UI Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Main Logo */}
        <div className="text-center mb-12">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 animate-pulse">
              ADDOVEDI
            </span>
          </h1>
          <p className="text-2xl sm:text-3xl font-bold text-slate-200 tracking-widest">
            TECH FEST 2025
          </p>
          <p className="text-lg sm:text-xl text-blue-400 font-semibold mt-2 animate-pulse">
            ⚡ RC RACING EDITION ⚡
          </p>
        </div>

        {/* Progress Section */}
        <div className="w-full max-w-md px-8">
          {/* Progress Bar */}
          <div className="relative w-full h-4 bg-slate-800/80 rounded-full overflow-hidden border-2 border-blue-400 mb-6">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 transition-all duration-100 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Racing car indicator */}
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-3 bg-orange-400 rounded-sm animate-bounce" />
              </div>
            </div>
          </div>

          {/* Progress Text */}
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-100 mb-2">
              {Math.round(progress)}%
            </div>
            <div className="text-lg font-semibold text-blue-400 animate-pulse min-h-[1.5rem]">
              {loadingStages[loadingStage]}
            </div>
          </div>
        </div>

        {/* Tech Elements */}
        <div className="flex justify-center mt-8 space-x-6">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping" />
          <div
            className="w-3 h-3 bg-purple-500 rounded-full animate-ping"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="w-3 h-3 bg-indigo-500 rounded-full animate-ping"
            style={{ animationDelay: "0.4s" }}
          />
        </div>

        {/* Speed lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-40"
              style={{
                top: `${15 + i * 7}%`,
                left: "-150px",
                width: "300px",
                animation: `speedLine ${0.8 + i * 0.15}s linear infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Particle effects - client-side only */}
        <ParticleEffects />
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes speedLine {
          0% {
            transform: translateX(-300px);
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translateX(calc(100vw + 300px));
            opacity: 0;
          }
        }

        @keyframes particle {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            transform: translateY(-100vh) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
