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

public class Abouts3ColumnsTest {
    private static ChromeDriver driver;
    private static AboutsPage aboutsPage;
    private static Navbar navbar;
    private static String siteLocation;

    @BeforeAll
    static void launchBrowser() {
        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();


        // Workaround: Chrome only working in GH Actions if running in headless mode
        if(System.getenv("CI") != null) {
            options.addArguments("--headless", "--no-sandbox", "--disable-dev-shm-usage");
            siteLocation = "deployed";
        } else {
            siteLocation = "local";
        }
//        http://192.168.1.200:5173/
        driver = new ChromeDriver(options);
        aboutsPage = new AboutsPage(driver);
        navbar = new Navbar(driver);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(1));
    }

    @BeforeEach
    // "local" or "deployed" : "threeColumns", "twoColumns" or "omeColumn"
    void loadProjectsPage() {
        aboutsPage.navigate(siteLocation, "threeColumns");
    }


    @DisplayName("Test text of navbar project section link buttons")
    @ParameterizedTest(name = "Test text of {0} is {1}")
    @CsvSource({
            "navSpaceBtn, Space Explorer",
            "navForestBtn, Forest Creator",
            "navStemBtn, STEM in Schools",
            "navFsBtn, Forest School",
            "navFurnitureBtn, Furniture & Craft",
            "navCuriosityBtn, Learning & Curiosity"
    })
    void testNavElementText(String identifier, String expectedText) throws Exception {
        // Arrange
        String element = navbar.getNavElementText(identifier);
        // Assert
        assertEquals(expectedText, element);
    }
    @Test
    void testAbsenceOfMoreAboutMeLinkButton() {
        String element = navbar.getNavElementText("navProjectsSectionBtn");
        assertEquals("Software Projects", element);
    }
    @DisplayName("Test absence of navbar about section link buttons")
    @ParameterizedTest(name = "Test presence of {0} image")
    @CsvSource({
            "navLupoBtn",
            "navGalleryBtn",
            "navFarcebookBtn",
            "navKnotBtn",
            "navAlternativeBtn",
            "navEclipseBtn",
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
        assertEquals("About Me", element);
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
            "spaceImage",
            "forestImage",
            "stemImage",
            "fsImage",
            "furnitureImage",
            "curiosityImage"
    })
    void testPresenceOfProjectMainImage(String identifier) {
        // Arrange
        boolean isPresent = aboutsPage.checkPresenceOfElement(identifier);
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
