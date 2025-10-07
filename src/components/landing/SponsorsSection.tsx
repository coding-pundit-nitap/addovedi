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
    delay: 0.1,
  },
  {
    position: 2,
    title: "SILVER SPONSOR",
    name: "TechCorp",
    icon: "🥈",
    color: "purple",
    height: "h-20",
    textSize: "text-2xl sm:text-3xl",
    delay: 0.15,
  },
  {
    position: 3,
    title: "BRONZE SPONSOR",
    name: "InnovateLab",
    icon: "🥉",
    color: "indigo",
    height: "h-20",
    textSize: "text-2xl sm:text-3xl",
    delay: 0.2,
  },
];

const additionalSponsors = ["TechSoft", "DataForce", "CloudLab", "CodeNinja"];

export default function SponsorsSection() {
  return (
    <motion.div
      id="sponsors-section"
      className="min-h-screen flex justify-center items-center text-center px-4 relative py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{ scrollMarginTop: "64px" }}
    >
      {/* Tech podium background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-blue-400/10 to-transparent opacity-50" />
      </div>

      <div className="relative z-10 max-w-6xl">
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
              SPONSORS
            </span>
          </h2>
          <p className="text-xl text-slate-300 font-semibold">
            ⚡ INNOVATION PARTNERS ⚡
          </p>
        </motion.div>

        {/* Sponsor podium layout */}
        <motion.div
          className="flex flex-col md:flex-row items-end justify-center gap-8 mb-12"
          initial={{ opacity: 1, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {sponsorTiers.map((sponsor) => (
            <motion.div
              key={sponsor.position}
              className={`group relative bg-gradient-to-br ${
                sponsor.color === "blue"
                  ? "from-blue-600/30 to-blue-400/10 border-blue-400/50 hover:border-blue-400 hover:shadow-blue-400/40"
                  : sponsor.color === "purple"
                    ? "from-slate-700/30 to-slate-500/10 border-purple-400/30 hover:border-purple-400 hover:shadow-purple-400/30"
                    : "from-indigo-700/30 to-indigo-500/10 border-indigo-400/30 hover:border-indigo-400 hover:shadow-indigo-400/30"
              } backdrop-blur-sm p-8 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
              initial={{ opacity: 1, y: 10, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, delay: sponsor.delay }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
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

              {sponsor.position === 1 ? (
                <motion.div
                  className="text-6xl mb-6"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {sponsor.icon}
                </motion.div>
              ) : (
                <div className="text-4xl mb-4">{sponsor.icon}</div>
              )}

              <h3
                className={`text-${sponsor.color}-400 ${sponsor.position === 1 ? "text-2xl" : "text-xl"} font-bold mb-${sponsor.position === 1 ? "4" : "2"}`}
              >
                {sponsor.title}
              </h3>

              <p
                className={`${sponsor.textSize} font-bold text-slate-${sponsor.position === 1 ? "100" : "200"} opacity-${sponsor.position === 1 ? "90" : "70"} hover:opacity-100 transition-opacity`}
              >
                {sponsor.name}
              </p>

              <div className={sponsor.height}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional sponsors */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 1, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {additionalSponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              className="bg-slate-900/30 backdrop-blur-sm p-4 rounded-lg border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20"
              initial={{ opacity: 1, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 0.25 + index * 0.03 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-lg font-semibold text-blue-400/80 hover:text-blue-400 transition-colors">
                {sponsor}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 1, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 text-lg font-semibold">
            ⚡ POWERED BY INNOVATION ⚡
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
