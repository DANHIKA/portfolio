"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function APIComponent() {
  const [status, setStatus] = useState('loading');
  
  useEffect(() => {
    const timer = setTimeout(() => setStatus('success'), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-mono text-xs space-y-2">
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${status === 'success' ? 'bg-emerald-500' : 'bg-yellow-500 animate-pulse'}`} />
        <span className="text-neutral-400">API Status</span>
      </div>
      
      {status === 'loading' ? (
        <div className="space-y-1">
          <div className="h-3 bg-neutral-700 rounded animate-pulse" />
          <div className="h-3 bg-neutral-700 rounded animate-pulse w-3/4" />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-0.5"
        >
          <div className="text-emerald-400">GET /api/data</div>
          <div className="text-emerald-300">200 OK</div>
          <div className="text-neutral-500">{"{ status: \"success\" }"}</div>
        </motion.div>
      )}
    </div>
  );
} 