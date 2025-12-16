"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, Check, X, Star, ExternalLink, 
  LayoutList, Scale, Trash2, ArrowRight
} from 'lucide-react';
import { softwareData } from '@/data/software';

export default function SoftwareList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [showCompare, setShowCompare] = useState(false);

  // Filtra i software in base alla ricerca
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

  // Dati per il Modale di Confronto
  const comparisonData = softwareData.filter(s => selectedIds.includes(s.id));

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

      {/* --- BARRA FLOTTANTE (Appare se selezioni checkbox) --- */}
      {selectedIds.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl z-50 flex items-center gap-4 animate-in slide-in-from-bottom-4">
          <span className="font-bold text-sm">{selectedIds.length} Selezionati</span>
          <button 
            onClick={() => setShowCompare(true)}
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-full font-bold text-sm transition-colors flex items-center gap-2"
          >
            <Scale size={16}/> Confronta
          </button>
          <button onClick={() => setSelectedIds([])} className="text-slate-400 hover:text-white">
            <X size={18}/>
          </button>
        </div>
      )}

      {/* --- TABELLA COMPARATIVA --- */}
      <div id="confronto" className="max-w-7xl mx-auto px-4 py-8">
        
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-xl text-slate-800 flex items-center gap-2">
            <LayoutList size={20} className="text-blue-600"/> 
            {filteredSoftware.length} Software Disponibili
          </h3>
          <span className="text-sm text-gray-500 hidden md:inline">Spunta le caselle per confrontare</span>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200">
                  <th className="p-4 w-12 text-center">Cfr.</th>
                  <th className="p-4">Software</th>
                  <th className="p-4 w-32">Prezzo</th>
                  {/* Colonne Funzionalità Rapide */}
                  <th className="p-4 w-24 text-center hidden md:table-cell">Giornale</th>
                  <th className="p-4 w-24 text-center hidden md:table-cell">POS/PSC</th>
                  <th className="p-4 w-24 text-center hidden md:table-cell">Computo</th>
                  <th className="p-4 w-40 text-right">Sito Web</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredSoftware.map((sw) => (
                  <tr key={sw.id} className={`hover:bg-blue-50/30 transition-colors ${selectedIds.includes(sw.id) ? 'bg-blue-50' : ''}`}>
                    
                    {/* Checkbox Confronto */}
                    <td className="p-4 text-center">
                      <input 
                        type="checkbox" 
                        className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                        checked={selectedIds.includes(sw.id)}
                        onChange={() => toggleSelection(sw.id)}
                      />
                    </td>

                    {/* Nome Software (LINK INTERNO) */}
                    <td className="p-4">
                      <div className="flex flex-col">
                        <Link href={`/software/${sw.id}`} className="font-bold text-slate-900 text-lg hover:text-blue-600 hover:underline decoration-2 underline-offset-2 transition-all">
                          {sw.name}
                        </Link>
                        <div className="flex items-center gap-1 text-yellow-500 text-xs mt-1">
                          <Star size={12} fill="currentColor"/> 
                          <span className="font-bold">{sw.rating}</span> 
                          <span className="text-gray-400 font-normal">({sw.reviews})</span>
                        </div>
                      </div>
                    </td>

                    {/* Prezzo */}
                    <td className="p-4">
                      <div className="font-bold text-slate-700">{sw.price}</div>
                      <div className="text-xs text-gray-400">{sw.paymentType}</div>
                    </td>
                    
                    {/* Icone Funzionalità */}
                    <td className="p-4 text-center hidden md:table-cell">
                      {sw.features.giornale_lavori ? <Check size={20} className="mx-auto text-green-500"/> : <span className="text-gray-300">•</span>}
                    </td>
                    <td className="p-4 text-center hidden md:table-cell">
                      {sw.features.pos_psc ? <Check size={20} className="mx-auto text-green-500"/> : <span className="text-gray-300">•</span>}
                    </td>
                    <td className="p-4 text-center hidden md:table-cell">
                      {sw.features.computo_metrico ? <Check size={20} className="mx-auto text-green-500"/> : <span className="text-gray-300">•</span>}
                    </td>

                    {/* Pulsante Sito Esterno (UNICO PULSANTE) */}
                    <td className="p-4 text-right">
                      <a 
                        href={sw.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-md transition-all"
                      >
                        Vedi Sito <ExternalLink size={14}/>
                      </a>
                    </td>
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

      {/* --- MODALE CONFRONTO COMPLETO --- */}
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
                  <Link href={`/software/${sw.id}`} className="font-extrabold text-lg text-slate-900 mb-1 hover:text-blue-600 hover:underline block">
                    {sw.name}
                  </Link>
                  <div className="text-blue-600 font-bold">{sw.price}</div>
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