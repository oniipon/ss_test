const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.google.com/');

  const navigationPromise = page.waitForNavigation();
  await navigationPromise;
  page.screenshot();

  await browser.close();
})();
