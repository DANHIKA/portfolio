import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeContext } from './contexts/ThemeContext';
import { SkeletonTheme } from 'react-loading-skeleton';
import Header from './components/Header';
import HeaderSkeleton from './skeletons/HeaderSkeleton';
import HeroSection from './components/HeroSection';
import HeroSectionSkeleton from './skeletons/HeroSectionSkeleton';
import Projects from './components/Projects';
import ProjectsSkeleton from './skeletons/ProjectsSkeleton';
import Contact from './components/Contact';
import ContactSkeleton from './skeletons/ContactSkeleton';
import Services from './components/Services';
import ServicesSkeleton from './skeletons/ServicesSkeleton';
import Skills from './components/Skills';

function App() {
  const { isDarkMode } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay of 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return ( 
    <SkeletonTheme
      baseColor={isDarkMode ? "#4c4c4c" : "#d2d2d2"}
      highlightColor={isDarkMode ? "#c2c2c2" : "#333"}
    >
    <div className={`${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      {isLoading ? <HeaderSkeleton /> : <Header />}
      {isLoading ? <HeroSectionSkeleton /> : <HeroSection />}
      {isLoading ? <ServicesSkeleton /> : <Services />}
      {isLoading ? <ProjectsSkeleton /> : <Projects />}
      <Skills/>
      {isLoading ? <ContactSkeleton /> : <Contact />}
    </div>
    </SkeletonTheme>
  );
}

export default App;
