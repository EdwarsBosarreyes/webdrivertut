const { Builder, By, Key, util } = require("selenium-webdriver");
async function sendKeys() {

  var driver = await new Builder().forBrowser("chrome").build();
  await driver.get('https://library-app.firebaseapp.com');
  
  await driver.findElement(By.css('input')).sendKeys('usuario@email.com');
  await driver.findElement(By.css('.btn')).click();
  await driver.sleep(3000);
  await driver.findElement(By.css('.alert-success')).getText().then(function(text){
    console.log("Alert: "+ text);
  });

  await driver.quit();
}

sendKeys();





