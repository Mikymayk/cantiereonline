import { getPostData, getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import { HardHat, ArrowLeft, Calendar, User } from 'lucide-react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Definizione del tipo per le Props (i parametri sono una Promise)
type Props = {
  params: Promise<{ slug: string }>;
};

// Genera i percorsi statici per tutti gli articoli
export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

// Genera metadati SEO per ogni articolo
export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  
  try {
    const postData = await getPostData(params.slug);
    return {
      title: `${postData.title} - CantiereOnline`,
      description: postData.excerpt,
    };
  } catch (e) {
    return {
      title: 'Articolo non trovato',
    };
  }
}

export default async function Post(props: Props) {
  // 1. ASPETTIAMO CHE I PARAMETRI SIANO PRONTI
  const params = await props.params;

  // 2. Proviamo a recuperare i dati del post
  let postData;
  try {
    postData = await getPostData(params.slug);
  } catch (error) {
    // Se il file .md non esiste, restituisci 404
    notFound();
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <header className="border-b border-gray-100 p-4 sticky top-0 bg-white/95 backdrop-blur z-50">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-xl tracking-tight text-blue-900 flex items-center gap-2">
            <HardHat className="text-orange-500" /> CantiereOnline.it
          </Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 font-medium text-sm transition-colors">
          <ArrowLeft size={16} /> Torna al Blog
        </Link>

        <div className="mb-8">
           <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
              <span className="flex items-center gap-1"><Calendar size={14}/> {postData.date}</span>
              <span className="flex items-center gap-1"><User size={14}/> {postData.author}</span>
           </div>
           <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
             {postData.title}
           </h1>
           {postData.coverImage && (
             <img src={postData.coverImage} alt={postData.title} className="w-full h-auto rounded-xl shadow-lg mb-8" />
           )}
        </div>

        {/* CONTENUTO ARTICOLO */}
        <div 
          className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-a:text-blue-600"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />
        
        {/* Call to Action Finale */}
        <div className="mt-16 bg-slate-50 border border-gray-200 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-2">Cerchi il software giusto?</h3>
          <p className="text-slate-600 mb-6">Confronta i prezzi e le funzionalità dei migliori gestionali.</p>
          <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors inline-block">
            Vai al comparatore
          </Link>
        </div>
      </article>
    </div>
  );
}