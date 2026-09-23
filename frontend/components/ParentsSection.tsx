import React, { useState } from 'react';
import { UNIFORM_ITEMS, FAQ_PARENTS } from '../constants';
import { 
  FileText, 
  Download, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Shirt, 
  HeartHandshake, 
  ShieldAlert,
  Compass
} from 'lucide-react';

export const ParentsSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSimulatedDownload = (fileName: string) => {
    setDownloadSuccess(fileName);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 4000);
  };

  return (
    <div className="py-14 bg-scout-dark text-slate-200 space-y-12 border-b border-white/5">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-scout-yellow/10 text-scout-yellow text-xs font-bold uppercase tracking-wider border border-scout-yellow/30">
            Secțiune Părinți
          </div>
          <h2 className="font-quote text-2xl sm:text-4xl font-bold text-scout-cream">
            Parteneriatul dintre Familie și Haită
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Cercetășia este o completare a educației primite în familie. Aici găsiți toate informațiile despre uniformă, echipament de tabără, documente oficiale și răspunsuri la întrebările frecvente.
          </p>
        </div>

        {downloadSuccess && (
          <div className="p-4 bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 rounded-xl flex items-center gap-3 animate-fadeIn mb-6">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">Descărcare inițiată:</p>
              <p className="text-xs">{downloadSuccess} a fost pregătit pentru descărcare.</p>
            </div>
          </div>
        )}

        {/* 3 Pillars for Parents */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-scout-surface p-6 rounded-2xl border border-scout-border hover:border-scout-yellow/40 transition">
            <div className="w-12 h-12 rounded-xl bg-scout-yellow/10 text-scout-yellow flex items-center justify-center mb-4 border border-scout-yellow/20">
              <Shirt className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-white mb-2">Uniforma Cercetășească</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Uniforma elimină diferențele sociale, conferă simțul apartenenței la marea familie a Cercetașilor Europei și îl învață pe băiat grija pentru ținuta curată.
            </p>
            <a href="#uniforma-detalii" className="text-xs font-bold text-scout-yellow hover:underline inline-flex items-center gap-1">
              Vezi componența uniformei &rarr;
            </a>
          </div>

          <div className="bg-scout-surface p-6 rounded-2xl border border-scout-border hover:border-scout-yellow/40 transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/20">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-white mb-2">Siguranță & Asigurare</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Toate activitățile sunt acoperite de asigurarea asociației FSE. Liderii noștri sunt atestați prin tabere naționale de formare pedagogică și de prim ajutor.
            </p>
            <span className="text-xs font-bold text-emerald-300 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
              Standarde Europene UIGSE
            </span>
          </div>

          <div className="bg-scout-surface p-6 rounded-2xl border border-scout-border hover:border-scout-yellow/40 transition">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 border border-blue-500/20">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-white mb-2">Formarea Caracterului</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Îl ajutăm pe lupișor să își depășească egoismul („Lupișorul nu se ascultă pe sine însuși”), să fie ordonat, să-și facă patul și să fie un frate bun acasă.
            </p>
            <span className="text-xs font-bold text-blue-300 bg-blue-950/60 px-2.5 py-1 rounded-full border border-blue-500/30">
              Autonomie & Generozitate
            </span>
          </div>
        </div>

        {/* Uniform Breakdown */}
        <div id="uniforma-detalii" className="bg-scout-surface rounded-2xl p-6 sm:p-8 border border-scout-border mt-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/5">
            <div>
              <h3 className="font-quote text-2xl font-bold text-white">Componența Uniformei Oficiale</h3>
              <p className="text-xs sm:text-sm text-slate-400">Regulamentul vestimentar pentru Ceata „Sf. Anton” (Ramura Galbenă)</p>
            </div>
            <button 
              onClick={() => handleSimulatedDownload('Ghid_Cercetas_Uniforma_si_Insemne.pdf')}
              className="flex items-center gap-2 text-xs font-bold bg-scout-yellow hover:bg-yellow-300 text-scout-dark px-4 py-2.5 rounded-xl transition"
            >
              <Download className="w-4 h-4" />
              <span>Descarcă Ghid Uniformă (PDF)</span>
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {UNIFORM_ITEMS.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-scout-dark/60 border border-white/5">
                <div className="w-6 h-6 rounded-full bg-scout-yellow text-scout-dark text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">{item.item}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{item.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-yellow-950/30 border border-scout-yellow/30 text-xs text-yellow-200 flex items-start gap-3">
            <Compass className="w-5 h-5 text-scout-yellow flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Notă pentru părinții noilor înscriși:</span> În primele 2 luni de probă, este suficient ca băiatul să aibă bocanci decenți de munte și haine comode. Cămașa, bereta și eșarfa se achiziționează prin intermediul Cetei înaintea depunerii Promisiunii.
            </div>
          </div>
        </div>

        {/* Downloadable Documents */}
        <div className="bg-scout-surfaceLight text-white rounded-2xl p-6 sm:p-8 border border-scout-border">
          <div className="mb-6">
            <h3 className="font-quote text-2xl font-bold text-scout-cream">Documente & Formulare Utile</h3>
            <p className="text-sm text-slate-400">Descarcă, completează și semnează formularele necesare înainte de fiecare ieșire</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-scout-dark/60 p-4 rounded-xl border border-white/5 flex flex-col justify-between">
              <div>
                <FileText className="w-8 h-8 text-scout-yellow mb-2" />
                <h4 className="font-bold text-sm text-white">Acord Parental Ieșire</h4>
                <p className="text-xs text-slate-400 mt-1">Formularul standard de acord pentru deplasările de o zi sau de weekend.</p>
              </div>
              <button 
                onClick={() => handleSimulatedDownload('Acord_Parental_Iesire_Lupisori.pdf')}
                className="mt-4 flex items-center justify-center gap-1.5 bg-scout-yellow hover:bg-yellow-300 text-scout-dark py-2 px-3 rounded-lg text-xs font-bold transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Descarcă (PDF)</span>
              </button>
            </div>

            <div className="bg-scout-dark/60 p-4 rounded-xl border border-white/5 flex flex-col justify-between">
              <div>
                <FileText className="w-8 h-8 text-scout-yellow mb-2" />
                <h4 className="font-bold text-sm text-white">Fișa Medicală a Cercetașului</h4>
                <p className="text-xs text-slate-400 mt-1">Alergii, tratamente în curs, intoleranțe alimentare și vaccinări obligatorii.</p>
              </div>
              <button 
                onClick={() => handleSimulatedDownload('Fisa_Medicala_Cercetasi.pdf')}
                className="mt-4 flex items-center justify-center gap-1.5 bg-scout-yellow hover:bg-yellow-300 text-scout-dark py-2 px-3 rounded-lg text-xs font-bold transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Descarcă (PDF)</span>
              </button>
            </div>

            <div className="bg-scout-dark/60 p-4 rounded-xl border border-white/5 flex flex-col justify-between">
              <div>
                <FileText className="w-8 h-8 text-scout-yellow mb-2" />
                <h4 className="font-bold text-sm text-white">Lista Rucsacului de Tabără</h4>
                <p className="text-xs text-slate-400 mt-1">Checklist complet pentru cele 7 zile de tabără de vară la cort.</p>
              </div>
              <button 
                onClick={() => handleSimulatedDownload('Lista_Bagaj_Tabara_Vara_Lupisori.pdf')}
                className="mt-4 flex items-center justify-center gap-1.5 bg-scout-yellow hover:bg-yellow-300 text-scout-dark py-2 px-3 rounded-lg text-xs font-bold transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Descarcă (PDF)</span>
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-scout-surface rounded-2xl p-6 sm:p-8 border border-scout-border">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="w-6 h-6 text-scout-yellow" />
            <h3 className="font-quote text-2xl font-bold text-white">Întrebări Frecvente ale Părinților</h3>
          </div>

          <div className="space-y-3">
            {FAQ_PARENTS.map((item, idx) => (
              <div key={idx} className="border border-white/5 rounded-xl overflow-hidden bg-scout-dark/40">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-200">{item.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-scout-yellow flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="p-4 bg-scout-dark/90 text-sm text-slate-300 leading-relaxed border-t border-white/5">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
