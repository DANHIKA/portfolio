"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [128 / 255, 0 / 255, 128 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  // Detect if we're in dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Get primary color from theme and convert to RGB array [0-1]
  const getPrimaryColorRGB = useCallback((): [number, number, number] => {
    if (typeof window === 'undefined') return [0.5, 0, 0.5]; // Default purple
    
    try {
      const root = document.documentElement;
      const colorValue = getComputedStyle(root).getPropertyValue('--primary').trim();
      
      if (!colorValue) return [0.5, 0, 0.5];
      
      // Create a temporary element to let browser convert oklch/rgb to computed RGB
      const tempEl = document.createElement('div');
      tempEl.style.color = colorValue;
      tempEl.style.position = 'absolute';
      tempEl.style.visibility = 'hidden';
      tempEl.style.width = '1px';
      tempEl.style.height = '1px';
      document.body.appendChild(tempEl);
      
      const computedColor = getComputedStyle(tempEl).color;
      document.body.removeChild(tempEl);
      
      // Parse rgb(r, g, b) or rgba(r, g, b, a) to RGB array
      const rgbMatch = computedColor.match(/\d+/g);
      if (rgbMatch && rgbMatch.length >= 3) {
        const r = parseInt(rgbMatch[0]) / 255;
        const g = parseInt(rgbMatch[1]) / 255;
        const b = parseInt(rgbMatch[2]) / 255;
        return [r, g, b] as [number, number, number];
      }
    } catch (e) {
      console.warn('Failed to get primary color:', e);
    }
    
    return [0.5, 0, 0.5]; // Default purple fallback
  }, []);

  useEffect(() => {
    if (mounted) {
      const checkDarkMode = () => {
        const isDark = document.documentElement.classList.contains("dark") ||
          resolvedTheme === "dark" ||
          theme === "dark";
        setIsDarkMode(isDark);
      };
      
      checkDarkMode();
      
      // Watch for theme changes
      const observer = new MutationObserver(() => {
        checkDarkMode();
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      return () => observer.disconnect();
    }
  }, [mounted, theme, resolvedTheme]);

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const onResize = () => {
      if (canvasRef.current) {
        widthRef.current = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    // Clean up previous globe instance
    if (globeRef.current) {
      globeRef.current.destroy();
      // Reset opacity for smooth transition
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "0";
      }
    }

    // Get primary color for markers
    const primaryColorRGB = getPrimaryColorRGB();

    // Create theme-aware config
    const themeConfig: COBEOptions = {
      ...config,
      dark: isDarkMode ? 1 : 0,
      baseColor: isDarkMode 
        ? [0.2, 0.2, 0.25] // Darker base for dark mode
        : [1, 1, 1], // White base for light mode
      glowColor: isDarkMode
        ? [0.4, 0.4, 0.5] // Softer glow for dark mode
        : [0.9, 0.9, 1], // Brighter glow for light mode
      markerColor: primaryColorRGB, // Use primary theme color for markers
      mapBrightness: isDarkMode ? 0.8 : 1.2,
    };

    const globe = createGlobe(canvasRef.current!, {
      ...themeConfig,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phiRef.current += 0.005;
        state.phi = phiRef.current + rs.get();
        state.width = widthRef.current * 2;
        state.height = widthRef.current * 2;
      },
    });

    globeRef.current = globe;

    // Fade in the globe
    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 50);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config, mounted, isDarkMode, getPrimaryColorRGB]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-square w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 contain-[layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
