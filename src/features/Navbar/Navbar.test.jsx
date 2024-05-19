import { test, describe, expect, vi } from 'vitest';
import Navbar from './Navbar';
import {
  render,
  screen,
  within,
} from '../../../test-setup/testUtils-mockAllContext';
import user from '@testing-library/user-event';

const mockSetAvatarHovered = vi.fn();
const mockSetIsBurgerMenuOpen = vi.fn();
const mockSetSelectedProject = vi.fn();
const mockSetSelectedAbout = vi.fn();

const renderComponent = () => {
  const { container } = render(
    <Navbar
      isAvatarHovered={false}
      setIsAvatarHovered={mockSetAvatarHovered}
      isBurgerMenuOpen={false}
      setIsBurgerMenuOpen={mockSetIsBurgerMenuOpen}
    />,
    { theme: 'retro', setSelectedProject: mockSetSelectedProject, setSelectedAbout: mockSetSelectedAbout}
  );

  return { container };
};

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('Navbar', () => {
  test('renders the Navbar component', () => {
    // Arrange
    const { container } = renderComponent();
    const navbar = container.querySelector('nav');
    // screen.logTestingPlaygroundURL();
    // screen.debug();

    // Assert
    expect(navbar).toBeInTheDocument();
  });

  test('it has an avatar logo, a section button, six project/about links, a link to the other section, github and linkedin links and a settings button', () => {
    // Arrange
    const { container } = renderComponent();
    const avatar = screen.getByRole('img', { name: /avatar icon/i });
    const sectionButton = screen.getByRole('button', { name: /my projects/i });
    const projectLinksContainer = container.querySelector('.navlist');
    const projectLinks = within(projectLinksContainer).getAllByRole('button');
    const otherSectionLink = screen.getByRole('link', {
      name: /more about me/i,
    });
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

    // Act
    await user.hover(avatar);

    // Assert
    expect(mockSetAvatarHovered).toHaveBeenCalledTimes(1);

    // Act
    await user.unhover(avatar);

    // Assert
    expect(mockSetAvatarHovered).toHaveBeenCalledTimes(2);
  });

  test('it calls handleNavTitleClick when section button is clicked', async () => {
    // Arrange
    renderComponent();
    const sectionButton = screen.getByRole('button', { name: /my projects/i });

    // Act
    await user.click(sectionButton);

    // Assert
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/');
    expect(mockSetSelectedProject).toHaveBeenCalledTimes(1);
    expect(mockSetSelectedProject).toHaveBeenCalledWith({});
    expect(mockSetSelectedAbout).toHaveBeenCalledTimes(1);
    expect(mockSetSelectedAbout).toHaveBeenCalledWith({});
  });
});
