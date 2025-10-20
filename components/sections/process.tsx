"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const processSteps = [
  {
    title: "Discover",
    description:
      "Deep dive into business goals, user needs, and constraints to frame the real problem we are solving.",
    duration: "1-2 weeks",
  },
  {
    title: "Design",
    description:
      "Translate insights into flows, wireframes, and interaction models that balance feasibility and delight.",
    duration: "2-3 weeks",
  },
  {
    title: "Build",
    description:
      "Ship production-ready experiences with robust testing, automation, and clean, scalable architecture.",
    duration: "4-8 weeks",
  },
  {
    title: "Iterate",
    description:
      "Measure outcomes, gather feedback, and refine quickly to keep delivering compounding value over time.",
    duration: "Ongoing",
  },
];

export default function Process() {
  const [progress, setProgress] = React.useState(0);
  const sectionRef = React.useRef<HTMLElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=200%",
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        setProgress(self.progress);
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} id="process" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <p className="text-sm font-medium tracking-wider text-gray-500 dark:text-gray-400">Process</p>
          <h2 className="mt-3 text-5xl font-bold tracking-tight text-primary">
            How ideas become shipped experiences
          </h2>
        </div>

        <div ref={containerRef}>
          {/* Progress Line with Square Indicators */}
          <div className="relative mb-16">
            <div className="relative h-px w-full bg-gray-200 dark:bg-gray-800">
              <div
                className="absolute left-0 top-0 h-full origin-left bg-gray-900 dark:bg-white transition-transform duration-300"
                style={{ transform: `scaleX(${progress})` }}
              />
            </div>
            
            <div className="absolute left-0 top-1/2 flex w-full -translate-y-1/2">
              {processSteps.map((_, index) => {
                const stepProgress = index / (processSteps.length - 1);
                const isActive = progress >= stepProgress;
                
                return (
                  <div
                    key={index}
                    className="flex-1"
                    style={{
                      display: 'flex',
                      justifyContent: index === 0 ? 'flex-start' : index === processSteps.length - 1 ? 'flex-end' : 'center',
                    }}
                  >
                    <div
                      className={cn(
                        "h-2 w-2 transition-all duration-500",
                        isActive
                          ? "bg-gray-900 dark:bg-white scale-100"
                          : "bg-gray-300 dark:bg-gray-700 scale-75"
                      )}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const stepProgress = index / (processSteps.length - 1);
              const isActive = progress >= stepProgress - 0.1 && progress <= stepProgress + 0.3;
              
              return (
                <div
                  key={step.title}
                  className={cn(
                    "transition-all duration-700",
                    isActive ? "opacity-100 translate-y-0" : "opacity-30 translate-y-4"
                  )}
                >
                  {/* Number and Title in Border */}
                  <div className="mb-6 inline-flex items-center gap-3 border border-gray-900 px-4 py-2 dark:border-white rounded-sm">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="h-4 w-px bg-gray-900 dark:bg-white" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                    <p className="text-xs font-medium text-gray-400 dark:text-gray-600">
                      {step.duration}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}