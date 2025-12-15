"use client";

import { TextHighlighter } from "@/components/fancy/text/text-highlighter";

const PARAGRAPHS = [
  <>
    I'm a software developer who enjoys working across the <TextHighlighter highlightColor="hsl(160, 50%, 70%)">full stack</TextHighlighter>, from building user-friendly interfaces to ensuring systems work smoothly behind the scenes.
  </>,
  <>
    I'm comfortable with data management, cloud environments, and making sure different systems can <TextHighlighter highlightColor="hsl(160, 50%, 70%)">talk to each other</TextHighlighter> effectively. I value writing clear documentation and collaborating with teammates.
  </>,
  <>
    What drives me is contributing to <TextHighlighter highlightColor="hsl(160, 50%, 70%)">meaningful projects</TextHighlighter>, particularly in digital health, where technology can genuinely improve people's experiences and outcomes.
  </>,
];

export default function Summary() {
  // Light theme background variations
  const lightBgClasses = [
    "bg-[hsl(0,0%,98%)]",
    "bg-[hsl(0,0%,95%)]",
    "bg-[hsl(0,0%,92%)]"
  ];
  
  // Dark theme background variations
  const darkBgClasses = [
    "dark:bg-[hsl(0,0%,12%)]",
    "dark:bg-[hsl(0,0%,15%)]",
    "dark:bg-[hsl(0,0%,18%)]"
  ];

  return (
    <div className="relative w-full">
      {PARAGRAPHS.map((text, i) => (
        <div 
          key={i} 
          className={`sticky top-0 w-full h-screen flex items-center justify-center px-8 ${lightBgClasses[i]} ${darkBgClasses[i]}`}
        >
          <div className="text-center max-w-4xl w-full">
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-relaxed text-foreground">
              {text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}