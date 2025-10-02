"use client";

import { useEffect, useRef, useState } from "react";

export default function RacingSounds() {
  const [isEnabled, setIsEnabled] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const engineSoundRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Initialize audio context and create engine sound
  const initAudio = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
      gainNodeRef.current = audioContextRef.current.createGain();
      gainNodeRef.current.connect(audioContextRef.current.destination);
      gainNodeRef.current.gain.value = 0.1; // Low volume
    }
  };

  // Create engine sound effect using Web Audio API
  const startEngineSound = () => {
    if (
      audioContextRef.current &&
      gainNodeRef.current &&
      !engineSoundRef.current
    ) {
      engineSoundRef.current = audioContextRef.current.createOscillator();
      engineSoundRef.current.type = "sawtooth";
      engineSoundRef.current.frequency.setValueAtTime(
        80,
        audioContextRef.current.currentTime,
      );

      // Create a more complex engine sound by modulating frequency
      const lfo = audioContextRef.current.createOscillator();
      const lfoGain = audioContextRef.current.createGain();
      lfo.frequency.value = 2; // 2Hz modulation
      lfoGain.gain.value = 20; // Modulation depth

      lfo.connect(lfoGain);
      lfoGain.connect(engineSoundRef.current.frequency);

      engineSoundRef.current.connect(gainNodeRef.current);
      engineSoundRef.current.start();
      lfo.start();
    }
  };

  const stopEngineSound = () => {
    if (engineSoundRef.current) {
      engineSoundRef.current.stop();
      engineSoundRef.current = null;
    }
  };

  // Handle scroll for dynamic sound effects
  useEffect(() => {
    if (!isEnabled) return;

    const handleScroll = () => {
      if (gainNodeRef.current && engineSoundRef.current) {
        const scrollPercent =
          window.pageYOffset /
          (document.documentElement.scrollHeight - window.innerHeight);
        const frequency = 80 + scrollPercent * 120;
        const volume = 0.05 + scrollPercent * 0.1;

        engineSoundRef.current.frequency.setValueAtTime(
          frequency,
          audioContextRef.current!.currentTime,
        );
        gainNodeRef.current.gain.setValueAtTime(
          volume,
          audioContextRef.current!.currentTime,
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isEnabled]);

  const toggleSound = () => {
    if (!isEnabled) {
      initAudio();
      startEngineSound();
      setIsEnabled(true);
    } else {
      stopEngineSound();
      setIsEnabled(false);
    }
  };

  // Create racing sound effects on hover and interactions
  const createRevSound = () => {
    if (!audioContextRef.current || !isEnabled) return;

    const revOsc = audioContextRef.current.createOscillator();
    const revGain = audioContextRef.current.createGain();

    revOsc.type = "sawtooth";
    revOsc.frequency.setValueAtTime(150, audioContextRef.current.currentTime);
    revOsc.frequency.exponentialRampToValueAtTime(
      300,
      audioContextRef.current.currentTime + 0.3,
    );
    revOsc.frequency.exponentialRampToValueAtTime(
      120,
      audioContextRef.current.currentTime + 0.6,
    );

    revGain.gain.setValueAtTime(0, audioContextRef.current.currentTime);
    revGain.gain.linearRampToValueAtTime(
      0.15,
      audioContextRef.current.currentTime + 0.1,
    );
    revGain.gain.exponentialRampToValueAtTime(
      0.01,
      audioContextRef.current.currentTime + 0.6,
    );

    revOsc.connect(revGain);
    revGain.connect(audioContextRef.current.destination);

    revOsc.start();
    revOsc.stop(audioContextRef.current.currentTime + 0.6);
  };

  // Add sound effects to buttons
  useEffect(() => {
    if (!isEnabled) return;

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", createRevSound);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", createRevSound);
      });
    };
  }, [isEnabled, createRevSound]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleSound}
        className={`p-3 rounded-full border-2 transition-all duration-300 ${
          isEnabled
            ? "bg-gradient-to-r from-red-500 to-yellow-400 border-yellow-400 text-black animate-pulse"
            : "bg-black/50 border-gray-600 text-gray-400 hover:border-gray-400"
        }`}
        title={isEnabled ? "Disable Racing Sounds" : "Enable Racing Sounds"}
      >
        <div className="flex items-center space-x-2">
          <span className="text-lg">{isEnabled ? "🔊" : "🔇"}</span>
          <span className="text-sm font-bold hidden sm:inline">
            {isEnabled ? "SOUNDS ON" : "SOUNDS OFF"}
          </span>
        </div>
      </button>
    </div>
  );
}
