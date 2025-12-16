"use client"; // <--- QUESTA RIGA È FONDAMENTALE

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, Check, X, Star, ExternalLink, HardHat, 
  Menu, ArrowRight, Calendar, BookOpen, ChevronRight 
} from 'lucide-react';
import { softwareData } from '@/data/software';
import { getSortedPostsData } from '@/lib/posts';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  // --- LOGICA BLOG ---
  // In un Client Component, a volte leggere file system direttamente può dare noia in build.
  // Ma in Next.js spesso funziona se i dati sono importati staticamente.
  // Se dovesse darti errore su 'fs', useremo una soluzione diversa.
  const allPosts = getSortedPostsData ? getSortedPostsData() : [];
  const recentPosts = allPosts.slice(0, 2);

  // --- LOGICA FILTRO SOFTWARE ---
  const filteredSoftware = softwareData.filter(software => 
    software.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    software.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    software.pros.some(p => p.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* --- HEADER --- */}
      <header className="border-b border-gray-100 p-4 sticky top-0 bg-white/95 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tight text-blue-900 flex items-center gap-2">
            <HardHat className="text-orange-500" /> CantiereOnline.it
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog & Guide</Link>
            <Link href="#confronto" className="hover:text-blue-600 transition-colors">Confronto Software</Link>
          </nav>

          <Link href="/blog" className="md:hidden p-2 text-slate-600">
             <Menu size={24} />
          </Link>
        </div>
      </header>

      <main>
        {/* --- HERO SECTION AGGIORNATA --- */}
        <section className="bg-white pb-10 pt-16 px-4 text-center border-b border-gray-100 w-full">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
            Scegli il miglior software gestionale <br className="hidden md:block"/> per edilizia e cantieri
          </h1>
          
          <h2 className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Nel 2025, gestire un cantiere con carta e penna è un rischio. In questa guida confrontiamo i migliori software per l'edilizia in base a tre criteri: <strong className="text-slate-800 font-semibold">conformità alla legge italiana</strong>, <strong className="text-slate-800 font-semibold">facilità d'uso in mobilità</strong> e <strong className="text-slate-800 font-semibold">integrazione BIM</strong>.
          </h2>

          {/* BARRA DI RICERCA */}
          <div className="max-w-lg mx-auto relative mb-6">
            <input 
              type="text" 
              placeholder="Cerca per nome (es. PlanRadar) o funzione (es. POS)" 
              className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-lg transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </section>

        {/* --- LISTA SOFTWARE (GRID) --- */}
        <div id="confronto" className="max-w-6xl mx-auto px-4 py-12">
          
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-xl text-slate-800">
              {filteredSoftware.length} Software Analizzati
            </h3>
          </div>

          <div className="grid gap-8">
            {filteredSoftware.map((sw) => (
              <div key={sw.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden relative group">
                
                {/* Badge Top Rated se rating > 4.7 */}
                {sw.rating >= 4.7 && (
                  <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-xl z-10">
                    TOP SCELTA
                  </div>
                )}

                <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
                  
                  {/* COLONNA 1: Info Principali */}
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

                  {/* COLONNA 2: Descrizione e Pro/Contro */}
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
                        {/* FEATURE HIGHLIGHTS */}
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

                    {/* Link Mobile (visibile solo su schermi piccoli in basso) */}
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

        {/* --- SEZIONE BLOG PREVIEW --- */}
        <section className="bg-slate-50 py-16 border-t border-gray-200 mt-12">
          <div className="max-w-6xl mx-auto px-4">
            
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
                  Guide e Approfondimenti
                </h2>
                <p className="text-slate-600 max-w-xl text-lg">
                  Strategie, normative e consigli pratici per digitalizzare la tua impresa edile senza errori.
                </p>
              </div>
              <Link href="/blog" className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors bg-white px-4 py-2 rounded-full border border-blue-100 shadow-sm">
                Vedi tutti gli articoli <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {recentPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col md:flex-row h-full">
                  {/* Immagine */}
                  <div className="md:w-2/5 h-48 md:h-auto bg-gray-200 relative overflow-hidden">
                     <img 
                       src={post.coverImage} 
                       alt={post.title} 
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                  </div>
                  
                  {/* Contenuto */}
                  <div className="p-6 md:w-3/5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-3 font-medium uppercase tracking-wider">
                        <BookOpen size={12} className="text-blue-500"/> Blog
                        <span>•</span>
                        <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-500 text-sm line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                    </div>
                    <span className="text-blue-600 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                      Leggi tutto <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
              
              {/* Fallback se non ci sono post */}
              {recentPosts.length === 0 && (
                 <div className="col-span-2 text-center text-gray-400 py-10 bg-white rounded-2xl border border-dashed">
                   Presto in arrivo nuove guide...
                 </div>
              )}
            </div>

            {/* Link Mobile */}
            <div className="mt-8 text-center md:hidden">
              <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800">
                Vedi tutti gli articoli <ArrowRight size={18} />
              </Link>
            </div>

          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
               <div className="text-white font-bold text-xl flex items-center justify-center md:justify-start gap-2 mb-2">
                 <HardHat className="text-orange-500"/> CantiereOnline.it
               </div>
               <p className="text-sm">Il punto di riferimento per il software edile in Italia.</p>
            </div>
            <div className="flex gap-6 text-sm font-medium">
               <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
               <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
               <a href="mailto:info@cantiereonline.it" className="hover:text-white transition-colors">Contatti</a>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-xs text-center">
            © {new Date().getFullYear()} CantiereOnline.it - Tutti i diritti riservati.
          </div>
        </div>
      </footer>
    </div>
  );
}