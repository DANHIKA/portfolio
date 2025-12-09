"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let gsapRegistered = false;

const PARAGRAPHS = [
  "I'm a software developer who enjoys working across the full stack, from building user-friendly interfaces to ensuring systems work smoothly behind the scenes.",
  "I'm comfortable with data management, cloud environments, and making sure different systems can talk to each other effectively. I value writing clear documentation and collaborating with teammates.",
  "What drives me is contributing to meaningful projects, particularly in digital health, where technology can genuinely improve people's experiences and outcomes.",
];

export default function Summary() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const paragraphsRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current || !containerRef.current) return;

    if (!gsapRegistered) {
      gsap.registerPlugin(ScrollTrigger);
      gsapRegistered = true;
    }

    const paras = paragraphsRef.current.filter(Boolean) as HTMLParagraphElement[];
    if (paras.length === 0) return;

    // Initialize all paragraphs to hidden except first
    paras.forEach((para, i) => {
      gsap.set(para, i === 0 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 });
    });

    // Create scroll-triggered animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${window.innerHeight * (paras.length - 1)}`,
        scrub: 0.5,
        pin: containerRef.current,
        pinSpacing: true,
      },
    });

    // Animate each paragraph transition sequentially
    paras.forEach((para, i) => {
      if (i === 0) return;

      const prevPara = paras[i - 1];

      // Add fade out for previous paragraph
      tl.to(prevPara, {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: "power2.inOut",
      }, i * 2 - 0.5);

      // Add fade in for current paragraph
      tl.to(para, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
      }, i * 2);
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-background">
      <div ref={containerRef} className="relative h-screen flex items-center justify-center px-6 md:px-12">
        <div className="relative w-full max-w-4xl min-h-[200px]">
          {PARAGRAPHS.map((text, i) => (
            <p
              key={i}
              ref={(el) => { paragraphsRef.current[i] = el; }}
              className="absolute top-1/2 left-0 w-full -translate-y-1/2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-foreground leading-relaxed font-light"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}