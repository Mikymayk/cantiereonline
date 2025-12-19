import { Suspense } from 'react';
import Link from 'next/link';
import { HardHat } from 'lucide-react';
import SoftwareList from '@/components/SoftwareList';
import CountrySelector from '@/components/CountrySelector';
import { softwareNO } from '@/data/software_no';

// Config
const FILTERS_NO = [
  { id: 'hms_system', label: 'HMS-system', key: 'hms_system' },
  { id: 'byggekort_oversikt', label: 'Byggekort / Oversikt', key: 'byggekort_oversikt' },
  { id: 'timeforing', label: 'Timeføring', key: 'timeforing' },
  { id: 'sja_analyse', label: 'SJA (Sikker Jobb Analyse)', key: 'sja_analyse' },
  { id: 'gratis_proveperiode', label: 'Gratis prøveperiode', key: 'gratis_proveperiode' },
  { id: 'vipps_bankid', label: 'Vipps / BankID', key: 'vipps_bankid' },
  { id: 'ks_system', label: 'KS-system', key: 'ks_system' },
  { id: 'fdv_dokumentasjon', label: 'FDV Dokumentasjon', key: 'fdv_dokumentasjon' },
  { id: 'app_ios', label: 'App iOS', key: 'app_ios' },
  { id: 'app_android', label: 'App Android', key: 'app_android' },
];

const COLUMNS_NO = [
  { key: 'hms_system', label: 'HMS', tooltip: 'Helse, Miljø og Sikkerhet' },
  { key: 'byggekort_oversikt', label: 'BYGGEKORT', tooltip: 'Oversiktslister og Byggekort' },
  { key: 'timeforing', label: 'TIMER', tooltip: 'Digital timeføring' },
  { key: 'sja_analyse', label: 'SJA', tooltip: 'Sikker Jobb Analyse' },
  { key: 'gratis_proveperiode', label: 'PRØVE', tooltip: 'Gratis prøveperiode' },
];

export const metadata = {
  title: 'Beste Byggeprogramvare Norge 2025 | Test',
  description: 'Sammenligning av programvare for bygg og anlegg i Norge. HMS, Byggekort og Timeføring.',
  alternates: {
    languages: {
      'nb-NO': 'https://www.cantiereonline.it/no',
    },
  },
};

export default function HomeNO() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      <header className="border-b border-gray-100 p-4 sticky top-0 bg-white/95 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/no" className="font-bold text-xl tracking-tight text-blue-900 flex items-center gap-2">
            <HardHat className="text-orange-500" /> ByggOnline.no
          </Link>
        </div>
      </header>

      <main>
        <section className="bg-white pb-10 pt-16 px-4 text-center w-full mb-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
            Velg riktig programvare <br className="hidden md:block"/> for norske byggeplasser
          </h1>

          <h2 className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-2 leading-relaxed font-normal">
            Effektiviser driften med verktøy tilpasset norske krav. Vi sammenligner basert på <strong className="text-slate-800 font-semibold">HMS-krav</strong>, <strong className="text-slate-800 font-semibold">Byggekort-regler</strong> og <strong className="text-slate-800 font-semibold">norsk standard</strong>.
          </h2>
        </section>

        <Suspense fallback={<div className="text-center p-10">Laster...</div>}>
          <SoftwareList
            data={softwareNO}
            filters={FILTERS_NO}
            columns={COLUMNS_NO}
            locale="no"
          />
        </Suspense>

      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 text-sm">
        <div className="max-w-6xl mx-auto px-4 text-center mb-8">
            <p>Uavhengig sammenligning for den norske byggebransjen.</p>
            <div className="mt-4">
              <Link href="/no/privacy" className="underline hover:text-white">Personvern</Link>
            </div>
        </div>
        <CountrySelector />
      </footer>
    </div>
  );
}
