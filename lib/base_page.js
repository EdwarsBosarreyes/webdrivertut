const { Builder, By, until } = require("selenium-webdriver");
var fake = require('../utils/fake.data'); 

let browser = 'chrome';

function Page () {
    this.driver = new Builder().forBrowser(browser).build();
    var driver = this.driver;
    this.fake = fake;

    this.visit = function (theUrl) {
      return driver.get(theUrl);
    };

    this.quit = function(){
    return driver.quit();
    };

    this.find = function (el){
      return driver.findElement(By.css(el));
    };

  this.waitFor = function (locator, timeout) {
    var waitTimeout = timeout || 20000;
    return driver.wait(until.elementLocated(locator, waitTimeout));
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