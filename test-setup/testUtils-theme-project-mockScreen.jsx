import { render } from '@testing-library/react';
import { ThemeProvider } from '../src/context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
import { ProjectAboutProvider } from '../src/context/ProjectAboutContext';
import MockScreenWidthContextProvider from './mockContextProviders/MockScreenWidthProvider';

// Custom render function to include ThemeProvider and BrowserRouter
const customRender = (
  ui,
  { screenWidth, isBurgerMenuVisible, burgerMenuStage, ...options } = {}
) => {
  return render(
    <ThemeProvider>
      <MockScreenWidthContextProvider
        screenWidth={screenWidth}
        isBurgerMenuVisible={isBurgerMenuVisible}
        burgerMenuStage={burgerMenuStage}>
        <ProjectAboutProvider>
          <BrowserRouter>{ui}</BrowserRouter>
        </ProjectAboutProvider>
      </MockScreenWidthContextProvider>
    </ThemeProvider>,
    options
  );
};

// Re-export everything from '@testing-library/react'
export * from '@testing-library/react';
// Override the render method with our custom render method
export { customRender as render };
