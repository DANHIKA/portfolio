"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";

export default function PageTransition() {
  const pageTransitionRef = useRef<HTMLDivElement>(null);
  const divsRef = useRef<HTMLElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  const slideDownRef = useRef<gsap.core.Timeline | null>(null);
  const slideUpRef = useRef<gsap.core.Timeline | null>(null);
  const masterTimelineRef = useRef<gsap.core.Timeline | null>(null);

  // Mount immediately and show for 10 seconds
  useEffect(() => {
    setMounted(true);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const initAnimations = () => {
    if (!pageTransitionRef.current) return;

    const pageDiv = Array.from(
      pageTransitionRef.current.querySelectorAll(".div")
    ) as HTMLElement[];

    if (pageDiv.length === 0) return;

    divsRef.current = pageDiv;

    // Reset positions - start from top
    gsap.set(pageDiv, { bottom: "100%" });

    // Create timelines
    slideDownRef.current = gsap.timeline({ paused: true });
    slideUpRef.current = gsap.timeline({ paused: true });

    // Slide down animation
    slideDownRef.current.to(pageDiv, {
      bottom: "0%",
      duration: 0.5,
      ease: "power2.in",
      stagger: 0.2,
    });

    // Slide up animation
    slideUpRef.current.to(pageDiv, {
      bottom: "100%",
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.2,
    });
  };

  const playSlideDown = () => {
    if (!slideDownRef.current || !divsRef.current.length) return;
    
    // Reset positions
    gsap.set(divsRef.current, { bottom: "100%" });
    
    // Play slide down
    slideDownRef.current.restart();
  };

  const playSlideUp = () => {
    if (!slideUpRef.current) return;
    slideUpRef.current.restart();
  };

  // Initialize animations when mounted
  useEffect(() => {
    if (!mounted) return;

    const timer = setTimeout(() => {
      if (pageTransitionRef.current) {
        initAnimations();
        // Play slide down immediately
        setTimeout(() => {
          playSlideDown();
        }, 100);
      }
    }, 50);

    return () => {
      clearTimeout(timer);
    };
  }, [mounted]);

  // Play slide up when loading finishes
  useEffect(() => {
    if (!mounted || isLoading) return;

    const timer = setTimeout(() => {
      playSlideUp();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading, mounted]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (masterTimelineRef.current) {
        masterTimelineRef.current.kill();
      }
      if (slideDownRef.current) {
        slideDownRef.current.kill();
      }
      if (slideUpRef.current) {
        slideUpRef.current.kill();
      }
    };
  }, []);

  if (typeof document === 'undefined') return null;

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
        visibility: (mounted && isLoading) ? 'visible' : 'hidden',
        opacity: (mounted && isLoading) ? 1 : 0,
        backgroundColor: 'rgba(255, 0, 0, 0.1)', // Light red background to see if container is there
      }}
    >
      <div 
        className="div" 
        style={{ 
          backgroundColor: 'red',
          position: 'fixed',
          height: '100%',
          width: '25%',
          left: '0%',
          bottom: '0%',
        }}
      ></div>
      <div 
        className="div" 
        style={{ 
          backgroundColor: 'red',
          position: 'fixed',
          height: '100%',
          width: '25%',
          left: '25%',
          bottom: '0%',
        }}
      ></div>
      <div 
        className="div" 
        style={{ 
          backgroundColor: 'red',
          position: 'fixed',
          height: '100%',
          width: '25%',
          left: '50%',
          bottom: '0%',
        }}
      ></div>
      <div 
        className="div" 
        style={{ 
          backgroundColor: 'red',
          position: 'fixed',
          height: '100%',
          width: '25%',
          left: '75%',
          bottom: '0%',
        }}
      ></div>
    </div>
  );

  return createPortal(content, document.body);
}
