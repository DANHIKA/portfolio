"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CalendarComponent() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const [activeDay, setActiveDay] = useState(15);

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, i) => (
          <div key={i} className="text-xs text-center text-neutral-500 font-medium">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 21 }, (_, i) => i + 1).map((day) => (
          <motion.button
            key={day}
            className="w-7 h-7 rounded-lg text-xs font-medium transition-colors"
            style={{
              backgroundColor: activeDay === day ? '#3b82f6' : 'transparent',
              color: activeDay === day ? '#ffffff' : '#9ca3af'
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveDay(day)}
          >
            {day}
          </motion.button>
        ))}
      </div>
    </div>
  );
} 