"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { 
  Search, Check, X, Star, ExternalLink, 
  Scale, Trash2, Info, LayoutList, Filter
} from 'lucide-react';

// Interfaces
interface FilterConfig {
  id: string;
  label: string;
  key: string;
}

interface ColumnConfig {
  key: string;
  label: React.ReactNode;
  tooltip: string;
}

interface FeatureGroup {
  title: string;
  keys: string[];
}

interface SoftwareListProps {
  data: any[];
  filters: FilterConfig[];
  columns: ColumnConfig[];
  comparisonGroups: FeatureGroup[]; // New prop for detailed comparison
  locale?: string;
}

export default function SoftwareList({ data, filters, columns, comparisonGroups, locale = 'it' }: SoftwareListProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [showCompare, setShowCompare] = useState(false);

  // State Filters (Sync with URL)
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Initialize from URL
  useEffect(() => {
    const filtersFromUrl = searchParams.get('features');
    if (filtersFromUrl) {
      setActiveFilters(filtersFromUrl.split(','));
    } else {
      setActiveFilters([]);
    }
  }, [searchParams]);

  // Toggle Filter Function
  const toggleFilter = (filterId: string) => {
    const newFilters = activeFilters.includes(filterId)
      ? activeFilters.filter(id => id !== filterId)
      : [...activeFilters, filterId];

    const params = new URLSearchParams(searchParams.toString());
    if (newFilters.length > 0) {
      params.set('features', newFilters.join(','));
    } else {
      params.delete('features');
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    setActiveFilters(newFilters);
  };

  // Filter Logic
  const filteredSoftware = data.filter(software => {
    // Text Search
    const term = searchTerm.toLowerCase();
    const matchesText = 
      software.name.toLowerCase().includes(term) ||
      software.description.toLowerCase().includes(term);

    const matchesFeatureText = Object.entries(software.features).some(([key, value]) =>
      value === true && key.replace(/_/g, ' ').toLowerCase().includes(term)
    );

    const passesSearch = term === '' || matchesText || matchesFeatureText;

    // Feature Filters (AND logic)
    const passesFilters = activeFilters.every(filterId => {
      const filterConfig = filters.find(f => f.id === filterId);
      if (!filterConfig) return true;

      if (filterConfig.key === 'special_free') {
        return software.paymentType?.includes('Free') || software.paymentType?.includes('Gratis') || software.paymentType?.includes('Kostenlos') || software.price === '€0' || software.price === '0 kr';
      }

      // @ts-ignore
      return software.features[filterConfig.key] === true;
    });

    return passesSearch && passesFilters;
  });

  const toggleSelection = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(i => i !== id));
    } else {
      if (selectedIds.length < 3) {
        setSelectedIds([...selectedIds, id]);
      } else {
        alert("Max 3 software selection.");
      }
    }
  };

  const comparisonData = data.filter(s => selectedIds.includes(s.id));

  const StatusIcon = ({ active }: { active: boolean }) => (
    <div className={`flex items-center justify-center w-8 h-8 rounded-full mx-auto ${active ? 'bg-green-100 text-green-600' : 'bg-red-50 text-red-400'}`}>
      {active ? <Check size={18} strokeWidth={3} /> : <X size={18} strokeWidth={3} />}
    </div>
  );

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

  // Translations
  const t = {
    searchPlaceholder: { it: "Cerca software...", de: "Software suchen...", ch: "Software suchen...", se: "Sök programvara...", no: "Søk etter programvare..." },
    filter: { it: "Filtra Funzionalità", de: "Funktionen filtern", ch: "Funktionen filtern", se: "Filtrera funktioner", no: "Filtrer funksjoner" },
    reset: { it: "Reset", de: "Zurücksetzen", ch: "Zurücksetzen", se: "Återställ", no: "Nullstill" },
    results: { it: "Risultati", de: "Ergebnisse", ch: "Ergebnisse", se: "Resultat", no: "Resultater" },
    selected: { it: "Selezionati", de: "Ausgewählt", ch: "Ausgewählt", se: "Valda", no: "Valgt" },
    compare: { it: "Confronta Ora", de: "Jetzt vergleichen", ch: "Jetzt vergleichen", se: "Jämför nu", no: "Sammenlign nå" },
    available: { it: "Software Disponibili", de: "Verfügbare Software", ch: "Verfügbare Software", se: "Tillgänglig programvara", no: "Tilgjengelig programvare" },
    visit: { it: "Vedi Sito", de: "Zur Webseite", ch: "Zur Webseite", se: "Besök webbplats", no: "Besøk nettside" },
    mobileHint: { it: "👉 Scorri la tabella a destra per vedere tutti i dati", de: "👉 Tabelle nach rechts scrollen für mehr Details", ch: "👉 Tabelle nach rechts scrollen für mehr Details", se: "👉 Skrolla tabellen till höger för mer info", no: "👉 Bla tabellen til høyre for mer info" },
    compareTitle: { it: "Confronto Dettagliato", de: "Detaillierter Vergleich", ch: "Detaillierter Vergleich", se: "Detaljerad jämförelse", no: "Detaljert sammenligning" },
    close: { it: "Chiudi", de: "Schließen", ch: "Schließen", se: "Stäng", no: "Lukk" },
    feature: { it: "Caratteristica", de: "Funktion", ch: "Funktion", se: "Funktion", no: "Funksjon" }
  };

  // @ts-ignore
  const getTxt = (key: keyof typeof t) => t[key][locale] || t[key]['it'];

  return (
    <>
      {/* Search & Filter Bar */}
      <section className="px-4 text-center w-full -mt-6 mb-8 relative z-10">
         <div className="max-w-4xl mx-auto">
            <div className="relative max-w-lg mx-auto mb-6">
              <input
                type="text"
                placeholder={getTxt('searchPlaceholder')}
                className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 shadow-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-lg transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>

            <div className="hidden md:flex flex-wrap justify-center gap-2 animate-in fade-in slide-in-from-top-4">
              {filters.map(filter => (
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
                {getTxt('filter')}
                {activeFilters.length > 0 && (
                  <span className="bg-white text-blue-600 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {activeFilters.length}
                  </span>
                )}
              </button>
            </div>
          </div>
      </section>

      {/* Mobile Filter Modal */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl shadow-2xl max-h-[90vh] flex flex-col animate-in slide-in-from-bottom-10">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-lg text-slate-900">{getTxt('filter')}</h3>
              <button onClick={() => setShowMobileFilters(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <X size={20} className="text-slate-500"/>
              </button>
            </div>

            <div className="p-4 overflow-y-auto">
              <div className="grid grid-cols-1 gap-3">
                {filters.map(filter => (
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
                {getTxt('reset')}
              </button>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="flex-[2] py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
              >
                {getTxt('results')} ({filteredSoftware.length})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Comparison Floating Action */}
      {selectedIds.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl z-50 flex items-center gap-4 animate-in slide-in-from-bottom-4">
          <span className="font-bold text-sm">{selectedIds.length} {getTxt('selected')}</span>
          <button 
            onClick={() => setShowCompare(true)}
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-full font-bold text-sm transition-colors flex items-center gap-2"
          >
            <Scale size={16}/> {getTxt('compare')}
          </button>
          <button onClick={() => setSelectedIds([])} className="text-slate-400 hover:text-white">
            <X size={18}/>
          </button>
        </div>
      )}

      {/* Main Table */}
      <div id="confronto" className="max-w-7xl mx-auto px-4 py-8">
        
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-xl text-slate-800 flex items-center gap-2">
            <LayoutList size={20} className="text-blue-600"/> 
            {filteredSoftware.length} {getTxt('available')}
          </h3>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          
          <div className="md:hidden bg-blue-50 text-blue-800 text-xs font-bold py-2 px-4 flex items-center gap-2 border-b border-blue-100">
            {getTxt('mobileHint')}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-sm font-extrabold text-slate-800 uppercase tracking-wide border-b-2 border-gray-300 h-16">
                  <th className="px-4 text-center w-12 border-r border-gray-200">#</th>
                  <th className="px-6 py-3 w-[40%] border-r border-gray-200 align-middle">SOFTWARE</th>
                  
                  {columns.map((col, index) => (
                    <HeaderWithTooltip
                      key={col.key}
                      label={col.label}
                      tooltip={col.tooltip}
                      align={index >= columns.length - 2 ? "right" : "center"}
                    />
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredSoftware.map((sw) => (
                  <tr key={sw.id} className={`transition-colors even:bg-slate-50 ${selectedIds.includes(sw.id) ? '!bg-blue-100 border-l-4 border-blue-600' : ''}`}>
                    
                    <td className="px-4 py-6 text-center align-top pt-8 border-r border-gray-200">
                      <input 
                        type="checkbox" 
                        className="w-5 h-5 rounded border-gray-400 text-blue-600 focus:ring-blue-500 cursor-pointer"
                        checked={selectedIds.includes(sw.id)}
                        onChange={() => toggleSelection(sw.id)}
                      />
                    </td>

                    <td className="px-6 py-8 align-top border-r border-gray-200">
                      <div className="flex justify-between items-start mb-2">
                        <Link href={`/${locale === 'it' ? '' : locale + '/'}software/${sw.id}`} className="text-xl font-bold text-slate-900 hover:text-blue-600 hover:underline">
                          {sw.name}
                        </Link>
                        <div className="text-right">
                          <div className="text-xl font-bold text-slate-900">{sw.price}</div>
                          <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">
                            {sw.paymentType}
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
                        {getTxt('visit')} <ExternalLink size={14} className="inline ml-1 mb-0.5"/>
                      </a>
                    </td>

                    {columns.map((col) => (
                      <td key={col.key} className="align-middle text-center border-r border-gray-200">
                        {/* @ts-ignore */}
                        <StatusIcon active={sw.features[col.key]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredSoftware.length === 0 && (
             <div className="p-12 text-center text-gray-500">
               Nessun risultato
             </div>
          )}
        </div>
      </div>

      {/* Comparison Modal */}
      {showCompare && (
        <div className="fixed inset-0 bg-white z-[100] overflow-y-auto animate-in fade-in duration-200">
          <div className="max-w-7xl mx-auto px-4 py-8">
            
            <div className="flex justify-between items-center mb-8 sticky top-0 bg-white/95 backdrop-blur py-4 border-b border-gray-100 z-10">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Scale className="text-blue-600"/> {getTxt('compareTitle')}
              </h2>
              <button 
                onClick={() => setShowCompare(false)}
                className="bg-gray-100 hover:bg-gray-200 text-slate-700 px-4 py-2 rounded-lg font-bold flex items-center gap-2"
              >
                <X size={20}/> {getTxt('close')}
              </button>
            </div>

            <div className="grid grid-cols-[200px_repeat(3,1fr)] gap-0 border border-gray-200 rounded-xl overflow-hidden shadow-xl">
              
              <div className="bg-slate-50 p-4 border-b border-r border-gray-200 font-bold text-slate-500 flex items-end pb-2">
                {getTxt('feature')}
              </div>
              
              {comparisonData.map(sw => (
                <div key={sw.id} className="bg-slate-50 p-4 border-b border-r border-gray-200 text-center relative group">
                  <button onClick={() => toggleSelection(sw.id)} className="absolute top-2 right-2 text-gray-300 hover:text-red-500">
                    <Trash2 size={16}/>
                  </button>
                  <Link href={`/${locale === 'it' ? '' : locale + '/'}software/${sw.id}`} className="font-extrabold text-lg text-slate-900 mb-1 hover:text-blue-600 hover:underline block">
                    {sw.name}
                  </Link>
                  <div className="text-blue-600 font-bold mb-3">
                    {sw.price} <span className="text-xs text-gray-500 font-normal">{sw.paymentType}</span>
                  </div>
                  <a 
                    href={sw.website} 
                    target="_blank" 
                    className="block w-full bg-blue-600 text-white text-xs font-bold py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    {getTxt('visit')}
                  </a>
                </div>
              ))}
              
              {[...Array(3 - comparisonData.length)].map((_, i) => (
                <div key={i} className="bg-slate-50 border-b border-r border-gray-200 hidden md:block"></div>
              ))}

              {comparisonGroups.map((category) => (
                <React.Fragment key={category.title}>
                  <div className="col-span-4 bg-gray-100 p-2 text-xs font-bold text-gray-500 uppercase tracking-widest pl-4 border-b border-gray-200">
                    {category.title}
                  </div>

                  {category.keys.map((key) => (
                    <React.Fragment key={key}>
                      <div className="p-3 border-b border-r border-gray-100 text-sm font-medium text-slate-700 flex items-center bg-white pl-4">
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
