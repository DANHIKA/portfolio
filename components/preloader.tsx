"use client";

import { useState, useEffect } from "react";
import BoxLoader from "./box-loader";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show box loader for 3 seconds then hide
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Add the 'revealed' class to the page content directly
      const pageContent = document.querySelector('.page-reveal');
      if (pageContent) {
        pageContent.classList.add('revealed');
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <BoxLoader />
    </div>
  );
}