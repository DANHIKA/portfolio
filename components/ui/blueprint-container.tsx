import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BlueprintContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "6xl" | "7xl" | "8xl";
}

export function BlueprintContainer({ 
  children, 
  className,
  maxWidth = "6xl" 
}: BlueprintContainerProps) {
  const maxWidthClass = {
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
    "8xl": "max-w-8xl"
  }[maxWidth];

  return (
    <div className={cn("relative mx-auto ", maxWidthClass, className)}>
      {/* Left vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border dark:bg-white hidden md:block" />
      
      {/* Right vertical line */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-border dark:bg-white hidden md:block" />
      
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
