"use client";

import { useState, useEffect } from "react";
import BoxLoader from "./box-loader";

const webDevTips = [
  "Clean code is not written by following a set of rules, but by following a mindset.",
  "The best code is no code at all.",
  "Debugging is twice as hard as writing the code in the first place.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "First, solve the problem. Then, write the code.",
  "Experience is the name everyone gives to their mistakes.",
  "There are only two hard things in Computer Science: cache invalidation and naming things.",
  "Code is like humor. When you have to explain it, it's bad.",
  "The most disastrous thing that you can ever learn is your first programming language.",
  "Walking on water and developing software from a specification are easy if both are frozen.",
  "Programs must be written for people to read, and only incidentally for machines to execute.",
  "The best way to predict the future is to implement it.",
  "Simplicity is the soul of efficiency.",
  "Make it work, make it right, make it fast.",
  "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.",
  "The only way to learn a new programming language is by writing programs in it.",
  "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
  "Testing leads to failure, and failure leads to understanding.",
  "The difference between a good developer and a great developer is attention to detail.",
  "Code never lies, comments sometimes do."
];

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    // Rotate tips every 2 seconds
    const tipInterval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % webDevTips.length);
    }, 2000);

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
      clearInterval(tipInterval);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <BoxLoader />
      <div className="mt-8 max-w-md px-4 text-center">
        <p className="text-sm text-muted-foreground animate-pulse">
          {webDevTips[currentTip]}
        </p>
      </div>
    </div>
  );
}