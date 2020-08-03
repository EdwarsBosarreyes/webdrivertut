const { Builder, By, until } = require("selenium-webdriver"); 

let browser = 'chrome';

function Page () {
    this.driver = new Builder().forBrowser(browser).build();
    var driver = this.driver;

    this.visit = function (theUrl) {
      return driver.get(theUrl);
    };

    this.quit = function(){
    return driver.quit();
    };

    this.find = function (el){
      driver.wait(until.elementLocated(By.css(el)), 10000);
      return driver.findElement(By.css(el));
     
    };

    this.findAll = function(el){
      driver.wait(until.elementLocated(By.css(el)), 5000);
      return driver.findElements(By.css(el));
    };

    this.write = function(el, txt){
      return driver.findElement(By.css(el)).sendKeys(txt);
    };
  }

  module.exports = Page;