import React, { useState } from 'react';
import { SIZAINE_LIST, LEGEA_HAITEI, MAXIMA_LUPISORILOR, SALUTUL, RUGACIUNEA } from '../constants';
import { 
  Smile, 
  BookOpen, 
  Music, 
  Sun, 
  Flame, 
  Heart,
  Compass,
  Star
} from 'lucide-react';

export const WolfcubsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'jungla' | 'sizaine' | 'stele' | 'cantece'>('jungla');

  return (
    <div className="py-14 bg-scout-dark text-slate-200 border-b border-white/5">
      <div className="container mx-auto px-4 max-w-5xl space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-scout-yellow/10 text-scout-yellow text-xs font-bold uppercase tracking-wider border border-scout-yellow/30">
            Secțiune Lupișori
          </div>
          <h2 className="font-quote text-2xl sm:text-4xl font-bold text-scout-cream">
            Vizuina Lupilor din Seeonee
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Bine ai venit în Haită, frate lup! Deschide bine ochii și urechile: aici găsești Legea Junglei, rugăciunea noastră, sizainele și cântecele de foc de tabără.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 bg-scout-surface p-1.5 rounded-2xl border border-scout-border max-w-2xl mx-auto">
          <button
            onClick={() => setActiveTab('jungla')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeTab === 'jungla'
                ? 'bg-scout-yellow text-scout-dark shadow'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Legea & Rugăciunea</span>
          </button>

          <button
            onClick={() => setActiveTab('sizaine')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeTab === 'sizaine'
                ? 'bg-scout-yellow text-scout-dark shadow'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Cele 5 Sizaine</span>
          </button>

          <button
            onClick={() => setActiveTab('stele')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeTab === 'stele'
                ? 'bg-scout-yellow text-scout-dark shadow'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Star className="w-4 h-4" />
            <span>Probele & Stelele</span>
          </button>

          <button
            onClick={() => setActiveTab('cantece')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeTab === 'cantece'
                ? 'bg-scout-yellow text-scout-dark shadow'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Music className="w-4 h-4" />
            <span>Cântece de Foc</span>
          </button>
        </div>

        {/* Tab 1: Jungla, Legea, Rugaciune */}
        {activeTab === 'jungla' && (
          <div className="grid md:grid-cols-2 gap-6 animate-fadeIn">
            {/* Legea Haitei Card */}
            <div className="bg-scout-surface rounded-2xl p-6 sm:p-8 border border-scout-border relative overflow-hidden">
              <div className="flex items-center gap-2 text-scout-yellow font-bold text-xs uppercase tracking-wider mb-2">
                <Sun className="w-4 h-4" />
                <span>Piatra de Temelie</span>
              </div>
              <h3 className="font-quote text-2xl font-bold text-white mb-4">Legea Haitei</h3>
              
              <div className="space-y-4">
                {LEGEA_HAITEI.map((lege, index) => (
                  <div key={index} className="flex items-start gap-3 bg-scout-dark/60 p-4 rounded-xl border border-white/5">
                    <span className="w-7 h-7 rounded-full bg-scout-yellow text-scout-dark font-bold text-sm flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </span>
                    <p className="font-bold text-slate-100 text-sm sm:text-base leading-snug">{lege}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/5">
                <div className="text-xs font-bold uppercase text-slate-400 mb-1">Maxima Lupișorului</div>
                <p className="font-quote italic text-base text-scout-cream font-medium leading-relaxed">
                  „{MAXIMA_LUPISORILOR}”
                </p>
              </div>

              <div className="mt-4 p-3 bg-scout-darker border border-white/10 text-white rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-scout-yellow uppercase font-semibold">Salutul Lupișorilor:</div>
                  <div className="font-bold text-base text-white">{SALUTUL}</div>
                </div>
                <div className="text-xs text-slate-400 italic">2 degete ridicate = urechile ciulite ale lupului</div>
              </div>
            </div>

            {/* Rugaciunea Card */}
            <div className="bg-scout-surfaceLight text-white rounded-2xl p-6 sm:p-8 border border-scout-border flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-scout-yellow font-bold text-xs uppercase tracking-wider mb-2">
                  <Heart className="w-4 h-4" />
                  <span>Legătura cu Cerul</span>
                </div>
                <h3 className="font-quote text-2xl font-bold text-scout-cream mb-4">Rugăciunea Lupișorilor</h3>
                
                <div className="bg-scout-dark/80 p-5 rounded-xl border border-white/10 text-sm sm:text-base leading-relaxed text-slate-200 font-medium whitespace-pre-line">
                  {RUGACIUNEA}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Ocrotește: Sf. Anton de Padova & Sf. Maria</span>
                <span className="font-bold text-scout-yellow">Din răsputeri!</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Sizaine */}
        {activeTab === 'sizaine' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-scout-surface p-6 rounded-2xl border border-scout-border">
              <h3 className="font-quote text-xl font-bold text-white mb-2">
                Ce este o Sizaină?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Ceata este împărțită în 5 mici familii numite <strong>Sizaine</strong>. Fiecare sizaină are culoarea sa (Alb, Gri, Negru, Maro, Roșcat), strigătul propriu și este condusă de un <strong>Sizenier</strong> — un lupișor mai mare care a învățat să aibă grijă de frații lui mai mici.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SIZAINE_LIST.map((sizaine, idx) => (
                <div key={idx} className="bg-scout-surface p-5 rounded-2xl border border-scout-border hover:border-scout-yellow/40 transition">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <span 
                        className="w-4 h-4 rounded-full border border-white/40 shadow-sm"
                        style={{ backgroundColor: sizaine.colorHex }}
                      />
                      <h4 className="font-bold text-sm sm:text-base text-white">{sizaine.name}</h4>
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-white/5 text-slate-300">
                      {sizaine.membersCount} lupi
                    </span>
                  </div>

                  <div className="space-y-2 text-xs text-slate-400">
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Deviza:</span>
                      <span className="font-bold text-scout-yellow italic">„{sizaine.motto}”</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Sizenier:</span>
                      <span className="font-semibold text-slate-200">{sizaine.sizenier}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Culoare:</span>
                      <span className="font-semibold text-slate-300">{sizaine.colorName}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Stelele lupilor */}
        {activeTab === 'stele' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-scout-surface p-6 rounded-2xl border border-scout-border">
                <div className="w-12 h-12 rounded-xl bg-scout-yellow/10 text-scout-yellow flex items-center justify-center font-bold text-lg mb-3 border border-scout-yellow/20">
                  1
                </div>
                <h4 className="font-bold text-base text-white">Ochii Deschiși (Tenderfoot)</h4>
                <p className="text-xs text-slate-400 mt-1 mb-3">Primul pas al noului lupișor în Haită</p>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>Cunoaște Legea Haitei și Salutul</li>
                  <li>Știe să-și împacheteze rucsacul</li>
                  <li>Își cunoaște Akela și tovarășii de sizaină</li>
                  <li>Face o faptă bună în fiecare zi</li>
                </ul>
              </div>

              <div className="bg-scout-surface p-6 rounded-2xl border-2 border-scout-yellow relative">
                <div className="absolute -top-3 right-4 bg-scout-yellow text-scout-dark px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase">
                  Ochiul Stâng Deschis
                </div>
                <div className="w-12 h-12 rounded-xl bg-scout-yellow text-scout-dark flex items-center justify-center font-bold text-lg mb-3">
                  <Star className="w-6 h-6 fill-scout-dark" />
                </div>
                <h4 className="font-bold text-base text-white">Prima Stea</h4>
                <p className="text-xs text-slate-400 mt-1 mb-3">După depunerea Promisiunii</p>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>Depune Marea Promisiune pe steag</li>
                  <li>Știe să facă 4 noduri esențiale</li>
                  <li>Igienă personală & curățenia colibei</li>
                  <li>Cunoaște animalele prietene din junglă</li>
                </ul>
              </div>

              <div className="bg-scout-surface p-6 rounded-2xl border border-scout-border">
                <div className="w-12 h-12 rounded-xl bg-yellow-400/20 text-yellow-300 flex items-center justify-center font-bold text-lg mb-3 border border-yellow-400/30">
                  <div className="flex">
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                  </div>
                </div>
                <h4 className="font-bold text-base text-white">A Doua Stea</h4>
                <p className="text-xs text-slate-400 mt-1 mb-3">Vânător deplin al junglei</p>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>Gătește cartofi la jar & ceai de pădure</li>
                  <li>Orientare după busolă și soare</li>
                  <li>Îndrumă un lupișor mai mic</li>
                  <li>Obține brevete de meșteșug (Metrize)</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Cantece */}
        {activeTab === 'cantece' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-scout-surface text-white p-6 rounded-2xl border border-scout-border">
              <div className="flex items-center gap-2 text-scout-yellow font-bold text-xs uppercase mb-2">
                <Flame className="w-4 h-4 text-scout-yellow" />
                <span>Cântecul de Deschidere al Cetei</span>
              </div>
              <h4 className="font-quote text-xl text-scout-cream font-bold mb-3">Lupișorii la Vânătoare</h4>
              <p className="text-xs sm:text-sm text-slate-300 font-mono whitespace-pre-line leading-relaxed">
{`Din stâncă-n stâncă noi sărim,
Cu pasul ager și cuminți,
Pe Akela noi îl cinstim,
Și suntem frați nebiruiți!

Refren:
Din răsputeri! Din răsputeri!
Noi azi cântăm ca și de ieri!
Un lupișor e vesel tot mereu,
Și-l preamărește sus pe Dumnezeu!`}
              </p>
            </div>

            <div className="bg-scout-surface text-white p-6 rounded-2xl border border-scout-border">
              <div className="flex items-center gap-2 text-scout-yellow font-bold text-xs uppercase mb-2">
                <Music className="w-4 h-4" />
                <span>Cântecul de Seară</span>
              </div>
              <h4 className="font-quote text-xl text-scout-cream font-bold mb-3">Focul se Stinge</h4>
              <p className="text-xs sm:text-sm text-slate-300 font-mono whitespace-pre-line leading-relaxed">
{`Focul s-a stins, jarul clipește,
Pădurea-n tihnă se odihnește.
Doamne Isuse, Fiu Preacurat,
Fii cu noi noaptea neîncetat.

Pace în haită, pace în cer,
Mâine la drum noi vom porni iar!`}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
