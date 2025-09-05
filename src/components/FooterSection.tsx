import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

import { Button } from "../ui/button";

const socialLinks = [
  {
    icon: Github,
    href: "#",
    label: "GitHub",
    color: "#64FFDA",
  },
  {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn",
    color: "#64FFDA",
  },
  {
    icon: Instagram,
    href: "#",
    label: "Instagram",
    color: "#FF00FF",
  },
  {
    icon: Twitter,
    href: "#",
    label: "Twitter",
    color: "#64FFDA",
  },
  {
    icon: Facebook,
    href: "#",
    label: "Facebook",
    color: "#FF00FF",
  },
];

const quickLinks = [
  { name: "About addovedi", href: "#" },
  { name: "Schedule", href: "#" },
  { name: "Contact Us", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

export function FooterSection() {
  return (
    <footer
      className="relative py-20 px-4 overflow-hidden"
      style={{ backgroundColor: "#000014" }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-20 grid-rows-10 h-full w-full">
            {Array.from({ length: 200 }).map((_, i) => (
              <div key={i} className="border border-[#64FFDA]/20" />
            ))}
          </div>
        </div>

        {/* Floating Orbs */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-xl"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? "#64FFDA20" : "#FF00FF20",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Left Column - Quick Links */}
          <div>
            <h3
              className="mb-6"
              style={{
                fontSize: "1.5rem",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "600",
                color: "#64FFDA",
              }}
            >
              Quick Links
            </h3>
            <div className="space-y-4">
              {quickLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-white/70 hover:text-[#64FFDA] transition-colors duration-300 relative group"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {link.name}
                  <div className="absolute bottom-0 left-0 h-0.5 bg-[#64FFDA]" />
                </a>
              ))}
            </div>
          </div>

          {/* Center Column - Main CTA */}
          <div className="text-center">
            {/* Large Join Us Button */}
            <div className="mb-8">
              <Button
                className="relative px-12 py-6 text-xl rounded-full border-2 border-[#64FFDA] bg-transparent text-[#64FFDA] hover:bg-[#64FFDA] hover:text-black transition-all duration-300 group overflow-hidden"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "700",
                }}
              >
                <span className="relative z-10">Join Us Now</span>
                <div className="absolute inset-0 bg-[#64FFDA]" />

                {/* Pulsating Ring */}
                <div className="absolute inset-0 border-2 border-[#64FFDA] rounded-full" />
              </Button>
            </div>

            {/* Technical Quote */}
            <blockquote
              className="italic text-white/60 max-w-md mx-auto"
              style={{
                fontSize: "1.1rem",
                fontFamily: "'Poppins', sans-serif",
                lineHeight: "1.6",
              }}
            >
              "The best way to predict the future is to invent it."
              <footer className="text-[#64FFDA]/80 mt-2 not-italic text-sm"></footer>
            </blockquote>
          </div>

          {/* Right Column - Social Media */}
          <div className="lg:text-right">
            <h3
              className="mb-6"
              style={{
                fontSize: "1.5rem",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "600",
                color: "#FF00FF",
              }}
            >
              Follow Us
            </h3>
            <div className="flex lg:justify-end justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="relative group p-3 border border-gray-700 rounded-lg hover:border-opacity-50 transition-all duration-300"
                  style={{ borderColor: `${social.color}40` }}
                >
                  <social.icon
                    size={24}
                    style={{ color: social.color }}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Glow Effect */}
                  <div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${social.color}20, transparent 70%)`,
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p
            className="text-white/50"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            © 2025 addovedi. All rights reserved. Built with innovation and
            passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
