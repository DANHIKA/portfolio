"use client";

import * as React from "react";
import { addWeeks } from "date-fns";
import {
  GanttProvider,
  GanttHeader,
  GanttSidebar,
  GanttSidebarItem,
  GanttTimeline,
  GanttFeatureList,
  GanttFeatureRow,
  GanttToday,
  type GanttFeature,
  type GanttStatus,
} from "@/components/kibo-ui/gantt";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const processSteps: Array<{
  title: string;
  description: string;
  duration: string;
  weeks: number;
  color: string;
}> = [
  {
    title: "Plan",
    description:
      "Define project scope, set objectives, gather requirements, and establish success metrics. Deep dive into business goals, user needs, and constraints to frame the real problem we are solving.",
    duration: "2-4 weeks",
    weeks: 3,
    color: "#6366f1", // Indigo
  },
  {
    title: "Design",
    description:
      "Translate insights into flows, wireframes, and interaction models that balance feasibility and delight.",
    duration: "2-3 weeks",
    weeks: 3,
    color: "#06b6d4", // Cyan
  },
  {
    title: "Build",
    description:
      "Ship production-ready experiences with robust testing, automation, and clean, scalable architecture.",
    duration: "4-8 weeks",
    weeks: 6,
    color: "#10b981", // Green
  },
  {
    title: "Deploy",
    description:
      "Launch the product with careful monitoring, performance optimization, and seamless rollout strategies.",
    duration: "1-2 weeks",
    weeks: 2,
    color: "#3b82f6", // Blue
  },
  {
    title: "Iterate",
    description:
      "Measure outcomes, gather feedback, and refine quickly to keep delivering compounding value over time.",
    duration: "Ongoing",
    weeks: 4,
    color: "#f59e0b", // Amber
  },
];

const statuses: GanttStatus[] = processSteps.map((step, index) => ({
  id: `status-${index}`,
  name: step.title,
  color: step.color,
}));

export default function Process() {
  // Use mounted state to avoid hydration mismatch
  const [mounted, setMounted] = React.useState(false);
  const [today, setToday] = React.useState<Date | null>(null);
  const ganttContainerRef = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    setMounted(true);
    setToday(new Date());
  }, []);
  
  // Create features from process steps - each on its own row using unique lanes
  const features: GanttFeature[] = React.useMemo(() => {
    if (!today) return [];
    
    let currentDate = new Date(today);
    
    return processSteps.map((step, index) => {
      const startAt = new Date(currentDate);
      const endAt = addWeeks(currentDate, step.weeks);
      
      // Move to next step's start date
      currentDate = endAt;
      
      return {
        id: `process-${index}`,
        name: step.title,
        startAt,
        endAt: index === processSteps.length - 1 ? addWeeks(endAt, 4) : endAt, // Iterate is ongoing, but set a future date for type compatibility
        status: statuses[index],
        lane: `lane-${index}`, // Each feature gets its own lane (row)
      };
    });
  }, [today]);
  
  // Calculate dynamic height based on number of features
  const ganttHeight = React.useMemo(() => {
    if (!mounted || features.length === 0) return 600; // Default height during loading
    const headerHeight = 60;
    const rowHeight = 36;
    const rowSpacing = 8; // Spacing between rows
    const padding = 40; // Padding at top and bottom
    return headerHeight + (features.length * rowHeight) + ((features.length - 1) * rowSpacing) + padding;
  }, [mounted, features.length]);
  
  // Scroll to today's date after Gantt is mounted
  React.useEffect(() => {
    if (!mounted || !today || features.length === 0) return;
    
    // Wait for Gantt to render, then scroll to the first feature (which starts from today)
    const timer = setTimeout(() => {
      const ganttContainer = ganttContainerRef.current?.querySelector('.gantt') as HTMLElement;
      if (!ganttContainer) return;
      
      // Calculate offset for today's date
      // Timeline starts from January of previous year (year - 1, month 0)
      const timelineStartYear = today.getFullYear() - 1;
      
      // For monthly range, calculate months difference
      const monthsDiff = (today.getFullYear() - timelineStartYear) * 12 + today.getMonth();
      const columnWidth = 150; // Monthly column width
      const zoom = 100;
      const parsedColumnWidth = (columnWidth * zoom) / 100;
      
      // Calculate offset for today (start of current month + day offset)
      const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
      const pixelsPerDay = parsedColumnWidth / daysInMonth;
      const dayOffset = (today.getDate() - 1) * pixelsPerDay; // -1 because day 1 should be at 0
      const offset = monthsDiff * parsedColumnWidth + dayOffset;
      
      // Scroll to today, leaving some space for sidebar
      const sidebarWidth = 300;
      const targetScroll = Math.max(0, offset - sidebarWidth / 2);
      
      ganttContainer.scrollTo({
        left: targetScroll,
        behavior: 'auto',
      });
    }, 200);
    
    return () => clearTimeout(timer);
  }, [mounted, today, features]);
  
  // Show loading state during hydration
  if (!mounted || !today) {
    return (
      <section id="process" className="relative py-24 w-screen -mx-[calc((100vw-100%)/2)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-medium tracking-wider text-muted-foreground">Process</p>
            <h2 className="mt-3 text-5xl font-bold tracking-tight text-primary">
              How ideas become shipped experiences
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A visual timeline of my development process from discovery to iteration
            </p>
          </div>
          <div className="rounded-lg border border-border/50 bg-background/50 overflow-hidden h-[600px] flex items-center justify-center">
            <p className="text-muted-foreground">Loading timeline...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="process" className="relative py-24 w-screen -mx-[calc((100vw-100%)/2)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="text-center text-base font-semibold leading-7 text-foreground">Process</p>
          <h2 className="mx-auto mt-2 max-w-2xl text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-primary">
            How ideas become shipped experiences
          </h2>
        </div>

        <div ref={ganttContainerRef} className="rounded-lg border border-border/50 bg-background/50 overflow-hidden">
          <style dangerouslySetInnerHTML={{__html: `
            [data-roadmap-ui="gantt-sidebar"] > div:first-child p:first-of-type {
              visibility: hidden;
              position: relative;
            }
            [data-roadmap-ui="gantt-sidebar"] > div:first-child p:first-of-type::after {
              content: "Development Process";
              visibility: visible;
              position: absolute;
              left: 0;
            }
          `}} />
          <div style={{ height: `${ganttHeight}px` }}>
            <GanttProvider range="monthly" zoom={100} className="h-full">
            <GanttSidebar>
              <div style={{ position: "relative" }}>
                {features.map((feature, index) => {
                    const step = processSteps.find((s) => s.title === feature.name);
                    return (
                      <HoverCard key={feature.id}>
                        <HoverCardTrigger asChild>
                          <div 
                            style={{ 
                              position: "absolute",
                              top: `calc(var(--gantt-header-height) + ${index * 36}px)`,
                              width: "100%",
                              height: "var(--gantt-row-height)",
                            }}
                          >
                            <GanttSidebarItem feature={feature} />
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div
                                className="h-3 w-3 rounded-full"
                                style={{ backgroundColor: feature.status.color }}
                              />
                              <h4 className="font-semibold text-sm">{feature.name}</h4>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {step?.description}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Duration: {step?.duration}
                            </p>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    );
                  })}
              </div>
            </GanttSidebar>
            
            <GanttTimeline>
              <GanttHeader />
              <GanttToday />
              <GanttFeatureList className="space-y-0">
                {features.map((feature, index) => {
                  const step = processSteps.find((s) => s.title === feature.name);
                  return (
                    <div
                      key={feature.id}
                      style={{
                        position: "absolute",
                        top: `calc(var(--gantt-header-height) + ${index * 36}px)`,
                        width: "100%",
                        height: "var(--gantt-row-height)",
                      }}
                    >
                      <GanttFeatureRow features={[feature]} className="mb-0">
                      {(f) => (
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <div className="flex items-center gap-2 px-2 cursor-pointer">
                              <div
                                className="h-2 w-2 rounded-full"
                                style={{ backgroundColor: f.status.color }}
                              />
                              <p className="flex-1 truncate text-xs font-medium">{f.name}</p>
                            </div>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-80">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <div
                                  className="h-3 w-3 rounded-full"
                                  style={{ backgroundColor: f.status.color }}
                                />
                                <h4 className="font-semibold text-sm">{f.name}</h4>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {step?.description}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Duration: {step?.duration}
                              </p>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      )}
                    </GanttFeatureRow>
                    </div>
                  );
                })}
              </GanttFeatureList>
            </GanttTimeline>
          </GanttProvider>
          </div>
        </div>
      </div>
    </section>
  );
}