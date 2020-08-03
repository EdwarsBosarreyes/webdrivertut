const { Builder, By, Key, until } = require("selenium-webdriver");
async function explicitWaits() {

  var driver = await new Builder().forBrowser("chrome").build();
  await driver.get('https://library-app.firebaseapp.com');

  var submitBtn = await driver.findElement(By.css('.btn'));
  await driver.findElement(By.css('input')).sendKeys('us');

  // await driver.wait(function () {
  //   return submitBtn.isEnabled();
  // }, 10000);

  // Explicit Waits with Custom Conditions
  await driver.wait(function () {
     return submitBtn.getCssValue('opacity').then(function(result){
      console.log(result);
      return result == 1;
    });
  }, 15000);


 await submitBtn.click();
  // Explicit Waits
  const texto = await driver.wait(until.elementLocated(By.css('.alert-success')), 5000).getText();
  console.log("Alert: " + texto);

  driver.quit();
}

explicitWaits();
