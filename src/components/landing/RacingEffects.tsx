"use client";

import { useEffect, useState } from "react";

// Tire smoke particles
export function TireSmoke({
  position,
}: {
  position: { x: number; y: number };
}) {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      opacity: number;
      scale: number;
    }>
  >([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) => {
        // Add new particle
        const newParticle = {
          id: Date.now(),
          x: position.x + (Math.random() - 0.5) * 20,
          y: position.y,
          opacity: 0.8,
          scale: 0.5,
        };

        // Update existing particles and filter out old ones
        const updatedParticles = prev
          .map((particle) => ({
            ...particle,
            y: particle.y - 2,
            opacity: particle.opacity - 0.02,
            scale: particle.scale + 0.02,
          }))
          .filter((particle) => particle.opacity > 0);

        return [...updatedParticles, newParticle].slice(-15); // Keep only recent particles
      });
    }, 100);

    return () => clearInterval(interval);
  }, [position]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-4 h-4 bg-gray-500 rounded-full blur-sm"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            transform: `scale(${particle.scale})`,
            transition: "all 0.1s ease-out",
          }}
        />
      ))}
    </div>
  );
}

// Engine rev visualization
export function EngineRevMeter({ intensity }: { intensity: number }) {
  return (
    <div className="fixed bottom-8 left-8 z-20">
      <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/30">
        <div className="text-cyan-400 text-sm font-bold mb-2">ENGINE RPM</div>
        <div className="flex items-end space-x-1 h-16">
          {Array.from({ length: 10 }).map((_, i) => {
            const barHeight = Math.max(10, (intensity * 60 * (i + 1)) / 10);
            const isActive = i < intensity * 10;
            return (
              <div
                key={i}
                className={`w-3 transition-all duration-150 ${
                  isActive
                    ? i < 6
                      ? "bg-green-500"
                      : i < 8
                        ? "bg-yellow-400"
                        : "bg-red-500"
                    : "bg-gray-700"
                }`}
                style={{ height: `${barHeight}%` }}
              />
            );
          })}
        </div>
        <div className="text-white text-xs mt-1 text-center">
          {Math.round(intensity * 8000)} RPM
        </div>
      </div>
    </div>
  );
}

// Racing HUD overlay
export function RacingHUD({
  speed,
  gear,
  lapTime,
}: {
  speed: number;
  gear: number;
  lapTime: string;
}) {
  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {/* Speed display */}
      <div className="absolute top-8 right-8 bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-red-500/30">
        <div className="text-red-400 text-sm font-bold">SPEED</div>
        <div className="text-white text-3xl font-black">{speed}</div>
        <div className="text-gray-400 text-xs">KM/H</div>
      </div>

      {/* Gear display */}
      <div className="absolute top-32 right-8 bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-yellow-400/30">
        <div className="text-yellow-400 text-sm font-bold">GEAR</div>
        <div className="text-white text-4xl font-black text-center">{gear}</div>
      </div>

      {/* Lap time */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-green-500/30">
        <div className="text-green-400 text-sm font-bold text-center">
          LAP TIME
        </div>
        <div className="text-white text-2xl font-mono">{lapTime}</div>
      </div>

      {/* Racing line indicator */}
      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-8 h-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Main racing effects controller
export function RacingEffects() {
  const [engineIntensity, setEngineIntensity] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [gear, setGear] = useState(1);
  const [lapTime, setLapTime] = useState("00:00.000");
  const [startTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate racing dynamics
      const elapsed = (Date.now() - startTime) / 1000;
      const cycleTime = elapsed % 10; // 10-second cycle

      // Engine intensity follows a racing pattern
      const intensity = Math.max(0.3, Math.sin(cycleTime * 0.6) * 0.7 + 0.5);
      setEngineIntensity(intensity);

      // Speed varies with engine intensity
      const currentSpeed = Math.round(intensity * 180 + 20); // 20-200 km/h
      setSpeed(currentSpeed);

      // Gear changes based on speed
      const currentGear = Math.min(
        6,
        Math.max(1, Math.floor(currentSpeed / 30)),
      );
      setGear(currentGear);

      // Update lap time
      const minutes = Math.floor(elapsed / 60);
      const seconds = elapsed % 60;
      setLapTime(
        `${minutes.toString().padStart(2, "0")}:${seconds.toFixed(3).padStart(6, "0")}`,
      );
    }, 100);

    return () => clearInterval(interval);
  }, [startTime]);

  return (
    <>
      <EngineRevMeter intensity={engineIntensity} />
      <RacingHUD speed={speed} gear={gear} lapTime={lapTime} />
    </>
  );
}
