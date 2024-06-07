import React, { useMemo } from "react";
import { useTheme } from "./contexts/ThemeContext";

const useParticlesConfig = () => {
  const { theme } = useTheme();

  const particlesConfig = useMemo(
    () => ({
      // background: {
      //   color: {
      //     value: theme === "dark" ? "#0d47a1" : "#ffffff",
      //   },
      // },
      fpsLimit: 60, // Adjusted to 60 for smoother animation
      interactivity: {
        detectsOn: "window", // Detects interactions on the window
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100, // Reduced distance for better user experience
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: theme === "dark" ? "#ffffff" : "grey",
        },
        links: {
          color: theme === "dark" ? "#ffffff" : "grey",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2, // Reduced speed for better visibility
          outMode: "bounce", // Changed to bounce for particles to bounce off the edges
        },
        number: {
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [theme]
  );

  return particlesConfig;
};

export default useParticlesConfig;
