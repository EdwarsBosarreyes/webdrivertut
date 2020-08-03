 var Page = require('./base_page');

 Page.prototype.requestBtn = async function () {
   await this.write('input', 'user@fakemail.com');
   return {
     opacity: await this.find('.btn').getCssValue('opacity'),
     state: await this.find('.btn').isEnabled()
   };
 };

 Page.prototype.clickSubmit = async function () {
   return await this.find('.btn').click();
 };

 Page.prototype.alertSuccess = async function () {
    await this.clickSubmit();
    return await this.find('.alert').getText();
 };

 module.exports = Page;