import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import '../styles/ThemeToggler.css';

const ThemeToggler = ({ isDarkMode, toggleDarkMode }) => {
  const handleClick = () => {
    toggleDarkMode(); // Call the toggleDarkMode function directly
  };

  return (
    <div className={`theme-toggler ${isDarkMode ? 'dark' : 'light'}`} onClick={handleClick}>
      <FontAwesomeIcon icon={isDarkMode ? faToggleOff : faToggleOn} className="toggler-icon mx-2" />
    </div>
  );
};

export default ThemeToggler;
