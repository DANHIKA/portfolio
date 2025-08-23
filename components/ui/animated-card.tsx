"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent, useRef } from "react";

interface AnimatedCardProps {
  title: string;
  children?: React.ReactNode;
}

export const AnimatedCard = ({ title, children }: AnimatedCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["25deg", "-25deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-25deg", "25deg"]);

  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-15px", "15px"]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], ["-15px", "15px"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-52 w-72 rounded-xl border shadow-xl backdrop-blur-sm transition-all duration-200 ease-out"
      whileHover={{
        scale: 1.02,
      }}
    >
      {/* Card background with gradient */}
      <div 
        className="absolute inset-0 rounded-xl backdrop-blur-sm"
        style={{
          transform: "translateZ(20px)",
          transformStyle: "preserve-3d",
        }}
      />

      {/* Card content */}
      <motion.div
        ref={contentRef}
        style={{
          transform: "translateZ(100px)",
          transformStyle: "preserve-3d",
          x: translateX,
          y: translateY,
        }}
        className="absolute inset-4 flex flex-col gap-3"
      >
        <h3 className="text-lg font-semibold tracking-tight leading-[1.2]">
          {title}
        </h3>
        <div className="flex-1 relative" style={{ transform: "translateZ(50px)" }}>
          {children}
        </div>
      </motion.div>

      {/* Gradient border */}
      <div 
        className="absolute inset-0 rounded-xl border border-neutral-800/50 pointer-events-none"
        style={{
          transform: "translateZ(40px)",
          transformStyle: "preserve-3d",
        }}
      />
    </motion.div>
  );
}; 