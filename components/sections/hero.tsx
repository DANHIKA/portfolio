"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
      <div className="absolute inset-0 -z-20" aria-hidden="true" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-10 text-center">
          <h1 className="mx-auto mt-2 max-w-2xl text-center text-8xl font-semibold tracking-tight text-primary">
            Fearless digital experiences.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Transforming ambitious ideas into immersive digital journeys with clarity, performance, and a touch of drama.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link href="#projects" className="sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">
                View Projects
              </Button>
            </Link>
            <Link href="mailto:hello@portfolio.dev" className="sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Start a Project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}