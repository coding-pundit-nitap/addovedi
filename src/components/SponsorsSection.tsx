// src/components/SponsorsSection.tsx

"use client";

import { motion } from "framer-motion";

import { sponsors } from "@/data/sponsors";

export function SponsorsSection() {
  return (
    <section className="py-20 px-4 relative bg-navy-deep font-poppins">
      {/* Subtle vignette, no grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.25)_0%,_transparent_75%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* The h2 style is corrected here to a purple color */}
          <h2 className="mb-4 font-bold text-purple-400 text-[clamp(2.5rem,5vw,3.5rem)]">
            Our Sponsors
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Proudly supported by industry leaders who believe in innovation and
            technology
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {sponsors.map((sponsor, idx) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: 0.06 * idx,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-gray-800 rounded-lg p-8 h-32 flex items-center justify-center group-hover:border-accent-teal/50 transition-all duration-300">
                <div className="text-center font-semibold text-white/60 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl mb-1">{sponsor.name}</div>
                  <div className="text-xs text-accent-teal/60">
                    {sponsor.category}
                  </div>
                </div>
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle at center, #64FFDA15, transparent 70%)",
                    boxShadow: "0 0 20px #64FFDA20",
                  }}
                />
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-accent-teal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-accent-magenta/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-accent-magenta/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-accent-teal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-white/60 mb-6">Want to partner with us?</p>
          <button className="relative px-6 py-3 border border-accent-magenta text-accent-magenta rounded-lg hover:bg-accent-magenta hover:text-white transition-all duration-300 group font-medium">
            <span className="relative z-10">Become a Sponsor</span>
            <div className="absolute inset-0 bg-accent-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
          </button>
        </div>
      </div>
    </section>
  );
}
