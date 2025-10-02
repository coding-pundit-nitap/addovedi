"use client";

import { Icosahedron,Stars } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Bloom,EffectComposer } from "@react-three/postprocessing";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Suspense, useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

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

    // --- Animation timeline is unchanged ---
    tl.to(camera.position, { y: 0, z: 10 }, 0.0);
    tl.to("#hero-section > div", { opacity: 0 }, 0.2);
    tl.to(camera.rotation, { x: -Math.PI / 8, y: Math.PI / 4 }, 0.25);
    tl.to(camera.position, { z: 6 }, 0.25);
    tl.to("#events-section", { opacity: 1 }, 0.3);
    tl.to("#events-section", { opacity: 0 }, 0.5);
    tl.to(camera.rotation, { x: 0, y: -Math.PI / 4 }, 0.55);
    tl.to(camera.position, { z: 8 }, 0.55);
    tl.to("#sponsors-section", { opacity: 1 }, 0.6);
    tl.to("#sponsors-section", { opacity: 0 }, 0.8);
    tl.to(camera.rotation, { x: 0, y: 0 }, 0.85);
    tl.to(camera.position, { z: 12 }, 0.85);
    tl.to("#cta-section", { opacity: 1 }, 0.9);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={10} color="#00f5ff" />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
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
  // This component now returns the scene elements directly
  return (
    <Suspense fallback={null}>
      <EffectComposer>
        <Bloom intensity={0.8} />
      </EffectComposer>
      <ScrollAnimator />
    </Suspense>
  );
}
