var Page = require('./base_page');

Page.prototype.writeEmail = async function (cssSelector, email) {
  return await this.write(cssSelector, email);
};

Page.prototype.requestBtn = async function (selector, value) {
  return {
    opacity: await this.find(selector).getCssValue(value),
    state: await this.find(selector).isEnabled()
  };
};

Page.prototype.clickSubmit = async function () {
  return await this.find('.btn').click();
};

Page.prototype.alertSuccess = async function (selector) {
  await this.clickSubmit();
  await this.waitFor({ css: selector }, 15000);
  console.log(await this.find(selector).getText());
};

module.exports = Page;