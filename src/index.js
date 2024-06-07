import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@theme-toggles/react/css/DarkSide.css";

import App from './App';
import ErrorBoundary from './ErrorBoundary'; // Import the ErrorBoundary component
import reportWebVitals from './reportWebVitals';
import { SkeletonTheme } from 'react-loading-skeleton';
import { ThemeProvider, useTheme } from './contexts/ThemeContext'; // Import the ThemeProvider and useTheme

const root = ReactDOM.createRoot(document.getElementById('root'));

const ThemedApp = () => {
  const { theme } = useTheme(); // Use the theme from the ThemeContext
  const skeletonTheme = {
    light: { baseColor: '#e0e0e0', highlightColor: '#d6d6d6' },
    dark: { baseColor: '#333', highlightColor: '#555' },
  };

  return (
    <SkeletonTheme {...skeletonTheme[theme]}>
      <App /> {/* Render the App component */}
    </SkeletonTheme>
  );
};

root.render(
  <React.StrictMode>
      <ErrorBoundary>
        <ThemeProvider>
          <ThemedApp /> {/* Render the ThemedApp component */}
        </ThemeProvider>
      </ErrorBoundary>
  </React.StrictMode>
);

reportWebVitals();
