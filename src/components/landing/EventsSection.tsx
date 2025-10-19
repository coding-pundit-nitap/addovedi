"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function EventsSection() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<{
    title: string;
    content: string;
  } | null>(null);
  return (
    <motion.div
      id="events-section"
      className="min-h-screen flex justify-center items-center text-center px-4 relative py-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 via-slate-800 to-transparent opacity-30" />
        <div className="absolute bottom-16 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50" />
      </div>

      <div className="max-w-6xl relative z-10">
        <motion.div className="mb-12" variants={itemVariants}>
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

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group relative bg-gradient-to-br from-blue-900/30 to-blue-600/10 backdrop-blur-sm p-6 rounded-xl border-2 border-blue-400/30 hover:border-blue-400 transition-colors duration-300 hover:shadow-2xl hover:shadow-blue-400/30"
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
              competitions.
            </p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-blue-400 text-sm font-semibold">
                VELOCITY
              </span>
              <span className="text-indigo-400">⚡⚡⚡</span>
            </div>
            <div className="mt-4 flex justify-end">
              <Button
                variant="outline"
                size="sm"
                className="border-[#050A18] bg-[#030610] text-[#94a3b8] hover:bg-[#050A18] hover:text-white"
                onClick={() => {
                  setSelected({
                    title: "AI Racing League",
                    content:
                      "Push the limits of artificial intelligence in high-speed competitions.",
                  });
                  setOpen(true);
                }}
              >
                View More
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group relative bg-gradient-to-br from-purple-900/30 to-purple-600/10 backdrop-blur-sm p-6 rounded-xl border-2 border-purple-400/30 hover:border-purple-400 transition-colors duration-300 hover:shadow-2xl hover:shadow-purple-400/30"
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
            <div className="mt-4 flex justify-end">
              <Button
                variant="outline"
                size="sm"
                className="border-[#050A18] bg-[#030610] text-[#94a3b8] hover:bg-[#050A18] hover:text-white"
                onClick={() => {
                  setSelected({
                    title: "CyberSec Grand Prix",
                    content:
                      "Navigate through security challenges with precision. Master the art of ethical hacking in our capture-the-flag tournament.",
                  });
                  setOpen(true);
                }}
              >
                View More
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group relative bg-gradient-to-br from-indigo-900/30 to-indigo-600/10 backdrop-blur-sm p-6 rounded-xl border-2 border-indigo-400/30 hover:border-indigo-400 transition-colors duration-300 hover:shadow-2xl hover:shadow-indigo-400/30"
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
            <div className="mt-4 flex justify-end">
              <Button
                variant="outline"
                size="sm"
                className="border-[#050A18] bg-[#030610] text-[#94a3b8] hover:bg-[#050A18] hover:text-white"
                onClick={() => {
                  setSelected({
                    title: "Web3 Velocity Cup",
                    content:
                      "Accelerate into the future of decentralized technology. Build blockchain solutions and race in the metaverse arena.",
                  });
                  setOpen(true);
                }}
              >
                View More
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-r from-slate-800/30 to-blue-900/20 backdrop-blur-sm p-4 rounded-lg border border-blue-400/30 hover:border-blue-400 transition-colors duration-300"
          >
            <h4 className="text-blue-400 font-bold text-lg">
              ⚡ LIGHTNING ROUND
            </h4>
            <p className="text-slate-300 text-sm">
              Quick-fire coding challenges
            </p>
            <div className="mt-4 flex justify-end">
              <Button
                variant="outline"
                size="sm"
                className="border-[#050A18] bg-[#030610] text-[#94a3b8] hover:bg-[#050A18] hover:text-white"
                onClick={() => {
                  setSelected({
                    title: "Lightning Round",
                    content: "Quick-fire coding challenges.",
                  });
                  setOpen(true);
                }}
              >
                View More
              </Button>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-r from-slate-800/30 to-purple-900/20 backdrop-blur-sm p-4 rounded-lg border border-purple-400/30 hover:border-purple-400 transition-colors duration-300"
          >
            <h4 className="text-purple-400 font-bold text-lg">
              🏆 GRAND FINALE
            </h4>
            <p className="text-slate-300 text-sm">Ultimate championship race</p>
            <div className="mt-4 flex justify-end">
              <Button
                variant="outline"
                size="sm"
                className="border-[#050A18] bg-[#030610] text-[#94a3b8] hover:bg-[#050A18] hover:text-white"
                onClick={() => {
                  setSelected({
                    title: "Grand Finale",
                    content: "Ultimate championship race.",
                  });
                  setOpen(true);
                }}
              >
                View More
              </Button>
            </div>
          </motion.div>
        </motion.div>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={selected?.title || "Event Details"}
        >
          <div className="text-sm text-slate-300">{selected?.content}</div>
        </Modal>
      </div>
    </motion.div>
  );
}
