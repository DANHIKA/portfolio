"use client"

import AboutMe from "@/components/sections/about-me";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Process from "@/components/sections/process";
import Projects from "@/components/sections/projects";
// import Testimonials from "@/components/sections/testimonials";
import Stats from "@/components/sections/stats";
import Experience from "@/components/sections/experience";
import Summary from "@/components/sections/summary";
import SchoolDemo from "@/components/sections/school-demo";

export default function Home() {
  return (
    <>
      <Hero />

      <SchoolDemo />

      <Summary />

      <Experience />



      <Stats />

      <AboutMe />

      <Process />


      <Projects />



      <Contact />
    </>
  );
}
