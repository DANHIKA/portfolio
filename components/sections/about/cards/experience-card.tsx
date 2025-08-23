"use client";

import { BentoCard } from "./shared/bento-card";

interface ExperienceCardProps {
  title: string;
  description: string;
  onRef: (el: HTMLDivElement | null) => void;
}

export function ExperienceCard({ title, description, onRef }: ExperienceCardProps) {
  return (
    <BentoCard onRef={onRef} patternId="dots-2">
      <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="mt-2 text-sm/relaxed text-gray-600 dark:text-gray-400">
        {description}
      </p>
      
      <div className="demo-container relative mt-8 opacity-70 transform translate-y-10">
        <div className="flex flex-col items-center space-y-6">
          <div className="w-full max-w-md h-1 bg-gray-200 dark:bg-gray-700 rounded-full relative">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-indigo-200 via-indigo-500 to-indigo-600 dark:from-indigo-900 dark:via-indigo-600 dark:to-indigo-400 rounded-full"></div>
            <div className="absolute -top-7 left-0">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">2021</span>
              </div>
            </div>
            <div className="absolute -top-7 right-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Present</span>
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 w-full gap-2 px-2">
            <div className="text-center">
              <div className="text-xs font-medium text-gray-600 dark:text-gray-400">Year 1</div>
              <div className="mt-1 text-xs text-gray-500">Frontend</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-medium text-gray-600 dark:text-gray-400">Year 2</div>
              <div className="mt-1 text-xs text-gray-500">Full Stack</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-medium text-gray-600 dark:text-gray-400">Year 3+</div>
              <div className="mt-1 text-xs text-gray-500">Architecture</div>
            </div>
          </div>
        </div>
      </div>
    </BentoCard>
  );
} 