"use client";

import * as React from "react";
import { Globe } from "@/components/magicui/globe";
import { Compare } from "@/components/ui/compare";
import {
  ContributionGraph,
  ContributionGraphCalendar,
  ContributionGraphBlock,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
  type Activity,
} from "@/components/ui/kibo-ui/contribution-graph";
import Image from "next/image";

export default function AboutMe() {
  const toolLogos = React.useMemo(
    () => [
      { type: "placeholder" as const, id: "placeholder-1" },
      { type: "logo" as const, id: "linear", src: "https://oxymor-ns.tailus.io/logos/linear.svg", alt: "Linear" },
      { type: "placeholder" as const, id: "placeholder-2" },
      { type: "logo" as const, id: "netlify", src: "https://oxymor-ns.tailus.io/logos/netlify.svg", alt: "Netlify" },
      { type: "placeholder" as const, id: "placeholder-3" },
      { type: "logo" as const, id: "github", src: "https://oxymor-ns.tailus.io/logos/github.svg", alt: "GitHub" },
    ],
    []
  );

  // Generate sample activity data (last ~26 weeks) for the contribution graph
  const activities = React.useMemo<Activity[]>(() => {
    const DAYS = 26 * 7; // ~6 months
    const today = new Date();
    const arr: Activity[] = [];
    for (let i = DAYS - 1; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const date = d.toISOString().slice(0, 10); // YYYY-MM-DD
      const base = Math.max(0, Math.sin(i / 5) * 3 + (i % 3));
      const count = Math.round(base);
      const level = Math.min(4, Math.max(0, Math.floor(count)));
      arr.push({ date, count, level });
    }
    return arr;
  }, []);

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto">
        <h2 className="text-center text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">About Me</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-4xl font-semibold tracking-tight text-balance text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-6xl">
          Building digital experiences that matter
        </p>

        <div className="mt-12 grid divide-y divide-border/20 bg-transparent">
          <div className="h-px w-full bg-border/20" aria-hidden />

          {/* Row 1 */}
          <div className="relative border-b border-border/20 sm:col-span-5 sm:grid sm:grid-cols-5">
            {/* Intro panel */}
            <div className="relative p-8 sm:col-span-3 md:p-10">
              <div className="absolute inset-y-0 right-0 hidden w-px bg-border/30 sm:block" aria-hidden />
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Profile</span>
                <h3 className="text-3xl font-semibold tracking-tight">Full-stack Developer</h3>
                <p className="text-muted-foreground max-w-xl">
                  I craft performant, accessible products with React, Next.js, TypeScript, and Node. I care deeply about developer experience,
                  scalable architectures, and translating complex ideas into delightful interfaces.
                </p>
              </div>
                <Compare
                  firstImage="https://assets.aceternity.com/code-problem.png"
                  secondImage="https://assets.aceternity.com/code-solution.png"
                  firstImageClassName="object-cover object-left-top"
                  secondImageClassname="object-cover object-left-top"
                  className="relative z-10 h-[220px] w-full md:h-[260px]"
                  slideMode="hover"
                />
            </div>

            {/* Collaboration panel */}
            <div className="relative border-l border-border/30 p-8 sm:col-span-2 md:p-10 flex flex-col">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Collaboration</span>
                <h3 className="text-3xl font-semibold tracking-tight">Global partnerships</h3>
                <p className="text-muted-foreground">
                  Remote-first delivery across time zones, aligning design, engineering, and business teams to ship inclusive experiences.
                </p>
              </div>
              <div className="mt-10 flex flex-1 items-end justify-center">
                <Globe className="h-48 w-48 opacity-80" />
              </div>
            </div>
          </div>

          {/* Horizontal divider between rows */}
          <div className="h-px w-full bg-border/20" aria-hidden />

          {/* Row 2 */}
          <div className="relative sm:col-span-5 sm:grid sm:grid-cols-5">
            {/* Activity panel */}
            <div className="relative border-b border-border/20 p-8 sm:col-span-2 sm:border-b-0 sm:border-r sm:border-border/20 md:p-10">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Activity</span>
                <h3 className="text-3xl font-semibold tracking-tight">Recent contributions</h3>
                <p className="text-muted-foreground">
                  A snapshot of the energy I invest in learning, building, and collaborating on open-source and client projects.
                </p>
              </div>
              <div className="mt-8 border border-border/40 p-4">
                <Compare
                  firstImage="https://assets.aceternity.com/code-problem.png"
                  secondImage="https://assets.aceternity.com/code-solution.png"
                  firstImageClassName="object-cover object-left-top"
                  secondImageClassname="object-cover object-left-top"
                  className="relative z-10 h-[220px] w-full md:h-[260px]"
                  slideMode="hover"
                />
              </div>
            </div>

            {/* Toolkit panel */}
            <div className="relative border-l border-border/30 p-8 sm:col-span-3 md:p-10">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Toolkit</span>
                <h3 className="text-3xl font-semibold tracking-tight">Ecosystem & tools</h3>
                <p className="text-muted-foreground max-w-2xl">
                  A lean set of frameworks and integrations that keep feedback loops fast and experimentation anchored in user value.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
                {toolLogos.map((item) => (
                  <div
                    key={item.id}
                    className="flex aspect-square items-center justify-center border border-border/40"
                  >
                    {item.type === "logo" ? (
                      <Image
                        src={item.src}
                        alt={`${item.alt} logo`}
                        width={36}
                        height={36}
                        className="size-9 object-contain invert dark:invert-0"
                      />
                    ) : (
                      <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground/60">soon</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}