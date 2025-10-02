"use client";

import {
  FloatingElements,
  RacingCursor,
  RacingProgress,
  SpeedLines,
} from "./RacingAnimations";
import { RacingEffects } from "./RacingEffects";

interface RacingEffectsWrapperProps {
  showRacingEffects: boolean;
}

export default function RacingEffectsWrapper({
  showRacingEffects,
}: RacingEffectsWrapperProps) {
  return (
    <>
      {/* Racing Animation Effects */}
      <SpeedLines />
      <FloatingElements />
      <RacingProgress />
      <RacingCursor />

      {/* Racing HUD Effects - only after countdown */}
      {showRacingEffects && <RacingEffects />}
    </>
  );
}
