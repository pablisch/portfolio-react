import { render } from '@testing-library/react';
import { ThemeProvider } from '../src/context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';

// Custom render function to include ThemeProvider
const customRender = (ui, options) => {
  return render(
    <ThemeProvider>
      {ui}
    </ThemeProvider>,
    options
  );
};

// Re-export everything from '@testing-library/react'
export * from '@testing-library/react';
// Override the render method with our custom render method
export { customRender as render };