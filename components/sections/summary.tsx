"use client";

import { useRef } from "react";
import TextHighlighter from "../fancy/text/text-highlighter";

const PARAGRAPH = {
  content: (
    <>
      I build <TextHighlighter highlightColor="hsl(160, 50%, 70%)">full-stack applications</TextHighlighter> with a focus on user experience and system reliability. I specialize in creating seamless integrations between frontend interfaces and backend services.
    </>
  )
};

export default function Summary() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 flex items-center justify-center bg-background"
    >
      <div className="text-center max-w-3xl w-full">
        <p className="text-4xl md:text-5xl font-light leading-tight text-foreground">
          {PARAGRAPH.content}
        </p>
      </div>
    </section>
  );
}