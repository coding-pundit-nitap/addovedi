"use client";

import { Box, Cylinder, Icosahedron, Stars } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Suspense, useLayoutEffect, useRef } from "react";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

// RC Car Component for the main scene
// function RCCarScene({ position, color, emissiveColor }: {
//   position: [number, number, number];
//   color: string;
//   emissiveColor: string;
// }) {
//   const carGroupRef = useRef<THREE.Group>(null!);
//   const wheelRefs = useRef<THREE.Mesh[]>([]);

//   useFrame((state, delta) => {
//     if (carGroupRef.current) {
//       // Smooth floating motion
//       carGroupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
//       carGroupRef.current.rotation.y += delta * 0.3;

//       // Add some gentle rotation on other axes
//       carGroupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
//       carGroupRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3) * 0.05;
//     }

//     // Spinning wheels
//     wheelRefs.current.forEach((wheel) => {
//       if (wheel) {
//         wheel.rotation.x += delta * 12;
//       }
//     });
//   });

//   return (
//     <group ref={carGroupRef} position={position}>
//       {/* Car Body - Main */}
//       <Box args={[3, 0.8, 1.5]} position={[0, 0.4, 0]}>
//         <meshStandardMaterial
//           color={color}
//           emissive={emissiveColor}
//           emissiveIntensity={0.4}
//           metalness={0.9}
//           roughness={0.1}
//         />
//       </Box>

//       {/* Car Hood/Front */}
//       <Box args={[1.2, 0.4, 1.3]} position={[1.1, 0.6, 0]}>
//         <meshStandardMaterial
//           color="#00f5ff"
//           emissive="#00f5ff"
//           emissiveIntensity={0.6}
//           metalness={0.95}
//           roughness={0.05}
//         />
//       </Box>

//       {/* Spoiler */}
//       <Box args={[0.3, 0.6, 1.8]} position={[-1.2, 0.8, 0]}>
//         <meshStandardMaterial
//           color="#ffffff"
//           emissive="#ffffff"
//           emissiveIntensity={0.3}
//           metalness={0.8}
//           roughness={0.2}
//         />
//       </Box>

//       {/* Wheels */}
//       {[
//         [-1, -0.2, 0.8],
//         [-1, -0.2, -0.8],
//         [1, -0.2, 0.8],
//         [1, -0.2, -0.8],
//       ].map((wheelPos, index) => (
//         <Cylinder
//           key={index}
//           args={[0.4, 0.4, 0.3]}
//           position={wheelPos as [number, number, number]}
//           rotation={[Math.PI / 2, 0, 0]}
//         >
//           <meshStandardMaterial
//             color="#111111"
//             emissive="#333333"
//             emissiveIntensity={0.3}
//             metalness={0.7}
//             roughness={0.8}
//           />
//         </Cylinder>
//       ))}

//       {/* Racing stripes */}
//       <Box args={[2.8, 0.02, 0.3]} position={[0, 0.81, 0]}>
//         <meshStandardMaterial
//           color="#ffffff"
//           emissive="#ffffff"
//           emissiveIntensity={0.5}
//         />
//       </Box>

//       {/* Side details */}
//       <Box args={[0.1, 0.3, 1.2]} position={[0, 0.4, 0.65]}>
//         <meshStandardMaterial
//           color="#3b82f6"
//           emissive="#3b82f6"
//           emissiveIntensity={0.4}
//         />
//       </Box>
//       <Box args={[0.1, 0.3, 1.2]} position={[0, 0.4, -0.65]}>
//         <meshStandardMaterial
//           color="#3b82f6"
//           emissive="#3b82f6"
//           emissiveIntensity={0.4}
//         />
//       </Box>
//     </group>
//   );
// }

// // Racing Track Component
// function RacingTrack() {
//   const trackRef = useRef<THREE.Group>(null!);

//   useFrame((state, delta) => {
//     if (trackRef.current) {
//       trackRef.current.rotation.y += delta * 0.2;
//     }
//   });

//   return (
//     <group ref={trackRef} position={[0, -3, 0]}>
//       {/* Main track */}
//       <mesh rotation={[-Math.PI / 2, 0, 0]}>
//         <ringGeometry args={[8, 10, 64]} />
//         <meshStandardMaterial
//           color="#222222"
//           emissive="#111111"
//           emissiveIntensity={0.2}
//         />
//       </mesh>

//       {/* Inner track line */}
//       <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
//         <ringGeometry args={[7.8, 8.2, 64]} />
//         <meshStandardMaterial
//           color="#3b82f6"
//           emissive="#3b82f6"
//           emissiveIntensity={0.8}
//         />
//       </mesh>

//       {/* Outer track line */}
//       <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
//         <ringGeometry args={[9.8, 10.2, 64]} />
//         <meshStandardMaterial
//           color="#3b82f6"
//           emissive="#3b82f6"
//           emissiveIntensity={0.8}
//         />
//       </mesh>

//       {/* Start/Finish line */}
//       <Box args={[2, 0.05, 0.5]} position={[9, 0.02, 0]} rotation={[0, 0, 0]}>
//         <meshStandardMaterial
//           color="#ffffff"
//           emissive="#ffffff"
//           emissiveIntensity={1}
//         />
//       </Box>
//     </group>
//   );
// }

// Racing Particles
function RacingParticles() {
  const particlesRef = useRef<THREE.Points>(null!);

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.2;

      const positions = particlesRef.current.geometry.attributes.position
        .array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] -= delta * 3;
        if (positions[i + 1] < -15) {
          positions[i + 1] = 15;
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  const particleCount = 200;
  const positions = new Float32Array(particleCount * 3);

  // Use deterministic positions based on index instead of Math.random()
  for (let i = 0; i < particleCount; i++) {
    const t = i / particleCount; // 0 to 1
    positions[i * 3] = (t - 0.5) * 40; // x position
    positions[i * 3 + 1] = ((i * 11) % 30) - 15; // y position (pseudo-random pattern)
    positions[i * 3 + 2] = (((i * 17) % 40) / 40 - 0.5) * 40; // z position (pseudo-random pattern)
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#00f5ff" size={0.15} transparent opacity={0.7} />
    </points>
  );
}

const ScrollAnimator = () => {
  const { camera } = useThree();

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    // Enhanced animation timeline with racing camera movements
    tl.to(camera.position, { y: 0, z: 12 }, 0.0);
    tl.to("#hero-section > div", { opacity: 0 }, 0.2);
    tl.to(camera.rotation, { x: -Math.PI / 6, y: Math.PI / 3 }, 0.25);
    tl.to(camera.position, { z: 8, x: 3 }, 0.25);
    tl.to("#events-section", { opacity: 1 }, 0.3);
    tl.to("#events-section", { opacity: 0 }, 0.5);
    tl.to(camera.rotation, { x: 0, y: -Math.PI / 3 }, 0.55);
    tl.to(camera.position, { z: 10, x: -3 }, 0.55);
    tl.to("#sponsors-section", { opacity: 1 }, 0.6);
    tl.to("#sponsors-section", { opacity: 0 }, 0.8);
    tl.to(camera.rotation, { x: Math.PI / 8, y: 0 }, 0.85);
    tl.to(camera.position, { z: 15, x: 0, y: 2 }, 0.85);
    tl.to("#cta-section", { opacity: 1 }, 0.9);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [camera]);

  return (
    <>
      {/* Enhanced Lighting for Racing Scene */}
      <ambientLight intensity={0.3} />
      <pointLight position={[15, 15, 15]} intensity={20} color="#00f5ff" />
      <pointLight position={[-15, 10, -15]} intensity={15} color="#ff4444" />
      <pointLight position={[0, 20, 0]} intensity={25} color="#ffff00" />
      <directionalLight
        position={[10, 10, 5]}
        intensity={8}
        color="#ffffff"
        castShadow
      />

      {/* Stars background */}
      <Stars
        radius={120}
        depth={80}
        count={8000}
        factor={6}
        saturation={0}
        fade
        speed={2}
      />
      <RacingParticles />
      <Icosahedron position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#00f5ff"
          emissive="#00f5ff"
          emissiveIntensity={2}
          wireframe
        />
      </Icosahedron>
    </>
  );
};

export default function Experience() {
  return (
    <Suspense fallback={null}>
      <ScrollAnimator />
    </Suspense>
  );
}
