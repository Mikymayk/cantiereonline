import { Suspense } from 'react';
import Link from 'next/link';
import { HardHat } from 'lucide-react';
import SoftwareList from '@/components/SoftwareList';
import CountrySelector from '@/components/CountrySelector';
import { softwareSE } from '@/data/software_se';

// Config
const FILTERS_SE = [
  { id: 'id06_integration', label: 'ID06-integration', key: 'id06_integration' },
  { id: 'ata_hantering', label: 'ÄTA-hantering', key: 'ata_hantering' },
  { id: 'personalliggare', label: 'Personalliggare', key: 'personalliggare' },
  { id: 'dagbok', label: 'Dagbok', key: 'dagbok' },
  { id: 'gratis_provperiod', label: 'Gratis provperiod', key: 'gratis_provperiod' },
  { id: 'bankid_inloggning', label: 'BankID', key: 'bankid_inloggning' },
  { id: 'e_faktura', label: 'E-faktura', key: 'e_faktura' },
  { id: 'kma_parm', label: 'KMA-pärm', key: 'kma_parm' },
  { id: 'mobilapp', label: 'Mobilapp', key: 'mobilapp' },
  { id: 'gps_positionering', label: 'GPS', key: 'gps_positionering' },
];

const COLUMNS_SE = [
  { key: 'id06_integration', label: 'ID06', tooltip: 'Integration med ID06' },
  { key: 'ata_hantering', label: 'ÄTA', tooltip: 'Hantering av ÄTA-arbeten' },
  { key: 'personalliggare', label: 'LIGGARE', tooltip: 'Elektronisk personalliggare' },
  { key: 'dagbok', label: 'DAGBOK', tooltip: 'Digital dagbok' },
  { key: 'gratis_provperiod', label: 'PROV', tooltip: 'Gratis provperiod' },
];

const COMPARISON_GROUPS_SE = [
  { title: "HÖJDPUNKTER", keys: ['id06_integration', 'ata_hantering', 'personalliggare', 'gratis_provperiod'] },
  { title: "ADMINISTRATION", keys: ['bankid_inloggning', 'rot_avdrag', 'e_faktura', 'integration_fortnox', 'offerthantering', 'resursplanering'] },
  { title: "PROJEKT", keys: ['dagbok', 'tidrapportering', 'projektuppfoljning', 'klimatdeklaration', 'underentreprenorsportal'] },
  { title: "KVALITET & MILJÖ", keys: ['egenkontroll', 'kma_parm', 'checklistor', 'avvikelserapport'] },
  { title: "MOBILITET", keys: ['mobilapp', 'gps_positionering', 'bildhantering', 'app_ios', 'app_android'] }
];

export const metadata = {
  title: 'Bästa Byggprogram Sverige 2025 | Jämförelse',
  description: 'Jämför de bästa byggprogrammen för Sverige. ID06, ÄTA och Personalliggare.',
  alternates: {
    languages: {
      'sv-SE': 'https://www.cantiereonline.it/se',
    },
  },
};

export default function HomeSE() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      <header className="border-b border-gray-100 p-4 sticky top-0 bg-white/95 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/se" className="font-bold text-xl tracking-tight text-blue-900 flex items-center gap-2">
            <HardHat className="text-orange-500" /> CantiereOnline
          </Link>
        </div>
      </header>

      <main>
        <section className="bg-white pb-10 pt-16 px-4 text-center w-full mb-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
            Välj rätt byggprogram <br className="hidden md:block"/> för ditt företag
          </h1>

          <h2 className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-2 leading-relaxed font-normal">
            Effektivisera ditt bygge med rätt verktyg. Vi jämför programvara baserat på <strong className="text-slate-800 font-semibold">ID06-krav</strong>, <strong className="text-slate-800 font-semibold">ÄTA-hantering</strong> och <strong className="text-slate-800 font-semibold">svensk lagstiftning</strong>.
          </h2>
        </section>

        <Suspense fallback={<div className="text-center p-10">Laddar...</div>}>
          <SoftwareList
            data={softwareSE}
            filters={FILTERS_SE}
            columns={COLUMNS_SE}
            comparisonGroups={COMPARISON_GROUPS_SE}
            locale="se"
          />
        </Suspense>

      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 text-sm">
        <div className="max-w-6xl mx-auto px-4 text-center mb-8">
            <p className="mb-4">Oberoende jämförelse för den svenska byggbranschen.</p>

            <div className="text-xs text-slate-500 space-y-2 mb-6">
               <p><strong>Clusterclups S.R.L.</strong></p>
               <p>Strada Santa Maria dell'Orto 14, 80053 Castellammare di Stabia (NA), Italien</p>
               <p>Moms: 10923621212</p>
            </div>

            <div className="flex justify-center gap-6">
              <span className="text-slate-500">contatto@cantiereonline.it</span>
              <Link href="/se/privacy" className="underline hover:text-white">Integritetspolicy</Link>
            </div>
        </div>
        <CountrySelector />
      </footer>
    </div>
  );
}
