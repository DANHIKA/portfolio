import React, { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { ThemeContext } from '../contexts/ThemeContext';

const HeaderSkeleton = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <header className={`container mb-4 text-center ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="logo">
          <Skeleton width={100} height={40} />
        </div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <button className="navbar-toggler border-0" type="button" disabled>
              <Skeleton circle={true} height={24} width={24} />
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Skeleton width={80} height={20} className='nav-link me-2'/>
                </li>
                <li className="nav-item">
                  <Skeleton width={80} height={20} className='nav-link' />
                </li>
                <li className="nav-item">
                  <Skeleton width={80} height={20} className='nav-link ms-2' />
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Skeleton  height={15} width={24} className='rounded' />
      </div>
    </header>
  );
};

export default HeaderSkeleton;
