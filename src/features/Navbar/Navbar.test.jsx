import { test, describe, expect, vi } from 'vitest';
import Navbar from './Navbar';
import { render, screen, within } from '../../../test-setup/testUtils-mockAllContext';
import user from '@testing-library/user-event';

const mockSetAvatarHovered = vi.fn();
const mockSetIsBurgerMenuOpen = vi.fn();

const renderComponent = () => {
  const { container } = render(
    <Navbar
      isAvatarHovered={false}
      setIsAvatarHovered={mockSetAvatarHovered}
      isBurgerMenuOpen={false}
      setIsBurgerMenuOpen={mockSetIsBurgerMenuOpen}
    />,
    { theme: 'retro' }
  );

  return { container };
};

describe('Navbar', () => {
  test('renders the Navbar component', () => {
    // Arrange
    renderComponent();
    // Act
    // Assert
  });

  test('it has an avatar logo, a section button, six project/about links, a link to the other section, github and linkedin links and a settings button', () => {
    // Arrange
    const { container } = renderComponent();
    const avatar = screen.getByRole('img', { name: /avatar icon/i });
    const sectionButton = screen.getByRole('button', { name: /my projects/i });
    const projectLinksContainer = container.querySelector('.navlist');
    const projectLinks = within(projectLinksContainer).getAllByRole('button');
    const otherSectionLink = screen.getByRole('link', { name: /more about me/i });
    const extLinks = screen.getAllByRole('link', { name: /github|linkedin/i });
    const settingsButton = screen.getByRole('button', { name: /settings/i });

    // Assert
    expect(avatar).toBeInTheDocument();
    expect(sectionButton).toBeInTheDocument();
    expect(projectLinks).toHaveLength(6);
    expect(otherSectionLink).toBeInTheDocument();
    expect(extLinks).toHaveLength(2);
    expect(settingsButton).toBeInTheDocument();
  });

  test('isAvatarHovered is called when avatar is hovered over or unhovered', async () => {
    // Arrange
    renderComponent();
    const avatar = screen.getByRole('img', { name: /avatar icon/i });
    screen.logTestingPlaygroundURL();
    // screen.debug();

    // Act
    await user.hover(avatar);

    // Assert
    expect(mockSetAvatarHovered).toHaveBeenCalledTimes(1);

    // Act
    await user.unhover(avatar);

    // Assert
    expect(mockSetAvatarHovered).toHaveBeenCalledTimes(2);
  });
});
