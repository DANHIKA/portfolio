"use client";

import { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  onRef: (el: HTMLDivElement | null) => void;
  patternId: string;
}

export function BentoCard({ children, onRef, patternId }: BentoCardProps) {
  return (
    <div 
      ref={onRef}
      className="group relative overflow-hidden rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 bg-linear-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 shadow-sm transition-all duration-300"
    >
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id={patternId} x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" className="fill-current text-gray-400 dark:text-gray-500" />
          </pattern>
          <rect width="100%" height="100%" fill={`url(#${patternId})`} />
        </svg>
      </div>
      
      <div className="relative flex h-full flex-col bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8">
        {children}
      </div>
    </div>
  );
} 