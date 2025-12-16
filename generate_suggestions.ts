import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';
import { softwareData } from './data/software'; // Adjust path if needed

async function fetchPrice(url: string): Promise<string | null> {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    // This is a simple example; in reality, you'd need to inspect each site's HTML to find the price selector
    // For demonstration, assume price is in a span with class 'price'
    const price = $('span.price').text().trim();
    return price || null;
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    return null;
  }
}

async function generateUpdates() {
  const updates = [];

  for (const software of softwareData) {
    const currentPrice = await fetchPrice(software.pricingUrl);
    if (currentPrice && currentPrice !== software.price) {
      updates.push({
        id: software.id,
        name: software.name,
        oldPrice: software.price,
        newPrice: currentPrice,
        url: software.pricingUrl
      });
    }
  }

  const filePath = path.join(__dirname, 'data', 'aggiornamenti_suggeriti.json');
  fs.writeFileSync(filePath, JSON.stringify(updates, null, 2));
  console.log('File aggiornamenti_suggeriti.json creato con aggiornamenti suggeriti.');
}

generateUpdates();