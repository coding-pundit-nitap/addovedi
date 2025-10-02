"use client";

import { motion } from "framer-motion";

export default function EventsSection() {
  return (
    <motion.div
      id="events-section"
      className="min-h-screen flex justify-center items-center text-center px-4 relative py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Tech grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 via-slate-800 to-transparent opacity-30" />
        <div className="absolute bottom-16 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50" />
      </div>

      <div className="max-w-6xl relative z-10">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4">
            TECH{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
              EVENTS
            </span>
          </h2>
          <p className="text-xl text-slate-300 font-semibold">
            ⚡ CHOOSE YOUR TRACK ⚡
          </p>
        </motion.div>

        {/* Enhanced grid with tech theme */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          initial={{ opacity: 0.8, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Speed Track - AI/ML */}
          <motion.div
            className="group relative bg-gradient-to-br from-blue-900/30 to-blue-600/10 backdrop-blur-sm p-6 rounded-xl border-2 border-blue-400/30 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/30 transform hover:scale-105"
            initial={{ opacity: 0.8, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
          >
            <div className="absolute top-2 right-2 text-2xl">🤖</div>
            <div className="text-blue-400 text-4xl font-bold mb-2">01</div>
            <h3 className="text-blue-400 text-xl md:text-2xl font-bold mb-4">
              SPEED TRACK
            </h3>
            <h4 className="text-slate-100 text-lg font-semibold mb-2">
              AI Racing League
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Push the limits of artificial intelligence in high-speed
              competitions. Train your models to dominate the racing circuit.
            </p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-blue-400 text-sm font-semibold">
                VELOCITY
              </span>
              <span className="text-indigo-400">⚡⚡⚡</span>
            </div>
          </motion.div>

          {/* Drift Track - CyberSec */}
          <motion.div
            className="group relative bg-gradient-to-br from-purple-900/30 to-purple-600/10 backdrop-blur-sm p-6 rounded-xl border-2 border-purple-400/30 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-400/30 transform hover:scale-105"
            initial={{ opacity: 0.8, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
          >
            <div className="absolute top-2 right-2 text-2xl">🛡️</div>
            <div className="text-purple-400 text-4xl font-bold mb-2">02</div>
            <h3 className="text-purple-400 text-xl md:text-2xl font-bold mb-4">
              DRIFT TRACK
            </h3>
            <h4 className="text-slate-100 text-lg font-semibold mb-2">
              CyberSec Grand Prix
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Navigate through security challenges with precision. Master the
              art of ethical hacking in our capture-the-flag tournament.
            </p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-purple-400 text-sm font-semibold">
                PRECISION
              </span>
              <span className="text-blue-400">🔒🔒🔒</span>
            </div>
          </motion.div>

          {/* Turbo Track - Web3 */}
          <motion.div
            className="group relative bg-gradient-to-br from-indigo-900/30 to-indigo-600/10 backdrop-blur-sm p-6 rounded-xl border-2 border-indigo-400/30 hover:border-indigo-400 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-400/30 transform hover:scale-105"
            initial={{ opacity: 0.8, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
          >
            <div className="absolute top-2 right-2 text-2xl">🌐</div>
            <div className="text-indigo-400 text-4xl font-bold mb-2">03</div>
            <h3 className="text-indigo-400 text-xl md:text-2xl font-bold mb-4">
              TURBO TRACK
            </h3>
            <h4 className="text-slate-100 text-lg font-semibold mb-2">
              Web3 Velocity Cup
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Accelerate into the future of decentralized technology. Build
              blockchain solutions and race in the metaverse arena.
            </p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-indigo-400 text-sm font-semibold">
                FUTURE TECH
              </span>
              <span className="text-purple-400">⚙️⚙️⚙️</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional tech events */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
          initial={{ opacity: 0.8, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-r from-slate-800/30 to-blue-900/20 backdrop-blur-sm p-4 rounded-lg border border-blue-400/30 hover:border-blue-400 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <h4 className="text-blue-400 font-bold text-lg">
              ⚡ LIGHTNING ROUND
            </h4>
            <p className="text-slate-300 text-sm">
              Quick-fire coding challenges
            </p>
          </motion.div>
          <motion.div
            className="bg-gradient-to-r from-slate-800/30 to-purple-900/20 backdrop-blur-sm p-4 rounded-lg border border-purple-400/30 hover:border-purple-400 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <h4 className="text-purple-400 font-bold text-lg">
              🏆 GRAND FINALE
            </h4>
            <p className="text-slate-300 text-sm">Ultimate championship race</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
