export type TeamMember = {
  name: string;
  role: string;
  image?: string;
  social?: {
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
};

export type TeamSection = {
  key:
    | "head_coordinator"
    | "management"
    | "web"
    | "sponsorship"
    | "pr"
    | "event_coordinators"
    | "volunteer_incharge"
    | "marketing"
    | "editing"
    | "hospitality";
  title: string;
  emoji: string;
  members: TeamMember[];
};

export const teamSections: TeamSection[] = [
  {
    key: "head_coordinator",
    title: "Head Coordinator",
    emoji: "⭐",
    members: [
      {
        name: "Rahul Mengnia",
        role: "Head Coordinator",
        image: "/team/rahul.jpg",
      },
    ],
  },
  {
    key: "event_coordinators",
    title: "Event Organizers",
    emoji: "🎯",
    members: [
      { name: "Siddhant", role: "Member", image: "/team/Siddhant.jpg" },
      { name: "Ankit Jha", role: "Member", image: "/team/ankit1.PNG" },
    ],
  },

  {
    key: "web",
    title: "Web Team",
    emoji: "💻",
    members: [
      { name: "Banoth Charan", role: "Member", image: "/team/cherry.jpg" },
      { name: "Arun Kumar", role: "Member", image: "/team/yash.jpg " },
      { name: "Karan Kumar Sah", role: "Member", image: "/team/karan.jpg" },
    ],
  },

  {
    key: "sponsorship",
    title: "Sponsorship Team",
    emoji: "🏆",
    members: [
      { name: "Rishav Dev Raj", role: "Member", image: "/team/rishav.png" },
      {
        name: "Umashankar Sahu",
        role: "Member",
        image: "/team/umashankar.png",
      },
    ],
  },

  {
    key: "pr",
    title: "PR Team",
    emoji: "📣",
    members: [
      { name: "Saloni Muskan", role: "Member", image: "/team/saloni.jpg" },
    ],
  },

  {
    key: "editing",
    title: "Editing Team",
    emoji: "✂️",
    members: [
      { name: "Nong Own Emphum", role: "Member", image: "/team/nong.jpg" },
      { name: "Rahman", role: "Member", image: "/team/rahman.png" },
    ],
  },
  {
    key: "marketing",
    title: "Marketing Team",
    emoji: "📈",
    members: [
      { name: "Gerna Panyang", role: "Member", image: "/team/gerna.jpg" },
      { name: "Meku Tungi", role: "Member", image: "/team/meku.jpg" },
    ],
  },
  {
    key: "volunteer_incharge",
    title: "Volunteer In-Charge",
    emoji: "🧑‍🤝‍🧑",
    members: [
      { name: "Yomte Karlo", role: "Member", image: "/team/yomte.jpg" },
      { name: "Modi jini", role: "Member", image: "/team/modi.jpg" },
    ],
  },
  {
    key: "management",
    title: "Management & Hospitality Team",
    emoji: "🧭",
    members: [
      { name: "Namban Tabin", role: "Member", image: "/team/tabin.jpg" },
      { name: "Siro Bagang", role: "Member", image: "/team/siro.jpg" },
      { name: "Nayato Mengnia", role: "Member", image: "/team/gentlemen1.jpg" },
    ],
  },
];
