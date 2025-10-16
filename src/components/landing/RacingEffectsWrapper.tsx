"use client";

import { FloatingElements, RacingCursor, SpeedLines } from "./RacingAnimations";


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
