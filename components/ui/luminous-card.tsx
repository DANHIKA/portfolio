"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface LuminousCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon?: React.ReactNode;
  toggleLabel?: string;
  defaultActive?: boolean;
}

export function LuminousCard({
  title,
  description,
  icon,
  toggleLabel = "Activate",
  defaultActive = false,
  className,
  ...props
}: LuminousCardProps) {
  const [active, setActive] = React.useState(defaultActive);

  return (
    <div
      data-active={active}
      className={cn(
        "group relative flex h-full flex-col justify-end overflow-hidden rounded-[1.8rem] border border-white/10 bg-neutral-950 text-white shadow-[0_20px_50px_-25px_rgba(80,70,180,0.45)] transition-all duration-500 ease-out focus-within:border-white/30 focus-within:outline-none",
        "before:pointer-events-none before:absolute before:inset-[-1.5rem] before:-z-10 before:rounded-[2.6rem] before:border before:border-white/5 before:bg-gradient-to-b before:from-white/5 before:via-transparent before:to-white/0 before:opacity-70 before:transition-all before:duration-500 before:ease-out",
        "after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:bg-[radial-gradient(circle_at_top,_rgba(148,130,255,0.18),_transparent_65%)] after:opacity-0 after:transition-opacity after:duration-500 after:ease-out",
        "data-[active=true]:border-white/20 data-[active=true]:shadow-[0_30px_60px_-20px_rgba(150,120,255,0.6)] data-[active=true]:before:border-white/15 data-[active=true]:before:opacity-90 data-[active=true]:after:opacity-100",
        className
      )}
      {...props}
    >
      <LightLayers />
      <div className="relative flex flex-col gap-6 p-8">
        {icon ? (
          <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-500 ease-out group-data-[active=true]:scale-105 group-data-[active=true]:bg-white/20">
            {icon}
          </div>
        ) : null}

        <div className="space-y-3 text-center">
          <h3 className="text-lg font-semibold uppercase tracking-[0.35em] text-white">
            {title}
          </h3>
          <p className="text-sm text-white/70">{description}</p>
        </div>

        <ToggleSwitch
          label={toggleLabel}
          active={active}
          onToggle={() => setActive((state) => !state)}
        />
      </div>
    </div>
  );
}

interface ToggleSwitchProps {
  label: string;
  active: boolean;
  onToggle: () => void;
}

function ToggleSwitch({ label, active, onToggle }: ToggleSwitchProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "relative ml-auto inline-flex h-9 w-28 cursor-pointer items-center justify-start rounded-full bg-black/60 px-2 text-xs font-medium text-white/60 transition-all duration-500",
        "shadow-[inset_0_-6px_12px_rgba(0,0,0,0.45),_0_0_0_1px_rgba(255,255,255,0.04)]",
        "hover:text-white/80",
        active && "bg-white/80 text-black shadow-[inset_0_-4px_10px_rgba(255,255,255,0.4),_0_0_0_1px_rgba(255,255,255,0.25)]"
      )}
      aria-pressed={active}
    >
      <span
        className={cn(
          "absolute left-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/70 text-[0.6rem] font-semibold uppercase tracking-widest text-neutral-900 transition-transform duration-500 ease-out",
          active && "translate-x-[2.9rem] bg-neutral-900 text-white"
        )}
      >
        {active ? "ON" : "OFF"}
      </span>
      <span className="ml-12 select-none text-[0.65rem] uppercase tracking-[0.3em]">
        {label}
      </span>
    </button>
  );
}

function LightLayers() {
  return (
    <div className="pointer-events-none">
      <div className="absolute left-1/2 top-4 h-16 w-[75%] -translate-x-1/2 -rotate-x-45 transform rounded-full bg-gradient-to-b from-white/30 to-transparent opacity-20 blur-xl transition-all duration-500 group-data-[active=true]:opacity-60" />
      <div className="absolute inset-x-6 top-10 h-44 rounded-[4rem] bg-gradient-to-b from-white/15 via-white/5 to-transparent opacity-0 blur-lg transition-opacity duration-500 group-data-[active=true]:opacity-80" />
      <div className="absolute inset-x-16 bottom-10 h-28 rounded-full bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-40 blur-3xl transition-opacity duration-500 group-data-[active=true]:opacity-20" />
    </div>
  );
}
