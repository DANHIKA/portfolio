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
      className="h-14 w-64 rounded-2xl bg-background/30 backdrop-blur-sm border border-border shadow-xl"
    >
      <nav className="flex items-center justify-around h-full px-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-2 py-1 text-sm transition-colors ${
              activeTab === tab ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="pill"
                className="absolute inset-0 rounded-lg bg-muted"
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