package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class Navbar {
    protected WebDriver driver;
    private final By navLogoBy = By.cssSelector("img[id='nav-logo']");
    private final By navSectionTitleBy = By.cssSelector("h1[id='nav-section-title-text']");
    // Project links
    private final By navLupoBtnBy = By.cssSelector("div[id='lupo-nav-btn']");
    private final By navGalleryBtnBy = By.cssSelector("div[id='gallery-nav-btn']");
    private final By navFarcebookBtnBy = By.cssSelector("div[id='farcebook-nav-btn']");
    private final By navKnotBtnBy = By.cssSelector("div[id='knot-nav-btn']");
    private final By navAlternativeBtnBy = By.cssSelector("div[id='alternative-nav-btn']");
    private final By navEclipseBtnBy = By.cssSelector("div[id='eclipse-nav-btn']");
    // About links
    private final By navSpaceBtnBy = By.cssSelector("div[id='space-nav-btn']");
    private final By navForestBtnBy = By.cssSelector("div[id='forest-nav-btn']");
    private final By navStemBtnBy = By.cssSelector("div[id='stem-nav-btn']");
    private final By navFsBtnBy = By.cssSelector("div[id='fs-nav-btn']");
    private final By navFurnitureBtnBy = By.cssSelector("div[id='furniture-nav-btn']");
    private final By navCuriosityBtnBy = By.cssSelector("div[id='curiosity-nav-btn']");

    private final By navAboutSectionBtnBy = By.cssSelector("a[id='about-section-link']");
    private final By navProjectsSectionBtnBy = By.cssSelector("a[id='projects-section-link']");
    private final By githubBtnBy = By.cssSelector("a[id='github-nav-btn']");
    private final By linkedinBtnBy = By.cssSelector("a[id='linkedin-nav-btn']");
    private final By settingsBtnBy = By.cssSelector("div[id='settings-nav-btn']");
    private final By burgerMenuBy = By.cssSelector("a[id='hamburger']");

    public Navbar(WebDriver driver) {
        this.driver = driver;
    }

    public By getElementBy(String identifier) {
        return switch (identifier) {
            case "navLogo" -> navLogoBy;
            case "navSectionTitle" -> navSectionTitleBy;
            case "navLupoBtn" -> navLupoBtnBy;
            case "navGalleryBtn" -> navGalleryBtnBy;
            case "navFarcebookBtn" -> navFarcebookBtnBy;
            case "navKnotBtn" -> navKnotBtnBy;
            case "navAlternativeBtn" -> navAlternativeBtnBy;
            case "navEclipseBtn" -> navEclipseBtnBy;
            case "navSpaceBtn" -> navSpaceBtnBy;
            case "navForestBtn" -> navForestBtnBy;
            case "navStemBtn" -> navStemBtnBy;
            case "navFsBtn" -> navFsBtnBy;
            case "navFurnitureBtn" -> navFurnitureBtnBy;
            case "navCuriosityBtn" -> navCuriosityBtnBy;

            case "navAboutSectionBtn" -> navAboutSectionBtnBy;
            case "githubBtn" -> githubBtnBy;
            case "linkedinBtn" -> linkedinBtnBy;
            case "settingsBtn" -> settingsBtnBy;
            case "burgerMenu" -> burgerMenuBy;

            default -> throw new IllegalArgumentException("Invalid identifier: " + identifier);
        };
    }
    public void hoverOverElement(String identifier) {
        WebElement image = driver.findElement(getElementBy(identifier));
        Actions actions = new Actions(driver);
        actions.moveToElement(image).build().perform();
    }
    public Boolean checkNavElementPresence(String identifier) {
        return driver.findElement(getElementBy(identifier)).isDisplayed();
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
    public String getNavElementText(String identifier) {
//        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(2));
//        wait.until(ExpectedConditions.presenceOfElementLocated(getElementBy(identifier)));
        WebElement element = driver.findElement(getElementBy(identifier));
        return element.getText();
    }
    public void clickNavLink(String identifier) {
        driver.findElement(getElementBy(identifier)).click();
    }

}

