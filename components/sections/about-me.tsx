"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Globe } from "@/components/magicui/globe";
import Typewriter from 'typewriter-effect';

interface CardData {
  title: string;
  description: string;
  variant?: 'tall' | 'normal';
  showDemo?: 'code' | 'globe' | 'chart' | 'speedometer' | 'timeline';
}

export default function AboutMe() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation for cards
      gsap.fromTo(
        ".bento-card",
        { 
          opacity: 0, 
          y: 20 
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.1,
          ease: "power3.out" 
        }
      );

      // Setup unique hover animations for each card
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        const isPerformance = index === 1;
        
        // Performance loading animation
        if (isPerformance) {
          gsap.to(card.querySelector('.progress-bar'), {
            scaleX: 0.85,
            duration: 1.2,
            ease: "power2.inOut"
          });
        }
        
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.02,
            duration: 0.4,
            ease: "power2.out"
          });
          
          gsap.to(card.querySelector(".dot-pattern"), {
            opacity: 0.6,
            scale: 1.05,
            duration: 0.4,
            ease: "power2.out"
          });
          
          const demo = card.querySelector(".demo-container");
          if (demo) {
            gsap.to(demo, {
              y: 0,
              opacity: 1,
              duration: 0.4
            });
          }
        });
        
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
          
          gsap.to(card.querySelector(".dot-pattern"), {
            opacity: 0.3,
            scale: 1,
            duration: 0.3
          });
          
          const demo = card.querySelector(".demo-container");
          if (demo) {
            gsap.to(demo, {
              y: 10,
              opacity: 0.7,
              scale: 1,
              duration: 0.3
            });
          }
        });
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const gridCards: CardData[] = [
    {
      title: "Full Stack Development",
      description: "Specializing in React, Next.js, and TypeScript to create performant and scalable web applications. Building with modern best practices and a focus on clean code.",
      variant: 'tall',
      showDemo: 'code'
    },
    {
      title: "Performance Focused",
      description: "Optimizing for speed and efficiency at every level, from code architecture to user interface.",
      variant: 'normal',
      showDemo: 'speedometer'
    },
    {
      title: "3+ Years Experience",
      description: "Working across various industries, from startups to enterprise, delivering high-quality solutions that drive business growth.",
      variant: 'normal',
      showDemo: 'timeline'
    },
    {
      title: "Global Collaboration",
      description: "Remote-first approach with experience working in distributed teams across different time zones and cultures.",
      variant: 'tall',
      showDemo: 'globe'
    }
  ];

  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-900/50 py-24 sm:py-32" ref={containerRef}>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">About Me</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-4xl font-semibold tracking-tight text-balance text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-6xl">
          Building digital experiences that matter
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Column 1 */}
          <div className="space-y-8">
            {/* Full Stack Development */}
            <div 
              ref={(el) => {
                if (el) cardsRef.current[0] = el;
              }}
              className="bento-card group relative overflow-hidden rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 shadow-sm transition-all duration-300"
            >
              <div className="dot-pattern absolute inset-0 opacity-30 pointer-events-none">
                <svg width="100%" height="100%">
                  <pattern id="dots-0" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" className="fill-current text-gray-400 dark:text-gray-500" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#dots-0)" />
                </svg>
              </div>
              
              <div className="relative flex h-full flex-col bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8">
                <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  {gridCards[0].title}
                </h3>
                <p className="mt-3 text-base/relaxed text-gray-600 dark:text-gray-400 max-w-2xl">
                  {gridCards[0].description}
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
              </div>
            </div>

            {/* Experience Card */}
            <div 
              ref={(el) => {
                if (el) cardsRef.current[2] = el;
              }}
              className="bento-card group relative overflow-hidden rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 shadow-sm transition-all duration-300"
            >
              <div className="dot-pattern absolute inset-0 opacity-30 pointer-events-none">
                <svg width="100%" height="100%">
                  <pattern id="dots-2" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" className="fill-current text-gray-400 dark:text-gray-500" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#dots-2)" />
                </svg>
              </div>
              
              <div className="relative flex h-full flex-col bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8">
                <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  {gridCards[2].title}
                </h3>
                <p className="mt-2 text-sm/relaxed text-gray-600 dark:text-gray-400">
                  {gridCards[2].description}
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
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-8">
            {/* Performance Card */}
            <div 
              ref={(el) => {
                if (el) cardsRef.current[1] = el;
              }}
              className="bento-card group relative overflow-hidden rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 shadow-sm transition-all duration-300"
            >
              <div className="dot-pattern absolute inset-0 opacity-30 pointer-events-none">
                <svg width="100%" height="100%">
                  <pattern id="dots-1" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" className="fill-current text-gray-400 dark:text-gray-500" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#dots-1)" />
                </svg>
              </div>
              
              <div className="relative flex h-full flex-col bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8">
                <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  {gridCards[1].title}
                </h3>
                <p className="mt-2 text-sm/relaxed text-gray-600 dark:text-gray-400">
                  {gridCards[1].description}
                </p>
                
                <div className="demo-container relative mt-8 opacity-70 transform translate-y-10">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Loading Optimizations</span>
                      <span className="font-medium text-indigo-600 dark:text-indigo-400">85%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="progress-bar h-full w-0 origin-left bg-gradient-to-r from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500 rounded-full transition-transform duration-1000"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Collaboration Card */}
            <div 
              ref={(el) => {
                if (el) cardsRef.current[3] = el;
              }}
              className="bento-card group relative overflow-hidden rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 shadow-sm transition-all duration-300"
            >
              <div className="dot-pattern absolute inset-0 opacity-30 pointer-events-none">
                <svg width="100%" height="100%">
                  <pattern id="dots-3" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" className="fill-current text-gray-400 dark:text-gray-500" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#dots-3)" />
                </svg>
              </div>
              
              <div className="relative flex flex-col bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8">
                <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  {gridCards[3].title}
                </h3>
                <p className="mt-3 text-base/relaxed text-gray-600 dark:text-gray-400">
                  {gridCards[3].description}
                </p>
                
                <div className="demo-container relative mt-8 opacity-70 transform translate-y-10 min-h-[240px]">
                  <Globe className="opacity-90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}