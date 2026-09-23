import React, { useState } from 'react';
import { UserSession } from '../types';
import { 
  LogIn, 
  UserCheck, 
  ShieldCheck, 
  CheckCircle2, 
  Users
} from 'lucide-react';

interface AuthProps {
  session: UserSession;
  onLogin: (role: UserSession['role'], name: string, sizaine?: string) => void;
  onLogout: () => void;
}

export const AuthSection: React.FC<AuthProps> = ({ session, onLogin, onLogout }) => {
  const [selectedRole, setSelectedRole] = useState<'parinte' | 'sef_ceata'>('parinte');
  const [nameInput, setNameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalName = nameInput.trim() || (
      selectedRole === 'sef_ceata' 
        ? 'Akela (Bogdan)' 
        : 'Familia Popescu'
    );
    onLogin(selectedRole, finalName);
  };

  return (
    <div className="py-14 bg-scout-dark text-slate-200 border-b border-white/5">
      <div className="container mx-auto px-4 max-w-4xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-scout-yellow/10 text-scout-yellow text-xs font-bold uppercase tracking-wider border border-scout-yellow/30">
            Portal membri & metriză
          </div>
          <h2 className="font-quote text-2xl sm:text-4xl font-bold text-scout-cream">
            Logare în Platformă
          </h2>
        </div>

        {session.isLoggedIn ? (
          /* User Dashboard when Logged In */
          <div className="bg-scout-surface rounded-2xl p-6 sm:p-8 border border-scout-border shadow-sm space-y-6 animate-fadeIn">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-scout-yellow text-scout-dark">
                  Conectat ca {session.role === 'sef_ceata' ? 'Șef & Asistent Unitate' : 'Părinte'}
                </span>
                <h3 className="font-quote text-2xl font-bold text-white mt-1">
                  Bine ai venit, {session.name}!
                </h3>
              </div>
              <button
                onClick={onLogout}
                className="px-4 py-2 rounded-xl bg-red-950/60 hover:bg-red-900/80 text-red-200 font-bold text-xs border border-red-500/30 transition"
              >
                Deconectare din cont
              </button>
            </div>

            {/* Role-Specific Portal Content */}
            {session.role === 'sef_ceata' && (
              <div className="space-y-4">
                <h4 className="font-bold text-sm text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-scout-yellow" />
                  <span>Panou de Comandă — Akela & Metriza</span>
                </h4>
                <div className="grid sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-4 rounded-xl bg-scout-dark/70 border border-white/10">
                    <div className="font-bold text-scout-yellow text-xl">30 / 30</div>
                    <div className="text-slate-300 mt-1">Lupișori activi în carnet</div>
                  </div>
                  <div className="p-4 rounded-xl bg-scout-dark/70 border border-white/10">
                    <div className="font-bold text-emerald-400 text-xl">28 Confirmări</div>
                    <div className="text-slate-300 mt-1">Ieșirea la Pădurea Snagov</div>
                  </div>
                  <div className="p-4 rounded-xl bg-scout-dark/70 border border-white/10">
                    <div className="font-bold text-scout-cream text-xl">5 Echipe</div>
                    <div className="text-slate-300 mt-1">Sizaine active în Seeonee</div>
                  </div>
                </div>
              </div>
            )}

            {session.role === 'parinte' && (
              <div className="space-y-4">
                <h4 className="font-bold text-sm text-white flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-scout-yellow" />
                  <span>Panoul Părintelui</span>
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-white/5 bg-scout-dark/60 space-y-2">
                    <div className="font-bold text-xs uppercase text-slate-400">Fișă Medicală & Cotizație</div>
                    <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Fișă medicală depusă pe anul 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Cotizație asociație FSE achitată</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-white/5 bg-scout-dark/60 space-y-2">
                    <div className="font-bold text-xs uppercase text-slate-400">Următorul Eveniment</div>
                    <div className="text-xs font-bold text-white">Marea Ieșire la Pădurea Snagov</div>
                    <div className="text-xs text-slate-400">Plecare: Sâmbătă 08:30 din parcarea Bisericii</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Login Form with Quick Presets */
          <div className="bg-scout-surface rounded-2xl p-6 sm:p-8 border border-scout-border shadow-sm max-w-lg mx-auto">
            <form onSubmit={handleLoginSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                  Alege Rolul de Conectare:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedRole('parinte')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border flex flex-col items-center gap-1.5 transition ${
                      selectedRole === 'parinte'
                        ? 'bg-scout-yellow text-scout-dark border-scout-yellow shadow'
                        : 'bg-scout-dark/60 text-slate-300 border-white/5 hover:bg-white/5'
                    }`}
                  >
                    <Users className="w-4 h-4" />
                    <span>Părinte</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedRole('sef_ceata')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border flex flex-col items-center gap-1.5 transition ${
                      selectedRole === 'sef_ceata'
                        ? 'bg-scout-yellow text-scout-dark border-scout-yellow shadow'
                        : 'bg-scout-dark/60 text-slate-300 border-white/5 hover:bg-white/5'
                    }`}
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Șef & Asistent Unitate</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                  Nume Utilizator / Email
                </label>
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  placeholder={
                    selectedRole === 'sef_ceata'
                      ? 'akela@sfanton.ro'
                      : 'Familia Popescu'
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-scout-border bg-scout-dark/70 text-white text-sm focus:outline-none focus:ring-2 focus:ring-scout-yellow"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                  Parolă de acces
                </label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-scout-border bg-scout-dark/70 text-white text-sm focus:outline-none focus:ring-2 focus:ring-scout-yellow"
                />
                <span className="text-[11px] text-slate-400 mt-1 block">
                  *Akela va genera conturile de acces după confirmarea înscrierii în Ceată.
                </span>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-scout-yellow hover:bg-yellow-300 text-scout-dark font-extrabold text-sm shadow transition"
              >
                <LogIn className="w-4 h-4" />
                <span>Conectare în Portal</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
