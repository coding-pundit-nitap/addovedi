"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div
      id="hero-section"
      className="h-screen flex justify-center items-center text-center px-4 relative overflow-hidden z-50"
    >
      {/* Racing-themed background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Checkered flag pattern overlay */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div
                key={i}
                className={`${
                  Math.floor(i / 12) % 2 === i % 2 ? "bg-white" : "bg-black"
                } opacity-20`}
              />
            ))}
          </div>
        </div>

        {/* Tech stripes */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 opacity-25 animate-pulse" />
        <div
          className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-blue-500 opacity-25 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="relative z-50">
        {/* Tech status lights */}
        <div className="flex justify-center mb-8 space-x-4">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50" />
          <div
            className="w-4 h-4 bg-purple-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50"
            style={{ animationDelay: "0.3s" }}
          />
          <div
            className="w-4 h-4 bg-indigo-500 rounded-full animate-pulse shadow-lg shadow-indigo-500/50"
            style={{ animationDelay: "0.6s" }}
          />
        </div>

        {/* main title with tech effects */}
        <div className="relative z-50 mt-16 sm:mt-0">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-wider mb-4 relative z-50 drop-shadow-2xl">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 animate-pulse relative z-50 drop-shadow-lg">
              ADDOVEDI
            </span>
            <br />
            <span className="text-white font-bold text-3xl sm:text-5xl md:text-6xl tracking-widest relative z-50 drop-shadow-lg">
              TECH FEST
            </span>
          </h1>

          {/* Tech-themed subtitle */}
          <div className="relative">
            <p className="text-blue-400 text-xl sm:text-3xl md:text-5xl font-black mt-4">
              2025
            </p>
            <p className="text-slate-200 text-sm sm:text-lg md:text-xl font-semibold mt-2 tracking-wider">
              ⚡ RACE INTO THE FUTURE ⚡
            </p>
          </div>
        </div>

        {/* Tech stats/info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-blue-400/30 rounded-lg p-4 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20">
            <div className="text-blue-400 text-2xl font-bold">🚀</div>
            <div className="text-slate-100 text-lg font-semibold">
              HIGH SPEED
            </div>
            <div className="text-slate-300 text-sm">
              Innovation at Light Speed
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/30 rounded-lg p-4 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/20">
            <div className="text-purple-400 text-2xl font-bold">🏆</div>
            <div className="text-slate-100 text-lg font-semibold">
              CHAMPIONS
            </div>
            <div className="text-slate-300 text-sm">Winners Take All</div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-indigo-400/30 rounded-lg p-4 hover:border-indigo-400 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-400/20">
            <div className="text-indigo-400 text-2xl font-bold">⚡</div>
            <div className="text-slate-100 text-lg font-semibold">POWER UP</div>
            <div className="text-slate-300 text-sm">Turbo-Charged Tech</div>
          </div>
        </div>

        {/* Call-to-action with RC racing theme */}
        <div className="mt-12">
          <motion.button
            className="group relative overflow-hidden px-12 py-6 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white font-black text-xl uppercase rounded-lg border-4 border-white hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 pointer-events-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-3 font-mono tracking-wider">
              🏎️ START ENGINES 🏎️
            </span>
            {/* Racing stripes on button */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-orange-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-0 left-0 w-full h-1 bg-white opacity-60" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white opacity-60" />
            <div className="absolute inset-y-0 left-0 w-1 bg-white opacity-40" />
            <div className="absolute inset-y-0 right-0 w-1 bg-white opacity-40" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
