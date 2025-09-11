import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  type LucideIcon,
  Twitter,
} from "lucide-react";

export type SocialLink = {
  icon: LucideIcon;
  href: string;
  label: string;
  color: string;
};

export type QuickLink = {
  name: string;
  href: string;
};

export const socialLinks: SocialLink[] = [
  { icon: Github, href: "#", label: "GitHub", color: "#64FFDA" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "#64FFDA" },
  { icon: Instagram, href: "#", label: "Instagram", color: "#FF00FF" },
  { icon: Twitter, href: "#", label: "Twitter", color: "#64FFDA" },
  { icon: Facebook, href: "#", label: "Facebook", color: "#FF00FF" },
];

export const quickLinks: QuickLink[] = [
  { name: "About addovedi", href: "#" },
  { name: "Schedule", href: "#" },
  { name: "Contact Us", href: "#" },
  { name: "Privacy Policy", href: "#" },
];
