import { render } from '../test-setup/AppTestUtils'; // Import the custom render function
import App from './App';
import { describe, it } from 'vitest';

describe('App', () => {
  it('renders the App component', () => {
    render(<App />);
  });
});
