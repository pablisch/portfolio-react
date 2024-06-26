package org.example;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.apache.commons.io.FileUtils;
import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.io.File;
import java.time.Duration;

import static org.junit.jupiter.api.Assertions.*;

public class Projects2ColumnsTest {
    private static ChromeDriver driver;
    private static ProjectsPage projectsPage;
    private static Navbar navbar;

    @BeforeAll
    static void launchBrowser() {
        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();

        // Workaround: Chrome only working in GH Actions if running in headless mode
        if(System.getenv("CI") != null) {
            options.addArguments("--headless", "--no-sandbox", "--disable-dev-shm-usage");
        }

        driver = new ChromeDriver(options);
        projectsPage = new ProjectsPage(driver);
        navbar = new Navbar(driver);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(1));
    }

    @BeforeEach
    void loadProjectsPage() {
        projectsPage.navigate("deployed", "twoColumns");
    }

    @Test
    void testTextOfMoreAboutMeLinkButton() {
        String element = navbar.getNavElementText("navAboutSectionBtn");
        assertEquals("More About Me", element);
    }
    @Test
    void testPresenceOfBurgerBarMenu() {
        boolean isPresent = navbar.checkPresenceOfExpectedElement("burgerMenu");
        assertTrue(isPresent);
    }
    @DisplayName("Test absence of navbar project & about section link buttons")
    @ParameterizedTest(name = "Test presence of {0} image")
    @CsvSource({
            "navLupoBtn",
            "navGalleryBtn",
            "navFarcebookBtn",
            "navKnotBtn",
            "navAlternativeBtn",
            "navEclipseBtn",
            "navSpaceBtn",
            "navForestBtn",
            "navStemBtn",
            "navFsBtn",
            "navFurnitureBtn",
            "navCuriosityBtn"
    })
    void testAbsenceOfProjectAndAboutSectionLinks(String identifier) {
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
    @DisplayName("Test presence of nav logo and nav icons")
    @ParameterizedTest(name = "Test presence of {0} nav image")
    @CsvSource({
            "navLogo",
            "githubBtnLogo",
            "linkedinBtnLogo",
            "SettingsBtnLogo",
    })
//    @Test
    void testPresenceOfNavLogoAndIconImages(String identifier) throws Exception {
        // Arrange
        boolean isPresent = navbar.checkPresenceOfExpectedElement(identifier);
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
