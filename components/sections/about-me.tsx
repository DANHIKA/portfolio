"use client";

import { useRef } from "react";
import { FullStackCard } from "./about/cards/full-stack-card";
import { PerformanceCard } from "./about/cards/performance-card";
import { ExperienceCard } from "./about/cards/experience-card";
import { GlobalCollaborationCard } from "./about/cards/global-collaboration-card";

export default function AboutMe() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-900/50 py-4 md:py-6">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">About Me</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-4xl font-semibold tracking-tight text-balance text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-6xl">
          Building digital experiences that matter
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Column 1 */}
          <div className="space-y-8">
            <FullStackCard
              title="Full Stack Development"
              description="Specializing in React, Next.js, and TypeScript to create performant and scalable web applications. Building with modern best practices and a focus on clean code."
              onRef={(el) => (cardsRef.current[0] = el)}
            />
            <ExperienceCard
              title="3+ Years Experience"
              description="Working across various industries, from startups to enterprise, delivering high-quality solutions that drive business growth."
              onRef={(el) => (cardsRef.current[2] = el)}
            />
          </div>

          {/* Column 2 */}
          <div className="space-y-8">
            <PerformanceCard
              title="Performance Focused"
              description="Optimizing for speed and efficiency at every level, from code architecture to user interface."
              onRef={(el) => (cardsRef.current[1] = el)}
            />
            <GlobalCollaborationCard
              title="Global Collaboration"
              description="Remote-first approach with experience working in distributed teams across different time zones and cultures."
              onRef={(el) => (cardsRef.current[3] = el)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}