"use client";

import { motion } from "framer-motion";

export default function NotificationCard() {
  return (
    <div className="w-full h-full p-4">
      <div className="space-y-4">

        <div className="space-y-3">
          {[
            { icon: "💬", text: "New message from Alex", time: "2m ago", color: "blue" },
            // { icon: "🎉", text: "Project milestone reached", time: "1h ago", color: "green" },
            // { icon: "📅", text: "Team meeting scheduled", time: "3h ago", color: "purple" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-neutral-900/50 hover:bg-neutral-900/80 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center">
                <span className="text-sm">{item.icon}</span>
              </div>
              <div className="flex-1">
                <p className="text-sm">{item.text}</p>
                <p className="text-xs text-neutral-400">{item.time}</p>
              </div>
              <div className={`w-2 h-2 rounded-full bg-${item.color}-500`} />
            </motion.div>
          ))}
        </div>

        <button className="w-full text-xs text-neutral-400 hover:text-neutral-300 transition-colors">
          View all notifications
        </button>
      </div>
    </div>
  );
} 