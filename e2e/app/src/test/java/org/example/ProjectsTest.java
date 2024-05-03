package org.example;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.chrome.ChromeDriver;

import java.time.Duration;

import static org.junit.jupiter.api.Assertions.*;

public class ProjectsTest {
    private static ChromeDriver driver;
    private static ProjectsPage projectsPage;
    private static Navbar navbar;

    @BeforeAll
    static void launchBrowser() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        projectsPage = new ProjectsPage(driver);
        navbar = new Navbar(driver);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(1));
    }

    @BeforeEach
    void loadProjectsPage() {
        projectsPage.navigate();
    }

    @Test
    void pretendTest() {
        assertTrue(true);
    }
    @DisplayName("Test text of navbar project section link buttons")
    @ParameterizedTest(name = "Test text of {0} is {1}")
    @CsvSource({
            "navLupoBtn, LUPO",
            "navGalleryBtn, Gallery App",
            "navFarcebookBtn, Farce Book",
            "navKnotBtn, Knot Very Useful",
            "navAlternativeBtn, Alter Native Routes",
            "navEclipseBtn, Eclipse Battle Calc",
    })
    void testNavElementText(String identifier, String expectedText) {
        // Arrange
        String element = navbar.getNavElementText(identifier);
        // Assert
        assertEquals(expectedText, element);
    }
    @DisplayName("Test absence of navbar about section link buttons")
    @ParameterizedTest(name = "Test presence of {0} image")
    @CsvSource({
            "navSpaceBtn",
            "navForestBtn",
            "navStemBtn",
            "navFsBtn",
            "navFurnitureBtn",
            "navCuriosityBtn"
    })
    void testAbsenceOfAboutSectionLinks(String identifier) {
        // Arrange
        boolean isPresent = navbar.checkPresenceOfElement(identifier);
        // Assert
        assertFalse(isPresent);
    }
    @Test
    void testNavSectionTitleText() {
        // Arrange
        String identifier = "navSectionTitle";
        String element = navbar.getNavElementText(identifier);
        // Assert
        assertEquals("My Projects", element);
    }
    @Test
    void testPresenceOfNavLogo() {
        // Arrange
        String identifier = "navLogo";
        boolean isPresent = navbar.checkNavElementPresence(identifier);
        // Assert
        assertTrue(isPresent);
    }
    @DisplayName("Test presence of main project image")
    @ParameterizedTest(name = "Test presence of {0} image")
    @CsvSource({
            "lupoImage",
            "galleryImage",
            "farcebookImage",
            "knotImage",
            "alternativeImage",
            "eclipseImage"
    })
    void testPresenceOfProjectMainImage(String identifier) {
        // Arrange
        boolean isPresent = projectsPage.checkPresenceOfElement(identifier);
        // Assert
        assertTrue(isPresent);
    }

    @AfterEach
    void clearStorage() {
        driver.navigate().refresh();
    }

    @AfterAll
    static void closeBrowser() {
        driver.quit();
    }
}