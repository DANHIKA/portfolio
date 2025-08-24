"use client";

import { Button } from "@/components/ui/button";
import RotatingText from "@/animations/RotatingText/RotatingText";
import RippleGrid from "@/backgrounds/RippleGrid/RippleGrid";

export default function Hero() {
  return (
    <section className="relative flex flex-col">
      <div className="relative h-[500px] overflow-hidden">
        {/* Background layer */}
        <div className="absolute inset-0 -z-10">
          <RippleGrid
            enableRainbow={false}
            gridColor="#a855f7"
            rippleIntensity={0.05}
            gridSize={10}
            gridThickness={15}
            mouseInteraction={true}
            mouseInteractionRadius={1.2}
            opacity={0.8}
          />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex items-center isolate">
          <div className="flex flex-col items-center justify-center gap-8 text-center w-full">
            {/* Hero Content */}
            <div className="w-full max-w-3xl space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                  Building{" "}
                  <RotatingText
                    texts={[
                      "digital experiences",
                      "modern web apps",
                      "delightful interfaces",
                    ]}
                    rotationInterval={2500}
                    splitBy="characters"
                    staggerDuration={0.02}
                    mainClassName="inline-flex bg-primary text-white rounded-lg px-4 py-2"
                    elementLevelClassName="will-change-transform"
                  />
                </h1>
                {/* <p className="text-lg leading-relaxed max-w-lg mx-auto">
                  I create modern web applications and digital solutions that bring ideas to life with clean code and thoughtful design.
                </p> */}
                <Button className="mx-auto flex items-center gap-4 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  View My Work
                </Button>
              </div>
            </div>
            {/**
             * Card section commented out for centered hero layout
             *
             * <div className="lg:col-span-5">
             *   <ProfileCard
             *     name="Daniel Ntandika"
             *     title="Software Engineer"
             *     handle="danhika"
             *     status="Online"
             *     contactText="Contact Me"
             *     avatarUrl="/me.png"
             *     showUserInfo={true}
             *     enableTilt={true}
             *     enableMobileTilt={false}
             *     onContactClick={() => console.log('Contact clicked')}
             *     iconUrl="/iconpattern.png"
             *     showBehindGradient
             *   />
             * </div>
             */}
          </div>
        </div>
      </div>
    </section>
  );
}