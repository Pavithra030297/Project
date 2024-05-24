package org.stepDefinition;

import java.awt.AWTException;
import java.io.IOException;

import org.junit.Assert;
import org.locator.Adding;
import org.locator.Home;
import org.locator.Product;
import org.reuse.Utility;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class AddAndRemove extends Utility{
	
	Home h;
	Product p;
	Adding a;
	
	@Given("User has to launch the browser and flipkart application")
	public void user_has_to_launch_the_browser_and_flipkart_application() {

		launchBrowser("Chrome");
		launchUrl("https://www.flipkart.com/");
		implitWait();
	}

	@When("User has to search the product through search box")
	public void user_has_to_search_the_product_through_search_box() throws AWTException, IOException {

		h = new Home();
		String fromExcel = readFromExcel("Sheet1", 0, 0);
		passTextToTextBox(h.getSearchBox(),fromExcel );
		pressEnter(); 
	}

	@When("User has to select and adding product into cart")
	public void user_has_to_select_and_adding_product_into_cart() {
	    
		p = new Product();
		driver.navigate().refresh();
		clickWebElement(p.getProduct());
		switchToAnotherWindow(1);
		driver.navigate().refresh();
		clickWebElement(p.getAddToCart());	
	}

	@When("User has to place order and login to the application")
	public void user_has_to_place_order_and_login_to_the_application() throws AWTException, InterruptedException, IOException {
	    
		pageDown();
		a = new Adding();
		Assert.assertTrue("Wrong Product Added Into Card", a.getProductCheck().getText().contains("iPhone"));
		clickWebElement(a.getPlaceOrder());
		passTextToTextBox(a.getPhNo(), readFromExcel("Sheet1", 0, 1));
		clickWebElement(a.getContinueBtn());
		
		// "Something's not right. Please try again." i have attempt morethan one time i was face error but i write the code another tesecase.
		
		 //Thread.sleep(3000);
		 clickWebElement(a.getSignUp());
	}

	@When("User has to selecting address and payment option")
	public void user_has_to_selecting_address_and_payment_option() {
	   
//		passTextUsingJs(a.getName(), "Pavi");
//		passTextUsingJs(a.getPhNo(), "892575089");
//		passTextUsingJs(a.getPinCode(), "600009");
//		passTextUsingJs(a.getLocality(), "Indian");
//		passTextUsingJs(a.getAddress(), "kodampakkam, Near vadapazhani");
//		passTextUsingJs(a.getCity(), "Chennai");
//		selectState(a.getStateDd(), "Tamil Nadu");
//		clickWebElement(a.getSelectHome());
//		clickWebElement(a.getSaveAddress());
	}

	@When("User has to remove the product from the cart")
	public void user_has_to_remove_the_product_from_the_cart() {
	    //to remove the cart 
		
	}

	@Then("User has to close the browser")
	public void user_has_to_close_the_browser() throws InterruptedException {
	    
		//Thread.sleep(5000);
		closeBrowser();
	}
	

}
