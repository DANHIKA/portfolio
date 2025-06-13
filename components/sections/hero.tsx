"use client";

import { AnimatedCard } from "@/components/ui/animated-card";
import ChatCard from "@/components/ui/chat-card";
import ProfileCard from "@/components/ui/profile-card";
import StatsCard from "@/components/ui/stats-card";
import NotificationCard from "@/components/ui/notification-card";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 py-32">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl leading-[1.1]">
              Hi, I&apos;m Daniel Ntandika
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-[50ch] leading-relaxed">
              I&apos;m a software engineer specializing in building exceptional digital experiences.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 transform rotate-6">
              <div className="space-y-4 md:space-y-6">
                <AnimatedCard title="Team Chat">
                  <ChatCard />
                </AnimatedCard>
                <AnimatedCard title="Analytics">
                  <StatsCard />
                </AnimatedCard>
              </div>
              <div className="space-y-4 md:space-y-6 mt-4 sm:mt-8">
                <AnimatedCard title="Profile">
                  <ProfileCard />
                </AnimatedCard>
                <AnimatedCard title="Notifications">
                  <NotificationCard />
                </AnimatedCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}