"use client";

import { useState, useEffect, useRef } from "react";
import BoxLoader from "./box-loader";
import gsap from "gsap";

export default function Preloader() {
  const [currentView, setCurrentView] = useState<"box" | "transition">("box");
  const [isVisible, setIsVisible] = useState(true);
  const pageTransitionRef = useRef<HTMLDivElement>(null);
  const divsRef = useRef<HTMLElement[]>([]);
  const slideDownRef = useRef<gsap.core.Timeline | null>(null);
  const slideUpRef = useRef<gsap.core.Timeline | null>(null);

  // Initialize the page transition animations
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

  useEffect(() => {
    // Show box loader for 3 seconds
    const boxTimer = setTimeout(() => {
      setCurrentView("transition");
      // Initialize transition animations
      setTimeout(() => {
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
    }, 3000);

    // After transition completes, hide everything and reveal page
    const transitionTimer = setTimeout(() => {
      if (slideUpRef.current) {
        slideUpRef.current.restart();
        // Hide completely after slide up and reveal page
        setTimeout(() => {
          setIsVisible(false);
          // Add the 'revealed' class to the page content directly
          const pageContent = document.querySelector('.page-reveal');
          if (pageContent) {
            pageContent.classList.add('revealed');
          }
        }, 700); // Duration of slide up animation
      }
    }, 5000); // Box loader (3s) + some transition time

    return () => {
      clearTimeout(boxTimer);
      clearTimeout(transitionTimer);
      if (slideDownRef.current) {
        slideDownRef.current.kill();
      }
      if (slideUpRef.current) {
        slideUpRef.current.kill();
      }
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      {currentView === "box" ? (
        <BoxLoader />
      ) : (
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
      )}
    </div>
  );
}