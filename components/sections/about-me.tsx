"use client";

import * as React from "react";
import RotatingEarth from "@/components/wireframe-dotted-globe";
import { WireframeMockup } from "@/components/ui/wireframe-mockup";
import ElasticLine from "@/components/fancy/physics/elastic-line";
import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { TextHighlighter } from "@/components/fancy/text/text-highlighter";

export default function AboutMe() {
  const ecosystemToolsOuter = React.useMemo(
    () => [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "C#", icon: "devicon-csharp-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "Redis", icon: "devicon-redis-plain colored" },
    ],
    []
  );

  const ecosystemToolsInner = React.useMemo(
    () => [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Express", icon: "devicon-express-original" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
    ],
    []
  );

  

  return (
    <section id="about" className="py-12 md:py-16 w-screen -mx-[calc((100vw-100%)/2)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-center text-base font-semibold leading-7 text-foreground">About</p>
          <h2 className="mx-auto mt-2 max-w-2xl text-center text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-primary">
            Full-stack Developer & Digital Designer
          </h2>
        </div>
        <div className="border border-border/60 bg-background/60">
          <div className="px-0 py-0">
            <div className="grid bg-transparent">
          {/* Row 1 */}
          <div className="relative sm:col-span-5 sm:grid sm:grid-cols-5">
            {/* Intro panel */}
            <div className="relative p-5 sm:col-span-3 md:p-6 lg:p-7 -mr-0.5">
              <div className="absolute inset-y-0 -right-0.5 hidden w-1 sm:block text-border overflow-visible border-0 bg-transparent outline-none pointer-events-auto" aria-hidden style={{ border: 'none', boxShadow: 'none' }}>
                <ElasticLine key="divider-right-1" isVertical={true} strokeWidth={1} className="text-border" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                  Full-stack Developer
                </h3>
                <p className="text-muted-foreground max-w-xl text-sm">
                  Crafting performant, accessible products with React, Next.js, and TypeScript. Focused on <TextHighlighter highlightColor="hsl(160, 50%, 70%)">developer experience</TextHighlighter> and scalable architectures.
                </p>
              </div>
              <div className="mt-4 md:mt-5 relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden">
                <DatabaseWithRestApi
                  className="w-full"
                  title="RESTful API Integration"
                  circleText="API"
                  badgeTexts={{
                    first: "GET",
                    second: "POST",
                    third: "PUT",
                    fourth: "DELETE"
                  }}
                  buttonTexts={{
                    first: "Backend",
                    second: "Database"
                  }}
                />
              </div>
            </div>

            {/* Collaboration panel */}
            <div className="relative p-5 sm:col-span-2 md:p-6 lg:p-7 flex flex-col">
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                  Global partnerships
                </h3>
                <p className="text-muted-foreground text-sm">
                  Remote-first <TextHighlighter highlightColor="hsl(160, 50%, 70%)">delivery across time zones</TextHighlighter>, aligning teams to ship inclusive experiences.
                </p>
              </div>
              <div className="relative mt-4 md:mt-5 flex flex-1 items-end justify-center min-h-[200px] md:min-h-[220px]">
                <RotatingEarth width={256} height={256} className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 opacity-80" />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="relative sm:col-span-5 sm:grid sm:grid-cols-5">
            {/* Activity panel */}
            <div className="relative p-5 sm:col-span-2 md:p-6 lg:p-7 -mr-0.5">
              <div className="absolute inset-y-0 -right-0.5 hidden w-1 sm:block text-border overflow-visible border-0 bg-transparent outline-none pointer-events-auto" aria-hidden style={{ border: 'none', boxShadow: 'none' }}>
                <ElasticLine key="divider-right-2" isVertical={true} strokeWidth={1} className="text-border" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                  Human-centered design
                </h3>
                <p className="text-muted-foreground text-sm">
                  Translating business goals into intuitive flows and interfaces. Prioritizing <TextHighlighter highlightColor="hsl(160, 50%, 70%)">clarity and accessibility</TextHighlighter>.
                </p>
              </div>
              <div className="mt-4 md:mt-5 p-3 md:p-4 flex items-center justify-center bg-transparent">
                <WireframeMockup className="max-w-[240px] md:max-w-[280px] lg:max-w-[320px] opacity-90" mode="default" />
              </div>
            </div>

            {/* Toolkit panel */}
            <div className="relative p-5 sm:col-span-3 md:p-6 lg:p-7">
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                  Ecosystem & tools
                </h3>
                <p className="text-muted-foreground max-w-xl text-sm">
                  A lean set of frameworks and integrations for <TextHighlighter highlightColor="hsl(160, 50%, 70%)">fast feedback loops</TextHighlighter> and user-focused experimentation.
                </p>
              </div>
              <div className="mt-4 md:mt-5 relative flex items-center justify-center h-[400px] w-full">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Outer orbit */}
                  <div className="absolute">
                    <OrbitingCircles
                      className="border-none bg-transparent"
                      duration={20}
                      radius={160}
                      path={true}
                      iconSize={60}
                    >
                      {ecosystemToolsOuter.map((tool, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center bg-background border border-border p-2 shadow-sm hover:shadow-md transition-shadow"
                          title={tool.name}
                        >
                          <i className={`${tool.icon}`} style={{ fontSize: '1.75rem' }} />
                        </div>
                      ))}
                    </OrbitingCircles>
                  </div>
                  
                  {/* Inner orbit */}
                  <div className="absolute">
                    <OrbitingCircles
                      className="border-none bg-transparent"
                      duration={15}
                      radius={120}
                      path={true}
                      iconSize={50}
                      reverse={true}
                    >
                      {ecosystemToolsInner.map((tool, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center bg-background border border-border p-2 shadow-sm hover:shadow-md transition-shadow"
                          title={tool.name}
                        >
                          <i className={`${tool.icon}`} style={{ fontSize: '1.25rem' }} />
                        </div>
                      ))}
                    </OrbitingCircles>
                  </div>
                </div>
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