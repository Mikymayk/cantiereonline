'use client';

import React, { useState } from 'react';
import { Check, X, Star, Info, ChevronRight, Tablet, ExternalLink, ArrowRight, Trash2, BarChart3 } from 'lucide-react';
import Link from 'next/link'; // <--- ECCO L'IMPORT CHE MANCAVA!

// --- DATI ---

// 1. Caratteristiche Generali (Tabella Semplice)
const mainFeatures = [
  { id: 'ita_law', label: 'Conformità Italia', tooltip: 'Rispetta normative lavori pubblici/privati e GDPR' },
  { id: 'offline', label: 'Offline Mode', tooltip: 'Funziona in cantiere senza connessione internet' },
  { id: 'free_trial', label: 'Prova Gratuita', tooltip: 'Possibilità di testare senza pagare subito' },
];

// 2. Caratteristiche Approfondite (Tabella Confronto Avanzato)
const deepFeaturesList = [
  { category: 'Normativa', label: 'Giornale dei Lavori', id: 'giornale' },
  { category: 'Normativa', label: 'Gestione POS/PSC', id: 'pos_psc' },
  { category: 'Tecnico', label: 'Visualizzatore BIM (IFC)', id: 'bim' },
  { category: 'Tecnico', label: 'Export PDF/Excel', id: 'export' },
  { category: 'Tecnico', label: 'Chat di Cantiere', id: 'chat' },
  { category: 'Licenza', label: 'Cloud Storage', id: 'storage' },
  { category: 'Supporto', label: 'Assistenza Italiana', id: 'support' },
];

// 3. I Software (Database Completo)
const products = [
  {
    id: 'planradar',
    name: 'PlanRadar',
    price: '€26',
    period: '/mese',
    rating: 4.8,
    reviews: 'Eccellente',
    cta: 'Prova Gratis',
    link: 'https://www.planradar.com/it/?ref=cantiereonline', 
    recommended: true, 
    features: { ita_law: true, offline: true, free_trial: true },
    deepFeatures: {
      giornale: true,
      pos_psc: false, 
      bim: true,
      export: true,
      chat: false,
      storage: 'Illimitato',
      support: true,
    }
  },
  {
    id: 'fieldwire',
    name: 'Fieldwire',
    price: '€0',
    period: '(Versione Free)',
    rating: 4.6,
    reviews: 'Molto Buono',
    cta: 'Vedi Sito',
    link: 'https://www.fieldwire.com/?ref=cantiereonline',
    recommended: false,
    features: { ita_law: true, offline: true, free_trial: true },
    deepFeatures: {
      giornale: true,
      pos_psc: false,
      bim: true,
      export: true,
      chat: false,
      storage: 'Limitato',
      support: false,
    }
  },
  {
    id: 'melaworks',
    name: 'Mela Works',
    price: '€15',
    period: '/mese',
    rating: 4.5,
    reviews: 'Ottimo',
    cta: 'Vedi Offerta',
    link: 'https://www.mela.work/?ref=cantiereonline',
    recommended: false,
    features: { ita_law: true, offline: true, free_trial: true },
    deepFeatures: {
      giornale: true,
      pos_psc: true, 
      bim: false,
      export: true,
      chat: true,
      storage: '25GB',
      support: true,
    }
  }
];

const hardware = [
  { name: 'iPad Pro 11"', note: 'Perfetto per planimetrie', price: '€900+', link: '#' },
  { name: 'Cover Rugged', note: 'Anti-urto e polvere', price: '€35', link: '#' },
  { name: 'Metro Laser', note: 'Connessione Bluetooth', price: '€120', link: '#' },
];

export default function Home() {
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
      <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight text-blue-900">
            CantiereOnline<span className="text-orange-500">.it</span>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-white pb-8 pt-12 px-4 text-center border-b border-gray-100">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Il Comparatore Tecnico per l'Edilizia
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Seleziona i software che ti interessano e confrontali nel dettaglio.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        
        {/* VISTA NORMALE */}
        {!showDeepCompare ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <th className="p-4 w-12 text-center">CF</th>
                    <th className="p-4 w-1/4">Software</th>
                    {mainFeatures.map(feat => (
                      <th key={feat.id} className="p-4 text-center w-[120px]">
                        <div className="group relative flex items-center justify-center gap-1 cursor-help">
                          {feat.label}
                          <Info size={14} className="text-gray-400" />
                          <div className="absolute bottom-full mb-2 hidden group-hover:block w-48 bg-slate-800 text-white text-[10px] normal-case p-2 rounded z-50 text-center shadow-lg">
                            {feat.tooltip}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                          </div>
                        </div>
                      </th>
                    ))}
                    <th className="p-4 text-center">Prezzo</th>
                    <th className="p-4 text-center">Azione</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {products.map((product, index) => (
                    <tr key={product.id} className={`hover:bg-blue-50/20 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                      
                      <td className="p-4 text-center">
                        <input 
                          type="checkbox" 
                          checked={selectedIds.includes(product.id)}
                          onChange={() => toggleSelection(product.id)}
                          className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                        />
                      </td>

                      {/* NOME DEL SOFTWARE (CLICCABILE) */}
                      <td className="p-4">
                        <div className="flex flex-col">
                          <Link href={`/software/${product.id}`} className="font-bold text-lg text-slate-900 hover:text-blue-600 hover:underline decoration-2 underline-offset-4">
                            {product.name}
                          </Link>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                             <Star size={12} className="fill-yellow-400 text-yellow-400" />
                             {product.rating} <span className="text-xs">({product.reviews})</span>
                          </div>
                        </div>
                      </td>

                      {mainFeatures.map(feat => (
                        <td key={feat.id} className="p-4 text-center">
                          <div className="flex justify-center">
                            {product.features[feat.id as keyof typeof product.features] ? (
                              <div className="flex items-center gap-1 text-green-700 font-medium text-sm bg-green-50 px-2 py-1 rounded-full border border-green-100">
                                <Check size={14} strokeWidth={3} /> Sì
                              </div>
                            ) : (
                              <div className="flex items-center gap-1 text-gray-400 font-medium text-sm bg-gray-100 px-2 py-1 rounded-full">
                                <X size={14} /> No
                              </div>
                            )}
                          </div>
                        </td>
                      ))}

                      <td className="p-4 text-center">
                        <div className="font-bold text-slate-900">{product.price}</div>
                        <div className="text-xs text-gray-500">{product.period}</div>
                      </td>

                      <td className="p-4 text-center">
                        <a href={product.link} target="_blank" rel="nofollow sponsored" className="text-blue-600 hover:text-blue-800 font-bold text-sm flex items-center justify-center gap-1">
                          Sito <ExternalLink size={14} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-4 bg-blue-50 text-blue-800 text-xs text-center border-t border-blue-100">
              <Info size={14} className="inline mr-1 relative -top-0.5" />
              Spunta le caselle a sinistra (massimo 3) e clicca su "Confronta Selezionati" per l'analisi tecnica completa.
            </div>
          </div>

        ) : (
          
          /* VISTA DETTAGLIATA */
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

      {/* FLOATING ACTION BAR */}
      {selectedIds.length > 0 && !showDeepCompare && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-6 z-50 animate-in slide-in-from-bottom-10">
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
               className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 transition-transform active:scale-95"
             >
               Confronta ora <ArrowRight size={16} />
             </button>
          </div>
        </div>
      )}

      {/* CROSS SELL */}
      <section className="max-w-6xl mx-auto px-4 mt-12 mb-12">
        <h3 className="font-bold text-xl text-slate-900 mb-6 flex items-center gap-2">
          <Tablet className="text-slate-400" /> Dotazione Hardware Consigliata
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
           {hardware.map((item, i) => (
              <a key={i} href={item.link} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all group">
                <div>
                  <div className="font-bold text-slate-800 group-hover:text-blue-600">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.price} • Amazon.it</div>
                </div>
                <ExternalLink size={16} className="text-gray-300 group-hover:text-blue-500" />
              </a>
           ))}
        </div>
      </section>

      {/* FOOTER CON DISCLAIMER */}
      <footer className="bg-white border-t border-gray-200 py-12 mt-auto">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="font-bold text-xl text-slate-900 mb-4">
                CantiereOnline<span className="text-orange-500">.it</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Il punto di riferimento per la digitalizzazione dei cantieri in Italia. 
                Confrontiamo in modo indipendente le migliori soluzioni software e hardware.
              </p>
            </div>
            <div className="text-sm text-gray-500">
              <h4 className="font-bold text-slate-900 mb-2">Disclaimer Importante</h4>
              <p className="leading-relaxed text-xs">
                CantiereOnline.it è un portale informativo indipendente. Pur impegnandoci a mantenere i dati aggiornati, 
                le caratteristiche e i prezzi dei software possono variare senza preavviso da parte dei produttori. 
                Le comparazioni si basano su dati pubblici o forniti dai vendor al momento dell'analisi. 
                Questo sito partecipa a programmi di affiliazione (incluso Amazon Services LLC) e potrebbe ricevere una commissione 
                sugli acquisti idonei, senza costi aggiuntivi per l'utente.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>&copy; 2025 CantiereOnline.it - Un progetto ClusterClups SRL</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-600">Privacy Policy</a>
              <a href="#" className="hover:text-gray-600">Cookie Policy</a>
              <a href="#" className="hover:text-gray-600">Termini di Servizio</a>
            </div>
          </div>
          
        </div>
      </footer>

    </div>
  );
}