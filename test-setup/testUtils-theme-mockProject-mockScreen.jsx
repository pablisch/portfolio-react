import { render } from '@testing-library/react';
import { ThemeProvider } from '../src/context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
import MockProjectAboutContextProvider from './mockContextProviders/MockProjectAboutProvider';
import MockScreenWidthContextProvider from './mockContextProviders/MockScreenWidthProvider';

// Custom render function to include ThemeProvider and BrowserRouter
const customRender = (
  ui,
  {
    screenWidth,
    isBurgerMenuVisible,
    burgerMenuStage,
    section,
    setSection,
    focusProjectId,
    setFocusProjectId,
    focusAboutId,
    setFocusAboutId,
    selectedProject,
    setSelectedProject,
    selectedAbout,
    setSelectedAbout,
    ...options
  } = {}
) => {
  return render(
    <ThemeProvider>
      <MockScreenWidthContextProvider
        screenWidth={screenWidth}
        isBurgerMenuVisible={isBurgerMenuVisible}
        burgerMenuStage={burgerMenuStage}>
        <MockProjectAboutContextProvider
          section={section}
          setSection={setSection}
          focusProjectId={focusProjectId}
          setFocusProjectId={setFocusProjectId}
          focusAboutId={focusAboutId}
          setFocusAboutId={setFocusAboutId}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          selectedAbout={selectedAbout}
          setSelectedAbout={setSelectedAbout}>
          <BrowserRouter>{ui}</BrowserRouter>
        </MockProjectAboutContextProvider>
      </MockScreenWidthContextProvider>
    </ThemeProvider>,
    options
  );
};

// Re-export everything from '@testing-library/react'
export * from '@testing-library/react';
// Override the render method with our custom render method
export { customRender as render };
