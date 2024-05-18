import { render } from '@testing-library/react';
import { ThemeProvider } from '../src/context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
// import { ProjectAboutProvider } from '../src/context/ProjectAboutContext';
// import { ScreenWidthProvider } from '../src/context/ScreenWidthProvider';

// Custom render function to include ThemeProvider and BrowserRouter
const customRender = (ui, options) => {
  return render(
    <ThemeProvider>
      {/* <ScreenWidthProvider> */}
        {/* <ProjectAboutProvider> */}
          <BrowserRouter>{ui}</BrowserRouter>
        {/* </ProjectAboutProvider> */}
      {/* </ScreenWidthProvider> */}
    </ThemeProvider>,
    options
  );
};

// Re-export everything from '@testing-library/react'
export * from '@testing-library/react';
// Override the render method with our custom render method
export { customRender as render };
