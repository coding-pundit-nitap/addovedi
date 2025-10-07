export type TimelineItem = {
  time: string;
  tag: string;
  title: string;
  description: string;
  location?: string;
};

export type TimelineDay = {
  key: "nov6" | "nov7";
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
        time: "10:00 AM",
        tag: "Robotics",
        title: "Bot Sprint Heats",
        description:
          "Qualifying sprints for autonomous bots on the neon circuit.",
        location: "Main Arena",
      },
      {
        time: "12:30 PM",
        tag: "Aero",
        title: "Drone Flight Challenge",
        description:
          "Precision flying trials with obstacle gates and time checkpoints.",
        location: "Sky Dome",
      },
      {
        time: "03:30 PM",
        tag: "AI",
        title: "Smart Car Innovation",
        description:
          "Showcase of AI-powered micro-cars and live demos on smart tracks.",
        location: "Expo Hall",
      },
    ],
  },
  {
    key: "nov7",
    dayLabel: "7 Nov",
    dateLong: "November 7",
    items: [
      {
        time: "09:30 AM",
        tag: "Robotics",
        title: "Robot Combat Arena",
        description:
          "Battle-tested designs enter the arena for the knock-out stage.",
        location: "Main Arena",
      },
      {
        time: "01:00 PM",
        tag: "Coding",
        title: "Lightning Round",
        description: "Rapid-fire coding puzzles across multiple domains.",
        location: "Hack Zone",
      },
      {
        time: "05:00 PM",
        tag: "Showcase",
        title: "Tech Exhibition Finale",
        description:
          "Grand finale showcase of projects, awards ceremony and closing note.",
        location: "Grand Stage",
      },
    ],
  },
];
