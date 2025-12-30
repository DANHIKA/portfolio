"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-screen -mx-[calc((100vw-100%)/2)] overflow-hidden min-h-[90vh] flex items-center justify-center">
      {/* Background - simplified without waves */}
      <div className="absolute inset-0 bg-background/60 dark:bg-background/80 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 max-w-7xl w-full py-20">
        <div className="flex flex-col items-center justify-center text-center gap-8">
          {/* Profile Image - Centered Circle */}
          <div className={`transition-all duration-1000 ease-out delay-100 ${
            showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full border-4 border-background shadow-xl">
              <Image
                src="/me.png"
                alt="Daniel Ntandika"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text Content - Centered */}
          <div className={`transition-all duration-1000 ease-out delay-300 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-foreground mb-6 tracking-tight">
              I'm Daniel, <span className="text-foreground/60">accelerating business by improving people's lives.</span>
            </h1>
            
            {/* Tagline / Roles */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm md:text-base text-muted-foreground mb-10 font-mono uppercase tracking-widest">
              <span>Full Stack Developer</span>
              <span className="hidden md:inline text-border">|</span>
              <span>UI/UX Designer</span>
              <span className="hidden md:inline text-border">|</span>
              <span>Problem Solver</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
              <Button size="lg" asChild className="rounded-full px-8">
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  My Resume
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 ease-out delay-1000 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="animate-bounce text-muted-foreground">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13L12 18L17 13M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}