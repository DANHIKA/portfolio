"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis(); // manual raf for GSAP ticker sync
    gsap.registerPlugin(ScrollTrigger);

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    const ticker = (time: number) => {
      // GSAP ticker passes seconds; Lenis expects ms
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(ticker);
      lenis.off("scroll", onScroll as () => void);
      lenis.destroy();
    };
  }, []);

  return null;
}


