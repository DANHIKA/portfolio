import React, { useEffect, useState } from "react";
import { motion, useAnimation, type Transition } from "framer-motion";

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
  className?: string;
}

const getRotationTransition = (duration: number, loop: boolean = true): Transition => ({
  ease: "linear",
  duration,
  type: "tween",
  repeat: loop ? Infinity : 0,
  repeatType: "loop",
});

const getTransition = (duration: number) => ({
  rotate: getRotationTransition(duration),
  scale: {
    type: "spring" as const,
    damping: 20,
    stiffness: 300,
  },
});

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const [currentRotation, setCurrentRotation] = useState(0);

  useEffect(() => {
    controls.start({
      rotate: [currentRotation, currentRotation + 360],
      scale: 1,
      transition: getTransition(spinDuration),
    });
  }, [spinDuration, controls, onHover, text]);

  const handleHoverStart = () => {
    if (!onHover) return;
    switch (onHover) {
      case "slowDown":
        controls.start({
          rotate: [currentRotation, currentRotation + 360],
          scale: 1,
          transition: getTransition(spinDuration * 2),
        });
        break;
      case "speedUp":
        controls.start({
          rotate: [currentRotation, currentRotation + 360],
          scale: 1,
          transition: getTransition(spinDuration / 4),
        });
        break;
      case "pause":
        controls.start({
          rotate: currentRotation,
          scale: 1,
          transition: {
            rotate: { type: "spring", damping: 20, stiffness: 300 },
            scale: { type: "spring", damping: 20, stiffness: 300 },
          },
        });
        break;
      case "goBonkers":
        controls.start({
          rotate: [currentRotation, currentRotation + 360],
          scale: 0.8,
          transition: getTransition(spinDuration / 20),
        });
        break;
      default:
        break;
    }
  };

  const handleHoverEnd = () => {
    controls.start({
      rotate: [currentRotation, currentRotation + 360],
      scale: 1,
      transition: getTransition(spinDuration),
    });
  };

  return (
    <motion.div
      initial={{ rotate: 0 }}
      className={`mx-auto rounded-full w-[200px] h-[200px] text-white font-black text-center cursor-pointer origin-center ${className}`}
      animate={controls}
      onUpdate={(latest) => setCurrentRotation(Number(latest.rotate))}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotation = (360 / letters.length) * i;
        const factor = Number((Math.PI / letters.length).toFixed(0));
        const x = factor * i;
        const y = factor * i;
        const transform = `rotateZ(${rotation}deg) translate3d(${x}px, ${y}px, 0)`;

        return (
          <span
            key={i}
            className="absolute inline-block inset-0 text-2xl transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
            style={{ transform, WebkitTransform: transform }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
