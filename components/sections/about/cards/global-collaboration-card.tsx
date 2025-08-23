"use client";

import { BentoCard } from "./shared/bento-card";
import { Globe } from "@/components/magicui/globe";

interface GlobalCollaborationCardProps {
  title: string;
  description: string;
  onRef: (el: HTMLDivElement | null) => void;
}

export function GlobalCollaborationCard({ title, description, onRef }: GlobalCollaborationCardProps) {
  return (
    <BentoCard onRef={onRef} patternId="dots-3">
      <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="mt-3 text-base/relaxed text-gray-600 dark:text-gray-400">
        {description}
      </p>
      
      <div className="demo-container relative mt-8 opacity-70 transform translate-y-10 min-h-[240px]">
        <Globe className="opacity-90" />
      </div>
    </BentoCard>
  );
} 