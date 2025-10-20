"use client";

import { BentoCard } from "./shared/bento-card";

interface PerformanceCardProps {
  title: string;
  description: string;
  onRef: (el: HTMLDivElement | null) => void;
}

export function PerformanceCard({ title, description, onRef }: PerformanceCardProps) {
  return (
    <BentoCard onRef={onRef} patternId="dots-1">
      <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="mt-2 text-sm/relaxed text-gray-600 dark:text-gray-400">
        {description}
      </p>
      
      <div className="demo-container relative mt-8 opacity-70 transform translate-y-10">
        <div className="space-y-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Loading Optimizations</span>
            <span className="font-medium text-indigo-600 dark:text-indigo-400">85%</span>
          </div>
          <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="progress-bar h-full w-0 origin-left bg-linear-to-r from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500 rounded-full transition-transform duration-1000"></div>
          </div>
        </div>
      </div>
    </BentoCard>
  );
} 