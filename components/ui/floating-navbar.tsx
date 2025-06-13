"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export const FloatingNav = () => {
  const [activeTab, setActiveTab] = useState("Home");
  
  const tabs = ["Home", "About", "Projects", "Contact"];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="h-14 w-64 rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 shadow-xl"
    >
      <nav className="flex items-center justify-around h-full px-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-2 py-1 text-sm transition-colors ${
              activeTab === tab ? "text-white" : "text-white/50"
            }`}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="pill"
                className="absolute inset-0 rounded-lg bg-white/10"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </nav>
    </motion.div>
  );
}; 