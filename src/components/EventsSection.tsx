import { Code2, Cog, Cpu, Lightbulb, Trophy, Zap } from "lucide-react";

import { Card } from "../ui/card";

const events = [
  {
    id: 1,
    name: "Hackathons",
    description: "Build innovative solutions in 48 hours",
    icon: Code2,
    color: "#64FFDA",
  },
  {
    id: 2,
    name: "Workshops",
    description: "Learn cutting-edge technologies",
    icon: Cog,
    color: "#FF00FF",
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

export function EventsSection() {
  return (
    <section
      className="py-20 px-4 relative"
      style={{ backgroundColor: "#0A192F" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-[#64FFDA]/30" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="mb-4 relative inline-block"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "700",
              background: "linear-gradient(45deg, #64FFDA, #FF00FF)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Explore Our Events
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#64FFDA] to-[#FF00FF]" />
          </h2>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={event.id}>
              <Card className="relative group h-full bg-black/40 border-gray-800 backdrop-blur-sm overflow-hidden hover:border-[#64FFDA]/50 transition-all duration-300">
                {/* Hover Glow Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${event.color}15, transparent 70%)`,
                  }}
                />

                <div className="p-8 relative z-10">
                  {/* Icon */}
                  <div
                    className="mb-6 inline-flex p-4 rounded-full border-2"
                    style={{
                      borderColor: event.color,
                      backgroundColor: `${event.color}10`,
                    }}
                  >
                    <event.icon size={32} style={{ color: event.color }} />
                  </div>

                  {/* Content */}
                  <h3
                    className="mb-3"
                    style={{
                      fontSize: "1.5rem",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: "600",
                      color: event.color,
                    }}
                  >
                    {event.name}
                  </h3>

                  <p
                    className="text-white/70 mb-6"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      lineHeight: "1.6",
                    }}
                  >
                    {event.description}
                  </p>

                  {/* Learn More Link */}
                  <button
                    className="relative group/btn inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    Learn More
                    <span className="text-xl">→</span>
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#64FFDA] to-[#FF00FF]" />
                  </button>
                </div>

                {/* Corner Accent */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 opacity-20"
                  style={{
                    background: `linear-gradient(135deg, ${event.color}, transparent)`,
                  }}
                />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
