package org.locator;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.reuse.Utility;

public class Home extends Utility {
	
	public Home() {

		PageFactory.initElements(driver, this);
	}
	
	
	@FindBy(xpath="//input[@title='Search for Products, Brands and More']")
	private WebElement searchBox;


	public WebElement getSearchBox() {
		return searchBox;
	}
	
	
	

}
