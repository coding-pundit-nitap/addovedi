export type Sponsor = {
  id: number;
  name: string;
  category: "Platinum" | "Gold" | "Silver" | "Bronze";
};

export const sponsors: Sponsor[] = [
  { id: 1, name: "TechCorp", category: "Platinum" },
  { id: 2, name: "InnovateX", category: "Gold" },
  { id: 3, name: "CodeFlow", category: "Gold" },
  { id: 4, name: "DataVision", category: "Silver" },
  { id: 5, name: "CloudTech", category: "Silver" },
  { id: 6, name: "NextGen", category: "Silver" },
  { id: 7, name: "AI Solutions", category: "Bronze" },
  { id: 8, name: "WebCraft", category: "Bronze" },
];
