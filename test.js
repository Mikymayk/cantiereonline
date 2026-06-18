const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log("Navigating to http://localhost:3000 ...");
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  // Wait a bit to ensure React hydration
  await page.waitForTimeout(2000);
  
  // Check if CookieBanner text is present
  const bannerText = await page.evaluate(() => {
    return document.body.innerText.includes('Rispettiamo la tua privacy');
  });
  
  console.log("Is Banner Text visible?", bannerText);
  
  // Save screenshot
  await page.screenshot({ path: 'screenshot.png' });
  console.log("Saved screenshot.png");
  
  await browser.close();
})();
