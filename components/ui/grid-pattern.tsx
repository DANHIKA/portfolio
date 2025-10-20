"use client";

import { motion } from "framer-motion";

export const GridPattern = () => {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 grid grid-cols-6 gap-2 transform rotate-12 scale-150"
        style={{ maskImage: "radial-gradient(circle at center, transparent 0%, black 100%)" }}
      >
        {Array.from({ length: 36 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: Math.random() * 0.5,
              duration: 0.5,
              type: "spring",
            }}
            className="w-full h-8 rounded-full bg-linear-to-r from-neutral-400/10 to-neutral-300/10 border border-neutral-700/50"
          />
        ))}
      </motion.div>
    </div>
  );
}; 