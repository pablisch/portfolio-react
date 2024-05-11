import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { scrollToTop } from '../utils/helpers';

// Step 1: Create the context
const ScreenWidthContext = createContext();

// Step 2: Create the provider
// The provider is a component that will wrap every part of the app that needs this context.
export const ScreenWidthProvider = ({ children, setIsBurgerMenuOpen }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isBurgerMenuVisible, setIsBurgerMenuVisible] = useState(false);
  const [burgerMenuStage, setBurgerMenuStage] = useState(1);
  // burgerMenu stages:
  // 1 @ < 950px width: burger menu is conatins only project/about links
  // 2 @ < 650px width: burger menu contains project/about links and external links (github & linkedIn)
  // 3 @ < 390px width: burger menu contains project/about links, external links (github & linkedIn) and a link to the other (project/about) section
  
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => { 
    if (screenWidth > 950) {
      setIsBurgerMenuVisible(false);
    } else if (screenWidth > 650) {
      setIsBurgerMenuVisible(true);
      setBurgerMenuStage(1);
    } else if (screenWidth > 390) {
      setIsBurgerMenuVisible(true);
      setBurgerMenuStage(2);
    } else {
      setIsBurgerMenuVisible(true);
      setBurgerMenuStage(3);
    }
    setIsBurgerMenuOpen(false);
    scrollToTop();
  }, [screenWidth, setIsBurgerMenuOpen]);

  return (
    // <ScreenWidthContext.Provider value={screenWidth}>
    <ScreenWidthContext.Provider value={{screenWidth, isBurgerMenuVisible, burgerMenuStage}}>
      {children}
    </ScreenWidthContext.Provider>
  );
};

// Step 3: Create the hook
// The hook looks for the nearest ancestor provider and returns the value that was passed to the provider.
export const useScreenWidth = () => useContext(ScreenWidthContext);

ScreenWidthProvider.propTypes = {
  children: PropTypes.node.isRequired,
  setIsBurgerMenuOpen: PropTypes.func.isRequired,
};
