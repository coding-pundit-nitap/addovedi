"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function CTASection() {
  const [startCarAnimation, setStartCarAnimation] = useState(false);

  const handleStartEngines = () => {
    setStartCarAnimation(false); // Reset first
    setTimeout(() => {
      setStartCarAnimation(true);
    }, 10); // Small delay to ensure re-render
  };
  return (
    <motion.div
      id="cta-section"
      className="h-screen flex justify-center items-center text-center px-4 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white to-transparent opacity-60" />
        <div className="absolute top-1/2 -translate-y-8 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-80" />
        <div className="absolute top-1/2 translate-y-8 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-80" />
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
        <div className="absolute top-0 left-1/4 w-4 h-full bg-gradient-to-b from-red-500 via-white to-red-500 opacity-20" />
        <div className="absolute top-0 right-1/4 w-4 h-full bg-gradient-to-b from-blue-500 via-white to-blue-500 opacity-20" />
      </div>

      <div className="relative z-10">
        <motion.div className="mb-8" variants={itemVariants}>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black mb-4 font-mono">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-green-400">
              READY TO RACE?
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-300 font-bold mb-8 tracking-wider">
            🏁 START YOUR ENGINES 🏁
          </p>
        </motion.div>

        <motion.div className="space-y-6" variants={itemVariants}>
          <motion.button
            className="group relative overflow-hidden px-12 py-6 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white font-black text-xl uppercase rounded-lg border-4 border-white hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStartEngines}
          >
            {/* Car Animation Overlay - only over button */}
            {startCarAnimation && (
              <motion.div
                className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-lg"
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                onAnimationComplete={() => setStartCarAnimation(false)}
              >
                {/* Car */}
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-3xl z-30">
                  🏎️
                </div>
                {/* Text clearing effect - solid overlay to hide text */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent from-10% via-gray-900 via-50% to-transparent to-90%" />
              </motion.div>
            )}
            <span className="z-10 flex items-center justify-center gap-3 font-mono ">
              🏎️ JOIN THE RACE 🏎️
            </span>
          </motion.button>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {pitStopButtons.map((button, index) => (
              <motion.button
                key={index}
                className={`px-8 py-3 border-4 border-${button.color}-400 text-${button.color}-400 font-bold font-mono rounded-lg hover:bg-${button.color}-400 hover:text-white transition-all duration-300 uppercase tracking-wide`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {button.text}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto"
          variants={containerVariants}
        >
          {racingStats.map((stat, index) => (
            <motion.div
              key={index}
              className={`text-center p-4 border-2 border-${stat.color}-400 rounded-lg bg-slate-900/50 hover:bg-${stat.color}-400/10 transition-all duration-300`}
              whileHover={{ scale: 1.1 }}
              variants={itemVariants}
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

        <motion.div
          className="mt-8 flex justify-center"
          variants={itemVariants}
        >
          <div className="text-6xl animate-bounce">🏁</div>
        </motion.div>
      </div>
    </motion.div>
  );
}
