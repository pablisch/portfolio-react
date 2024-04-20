import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ScreenWidthContext = createContext();

export const useScreenWidth = () => useContext(ScreenWidthContext);

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

ScreenWidthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
