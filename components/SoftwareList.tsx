"use client"; // Questo gestisce l'interattività (Search)

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Check, Star, ExternalLink, ArrowRight, ChevronRight } from 'lucide-react';
import { softwareData } from '@/data/software';

export default function SoftwareList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSoftware = softwareData.filter(software => 
    software.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    software.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    software.pros.some(p => p.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      {/* BARRA DI RICERCA (Spostata qui dentro) */}
      <section className="px-4 text-center w-full -mt-6 mb-12 relative z-10">
         <div className="max-w-lg mx-auto relative">
            <input 
              type="text" 
              placeholder="Cerca per nome (es. PlanRadar) o funzione (es. POS)" 
              className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 shadow-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-lg transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
      </section>

      {/* LISTA SOFTWARE */}
      <div id="confronto" className="max-w-6xl mx-auto px-4 py-8">
          
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-xl text-slate-800">
            {filteredSoftware.length} Software Analizzati
          </h3>
        </div>

        <div className="grid gap-8">
          {filteredSoftware.map((sw) => (
            <div key={sw.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden relative group">
              
              {/* Badge Top Rated */}
              {sw.rating >= 4.7 && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-xl z-10">
                  TOP SCELTA
                </div>
              )}

              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
                
                {/* COLONNA 1: Info */}
                <div className="md:w-1/4 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-6">
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{sw.name}</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} fill={i < Math.floor(sw.rating) ? "currentColor" : "none"} className={i < Math.floor(sw.rating) ? "" : "text-gray-300"} />
                          ))}
                      </div>
                      <span className="text-sm font-bold text-slate-600">{sw.rating}</span>
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">{sw.price}</div>
                    <div className="text-sm text-gray-500 mb-4">{sw.paymentType}</div>
                  </div>
                  
                  <div className="flex flex-col gap-3 mt-auto">
                    <Link href={`/software/${sw.id}`} className="w-full bg-blue-50 text-blue-700 hover:bg-blue-100 py-3 rounded-lg font-bold text-center transition-colors flex items-center justify-center gap-2">
                      Scheda Completa <ArrowRight size={16}/>
                    </Link>
                    <a href={sw.website} target="_blank" rel="noopener noreferrer" className="w-full border border-gray-200 text-gray-600 hover:bg-gray-50 py-3 rounded-lg font-bold text-center transition-colors flex items-center justify-center gap-2 text-sm">
                      Sito Ufficiale <ExternalLink size={14}/>
                    </a>
                  </div>
                </div>

                {/* COLONNA 2: Dettagli */}
                <div className="md:w-3/4 flex flex-col justify-between">
                  <div className="mb-6">
                      <p className="text-slate-600 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: sw.description }}></p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                        <Check size={16} className="text-green-500"/> I Punti di Forza
                      </h4>
                      <ul className="space-y-2">
                        {sw.pros.slice(0, 3).map((pro, idx) => (
                          <li key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                            <span className="text-green-500 font-bold mt-0.5">✓</span> {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-gray-200">
                      <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wide mb-3">Funzioni Chiave</h4>
                      <div className="flex flex-wrap gap-2">
                        {sw.features.giornale_lavori && <span className="bg-white border border-gray-200 px-2 py-1 rounded text-xs font-medium text-slate-600">Giornale Lavori</span>}
                        {sw.features.pos_psc && <span className="bg-white border border-gray-200 px-2 py-1 rounded text-xs font-medium text-slate-600">Sicurezza POS</span>}
                        {sw.features.computo_metrico && <span className="bg-white border border-gray-200 px-2 py-1 rounded text-xs font-medium text-slate-600">Computo</span>}
                        {sw.features.bim_viewer && <span className="bg-white border border-gray-200 px-2 py-1 rounded text-xs font-medium text-slate-600">BIM Viewer</span>}
                        {sw.features.funziona_offline && <span className="bg-white border border-gray-200 px-2 py-1 rounded text-xs font-medium text-slate-600">Offline</span>}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 md:hidden">
                      <Link href={`/software/${sw.id}`} className="text-blue-600 font-bold text-sm flex items-center gap-1">
                        Leggi recensione completa <ChevronRight size={16} />
                      </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}

          {filteredSoftware.length === 0 && (
              <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                <p className="text-xl text-gray-500 mb-2">Nessun software trovato per "{searchTerm}"</p>
                <button onClick={() => setSearchTerm('')} className="text-blue-600 font-bold underline">Resetta filtri</button>
              </div>
          )}
        </div>
      </div>
    </>
  );
}