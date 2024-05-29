import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';
import ErrorBoundary from './ErrorBoundary'; // Import the ErrorBoundary component
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap your entire application with multiple providers */}
    <ErrorBoundary> {/* Wrap your App component with ErrorBoundary */}
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
