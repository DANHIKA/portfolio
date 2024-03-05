import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'; 
import ThemeToggler from './ThemeToggler';

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext); // Use useContext hook to access context values

  return (
    <header className={`mb-4 text-center ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="logo">
          <h1 className=" fw-bold ">DAN<span className='text-success'>HIKA</span></h1>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Pass isDarkMode and toggleDarkMode as props to ThemeToggler */}
        <ThemeToggler isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </header>
  );
};

export default Header;