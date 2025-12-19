import { Suspense } from 'react';
import Link from 'next/link';
import { HardHat } from 'lucide-react';
import SoftwareList from '@/components/SoftwareList';
import CountrySelector from '@/components/CountrySelector';
import { softwareCH } from '@/data/software_ch';

// Config
const FILTERS_CH = [
  { id: 'sia_konformitaet', label: 'SIA-Konformität', key: 'sia_konformitaet' },
  { id: 'npk_editor', label: 'NPK-Editor (CRB)', key: 'npk_editor' },
  { id: 'regie_rapporte', label: 'Regie-Rapporte', key: 'regie_rapporte' },
  { id: 'baujournal', label: 'Baujournal', key: 'baujournal' },
  { id: 'kostenlose_testphase', label: 'Kostenlose Testphase', key: 'kostenlose_testphase' },
  { id: 'waehrung_chf', label: 'Währung CHF', key: 'waehrung_chf' },
  { id: 'mobiles_rapportieren', label: 'Mobiles Rapportieren', key: 'mobiles_rapportieren' },
  { id: 'bim_viewer', label: 'BIM Viewer', key: 'bim_viewer' },
  { id: 'app_ios', label: 'App iOS', key: 'app_ios' },
  { id: 'app_android', label: 'App Android', key: 'app_android' },
];

const COLUMNS_CH = [
  { key: 'sia_konformitaet', label: 'SIA KONFORM', tooltip: 'Entspricht SIA Normen' },
  { key: 'npk_editor', label: 'NPK EDITOR', tooltip: 'CRB zertifizierter Editor' },
  { key: 'regie_rapporte', label: 'REGIE RAPPORTE', tooltip: 'Digitale Regierapporte' },
  { key: 'baujournal', label: 'BAU JOURNAL', tooltip: 'Bautagebuch inkl. Wetter' },
  { key: 'kostenlose_testphase', label: 'GRATIS TEST', tooltip: 'Kostenlose Testphase verfügbar' },
];

const COMPARISON_GROUPS_CH = [
  { title: "HIGHLIGHTS", keys: ['sia_konformitaet', 'npk_editor', 'regie_rapporte', 'kostenlose_testphase'] },
  { title: "ADMINISTRATION", keys: ['crb_zertifiziert', 'qr_rechnung', 'ausmass_sia_118', 'kbob_vertraege', 'waehrung_chf', 'mwst_abrechnung', 'lohnmeldeverfahren_elm'] },
  { title: "TECHNISCH", keys: ['ifa18_unterstuetzung', 'bim_viewer', 'planverwaltung', 'offline_funktion', 'zeiterfassung_gps', 'serverstandort_schweiz'] },
  { title: "COLLABORATION", keys: ['digitale_visierung', 'maengelmanagement', 'mobiles_rapportieren', 'subunternehmer_portal', 'mehrsprachigkeit'] },
  { title: "APP", keys: ['app_ios', 'app_android'] }
];

export const metadata = {
  title: 'Beste Bausoftware Schweiz 2025 | Vergleich & Test',
  description: 'Vergleich der besten Bausoftware für die Schweiz. SIA-Konformität, NPK-Editor und Regie-Rapporte im Test.',
  alternates: {
    languages: {
      'de-CH': 'https://www.cantiereonline.it/ch',
    },
  },
};

export default function HomeCH() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      <header className="border-b border-gray-100 p-4 sticky top-0 bg-white/95 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/ch" className="font-bold text-xl tracking-tight text-blue-900 flex items-center gap-2">
            <HardHat className="text-orange-500" /> CantiereOnline
          </Link>
        </div>
      </header>

      <main>
        <section className="bg-white pb-10 pt-16 px-4 text-center w-full mb-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
            Die beste Bausoftware <br className="hidden md:block"/> für Schweizer Unternehmen
          </h1>

          <h2 className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-2 leading-relaxed font-normal">
            Verwalten Sie Ihre Baustellen digital und effizient. Wir vergleichen Software basierend auf <strong className="text-slate-800 font-semibold">SIA-Konformität</strong>, <strong className="text-slate-800 font-semibold">NPK-Integration</strong> und <strong className="text-slate-800 font-semibold">Schweizer Serverstandort</strong>.
          </h2>
        </section>

        <Suspense fallback={<div className="text-center p-10">Laden...</div>}>
          <SoftwareList
            data={softwareCH}
            filters={FILTERS_CH}
            columns={COLUMNS_CH}
            comparisonGroups={COMPARISON_GROUPS_CH}
            locale="ch"
          />
        </Suspense>

      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 text-sm">
        <div className="max-w-6xl mx-auto px-4 text-center mb-8">
            <p className="mb-4">Unabhängiger Softwarevergleich für die Schweizer Baubranche.</p>

            <div className="text-xs text-slate-500 space-y-2 mb-6">
               <p><strong>Clusterclups S.R.L.</strong></p>
               <p>Strada Santa Maria dell'Orto 14, 80053 Castellammare di Stabia (NA), Italien</p>
               <p>MwSt: 10923621212</p>
            </div>

            <div className="flex justify-center gap-6">
              <span className="text-slate-500">contatto@cantiereonline.it</span>
              <Link href="/ch/privacy" className="underline hover:text-white">Datenschutz & Impressum</Link>
            </div>
        </div>
        <CountrySelector />
      </footer>
    </div>
  );
}
