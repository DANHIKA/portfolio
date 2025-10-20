import { useId } from "react";
import { cn } from "@/lib/utils";

interface SketchBackgroundProps {
  className?: string;
  strokeClassName?: string;
  patternWidth?: number;
  patternHeight?: number;
  path?: string;
  position?: "absolute" | "static";
}

const DEFAULT_PATH = "M-3 13 15-5M-5 5l18-18M-1 21 17 3";

export function SketchBackground({
  className,
  strokeClassName = "stroke-white/10",
  patternWidth = 10,
  patternHeight = 10,
  path = DEFAULT_PATH,
  position = "absolute",
}: SketchBackgroundProps) {
  const rawId = useId().replace(/:/g, "");
  const patternId = `${rawId}-sketch-pattern`;

  const positionClasses =
    position === "absolute" ? "absolute inset-0 h-full w-full" : "w-full";

  return (
    <svg
      className={cn(positionClasses, strokeClassName, className)}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width={patternWidth}
          height={patternHeight}
          patternUnits="userSpaceOnUse"
        >
          <path d={path} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} stroke="none" />
    </svg>
  );
}
