export type TimelineItem = {
  time: string;
  tag: string;
  title: string;
  description: string;
  location?: string;
};

export type TimelineDay = {
  key: "nov6" | "nov7" | "nov8";
  dayLabel: string;
  dateLong: string;
  items: TimelineItem[];
};

export const timelineDays: TimelineDay[] = [
  {
    key: "nov6",
    dayLabel: "6 Nov",
    dateLong: "November 6",
    items: [
      {
        time: "6:00–8:00 PM",
        tag: "Coding",
        title: "Hackathon",
        description: "Kick-start session and registrations.",
        location: "TBA",
      },
      {
        time: "6:00–8:00 PM",
        tag: "Innovation",
        title: "Ideathon Kick-Start",
        description: "Opening session and brief.",
        location: "TBA",
      },
      {
        time: "6:00–9:00 PM",
        tag: "Electronics",
        title: "Verilog",
        description: "Hands-on session and challenge.",
        location: "TBA",
      },
      {
        time: "6:00–9:00 PM",
        tag: "Aero",
        title: "Rocket Aviation",
        description: "Workshop and activities.",
        location: "TBA",
      },
      {
        time: "6:00–9:00 PM",
        tag: "Civil",
        title: "Water Filter",
        description: "Design and build challenge.",
        location: "TBA",
      },
      {
        time: "6:00–9:00 PM",
        tag: "Electronics",
        title: "Minimalist Circuit Challenge",
        description: "Circuit building challenge.",
        location: "TBA",
      },
      {
        time: "6:00–9:00 PM",
        tag: "Gaming",
        title: "BGMI",
        description: "Esports matches and qualifiers.",
        location: "TBA",
      },
    ],
  },
  {
    key: "nov7",
    dayLabel: "7 Nov",
    dateLong: "November 7",
    items: [
      {
        time: "9:00–11:00 PM",
        tag: "Mechanical",
        title: "Hydraulic Arm",
        description: "Build and control a hydraulic arm.",
        location: "TBA",
      },
      {
        time: "9:00–11:00 PM",
        tag: "Electronics",
        title: "Circuit Problem Solving",
        description: "Timed circuit problem sets.",
        location: "TBA",
      },
      {
        time: "9:00–11:00 PM",
        tag: "Electronics",
        title: "Component Identification",
        description: "Identify electronic components.",
        location: "TBA",
      },
      {
        time: "9:00–12:00 PM",
        tag: "Gaming",
        title: "Mortal Combat",
        description: "Tournament matches.",
        location: "TBA",
      },
      {
        time: "11:00–2:00 PM",
        tag: "Robotics",
        title: "Maze Follower",
        description: "Autonomous maze following.",
        location: "TBA",
      },
      {
        time: "12:00–2:00 PM",
        tag: "Mechanical",
        title: "Assembly Disassembly",
        description: "Mechanisms assembly challenge.",
        location: "TBA",
      },
      {
        time: "12:30–3:00 PM",
        tag: "Showcase",
        title: "Science Exhibition",
        description: "Project showcase.",
        location: "TBA",
      },
      {
        time: "1:00–4:00 PM",
        tag: "Gaming",
        title: "Valorant",
        description: "Esports matches.",
        location: "TBA",
      },
      {
        time: "2:00–5:00 PM",
        tag: "RC",
        title: "RC Racing",
        description: "Radio-controlled car racing.",
        location: "TBA",
      },
      {
        time: "5:00–8:00 PM",
        tag: "Gaming",
        title: "Fifa",
        description: "Esports matches.",
        location: "TBA",
      },
      {
        time: "6:00–8:00 PM",
        tag: "Innovation",
        title: "Ideathon Conclusion",
        description: "Final presentations and wrap-up.",
        location: "TBA",
      },
      {
        time: "8:00–10:00 PM",
        tag: "Coding",
        title: "Hackathon Conclusion",
        description: "Final submissions and closing.",
        location: "TBA",
      },
    ],
  },
  {
    key: "nov8",
    dayLabel: "8 Nov",
    dateLong: "November 8",
    items: [
      {
        time: "9:00–11:00 PM",
        tag: "Civil",
        title: "Bridge making presentation",
        description: "Presentations and evaluations.",
        location: "TBA",
      },
      {
        time: "9:00–11:00 PM",
        tag: "CAD",
        title: "Solidworks",
        description: "Design competition.",
        location: "TBA",
      },
      {
        time: "9:00–11:00 PM",
        tag: "Gaming",
        title: "MLBB",
        description: "Mobile Legends tournament.",
        location: "TBA",
      },
      {
        time: "9:00–11:00 PM",
        tag: "Electronics",
        title: "Circuit Debugging",
        description: "Debug circuits under time.",
        location: "TBA",
      },
      {
        time: "9:00–11:00 PM",
        tag: "Electronics",
        title: "PCB Design",
        description: "Design printed circuit boards.",
        location: "TBA",
      },
      {
        time: "9:00–11:00 PM",
        tag: "Coding",
        title: "code2game",
        description: "Convert logic to gameplay.",
        location: "TBA",
      },
      {
        time: "11:00–1:00 PM",
        tag: "Robotics",
        title: "Robo War",
        description: "Robot combat rounds.",
        location: "TBA",
      },
      {
        time: "1:00–4:00 PM",
        tag: "Gaming",
        title: "BGMI DAY 2",
        description: "Continuation of BGMI.",
        location: "TBA",
      },
      {
        time: "2:00–4:30 PM",
        tag: "Robotics",
        title: "Line Follower",
        description: "Line following robot challenge.",
        location: "TBA",
      },
      {
        time: "3:00–4:30 PM",
        tag: "Coding",
        title: "Codathon",
        description: "Coding contest.",
        location: "TBA",
      },
      {
        time: "4:00–5:00 PM",
        tag: "Photography",
        title: "photography result",
        description: "Result announcement.",
        location: "TBA",
      },
      {
        time: "5:00–7:00 PM",
        tag: "Talks",
        title: "Day 2 Spokeperson",
        description: "Speakers session.",
        location: "TBA",
      },
      {
        time: "8:00–10:00 PM",
        tag: "Cultural",
        title: "music club",
        description: "Performances.",
        location: "TBA",
      },
    ],
  },
];
