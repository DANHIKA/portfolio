"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ChatCard() {
  const messages = [
    { 
      avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=b6e3f4",
      name: "Gomezgani Kaunda",
      message: "The new design looks amazing! 🎨",
      time: "2m",
      isUser: false 
    },
    // { 
    //   avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=User&backgroundColor=c0aede",
    //   name: "You",
    //   message: "Thanks! I've been working on improving the color scheme",
    //   time: "1m",
    //   isUser: true 
    // },
    // { 
    //   avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4",
    //   name: "Felix Chen",
    //   message: "The animations are smooth too ✨",
    //   time: "Just now",
    //   isUser: false 
    // }
  ];

  return (
    <div className="w-full h-full p-4">
      <div className="space-y-4">

        <div className="space-y-4">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className={`flex gap-3 ${msg.isUser ? 'flex-row-reverse' : ''}`}
            >
              <div className="relative w-8 h-8">
                <Image
                  src={msg.avatar}
                  alt={msg.name}
                  fill
                  className="rounded-full"
                />
              </div>
              <div className={`flex flex-col ${msg.isUser ? 'items-end' : ''}`}>
                <div className={`flex items-center gap-2 ${msg.isUser ? 'flex-row-reverse' : ''}`}>
                  <span className="text-xs font-medium">{msg.name}</span>
                  <span className="text-xs text-neutral-400">{msg.time}</span>
                </div>
                <div className={`mt-1 px-4 py-2 rounded-2xl ${
                  msg.isUser 
                    ? 'bg-blue-500 text-white rounded-tr-none' 
                    : 'bg-muted rounded-tl-none'
                }`}>
                  <p className="text-sm">{msg.message}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative mt-4">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full px-4 py-2 bg-muted rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-primary rounded-full hover:bg-blue-600 transition-colors">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 