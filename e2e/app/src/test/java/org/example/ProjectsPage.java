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


//    private final By girlAndGoatImageBy = By.cssSelector("img[id='image/v1703781467/polmlpk8iugb6lrfndue.jpg']");
//    private final By cancelDeleteImageBtn = By.cssSelector("button[id='cancel-delete-image-btn']");
//    private final By hoverInfoAvatarImageBy = By.cssSelector("img[id='hover-info-avatar-image']");
//    private final By hoverInfoAvatarLetterContainerBy = By.cssSelector("div[id='hover-info-avatar-letter-container']");
//    private final By hoverInfoLikesNumBy = By.cssSelector("p[id='hover-info-likes-num']");
//    private final By hoverInfoLikesOutlineIconBy = By.cssSelector("svg[id='hover-info-likes-outline-icon']");

    public ProjectsPage(WebDriver driver) {
        this.driver = driver;
    }

    public void navigate() {
//        driver.get("http://localhost:5173");
        driver.get("https://pablo-joyce.onrender.com/");
    }
    public String getPageTitle() {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(3));
        wait.until(ExpectedConditions.titleIs("Gallery"));
        return driver.getTitle();
    }
    public By getElementBy(String identifier) {
        return switch (identifier) {
            case "lupoImage" -> lupoImageBy;
            case "galleryImage" -> galleryImageBy;
            case "farcebookImage" -> farcebookImageBy;
            case "knotImage" -> knotImageBy;
            case "alternativeImage" -> alternativeImageBy;
            case "eclipseImage" -> eclipseImageBy;
//
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
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(2));
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
