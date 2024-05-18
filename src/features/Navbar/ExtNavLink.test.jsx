import { render, screen } from '../../../tests/testUtils'; // Import the custom render function
import ExtNavLink from './ExtNavLink';
import { describe, test, expect } from 'vitest';
import linkData from '../../data/linkData';

const renderComponent = (name) => {
  const extLink = linkData.find(link => link.name === name);

  render(
    <ExtNavLink 
      extLink={extLink}
      isAvatarHovered={false}
    />
  );
};

describe('ExtNavLink', () => {
  test.each([
    'github',
    'linkedIn'
  ])('renders the ExtNavLink component', (name) => {
    // Arrange
    renderComponent(name);
    const extNavLinkRegex = new RegExp(name, 'i');
    const extNavLink = screen.getByRole('link', extNavLinkRegex);
    
    // Assert
    expect(extNavLink).toBeInTheDocument();
  });
});
  

