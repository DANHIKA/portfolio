"use client";

import { Button } from "@/components/ui/button";
import RotatingText from "@/animations/RotatingText/RotatingText";

export default function Hero() {
  return (
    <section className="relative flex items-center py-10 md:py-16">
      <div className="absolute inset-0 -z-10 w-full" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
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
              
              <p className="text-lg leading-relaxed max-w-lg mx-auto">
                I create modern web applications and digital solutions that bring ideas to life with clean code and thoughtful design.
              </p>
            </div>

            <Button className="mx-auto flex items-center gap-4 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              View My Work
            </Button>
          </div>
          {/**
           * Card section commente  d out for centered hero layout
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
    </section>
  );
}