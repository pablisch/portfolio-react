import { render, screen } from '../../../tests/testUtils'; // Import the custom render function
import userEvent from '@testing-library/user-event';
import AboutPanel from './AboutPanel';
import { describe, test, expect, vi } from 'vitest';

import aboutData from '../../data/aboutData';
const about1 = aboutData[0];
const mockSetFocusAboutId = vi.fn();
const mockSetSelectedAbout = vi.fn();

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const renderComponent = () => {
  render(
    <AboutPanel
      about={about1}
      setFocusAboutId={mockSetFocusAboutId}
      focusAboutId=''
      setSelectedAbout={mockSetSelectedAbout}
      isAvatarHovered={false}
    />
  );
};

describe('AboutPanel', () => {
  test('renders the AboutPanel component and it has expected content', () => {
    // Arrange
    renderComponent();

    const panel = screen.getByRole('listitem');
    const panelImage = screen.getByRole('img', {
      name: /Edge of Space Explorer/i,
    });
    const panelBanner = screen.getByText(/edge of space explorer/i);
    const panelSummary = screen.getByText(/Raspberry Pi/i);

    // Assert
    expect(panel).toBeInTheDocument();
    expect(panelImage).toBeInTheDocument();
    expect(panelBanner).toHaveTextContent('Edge of Space Explorer');
    expect(panelSummary).toHaveTextContent(
      'As a special school project, I sent a Raspberry Pi to the edge of space on a high-altitude balloon sending back live images and flight telemetry.'
    );
  });

  test('setFocusAboutId is called when panel is hovered over or unhovered', async () => {
    // Arrange
    renderComponent();
    const panel = screen.getByRole('listitem');

    // Act
    await userEvent.hover(panel);

    // Assert
    expect(mockSetFocusAboutId).toHaveBeenCalledTimes(1);
    expect(mockSetFocusAboutId).toHaveBeenCalledWith('11');

    // Act
    await userEvent.unhover(panel);

    // Assert
    expect(mockSetFocusAboutId).toHaveBeenCalledTimes(2);
    expect(mockSetFocusAboutId).toHaveBeenCalledWith('');
  });

  test('setSelectedAbout is called when panel is clicked', async () => {
    // Arrange
    renderComponent();
    const panel = screen.getByRole('listitem');

    // Act
    await userEvent.click(panel);

    // Assert
    expect(mockSetSelectedAbout).toHaveBeenCalledTimes(1);
    expect(mockSetSelectedAbout).toHaveBeenCalledWith(about1);
    expect(mockNavigate).toHaveBeenCalledWith(`/more-about-me/${about1.id}`);
  });
});


