import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { Typewriter } from 'react-simple-typewriter';
import ProfilePicture from "../profile.png";
import { fetchUserLocation } from '../services/locationService';
import { useTheme } from '../contexts/ThemeContext'; // Import useTheme
import MoonScene from './MoonScene';
import SunScene from './SunScene';

const HeroSection = () => {
  const [locationData, setLocationData] = useState(null);
  const [greeting, setGreeting] = useState("Hi, I'm Daniel");
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme(); // Get the current theme

  useEffect(() => {
    const getLocation = async () => {
      try {
        const data = await fetchUserLocation();
        if (data) {
          setLocationData(data);
          setGreeting(`Hi, I'm in ${data.country_name}`);
        }
      } catch (error) {
        console.error('Error fetching location data:', error);
      } finally {
        setLoading(false);
      }
    };

    getLocation();
  }, []);

  return (
    <section className="hero-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-10">
            <h1 className="display-1 fw-bold mb-2">
              {loading ? 'Loading...' : (
                <Typewriter
                  words={[greeting]}
                  loop={Infinity}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              )}
            </h1>
            <h1 className="display-1 mb-2 fw-bold">
              <span className='text-primary'>MERN Stack </span>Developer
            </h1>
            <p className='mb-4 fs-4 text-dark'>I've spent the last 5 years building and scaling software for some pretty cool companies. I also teach people to paint online (incase you've got an empty canvas layin' around 🎨). Let's connect!</p>
            <div className="d-flex align-items-center mt-4">
              <a href="#portfolio" className="btn btn-primary me-3">View My Work</a>
              <a href="#video" download="Daniel_Ntandika_CV.pdf" className="btn btn-secondary">
                <FontAwesomeIcon icon={faFileDownload} className="me-2" />
                Download CV
              </a>
            </div>
          </div>
          <div className="col-md-2">
            {theme === 'dark' ? <MoonScene /> : <SunScene />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
