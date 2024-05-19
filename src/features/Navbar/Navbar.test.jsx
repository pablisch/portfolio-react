import { test, describe, expect, vi } from "vitest";
import Navbar from "./Navbar";
import { render, screen } from "../../../test-setup/testUtils-mockAllContext";
import user from "@testing-library/user-event";

const mockSetAvatarHovered = vi.fn();
const mockSetIsBurgerMenuOpen = vi.fn();

const renderComponent = () => {
  render(
    <Navbar
    isAvatarHovered={false}
    setIsAvatarHovered={mockSetAvatarHovered}
    isBurgerMenuOpen={false}
    setIsBurgerMenuOpen={mockSetIsBurgerMenuOpen}
    />, { theme: 'retro'}
  );
}

describe('Navbar', () => { 
  test('renders the Navbar component', () => { 
    // Arrange
    renderComponent();
    // Act
    // Assert
  });

  test('isAvatarHovered is called when avatar is hovered over or unhovered', async () => {
    // Arrange
    renderComponent();
    const avatar = screen.getByRole('img', { name: /avatar icon/i });
    // screen.logTestingPlaygroundURL()
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