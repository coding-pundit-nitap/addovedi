"use client";

import { Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

export type RCParticlesProps = {
  primary?: string; // neon cyan
  secondary?: string; // neon purple
  density?: number; // particle count factor
};

function VortexRing({
  count = 2400,
  radius = 6,
  height = 1.2,
  primary = "#66FFFF",
}: {
  count?: number;
  radius?: number;
  height?: number;
  primary?: string;
}) {
  const pts = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = radius + (Math.random() - 0.5) * 0.5;
      const y = (Math.random() - 0.5) * height;
      arr[i * 3 + 0] = Math.cos(a) * r;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = Math.sin(a) * r;
    }
    return arr;
  }, [count, radius, height]);

  const ref = useRef<THREE.Points>(null!);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.08 * state.clock.getDelta();
      const s = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.02;
      ref.current.scale.set(s, s, s);
    }
  });

  return (
    <points ref={ref} position={[0, -0.2, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[pts, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={primary}
        size={0.05}
        transparent
        opacity={0.6}
        depthWrite={false}
      />
    </points>
  );
}

function ForwardSparks({
  count = 1500,
  spreadX = 14,
  spreadY = 8,
  primary = "#B366FF",
  speedRef,
}: {
  count?: number;
  spreadX?: number;
  spreadY?: number;
  primary?: string;
  speedRef: React.MutableRefObject<number>;
}) {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * spreadX;
      arr[i * 3 + 1] = (Math.random() - 0.5) * spreadY;
      arr[i * 3 + 2] = -Math.random() * 60 - 5;
    }
    return arr;
  }, [count, spreadX, spreadY]);

  useFrame((_, delta) => {
    const arr = (
      ref.current.geometry.attributes.position as THREE.BufferAttribute
    ).array as Float32Array;
    const speed = speedRef.current;
    for (let i = 0; i < count; i++) {
      const idx = i * 3 + 2;
      arr[idx] += delta * speed;
      if (arr[idx] > 2) arr[idx] = -60 - Math.random() * 10;
    }
    (
      ref.current.geometry.attributes.position as THREE.BufferAttribute
    ).needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={primary}
        size={0.06}
        opacity={0.35}
        transparent
        depthWrite={false}
      />
    </points>
  );
}

function Pulses({
  primary = "#66FFFF",
  secondary = "#B366FF",
}: {
  primary?: string;
  secondary?: string;
}) {
  const rings = new Array(3).fill(0);
  const refs = useRef<THREE.Mesh[]>([]);
  useFrame((state) => {
    refs.current.forEach((m, i) => {
      const t = (state.clock.elapsedTime + i * 0.6) % 2.4;
      const s = 0.6 + (t / 2.4) * 1.6;
      const alpha = 1 - t / 2.4;
      m.scale.set(s, s, s);
      (m.material as THREE.MeshStandardMaterial).color.set(
        i % 2 === 0 ? primary : secondary,
      );
      (m.material as THREE.MeshStandardMaterial).emissive.set(
        i % 2 === 0 ? primary : secondary,
      );
      (m.material as THREE.MeshStandardMaterial).opacity = 0.15 + alpha * 0.25;
      (m.material as THREE.MeshStandardMaterial).transparent = true;
    });
  });
  return (
    <group position={[0, -0.6, -4]}>
      {rings.map((_, i) => (
        <mesh
          key={i}
          ref={(el) => el && (refs.current[i] = el)}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <ringGeometry args={[2.4, 2.5, 64]} />
          <meshStandardMaterial
            emissive={primary}
            emissiveIntensity={1.2}
            color={primary}
            opacity={0.3}
            transparent
          />
        </mesh>
      ))}
    </group>
  );
}

export default function RCParticles({
  primary = "#66FFFF",
  secondary = "#B366FF",
  density = 1,
}: RCParticlesProps) {
  const speedRef = useRef(14);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const o = { v: speedRef.current };
    const st = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        o.v = 10 + self.progress * 35; // accelerate further down
        speedRef.current = o.v;
      },
    });
    return () => st.kill();
  }, []);

  return (
    <div className="fixed top-0 left-0 h-screen w-full pointer-events-none">
      <Canvas camera={{ position: [0, 0.2, 10], fov: 60 }}>
        <color attach="background" args={["#010308"]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[8, 6, 8]} intensity={10} color={primary} />
        <pointLight position={[-8, -6, -8]} intensity={8} color={secondary} />
        <Stars radius={120} depth={60} count={1800} factor={5} fade speed={1} />

        <VortexRing primary={primary} count={Math.floor(2400 * density)} />
        <ForwardSparks
          primary={secondary}
          speedRef={speedRef}
          count={Math.floor(1500 * density)}
        />
        <Pulses primary={primary} secondary={secondary} />

        <EffectComposer>
          <Bloom
            intensity={1.1}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
          <Vignette eskil={false} offset={0.35} darkness={0.6} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
