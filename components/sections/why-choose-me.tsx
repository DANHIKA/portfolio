"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Grid } from "@/components/ui/grid";
import { Code2, Zap, Target, Users, Clock, Award } from "lucide-react";

// Lordicon Player must run only on the client to avoid SSR/hydration issues
const LordiconPlayer = dynamic(() => import("@lordicon/react").then(m => m.Player), {
  ssr: false,
});

const features = [
  {
    icon: "https://cdn.lordicon.com/adgqyloy.json",
    fallback: Code2,
    title: "Security",
    colorScheme: "var(--primary)",
  },
  {
    icon: "https://cdn.lordicon.com/zmfzhhiu.json",
    fallback: Zap,
    title: "Fast Performance",
    colorScheme: "var(--primary)",
  },
  {
    icon: "https://cdn.lordicon.com/agcsrmoe.json",
    fallback: Target,
    title: "Innovation",
    colorScheme: "var(--chart-3)",
  },
  {
    icon: "https://cdn.lordicon.com/gyyhoycg.json",
    fallback: Users,
    title: "Documentation",
    colorScheme: "var(--chart-4)",
  },
  {
    icon: "https://cdn.lordicon.com/pgogjkai.json",
    fallback: Clock,
    title: "Timely Delivery",
    colorScheme: "var(--chart-5)",
  },
  {
    icon: "https://cdn.lordicon.com/kllxgfpx.json",
    fallback: Award,
    title: "Quality Assurance",
    colorScheme: "var(--accent)",
  }
];

export default function WhyChooseMe() {
  const IconComponent = ({ feature, index }: { feature: typeof features[0], index: number }) => {
    const [iconData, setIconData] = useState<any | null>(null);
    const [useFallback, setUseFallback] = useState(false);
    const playerRef = useRef<any>(null);

    const handleMouseEnter = () => {
      if (playerRef.current) {
        playerRef.current.playFromBeginning();
      }
    };

    useEffect(() => {
      let cancelled = false;
      const controller = new AbortController();
      const timeout = setTimeout(() => {
        if (!cancelled) setUseFallback(true);
        controller.abort();
      }, 3000);

      async function loadIcon() {
        try {
          if (!feature.icon) {
            setUseFallback(true);
            return;
          }
          const res = await fetch(feature.icon, { signal: controller.signal });
          if (!res.ok) throw new Error("Icon fetch failed");
          const data = await res.json();
          if (!cancelled) setIconData(data);
        } catch (_e) {
          if (!cancelled) setUseFallback(true);
        } finally {
          clearTimeout(timeout);
        }
      }

      loadIcon();
      return () => {
        cancelled = true;
        controller.abort();
        clearTimeout(timeout);
      };
    }, [feature.icon]);

    if (useFallback) {
      const FallbackIcon = feature.fallback;
      return (
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-lg bg-primary/10">
          <FallbackIcon className="h-12 w-12" />
        </div>
      );
    }

    if (!iconData) {
      return <div className="h-20 w-20 rounded-lg bg-primary/5" style={{ backgroundColor: 'var(--muted)' }} />;
    }

    return (
      <div
        className="theme-icon-container"
        style={{ width: 80, height: 80 }}
        onMouseEnter={handleMouseEnter}
      >
        <LordiconPlayer 
          // @ts-ignore - Player component supports ref but TypeScript doesn't know it
          ref={playerRef}
          icon={iconData} 
          size={80}
          colors={`primary:#6b7280,secondary:#d1d5db,tertiary:#374151,quaternary:#f9fafb`}
        />
      </div>
    );
  };
  return (
    <section className="relative flex flex-col items-center overflow-hidden py-16">
      <div className="relative z-10 flex w-full flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-16 text-center"
        >
          <p className="text-center text-base font-semibold leading-7 text-foreground">Why Choose Me</p>
          <h2 className="mx-auto mt-2 max-w-2xl text-center text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-primary">
            What Sets Me Apart
          </h2>
        </motion.div>

        <div className="w-full max-w-6xl block md:hidden">
          {/* Mobile: Single column layout without Grid */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-6 text-center border border-border rounded-lg"
              >
                <div className="mb-4">
                  <IconComponent feature={feature} index={index} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-6xl hidden md:block">
          {/* Desktop: Grid layout */}
          <Grid 
            columns={3} 
            rows={2} 
            height="h-auto" 
            width="w-full"
            showPlusIcons={true}
            className="border-border min-h-[400px]"
          >
            {features[0] && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 * 0.1 }}
                className="flex flex-col items-center justify-center p-6 text-center group"
              >
                <div className="mb-4">
                  <IconComponent feature={features[0]} index={0} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Security
                </h3>
              </motion.div>
            )}
            {features[1] && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 * 0.1 }}
                className="flex flex-col items-center justify-center p-6 text-center group"
              >
                <div className="mb-4">
                  <IconComponent feature={features[1]} index={1} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Fast Performance
                </h3>
              </motion.div>
            )}
            {features[2] && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 2 * 0.1 }}
                className="flex flex-col items-center justify-center p-6 text-center group"
              >
                <div className="mb-4">
                  <IconComponent feature={features[2]} index={2} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Innovation
                </h3>
              </motion.div>
            )}
            {features[3] && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 3 * 0.1 }}
                className="flex flex-col items-center justify-center p-6 text-center group"
              >
                <div className="mb-4">
                  <IconComponent feature={features[3]} index={3} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Documentation
                </h3>
              </motion.div>
            )}
            {features[4] && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 4 * 0.1 }}
                className="flex flex-col items-center justify-center p-6 text-center group"
              >
                <div className="mb-4">
                  <IconComponent feature={features[4]} index={4} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Timely Delivery
                </h3>
              </motion.div>
            )}
            {features[5] && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 5 * 0.1 }}
                className="flex flex-col items-center justify-center p-6 text-center group"
              >
                <div className="mb-4">
                  <IconComponent feature={features[5]} index={5} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Quality Assurance
                </h3>
              </motion.div>
            )}
          </Grid>
        </div>
      </div>
    </section>
  );
}
