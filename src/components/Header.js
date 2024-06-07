import React, { useContext } from 'react';
import ThemeToggler from './ThemeToggler';

const Header = () => {
  return (
    <header className={`container mb-4 text-center `}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="logo">
          <h4 className=" fw-bold ">Porfolio</h4>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <button className={`navbar-toggler border-0 `} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className={`navbar-toggler-icon `}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className={`nav-link `} href="#Projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link `} href="#About">About</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link `} href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Pass isDarkMode and toggleDarkMode as props to ThemeToggler */}
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
