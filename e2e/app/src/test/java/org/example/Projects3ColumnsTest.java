package org.example;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.time.Duration;

import static org.junit.jupiter.api.Assertions.*;
import java.io.File;
import org.openqa.selenium.OutputType;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.TakesScreenshot;

public class Projects3ColumnsTest {
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
    // "local" or "deployed" : "threeColumns", "twoColumns" or "omeColumn"
    void loadProjectsPage() {
        projectsPage.navigate("deployed", "threeColumns");
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
    void testNavElementText(String identifier, String expectedText) throws Exception {
        // Arrange
        takeScreenshot(driver, "screenshots/testNavElementText_" + identifier + ".png");
        String element = navbar.getNavElementText(identifier);
        // Assert
        assertEquals(expectedText, element);
    }
    @Test
    void testTextOfMoreAboutMeLinkButton() {
        String element = navbar.getNavElementText("navAboutSectionBtn");
        assertEquals("More About Me", element);
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
//        String identifier = "navLogo";
        takeScreenshot(driver, "testPresenceOfNavIconImage_" + identifier + ".png");
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

    // Helper function for taking screenshots using WebDriver
    public static void takeScreenshot(ChromeDriver driver, String desiredPath) throws Exception {
        TakesScreenshot screenshot = ((TakesScreenshot)driver);
        File screenshotFile = screenshot.getScreenshotAs(OutputType.FILE);
        File targetFile = new File(desiredPath);
        FileUtils.copyFile(screenshotFile, targetFile);
    }
}
