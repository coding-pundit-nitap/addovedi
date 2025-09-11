"use client";

import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { events } from "@/data/events";

export function EventsSection() {
  return (
    <section className="py-20 px-4 relative bg-navy font-poppins">
      {/* Subtle vignette, no grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.25)_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 relative inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-magenta text-[clamp(2.5rem,5vw,4rem)]">
            Explore Our Events
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-teal to-accent-magenta" />
          </h2>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, idx) => {
            const Icon = event.icon; // Assign component to a variable with a capital letter
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: 0.06 * idx,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Card className="relative group h-full bg-black/40 border-gray-800 backdrop-blur-sm overflow-hidden hover:border-accent-teal/50 transition-all duration-300 hover:-translate-y-2.5">
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
                      className="mb-6 inline-flex p-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-105"
                      style={{
                        borderColor: event.color,
                        backgroundColor: `${event.color}10`,
                      }}
                    >
                      <Icon size={32} style={{ color: event.color }} />
                    </div>

                    {/* Content */}
                    <h3
                      className="mb-3 text-2xl font-semibold"
                      style={{ color: event.color }}
                    >
                      {event.name}
                    </h3>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Learn More Link */}
                    <button className="relative group/btn inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 font-medium">
                      Learn More
                      <span className="text-xl transition-transform duration-300 group-hover/btn:translate-x-1">
                        →
                      </span>
                      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent-teal to-accent-magenta w-full origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300" />
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
