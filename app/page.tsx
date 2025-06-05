"use client"

import AboutMe from "@/components/sections/about-me";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import SkillsSlider from "@/components/sections/skills";
import Stats from "@/components/sections/stats";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats /> 
      <AboutMe />
      <SkillsSlider />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
