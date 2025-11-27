"use client";

import * as React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SparklesCore } from "@/components/ui/sparkles";
import { IconDotsVertical } from "@tabler/icons-react";

export default function TailwindCompare() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const firstImageRef = React.useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = React.useState(0);

  React.useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      onUpdate: (self) => {
        const percentage = self.progress * 100;
        setSliderPosition(percentage);
        
        if (sliderRef.current && firstImageRef.current) {
          gsap.set(sliderRef.current, { left: `${percentage}%` });
          gsap.set(firstImageRef.current, { clipPath: `inset(0 ${100 - percentage}% 0 0)` });
        }
      },
    });

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    return () => {
      trigger.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === sectionRef.current || st.vars.trigger === containerRef.current) {
          st.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-40 w-screen -mx-[calc((100vw-100%)/2)] bg-gradient-to-b from-secondary/5 via-secondary/3 to-background dark:from-secondary/8 dark:via-secondary/4 dark:to-background transition-colors duration-500">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
            Before & After
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            See the transformation from basic to beautiful
          </p>
        </div>

        {/* Comparison Container */}
        <div ref={containerRef} className="flex justify-center">
          <div className="relative w-full max-w-5xl h-[600px] md:h-[700px] overflow-hidden rounded-3xl shadow-2xl">
            
            {/* Before: Basic Design */}
            <div className="absolute inset-0 z-10 bg-gradient-to-br from-muted/30 to-muted/50 flex items-center justify-center p-12">
              <div className="w-full max-w-2xl">
                <article className="bg-background border border-border rounded-lg p-8 shadow-md">
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      Understanding Modern Web Design
                    </h3>
                    <div className="flex gap-3 text-sm text-muted-foreground">
                      <span>January 15, 2024</span>
                      <span>•</span>
                      <span>5 min read</span>
                    </div>
                  </div>
                  
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    Web design has evolved significantly over the past decade. Today&apos;s users expect fast, responsive, and visually appealing experiences across all devices.
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <button className="bg-primary text-primary-foreground px-5 py-2 rounded font-medium">
                      Read More
                    </button>
                    <span className="text-sm text-muted-foreground">
                      12 comments
                    </span>
                  </div>
                </article>
              </div>
            </div>

            {/* After: Premium Design */}
            <div
              ref={firstImageRef}
              className="absolute inset-0 z-20 rounded-3xl overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10 flex items-center justify-center p-12">
                <div className="w-full max-w-2xl">
                  <article className="group bg-background/95 backdrop-blur-2xl rounded-3xl border border-primary/20 overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                    <div className="p-10 space-y-6">
                      <div className="flex items-center gap-4 text-sm font-medium">
                        <time className="text-primary">January 15, 2024</time>
                        <span className="w-1 h-1 rounded-full bg-primary/40"></span>
                        <span className="text-muted-foreground">5 min read</span>
                      </div>
                      
                      <h3 className="text-4xl font-bold text-foreground leading-tight tracking-tight group-hover:text-primary transition-colors duration-300">
                        Understanding Modern Web Design
                      </h3>
                      
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Web design has evolved significantly over the past decade. Today&apos;s users expect fast, responsive, and visually appealing experiences across all devices.
                      </p>
                      
                      <div className="flex items-center justify-between pt-6 border-t border-border/50">
                        <button className="group/btn bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105">
                          Read Article
                        </button>
                        
                        <div className="flex items-center gap-6">
                          <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                            <span className="text-sm font-medium">Save</span>
                          </button>
                          <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                            <span className="text-sm font-medium">Share</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>

            {/* Slider Handle */}
            <div
              ref={sliderRef}
              className="h-full w-px absolute top-0 z-30 bg-gradient-to-b from-transparent via-primary to-transparent"
              style={{ left: `${sliderPosition}%`, top: "0", zIndex: 40 }}
            >
              {/* Glow effects */}
              <div 
                className="w-40 h-full absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-primary/40 via-transparent to-transparent"
                style={{ maskImage: 'radial-gradient(120px at left, white, transparent)' }}
              />
              
              {/* Sparkles */}
              <div 
                className="w-12 h-3/4 top-1/2 -translate-y-1/2 absolute -right-12"
                style={{ maskImage: 'radial-gradient(120px at left, white, transparent)' }}
              >
                <SparklesCore 
                  particleColor="hsl(var(--primary))"
                  minSize={0.4}
                  maxSize={1.2}
                  particleDensity={1000}
                />
              </div>
              
              {/* Handle icon */}
              <div className="h-8 w-8 rounded-full top-1/2 -translate-y-1/2 bg-background border-2 border-primary z-30 -right-4 absolute flex items-center justify-center shadow-lg shadow-primary/30">
                <IconDotsVertical className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}