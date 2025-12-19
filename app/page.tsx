import { Suspense } from 'react';
import Link from 'next/link';
import { HardHat, ArrowRight, Calendar, BookOpen } from 'lucide-react';
import { getSortedPostsData } from '@/lib/posts';
import SoftwareList from '@/components/SoftwareList';
import CountrySelector from '@/components/CountrySelector';
import { softwareData } from '@/data/software';

// Config IT
const FILTERS_IT = [
  { id: 'computo_metrico', label: 'Computo Metrico', key: 'computo_metrico' },
  { id: 'free_trial', label: 'Prova Gratuita', key: 'free_trial' },
  { id: 'versione_gratuita', label: 'Versione Gratuita', key: 'special_free' },
  { id: 'interfaccia_italiano', label: 'Piattaforma in Italiano', key: 'interfaccia_italiano' },
  { id: 'conformita_ita', label: 'Normativa Italia', key: 'conformita_ita' },
  { id: 'giornale_lavori', label: 'Giornale Lavori', key: 'giornale_lavori' },
  { id: 'pos_psc', label: 'Gestione POS/PSC', key: 'pos_psc' },
  { id: 'funziona_offline', label: 'Funziona Offline', key: 'funziona_offline' },
  { id: 'bim_viewer', label: 'BIM Viewer', key: 'bim_viewer' },
  { id: 'app_ios', label: 'App iOS', key: 'app_ios' },
  { id: 'app_android', label: 'App Android', key: 'app_android' },
];

const COLUMNS_IT = [
  { key: 'conformita_ita', label: <>NORMATIVA<br/>ITALIA</>, tooltip: 'Rispetta Codice Appalti e D.Lgs 81/08.' },
  { key: 'giornale_lavori', label: <>GIORNALE<br/>LAVORI</>, tooltip: 'Compilazione digitale del Giornale dei Lavori.' },
  { key: 'pos_psc', label: <>GESTIONE<br/>POS</>, tooltip: 'Funzioni per redigere o gestire il POS.' },
  { key: 'computo_metrico', label: <>COMPUTO<br/>METRICO</>, tooltip: 'Include strumenti per il computo metrico e la contabilità.' },
  { key: 'free_trial', label: <>PROVA<br/>GRATUITA</>, tooltip: 'Disponibile prova gratuita o piano Free.' },
];

export default function Home() {
  const allPosts = getSortedPostsData();
  const recentPosts = allPosts.slice(0, 2);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* --- HEADER --- */}
      <header className="border-b border-gray-100 p-4 sticky top-0 bg-white/95 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tight text-blue-900 flex items-center gap-2">
            <HardHat className="text-orange-500" /> CantiereOnline.it
          </Link>
        </div>
      </header>

      <main>
        {/* --- HERO SECTION --- */}
        <section className="bg-white pb-10 pt-16 px-4 text-center w-full mb-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
            Scegli il miglior software gestionale <br className="hidden md:block"/> per edilizia e cantieri
          </h1>
          
          <h2 className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-2 leading-relaxed font-normal">
            Nel 2025, gestire un cantiere con carta e penna è un rischio. In questa guida confrontiamo i migliori software per l'edilizia in base a tre criteri: <strong className="text-slate-800 font-semibold">conformità alla legge italiana</strong>, <strong className="text-slate-800 font-semibold">facilità d'uso in mobilità</strong> e <strong className="text-slate-800 font-semibold">integrazione BIM</strong>.
          </h2>
        </section>

        {/* --- LISTA E COMPARATORE --- */}
        <Suspense fallback={<div>Caricamento...</div>}>
          <SoftwareList
            data={softwareData}
            filters={FILTERS_IT}
            columns={COLUMNS_IT}
            locale="it"
          />
        </Suspense>

        {/* --- SEZIONE BLOG --- */}
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
                  <div className="md:w-2/5 h-48 md:h-auto bg-gray-200 relative overflow-hidden">
                     {post.coverImage && (
                       <img 
                         src={post.coverImage} 
                         alt={post.title} 
                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                       />
                     )}
                  </div>
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
              
              {recentPosts.length === 0 && (
                 <div className="col-span-2 text-center text-gray-400 py-10 bg-white rounded-2xl border border-dashed">
                   Presto in arrivo nuove guide...
                 </div>
              )}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800">
                Vedi tutti gli articoli <ArrowRight size={18} />
              </Link>
            </div>

          </div>
        </section>

      </main>

      {/* --- FOOTER AGGIORNATO --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            
            {/* Colonna Sinistra */}
            <div className="md:w-1/2">
               <div className="text-white font-bold text-xl flex items-center gap-2 mb-4">
                 <HardHat className="text-orange-500"/> CantiereOnline.it
               </div>
               <p className="mb-4 leading-relaxed">
                 Il punto di riferimento per i professionisti dell'edilizia. Confrontiamo in modo indipendente i migliori software per la gestione cantieri.
               </p>
               <div className="text-xs text-slate-500">
                 Un progetto di <a href="https://www.clusterclups.com/" target="_blank" rel="nofollow noreferrer" className="hover:text-slate-300 transition-colors">ClusterClups srl</a> - P.IVA 10923621212
               </div>
            </div>

            {/* Colonna Destra - Link & Contatti */}
            <div className="md:w-1/2 md:text-right flex flex-col md:items-end justify-between">
               <div className="flex gap-6 font-medium mb-6">
                  <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                  <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
               </div>
               
               <div>
                 <p className="text-slate-500 mb-1">Hai bisogno di informazioni?</p>
                 <div className="font-medium text-slate-300 select-all">
                   Per info e collaborazioni: contatto@cantiereonline.it
                 </div>
               </div>
            </div>

          </div>
          
          <div className="border-t border-slate-800 mt-10 pt-8 text-xs text-center text-slate-600">
            © {new Date().getFullYear()} CantiereOnline.it - Tutti i diritti riservati.
          </div>
        </div>
      </footer>
    </div>
  );
}