import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import ProfilePicture from "../profile.png"
import { ThemeContext } from '../contexts/ThemeContext'; 

const HeroSection = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <section className="py-5 text-center position-relative">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side with text */}
          <div className="col-lg-6 mb-4">
            <div className="social-links mb-4">
              <a href="https://github.com/DANHIKA" target="_blank" rel="noopener noreferrer" className={`me-2 ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="me-2">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="me-2">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
            <div className="open-to-work mb-4">
              <span className="badge bg-success">Open to Work</span>
            </div>
            <div className="text-start">
              <h1 className="display-1 fw-bold">UI Designer</h1>
              <h1 className="display-1 fw-bold">App Developer</h1>
            </div>
          </div>
          {/* Right side with image */}
          <div className="col-lg-6 mb-4">
            <img src={ProfilePicture} alt="Profile" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
