import React from 'react';
import { LEADERS } from '../constants';
import { Award, Phone, Mail } from 'lucide-react';

export const MetrizaSection: React.FC = () => {
  return (
    <div className="py-14 bg-scout-dark text-slate-200 border-b border-white/5">
      <div className="container mx-auto px-4 max-w-5xl space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-scout-yellow/10 text-scout-yellow text-xs font-bold uppercase tracking-wider border border-scout-yellow/20">
            Despre Noi • Metriza
          </div>
          <h2 className="font-quote text-2xl sm:text-4xl font-bold text-scout-cream">
            Bătrânii Lupi ai Junglei Seeonee
          </h2>
        </div>

        {/* Leaders Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {LEADERS.map((leader) => (
            <div
              key={leader.id}
              className="bg-scout-surface rounded-2xl p-6 border border-scout-border hover:border-scout-yellow/40 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={leader.avatar}
                    alt={leader.civilName}
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-scout-yellow/50 shadow-md flex-shrink-0"
                  />
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-scout-yellow text-scout-dark">
                      {leader.totemName}
                    </span>
                    <h3 className="font-quote font-bold text-lg sm:text-xl text-white mt-1">
                      {leader.civilName}
                    </h3>
                    <p className="text-xs font-semibold text-scout-yellow">
                      {leader.role}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-scout-dark/60 p-3.5 rounded-xl border border-white/5 text-xs italic text-slate-300 mb-4">
                  {leader.quote}
                </div>

                {/* Responsibilities */}
                <div className="space-y-1.5 mb-4">
                  <div className="text-[11px] font-bold uppercase text-slate-400">Responsabilități:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {leader.responsibilities.map((resp, i) => (
                      <span
                        key={i}
                        className="text-xs bg-white/5 text-slate-300 px-2.5 py-0.5 rounded-md font-medium border border-white/5"
                      >
                        {resp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact details */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs">
                {leader.phone && (
                  <a
                    href={`tel:${leader.phone}`}
                    className="flex items-center gap-1.5 text-slate-300 hover:text-scout-yellow font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5 text-scout-yellow" />
                    <span>{leader.phone}</span>
                  </a>
                )}
                {leader.email && (
                  <a
                    href={`mailto:${leader.email}`}
                    className="flex items-center gap-1.5 text-slate-300 hover:text-scout-yellow font-semibold"
                  >
                    <Mail className="w-3.5 h-3.5 text-scout-yellow" />
                    <span>{leader.email}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Formation Note */}
        <div className="bg-scout-surface text-white p-6 rounded-2xl border border-scout-border flex flex-col sm:flex-row items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-scout-yellow text-scout-dark flex items-center justify-center flex-shrink-0">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <h4 className="font-quote text-lg font-bold text-scout-cream">
              Formarea continuă a Liderilor FSE
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              Metriza Cetei Sf. Anton participă anual la taberele de atestare Macolin și Gilwell, asigurând standarde riguroase de protecție a copilului, prim ajutor autorizat și fidelitate față de metoda educativă autentică FSE.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
