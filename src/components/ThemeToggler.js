// components/ThemeToggle.js
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { DarkSide } from '@theme-toggles/react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isToggled = theme === 'dark';

  return (
    <DarkSide
      toggled={isToggled}
      toggle={toggleTheme}
      className="me-3"
      aria-label="Toggle theme"
    />
  );
};

export default ThemeToggle;
