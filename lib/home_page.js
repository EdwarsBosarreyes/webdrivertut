var Page = require('./base_page');
var locators = require('../utils/locators');
var emailInput = locators.emailInput;
var requestInviteBtn = locators.requestInviteBtn;
var alertSuccess = locators.alertSuccess;

Page.prototype.writeEmail = async function (cssSelector, email) {
  return await this.write(cssSelector, email);
};

Page.prototype.requestBtn = async function () {
  await this.write(emailInput, this.fake().email);
  return {
    opacity: await this.find(requestInviteBtn).getCssValue('opacity'),
    state: await this.find(requestInviteBtn).isEnabled()
  };
};

Page.prototype.clickSubmit = async function () {
  return await this.find(requestInviteBtn).click();
};

Page.prototype.alertSuccess = async function () {
  await this.clickSubmit();
  await this.waitFor({ css: alertSuccess }, 15000);
  console.log(await this.find(alertSuccess).getText());
};

module.exports = Page;