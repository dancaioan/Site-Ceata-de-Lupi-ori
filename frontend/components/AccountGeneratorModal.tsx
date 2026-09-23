import React, { useState } from 'react';
import { UserSession } from '../types';
import { 
  X, 
  UserPlus, 
  Sparkles, 
  Check, 
  Copy, 
  Users, 
  ShieldCheck, 
  LogIn, 
  IdCard,
  RefreshCw
} from 'lucide-react';

interface AccountGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccountCreated: (role: UserSession['role'], name: string, sizaine?: string) => void;
}

export const AccountGeneratorModal: React.FC<AccountGeneratorModalProps> = ({
  isOpen,
  onClose,
  onAccountCreated
}) => {
  const [role, setRole] = useState<'parinte' | 'sef_ceata'>('parinte');
  const [fullName, setFullName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');

  // Generated credential state
  const [generatedAccount, setGeneratedAccount] = useState<{
    scoutId: string;
    username: string;
    tempPassword: string;
    name: string;
    role: UserSession['role'];
  } | null>(null);

  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    const name = fullName.trim() || (
      role === 'sef_ceata' 
        ? 'Lider Nou' 
        : 'Părinte Nou'
    );

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const cleanUsername = name.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 8) || 'cercetas';
    const rolePrefix = role === 'sef_ceata' ? 'LDR' : 'PAR';
    const scoutId = `FSE-${rolePrefix}-2025-${randomSuffix}`;
    const generatedUsername = `${cleanUsername}.${randomSuffix}`;
    const generatedPassword = `Scout#${randomSuffix}`;

    setGeneratedAccount({
      scoutId,
      username: generatedUsername,
      tempPassword: generatedPassword,
      name,
      role
    });
  };

  const handleCopyCredentials = () => {
    if (!generatedAccount) return;
    const text = `Cont Ceata Sf. Anton de Padova\nNume: ${generatedAccount.name}\nRol: ${generatedAccount.role === 'sef_ceata' ? 'Șef & Asistent Unitate' : 'Părinte'}\nID Scout: ${generatedAccount.scoutId}\nUtilizator: ${generatedAccount.username}\nParolă provizorie: ${generatedAccount.tempPassword}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleAutoLogin = () => {
    if (!generatedAccount) return;
    onAccountCreated(generatedAccount.role, generatedAccount.name);
    onClose();
  };

  const resetForm = () => {
    setGeneratedAccount(null);
    setFullName('');
    setEmailOrPhone('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#060B1A]/85 flex items-center justify-center p-3 sm:p-4 backdrop-blur-md animate-fadeIn">
      <div className="bg-scout-surface rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl flex flex-col border border-scout-yellow/40">
        
        {/* Header */}
        <div className="bg-scout-darker p-4 flex items-center justify-between text-white border-b border-scout-border/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-scout-yellow text-scout-dark flex items-center justify-center font-bold shadow-md">
              <UserPlus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-quote font-bold text-base sm:text-lg text-white">
                Generare Cont Utilizator
              </h3>
              <p className="text-[11px] text-slate-400">
                Creează instantaneu acces pentru părinți sau șefi și asistenți de unitate
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 bg-scout-dark/95 text-slate-200 overflow-y-auto max-h-[75vh]">
          {!generatedAccount ? (
            <form onSubmit={handleGenerate} className="space-y-4">
              {/* Role Selection - 2 options: Părinte & Șef & Asistent Unitate */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                  1. Alege Tipul de Utilizator:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setRole('parinte')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border flex flex-col items-center gap-1.5 transition ${
                      role === 'parinte'
                        ? 'bg-scout-yellow text-scout-dark border-scout-yellow shadow'
                        : 'bg-scout-surface text-slate-300 border-scout-border hover:bg-scout-surfaceLight'
                    }`}
                  >
                    <Users className="w-4 h-4" />
                    <span>Părinte</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRole('sef_ceata')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border flex flex-col items-center gap-1.5 transition ${
                      role === 'sef_ceata'
                        ? 'bg-scout-yellow text-scout-dark border-scout-yellow shadow'
                        : 'bg-scout-surface text-slate-300 border-scout-border hover:bg-scout-surfaceLight'
                    }`}
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Șef & Asistent Unitate</span>
                  </button>
                </div>
              </div>

              {/* Name Input */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                  2. Nume și Prenume *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={
                    role === 'parinte'
                      ? 'ex: Elena Ionescu'
                      : 'ex: George V. (Asistent Baloo)'
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-scout-border bg-scout-surface text-white text-sm focus:outline-none focus:ring-2 focus:ring-scout-yellow"
                />
              </div>

              {/* Email or Phone */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                  3. Email sau Număr de Telefon de Contact
                </label>
                <input
                  type="text"
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  placeholder="contact@exemplu.ro sau 07xxxxxxxx"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-scout-border bg-scout-surface text-white text-sm focus:outline-none focus:ring-2 focus:ring-scout-yellow"
                />
              </div>

              {/* Submit Generate Button */}
              <button
                type="submit"
                className="w-full mt-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-scout-yellow hover:bg-yellow-300 text-scout-dark font-extrabold text-sm shadow transition"
              >
                <Sparkles className="w-4 h-4" />
                <span>Generează Cont & Date de Acces</span>
              </button>
            </form>
          ) : (
            /* Generated Credentials Card */
            <div className="space-y-5 animate-fadeIn">
              <div className="p-4 rounded-xl bg-scout-surface border border-scout-yellow/50 space-y-3 relative">
                <div className="flex items-center justify-between border-b border-scout-border/60 pb-2">
                  <div className="flex items-center gap-2">
                    <IdCard className="w-5 h-5 text-scout-yellow" />
                    <span className="font-bold text-xs uppercase text-scout-yellow">
                      Card de Acces Membru
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-scout-darker px-2 py-0.5 rounded text-slate-300">
                    {generatedAccount.scoutId}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block">Nume:</span>
                    <span className="font-bold text-white text-sm">{generatedAccount.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Rol Atribuit:</span>
                    <span className="font-bold text-scout-yellow">
                      {generatedAccount.role === 'sef_ceata' ? 'Șef & Asistent Unitate' : 'Părinte'}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-scout-darker border border-scout-border/60">
                    <span className="text-slate-400 block text-[10px] uppercase">Utilizator:</span>
                    <span className="font-mono font-bold text-scout-yellow text-xs select-all">
                      {generatedAccount.username}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-scout-darker border border-scout-border/60">
                    <span className="text-slate-400 block text-[10px] uppercase">Parolă Provizorie:</span>
                    <span className="font-mono font-bold text-white text-xs select-all">
                      {generatedAccount.tempPassword}
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 italic">
                  *Datele au fost înregistrate. Puteți copia datele de conectare sau vă puteți autentifica direct.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  type="button"
                  onClick={handleCopyCredentials}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-scout-surface hover:bg-scout-surfaceLight border border-scout-border text-xs font-bold text-slate-200 transition"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Date Copiate!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-scout-yellow" />
                      <span>Copiază Datele</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleAutoLogin}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-scout-yellow hover:bg-yellow-300 text-scout-dark text-xs font-bold transition shadow"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Loghează-te Direct</span>
                </button>
              </div>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={resetForm}
                  className="text-xs text-slate-400 hover:text-scout-yellow inline-flex items-center gap-1.5 transition"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Generează alt cont</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
