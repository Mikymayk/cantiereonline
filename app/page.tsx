'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Check, X, Star, ExternalLink, ArrowRight, Trash2, BarChart3, HardHat, ChevronRight, Info, Tablet } from 'lucide-react';
import Link from 'next/link';
import { softwareData } from '../data/software';

// --- CONFIGURAZIONE VISUALIZZAZIONE ---

const mainColumns = [
  { id: 'giornale_lavori', label: 'Giornale Lavori', tooltip: 'Compilazione digitale del giornale dei lavori' },
  { id: 'pos_psc', label: 'Gestione POS', tooltip: 'Redazione Piani Operativi di Sicurezza e PSC' },
  { id: 'computo_metrico', label: 'Computo Metrico', tooltip: 'Creazione ed export computi metrici estimativi' },
  { id: 'free_trial', label: 'Prova Gratuita', tooltip: 'Possibilità di testare il software senza pagare' },
];

const deepFeaturesConfig = [
  // --- HIGHLIGHTS ---
  { id: 'giornale_lavori', label: 'Giornale Lavori', category: 'Principale' },
  { id: 'pos_psc', label: 'Gestione POS / PSC', category: 'Principale' },
  { id: 'computo_metrico', label: 'Computo Metrico', category: 'Principale' },
  { id: 'free_trial', label: 'Prova Gratuita', category: 'Principale' },

  // --- AMMINISTRAZIONE ---
  { id: 'conformita_ita', label: 'Conformità Legge Italia', category: 'Normativa & Amministrazione' },
  { id: 'fatturazione_elettronica', label: 'Fatturazione Elettronica', category: 'Normativa & Amministrazione' },
  { id: 'firma_digitale', label: 'Firma Digitale', category: 'Normativa & Amministrazione' },
  { id: 'export_contabilita', label: 'Export Contabilità (XPWE)', category: 'Normativa & Amministrazione' },

  // --- TECNICO ---
  { id: 'funziona_offline', label: 'Funziona Offline', category: 'Funzionalità Tecniche' },
  { id: 'bim_viewer', label: 'Visualizzatore BIM (IFC)', category: 'Funzionalità Tecniche' },
  { id: 'foto_360', label: 'Foto a 360°', category: 'Funzionalità Tecniche' },
  { id: 'app_ios', label: 'App iOS Nativa', category: 'Funzionalità Tecniche' },
  { id: 'app_android', label: 'App Android Nativa', category: 'Funzionalità Tecniche' },

  // --- COLLABORAZIONE ---
  { id: 'chat_interna', label: 'Chat di Cantiere', category: 'Collaborazione' },
  { id: 'inviti_esterni', label: 'Accesso Committente', category: 'Collaborazione' },
  { id: 'notifiche_push', label: 'Notifiche Push', category: 'Collaborazione' },
  
  // --- SUPPORTO ---
  { id: 'interfaccia_italiano', label: 'Interfaccia in Italiano', category: 'Supporto & Assistenza' },
  { id: 'supporto_italiano', label: 'Operatori Italiani', category: 'Supporto & Assistenza' },
  { id: 'supporto_telefono', label: 'Assistenza Telefonica', category: 'Supporto & Assistenza' },
  { id: 'supporto_chat', label: 'Assistenza via Chat', category: 'Supporto & Assistenza' },
];

const categories = Array.from(new Set(deepFeaturesConfig.map(f => f.category)));

const hardware = [
  { name: 'Apple iPad Pro 11"', note: 'Il top per visualizzare planimetrie e BIM', price: '€969', link: 'https://www.amazon.it/dp/B0D3X6K1Q2?tag=cantiereonline-21' },
  { name: 'Samsung Galaxy Tab Active', note: 'Tablet Rugged indistruttibile per cantiere', price: '€450', link: 'https://www.amazon.it/dp/B0CP2S6Y2L?tag=cantiereonline-21' },
  { name: 'Leica Disto X3', note: 'Distanziometro Laser professionale Bluetooth', price: '€310', link: 'https://www.amazon.it/dp/B07B9Q6L3Z?tag=cantiereonline-21' },
];

export default function Home() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [showDeepCompare, setShowDeepCompare] = useState(false);
  
  // STATO PER HEADER OVERLAY
  const [showFloatingHeader, setShowFloatingHeader] = useState(false);
  const deepTableRef = useRef<HTMLDivElement>(null);

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

  const selectedProducts = softwareData.filter(p => selectedIds.includes(p.id));

  // Helper formattazione testo
  const formatPeriod = (text: string) => {
    if (text.toLowerCase().includes('free')) return 'Versione Free';
    return text;
  };

  // LOGICA SCROLL PER ATTIVARE L'OVERLAY
  useEffect(() => {
    const handleScroll = () => {
      if (!deepTableRef.current || !showDeepCompare) {
        setShowFloatingHeader(false);
        return;
      }

      // Calcola posizione della tabella rispetto allo schermo
      const rect = deepTableRef.current.getBoundingClientRect();
      const headerOffset = 150; // Pixel di margine dall'alto prima di far apparire l'overlay

      // Se la parte alta della tabella è uscita dallo schermo (top < headerOffset)
      // E la parte bassa è ancora visibile (bottom > headerOffset)
      if (rect.top < headerOffset && rect.bottom > headerOffset) {
        setShowFloatingHeader(true);
      } else {
        setShowFloatingHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showDeepCompare]);

  return (
    <div className="flex flex-col min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-gray-50 font-sans text-slate-900">
      
      {/* HEADER SITO */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm w-full h-[72px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight text-blue-900 flex items-center gap-2">
            <HardHat className="text-orange-500" />
            CantiereOnline<span className="text-orange-500">.it</span>
          </div>
        </div>
      </header>

      {/* --- HEADER OVERLAY (FLOTTANTE) --- */}
      {/* Appare solo quando showFloatingHeader è true */}
      {showFloatingHeader && showDeepCompare && (
        <div className="fixed top-[72px] left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-200 animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-0 md:px-4">
             {/* Usa Flexbox invece di Table per allinearsi perfettamente alle colonne width-25% */}
             <div className="flex w-full">
                {/* Colonna Vuota (Caratteristica) */}
                <div className="w-1/4 p-3 border-r border-transparent flex items-center text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Confronto Attivo
                </div>
                
                {/* Colonne Prodotti */}
                {selectedProducts.map(p => (
                  <div key={p.id} className="w-1/4 p-2 text-center border-l border-gray-100 flex flex-col justify-center items-center gap-1">
                    <div className="font-bold text-sm text-slate-900 leading-none">{p.name}</div>
                    
                    <div className="flex items-baseline justify-center gap-1 flex-wrap">
                      <span className="text-blue-600 font-bold text-sm">{p.price}</span>
                      <span className="text-[9px] text-gray-500 uppercase font-medium">{formatPeriod(p.paymentType)}</span>
                    </div>

                    <a href={p.website} target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold px-3 py-1.5 rounded transition-colors w-full max-w-[100px]">
                      Vedi Sito
                    </a>
                  </div>
                ))}
             </div>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      {!showDeepCompare && (
        <section className="bg-white pb-10 pt-12 px-4 text-center border-b border-gray-100 w-full">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight max-w-4xl mx-auto leading-tight">
            Scegli il miglior software gestionale <br className="hidden md:block"/> per edilizia e cantieri
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Confronto indipendente aggiornato al 2025 su funzionalità, normativa POS/PSC e prezzi.
          </p>
        </section>
      )}

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-0 md:px-4 py-8 flex-grow w-full">
        
        {!showDeepCompare ? (
          /* --- VISTA TABELLA CLASSICA --- */
          <div className="bg-white md:rounded-xl shadow-sm border-y md:border border-gray-200 overflow-hidden relative">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[1000px] divide-x divide-gray-100">
                <thead>
                  <tr className="bg-slate-50 border-b border-gray-200 text-xs font-bold text-gray-600 uppercase tracking-wider divide-x divide-gray-200">
                    <th className="p-4 text-center w-12 bg-slate-100 sticky left-0 z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">CF</th>
                    <th className="p-4 w-[280px] bg-slate-100/50">Software & Prezzo</th>
                    {mainColumns.map(col => (
                      <th key={col.id} className="p-4 text-center w-[130px] relative">
                        <div className="group flex flex-col items-center justify-center gap-1 cursor-help z-10">
                          <span className="text-center">{col.label}</span>
                          <Info size={14} className="text-gray-400" />
                          <div className="absolute top-full mt-2 hidden group-hover:block w-40 bg-slate-800 text-white text-[10px] normal-case p-2 rounded z-50 text-center shadow-lg mx-auto left-0 right-0">
                            {col.tooltip}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-slate-800"></div>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  <tr className="md:hidden bg-blue-50/80 border-b border-blue-100">
                    <td className="sticky left-0 bg-blue-50/80 z-20 border-r border-blue-200"></td>
                    <td colSpan={5} className="p-2 text-xs text-blue-700 font-bold text-left animate-pulse pl-4">
                       👉 Scorri la tabella verso destra
                    </td>
                  </tr>

                  {softwareData.map((product, index) => (
                    <tr key={product.id} className={`hover:bg-blue-50/20 transition-colors divide-x divide-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                      <td className="p-4 text-center bg-slate-50/30 sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                        <input 
                          type="checkbox" 
                          checked={selectedIds.includes(product.id)}
                          onChange={() => toggleSelection(product.id)}
                          className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                        />
                      </td>

                      <td className="p-4 align-top bg-white">
                        <div className="flex flex-col h-full justify-between gap-4">
                          <div className="flex justify-between items-start gap-2">
                            <div>
                              <Link href={`/software/${product.id}`} className="font-bold text-lg text-slate-900 hover:text-blue-600 hover:underline decoration-2 underline-offset-4 block leading-tight">
                                {product.name}
                              </Link>
                              <div className="flex items-center gap-1 text-xs text-gray-500 mt-1.5">
                                  <Star size={12} className="fill-yellow-400 text-yellow-400" />
                                  <span className="font-medium text-slate-700">{product.rating}</span> 
                              </div>
                            </div>
                            <div className="text-right shrink-0">
                              <div className="font-bold text-xl text-slate-900 leading-none">{product.price}</div>
                              <div className="text-[10px] text-gray-500 uppercase font-medium mt-1">
                                {formatPeriod(product.paymentType)}
                              </div>
                            </div>
                          </div>
                          <a 
                            href={product.website} 
                            target="_blank" 
                            rel="nofollow sponsored"
                            className="w-full text-center py-2.5 px-3 rounded-lg text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-1.5"
                          >
                            Vedi Sito <ExternalLink size={13} />
                          </a>
                        </div>
                      </td>

                      {mainColumns.map(col => (
                        <td key={col.id} className="p-4 text-center align-middle">
                          <div className="flex justify-center">
                            {product.features[col.id as keyof typeof product.features] ? (
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
          </div>
        ) : (
          /* --- VISTA DEEP COMPARE --- */
          <div ref={deepTableRef} className="animate-in fade-in slide-in-from-bottom-4 duration-300 px-2 pb-20">
            <div className="flex justify-between items-center mb-4 pt-4">
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

            <div className="bg-white rounded-xl shadow-lg border border-gray-200"> 
              <div className="overflow-x-auto w-full rounded-xl">
                
                <table className="w-full text-left border-collapse min-w-[600px] table-fixed">
                  
                  {/* HEADER STATICO (Originale, non sticky) - ALTEZZA RIDOTTA */}
                  <thead>
                    <tr className="border-b border-gray-200 bg-white">
                      
                      <th className="p-3 text-gray-500 font-medium uppercase text-xs tracking-wider w-1/4 align-bottom bg-white">
                        Caratteristica
                      </th>

                      {selectedProducts.map(p => (
                        <th key={p.id} className="p-3 text-center border-l border-gray-200 bg-white w-1/4 align-top">
                          <div className="flex flex-col h-full justify-between gap-2">
                            <div>
                                <span className="block font-bold text-lg text-slate-900 leading-tight mb-1">{p.name}</span>
                                
                                {/* PREZZO + PERIODO IN RIGA */}
                                <div className="flex items-baseline justify-center gap-1 flex-wrap">
                                  <span className="text-blue-600 font-bold text-lg">{p.price}</span>
                                  <span className="text-[10px] text-gray-500 uppercase font-medium whitespace-nowrap">
                                    {formatPeriod(p.paymentType)}
                                  </span>
                                </div>
                            </div>
                            
                            <a 
                                href={p.website} 
                                target="_blank" 
                                className="block w-full text-center py-2 px-2 rounded-md text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                            >
                                Vedi Sito
                            </a>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100">
                    {categories.map((cat) => {
                       const featuresInCat = deepFeaturesConfig.filter(f => f.category === cat);
                       
                       return (
                         <React.Fragment key={cat}>
                           <tr className="bg-slate-100 border-y border-gray-200">
                             <td colSpan={selectedProducts.length + 1} className="p-3 text-xs font-bold text-slate-500 uppercase tracking-widest pl-4">
                               {cat}
                             </td>
                           </tr>

                           {featuresInCat.map(feat => (
                             <tr key={feat.id} className="bg-white hover:bg-slate-50 transition-colors">
                               <td className="p-4 border-r border-gray-100 font-medium text-slate-700 text-sm">
                                  {feat.label}
                               </td>
                               {selectedProducts.map(p => {
                                 const val = p.features[feat.id as keyof typeof p.features];
                                 return (
                                   <td key={p.id} className="p-4 text-center border-l border-gray-100 align-middle">
                                     {val === true ? (
                                       <div className="flex justify-center"><Check className="text-green-500" size={20} /></div>
                                     ) : val === false ? (
                                       <div className="flex justify-center"><X className="text-gray-300" size={20} /></div>
                                     ) : (
                                       <span className="font-medium text-slate-400 text-sm">-</span>
                                     )}
                                   </td>
                                 );
                               })}
                             </tr>
                           ))}
                         </React.Fragment>
                       );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* FLOATING ACTION BAR */}
      {selectedIds.length > 0 && !showDeepCompare && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-6 z-40 animate-in slide-in-from-bottom-10 border border-slate-700 w-[90%] md:w-auto justify-center">
          <div className="text-sm font-medium whitespace-nowrap">
            <span className="font-bold text-orange-400">{selectedIds.length}</span> scelti
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
               className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 transition-transform active:scale-95 shadow-lg shadow-blue-900/50 whitespace-nowrap"
             >
               Confronta <ArrowRight size={16} />
             </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 text-sm py-12 border-t border-slate-800 mt-auto relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="font-bold text-white text-lg mb-4 flex items-center gap-2">
                <HardHat className="text-orange-500" /> CantiereOnline.it
              </div>
              <p className="mb-4 text-xs leading-relaxed max-w-md">
                Il punto di riferimento per i professionisti dell'edilizia. Confrontiamo in modo indipendente i migliori software per la gestione cantieri.
              </p>
              <div className="text-xs text-slate-500">
                <p><strong>ClusterClups SRL</strong></p>
                <p>P.IVA 10923621212</p>
              </div>
            </div>
            
            <div className="md:text-right">
              <h4 className="font-bold text-white mb-4">Note Legali</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors underline decoration-slate-700 underline-offset-4">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-xs text-center text-slate-600">
            <p className="mb-2">
              Disclaimer: Le informazioni e i prezzi riportati in tabella sono frutto di ricerche web e analisi indipendenti. 
              I dati potrebbero non essere aggiornati in tempo reale rispetto ai listini ufficiali delle software house, che fanno unicamente fede.
            </p>
            <p>&copy; {new Date().getFullYear()} ClusterClups SRL. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}