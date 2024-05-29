// HeroSection.js
import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { Typewriter } from 'react-simple-typewriter';
import ProfilePicture from "../profile.png";
import { ThemeContext } from '../contexts/ThemeContext';
import { fetchUserLocation } from '../services/locationService';
import '../styles/HeroSection.css';

const HeroSection = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [locationData, setLocationData] = useState(null);
  const [greeting, setGreeting] = useState("Hi, I'm Daniel");
  const [loading, setLoading] = useState(true);

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
    <section className={`hero-section py-5 ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 text-start">
            <h1 className="display-1 fw-bold">
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
            <h1 className="display-1">
              <span className='text-primary text-decoration-underline'>Front end </span>Developer
            </h1>
            <p className="lead">UX Research • Digital Marketing • Agile Management</p>
            <p>With the user testing results, let's redesign the app completely.</p>
            <div className="d-flex align-items-center mt-4">
              <a href="#portfolio" className="btn btn-primary me-3">View My Work</a>
              <a href="#video" download="your_cv_file.pdf" className={`btn ${isDarkMode ? 'text-light' : 'text-dark'}`}>
              <FontAwesomeIcon icon={faFileDownload} className="me-2" />
              Download CV
            </a>
            </div>
          </div>
          <div className="col-lg-5 text-center">
            <img src={ProfilePicture} alt="Profile" className="img-fluid mb-4" style={{ width: '200px', height: '200px' }} />
            <div className="open-to-work mb-3">
              <span className="badge bg-success">Open to Work</span>
            </div>
            <div className="social-links">
              <a href="https://github.com/DANHIKA" target="_blank" rel="noopener noreferrer" className="me-2">
                <FontAwesomeIcon icon={faGithub} size="2x" className={`${isDarkMode ? 'text-light' : 'text-dark'}`} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="me-2">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="me-2">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
