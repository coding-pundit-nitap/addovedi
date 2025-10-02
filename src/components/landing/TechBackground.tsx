"use client";

import { Canvas } from "@react-three/fiber";

import SceneManager from "./SceneManager";

export default function TechBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen">
      <Canvas camera={{ position: [5, 5, 15], fov: 75 }}>
        <SceneManager />
      </Canvas>
    </div>
  );
}
