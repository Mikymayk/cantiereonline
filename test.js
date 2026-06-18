const puppeteer = require('puppeteer');

(async () => {
  try {
    console.log("Launching browser...");
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    console.log("Navigating to http://localhost:3000 ...");
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });
    
    console.log("Waiting a bit for React to hydrate and useEffect to run...");
    await new Promise(r => setTimeout(r, 2000));
    
    // Check if the banner text is on the page
    const textContent = await page.evaluate(() => {
      return document.body.innerText;
    });
    
    const bannerVisible = textContent.includes('Rispettiamo la tua privacy');
    console.log("=== TEST RESULT ===");
    console.log("Is Banner Text visible?", bannerVisible);
    if (!bannerVisible) {
      console.log("Banner not found. Body text snippet:", textContent.substring(0, 200));
    }
    
    await browser.close();
    process.exit(0);
  } catch (err) {
    console.error("Test failed:", err);
    process.exit(1);
  }
})();
