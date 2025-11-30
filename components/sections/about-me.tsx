"use client";

import * as React from "react";
import { Globe } from "@/components/magicui/globe";
import Image from "next/image";
import { WireframeMockup } from "@/components/ui/wireframe-mockup";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

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
    <section id="about" className="py-12 md:py-16 w-screen -mx-[calc((100vw-100%)/2)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-center text-base font-semibold leading-7 text-foreground">About</p>
          <h2 className="mx-auto mt-2 max-w-2xl text-center text-6xl font-semibold tracking-tight text-primary">
            Full-stack Developer & Digital Designer
          </h2>
        </div>
        <div className="rounded-3xl border border-border/60 bg-background/60">
          <div className="px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <div className="grid divide-y divide-border bg-transparent">
          <div className="h-[1px] w-full bg-border" aria-hidden />

          {/* Row 1 */}
          <div className="relative border-b border-border sm:col-span-5 sm:grid sm:grid-cols-5">
            {/* Intro panel */}
            <div className="relative p-5 sm:col-span-3 md:p-6 lg:p-7">
              <div className="absolute inset-y-0 right-0 hidden w-[1px] bg-border sm:block" aria-hidden />
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">Full-stack Developer</h3>
                <p className="text-muted-foreground max-w-xl text-sm">
                  Crafting performant, accessible products with React, Next.js, and TypeScript. Focused on developer experience and scalable architectures.
                </p>
              </div>
              <div className="mt-4 md:mt-5 relative flex h-[140px] md:h-[150px] w-full flex-col items-center justify-center overflow-hidden">
                <OrbitingCircles iconSize={22} radius={85}>
                  <i className="devicon-react-original colored text-xl" />
                  <i className="devicon-typescript-plain colored text-xl" />
                  <i className="devicon-nextjs-original text-xl" />
                  <i className="devicon-nodejs-plain colored text-xl" />
                  <i className="devicon-javascript-plain colored text-xl" />
                </OrbitingCircles>
                <OrbitingCircles iconSize={16} radius={52} reverse speed={2.2}>
                  <i className="devicon-tailwindcss-plain colored text-base" />
                  <i className="devicon-git-plain colored text-base" />
                  <i className="devicon-docker-plain colored text-base" />
                  <i className="devicon-graphql-plain colored text-base" />
                </OrbitingCircles>
              </div>
            </div>

            {/* Collaboration panel */}
            <div className="relative border-l border-border p-5 sm:col-span-2 md:p-6 lg:p-7 flex flex-col">
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">Global partnerships</h3>
                <p className="text-muted-foreground text-sm">
                  Remote-first delivery across time zones, aligning teams to ship inclusive experiences.
                </p>
              </div>
              <div className="relative mt-4 md:mt-5 flex flex-1 items-end justify-center min-h-[120px] md:min-h-[130px]">
                <Globe className="h-32 w-32 md:h-36 md:w-36 opacity-80" />
              </div>
            </div>
          </div>

          {/* Horizontal divider between rows */}
          <div className="h-[1px] w-full bg-border" aria-hidden />

          {/* Row 2 */}
          <div className="relative sm:col-span-5 sm:grid sm:grid-cols-5">
            {/* Activity panel */}
            <div className="relative border-b border-border p-5 sm:col-span-2 sm:border-b-0 sm:border-r sm:border-border md:p-6 lg:p-7">
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">Human-centered design</h3>
                <p className="text-muted-foreground text-sm">
                  Translating business goals into intuitive flows and interfaces. Prioritizing clarity and accessibility.
                </p>
              </div>
              <div className="mt-4 md:mt-5 p-3 md:p-4 flex items-center justify-center bg-transparent">
                <WireframeMockup className="max-w-[160px] md:max-w-[180px] opacity-90" mode="simple" />
              </div>
            </div>

            {/* Toolkit panel */}
            <div className="relative border-l border-border p-5 sm:col-span-3 md:p-6 lg:p-7">
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">Ecosystem & tools</h3>
                <p className="text-muted-foreground max-w-xl text-sm">
                  A lean set of frameworks and integrations for fast feedback loops and user-focused experimentation.
                </p>
              </div>
              <div className="mt-4 md:mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-6">
                {toolLogos.map((item) => (
                  <div
                    key={item.id}
                    className="flex aspect-square items-center justify-center border border-border p-2.5"
                  >
                    {item.type === "logo" ? (
                      <Image
                        src={item.src}
                        alt={`${item.alt} logo`}
                        width={32}
                        height={32}
                        className="size-8 object-contain invert dark:invert-0"
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
        </div>
      </div>
      {/* Add Devicon stylesheet */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
    </section>
  );
}