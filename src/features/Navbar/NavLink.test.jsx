import { render, screen } from '../../../tests/testUtils'; // Import the custom render function
import NavLink from './NavLink';
import { describe, test, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import projectData from '../../data/projectData';

const mockSetFocusProjectId = vi.fn();
const mockSetSelectedProject = vi.fn();
const mockSetFocusAboutId = vi.fn();
const mockSetSelectedAbout = vi.fn();

vi.mock('../../context/ProjectAboutContext', () => ({
  useProjectAboutContext: vi.fn(),
}));

vi.mock('../../context/ProjectAboutContext', () => ({
  useProjectAboutContext: () => ({
    section: 'projects',
    setFocusProjectId: mockSetFocusProjectId,
    setSelectedProject: mockSetSelectedProject,
    setFocusAboutId: mockSetFocusAboutId,
    setSelectedAbout: mockSetSelectedAbout,
  }),
}));

const renderComponent = (id) => {
  const project = projectData.find(project => project.id === id);

  render(
    <NavLink
      subject={project}
      className='nav-link'
    >{project.identifier}</NavLink>
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
    // screen.logTestingPlaygroundURL();
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
  ])('handleHoverStart is called when navLink is hovered over', async (id, identifier) => {
    // Arrange
    vi.resetAllMocks();
    renderComponent(id);
    const navLinkTextRegex = new RegExp(identifier, 'i');
    const navLink = screen.getByRole('button', {
      name: navLinkTextRegex,
    });

    // Act
    await userEvent.hover(navLink);

    // Assert
    expect(mockSetFocusProjectId).toHaveBeenCalledTimes(1);
    expect(mockSetFocusProjectId).toHaveBeenCalledWith(id);

    // Act
    await userEvent.unhover(navLink);

    // Assert
    expect(mockSetFocusProjectId).toHaveBeenCalledTimes(2);
    expect(mockSetFocusProjectId).toHaveBeenCalledWith('');
    expect(mockSetFocusAboutId).toHaveBeenCalledTimes(1);
    expect(mockSetFocusAboutId).toHaveBeenCalledWith('');
  });

  test.each([
    ['1', 'lupo'],
    ['2', 'gallery'],
    ['3', 'farce'],
  ])('setSelectedProject is called when navLink is clicked', async (id, identifier) => {
    // Arrange
    vi.resetAllMocks();
    renderComponent(id);
    const navLinkTextRegex = new RegExp(identifier, 'i');
    const navLink = screen.getByRole('button', {
      name: navLinkTextRegex,
    });

    // Act
    await userEvent.click(navLink);

    // Assert
    expect(mockSetSelectedProject).toHaveBeenCalledTimes(1);
    expect(mockSetSelectedProject).toHaveBeenCalledWith(projectData.find(project => project.id === id));
  });
});


