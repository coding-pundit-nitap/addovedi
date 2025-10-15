"use client";

import { motion } from "framer-motion";
import { Database, TrendingUp } from "lucide-react";
import { Suspense } from "react";

import RegistrationsList from "@/components/science-exhibition/RegistrationsList";

export default function AdminScienceExhibitionPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Subtle grid pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 min-h-screen pt-24 pb-16">
        <div className="container  mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-8 h-8 bg-neutral-900" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Science Exhibition Admin
              </h1>
            </div>
            <p className="text-neutral-400  text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Manage and view all science exhibition registrations
            </p>
          </motion.div>

          {/* Registrations List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <RegistrationsList />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
