'use client';

import React, { useState } from 'react';
import { Check, X, Star, Info, Tablet, ExternalLink, ArrowRight, Trash2, BarChart3, HardHat } from 'lucide-react';
import Link from 'next/link';

// --- CONFIGURAZIONE FEATURES ---
// Colonne della tabella principale
const mainFeatures = [
  { id: 'giornale', label: 'Giornale Lavori', tooltip: 'Compilazione digitale del giornale dei lavori (Obbligatorio)' },
  { id: 'pos_psc', label: 'Gestione POS', tooltip: 'Redazione Piani Operativi di Sicurezza e PSC' },
  { id: 'computo', label: 'Computo Metrico', tooltip: 'Creazione ed export computi metrici estimativi' },
  { id: 'free_trial', label: 'Prova Gratuita', tooltip: 'Possibilità di testare il software senza pagare' },
];

// Righe della tabella "Confronto Approfondito" (Deep Compare)
const deepFeaturesList = [
  { category: 'Normativa', label: 'Conformità Legge Italia', id: 'ita_law' },
  { category: 'Tecnico', label: 'Funziona Offline', id: 'offline' },
  { category: 'Tecnico', label: 'Visualizzatore BIM', id: 'bim' },
  { category: 'Tecnico', label: 'Chat di Cantiere', id: 'chat' },
  { category: 'Export', label: 'Report PDF/Excel', id: 'export' },
  { category: 'Licenza', label: 'Cloud Storage', id: 'storage' },
  { category: 'Supporto', label: 'Assistenza Italiana', id: 'support' },
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
    features: { 
      giornale: true, 
      pos_psc: false, 
      computo: false, 
      free_trial: true 
    },
    deepFeatures: {
      ita_law: true,
      offline: true,
      bim: true,
      chat: false,
      export: true,
      storage: 'Illimitato',
      support: true
    }
  },
  {
    id: 'fieldwire',
    name: 'Fieldwire',
    price: '€0',
    period: '(Versione Free)',
    rating: 4.6,
    reviews: 'Molto Buono',
    link: 'https://www.fieldwire.com/?ref=cantiereonline',
    features: { 
      giornale: true, 
      pos_psc: false, 
      computo: false, 
      free_trial: true 
    },
    deepFeatures: {
      ita_law: true,
      offline: true,
      bim: true,
      chat: false,
      export: true,
      storage: 'Limitato',
      support: false
    }
  },
  {
    id: 'melaworks',
    name: 'Mela Works',
    price: '€15',
    period: '/mese',
    rating: 4.5,
    reviews: 'Ottimo',
    link: 'https://www.mela.work/?ref=cantiereonline',
    features: { 
      giornale: true, 
      pos_psc: true, 
      computo: false, 
      free_trial: true 
    },
    deepFeatures: {
      ita_law: true,
      offline: true,
      bim: false,
      chat: true,
      export: true,
      storage: '25GB',
      support: true
    }
  },
  // ESEMPIO DI UN SOFTWARE COMPLETO
  {
    id: 'acca_primus',
    name: 'Primus Online',
    price: '€39',
    period: '/mese',
    rating: 4.7,
    reviews: 'Leader Computo',
    link: 'https://www.acca.it/?ref=cantiereonline', 
    features: { 
      giornale: true, 
      pos_psc: true, 
      computo: true, 
      free_trial: false // Spesso a pagamento o demo limitata
    },
    deepFeatures: {
      ita_law: true,
      offline: false,
      bim: true,
      chat: false,
      export: true,
      storage: 'Cloud',
      support: true
    }
  }
];

// HARDWARE AMAZON
const hardware = [
  { name: 'Apple iPad Pro 11"', note: 'Il top per visualizzare planimetrie e BIM', price: '€969', link: 'https://www.amazon.it/dp/B0D3X6K1Q2?tag=cantiereonline-21' },
  { name: 'Samsung Galaxy Tab Active', note: 'Tablet Rugged indistruttibile per cantiere', price: '€450', link: 'https://www.amazon.it/dp/B0CP2S6Y2L?tag=cantiereonline-21' },
  { name: 'Leica Disto X3', note: 'Distanziometro Laser professionale Bluetooth', price: '€310', link: 'https://www.amazon.it/dp/B07B9Q6L3Z?tag=cantiereonline-21' },
];

export default function Home() {
  // GESTIONE STATO SELEZIONE
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [showDeepCompare, setShowDeepCompare] = useState(false);

  const toggleSelection = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(item => item !== id));
    } else {
      if (selectedIds.length < 3) {
        setSelectedIds([...selectedIds, id]);
      } else {
        alert("Puoi confrontare massimo 3 software alla volta.");
      }
    }
  };

  const selectedProducts = products.filter(p => selectedIds.includes(p.id));

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
        
        {!showDeepCompare ? (
          /* --- VISTA TABELLA CLASSICA --- */
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[1000px] divide-x divide-gray-100">
                
                <thead>
                  <tr className="bg-slate-50 border-b border-gray-200 text-xs font-bold text-gray-600 uppercase tracking-wider divide-x divide-gray-200">
                    <th className="p-4 text-center w-12 bg-slate-100">CF</th>
                    <th className="p-4 w-[250px] bg-slate-100/50">Software & Prezzo</th>
                    
                    {mainFeatures.map(feat => (
                      <th key={feat.id} className="p-4 text-center w-[130px] relative">
                        <div className="group flex flex-col items-center justify-center gap-1 cursor-help z-10">
                          <span className="text-center">{feat.label}</span>
                          <Info size={14} className="text-gray-400" />
                          <div className="absolute top-full mt-2 hidden group-hover:block w-40 bg-slate-800 text-white text-[10px] normal-case p-2 rounded z-50 text-center shadow-lg mx-auto left-0 right-0">
                            {feat.tooltip}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-slate-800"></div>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {products.map((product, index) => (
                    <tr key={product.id} className={`hover:bg-blue-50/20 transition-colors divide-x divide-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                      
{/* COLONNA 1: NOME + PREZZO + CTA */}
<td className="p-4 align-top bg-white">
  <div className="flex flex-col h-full justify-between gap-4">
    
    {/* HEADER: NOME A SINISTRA, PREZZO A DESTRA */}
    <div className="flex justify-between items-start gap-2">
      
      {/* Sinistra: Nome e Voto */}
      <div>
        <Link href={`/software/${product.id}`} className="font-bold text-lg text-slate-900 hover:text-blue-600 hover:underline decoration-2 underline-offset-4 block leading-tight">
          {product.name}
        </Link>
        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1.5">
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-slate-700">{product.rating}</span> 
            <span className="text-gray-300">|</span> 
            <span className="truncate">{product.reviews}</span>
        </div>
      </div>

      {/* Destra: Prezzo (Allineato a destra) */}
      <div className="text-right shrink-0">
        <div className="font-bold text-xl text-slate-900 leading-none">{product.price}</div>
        <div className="text-[10px] text-gray-500 uppercase font-medium mt-1">{product.period}</div>
      </div>

    </div>

    {/* BOTTONE BLU */}
    <a 
      href={product.link} 
      target="_blank" 
      rel="nofollow sponsored"
      className="w-full text-center py-2.5 px-3 rounded-lg text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-1.5"
    >
      Vedi Sito <ExternalLink size={13} />
    </a>

  </div>
</td>

                      {/* COLONNE FEATURES */}
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

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-3 bg-blue-50 text-blue-800 text-xs text-center border-t border-blue-100 flex justify-center items-center gap-2">
              <Info size={14} />
              Spunta le caselle a sinistra (massimo 3) e clicca su "Confronta Selezionati".
            </div>
          </div>
        ) : (
          /* --- VISTA DEEP COMPARE (MATRICE) --- */
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <BarChart3 className="text-blue-600" /> Analisi Tecnica
              </h2>
              <button 
                onClick={() => setShowDeepCompare(false)}
                className="text-sm font-medium text-slate-500 hover:text-slate-900 flex items-center gap-1 bg-white border border-gray-300 px-3 py-1.5 rounded-lg shadow-sm"
              >
                <X size={16} /> Chiudi Confronto
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-slate-50 border-b border-gray-200">
                      <th className="p-4 w-1/3 text-gray-500 font-medium uppercase text-xs tracking-wider">Caratteristica</th>
                      {selectedProducts.map(p => (
                        <th key={p.id} className="p-4 w-1/4 text-center border-l border-gray-200 bg-white">
                          <Link href={`/software/${p.id}`} className="block font-bold text-lg text-slate-900 hover:text-blue-600 hover:underline mb-1">
                            {p.name}
                          </Link>
                          <div className="text-blue-600 font-bold text-sm mb-2">{p.price}</div>
                          <a href={p.link} target="_blank" className="inline-block bg-slate-900 text-white text-xs px-4 py-2 rounded hover:bg-slate-700 transition-colors">
                            Vai al sito
                          </a>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {deepFeaturesList.map((feat, i) => (
                      <tr key={feat.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="p-4 border-r border-gray-100">
                           <span className="block font-bold text-slate-700">{feat.label}</span>
                           <span className="text-xs text-gray-400 uppercase tracking-wider">{feat.category}</span>
                        </td>
                        {selectedProducts.map(p => {
                          const val = p.deepFeatures[feat.id as keyof typeof p.deepFeatures];
                          return (
                            <td key={p.id} className="p-4 text-center border-l border-gray-100 align-middle">
                              {val === true ? (
                                <div className="flex justify-center"><Check className="text-green-500" /></div>
                              ) : val === false ? (
                                <div className="flex justify-center"><X className="text-gray-300" /></div>
                              ) : (
                                <span className="font-medium text-slate-800 text-sm">{val}</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* FLOATING ACTION BAR (Per il confronto) */}
      {selectedIds.length > 0 && !showDeepCompare && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-6 z-50 animate-in slide-in-from-bottom-10 border border-slate-700">
          <div className="text-sm font-medium">
            <span className="font-bold text-orange-400">{selectedIds.length}</span> selezionati
          </div>
          <div className="flex items-center gap-2">
             <button 
               onClick={() => setSelectedIds([])}
               className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
               title="Deseleziona tutto"
             >
               <Trash2 size={16} />
             </button>
             <button 
               onClick={() => setShowDeepCompare(true)}
               className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 transition-transform active:scale-95 shadow-lg shadow-blue-900/50"
             >
               Confronta ora <ArrowRight size={16} />
             </button>
          </div>
        </div>
      )}

      {/* CROSS SELL HARDWARE */}
      <section className="max-w-7xl mx-auto px-4 mt-8 mb-12">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
            <Tablet className="text-orange-500" /> Spesso comprati insieme ai software
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hardware.map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="nofollow sponsored" className="flex gap-4 group hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <div className="w-20 h-20 bg-gray-100 rounded-md flex items-center justify-center text-gray-300 border border-gray-200 shrink-0">
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