
import { render, screen } from '../../../tests/testUtils'; // Import the custom render function
import NavLink from './NavLink';
import { describe, test, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import projectData from '../../data/projectData';

const project1 = projectData[0];

const mockSetFocusProjectId = vi.fn();
const mockSetSelectedProject = vi.fn();
const mockSetFocusAboutId = vi.fn();
const mockSetSelectedAbout = vi.fn();

const renderComponent = () => {
  render(
    <NavLink
      // eslint-disable-next-line react/no-children-prop
      children={project1.identifier}
      subject={project1}
      className="nav-link"
    />
  );
}

describe('NavLink', () => {
  test('renders the NavLink component', () => {
    // Arrange
    renderComponent();
    // Act
    // Assert
  });
});


