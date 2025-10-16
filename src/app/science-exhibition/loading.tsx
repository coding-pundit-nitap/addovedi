"use client";

import { motion } from "framer-motion";

export default function ScienceExhibitionLoading() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-16 h-16 mx-auto mb-4 border-4 border-accent-teal border-t-transparent rounded-full"
        />
        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-accent-teal text-lg font-heading"
        >
          Loading Science Exhibition...
        </motion.p>
      </motion.div>
    </div>
  );
}
