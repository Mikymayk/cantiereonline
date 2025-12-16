"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, Check, X, Star, ExternalLink, 
  Scale, Trash2, Info, LayoutList
} from 'lucide-react';
import { softwareData } from '@/data/software';

export default function SoftwareList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [showCompare, setShowCompare] = useState(false);

  // Filtra i software
  const filteredSoftware = softwareData.filter(software => 
    software.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    software.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Gestione Selezione Checkbox
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

  // Helper per renderizzare icone check/cross stile tabella
  const StatusIcon = ({ active }: { active: boolean }) => (
    <div className={`flex items-center justify-center w-8 h-8 rounded-full mx-auto ${active ? 'bg-green-100 text-green-600' : 'bg-red-50 text-red-400'}`}>
      {active ? <Check size={18} strokeWidth={3} /> : <X size={18} strokeWidth={3} />}
    </div>
  );

  return (
    <>
      {/* --- BARRA DI RICERCA --- */}
      <section className="px-4 text-center w-full -mt-6 mb-8 relative z-10">
         <div className="max-w-lg mx-auto relative">
            <input 
              type="text" 
              placeholder="Cerca software (es. PlanRadar, POS, Computo...)" 
              className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 shadow-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-lg transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
      </section>

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

      {/* --- TABELLA PRINCIPALE (STILE SCREENSHOT) --- */}
      <div id="confronto" className="max-w-7xl mx-auto px-4 py-8">
        
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-xl text-slate-800 flex items-center gap-2">
            <LayoutList size={20} className="text-blue-600"/> 
            {filteredSoftware.length} Software Disponibili
          </h3>
          <span className="text-sm text-gray-500 hidden md:inline">Spunta "CF" per confrontare</span>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200 h-14">
                <th className="px-4 text-center w-12">CF</th>
                <th className="px-6 py-3 w-[40%]">SOFTWARE & DETTAGLI</th>
                <th className="px-2 py-3 text-center w-[12%] leading-tight">NORMATIVA<br/>ITALIA <Info size={12} className="inline text-gray-400 ml-1"/></th>
                <th className="px-2 py-3 text-center w-[12%] leading-tight">GIORNALE<br/>LAVORI <Info size={12} className="inline text-gray-400 ml-1"/></th>
                <th className="px-2 py-3 text-center w-[12%] leading-tight">GESTIONE<br/>POS <Info size={12} className="inline text-gray-400 ml-1"/></th>
                <th className="px-2 py-3 text-center w-[12%] leading-tight">COMPUTO<br/>METRICO <Info size={12} className="inline text-gray-400 ml-1"/></th>
                <th className="px-2 py-3 text-center w-[12%] leading-tight">PROVA<br/>GRATUITA <Info size={12} className="inline text-gray-400 ml-1"/></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredSoftware.map((sw) => (
                <tr key={sw.id} className={`hover:bg-blue-50/20 transition-colors ${selectedIds.includes(sw.id) ? 'bg-blue-50' : ''}`}>
                  
                  {/* CHECKBOX */}
                  <td className="px-4 py-6 text-center align-top pt-8">
                    <input 
                      type="checkbox" 
                      className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                      checked={selectedIds.includes(sw.id)}
                      onChange={() => toggleSelection(sw.id)}
                    />
                  </td>

                  {/* COLONNA PRINCIPALE (Nome, Prezzo, Descrizione, Bottone) */}
                  <td className="px-6 py-8 align-top">
                    <div className="flex justify-between items-start mb-2">
                      <Link href={`/software/${sw.id}`} className="text-xl font-bold text-slate-900 hover:text-blue-600 hover:underline">
                        {sw.name}
                      </Link>
                      <div className="text-right">
                        <div className="text-xl font-bold text-slate-900">{sw.price}</div>
                        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">{sw.paymentType}</div>
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

                    {/* DESCRIZIONE (Ripristinata) */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-3" dangerouslySetInnerHTML={{ __html: sw.description }} />

                    {/* BOTTONE BLU GRANDE */}
                    <a 
                      href={sw.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-md font-bold text-sm transition-colors shadow-sm"
                    >
                      Vedi Sito <ExternalLink size={14} className="inline ml-1 mb-0.5"/>
                    </a>
                  </td>

                  {/* COLONNE FEATURE (Icone Centrate) */}
                  <td className="align-middle text-center border-l border-gray-50"><StatusIcon active={sw.features.conformita_ita} /></td>
                  <td className="align-middle text-center border-l border-gray-50"><StatusIcon active={sw.features.giornale_lavori} /></td>
                  <td className="align-middle text-center border-l border-gray-50"><StatusIcon active={sw.features.pos_psc} /></td>
                  <td className="align-middle text-center border-l border-gray-50"><StatusIcon active={sw.features.computo_metrico} /></td>
                  <td className="align-middle text-center border-l border-gray-50"><StatusIcon active={sw.features.free_trial} /></td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredSoftware.length === 0 && (
            <div className="p-12 text-center text-gray-500">
              Nessun risultato per "{searchTerm}"
            </div>
          )}
        </div>
      </div>

      {/* --- MODALE CONFRONTO DETTAGLIATO (Fix Richiesti) --- */}
      {showCompare && (
        <div className="fixed inset-0 bg-white z-[100] overflow-y-auto animate-in fade-in duration-200">
          <div className="max-w-7xl mx-auto px-4 py-8">
            
            {/* Header Modale */}
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

            {/* Matrice Confronto */}
            <div className="grid grid-cols-[200px_repeat(3,1fr)] gap-0 border border-gray-200 rounded-xl overflow-hidden shadow-xl">
              
              {/* Riga Intestazione */}
              <div className="bg-slate-50 p-4 border-b border-r border-gray-200 font-bold text-slate-500 flex items-end pb-2">
                Caratteristica
              </div>
              
              {comparisonData.map(sw => (
                <div key={sw.id} className="bg-slate-50 p-4 border-b border-r border-gray-200 text-center relative group">
                  <button onClick={() => toggleSelection(sw.id)} className="absolute top-2 right-2 text-gray-300 hover:text-red-500">
                    <Trash2 size={16}/>
                  </button>
                  
                  {/* Nome Software */}
                  <Link href={`/software/${sw.id}`} className="font-extrabold text-lg text-slate-900 mb-1 hover:text-blue-600 hover:underline block">
                    {sw.name}
                  </Link>
                  
                  {/* Prezzo + Periodo (FIX: Aggiunto paymentType) */}
                  <div className="text-blue-600 font-bold mb-3">
                    {sw.price} <span className="text-xs text-gray-500 font-normal">{sw.paymentType}</span>
                  </div>

                  {/* Bottone Sito (FIX: Aggiunto bottone blu) */}
                  <a 
                    href={sw.website} 
                    target="_blank" 
                    className="block w-full bg-blue-600 text-white text-xs font-bold py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Vedi Sito
                  </a>
                </div>
              ))}
              
              {/* Filler colonne vuote */}
              {[...Array(3 - comparisonData.length)].map((_, i) => (
                <div key={i} className="bg-slate-50 border-b border-r border-gray-200 hidden md:block"></div>
              ))}

              {/* Generazione Righe per Categoria */}
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