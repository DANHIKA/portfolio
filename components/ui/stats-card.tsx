"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function StatsCard() {
  const [contributions, setContributions] = useState(Array(35).fill({ count: 0 }));
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Generate random contribution data after component mounts
    const newContributions = Array(35).fill(null).map(() => ({
      count: Math.floor(Math.random() * 4)
    }));
    setContributions(newContributions);
    setIsLoaded(true);
  }, []);

  const getContributionColor = (count: number) => {
    if (count === 0) return "bg-neutral-800";
    if (count === 1) return "bg-emerald-900/70";
    if (count === 2) return "bg-emerald-700/70";
    return "bg-emerald-500/70";
  };

  return (
    <div className="w-full h-full p-4">
      <div className="space-y-4">

        <div className="grid grid-cols-7 gap-0.5 max-w-[200px]">
          {contributions.map((contribution, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.2, delay: i * 0.01 }}
              className={`aspect-square w-4 rounded-[2px] ${getContributionColor(contribution.count)}`}
              title={`${contribution.count} contributions`}
            />
          ))}
        </div>

        {/* <div className="pt-4 border-t border-neutral-800">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-2xl font-semibold">842</p>
              <p className="text-xs text-neutral-400">Total Contributions</p>
            </div>
            <motion.div
              className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </motion.div>
          </div>
        </div> */}
      </div>
    </div>
  );
} 