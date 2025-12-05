"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";

export default function Loading() {
  const pageTransitionRef = useRef<HTMLDivElement>(null);
  const divsRef = useRef<HTMLElement[]>([]);
  const [mounted, setMounted] = useState(false);

  const slideDownRef = useRef<gsap.core.Timeline | null>(null);
  const slideUpRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const initAnimations = () => {
    if (!pageTransitionRef.current) return;

    const pageDiv = Array.from(
      pageTransitionRef.current.querySelectorAll(".div")
    ) as HTMLElement[];

    if (pageDiv.length === 0) return;

    divsRef.current = pageDiv;

    // Reset positions - start from top (hidden)
    gsap.set(pageDiv, { bottom: "100%" });

    // Create slide down timeline
    slideDownRef.current = gsap.timeline({ paused: true });
    slideDownRef.current.to(pageDiv, {
      bottom: "0%",
      duration: 0.5,
      ease: "power2.in",
      stagger: 0.2,
    });

    // Create slide up timeline
    slideUpRef.current = gsap.timeline({ paused: true });
    slideUpRef.current.to(pageDiv, {
      bottom: "100%",
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.2,
    });
  };

  // Initialize and play slide down when mounted
  useEffect(() => {
    if (!mounted) return;

    const timer = setTimeout(() => {
      if (pageTransitionRef.current) {
        initAnimations();
        // Play slide down immediately
        setTimeout(() => {
          if (slideDownRef.current) {
            gsap.set(divsRef.current, { bottom: "100%" });
            slideDownRef.current.restart();
          }
        }, 100);
      }
    }, 50);

    return () => {
      clearTimeout(timer);
    };
  }, [mounted]);

  // Play slide up after slide down completes + delay
  useEffect(() => {
    if (!mounted || !slideDownRef.current) return;

    // Wait for slide down animation to complete (0.5s duration + 0.2s stagger * 6 = ~1.7s)
    // Then wait additional time before sliding up
    const slideDownDuration = 500 + (200 * 6); // duration + stagger for 7 items
    const waitTime = 2000; // 2 seconds to stay visible
    
    const timer = setTimeout(() => {
      if (slideUpRef.current) {
        slideUpRef.current.restart();
      }
    }, slideDownDuration + waitTime);

    return () => {
      clearTimeout(timer);
    };
  }, [mounted]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (slideDownRef.current) {
        slideDownRef.current.kill();
      }
      if (slideUpRef.current) {
        slideUpRef.current.kill();
      }
    };
  }, []);

  if (typeof document === 'undefined' || !mounted) return null;

  const content = (
    <div
      ref={pageTransitionRef}
      className="page-transition"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 99999,
        pointerEvents: 'none',
      }}
    >
      <div className="div div-primary"></div>
      <div className="div div-primary"></div>
      <div className="div div-primary"></div>
      <div className="div div-primary"></div>
      <div className="div div-primary"></div>
      <div className="div div-primary"></div>
      <div className="div div-primary"></div>
    </div>
  );

  return createPortal(content, document.body);
}

