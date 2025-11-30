"use client";

import React from "react";
import { cn } from "@/lib/utils";

type AnimatedLinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: string;
  rel?: string;
};

export const AnimatedLink = ({
  children,
  href,
  className,
  target,
  rel,
}: AnimatedLinkProps) => {
  // Determine if link is external
  // If target is explicitly "_self", it's internal
  // Otherwise, check if href is external (http, mailto, tel) or if target is "_blank"
  const isInternal = target === "_self" || href.startsWith("#") || href.startsWith("/");
  const isExternal = !isInternal && (target === "_blank" || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:"));
  const finalRel = isExternal ? (rel || "noopener noreferrer") : rel;
  const finalTarget = target || (isExternal ? "_blank" : undefined);

  return (
    <a
      href={href}
      target={finalTarget}
      rel={finalRel}
      className={cn(
        "group relative flex items-center",
        "before:pointer-events-none before:absolute before:left-0 before:w-full before:bg-primary before:content-['']",
        "before:origin-right before:scale-x-0 before:transition-all before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)]",
        "before:origin-center md:before:bottom-0",
        "before:z-0 px-2 before:h-0 before:scale-x-100 hover:before:h-[1.4em]",
        className,
      )}
    >
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
        {children}
      </span>
      {isExternal && (
        <svg
          className="relative z-10 ml-[0.6em] mt-[0em] size-[0.55em] translate-y-1 opacity-0 transition-all duration-300 [motion-reduce:transition-none] group-hover:translate-y-0 group-hover:rotate-45 group-hover:opacity-100 group-hover:text-white motion-reduce:transition-none"
          fill="none"
          viewBox="0 0 10 10"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M1.004 9.166 9.337.833m0 0v8.333m0-8.333H1.004"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </a>
  );
};

