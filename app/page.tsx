'use client';

import React, { useState } from 'react';
import { Check, X, Star, Info, ChevronRight, Tablet, ExternalLink, ArrowRight, Trash2, BarChart3, HardHat } from 'lucide-react';
import Link from 'next/link';

// --- CONFIGURAZIONE FEATURES ---
// Aggiunte le nuove colonne richieste
const mainFeatures = [
  { id: 'giornale', label: 'Giornale Lavori', tooltip: 'Compilazione digitale del giornale dei lavori (Obbligatorio)' },
  { id: 'pos_psc', label: 'Gestione POS', tooltip: 'Redazione Piani Operativi di Sicurezza e PSC' },
  { id: 'computo', label: 'Computo Metrico', tooltip: 'Creazione ed export computi metrici estimativi' },
  { id: 'ita_law', label: 'Normativa IT', tooltip: 'Piena conformità alle leggi italiane vigenti' },
  { id: 'offline', label: 'App Offline', tooltip: 'Funziona in cantiere anche senza internet' },
];

// --- DATABASE PRODOTTI ---
const products = [
  {
    id: 'planradar',
    name: 'PlanRadar',
    price: '€26',
    period: '/mese',
    rating: 4.8,
    reviews: 'Eccellente',
    link: 'https://www.planradar.com/it/?ref=cantiereonline', 
    recommended: true, 
    features: { 
      giornale: true, 
      pos_psc: false, // PlanRadar è focus difetti, non redazione POS
      computo: false, 
      ita_law: true, 
      offline: true 
    },
  },
  {
    id: 'fieldwire',
    name: 'Fieldwire',
    price: '€0',
    period: '(Versione Free)',
    rating: 4.6,
    reviews: 'Molto Buono',
    link: 'https://www.fieldwire.com/?ref=cantiereonline',
    recommended: false,
    features: { 
      giornale: true, 
      pos_psc: false, 
      computo: false, 
      ita_law: true, 
      offline: true 
    },
  },
  {
    id: 'melaworks',
    name: 'Mela Works',
    price: '€15',
    period: '/mese',
    rating: 4.5,
    reviews: 'Ottimo',
    link: 'https://www.mela.work/?ref=cantiereonline',
    recommended: false,
    features: { 
      giornale: true, 
      pos_psc: true, // Mela ha funzioni di sicurezza e verbali
      computo: false, // Contabilità base ma non computo completo
      ita_law: true, 
      offline: true 
    },
  },
  // ESEMPIO DI UN SOFTWARE COMPLETO (Per mostrare le colonne piene)
  {
    id: 'acca_primus',
    name: 'Primus Online',
    price: '€39',
    period: '/mese',
    rating: 4.7,
    reviews: 'Leader Computo',
    link: 'https://www.acca.it/?ref=cantiereonline', // Link fittizio per esempio
    recommended: false,
    features: { 
      giornale: true, 
      pos_psc: true, 
      computo: true, 
      ita_law: true, 
      offline: false // Spesso web based
    },
  }
];

// HARDWARE AMAZON (Curated List)
const hardware = [
  { name: 'Apple iPad Pro 11"', note: 'Il top per visualizzare planimetrie e BIM', price: '€969', link: 'https://www.amazon.it/dp/B0D3X6K1Q2?tag=cantiereonline-21' },
  { name: 'Samsung Galaxy Tab Active', note: 'Tablet Rugged indistruttibile per cantiere', price: '€450', link: 'https://www.amazon.it/dp/B0CP2S6Y2L?tag=cantiereonline-21' },
  { name: 'Leica Disto X3', note: 'Distanziometro Laser professionale Bluetooth', price: '€310', link: 'https://www.amazon.it/dp/B07B9Q6L3Z?tag=cantiereonline-21' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900 pb-32">
      
      {/* HEADER */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight text-blue-900 flex items-center gap-2">
            <HardHat className="text-orange-500" />
            CantiereOnline<span className="text-orange-500">.it</span>
          </div>
          <Link href="/privacy" className="text-xs text-gray-400 hover:text-gray-600">Privacy & Policy</Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-white pb-10 pt-12 px-4 text-center border-b border-gray-100">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight max-w-4xl mx-auto leading-tight">
          Scegli il miglior software gestionale <br className="hidden md:block"/> per edilizia e cantieri
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Confronto indipendente aggiornato al 2025 su funzionalità, normativa POS/PSC e prezzi.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-2 md:px-4 py-8">
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            {/* Aggiunta classe divide-x per le linee verticali */}
            <table className="w-full text-left border-collapse min-w-[1000px] divide-x divide-gray-100">
              
              <thead>
                <tr className="bg-slate-50 border-b border-gray-200 text-xs font-bold text-gray-600 uppercase tracking-wider divide-x divide-gray-200">
                  <th className="p-4 w-[250px] bg-slate-100/50">Software & Prezzo</th>
                  
                  {mainFeatures.map(feat => (
                    <th key={feat.id} className="p-4 text-center w-[130px] relative">
                      <div className="group flex flex-col items-center justify-center gap-1 cursor-help z-10">
                        <span className="text-center">{feat.label}</span>
                        <Info size={14} className="text-gray-400" />
                        
                        {/* TOOLTIP CORRETTO: Ora appare SOTTO (top-full, mt-2) */}
                        <div className="absolute top-full mt-2 hidden group-hover:block w-40 bg-slate-800 text-white text-[10px] normal-case p-2 rounded z-50 text-center shadow-lg mx-auto left-0 right-0">
                          {feat.tooltip}
                          {/* Freccetta verso l'alto */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-slate-800"></div>
                        </div>
                      </div>
                    </th>
                  ))}
                  
                  {/* Colonna Finale Nascosta su Mobile se vuoi, o lasciata per desktop */}
                  <th className="p-4 text-center w-[150px] bg-slate-50">Dettagli</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {products.map((product, index) => (
                  <tr key={product.id} className={`hover:bg-blue-50/20 transition-colors divide-x divide-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                    
                    {/* COLONNA 1: NOME + CTA (Mobile First) */}
                    <td className="p-5 align-top bg-white">
                      <div className="flex flex-col h-full justify-between gap-3">
                        <div>
                          <Link href={`/software/${product.id}`} className="font-bold text-lg text-slate-900 hover:text-blue-600 hover:underline decoration-2 underline-offset-4 block">
                            {product.name}
                          </Link>
                          <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                             <Star size={12} className="fill-yellow-400 text-yellow-400" />
                             <span className="font-medium">{product.rating}</span> 
                             <span className="text-xs text-gray-300">| {product.reviews}</span>
                          </div>
                          <div className="text-sm font-bold text-slate-700 mt-1">
                            {product.price} <span className="text-xs font-normal text-gray-400">{product.period}</span>
                          </div>
                        </div>

                        {/* NUOVO BOTTONE CTA SOTTO IL NOME */}
                        <a 
                          href={product.link} 
                          target="_blank" 
                          rel="nofollow sponsored"
                          className={`w-full text-center py-2 px-3 rounded text-sm font-bold transition-all flex items-center justify-center gap-1 ${
                            product.recommended 
                            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-200' 
                            : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400'
                          }`}
                        >
                          Vedi Sito <ExternalLink size={12} />
                        </a>
                      </div>
                    </td>

                    {/* COLONNE FEATURES CON RIGHE VERTICALI */}
                    {mainFeatures.map(feat => (
                      <td key={feat.id} className="p-4 text-center align-middle">
                        <div className="flex justify-center">
                          {product.features[feat.id as keyof typeof product.features] ? (
                            <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                              <Check size={18} strokeWidth={3} />
                            </div>
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-gray-50 text-gray-300 flex items-center justify-center">
                              <X size={18} strokeWidth={2} />
                            </div>
                          )}
                        </div>
                      </td>
                    ))}

                    {/* COLONNA FINALE (Link alternativo o Recensione) */}
                    <td className="p-4 text-center align-middle bg-slate-50/50">
                       <Link 
                         href={`/software/${product.id}`}
                         className="text-xs font-medium text-blue-600 hover:underline"
                       >
                         Leggi<br/>Recensione
                       </Link>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-3 bg-blue-50 text-blue-800 text-xs text-center border-t border-blue-100 flex justify-center items-center gap-2">
            <Info size={14} />
            Scorri orizzontalmente la tabella per vedere tutte le caratteristiche.
          </div>
        </div>

      </main>

      {/* CROSS SELL - STILE "AMAZON NATIVE" (Simulato ma efficace) */}
      <section className="max-w-7xl mx-auto px-4 mt-8 mb-12">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
            <Tablet className="text-orange-500" /> Spesso comprati insieme ai software
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hardware.map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="nofollow sponsored" className="flex gap-4 group hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <div className="w-20 h-20 bg-gray-100 rounded-md flex items-center justify-center text-gray-300 border border-gray-200 shrink-0">
                        {/* Qui in futuro metterai l'immagine del prodotto */}
                        <Tablet size={32} />
                    </div>
                    <div>
                        <div className="text-sm text-blue-600 group-hover:underline line-clamp-2 mb-1">
                            {item.name}
                        </div>
                        <div className="text-xs text-gray-500 mb-2">{item.note}</div>
                        <div className="text-red-700 font-bold text-sm">
                            {item.price} <span className="text-gray-400 font-normal text-xs">Prime</span>
                        </div>
                    </div>
                </a>
            ))}
            </div>
        </div>
      </section>

    </div>
  );
}