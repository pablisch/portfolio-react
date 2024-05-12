import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const themeStyles = ['retro', 'light', 'dark'];

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [isIconRotating, setIsIconRotating] = useState(false); // for rotating theme icon animation

  const onThemeChange = () => {
    const themeIndex = themeStyles.indexOf(theme);
    const newThemeIndex =
      themeIndex === themeStyles.length - 1 ? 0 : themeIndex + 1;
    setTheme(themeStyles[newThemeIndex]);
    setIsIconRotating(true);
    setTimeout(() => {
      setIsIconRotating(false);
    }, 500);
  };

  return (
    <ThemeContext.Provider value={{ theme, onThemeChange, isIconRotating }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default ThemeContext;
