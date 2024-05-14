package org.example;

import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class AboutsPage {
    protected WebDriver driver;
    public AboutsPage(WebDriver driver) {
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
            case "local" -> "http://127.0.0.1:5173/more-about-me";
            case "deployed" -> "https://pablo-joyce.onrender.com/more-about-me";

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
            case "spaceImage" -> By.cssSelector("img[alt='Edge of Space Explorer']");
            case "forestImage" -> By.cssSelector("img[alt='Forest Creator']");
            case "stemImage" -> By.cssSelector("img[alt='Primary STEM and Computing Lead']");
            case "fsImage" -> By.cssSelector("img[alt='Forest School Leader']");
            case "furnitureImage" -> By.cssSelector("img[alt='Furniture Designer & Maker']");
            case "curiosityImage" -> By.cssSelector("img[alt='Lifelong Learning & Curiosity']");

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
