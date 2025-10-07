"use client"

import AboutMe from "@/components/sections/about-me";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
// import Testimonials from "@/components/sections/testimonials";
import SkillsSlider from "@/components/sections/skills";
import Stats from "@/components/sections/stats";
import { FullWidthDivider } from "@/components/ui/divider";

export default function Home() {
  return (
    <>
      <Hero />

      <FullWidthDivider />
      <Stats /> 

      <FullWidthDivider />
      <AboutMe />

      <FullWidthDivider />
      <SkillsSlider />

      <FullWidthDivider />
      <Projects />

      <FullWidthDivider />
      <Contact />

    </>
  );
}
