package org.locator;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.reuse.Utility;

public class Product extends Utility {
	
	public Product() {

		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="//div[@data-id='MOBGTAGPAQNVFZZY']")
	private WebElement product;
	
	@FindBy(xpath="//button[text()='Add to cart']")
	private WebElement addToCart;
	
	public WebElement getProduct() {
		return product;
	}

	public WebElement getAddToCart() {
		return addToCart;
	}

	
}
