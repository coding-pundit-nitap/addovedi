"use client";

import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";

export function RegistrationCardSkeleton() {
  return (
    <Card className="">
      <div className="space-y-4">
        {/* Header skeleton */}
        <div className="flex items-center justify-between">
          <div className="space-y-2 flex-1">
            <motion.div
              className="h-6 rounded w-3/4"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.div
              className="h-4 rounded w-1/2"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
            />
          </div>
          <motion.div
            className="h-10 w-10 rounded"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          />
        </div>

        {/* Info skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="space-y-1"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            >
              <div className="h-3 rounded w-1/3" />
              <div className="h-4 rounded w-2/3" />
            </motion.div>
          ))}
        </div>

        {/* Participants skeleton */}
        <div className="space-y-2 pt-4 border-t">
          <motion.div
            className="h-4 rounded w-1/4"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <div className="space-y-2">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-8 rounded"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

export function RegistrationListSkeleton() {
  return (
    <div className="space-y-6">
      {[1, 2, 3, 4, 5].map((i) => (
        <RegistrationCardSkeleton key={i} />
      ))}
    </div>
  );
}
