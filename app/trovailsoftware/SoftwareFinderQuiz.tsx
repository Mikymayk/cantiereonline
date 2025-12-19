"use client";

import React, { useState } from 'react';
import { softwareList } from '@/data/software_it';
import { Check, ArrowRight, RefreshCw, HardHat, Star, ExternalLink, Award } from 'lucide-react';
import Link from 'next/link';

// --- TYPES ---
type UserRole = 'A' | 'B' | 'C' | 'D';
type StepId = 'ROLE' | 'Q2_A' | 'Q3_A' | 'Q2_B' | 'Q3_B' | 'Q2_C' | 'Q3_C' | 'Q2_D' | 'Q3_D' | 'FINAL_1' | 'FINAL_2' | 'RESULT';

interface Answer {
  label: string;
  weights: Record<string, number>;
  nextStep: StepId;
}

interface Question {
  id: StepId;
  text: string;
  answers: Answer[];
}

// --- CONFIG ---
// Map feature keys to readable labels for the result card
const FEATURE_LABELS: Record<string, string> = {
  giornale_lavori: "Giornale Lavori",
  computo_metrico: "Computo Metrico",
  pos_psc: "Sicurezza (POS/PSC)",
  conformita_ita: "Normativa Italiana",
  fatturazione_elettronica: "Fatturazione Elettr.",
  integrazione_sdi: "Integrazione SDI",
  export_contabilita: "Export Contabilità",
  funziona_offline: "Offline",
  bim_viewer: "BIM Viewer",
  foto_360: "Foto 360",
  gps_staff: "GPS Presenze",
  app_ios: "App iOS",
  app_android: "App Android",
  chat_interna: "Chat",
  notifiche_push: "Notifiche",
  utenti_illimitati: "Utenti Illimitati",
  inviti_esterni: "Inviti Esterni",
  interfaccia_italiano: "Interfaccia ITA",
  supporto_telefono: "Supporto Tel",
  supporto_chat: "Supporto Chat",
  supporto_italiano: "Supporto ITA",
  free_trial: "Prova Gratuita"
};

// --- QUIZ DATA ---
const QUESTIONS: Record<string, Question> = {
  ROLE: {
    id: 'ROLE',
    text: "Per prima cosa, qual è il tuo ruolo principale nel settore edile?",
    answers: [
      {
        label: "Progettista / D.L. (Architetto, Ingegnere)",
        weights: {},
        nextStep: 'Q2_A'
      },
      {
        label: "Impresa / Cantiere (Costruttore, Capocantiere)",
        weights: {},
        nextStep: 'Q2_B'
      },
      {
        label: "Manager / General Contractor",
        weights: {},
        nextStep: 'Q2_C'
      },
      {
        label: "Sicurezza (CSP, CSE, RSPP)",
        weights: {},
        nextStep: 'Q2_D'
      }
    ]
  },
  // BRANCH A
  Q2_A: {
    id: 'Q2_A',
    text: "Qual è l'attività che ti porta via più tempo oggi?",
    answers: [
      { label: "Computi Metrici e Contabilità", weights: { computo_metrico: 10, export_contabilita: 5 }, nextStep: 'Q3_A' },
      { label: "Sopralluoghi e Verbali", weights: { giornale_lavori: 10, foto_360: 5 }, nextStep: 'Q3_A' },
      { label: "Disegno e BIM", weights: { bim_viewer: 10 }, nextStep: 'Q3_A' }
    ]
  },
  Q3_A: {
    id: 'Q3_A',
    text: "Lavori spesso in zone senza internet?",
    answers: [
      { label: "Sì, è un incubo", weights: { funziona_offline: 15 }, nextStep: 'FINAL_1' },
      { label: "No, ho quasi sempre connessione", weights: {}, nextStep: 'FINAL_1' }
    ]
  },
  // BRANCH B
  Q2_B: {
    id: 'Q2_B',
    text: "Qual è la sfida più grande nella gestione quotidiana?",
    answers: [
      { label: "Capire chi è presente in cantiere (Presenze)", weights: { gps_staff: 15 }, nextStep: 'Q3_B' },
      { label: "Il caos delle comunicazioni (Chat/Foto)", weights: { chat_interna: 10, notifiche_push: 5 }, nextStep: 'Q3_B' },
      { label: "Emettere fatture e burocrazia", weights: { fatturazione_elettronica: 10, integrazione_sdi: 5 }, nextStep: 'Q3_B' }
    ]
  },
  Q3_B: {
    id: 'Q3_B',
    text: "Quanto è grande la tua squadra operativa?",
    answers: [
      { label: "Piccola (Io + pochi collaboratori)", weights: {}, nextStep: 'FINAL_1' },
      { label: "Media/Grande (Diverse squadre)", weights: { utenti_illimitati: 10, inviti_esterni: 5 }, nextStep: 'FINAL_1' }
    ]
  },
  // BRANCH C
  Q2_C: {
    id: 'Q2_C',
    text: "Cosa devi tenere sotto controllo principalmente?",
    answers: [
      { label: "Costi, budget e margini", weights: { export_contabilita: 10, computo_metrico: 5 }, nextStep: 'Q3_C' },
      { label: "Avanzamento lavori e ritardi", weights: { giornale_lavori: 10, notifiche_push: 5 }, nextStep: 'Q3_C' }
    ]
  },
  Q3_C: {
    id: 'Q3_C',
    text: "Gestisci molti subappaltatori esterni?",
    answers: [
      { label: "Sì, devono caricare documenti", weights: { inviti_esterni: 15, utenti_illimitati: 5 }, nextStep: 'FINAL_1' },
      { label: "No, gestione interna", weights: {}, nextStep: 'FINAL_1' }
    ]
  },
  // BRANCH D
  Q2_D: {
    id: 'Q2_D',
    text: "Di cosa ti occupi maggiormente?",
    answers: [
      { label: "Redazione Piani (POS, PSC)", weights: { pos_psc: 15, conformita_ita: 10 }, nextStep: 'Q3_D' },
      { label: "Verbali di sopralluogo in cantiere", weights: { giornale_lavori: 10, app_ios: 5, app_android: 5 }, nextStep: 'Q3_D' }
    ]
  },
  Q3_D: {
    id: 'Q3_D',
    text: "Quanto è importante avere i modelli di legge italiani?",
    answers: [
      { label: "Fondamentale (Normativa Italia)", weights: { conformita_ita: 20 }, nextStep: 'FINAL_1' },
      { label: "Posso adattare modelli generici", weights: {}, nextStep: 'FINAL_1' }
    ]
  },
  // FINAL COMMON
  FINAL_1: {
    id: 'FINAL_1',
    text: "Parliamo di lingua. Quanto è importante l'italiano?",
    answers: [
      { label: "Indispensabile (Software e Supporto)", weights: { interfaccia_italiano: 10, supporto_italiano: 10, supporto_telefono: 5 }, nextStep: 'FINAL_2' },
      { label: "Mi adatto all'inglese", weights: {}, nextStep: 'FINAL_2' }
    ]
  },
  FINAL_2: {
    id: 'FINAL_2',
    text: "Vuoi provarlo prima di pagare?",
    answers: [
      { label: "Sì, solo trial gratuita", weights: { free_trial: 20 }, nextStep: 'RESULT' },
      { label: "Preferisco una demo guidata", weights: {}, nextStep: 'RESULT' }
    ]
  }
};

export default function SoftwareFinderQuiz() {
  const [currentStep, setCurrentStep] = useState<StepId>('ROLE');
  const [scores, setScores] = useState<Record<string, number>>({});
  const [maxPossibleScore, setMaxPossibleScore] = useState(0);
  const [history, setHistory] = useState<StepId[]>([]); // For future "back" button implementation

  // Initialize scores for all software
  React.useEffect(() => {
    const initialScores: Record<string, number> = {};
    softwareList.forEach(sw => initialScores[sw.id] = 0);
    setScores(initialScores);
  }, []);

  const handleAnswer = (answer: Answer) => {
    // 1. Calculate weights added by this answer
    const weightSum = Object.values(answer.weights).reduce((a, b) => a + b, 0);
    const newMaxScore = maxPossibleScore + weightSum;
    setMaxPossibleScore(newMaxScore);

    // 2. Update software scores
    const newScores = { ...scores };
    softwareList.forEach(sw => {
      Object.entries(answer.weights).forEach(([featureKey, weight]) => {
        // @ts-ignore - Dynamic access to features
        if (sw.features[featureKey]) {
          newScores[sw.id] = (newScores[sw.id] || 0) + weight;
        }
      });
    });
    setScores(newScores);

    // 3. Move to next step
    setHistory([...history, currentStep]);
    setCurrentStep(answer.nextStep);
  };

  const resetQuiz = () => {
    setCurrentStep('ROLE');
    const initialScores: Record<string, number> = {};
    softwareList.forEach(sw => initialScores[sw.id] = 0);
    setScores(initialScores);
    setMaxPossibleScore(0);
    setHistory([]);
  };

  // --- RENDER RESULT ---
  if (currentStep === 'RESULT') {
    // Sort software by score
    const sortedSoftware = [...softwareList].sort((a, b) => (scores[b.id] || 0) - (scores[a.id] || 0));
    const winner = sortedSoftware[0];
    const runnerUp = sortedSoftware[1];

    // Calculate Match Percentage
    const winnerScore = scores[winner.id] || 0;
    const matchPercentage = maxPossibleScore > 0
      ? Math.round((winnerScore / maxPossibleScore) * 100)
      : 0;

    const runnerUpScore = scores[runnerUp.id] || 0;
    const runnerUpPercentage = maxPossibleScore > 0
      ? Math.round((runnerUpScore / maxPossibleScore) * 100)
      : 0;

    // Determine matched features to display
    const matchedFeaturesKeys = Object.keys(FEATURE_LABELS).filter(key => {
      // @ts-ignore
      return winner.features[key] === true;
    });

    // Prioritize showing features that actually contributed to the score (if we tracked them)
    // or just show relevant ones from our label list.
    // Ideally, we show top features. We will show all from the list that the software has,
    // as they are all "relevant" quiz keys.
    // To make it cleaner, let's limit to top 6-8 tags or just flow them.

    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-10 animate-in slide-in-from-bottom-4">
          <Award size={48} className="mx-auto text-yellow-500 mb-4" />
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Abbiamo trovato il tuo match!</h2>
          <p className="text-slate-600">Basato sulle tue risposte, ecco il software più adatto a te.</p>
        </div>

        {/* WINNER CARD */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-600 transform transition-all hover:scale-[1.01] duration-300 animate-in zoom-in-95">
          <div className="bg-blue-600 text-white p-4 text-center font-bold uppercase tracking-widest text-sm">
            Miglior Risultato
          </div>
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-1">{winner.name}</h3>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={18} fill="currentColor" />
                  <span className="font-bold text-slate-800 ml-1">{winner.rating}</span>
                </div>
              </div>
              <div className="text-right">
                 <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold mb-1">
                   {matchPercentage}% Compatibile
                 </div>
              </div>
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: winner.description }} />

            <div className="bg-slate-50 rounded-xl p-5 mb-8 border border-slate-100">
               <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase text-opacity-70">Perché fa per te:</h4>
               <div className="flex flex-wrap gap-2">
                 {matchedFeaturesKeys.map(key => (
                   <span key={key} className="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-semibold text-slate-600">
                     {FEATURE_LABELS[key]}
                   </span>
                 ))}
               </div>
            </div>

            <a
              href={winner.website}
              target="_blank"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-200 transition-all hover:shadow-blue-300"
            >
              Vai al Sito Ufficiale <ExternalLink size={18} className="inline ml-1 mb-1"/>
            </a>
          </div>
        </div>

        {/* RUNNER UP (Optional) */}
        {runnerUp && (Math.abs(matchPercentage - runnerUpPercentage) < 20) && (
          <div className="mt-8 opacity-90 hover:opacity-100 transition-opacity">
            <h3 className="text-center font-bold text-slate-500 uppercase tracking-widest text-xs mb-4">Alternativa Consigliata</h3>
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
               <div className="text-center sm:text-left">
                  <h4 className="font-bold text-xl text-slate-900">{runnerUp.name}</h4>
                  <div className="text-sm text-slate-500 mt-1">{runnerUpPercentage}% Compatibile</div>
               </div>
               <div className="flex gap-3 w-full sm:w-auto">
                 <Link
                    href={`/software/${runnerUp.id}`}
                    className="flex-1 sm:flex-none px-4 py-2 bg-gray-100 hover:bg-gray-200 text-slate-700 rounded-lg font-bold text-sm transition-colors text-center"
                 >
                   Leggi Recensione
                 </Link>
                 <a
                    href={runnerUp.website}
                    target="_blank"
                    className="flex-1 sm:flex-none px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-bold text-sm transition-colors text-center"
                 >
                   Sito
                 </a>
               </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <button
            onClick={resetQuiz}
            className="text-slate-400 hover:text-slate-600 font-medium flex items-center justify-center gap-2 mx-auto transition-colors"
          >
            <RefreshCw size={16} /> Ricomincia il test
          </button>
           <Link href="/" className="mt-4 block text-blue-600 hover:underline text-sm font-medium">
             Vedi tutti i software
           </Link>
        </div>

      </div>
    );
  }

  // --- RENDER QUESTION ---
  const question = QUESTIONS[currentStep];

  // Progress Calculation
  const totalSteps = 5;
  const currentStepIndex = history.length + 1;
  const progress = Math.min((currentStepIndex / totalSteps) * 100, 100);

  return (
    <div className="flex flex-col min-h-screen bg-white">

        {/* Header */}
        <header className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
           <Link href="/" className="flex items-center gap-2 font-bold text-slate-800">
             <HardHat className="text-orange-500" size={24} />
             <span className="hidden sm:inline">CantiereOnline</span>
           </Link>
           <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
             Trova il Software
           </div>
        </header>

        {/* Progress Bar */}
        <div className="h-1 bg-gray-100 w-full">
          <div
            className="h-full bg-blue-600 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 sm:py-12 max-w-2xl mx-auto w-full">

            <div className="w-full animate-in fade-in slide-in-from-bottom-8 duration-500">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 text-center leading-tight">
                {question.text}
              </h2>

              <div className="space-y-4">
                {question.answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(answer)}
                    className="w-full text-left p-5 rounded-xl border-2 border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition-all group relative overflow-hidden shadow-sm hover:shadow-md bg-white"
                  >
                    <span className="font-bold text-lg text-slate-700 group-hover:text-blue-700 relative z-10">
                      {answer.label}
                    </span>
                    <ArrowRight className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 group-hover:text-blue-500 transition-colors" />
                  </button>
                ))}
              </div>
            </div>

        </main>

        <footer className="py-6 text-center text-slate-400 text-sm">
           Domanda {currentStepIndex} di ~{totalSteps}
        </footer>
    </div>
  );
}
