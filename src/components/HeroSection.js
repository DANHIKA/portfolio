import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import ProfilePicture from "../profile.png"
import { ThemeContext } from '../contexts/ThemeContext'; 


const HeroSection = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <section className="py-5 text-center position-relative">
      <div className="container position-relative">
        <img src={ProfilePicture} alt="Profile" className="mb-4" width="500" />
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
      </div>
      {/* Apply centered-text class for centering */}
      <div className="position-absolute centered-text">
        <h1 className="display-1 fw-bold">UI D
          <span className="transparent">esi</span>gner
        </h1>
        <h1 className="display-1 fw-bold">App D
          <span className="transparent">eve</span>loper
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
