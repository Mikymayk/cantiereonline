import Link from 'next/link';
import { HardHat, Menu, ArrowRight, Calendar, BookOpen } from 'lucide-react';
import { getSortedPostsData } from '@/lib/posts';
import SoftwareList from '@/components/SoftwareList';

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
        {/* --- HERO SECTION --- */}
        <section className="bg-white pb-10 pt-16 px-4 text-center border-b border-gray-100 w-full mb-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
            Scegli il miglior software gestionale <br className="hidden md:block"/> per edilizia e cantieri
          </h1>
          
          <h2 className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-2 leading-relaxed font-normal">
            Nel 2025, gestire un cantiere con carta e penna è un rischio. In questa guida confrontiamo i migliori software per l'edilizia in base a tre criteri: <strong className="text-slate-800 font-semibold">conformità alla legge italiana</strong>, <strong className="text-slate-800 font-semibold">facilità d'uso in mobilità</strong> e <strong className="text-slate-800 font-semibold">integrazione BIM</strong>.
          </h2>
        </section>

        {/* --- LISTA E COMPARATORE (CLIENT COMPONENT) --- */}
        <SoftwareList />

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