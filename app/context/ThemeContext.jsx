'use client'
import { createContext, useState, useEffect, useContext } from 'react';

// Create a context for the theme
export const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  // Initialize theme state from localStorage if available, otherwise default to 'dark'
  const [theme, setTheme] = useState('dark');
  
  // Check for user's preferred theme on initial load
  useEffect(() => {
    // Check if localStorage is available (client-side)
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      // Check for saved theme preference or system preference
      if (savedTheme) {
        setTheme(savedTheme);
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      }
    }
  }, []);

  // Update theme and save to localStorage
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  };

  // Apply theme class to the document
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      // Remove both classes first
      root.classList.remove('light-theme', 'dark-theme');
      // Add the current theme class
      root.classList.add(`${theme}-theme`);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for using the theme
export const useTheme = () => useContext(ThemeContext);