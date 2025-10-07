import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  withCorners?: boolean;
}

// Container-width divider (stays within its parent width)
export function Divider({ className, withCorners = false }: DividerProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <div className="h-px bg-border/20" />
      {withCorners && (
        <>
          {/* Left corner marker */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rotate-45 border border-border/40" />
          </div>
          {/* Right corner marker */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rotate-45 border border-border/40" />
          </div>
        </>
      )}
    </div>
  );
}

// Full-bleed divider (spans viewport width while content remains centered)
export function FullWidthDivider({ className, withCorners = false }: DividerProps) {
  return (
    <div className={cn("relative -mx-[calc(50vw-50%)] w-screen", className)}>
      <div className="h-px bg-border/20 w-full" />
      {withCorners && (
        <>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rotate-45 border border-border/40" />
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rotate-45 border border-border/40" />
          </div>
        </>
      )}
    </div>
  );
}
