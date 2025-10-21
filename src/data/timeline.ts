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
    dateLong: "November 6, 2025",
    items: [
      {
        time: "4:00-5:00 PM",
        tag: "Ceremony",
        title: "Inauguration",
        description: "Opening ceremony of HackDawn 2025.",
        location: "Central Library",
      },
      {
        time: "5:10 PM",
        tag: "Coding",
        title: "Hackathon Kick-Start",
        description: "Hackathon officially begins; team setup and brief.",
        location: "Central Library",
      },
      {
        time: "5:10 PM",
        tag: "Innovation",
        title: "Ideathon Kick-Start",
        description: "Initial problem briefing and brainstorming session.",
        location: "Central Library",
      },
      {
        time: "6:00-8:00 PM",
        tag: "Electronics",
        title: "Verilog",
        description: "Hands-on workshop and implementation challenge.",
        location: "Central Library",
      },
      {
        time: "6:00-9:00 PM",
        tag: "Aero",
        title: "Rocket Aviation",
        description: "Rocket design and performance challenge.",
        location: "Central Library",
      },
      {
        time: "6:00-9:00 PM",
        tag: "Civil",
        title: "Water Filter",
        description: "Design and prototype challenge.",
        location: "Central Library",
      },
      {
        time: "6:00-9:00 PM",
        tag: "Electronics",
        title: "Minimalist Circuit Challenge",
        description: "Create a functional circuit with minimal components.",
        location: "Central Library",
      },
      {
        time: "6:00-9:00 PM",
        tag: "Gaming",
        title: "BGMI Day 1",
        description: "First round of BGMI esports tournament.",
        location: "Central Library",
      },
    ],
  },
  {
    key: "nov7",
    dayLabel: "7 Nov",
    dateLong: "November 7, 2025",
    items: [
      {
        time: "9:00-12:00 PM",
        tag: "Gaming",
        title: "Mortal Combat",
        description: "1v1 fighting tournament.",
        location: "Central Library",
      },
      {
        time: "11:00-2:00 PM",
        tag: "Robotics",
        title: "Maze Follower",
        description: "Autonomous robot maze challenge.",
        location: "Central Library",
      },
      {
        time: "12:00-2:00 PM",
        tag: "Mechanical",
        title: "Assembly Disassembly",
        description: "Mechanical assembly challenge.",
        location: "Central Library",
      },
      {
        time: "12:30-3:00 PM",
        tag: "Showcase",
        title: "Science Exhibition",
        description: "Student project showcase and demonstration.",
        location: "Central Library",
      },
      {
        time: "1:00-4:00 PM",
        tag: "Gaming",
        title: "Valorant",
        description: "Esports competition (team event).",
        location: "Central Library",
      },
      {
        time: "2:00-5:00 PM",
        tag: "RC",
        title: "RC Racing",
        description: "Radio-controlled car racing rounds.",
        location: "Central Library",
      },
      {
        time: "6:00-8:00 PM",
        tag: "Innovation",
        title: "Ideathon Conclusion",
        description: "Final presentations and judging.",
        location: "Central Library",
      },
      {
        time: "8:00-10:00 PM",
        tag: "Coding",
        title: "Hackathon Conclusion",
        description: "Final project submissions, demos, and closing remarks.",
        location: "Central Library",
      },
      {
        time: "9:00-11:00 AM",
        tag: "Mechanical",
        title: "Hydraulic Arm",
        description: "Build and control competition.",
        location: "Central Library",
      },

      {
        time: "9:00-11:00 AM",
        tag: "Electronics",
        title: "Component Identification",
        description: "Identify and analyze electronic components.",
        location: "Central Library",
      },
    ],
  },
  {
    key: "nov8",
    dayLabel: "8 Nov",
    dateLong: "November 8, 2025",
    items: [
      {
        time: "11:00-1:00 PM",
        tag: "Robotics",
        title: "Robo War",
        description: "Robot combat matches and eliminations.",
        location: "Central Library",
      },
      {
        time: "1:00-4:00 PM",
        tag: "Gaming",
        title: "BGMI Day 2",
        description: "Final matches of BGMI tournament.",
        location: "Central Library",
      },
      {
        time: "2:00-4:30 PM",
        tag: "Robotics",
        title: "Line Follower",
        description: "Line-following autonomous robot challenge.",
        location: "Central Library",
      },
      {
        time: "3:00-4:30 PM",
        tag: "Coding",
        title: "Codathon",
        description:
          "Online coding competition — logic and problem-solving rounds.",
        location: "Central Library",
      },
      {
        time: "5:00-7:00 PM",
        tag: "Talks",
        title: "Day 2 Spokesperson Session",
        description: "Guest talks and speaker sessions.",
        location: "Central Library",
      },
      {
        time: "8:00-10:00 PM",
        tag: "Cultural",
        title: "Music Club",
        description: "Musical performances and closing entertainment.",
        location: "Central Library",
      },
      {
        time: "9:00-11:00 PM",
        tag: "Civil",
        title: "Bridge Making Presentation",
        description: "Team presentations and evaluations.",
        location: "Central Library",
      },
      {
        time: "9:00-11:00 P=AM",
        tag: "Gaming",
        title: "MLBB",
        description: "Mobile Legends esports tournament.",
        location: "Central Library",
      },
      {
        time: "9:00-11:00 AM",
        tag: "Electronics",
        title: "Circuit Debugging",
        description: "Debug and optimize given circuits under time pressure.",
        location: "Central Library",
      },
      {
        time: "9:00-11:00 AM",
        tag: "Coding",
        title: "Code2Game",
        description: "Create your own game logic from scratch in real-time.",
        location: "Central Library",
      },
    ],
  },
];
