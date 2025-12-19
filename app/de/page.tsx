import { Suspense } from 'react';
import Link from 'next/link';
import { HardHat } from 'lucide-react';
import SoftwareList from '@/components/SoftwareList';
import CountrySelector from '@/components/CountrySelector';
import { softwareDE } from '@/data/software_de';

// Config
const FILTERS_DE = [
  { id: 'vob_konformitaet', label: 'VOB-Konformität', key: 'vob_konformitaet' },
  { id: 'bautagebuch', label: 'Bautagebuch', key: 'bautagebuch' },
  { id: 'gaeb_schnittstelle', label: 'GAEB-Schnittstelle', key: 'gaeb_schnittstelle' },
  { id: 'maengelmanagement', label: 'Mängelmanagement', key: 'maengelmanagement' },
  { id: 'kostenlose_testphase', label: 'Kostenlose Testphase', key: 'kostenlose_testphase' },
  { id: 'digitale_bauakte', label: 'Digitale Bauakte', key: 'digitale_bauakte' },
  { id: 'gobd_konform', label: 'GoBD-konform', key: 'gobd_konform' },
  { id: 'bim_integration', label: 'BIM Integration', key: 'bim_integration' },
  { id: 'app_ios', label: 'App iOS', key: 'app_ios' },
  { id: 'app_android', label: 'App Android', key: 'app_android' },
];

const COLUMNS_DE = [
  { key: 'vob_konformitaet', label: 'VOB KONFORM', tooltip: 'Entspricht VOB Richtlinien' },
  { key: 'bautagebuch', label: 'BAUTAGEBUCH', tooltip: 'Digitales Bautagebuch' },
  { key: 'gaeb_schnittstelle', label: 'GAEB', tooltip: 'Datenaustausch nach GAEB' },
  { key: 'maengelmanagement', label: 'MÄNGEL', tooltip: 'Mängelerfassung & Freimeldung' },
  { key: 'kostenlose_testphase', label: 'GRATIS TEST', tooltip: 'Kostenlos testen' },
];

const COMPARISON_GROUPS_DE = [
  { title: "HIGHLIGHTS", keys: ['vob_konformitaet', 'bautagebuch', 'gaeb_schnittstelle', 'kostenlose_testphase'] },
  { title: "VERWALTUNG", keys: ['gobd_konform', 'xrechnung_zugferd', 'baulohn_abrechnung', 'freistellungsbescheinigung', 'datev_schnittstelle', 'dsgvo_konformitaet'] },
  { title: "TECHNISCH", keys: ['reb_23_003', 'digitale_bauakte', 'bauzeitenplan', 'nachtragsmanagement', 'bim_integration', 'sprachsteuerung'] },
  { title: "BAUSTELLE", keys: ['maengelmanagement', 'maengelanzeige_vob', 'fotodokumentation', 'digitale_abnahme', 'subunternehmer_verwaltung'] },
  { title: "APP", keys: ['app_ios', 'app_android'] }
];

export const metadata = {
  title: 'Beste Bausoftware Deutschland 2025 | Vergleich',
  description: 'Vergleich der besten Bausoftware für Deutschland. VOB-Konformität, GAEB-Schnittstelle und Bautagebuch im Test.',
  alternates: {
    languages: {
      'de-DE': 'https://www.cantiereonline.it/de',
    },
  },
};

export default function HomeDE() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      <header className="border-b border-gray-100 p-4 sticky top-0 bg-white/95 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/de" className="font-bold text-xl tracking-tight text-blue-900 flex items-center gap-2">
            <HardHat className="text-orange-500" /> CantiereOnline
          </Link>
        </div>
      </header>

      <main>
        <section className="bg-white pb-10 pt-16 px-4 text-center w-full mb-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
            Die beste Bausoftware <br className="hidden md:block"/> für deutsche Bauunternehmen
          </h1>

          <h2 className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-2 leading-relaxed font-normal">
            Digitalisieren Sie Ihre Bauprozesse rechtssicher. Wir vergleichen Software nach <strong className="text-slate-800 font-semibold">VOB-Konformität</strong>, <strong className="text-slate-800 font-semibold">GAEB-Schnittstellen</strong> und <strong className="text-slate-800 font-semibold">GoBD-Standards</strong>.
          </h2>
        </section>

        <Suspense fallback={<div className="text-center p-10">Laden...</div>}>
          <SoftwareList
            data={softwareDE}
            filters={FILTERS_DE}
            columns={COLUMNS_DE}
            comparisonGroups={COMPARISON_GROUPS_DE}
            locale="de"
          />
        </Suspense>

      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 text-sm">
        <div className="max-w-6xl mx-auto px-4 text-center mb-8">
            <p className="mb-4">Unabhängiger Vergleich für die deutsche Bauwirtschaft.</p>

            <div className="text-xs text-slate-500 space-y-2 mb-6">
               <p><strong>Clusterclups S.R.L.</strong></p>
               <p>Strada Santa Maria dell'Orto 14, 80053 Castellammare di Stabia (NA), Italien</p>
               <p>USt-IdNr: 10923621212</p>
            </div>

            <div className="flex justify-center gap-6">
              <span className="text-slate-500">contatto@cantiereonline.it</span>
              <Link href="/de/privacy" className="underline hover:text-white">Datenschutz & Impressum</Link>
            </div>
        </div>
        <CountrySelector />
      </footer>
    </div>
  );
}
