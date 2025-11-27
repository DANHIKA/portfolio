"use client"

import AboutMe from "@/components/sections/about-me";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Process from "@/components/sections/process";
import Projects from "@/components/sections/projects";
// import Testimonials from "@/components/sections/testimonials";
import SkillsSlider from "@/components/sections/skills";
import Stats from "@/components/sections/stats";

export default function Home() {
  return (
    <>
      <Hero />

      <Stats />

      <AboutMe />

      <Process />

      <SkillsSlider />

      <Projects />

      <Contact />
    </>
  );
}
