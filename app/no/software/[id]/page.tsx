import { notFound } from 'next/navigation';
import { softwareNO } from '@/data/software_no';
import Link from 'next/link';
import { Check, X, ArrowLeft, ExternalLink, Star } from 'lucide-react';

export function generateStaticParams() {
  return softwareNO.map((sw) => ({
    id: sw.id,
  }));
}

export default async function SoftwarePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const software = softwareNO.find((s) => s.id === id);

  if (!software) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <header className="border-b border-gray-100 p-4 sticky top-0 bg-white/95 backdrop-blur z-50">
         <div className="max-w-4xl mx-auto flex items-center">
             <Link href="/no" className="text-slate-500 hover:text-blue-600 flex items-center gap-2 font-bold text-sm">
                 <ArrowLeft size={16}/> Tilbake til oversikten
             </Link>
         </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
                <h1 className="text-4xl font-extrabold text-slate-900 mb-2">{software.name}</h1>
                <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} fill={i < Math.floor(software.rating) ? "currentColor" : "none"} className={i < Math.floor(software.rating) ? "" : "text-gray-300"} />
                        ))}
                    </div>
                    <span className="text-sm font-bold text-slate-600">({software.reviews})</span>
                </div>
            </div>
            <div className="text-right">
                 <div className="text-3xl font-bold text-slate-900">{software.price}</div>
                 <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">{software.paymentType}</div>
            </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mb-12">
            <a href={software.website} target="_blank" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-4 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2">
                Besøk nettside <ExternalLink size={18}/>
            </a>
            <a href={software.pricingUrl} target="_blank" className="flex-1 bg-white border-2 border-gray-200 hover:border-blue-200 text-slate-700 hover:text-blue-600 text-center py-4 rounded-xl font-bold transition-all">
                Se priser
            </a>
        </div>

        {/* Description */}
        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">Om {software.name}</h2>
            <div className="prose prose-lg text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: software.description }}></div>
        </section>

        {/* Pros & Cons */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                    <Check className="bg-green-200 rounded-full p-1" size={24}/> Fordeler
                </h3>
                <ul className="space-y-3">
                    {software.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700 text-sm font-medium">
                            <Check size={16} className="text-green-600 mt-0.5 shrink-0"/> {pro}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                    <X className="bg-red-200 rounded-full p-1" size={24}/> Ulemper
                </h3>
                <ul className="space-y-3">
                    {software.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700 text-sm font-medium">
                            <X size={16} className="text-red-500 mt-0.5 shrink-0"/> {con}
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Features Table */}
        <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Funksjoner i detalj</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {Object.entries(software.features).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between py-3 border-b border-gray-100">
                        <span className="font-medium text-slate-600 capitalize">
                            {key.replace(/_/g, ' ')}
                        </span>
                        {value ? (
                            <Check size={20} className="text-green-500" />
                        ) : (
                            <X size={20} className="text-gray-300" />
                        )}
                    </div>
                ))}
            </div>
        </section>

      </main>
    </div>
  );
}
