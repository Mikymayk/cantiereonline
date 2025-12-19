
import { Metadata } from 'next';
import SoftwareFinderQuiz from './SoftwareFinderQuiz';

export const metadata: Metadata = {
  title: "Trova il Software Edile Ideale per Te - Quiz Gratuito | CantiereOnline",
  description: "Rispondi a poche domande e scopri quale software per l'edilizia è perfetto per il tuo ruolo e le tue esigenze. Algoritmo di confronto personalizzato.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SoftwareFinderQuiz />
    </div>
  );
}
