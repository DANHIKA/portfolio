"use client";

import * as React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Globe } from "@/components/magicui/globe";
import { Spotlight } from "@/components/motion-primitives/spotlight";
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
  // Generate sample activity data (last ~26 weeks) for the contribution graph
  const activities = React.useMemo<Activity[]>(() => {
    const DAYS = 26 * 7; // ~6 months
    const today = new Date();
    const arr: Activity[] = [];
    for (let i = DAYS - 1; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const date = d.toISOString().slice(0, 10); // YYYY-MM-DD
      // Create a pseudo-random but smooth pattern
      const base = Math.max(0, Math.sin(i / 5) * 3 + (i % 3));
      const count = Math.round(base);
      const level = Math.min(4, Math.max(0, Math.floor(count)));
      arr.push({ date, count, level });
    }
    return arr;
  }, []);
  return (
    <section id="about" className="dark:bg-muted/25 bg-zinc-50 py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">About Me</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-4xl font-semibold tracking-tight text-balance text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-6xl">
          Building digital experiences that matter
        </p>

        <div className="mx-auto mt-12 grid gap-2 sm:grid-cols-5">
          {/* Primary intro card (3 cols) */}
          <Card className="group relative overflow-hidden shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl">
            <Spotlight className="text-primary/50" size={124} />
            <CardHeader>
              <div className="md:p-6">
                <p className="font-medium">Full‑stack Developer</p>
                <p className="text-muted-foreground mt-3 max-w-sm text-sm">
                  I craft performant, accessible products with React, Next.js, TypeScript, and Node. I care about DX, clean architectures, and delightful UX.
                </p>
              </div>
            </CardHeader>

            <div className="relative h-fit px-6 md:px-12 w-full">
              <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,var(--color-background)_100%)]"></div>

              <div className="w-full p-4">
                <Compare
                  firstImage="https://assets.aceternity.com/code-problem.png"
                  secondImage="https://assets.aceternity.com/code-solution.png"
                  firstImageClassName="object-cover object-left-top"
                  secondImageClassname="object-cover object-left-top"
                  className="h-[250px] w-full md:h-[300px]"
                  slideMode="hover"
                />
              </div>
            </div>
          </Card>

          {/* Snapshot card (2 cols) */}
          <Card className="group relative overflow-hidden shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-tr-xl">
            <Spotlight className="text-primary/50" size={124} />
            <Spotlight
              className="from-blue-600 via-blue-500 to-blue-400 blur-3xl dark:from-blue-200 dark:via-blue-300 dark:to-blue-400"
              size={124}
            />
            <CardHeader>
              <div className="md:p-6">
                <p className="font-medium">Global Collaboration</p>
                <p className="text-muted-foreground mt-3 max-w-sm text-sm">
                  Remote-first approach with experience working across time zones and cultures worldwide
                </p>
              </div>
            </CardHeader>

            <CardContent className="mt-auto h-fit">
              <div className="demo-container relative mt-8 opacity-70 transform translate-y-10 min-h-[240px]">
                <Globe className="opacity-90" />
              </div>
            </CardContent>
          </Card>

          {/* Key skills blurb (2 cols) with Contribution Graph */}
          <Card className="group relative p-6 shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-bl-xl md:p-12">
            <Spotlight className="text-primary/50" size={124} />
            <div className="space-y-1">
              <h3 className="text-lg font-semibold tracking-tight">Recent Contributions</h3>
              <p className="text-muted-foreground text-sm">
                A snapshot of my coding activity across various projects
              </p>
            </div>

            <div className="mt-4">
              <ContributionGraph
                data={activities}
                blockSize={12}
                blockMargin={4}
                className="mx-auto"
                aria-label="Recent contribution activity"
              >
                <ContributionGraphCalendar className="mx-auto">
                  {({ activity, dayIndex, weekIndex }) => (
                    <ContributionGraphBlock
                      key={`${activity.date}-${dayIndex}-${weekIndex}`}
                      activity={activity}
                      dayIndex={dayIndex}
                      weekIndex={weekIndex}
                    />
                  )}
                </ContributionGraphCalendar>
                <ContributionGraphFooter className="mt-3">
                  <ContributionGraphTotalCount />
                  <ContributionGraphLegend />
                </ContributionGraphFooter>
              </ContributionGraph>
            </div>
          </Card>

          {/* Tools/Integrations (3 cols) */}
          <Card className="group relative shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-br-xl">
            <Spotlight className="text-primary/50" size={124} />
            <CardHeader className="p-6 md:p-12">
              <p className="font-medium">Ecosystem & Tools</p>
              <p className="text-muted-foreground mt-2 max-w-sm text-sm">I work comfortably across modern tooling and integrations.</p>
            </CardHeader>
            <CardContent className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
              <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
                <div className="rounded-(--radius) aspect-square border border-dashed"></div>
                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                  <Image
                    className="m-auto size-8 invert dark:invert-0"
                    src="https://oxymor-ns.tailus.io/logos/linear.svg"
                    alt="Linear logo"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="rounded-(--radius) aspect-square border border-dashed"></div>
                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                  <Image
                    className="m-auto size-8 invert dark:invert-0"
                    src="https://oxymor-ns.tailus.io/logos/netlify.svg"
                    alt="Netlify logo"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="rounded-(--radius) aspect-square border border-dashed"></div>
                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                  <Image
                    className="m-auto size-8 invert dark:invert-0"
                    src="https://oxymor-ns.tailus.io/logos/github.svg"
                    alt="github logo"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}