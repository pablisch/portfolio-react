import { render, screen } from '../../../tests/testUtils'; // Import the custom render function
import userEvent from '@testing-library/user-event';
import ProjectPanel from './ProjectPanel'
import { describe, test, expect, vi } from 'vitest'

import projectData from '../../data/projectData';
const mockSetFocusProjectId = vi.fn();
const mockSetSelectedProject = vi.fn();

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const renderComponent = (id) => {
  const project = projectData.find(project => project.id === id);

  render(
    <ProjectPanel
      project={project}
      setFocusProjectId={mockSetFocusProjectId}
      focusProjectId=''
      setSelectedProject={mockSetSelectedProject}
      isAvatarHovered={false}
    />
  );

  return {project};
};

describe('ProjectPanel', () => {
  test.each(
    [
      ['1', 'london underground phony orchestra', 'LUPO', 'audio/visual', "An audio/visual generative music app based on real-time arrivals of trains on the London Underground network using data from the TFL Unified API."],
      ['2', 'Gallery App', 'Gallery App', 'Masonry', "A MERN stack image sharing app using a responsive Masonry layout and Cloudinary. An exploration of image layout and React.js."],
      ['4', 'Knot Very Useful', 'Knot Very Useful', 'learning knots', "A practical educational app for learning knots and hitches for Forest School built as an early exploration of vanilla JavaScript and CSS."],
    ]
  )('renders the ProjectPanel component and it has expected content', (id, name, banner, summaryAbbr, summary) => {
    // Arrange
    renderComponent(id);
    const panel = screen.getByRole('listitem')
    const panelImageRegex = new RegExp(name, 'i')
    const panelImage = screen.getByRole('img', { name: panelImageRegex })
    const panelBannerRegex = new RegExp(banner, 'i')
    const panelBanner = screen.getByText(panelBannerRegex)
    const panelSummaryRegex = new RegExp(summaryAbbr, 'i')
    const panelSummary = screen.getByText(panelSummaryRegex)

    // Assert
    expect(panel).toBeInTheDocument()
    expect(panelImage).toBeInTheDocument()
    expect(panelBanner).toHaveTextContent(banner);
    expect(panelSummary).toHaveTextContent(summary);
  });

  test.each(['1', '2', '3'])('setFocusProjectId is called when panel is hovered over or unhovered', async (id) => {
    // Arrange
    vi.clearAllMocks();
    renderComponent(id);
    const panel = screen.getByRole('listitem')

    // Act
    await userEvent.hover(panel)

    // Assert
    expect(mockSetFocusProjectId).toHaveBeenCalledTimes(1);
    expect(mockSetFocusProjectId).toHaveBeenCalledWith(id);

    // Act
    await userEvent.unhover(panel)

    // Assert
    expect(mockSetFocusProjectId).toHaveBeenCalledTimes(2);
    expect(mockSetFocusProjectId).toHaveBeenCalledWith('');
  });

  test.each(['1', '2', '3'])('setSelectedProject is called when panel is clicked', async (id) => {
    // Arrange
    vi.clearAllMocks();
    const { project } = renderComponent(id);
    const panel = screen.getByRole('listitem')

    // Act
    await userEvent.click(panel)

    // Assert
    expect(mockSetSelectedProject).toHaveBeenCalledTimes(1);
    expect(mockSetSelectedProject).toHaveBeenCalledWith(project);
    expect(mockNavigate).toHaveBeenCalledWith(`/project/${id}`);
  });
});
