"use client";

import Typewriter from 'typewriter-effect';
import { BentoCard } from "./shared/bento-card";

interface FullStackCardProps {
  title: string;
  description: string;
  onRef: (el: HTMLDivElement | null) => void;
}

export function FullStackCard({ title, description, onRef }: FullStackCardProps) {
  return (
    <BentoCard onRef={onRef} patternId="dots-0">
      <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="mt-3 text-base/relaxed text-gray-600 dark:text-gray-400 max-w-2xl">
        {description}
      </p>
      
      <div className="demo-container relative flex-1 mt-8 opacity-70 transform translate-y-10 min-h-[200px]">
        <div className="rounded-xl bg-gray-900 dark:bg-gray-950 shadow-lg p-6 h-full overflow-hidden">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
          </div>
          <div className="font-mono text-sm h-[140px]">
            <Typewriter
              options={{
                delay: 50,
                cursor: '▋',
                cursorClassName: 'text-indigo-400'
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('<span class="text-blue-400">const developer = {</span>')
                  .pauseFor(500)
                  .typeString('\n  <span class="text-green-400">skills: [</span>')
                  .typeString('<span class="text-yellow-300">\'React\'</span>, ')
                  .typeString('<span class="text-yellow-300">\'Next.js\'</span>, ')
                  .typeString('<span class="text-yellow-300">\'TypeScript\'</span>]')
                  .typeString('<span class="text-green-400">,</span>')
                  .pauseFor(300)
                  .typeString('\n  <span class="text-green-400">passion: </span>')
                  .typeString('<span class="text-yellow-300">\'Building amazing UIs\'</span>')
                  .typeString('<span class="text-green-400">,</span>')
                  .pauseFor(300)
                  .typeString('\n  <span class="text-green-400">experience: </span>')
                  .typeString('<span class="text-orange-400">3</span>')
                  .typeString(' + <span class="text-yellow-300">\' years\'</span>')
                  .pauseFor(300)
                  .typeString('\n<span class="text-blue-400">};</span>')
                  .start();
              }}
            />
          </div>
        </div>
      </div>
    </BentoCard>
  );
} 