const { Builder, By, Key, until } = require("selenium-webdriver");
async function explicitWaits() {

  var driver = await new Builder().forBrowser("chrome").build();
  await driver.get('https://library-app.firebaseapp.com');

  await driver.findElement(By.css('input')).sendKeys('usuario@email.com');
  await driver.findElement(By.css('.btn')).click();
  // Explicit Waits
  await driver.wait(until.elementLocated(By.css('.alert-success')), 5000).getText().then(function (text) {
    console.log("Alert: " + text);
  });

  driver.quit();
}

explicitWaits();
