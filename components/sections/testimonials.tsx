"use client";

import CardSwap, { Card } from "@/components/CardSwap/CardSwap";

export default function Testimonials() {
  return (
    <section id="testimonials" className="max-w-4xl mx-auto py-24 md:py-32 px-6">
      <div className="w-full max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="section-title text-left text-6xl text-bold">Testimonials</h2>
          <p className="section-subtitle max-w-xl text-left">
            Words from people I worked with.
          </p>
        </div>

        {/* Right: CardSwap */}
        <div className="relative min-h-[480px] flex justify-center items-center">
          <CardSwap
            width={480}
            height={300}
            cardDistance={24}
            verticalDistance={60}
            delay={5500}
            pauseOnHover
            easing="elastic"
            containerClassName="perspective-[900px]"
          >
            <Card className="bg-white/80 dark:bg-black/60 border-white/15 backdrop-blur-md shadow-lg">
              <div className="w-full h-full p-6 flex flex-col justify-between">
                <p className="text-lg leading-relaxed">
                  &quot;Daniel transformed our legacy frontend into a modern, fast, and
                  accessible React stack. Velocity increased by 40%.&quot;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-semibold">
                    AK
                  </div>
                  <div>
                    <div className="font-semibold">Anna K.</div>
                    <div className="text-sm text-muted-foreground">PM, SaaSCo</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-white/80 dark:bg-black/60 border-white/15 backdrop-blur-md shadow-lg">
              <div className="w-full h-full p-6 flex flex-col justify-between">
                <p className="text-lg leading-relaxed ">
                  &quot;Great UX instincts. He shipped a design system and reduced UI
                  defects by more than half.&quot;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-fuchsia-500/20 text-fuchsia-400 flex items-center justify-center font-semibold">
                    JM
                  </div>
                  <div>
                    <div className="font-semibold">John M.</div>
                    <div className="text-sm text-muted-foreground">Design Lead, Gridly</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-white/80 dark:bg-black/60 border-white/15 backdrop-blur-md shadow-lg">
              <div className="w-full h-full p-6 flex flex-col justify-between">
                <p className="text-lg leading-relaxed ">
                  &quot;End-to-end ownership: APIs, infra, and frontend. Reliable and
                  proactive collaborator.&quot;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-semibold">
                    RS
                  </div>
                  <div>
                    <div className="font-semibold">Ravi S.</div>
                    <div className="text-sm text-muted-foreground">CTO, Finlytics</div>
                  </div>
                </div>
              </div>
            </Card>
          </CardSwap>
        </div>
      </div>
    </section>
  );
}