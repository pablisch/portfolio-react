import Button from './Button';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { expect, describe, test, vi } from 'vitest';

const mockOnClick = vi.fn();

const renderComponent = () => {
  render(<Button
    onClick={mockOnClick}
  >I am a button</Button>);
};

describe('Button', () => { 
  test('renders the Button component', () => { 
    // Arrange
    renderComponent(); 
    screen.logTestingPlaygroundURL()
    const button = screen.getByRole('button', { name: /button/i }) 

    // Assert
    expect(button).toBeInTheDocument(); 
  });

  test('onClick is called when button is clicked', async () => {
    // Arrange
    renderComponent();
    const button = screen.getByRole('button', { name: /button/i });

    // Act
    await user.click(button);

    // Assert
    expect(mockOnClick).toHaveBeenCalledTimes(1);

    // Act
    await user.click(button);

    // Assert
    expect(mockOnClick).toHaveBeenCalledTimes(2);
  });
});
