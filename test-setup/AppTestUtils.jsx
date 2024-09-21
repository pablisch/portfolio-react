import { render } from '@testing-library/react';
import { ThemeProvider } from '../src/context/ThemeContext';

// Custom render function to include ThemeProvider and BrowserRouter
const customRender = (ui) => {
  return render(
    <ThemeProvider>
        {ui}
    </ThemeProvider>,
  );
};

// Re-export everything from '@testing-library/react'
export * from '@testing-library/react';
// Override the render method with our custom render method
export { customRender as render };
