import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import { HardHat, ArrowRight, Calendar, User } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog CantiereOnline | Guide e Consigli per Edilizia Digitale',
  description: 'News, guide pratiche e consigli sulla gestione digitale del cantiere, normative POS/PSC e recensioni software.',
};

export default function BlogIndex() {
  const allPosts = getSortedPostsData();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* HEADER */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-xl tracking-tight text-blue-900 flex items-center gap-2">
            <HardHat className="text-orange-500" /> CantiereOnline.it
          </Link>
          <Link href="/" className="text-sm font-medium text-slate-500 hover:text-blue-600">
            Torna ai Software
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Il Blog dell'Edilizia Digitale
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Strategie, guide e approfondimenti per gestire i cantieri nel 2025.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPosts.map(({ id, date, title, excerpt, coverImage, author }) => (
            <Link key={id} href={`/blog/${id}`} className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all hover:-translate-y-1">
              <div className="h-48 overflow-hidden bg-gray-100 relative">
                 {/* Se non c'è immagine usa un placeholder o rendilo opzionale */}
                 <img src={coverImage} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1"><Calendar size={12}/> {date}</span>
                  <span className="flex items-center gap-1"><User size={12}/> {author}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {title}
                </h2>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {excerpt}
                </p>
                <div className="text-blue-600 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Leggi articolo <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}