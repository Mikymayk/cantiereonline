import { Suspense } from 'react';
import Link from 'next/link';
import { HardHat } from 'lucide-react';
import SoftwareList from '@/components/SoftwareList';
import CountrySelector from '@/components/CountrySelector';
import { softwareList } from '@/data/software_it';

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

const COMPARISON_GROUPS_IT = [
  { title: "HIGHLIGHTS", keys: ['giornale_lavori', 'pos_psc', 'computo_metrico', 'free_trial'] },
  { title: "AMMINISTRAZIONE", keys: ['conformita_ita', 'fatturazione_elettronica', 'firma_digitale', 'integrazione_sdi', 'export_contabilita'] },
  { title: "TECNICO & CAMPO", keys: ['funziona_offline', 'bim_viewer', 'foto_360', 'gps_staff', 'app_ios', 'app_android'] },
  { title: "COLLABORAZIONE", keys: ['chat_interna', 'notifiche_push', 'utenti_illimitati', 'inviti_esterni'] },
  { title: "SUPPORTO", keys: ['interfaccia_italiano', 'supporto_telefono', 'supporto_chat', 'supporto_italiano'] }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* --- HEADER --- */}
      <header className="border-b border-gray-100 p-4 sticky top-0 bg-white/95 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tight text-blue-900 flex items-center gap-2">
            <HardHat className="text-orange-500" /> CantiereOnline
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
            Nel 2025, gestire un cantiere con carta e penna è un rischio. In questa guida confrontiamo i migliori software per l&apos;edilizia in base a tre criteri: <strong className="text-slate-800 font-semibold">conformità alla legge italiana</strong>, <strong className="text-slate-800 font-semibold">facilità d&apos;uso in mobilità</strong> e <strong className="text-slate-800 font-semibold">integrazione BIM</strong>.
          </h2>
        </section>

        {/* --- LISTA E COMPARATORE --- */}
        <Suspense fallback={<div>Caricamento...</div>}>
          <SoftwareList
            data={softwareList}
            filters={FILTERS_IT}
            columns={COLUMNS_IT}
            comparisonGroups={COMPARISON_GROUPS_IT}
            locale="it"
          />
        </Suspense>

      </main>

      {/* --- FOOTER AGGIORNATO --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
            
            {/* Colonna Sinistra */}
            <div className="md:w-1/2">
               <div className="text-white font-bold text-xl flex items-center gap-2 mb-4">
                 <HardHat className="text-orange-500"/> CantiereOnline
               </div>
               <p className="mb-4 leading-relaxed">
                 Il punto di riferimento per i professionisti dell&apos;edilizia. Confrontiamo in modo indipendente i migliori software per la gestione cantieri.
               </p>
               <div className="text-xs text-slate-500 space-y-2">
                 <p><strong>Clusterclups S.R.L.</strong></p>
                 <p>Strada Santa Maria dell&apos;Orto 14, 80053 Castellammare di Stabia (NA), Italia</p>
                 <p>P.IVA: 10923621212</p>
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
                 <div className="font-medium text-slate-300">
                   contatto@cantiereonline.it
                 </div>
               </div>
            </div>

          </div>
        </div>
        <CountrySelector />
      </footer>
    </div>
  );
}
