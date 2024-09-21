import { render, screen } from '../../../test-setup/testUtils-theme'; // Import the custom render function
import NavLink from './NavLink';
import { describe, test, expect, vi } from 'vitest';
import user from '@testing-library/user-event';
import projectData from '../../data/projectData';

const mockContext = {
  section: 'projects',
  setFocusProjectId: vi.fn(),
  setSelectedProject: vi.fn(),
  setFocusAboutId: vi.fn(),
  setSelectedAbout: vi.fn(),
};

vi.mock('../../context/ProjectAboutContext', () => ({
  useProjectAboutContext: () => mockContext,
}));

const renderComponent = (id) => {
  const project = projectData.find((project) => project.id === id);

  render(
    <NavLink subject={project} className='nav-link'>
      {project.identifier}
    </NavLink>
  );
};

describe('NavLink', () => {
  test.each([
    ['1', 'lupo'],
    ['2', 'gallery'],
    ['3', 'farce'],
  ])('renders the NavLink component', (id, identifier) => {
    // Arrange
    renderComponent(id);
    const navLinkTextRegex = new RegExp(identifier, 'i');
    const navLink = screen.getByRole('button', {
      name: navLinkTextRegex,
    });

    // Assert
    expect(navLink).toBeInTheDocument();
  });

  test.each([
    ['1', 'lupo'],
    ['2', 'gallery'],
    ['3', 'farce'],
  ])(
    'handleHoverStart is called when navLink is hovered over',
    async (id, identifier) => {
      // Arrange
      vi.resetAllMocks();
      renderComponent(id);
      const navLinkTextRegex = new RegExp(identifier, 'i');
      const navLink = screen.getByRole('button', {
        name: navLinkTextRegex,
      });

      // Act
      await user.hover(navLink);

      // Assert
      expect(mockContext.setFocusProjectId).toHaveBeenCalledTimes(1);
      expect(mockContext.setFocusProjectId).toHaveBeenCalledWith(id);

      // Act
      await user.unhover(navLink);

      // Assert
      expect(mockContext.setFocusProjectId).toHaveBeenCalledTimes(2);
      expect(mockContext.setFocusProjectId).toHaveBeenCalledWith('');
      expect(mockContext.setFocusAboutId).toHaveBeenCalledTimes(1);
      expect(mockContext.setFocusAboutId).toHaveBeenCalledWith('');
    }
  );

  test.each([
    ['1', 'lupo'],
    ['2', 'gallery'],
    ['3', 'farce'],
  ])(
    'setSelectedProject is called when navLink is clicked',
    async (id, identifier) => {
      // Arrange
      vi.resetAllMocks();
      renderComponent(id);
      const navLinkTextRegex = new RegExp(identifier, 'i');
      const navLink = screen.getByRole('button', {
        name: navLinkTextRegex,
      });

      // Act
      await user.click(navLink);

      // Assert
      expect(mockContext.setSelectedProject).toHaveBeenCalledTimes(1);
      expect(mockContext.setSelectedProject).toHaveBeenCalledWith(
        projectData.find((project) => project.id === id)
      );
    }
  );
});
