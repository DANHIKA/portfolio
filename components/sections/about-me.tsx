"use client";

import * as React from "react";
import { Globe } from "@/components/magicui/globe";
import Image from "next/image";
import { WireframeMockup } from "@/components/ui/wireframe-mockup";
import FullStackFlowDiagram from "@/components/ui/full-stack-flow-diagram";

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

  

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto">
        <p className="text-center text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">About Me</p>
        <h2 className="mx-auto mt-2 max-w-2xl text-center text-6xl font-semibold tracking-tight text-primary">
          Building digital experiences that matter
        </h2>

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
              <FullStackFlowDiagram />
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
              <div className="relative mt-10 flex flex-1 items-end justify-center min-h-[240px]">
                <Globe className="h-64 w-64 opacity-80" />
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
                <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">UI/UX</span>
                <h3 className="text-3xl font-semibold tracking-tight">Human-centered design</h3>
                <p className="text-muted-foreground">
                  I translate business goals into intuitive flows, wireframes, and interactive interfaces. I prioritize clarity,
                  accessibility, and feedback loops to craft experiences users love.
                </p>
              </div>
              <div className="mt-8 p-6 flex items-center justify-center bg-transparent">
                <WireframeMockup className="max-w-xs opacity-90" mode="simple" />
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