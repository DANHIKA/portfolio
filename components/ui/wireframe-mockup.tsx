import { cn } from "@/lib/utils";

interface WireframeMockupProps {
  className?: string;
  mode?: "default" | "simple";
}

// Simple box
const Box = () => (
  <div className="aspect-square border-2 border-foreground rounded-xl" />
);

// Box with X
const BoxWithX = () => (
  <div className="aspect-square border-2 border-foreground rounded-xl relative overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-full w-px bg-foreground" style={{ transform: 'rotate(45deg)' }} />
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-full w-px bg-foreground" style={{ transform: 'rotate(-45deg)' }} />
    </div>
  </div>
);

// Box with separator and three dots at bottom
const BoxWithDotsBottom = () => (
  <div className="aspect-[3/5] border-2 border-foreground rounded-xl overflow-hidden flex flex-col">
    <div className="flex-1 border-b-2 border-foreground" />
    <div className="h-12 flex items-center justify-center gap-1.5">
      <div className="h-2 w-2 bg-foreground rounded-full" />
      <div className="h-2 w-2 bg-foreground rounded-full" />
      <div className="h-2 w-2 bg-foreground rounded-full" />
    </div>
  </div>
);

// Box with separator and three dots at top
const BoxWithDotsTop = () => (
  <div className="aspect-[3/5] border-2 border-foreground rounded-xl overflow-hidden flex flex-col">
    <div className="h-12 flex items-center justify-center gap-1.5 border-b-2 border-foreground">
      <div className="h-2 w-2 bg-foreground rounded-full" />
      <div className="h-2 w-2 bg-foreground rounded-full" />
      <div className="h-2 w-2 bg-foreground rounded-full" />
    </div>
    <div className="flex-1" />
  </div>
);

// Two text lines
const TextLines = () => (
  <div className="flex flex-col gap-2">
    <div className="h-2 bg-foreground rounded-full" />
    <div className="h-2 bg-foreground rounded-full" />
  </div>
);

export function WireframeMockup({ className, mode = "default" }: WireframeMockupProps) {
  return (
    <div className={cn("w-full max-w-sm", className)}>
      {/* Top Grid */}
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-3">
          <BoxWithDotsBottom />
          <TextLines />
        </div>
       
        <div className="flex flex-col gap-3">
          <BoxWithX />
          <TextLines />
        </div>
       
        <BoxWithDotsBottom />
      </div>

      {/* Bottom Grid */}
      {mode !== "simple" && (
        <div className="grid grid-cols-3 gap-4 mt-6">
          <BoxWithX />
         
          <BoxWithDotsTop />
         
          <div className="flex flex-col gap-3">
            <Box />
            <TextLines />
          </div>
        </div>
      )}
    </div>
  );
}