import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Step 1: Create the context
const ScreenWidthContext = createContext();

// Step 2: Create the provider
// The provider is a component that will wrap every part of the app that needs this context.
export const ScreenWidthProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ScreenWidthContext.Provider value={screenWidth}>
      {children}
    </ScreenWidthContext.Provider>
  );
};

// Step 3: Create the hook
// The hook looks for the nearest ancestor provider and returns the value that was passed to the provider.
export const useScreenWidth = () => useContext(ScreenWidthContext);

ScreenWidthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
