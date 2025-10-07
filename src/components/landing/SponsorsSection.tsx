"use client";

import { motion } from "framer-motion";

const sponsorTiers = [
  {
    position: 1,
    title: "GOLD SPONSOR",
    name: "TechRace Industries",
    icon: "🏆",
    color: "blue",
    height: "h-32",
    textSize: "text-3xl sm:text-4xl",
  },
  {
    position: 2,
    title: "SILVER SPONSOR",
    name: "TechCorp",
    icon: "🥈",
    color: "purple",
    height: "h-20",
    textSize: "text-2xl sm:text-3xl",
  },
  {
    position: 3,
    title: "BRONZE SPONSOR",
    name: "InnovateLab",
    icon: "🥉",
    color: "indigo",
    height: "h-20",
    textSize: "text-2xl sm:text-3xl",
  },
];

const additionalSponsors = ["TechSoft", "DataForce", "CloudLab", "CodeNinja"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 12 },
  },
};

export default function SponsorsSection() {
  return (
    <motion.div
      id="sponsors-section"
      className="min-h-screen flex justify-center items-center text-center px-4 relative py-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-blue-400/10 to-transparent opacity-50" />
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        <motion.div className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4">
            TECH{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
              SPONSORS
            </span>
          </h2>
          <p className="text-xl text-slate-300 font-semibold">
            ⚡ INNOVATION PARTNERS ⚡
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-end justify-center gap-8 mb-12"
          variants={containerVariants}
        >
          {sponsorTiers.map((sponsor) => (
            <motion.div
              key={sponsor.position}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`group relative bg-gradient-to-br ${
                sponsor.color === "blue"
                  ? "from-blue-600/30 to-blue-400/10 border-blue-400/50 hover:border-blue-400 hover:shadow-blue-400/40"
                  : sponsor.color === "purple"
                    ? "from-slate-700/30 to-slate-500/10 border-purple-400/30 hover:border-purple-400 hover:shadow-purple-400/30"
                    : "from-indigo-700/30 to-indigo-500/10 border-indigo-400/30 hover:border-indigo-400 hover:shadow-indigo-400/30"
              } backdrop-blur-sm p-8 rounded-xl border-2 transition-all duration-300 hover:shadow-2xl`}
            >
              <div
                className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r ${
                  sponsor.color === "blue"
                    ? "from-blue-400 to-blue-600"
                    : sponsor.color === "purple"
                      ? "from-purple-400 to-purple-600"
                      : "from-indigo-400 to-indigo-600"
                } rounded-full flex items-center justify-center text-white font-bold`}
              >
                {sponsor.position}
              </div>
              <div
                className={
                  sponsor.position === 1 ? "text-6xl mb-6" : "text-4xl mb-4"
                }
              >
                {sponsor.icon}
              </div>
              <h3
                className={`text-${sponsor.color}-400 ${sponsor.position === 1 ? "text-2xl" : "text-xl"} font-bold mb-${sponsor.position === 1 ? "4" : "2"}`}
              >
                {sponsor.title}
              </h3>
              <p
                className={`${sponsor.textSize} font-bold text-slate-${sponsor.position === 1 ? "100" : "200"} opacity-${sponsor.position === 1 ? "90" : "70"} group-hover:opacity-100 transition-opacity`}
              >
                {sponsor.name}
              </p>
              <div className={sponsor.height}></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          variants={containerVariants}
        >
          {additionalSponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-slate-900/30 backdrop-blur-sm p-4 rounded-lg border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20"
            >
              <p className="text-lg font-semibold text-blue-400/80 group-hover:text-blue-400 transition-colors">
                {sponsor}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center" variants={itemVariants}>
          <p className="text-slate-400 text-lg font-semibold">
            ⚡ POWERED BY INNOVATION ⚡
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
