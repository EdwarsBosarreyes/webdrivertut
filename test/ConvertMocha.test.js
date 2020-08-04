var Page  = require('../lib/home_page.js'); 
var page; 

let browser = 'chrome';

describe('Library app Scenarios with ' + browser, function () {
  this.timeout(50000);
  before(async function () {
      page = new Page();
      await page.visit('https://library-app.firebaseapp.com');
  });

  it('Typing valid Email changes button opacity to 1', async function () {
    await page.writeEmail('input', 'user@fakemail.com');
    await page.requestBtn('.btn', 'opacity');
  });

  it('Clicking Request invitation trigres a confirmation alert', async function () {
    await page.alertSuccess('.alert-success');
  });
  after(() => page.quit());
});