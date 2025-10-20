"use client";

import { motion } from "framer-motion";

export default function AnalyticsComponent() {
  const data = [
    { value: 35, label: "Mon" },
    { value: 45, label: "Tue" },
    { value: 40, label: "Wed" },
    { value: 65, label: "Thu" },
    { value: 55, label: "Fri" }
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="space-y-3">
      <div className="flex items-end justify-between h-20 px-1">
        {data.map((item, i) => (
          <div key={item.label} className="flex flex-col items-center gap-2 group">
            <motion.div
              className="w-6 bg-linear-to-t from-blue-500 to-violet-500 rounded-t-sm relative"
              initial={{ height: 0 }}
              animate={{ height: `${(item.value / maxValue) * 80}px` }}
              transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                {item.value}k
              </div>
            </motion.div>
            <span className="text-xs text-neutral-500">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 