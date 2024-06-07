import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from './contexts/ThemeContext';
import useParticlesConfig from './ParticlesConfig';
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
import './App.css'; // Make sure to import your CSS file

function App() {
    const particlesConfig = useParticlesConfig();
    const { theme } = useTheme();
    const [isLoading, setIsLoading] = useState(true);
    const [init, setInit] = useState(false);

    useEffect(() => {
        // Simulate a loading delay of 2 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    if (init) {
        return (
            <div className={`app ${theme}`}>
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={particlesConfig}
                />
                <div>
                    {isLoading ? <HeaderSkeleton /> : <Header />}
                    {isLoading ? <HeroSectionSkeleton /> : <HeroSection />}
                    {isLoading ? <ServicesSkeleton /> : <Services />}
                    {isLoading ? <ProjectsSkeleton /> : <Projects />}
                    <Skills />
                    {isLoading ? <ContactSkeleton /> : <Contact />}
                </div>
            </div>
        );
    }

    return null; // or a loading indicator
}

export default App;
