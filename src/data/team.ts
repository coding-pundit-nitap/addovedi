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
    | "chairman"
    | "faculty_coordinator"
    | "head_coordinator"
    | "management"
    | "web"
    | "sponsorship"
    | "pr"
    | "event_coordinators"
    | "volunteer_incharge"
    | "marketing"
    | "editing"
    | "editing11"
    | "hospitality";
  title: string;
  emoji: string;
  members: TeamMember[];
};

export const teamSections: TeamSection[] = [
  {
    key: "chairman",
    title: " Addovedi Chairman",
    emoji: "👨‍💼",
    members: [
      {
        name: "Dr. Abhik Banerjee",
        role: "Chairman",
        image: "/faculty/Dr. Abhik Banerjee.jpg",
      },
    ],
  },
  {
    key: "faculty_coordinator",
    title: "Faculty Coordinator",
    emoji: "🧑‍🏫",
    members: [
      {
        name: "Dr. Brajagopal Datta",
        role: "Faculty Coordinator",
        image: "/faculty/Dr. Brajagopal Datta.jpg",
      },
      {
        name: "Dr. Jayakesh K",
        role: "Faculty Coordinator",
        image: "/faculty/Dr. Jayakesh K.jpg",
      },
      {
        name: "Dr. Sahadev Roy",
        role: "Faculty Coordinator",
        image: "/faculty/Dr. Sahadev Roy.jpg",
      },
      {
        name: "Dr. Subhasish Banerjee",
        role: "Faculty Coordinator",
        image: "/faculty/Dr. Subhasish Banerjee.jpg",
      },
      {
        name: "Dr. Sandip Kumar Mandal",
        role: "Faculty Coordinator",
        image: "/faculty/Dr. Sandip Kumar Mandal.jpg",
      },
    ],
  },

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
      { name: "Karan Kumar Sah", role: "Member", image: "/team/karan.jpg " },
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
      { name: "James Raj Tamang", role: "Member", image: "/team/james.jpg" },
      {
        name: "Harshit Srivastava",
        role: "Member",
        image: "/team/harshitsrivastava.jpg",
      },
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
    key: "editing11",
    title: "Design Head",
    emoji: "🧑‍🎨",
    members: [
      {
        name: "Dungwa mossang",
        role: "Member",
        image: "/team/Dungwamossang.jpg",
      },
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
      { name: "Nabam Tabin", role: "Member", image: "/team/tabin.jpg" },
      { name: "Siro Bagang", role: "Member", image: "/team/siro.jpg" },
      { name: "Nyato Mengnia", role: "Member", image: "/team/gentlemen1.jpg" },
    ],
  },
];
