"use client";


import { BackgroundBeams } from "@/components/ui/background-beams";
import CircularText from "@/animations/CircularText/CircularText";

export default function Hero() {

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <BackgroundBeams className="absolute inset-0" />
      
      <div className="z-10 text-center px-6 max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.15] mb-8">
          Crafting digital <span className="block mt-3 bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-400">experiences</span>
        </h1>
        
        <div className="space-y-6">
          <p className="text-base md:text-lg font-light leading-[1.6] tracking-wide max-w-2xl mx-auto text-balance opacity-80">
            Delivering scalable solutions, pixel-perfect interfaces, and exceptional user experiences that drive business growth
          </p>
        </div>

        <div className="mt-16">
          <CircularText 
            text="Scroll  to  reveal "
            spinDuration={15}
            onHover="slowDown"
            className="opacity-60 hover:opacity-100 transition-opacity w-28 h-28 mx-auto"
          />
        </div>
      </div>
    </div>
  );
}