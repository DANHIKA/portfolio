"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileCard() {
  const teamMembers = [
    { seed: "Sarah", color: "b6e3f4" },
    { seed: "Alex", color: "c0aede" },
    { seed: "Jamie", color: "ffd5dc" },
    { seed: "Taylor", color: "ffdfbf" }
  ];

  return (
    <div className="w-full h-full p-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="relative w-10 h-10">
          <Image
            src="https://api.dicebear.com/7.x/notionists/svg?seed=Sarah&backgroundColor=b6e3f4"
            alt="Nosipho"
            fill
            className="rounded-full"
          />
        </div>
        <div>
          <h4 className="text-sm font-medium">Nosipho</h4>
          <p className="text-xs text-neutral-400">Product Designer</p>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex gap-2 mt-4">
          <div className="flex -space-x-2">
            {teamMembers.map((member, i) => (
              <div key={i} className="relative w-6 h-6">
                <motion.div
                  className="relative w-full h-full"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <Image
                    src={`https://api.dicebear.com/7.x/notionists/svg?seed=${member.seed}&backgroundColor=${member.color}`}
                    alt={`Team member ${member.seed}`}
                    fill
                    className="rounded-full border-2"
                  />
                </motion.div>
              </div>
            ))}
          </div>
          <span className="text-xs text-neutral-400 ml-2">+3 others</span>
        </div>
      </div>
    </div>
  );
} 