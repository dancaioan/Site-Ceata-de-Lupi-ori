import React, { useState } from 'react';
import { SCOUT_PARISH } from '../constants';
import { Mail, Phone, MapPin, Send, CheckCircle2, Globe } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '9',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-14 bg-scout-dark text-slate-200 border-b border-white/5">
      <div className="container mx-auto px-4 max-w-5xl space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-scout-yellow/10 text-scout-yellow text-xs font-bold uppercase tracking-wider border border-scout-yellow/30">
            Contact & Înscrieri
          </div>
          <h2 className="font-quote text-2xl sm:text-4xl font-bold text-scout-cream">
            FORMULAR DE CONTACT
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Dorești să-ți înscrii băiatul în Ceata de Lupișori sau<br />
            ai o întrebare pentru Akela? Trimite-ne un mesaj aici!
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Info Side */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-scout-surface p-6 rounded-2xl border border-scout-border shadow-sm space-y-4">
              <h3 className="font-quote font-bold text-xl text-white">
                Informații de Contact
              </h3>

              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-scout-yellow flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Sediu:</strong>
                    <span>{SCOUT_PARISH}</span>
                    <span className="block text-xs text-slate-400">Piața Cipariu, Cluj-Napoca</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-scout-yellow flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Telefon Akela (Șef de Unitate):</strong>
                    <span>+40 774 575 087</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-scout-yellow flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Email:</strong>
                    <span>akelalupacmcj@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <a
                  href="https://cercetasii-muntilor.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold text-scout-yellow hover:underline"
                >
                  <Globe className="w-4 h-4" />
                  <span>Website ACM: cercetasii-muntilor.ro &rarr;</span>
                </a>
              </div>
            </div>

            <div className="bg-scout-surfaceLight text-white p-6 rounded-2xl border border-scout-border">
              <h4 className="font-quote font-bold text-lg text-scout-cream">
                Vârsta de Înscriere
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Ramura Galbenă (Lupișori) primește băieți de 8-12 ani. După vârsta de 12 ani, cercetașul face pasul la Trupă (Ramura Verde).
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:col-span-7 bg-scout-surface p-6 sm:p-8 rounded-2xl border border-scout-border shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-quote text-2xl font-bold text-white">
                  Mesaj trimis cu succes!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Mulțumim, {formData.parentName}! Akela sau unul dintre liderii Cetei Sf. Anton vă va contacta în cel mai scurt timp pentru detalii despre următoarea reuniune.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-scout-yellow text-scout-dark text-xs font-bold hover:bg-yellow-300 transition"
                >
                  Trimite alt mesaj
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-quote font-bold text-xl text-white mb-2">
                  Formular de Înscriere / Contact
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Nume Părinte *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="ex: Mihai Popescu"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-scout-border bg-scout-dark/70 text-white text-sm focus:outline-none focus:ring-2 focus:ring-scout-yellow"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Telefon Părinte *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="07xxxxxxxx"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-scout-border bg-scout-dark/70 text-white text-sm focus:outline-none focus:ring-2 focus:ring-scout-yellow"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="adresa@exemplu.ro"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-scout-border bg-scout-dark/70 text-white text-sm focus:outline-none focus:ring-2 focus:ring-scout-yellow"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Prenume Băiat
                      </label>
                      <input
                        type="text"
                        value={formData.childName}
                        onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                        placeholder="ex: Andrei"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-scout-border bg-scout-dark/70 text-white text-sm focus:outline-none focus:ring-2 focus:ring-scout-yellow"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Vârstă
                      </label>
                      <select
                        value={formData.childAge}
                        onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-scout-border bg-scout-dark text-white text-sm focus:outline-none focus:ring-2 focus:ring-scout-yellow"
                      >
                        <option value="8">8 ani</option>
                        <option value="9">9 ani</option>
                        <option value="10">10 ani</option>
                        <option value="11">11 ani</option>
                        <option value="12">12 ani</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                    Mesaj / Întrebare pentru Lideri
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cum putem lua legătura sau când putem participa la prima ședință de probă?"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-scout-border bg-scout-dark/70 text-white text-sm focus:outline-none focus:ring-2 focus:ring-scout-yellow"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-scout-yellow hover:bg-yellow-300 text-scout-dark font-extrabold text-sm shadow transition"
                >
                  <Send className="w-4 h-4" />
                  <span>Trimite Mesajul Către Akela</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
