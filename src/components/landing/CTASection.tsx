"use client";

import { motion } from "framer-motion";

const racingStats = [
  {
    number: "500+",
    label: "Racers",
    color: "red",
  },
  {
    number: "48",
    label: "Hours",
    color: "yellow",
  },
  {
    number: "₹5L+",
    label: "Prize Money",
    color: "green",
  },
];

const pitStopButtons = [
  {
    text: "📋 RACE SCHEDULE",
    color: "yellow",
  },
  {
    text: "🏆 LEADERBOARD",
    color: "red",
  },
];

export default function CTASection() {
  return (
    <motion.div
      id="cta-section"
      className="h-screen flex justify-center items-center text-center px-4 relative"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Racing track background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Racing track lines */}
        <div className="absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white to-transparent opacity-60" />
        <div className="absolute top-1/2 -translate-y-8 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-80" />
        <div className="absolute top-1/2 translate-y-8 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-80" />

        {/* Checkered flag pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <div className="grid grid-cols-8 grid-rows-8 h-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className={`${
                  Math.floor(i / 8) % 2 === i % 2 ? "bg-white" : "bg-black"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Racing stripes */}
        <div className="absolute top-0 left-1/4 w-4 h-full bg-gradient-to-b from-red-500 via-white to-red-500 opacity-20" />
        <div className="absolute top-0 right-1/4 w-4 h-full bg-gradient-to-b from-blue-500 via-white to-blue-500 opacity-20" />
      </div>

      <div className="relative z-10">
        {/* Racing countdown */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl sm:text-6xl md:text-7xl font-black mb-4 font-mono"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-green-400">
              READY TO RACE?
            </span>
          </motion.h2>
          <motion.p
            className="text-xl sm:text-2xl text-slate-300 font-bold mb-8 tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            🏁 START YOUR ENGINES 🏁
          </motion.p>
        </motion.div>

        {/* Enhanced racing CTA button */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group relative overflow-hidden text-2xl md:text-3xl px-12 py-6 md:px-16 md:py-8 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white font-black uppercase rounded-lg border-4 border-white hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-500 transform hover:scale-110 pointer-events-auto"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-4 font-mono tracking-wider">
              🏎️ JOIN THE RACE 🏎️
            </span>
            {/* Racing stripes on button */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-orange-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 w-full h-2 bg-white opacity-50" />
            <div className="absolute bottom-0 left-0 w-full h-2 bg-white opacity-50" />
            <div className="absolute inset-y-0 left-0 w-2 bg-white opacity-30" />
            <div className="absolute inset-y-0 right-0 w-2 bg-white opacity-30" />
          </motion.button>

          {/* Pit stop secondary actions */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
          >
            {pitStopButtons.map((button, index) => (
              <motion.button
                key={index}
                className={`px-8 py-3 border-4 border-${button.color}-400 text-${button.color}-400 font-bold font-mono rounded-lg hover:bg-${button.color}-400 hover:text-white transition-all duration-300 pointer-events-auto uppercase tracking-wide`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {button.text}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Racing stats with speedometer style */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          viewport={{ once: true }}
        >
          {racingStats.map((stat, index) => (
            <motion.div
              key={index}
              className={`text-center p-4 border-2 border-${stat.color}-400 rounded-lg bg-slate-900/50 hover:bg-${stat.color}-400/10 transition-all duration-300`}
              whileHover={{ scale: 1.1 }}
            >
              <div
                className={`text-4xl font-black text-${stat.color}-400 font-mono`}
              >
                {stat.number}
              </div>
              <div className="text-slate-300 font-bold uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Racing flag animation */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          viewport={{ once: true }}
        >
          <div className="text-6xl animate-bounce">🏁</div>
        </motion.div>
      </div>
    </motion.div>
  );
}
