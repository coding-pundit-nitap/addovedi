"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button } from "./ui/button";

type Particle = {
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
};

export function HeroSection() {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate particles only on client to avoid SSR mismatch
  useEffect(() => {
    const generated = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 3 + 2}s`,
    }));
    setParticles(generated);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy font-poppins">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-60">
        <ImageWithFallback
          src="/HERO-IMG.png"
          alt="Futuristic background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/50 to-navy"></div>
      </div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.35)_0%,_rgba(0,0,0,0.65)_70%)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-6 inline-block rounded-xl bg-black/30 backdrop-blur-sm px-6 py-3"
        >
          <h1
            className="relative font-bold text-transparent bg-clip-text 
                         bg-gradient-to-r from-accent-teal via-white to-accent-magenta 
                         bg-[length:300%_300%] animate-gradient-flow 
                         drop-shadow-[0_4px_24px_rgba(100,255,218,0.25)]
                         text-[clamp(3.25rem,8vw,8.5rem)] text-shadow-glow-teal"
          >
            Addovedi
            {/* Pulsating Lines */}
            <div className="absolute -top-4 -bottom-4 left-0 right-0">
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-accent-teal to-transparent absolute top-0 animate-line-pulse [animation-delay:-2s]" />
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-accent-magenta to-transparent absolute bottom-0 animate-line-pulse" />
            </div>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 text-accent-teal/90 font-light tracking-widest text-[clamp(1.2rem,3vw,2rem)]"
        >
          Innovate. Code. Conquer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 space-y-2"
        >
          <p className="text-white/90 text-xl">March 15-17, 2025</p>
          <p className="text-accent-magenta text-lg">Virtual & In-Person</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button className="relative px-8 py-4 text-lg font-semibold rounded-full border-2 border-accent-teal bg-transparent text-accent-teal hover:bg-accent-teal hover:text-navy transition-all duration-300 group overflow-hidden">
            <span className="relative z-10">Register Now</span>
            <div className="absolute inset-0 bg-accent-teal scale-0 group-hover:scale-100 transition-transform origin-bottom duration-300" />
          </Button>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent-teal rounded-full opacity-50 animate-pulse"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.animationDelay,
              animationDuration: p.animationDuration,
            }}
          />
        ))}
      </div>
    </section>
  );
}
