"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  const [startCarAnimation, setStartCarAnimation] = useState(false);

  const handleStartEngines = () => {
    setStartCarAnimation(false);
    setTimeout(() => {
      setStartCarAnimation(true);
    }, 10);
  };

  return (
    <motion.div
      id="hero-section"
      className="min-h-screen flex justify-center items-center text-center px-4 py-20 relative overflow-hidden"
      initial="hidden"
      animate="visible" // Animate on initial load
      variants={containerVariants}
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 opacity-25 animate-pulse" />
        <div
          className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-blue-500 opacity-25 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="relative z-50">
        <motion.div variants={itemVariants}>
          <div className="flex justify-center mb-8 space-x-4">
            <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50" />
            <div
              className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50"
              style={{ animationDelay: "0.3s" }}
            />
            <div
              className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg shadow-indigo-500/50"
              style={{ animationDelay: "0.6s" }}
            />
          </div>
        </motion.div>

        <motion.div
          className="relative z-50 mt-8 sm:mt-0"
          variants={itemVariants}
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-wider mb-4 relative z-50 drop-shadow-2xl">
            <Image
              src="/title.png"
              alt="Addovedi Tech Fest"
              width={1000}
              height={10}
              className="mx-auto"
            />
            <br />
            <span className="text-white font-bold text-3xl sm:text-5xl md:text-6xl tracking-widest relative z-50 drop-shadow-lg">
              TECH FEST
            </span>
          </h1>
          <div className="relative">
            <p className="text-blue-400 text-xl sm:text-3xl md:text-5xl font-black mt-4">
              2025
            </p>
            <p className="text-slate-200 text-sm sm:text-lg md:text-xl font-semibold mt-2 tracking-wider">
              ⚡ RACE INTO THE FUTURE ⚡
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto"
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="bg-slate-900/50 backdrop-blur-sm border border-blue-400/30 rounded-lg p-4 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20"
          >
            <div className="text-blue-400 text-2xl font-bold">🚀</div>
            <div className="text-slate-100 text-lg font-semibold">
              HIGH SPEED
            </div>
            <div className="text-slate-300 text-sm">
              Innovation at Light Speed
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/30 rounded-lg p-4 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/20"
          >
            <div className="text-purple-400 text-2xl font-bold">🏆</div>
            <div className="text-slate-100 text-lg font-semibold">
              CHAMPIONS
            </div>
            <div className="text-slate-300 text-sm">Winners Take All</div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-slate-900/50 backdrop-blur-sm border border-indigo-400/30 rounded-lg p-4 hover:border-indigo-400 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-400/20"
          >
            <div className="text-indigo-400 text-2xl font-bold">⚡</div>
            <div className="text-slate-100 text-lg font-semibold">POWER UP</div>
            <div className="text-slate-300 text-sm">Turbo-Charged Tech</div>
          </motion.div>
        </motion.div>

        <motion.div className="mt-12" variants={itemVariants}>
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
            <span className="relative z-10 flex items-center justify-center gap-3 font-mono tracking-wider">
              🏎️ START ENGINES 🏎️
            </span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
