"use client"

import AboutMe from "@/components/sections/about-me";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Process from "@/components/sections/process";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
// import Testimonials from "@/components/sections/testimonials";
import Stats from "@/components/sections/stats";
import Experience from "@/components/sections/experience";
import Quote from "@/components/sections/summary";
import WhyChooseMe from "@/components/sections/why-choose-me";
import Certifications from "@/components/sections/certifications";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Quote />
      <Stats />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <WhyChooseMe />
      <Process />
      <Contact />
    </>
  );
}