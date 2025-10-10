"use client";

import { useState } from "react";

import CTASection from "@/components/landing/CTASection";
import EventsSection from "@/components/landing/EventsSection";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import InitialLoadingScreen from "@/components/landing/InitialLoadingScreen";
import RacingCountdownOverlay from "@/components/landing/RacingCountdownOverlay";
import RacingEffectsWrapper from "@/components/landing/RacingEffectsWrapper";
import SponsorsSection from "@/components/landing/SponsorsSection";
import TechBackground from "@/components/landing/TechBackground";

export default function Home() {
  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [showRacingEffects, setShowRacingEffects] = useState(true);

  const handleLoadComplete = () => {
    setIsInitialLoading(false);
    setShowCountdown(true);
  };

  const handleCountdownComplete = () => {
    setShowCountdown(false);
    setShowRacingEffects(true);
  };

  if (isInitialLoading) {
    return <InitialLoadingScreen onLoadComplete={handleLoadComplete} />;
  }

  return (
    <>
      {/* Racing Countdown Overlay */}
      {showCountdown && (
        <RacingCountdownOverlay onCountdownComplete={handleCountdownComplete} />
      )}

      {/* Racing Animation Effects */}
      <RacingEffectsWrapper />

      {/* 3D Background Scene */}
      <TechBackground />

      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Events Section */}
        <EventsSection />

        {/* Sponsors Section */}
        <SponsorsSection />

        {/* CTA Section */}
        <CTASection />
      </div>

      <Footer />
    </>
  );
}
