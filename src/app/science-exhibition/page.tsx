"use client";

import { motion } from "framer-motion";

import ScienceExhibitionForm from "@/components/science-exhibition/RegistrationForm";

export default function ScienceExhibitionPage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* Subtle grid pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 min-h-screen pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 max-w-4xl"
        >
          <ScienceExhibitionForm />
        </motion.div>
      </div>
    </main>
  );
}
