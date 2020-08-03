const { webdriver, Builder, By, Key, until } = require('selenium-webdriver'),
  test = require('selenium-webdriver/testing'),
  assert = require('assert');

let driver;

test.describe('PortfolioTests', function () {
  test.before(function () {
    driver = new Builder().forBrowser('chrome').build();
  });

  test.it('01 Drums Access', function () {
    driver.get("https://andreidbr.github.io/JS30/");
    driver.findElement(By.xpath('/html/body/div[2]/div[1]')).click();
    driver.getTitle().then(function (title) {
      assert.equal(title, "JS30: 01 Drums");
    });
  });

  test.after(() => driver.quit());
});