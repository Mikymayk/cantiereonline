"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { 
  Search, Check, X, Star, ExternalLink, 
  Scale, Trash2, Info, LayoutList, Filter
} from 'lucide-react';
import { softwareData } from '@/data/software';

// --- CONFIGURAZIONE FILTRI ---
const FILTERS = [
  { id: 'computo_metrico', label: 'Computo Metrico', key: 'computo_metrico' },
  { id: 'free_trial', label: 'Prova Gratuita', key: 'free_trial' },
  { id: 'versione_gratuita', label: 'Versione Gratuita', key: 'special_free' }, // Logica custom
  { id: 'interfaccia_italiano', label: 'Piattaforma in Italiano', key: 'interfaccia_italiano' },
  { id: 'conformita_ita', label: 'Normativa Italia', key: 'conformita_ita' },
  { id: 'giornale_lavori', label: 'Giornale Lavori', key: 'giornale_lavori' },
  { id: 'pos_psc', label: 'Gestione POS/PSC', key: 'pos_psc' },
  { id: 'funziona_offline', label: 'Funziona Offline', key: 'funziona_offline' },
  { id: 'bim_viewer', label: 'BIM Viewer', key: 'bim_viewer' },
  { id: 'app_ios', label: 'App iOS', key: 'app_ios' },
  { id: 'app_android', label: 'App Android', key: 'app_android' },
];

export default function SoftwareList() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [showCompare, setShowCompare] = useState(false);

  // Stato Filtri (Sync con URL)
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // 1. Inizializzazione da URL
  useEffect(() => {
    const filtersFromUrl = searchParams.get('features');
    if (filtersFromUrl) {
      setActiveFilters(filtersFromUrl.split(','));
    } else {
      setActiveFilters([]);
    }
  }, [searchParams]);

  // 2. Funzione per aggiornare Filtri e URL
  const toggleFilter = (filterId: string) => {
    const newFilters = activeFilters.includes(filterId)
      ? activeFilters.filter(id => id !== filterId)
      : [...activeFilters, filterId];

    // Aggiorna URL
    const params = new URLSearchParams(searchParams.toString());
    if (newFilters.length > 0) {
      params.set('features', newFilters.join(','));
    } else {
      params.delete('features');
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });

    // Lo state locale verrà aggiornato dall'useEffect qui sopra, ma per reattività immediata in UI:
    setActiveFilters(newFilters);
  };

  // --- LOGICA FILTRAGGIO ---
  const filteredSoftware = softwareData.filter(software => {
    // A. Filtro Testuale
    const term = searchTerm.toLowerCase();
    const matchesText = 
      software.name.toLowerCase().includes(term) ||
      software.description.toLowerCase().includes(term);

    const matchesFeatureText = Object.entries(software.features).some(([key, value]) =>
      value === true && key.replace(/_/g, ' ').toLowerCase().includes(term)
    );

    const passesSearch = term === '' || matchesText || matchesFeatureText;

    // B. Filtro per Caratteristiche (AND logic: deve averle TUTTE quelle selezionate)
    const passesFilters = activeFilters.every(filterId => {
      const filterConfig = FILTERS.find(f => f.id === filterId);
      if (!filterConfig) return true;

      if (filterConfig.key === 'special_free') {
        return software.paymentType === '(Free)' || software.price === '€0';
      }

      // @ts-ignore - Accesso dinamico alle features
      return software.features[filterConfig.key] === true;
    });

    return passesSearch && passesFilters;
  });

  // Gestione Selezione Checkbox per confronto
  const toggleSelection = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(i => i !== id));
    } else {
      if (selectedIds.length < 3) {
        setSelectedIds([...selectedIds, id]);
      } else {
        alert("Puoi confrontare massimo 3 software alla volta.");
      }
    }
  };

  const comparisonData = softwareData.filter(s => selectedIds.includes(s.id));

  // Helper per renderizzare icone check/cross
  const StatusIcon = ({ active }: { active: boolean }) => (
    <div className={`flex items-center justify-center w-8 h-8 rounded-full mx-auto ${active ? 'bg-green-100 text-green-600' : 'bg-red-50 text-red-400'}`}>
      {active ? <Check size={18} strokeWidth={3} /> : <X size={18} strokeWidth={3} />}
    </div>
  );

  // Helper per Intestazione Colonna con Tooltip
  const HeaderWithTooltip = ({ label, tooltip, align = "center" }: { label: React.ReactNode, tooltip: string, align?: "center" | "right" }) => (
    <th className="px-2 py-3 text-center w-[12%] leading-tight border-r border-gray-200 relative group align-middle">
      <span className="block mt-1">{label}</span>
      <div className="absolute top-1 right-1 text-gray-300 hover:text-blue-500 cursor-help">
        <Info size={14} />
      </div>
      <div className={`
        absolute top-full mt-2 bg-slate-800 text-white text-xs font-normal p-2 rounded shadow-xl 
        opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 
        normal-case tracking-normal leading-snug
        ${align === "right" ? "right-0 w-36 md:w-48" : "left-1/2 -translate-x-1/2 w-40 md:w-48"}
      `}>
        {tooltip}
        <div className={`
          absolute bottom-full border-4 border-transparent border-b-slate-800
          ${align === "right" ? "right-2" : "left-1/2 -translate-x-1/2"}
        `}></div>
      </div>
    </th>
  );

  return (
    <>
      {/* --- BARRA DI RICERCA & FILTRI --- */}
      <section className="px-4 text-center w-full -mt-6 mb-8 relative z-10">
         <div className="max-w-4xl mx-auto">
            {/* Input Ricerca */}
            <div className="relative max-w-lg mx-auto mb-6">
              <input
                type="text"
                placeholder="Cerca software (es. PlanRadar, IOS, Offline...)"
                className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 shadow-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-lg transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>

            {/* FILTRI DESKTOP (Chips) */}
            <div className="hidden md:flex flex-wrap justify-center gap-2 animate-in fade-in slide-in-from-top-4">
              {FILTERS.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => toggleFilter(filter.id)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-semibold transition-all border
                    ${activeFilters.includes(filter.id)
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md transform scale-105'
                      : 'bg-white text-slate-600 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                    }
                  `}
                >
                  {filter.label}
                  {activeFilters.includes(filter.id) && <Check size={14} className="inline ml-1.5 -mt-0.5" strokeWidth={3}/>}
                </button>
              ))}
            </div>

            {/* FILTRI MOBILE (Bottone + Modale) */}
            <div className="md:hidden flex justify-center">
              <button
                onClick={() => setShowMobileFilters(true)}
                className={`
                  flex items-center gap-2 px-6 py-2 rounded-full font-bold shadow-sm transition-all border
                  ${activeFilters.length > 0
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-slate-700 border-gray-300'
                  }
                `}
              >
                <Filter size={18} />
                Filtra Funzionalità
                {activeFilters.length > 0 && (
                  <span className="bg-white text-blue-600 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {activeFilters.length}
                  </span>
                )}
              </button>
            </div>
          </div>
      </section>

      {/* --- MODALE FILTRI MOBILE --- */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl shadow-2xl max-h-[90vh] flex flex-col animate-in slide-in-from-bottom-10">

            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-lg text-slate-900">Filtra Software</h3>
              <button onClick={() => setShowMobileFilters(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <X size={20} className="text-slate-500"/>
              </button>
            </div>

            <div className="p-4 overflow-y-auto">
              <div className="grid grid-cols-1 gap-3">
                {FILTERS.map(filter => (
                  <label key={filter.id} className="flex items-center justify-between p-3 rounded-xl border border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 transition-all cursor-pointer">
                    <span className="font-medium text-slate-700">{filter.label}</span>
                    <input
                      type="checkbox"
                      checked={activeFilters.includes(filter.id)}
                      onChange={() => toggleFilter(filter.id)}
                      className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </label>
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-gray-100 bg-gray-50 rounded-b-2xl flex gap-3">
              <button
                onClick={() => {
                  setActiveFilters([]);
                  const params = new URLSearchParams(searchParams.toString());
                  params.delete('features');
                  router.replace(`${pathname}?${params.toString()}`, { scroll: false });
                }}
                className="flex-1 py-3 text-slate-600 font-bold hover:bg-gray-200 rounded-xl transition-colors"
              >
                Reset
              </button>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="flex-[2] py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
              >
                Vedi {filteredSoftware.length} Risultati
              </button>
            </div>

          </div>
        </div>
      )}

      {/* --- BARRA FLOTTANTE COMPARAZIONE --- */}
      {selectedIds.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl z-50 flex items-center gap-4 animate-in slide-in-from-bottom-4">
          <span className="font-bold text-sm">{selectedIds.length} Selezionati</span>
          <button 
            onClick={() => setShowCompare(true)}
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-full font-bold text-sm transition-colors flex items-center gap-2"
          >
            <Scale size={16}/> Confronta Ora
          </button>
          <button onClick={() => setSelectedIds([])} className="text-slate-400 hover:text-white">
            <X size={18}/>
          </button>
        </div>
      )}

      {/* --- TABELLA PRINCIPALE --- */}
      <div id="confronto" className="max-w-7xl mx-auto px-4 py-8">
        
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-xl text-slate-800 flex items-center gap-2">
            <LayoutList size={20} className="text-blue-600"/> 
            {filteredSoftware.length} Software Disponibili
          </h3>
          <span className="text-sm text-gray-500 hidden md:inline">Spunta "CF" per confrontare</span>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          
          {/* AVVISO MOBILE (SCROLL) */}
          <div className="md:hidden bg-blue-50 text-blue-800 text-xs font-bold py-2 px-4 flex items-center gap-2 border-b border-blue-100">
            👉 Scorri la tabella a destra per vedere tutti i dati
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-sm font-extrabold text-slate-800 uppercase tracking-wide border-b-2 border-gray-300 h-16">
                  <th className="px-4 text-center w-12 border-r border-gray-200">CF</th>
                  <th className="px-6 py-3 w-[40%] border-r border-gray-200 align-middle">SOFTWARE & DETTAGLI</th>
                  
                  {/* LE PRIME 3 COLONNE HANNO ALLINEAMENTO CENTRALE (DEFAULT) */}
                  <HeaderWithTooltip 
                    label={<>NORMATIVA<br/>ITALIA</>} 
                    tooltip="Rispetta Codice Appalti e D.Lgs 81/08." 
                  />
                  <HeaderWithTooltip 
                    label={<>GIORNALE<br/>LAVORI</>} 
                    tooltip="Compilazione digitale del Giornale dei Lavori." 
                  />
                  <HeaderWithTooltip 
                    label={<>GESTIONE<br/>POS</>} 
                    tooltip="Funzioni per redigere o gestire il POS." 
                  />
                  
                  {/* LE ULTIME 2 COLONNE HANNO ALLINEAMENTO DESTRO (align="right") 
                      Così il tooltip si apre verso sinistra e non esce dallo schermo */}
                  <HeaderWithTooltip 
                    label={<>COMPUTO<br/>METRICO</>} 
                    tooltip="Include strumenti per il computo metrico e la contabilità." 
                    align="right"
                  />
                  <HeaderWithTooltip 
                    label={<>PROVA<br/>GRATUITA</>} 
                    tooltip="Disponibile prova gratuita o piano Free." 
                    align="right"
                  />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredSoftware.map((sw) => (
                  <tr key={sw.id} className={`transition-colors even:bg-slate-50 ${selectedIds.includes(sw.id) ? '!bg-blue-100 border-l-4 border-blue-600' : ''}`}>
                    
                    {/* CHECKBOX */}
                    <td className="px-4 py-6 text-center align-top pt-8 border-r border-gray-200">
                      <input 
                        type="checkbox" 
                        className="w-5 h-5 rounded border-gray-400 text-blue-600 focus:ring-blue-500 cursor-pointer"
                        checked={selectedIds.includes(sw.id)}
                        onChange={() => toggleSelection(sw.id)}
                      />
                    </td>

                    {/* COLONNA PRINCIPALE */}
                    <td className="px-6 py-8 align-top border-r border-gray-200">
                      <div className="flex justify-between items-start mb-2">
                        <Link href={`/software/${sw.id}`} className="text-xl font-bold text-slate-900 hover:text-blue-600 hover:underline">
                          {sw.name}
                        </Link>
                        <div className="text-right">
                          <div className="text-xl font-bold text-slate-900">{sw.price}</div>
                          <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">
                            {sw.paymentType === '(Free)' ? '(Versione Free)' : sw.paymentType}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 mb-4">
                         <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={14} fill={i < Math.floor(sw.rating) ? "currentColor" : "none"} className={i < Math.floor(sw.rating) ? "" : "text-gray-300"} />
                            ))}
                         </div>
                         <span className="text-xs font-bold text-slate-700">{sw.rating}</span>
                      </div>

                      <p className="text-sm text-gray-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: sw.description }} />

                      <a 
                        href={sw.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-md font-bold text-sm transition-colors shadow-sm"
                      >
                        Vedi Sito <ExternalLink size={14} className="inline ml-1 mb-0.5"/>
                      </a>
                    </td>

                    {/* COLONNE FEATURE */}
                    <td className="align-middle text-center border-r border-gray-200"><StatusIcon active={sw.features.conformita_ita} /></td>
                    <td className="align-middle text-center border-r border-gray-200"><StatusIcon active={sw.features.giornale_lavori} /></td>
                    <td className="align-middle text-center border-r border-gray-200"><StatusIcon active={sw.features.pos_psc} /></td>
                    <td className="align-middle text-center border-r border-gray-200"><StatusIcon active={sw.features.computo_metrico} /></td>
                    <td className="align-middle text-center"><StatusIcon active={sw.features.free_trial} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredSoftware.length === 0 && (
            <div className="p-12 text-center text-gray-500">
              Nessun risultato per "{searchTerm}"
            </div>
          )}
        </div>
      </div>

      {/* --- MODALE CONFRONTO DETTAGLIATO (INVARIATO) --- */}
      {showCompare && (
        <div className="fixed inset-0 bg-white z-[100] overflow-y-auto animate-in fade-in duration-200">
          <div className="max-w-7xl mx-auto px-4 py-8">
            
            <div className="flex justify-between items-center mb-8 sticky top-0 bg-white/95 backdrop-blur py-4 border-b border-gray-100 z-10">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Scale className="text-blue-600"/> Confronto Dettagliato
              </h2>
              <button 
                onClick={() => setShowCompare(false)}
                className="bg-gray-100 hover:bg-gray-200 text-slate-700 px-4 py-2 rounded-lg font-bold flex items-center gap-2"
              >
                <X size={20}/> Chiudi
              </button>
            </div>

            <div className="grid grid-cols-[200px_repeat(3,1fr)] gap-0 border border-gray-200 rounded-xl overflow-hidden shadow-xl">
              
              <div className="bg-slate-50 p-4 border-b border-r border-gray-200 font-bold text-slate-500 flex items-end pb-2">
                Caratteristica
              </div>
              
              {comparisonData.map(sw => (
                <div key={sw.id} className="bg-slate-50 p-4 border-b border-r border-gray-200 text-center relative group">
                  <button onClick={() => toggleSelection(sw.id)} className="absolute top-2 right-2 text-gray-300 hover:text-red-500">
                    <Trash2 size={16}/>
                  </button>
                  
                  <Link href={`/software/${sw.id}`} className="font-extrabold text-lg text-slate-900 mb-1 hover:text-blue-600 hover:underline block">
                    {sw.name}
                  </Link>
                  
                  <div className="text-blue-600 font-bold mb-3">
                    {sw.price} <span className="text-xs text-gray-500 font-normal">{sw.paymentType === '(Free)' ? '(Versione Free)' : sw.paymentType}</span>
                  </div>

                  <a 
                    href={sw.website} 
                    target="_blank" 
                    className="block w-full bg-blue-600 text-white text-xs font-bold py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Vedi Sito
                  </a>
                </div>
              ))}
              
              {[...Array(3 - comparisonData.length)].map((_, i) => (
                <div key={i} className="bg-slate-50 border-b border-r border-gray-200 hidden md:block"></div>
              ))}

              {[
                { title: "HIGHLIGHTS", keys: ['giornale_lavori', 'pos_psc', 'computo_metrico', 'free_trial'] },
                { title: "AMMINISTRAZIONE", keys: ['conformita_ita', 'fatturazione_elettronica', 'firma_digitale', 'integrazione_sdi', 'export_contabilita'] },
                { title: "TECNICO & CAMPO", keys: ['funziona_offline', 'bim_viewer', 'foto_360', 'gps_staff', 'app_ios', 'app_android'] },
                { title: "COLLABORAZIONE", keys: ['chat_interna', 'notifiche_push', 'utenti_illimitati', 'inviti_esterni'] },
                { title: "SUPPORTO", keys: ['interfaccia_italiano', 'supporto_telefono', 'supporto_chat'] }
              ].map((category) => (
                <React.Fragment key={category.title}>
                  <div className="col-span-4 bg-gray-100 p-2 text-xs font-bold text-gray-500 uppercase tracking-widest pl-4 border-b border-gray-200">
                    {category.title}
                  </div>
                  
                  {category.keys.map((key) => (
                    <React.Fragment key={key}>
                      <div className="p-3 border-b border-r border-gray-100 text-sm font-medium text-slate-700 flex items-center bg-white">
                        {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </div>
                      {comparisonData.map(sw => (
                        <div key={`${sw.id}-${key}`} className="p-3 border-b border-r border-gray-100 text-center flex items-center justify-center bg-white">
                          {/* @ts-ignore */}
                          {sw.features[key] ? (
                            <Check size={20} className="text-green-500" />
                          ) : (
                            <X size={20} className="text-red-300 opacity-50" />
                          )}
                        </div>
                      ))}
                      {[...Array(3 - comparisonData.length)].map((_, i) => (
                        <div key={i} className="bg-white border-b border-r border-gray-100 hidden md:block"></div>
                      ))}
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}