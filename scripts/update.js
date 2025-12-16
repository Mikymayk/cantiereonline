// scripts/update.js
require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

// 1. CONFIGURAZIONE
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Leggiamo il file originale (come testo, per semplicità)
// NOTA: Per questo script manuale, copieremo i dati target qui sotto per evitare complessità di importazione TS
// IN FUTURO: Potrai automatizzare la lettura diretta del file .ts, ma per ora facciamolo semplice.

const TARGETS = [
    { id: 'planradar', url: 'https://www.planradar.com/it/prezzi/' },
    { id: 'fieldwire', url: 'https://www.fieldwire.com/pricing/' },
    { id: 'melaworks', url: 'https://www.mela.work/it/prezzi/' },
    { id: 'acca_primus', url: 'https://www.acca.it/primus-online-computo-metrico-cloud' },
    { id: 'teamsystem_cpm', url: 'https://www.teamsystem.com/construction/computo-contabilita-lavori/cpm' }
];

async function fetchWebsiteText(url) {
    try {
        const response = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        const html = await response.text();
        const $ = cheerio.load(html);
        // Rimuove script e stili per pulire il testo
        $('script').remove();
        $('style').remove();
        return $('body').text().replace(/\s+/g, ' ').substring(0, 10000); // Prende i primi 10k caratteri
    } catch (e) {
        console.error(`❌ Errore scaricamento ${url}:`, e.message);
        return null;
    }
}

async function analyze(id, text) {
    const prompt = `
    Analizza il seguente testo estratto dalla pagina prezzi di un software edile.
    Estrai un oggetto JSON con questi campi aggiornati:
    - price: Il prezzo mensile più basso (es. "€29"). Se non c'è prezzo, scrivi "Richiesta". Se è gratis, "€0".
    - paymentType: "/mese", "/anno", "(Free)" o "(Preventivo)".
    - features: Un oggetto booleano (true/false) per queste chiavi, basandoti SOLO sul testo:
      {
        free_trial: (c'è prova gratuita?),
        app_ios: (c'è app iPhone/iPad?),
        app_android: (c'è app Android?),
        funziona_offline: (funziona senza internet?),
        chat_interna: (ha una chat?),
        computo_metrico: (fa computi metrici?)
      }
    
    TESTO SITO:
    ${text}
    
    Rispondi SOLO con il JSON valido, niente markdown.
    `;

    try {
        const result = await model.generateContent(prompt);
        const jsonString = result.response.text().replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(jsonString);
    } catch (e) {
        console.error(`❌ Errore AI su ${id}:`, e.message);
        return null;
    }
}

async function main() {
    console.log("🤖 AVVIO ROBOT AGGIORNAMENTO PREZZI...\n");
    let updates = {};

    for (const target of TARGETS) {
        process.stdout.write(`⏳ Analisi ${target.id}... `);
        
        const text = await fetchWebsiteText(target.url);
        if (!text) {
            console.log("SKIP (Sito bloccato)");
            continue;
        }

        const data = await analyze(target.id, text);
        if (data) {
            updates[target.id] = data;
            console.log("✅ OK");
            console.log(`   💰 Prezzo rilevato: ${data.price} ${data.paymentType}`);
        } else {
            console.log("⚠️ AI Fallita");
        }
    }

    // SALVA IL REPORT
    fs.writeFileSync('aggiornamenti_suggeriti.json', JSON.stringify(updates, null, 2));
    console.log("\n📄 Fatto! Controlla il file 'aggiornamenti_suggeriti.json'");
    console.log("👉 Se i dati sono corretti, copiali manualmente in data/software.ts");
}

main();