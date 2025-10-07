"use client";

import { Icosahedron, Stars } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Suspense, useLayoutEffect, useRef } from "react";
import * as THREE from "three";

// It's crucial to register the plugin!
gsap.registerPlugin(ScrollTrigger);

// New component for the cursor-following light
function CursorFollowerLight() {
  const lightRef = useRef<THREE.PointLight>(null!);
  const { viewport } = useThree(); // Get viewport dimensions to map mouse coords

  useFrame((state) => {
    if (lightRef.current) {
      // Map normalized mouse coordinates (-1 to 1) to the viewport size
      const targetX = (state.pointer.x * viewport.width) / 2;
      const targetY = (state.pointer.y * viewport.height) / 2;

      // Smoothly interpolate the light's position towards the target
      lightRef.current.position.lerp(
        new THREE.Vector3(targetX, targetY, 5), // Keep a constant Z to stay in front
        0.1, // Smoothing factor for a nice trailing effect
      );
    }
  });

  // This light will be invisible but will cast light on other objects
  return (
    <pointLight
      ref={lightRef}
      intensity={30}
      color="#a855f7" // A vibrant purple light
      distance={50}
      decay={2}
    />
  );
}

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
  const icosahedronRef = useRef<THREE.Mesh>(null!);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    // --- 3D ANIMATION TIMELINE ---

    // Animate the camera's position and rotation as the user scrolls
    tl.to(camera.position, { y: 0, z: 12, ease: "power1.inOut" }, 0.0);
    tl.to(
      camera.rotation,
      { x: -Math.PI / 6, y: Math.PI / 3, ease: "power1.inOut" },
      0.25,
    );
    tl.to(camera.position, { z: 8, x: 3, ease: "power1.inOut" }, 0.25);
    tl.to(
      camera.rotation,
      { x: 0, y: -Math.PI / 3, ease: "power1.inOut" },
      0.55,
    );
    tl.to(camera.position, { z: 10, x: -3, ease: "power1.inOut" }, 0.6);
    tl.to(
      camera.rotation,
      { x: Math.PI / 8, y: 0, ease: "power1.inOut" },
      0.85,
    );
    tl.to(camera.position, { z: 15, x: 0, y: 2, ease: "power1.inOut" }, 0.85);

    if (icosahedronRef.current) {
      tl.to(
        icosahedronRef.current.rotation,
        {
          x: Math.PI * 2,
          y: Math.PI * 2,
          z: Math.PI * 2,
          ease: "none",
        },
        0,
      );
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [camera]);

  return (
    <>
      <CursorFollowerLight />

      <ambientLight intensity={0.3} />
      <pointLight position={[15, 15, 15]} intensity={20} color="#00f5ff" />
      <pointLight position={[-15, 10, -15]} intensity={15} color="#ff4444" />
      <directionalLight position={[10, 10, 5]} intensity={8} color="#ffffff" />

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
      <Icosahedron ref={icosahedronRef} position={[0, 0, 0]}>
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
