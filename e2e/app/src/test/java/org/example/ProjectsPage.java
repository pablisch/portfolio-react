package org.example;

import java.time.Duration;
import org.openqa.selenium.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ProjectsPage {
    protected WebDriver driver;
    private final By lupoImageBy = By.cssSelector("img[alt='London Underground Phony Orchestra']");
    private final By galleryImageBy = By.cssSelector("img[alt='Gallery App']");
    private final By farcebookImageBy = By.cssSelector("img[alt='FarceBook']");
    private final By knotImageBy = By.cssSelector("img[alt='Knot Very Useful']");
    private final By alternativeImageBy = By.cssSelector("img[alt='Alternative Routes']");
    private final By eclipseImageBy = By.cssSelector("img[alt='Eclipse Battle Calculator']");

    public ProjectsPage(WebDriver driver) {
        this.driver = driver;
    }

    public int getScreenWidth(String numOfColumns) {
        return switch (numOfColumns) {
            case "threeColumns" -> 1464;
            case "twoColumns" -> 910;
            case "oneColumn" -> 500;

            default -> throw new IllegalArgumentException("Invalid numOfColumns value: " + numOfColumns);
        };
    }
    public String getPageUrl(String localOrDeployed) {
        return switch (localOrDeployed) {
            case "local" -> "http://127.0.0.1:5173/";
            case "deployed" -> "https://pablo-joyce.onrender.com/";

            default -> throw new IllegalArgumentException("Invalid localOrDeployed value: " + localOrDeployed);
        };
    }

    public void navigate(String localOrDeployed, String numOfColumns) {
        driver.get(getPageUrl(localOrDeployed));
        driver.manage().window().setSize(new Dimension(getScreenWidth(numOfColumns), 936));
    }
    public String getPageTitle() {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(3));
        wait.until(ExpectedConditions.titleIs("Gallery"));
        return driver.getTitle();
    }
    public By getElementBy(String identifier) {
        return switch (identifier) {
            case "lupoImage" -> By.cssSelector("img[alt='London Underground Phony Orchestra']");
//            case "lupoImage" -> lupoImageBy;
            case "galleryImage" -> galleryImageBy;
            case "farcebookImage" -> farcebookImageBy;
            case "knotImage" -> knotImageBy;
            case "alternativeImage" -> alternativeImageBy;
            case "eclipseImage" -> eclipseImageBy;

            default -> throw new IllegalArgumentException("Invalid identifier: " + identifier);
        };
    }
    public void hoverOverElement(String identifier) {
        WebElement image = driver.findElement(getElementBy(identifier));
        Actions actions = new Actions(driver);
        actions.moveToElement(image).build().perform();
    }
    public boolean checkPresenceOfElement(String identifier) {
        try {
            WebElement element = driver.findElement(getElementBy(identifier));
            return element.isDisplayed();
        } catch (NoSuchElementException e) {
            return false;
        }
    }
    public boolean checkPresenceOfExpectedElement(String identifier) {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(1));
        wait.until(ExpectedConditions.presenceOfElementLocated(getElementBy(identifier)));

        try {
            WebElement element = driver.findElement(getElementBy(identifier));
            return element.isDisplayed();
        } catch (NoSuchElementException e) {
            return false;
        }
    }
    public String getElementText(String identifier) {
        WebElement element = driver.findElement(getElementBy(identifier));
        return element.getText();
    }
    public void clickElement(String identifier) {
        driver.findElement(getElementBy(identifier)).click();
    }

    public void waitForElementToNotBePresent(String identifier) {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(2));
        wait.until(ExpectedConditions.invisibilityOfElementLocated(getElementBy(identifier)));
    }
}
