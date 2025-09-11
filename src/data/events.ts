import { Code2, Cog, Cpu, Lightbulb, Trophy, Zap } from "lucide-react";
import type { ElementType } from "react";

export type Event = {
  id: number;
  name: string;
  description: string;
  icon: ElementType;
  color: string;
};

export const events: Event[] = [
  {
    id: 1,
    name: "Hackathons",
    description: "Build innovative solutions in 48 hours",
    icon: Code2,
    color: "#64FFDA", // accent-teal
  },
  {
    id: 2,
    name: "Workshops",
    description: "Learn cutting-edge technologies",
    icon: Cog,
    color: "#FF00FF", // accent-magenta
  },
  {
    id: 3,
    name: "RoboWars",
    description: "Battle of the machines",
    icon: Cpu,
    color: "#64FFDA",
  },
  {
    id: 4,
    name: "Ideathons",
    description: "Transform ideas into reality",
    icon: Lightbulb,
    color: "#FF00FF",
  },
  {
    id: 5,
    name: "Tech Talks",
    description: "Insights from industry leaders",
    icon: Zap,
    color: "#64FFDA",
  },
  {
    id: 6,
    name: "Competitions",
    description: "Compete and showcase your skills",
    icon: Trophy,
    color: "#FF00FF",
  },
];
