import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Typewriter } from 'react-simple-typewriter';
import ProfilePicture from "../profile.png";
import { ThemeContext } from '../contexts/ThemeContext'; 
import '../styles/HeroSection.css'; // Make sure to create and import a CSS file for custom styles

const HeroSection = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section className={`hero-section py-5 ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left side with text */}
          <div className="col-lg-7 text-start">
            <h1 className="display-1 fw-bold">
              <Typewriter
                words={['Hi, I\'m Daniel']}
                loop={Infinity}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <h1 className="display-1"><span className='text-primary text-decoration-underline'>Front end </span>Developer</h1>
            <p className="lead">UX Research • Digital Marketing • Agile Management</p>
            <p>With the user testing results, let's redesign the app completely.</p>
            <div className="d-flex align-items-center mt-4">
              <a href="#portfolio" className="btn btn-primary me-3">View My Work</a>
              <a href="#video" className={`btn ${isDarkMode ? 'text-light' : 'text-dark'} `}>View Video</a>
            </div>
          </div>
          {/* Right side with image */}
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
