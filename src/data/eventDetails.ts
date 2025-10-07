export type EventDetails = {
  teamSize?: string;
  prizeMoney?: string;
  registrationFee?: string;
  rules?: string[];
  guidelines?: string[];
  resultAnnouncement?: string;
  contact?: string;
};

// Key format: `${dayKey}:${title}` e.g. "nov7:Bot Sprint Heats"
export const eventDetails: Record<string, EventDetails> = {
  // November 6
  "nov6:Bot Sprint Heats": {
    teamSize: "1-3",
    prizeMoney: "₹25,000",
    registrationFee: "₹200 per team",
    rules: [
      "Bots must be autonomous; no external controls during sprint.",
      "Max bot dimensions: 30x30x30 cm; weight under 5 kg.",
      "Track resets allowed only once per run.",
    ],
    guidelines: [
      "Bring your own batteries and tools.",
      "Arrive 30 mins prior for verification.",
      "Wear safety gear in the pit area.",
    ],
    resultAnnouncement: "Same day, 4:30 PM at Main Arena notice board.",
    contact: "bots@addovedi.com",
  },
  "nov6:Drone Flight Challenge": {
    teamSize: "1-2",
    prizeMoney: "₹30,000",
    registrationFee: "₹300 per team",
    rules: [
      "No GPS lock; manual or vision-based allowed.",
      "Prop guards required; max diagonal size 350 mm.",
      "Cross all gates; missed gate adds 10s penalty.",
    ],
    guidelines: [
      "Charge batteries at designated stations only.",
      "Follow R/C frequency allocations and airspace calls.",
      "Bring spare propellers and tools.",
    ],
    resultAnnouncement: "Same day, 2:00 PM at Sky Dome desk.",
    contact: "aero@addovedi.com",
  },
  "nov6:Smart Car Innovation": {
    teamSize: "2-4",
    prizeMoney: "₹20,000",
    registrationFee: "₹150 per team",
    rules: [
      "Car must demonstrate at least two AI features (e.g., lane-keeping, obstacle avoidance).",
      "Demonstration time limit: 7 minutes.",
      "Custom or kit-built allowed; disclose components.",
    ],
    guidelines: [
      "Prepare a brief poster or slide for the demo.",
      "Have a recorded fallback demo video.",
      "Share code repo link if available.",
    ],
    resultAnnouncement: "Winners announced at 5:30 PM in Expo Hall.",
    contact: "ai-cars@addovedi.com",
  },

  // November 7
  "nov7:Robot Combat Arena": {
    teamSize: "2-5",
    prizeMoney: "₹50,000",
    registrationFee: "₹500 per team",
    rules: [
      "Bots must pass safety inspection (failsafe, armor checks).",
      "No flames or projectiles; kinetic weapons allowed within limit.",
      "Knockout or judges' decision if time lapses.",
    ],
    guidelines: [
      "Spare parts strongly recommended.",
      "Keep battery kill switch easily accessible.",
      "Ensure radio failsafe is configured.",
    ],
    resultAnnouncement: "Semis and finals results live on arena screen.",
    contact: "combat@addovedi.com",
  },
  "nov7:Lightning Round": {
    teamSize: "1-2",
    prizeMoney: "₹15,000",
    registrationFee: "₹100 per team",
    rules: [
      "No external libraries beyond standard during on-site rounds.",
      "Internet access restricted to docs only.",
      "Plagiarism leads to immediate disqualification.",
    ],
    guidelines: [
      "Practice past problems; time management is key.",
      "Bring your college ID and laptop.",
      "Use latest stable Node/Python as preferred.",
    ],
    resultAnnouncement: "Results at 3:00 PM at Hack Zone help desk.",
    contact: "coding@addovedi.com",
  },
  "nov7:Tech Exhibition Finale": {
    teamSize: "Open",
    prizeMoney: "Certificates + Goodies",
    registrationFee: "Free",
    rules: [
      "Project must be demonstrated live to the jury.",
      "Teams should have at least one member present at booth.",
    ],
    guidelines: [
      "Label your booth with project summary.",
      "Keep a 2-minute pitch ready.",
    ],
    resultAnnouncement: "Winners revealed during awards ceremony.",
    contact: "expo@addovedi.com",
  },
};
