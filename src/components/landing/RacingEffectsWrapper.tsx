"use client";

import { FloatingElements, RacingCursor, SpeedLines } from "./RacingAnimations";
import { RacingEffects } from "./RacingEffects";

interface RacingEffectsWrapperProps {
  showRacingEffects: boolean;
}

export default function RacingEffectsWrapper() {
  return (
    <>
      {/* Racing Animation Effects */}
      <SpeedLines />
      <FloatingElements />
      <RacingCursor />
    </>
  );
}
