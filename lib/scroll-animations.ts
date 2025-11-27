"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Sets up sticky scroll sections with GSAP ScrollTrigger
 * Each section will be pinned as the user scrolls, creating a stacked slide effect
 * @param sectionRefs Array of section element refs
 * @param excludeIndices Optional array of section indices to exclude from pinning (0-based)
 */
export function setupStickyScrollSections(
  sectionRefs: (HTMLElement | null)[],
  excludeIndices: number[] = []
) {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Filter out null refs
  const validSections = sectionRefs.filter((ref): ref is HTMLElement => ref !== null);

  if (validSections.length === 0) return;

  const scrollTriggers: ScrollTrigger[] = [];
  let isCleanedUp = false;

  // Wait for next frame to ensure DOM is ready
  requestAnimationFrame(() => {
    if (isCleanedUp) return;

    validSections.forEach((section, index) => {
      // Skip the first section (Hero) - let it scroll normally
      if (index === 0) return;
      
      // Skip excluded sections (e.g., sections that already have their own pinning)
      if (excludeIndices.includes(index)) return;

      // Find the actual section element within the wrapper, or use the wrapper itself
      const sectionElement = section.querySelector("section") || section;

      // Calculate pin duration - pin for the full height of the section
      // This creates the stacked slide effect
      const pinDuration = "+=100%"; // Pin for 100% of the section's height

      // Set initial styles for smooth transitions
      gsap.set(sectionElement, { opacity: 1 });

      const trigger = ScrollTrigger.create({
        trigger: sectionElement,
        start: "top top",
        end: pinDuration,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        // Smooth scrub for fluid pinning motion (higher value = smoother)
        scrub: 1.5,
        // Prevent conflicts with other ScrollTriggers
        invalidateOnRefresh: true,
        // Smooth enter/leave callbacks for subtle transitions
        onEnter: () => {
          gsap.fromTo(
            sectionElement,
            { opacity: 0.9 },
            { opacity: 1, duration: 0.6, ease: "power2.out" }
          );
        },
        onLeave: () => {
          gsap.to(sectionElement, {
            opacity: 0.98,
            duration: 0.3,
            ease: "power1.inOut",
          });
        },
        onEnterBack: () => {
          gsap.to(sectionElement, {
            opacity: 1,
            duration: 0.3,
            ease: "power1.inOut",
          });
        },
      });

      scrollTriggers.push(trigger);
    });

    // Refresh ScrollTrigger to recalculate positions
    ScrollTrigger.refresh();
  });

  // Return cleanup function
  return () => {
    isCleanedUp = true;
    scrollTriggers.forEach((trigger) => {
      try {
        trigger?.kill();
      } catch {
        // Trigger might already be killed, ignore
      }
    });
    // Also kill any ScrollTriggers that might have been created on these sections
    ScrollTrigger.getAll().forEach((st) => {
      const triggerElement = st.vars.trigger as HTMLElement;
      if (triggerElement && validSections.some((section) => section.contains(triggerElement))) {
        if (!scrollTriggers.includes(st)) {
          try {
            st.kill();
          } catch {
            // Ignore errors
          }
        }
      }
    });
  };
}

/**
 * Alternative approach: Pin sections with more control over the scroll distance
 * This version allows customizing the pin duration per section
 */
export function setupStickyScrollSectionsAdvanced(
  sectionRefs: (HTMLElement | null)[],
  options?: {
    pinDuration?: string | number;
    startOffset?: string;
    endOffset?: string;
  }
) {
  gsap.registerPlugin(ScrollTrigger);

  const validSections = sectionRefs.filter((ref): ref is HTMLElement => ref !== null);
  if (validSections.length === 0) return;

  const scrollTriggers: ScrollTrigger[] = [];
  const {
    pinDuration = "+=100%",
    startOffset = "top top",
    endOffset,
  } = options || {};

  requestAnimationFrame(() => {
    validSections.forEach((section, index) => {
      // Skip the first section
      if (index === 0) return;

      const sectionElement = section.querySelector("section") || section;
      const end = endOffset || pinDuration;

      const trigger = ScrollTrigger.create({
        trigger: sectionElement,
        start: startOffset,
        end: end,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        scrub: false,
        invalidateOnRefresh: true,
        // Markers can be enabled for debugging (remove in production)
        // markers: process.env.NODE_ENV === "development",
      });

      scrollTriggers.push(trigger);
    });

    ScrollTrigger.refresh();
  });

  return () => {
    scrollTriggers.forEach((trigger) => {
      try {
        trigger?.kill();
      } catch {
        // Trigger might already be killed, ignore
      }
    });
  };
}

