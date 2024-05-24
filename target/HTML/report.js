$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/AddProduct.feature");
formatter.feature({
  "name": "To Validate Add To Cart Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate adding and removing products in add to cart",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User has to launch the browser and flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "AddAndRemove.user_has_to_launch_the_browser_and_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to search the product through search box",
  "keyword": "When "
});
formatter.match({
  "location": "AddAndRemove.user_has_to_search_the_product_through_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to select and adding product into cart",
  "keyword": "And "
});
formatter.match({
  "location": "AddAndRemove.user_has_to_select_and_adding_product_into_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to place order and login to the application",
  "keyword": "And "
});
formatter.match({
  "location": "AddAndRemove.user_has_to_place_order_and_login_to_the_application()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[text()\u003d\u0027Signup\u0027]\"}\n  (Session info: chrome\u003d125.0.6422.76)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.20.0\u0027, revision: \u0027866c76ca80\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.22\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [49f48fa34d524d217e96ab5086a951d1, findElement {value\u003d//span[text()\u003d\u0027Signup\u0027], using\u003dxpath}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 125.0.6422.76, chrome: {chromedriverVersion: 125.0.6422.78 (14db42ec38ad..., userDataDir: C:\\Users\\Acer\\AppData\\Local...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:58414}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:58414/devtoo..., se:cdpVersion: 125.0.6422.76, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 49f48fa34d524d217e96ab5086a951d1\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorCodec.decode(ErrorCodec.java:167)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:138)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:50)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:190)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:216)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:174)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat org.reuse.Utility.clickWebElement(Utility.java:75)\r\n\tat org.stepDefinition.AddAndRemove.user_has_to_place_order_and_login_to_the_application(AddAndRemove.java:64)\r\n\tat ✽.User has to place order and login to the application(file:src/test/resources/AddProduct.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User has to selecting address and payment option",
  "keyword": "And "
});
formatter.match({
  "location": "AddAndRemove.user_has_to_selecting_address_and_payment_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to remove the product from the cart",
  "keyword": "And "
});
formatter.match({
  "location": "AddAndRemove.user_has_to_remove_the_product_from_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AddAndRemove.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});