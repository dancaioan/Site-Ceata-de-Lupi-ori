import React, { useState } from 'react';
import { NavSection, UserSession } from '../types';
import { SCOUT_UNIT_NAME, SCOUT_SUBTITLE, SCOUT_GROUP_NAME } from '../constants';
import { User, Menu, X, Sparkles, LogOut, UserPlus } from 'lucide-react';

interface NavbarProps {
  currentSection: NavSection;
  onNavigate: (section: NavSection) => void;
  session: UserSession;
  onOpenBalooModal: () => void;
  onOpenGenerateAccountModal: () => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSection,
  onNavigate,
  session,
  onOpenBalooModal,
  onOpenGenerateAccountModal,
  onLogout
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoLoadError, setLogoLoadError] = useState(false);

  // Exact menu items matching the photo: Acasă, Secțiune părinți, Secțiune lupișori, Albume foto, Calendar ieșiri, Despre noi (Metriza), Contact
  const navItems = [
    { id: 'home' as NavSection, label: 'Acasă' },
    { id: 'parinti' as NavSection, label: 'Secțiune părinți' },
    { id: 'lupisori' as NavSection, label: 'Secțiune lupișori' },
    { id: 'albume' as NavSection, label: 'Albume foto' },
    { id: 'calendar' as NavSection, label: 'Calendar ieșiri' },
    { id: 'metriza' as NavSection, label: 'Despre noi' },
    { id: 'contact' as NavSection, label: 'Contact' },
  ];

  const handleItemClick = (id: NavSection) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-scout-dark/95 backdrop-blur-md border-b border-scout-border/40 text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Left - Official Scout Emblem Logo + Unit Title */}
          <div 
            onClick={() => handleItemClick('home')}
            className="cursor-pointer select-none py-1 group flex items-center gap-3.5"
          >
            {/* Official Logo of Cercetașii Munților */}
            <div className="relative flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-scout-surface/80 border border-scout-border p-1.5 flex items-center justify-center shadow-md group-hover:scale-105 group-hover:border-scout-yellow/60 transition-all duration-200">
              {!logoLoadError ? (
                <img
                  src="https://cercetasii-muntilor.ro/uploads/sigla.svg"
                  alt="Sigla Cercetașii Munților"
                  onError={() => setLogoLoadError(true)}
                  className="w-full h-full object-contain filter drop-shadow"
                />
              ) : (
                /* Elegant vector fallback if remote SVG blocked */
                <svg viewBox="0 0 100 100" className="w-full h-full fill-scout-yellow">
                  <path d="M50 5 L60 38 L95 38 L67 58 L78 92 L50 72 L22 92 L33 58 L5 38 L40 38 Z" fill="#FACC15" />
                  <circle cx="50" cy="50" r="14" fill="#0B132B" />
                  <path d="M50 40 L50 60 M40 50 L60 50" stroke="#FACC15" strokeWidth="3" strokeLinecap="round" />
                </svg>
              )}
            </div>

            {/* Title Text strictly on one line */}
            <div className="flex flex-col justify-center whitespace-nowrap">
              <div className="text-[11px] sm:text-xs font-bold tracking-wider text-slate-300 uppercase leading-tight whitespace-nowrap">
                {SCOUT_UNIT_NAME}
              </div>
              <div className="text-base sm:text-lg lg:text-xl font-extrabold tracking-wide text-scout-yellow group-hover:text-yellow-300 transition-colors leading-tight whitespace-nowrap">
                {SCOUT_SUBTITLE}
              </div>
              <div className="text-[10px] text-slate-400 font-normal leading-tight mt-0.5 whitespace-nowrap">
                {SCOUT_GROUP_NAME}
              </div>
            </div>
          </div>

          {/* Navigation Items Center - Pill active button in yellow */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`px-3.5 py-1.5 rounded-md text-xs xl:text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-scout-yellow text-scout-dark font-bold shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Side - Action Buttons: Generare Cont + Logare */}
          <div className="flex items-center gap-2">
            
            {/* Action button for generating accounts for users */}
            <button
              onClick={onOpenGenerateAccountModal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-scout-yellow hover:bg-yellow-300 text-scout-dark shadow-sm transition-all hover:scale-[1.02] border border-yellow-200/50"
              title="Generează cont nou pentru lupișor sau părinte"
            >
              <UserPlus className="w-3.5 h-3.5 text-scout-dark" />
              <span className="hidden sm:inline">Generare Cont</span>
              <span className="sm:hidden">Cont Nou</span>
            </button>

            {/* Logare Button */}
            {session.isLoggedIn ? (
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => handleItemClick('auth')}
                  className="flex items-center gap-2 bg-scout-surface hover:bg-scout-surfaceLight text-slate-200 px-3 py-1.5 rounded-md border border-scout-border/50 text-xs font-medium"
                >
                  <User className="w-3.5 h-3.5 text-scout-yellow" />
                  <span>{session.name}</span>
                </button>
                <button
                  onClick={onLogout}
                  title="Deconectare"
                  className="p-2 rounded-md bg-red-950/40 hover:bg-red-900/60 text-red-200 border border-red-500/20 text-xs transition"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleItemClick('auth')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-medium border transition-all ${
                  currentSection === 'auth'
                    ? 'bg-scout-surface text-scout-yellow border-scout-yellow font-bold'
                    : 'bg-scout-surface/80 hover:bg-scout-surface text-slate-200 border-scout-border/50'
                }`}
              >
                <User className="w-3.5 h-3.5 text-scout-yellow" />
                <span>Logare</span>
              </button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md bg-scout-surface text-slate-300 hover:text-white"
              aria-label="Meniu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-scout-surface border-b border-scout-border px-4 py-3 space-y-1">
          {navItems.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition ${
                  isActive
                    ? 'bg-scout-yellow text-scout-dark font-bold'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          <div className="pt-2 border-t border-scout-border/40 space-y-2">
            <button
              onClick={() => {
                onOpenGenerateAccountModal();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-md text-xs font-bold text-scout-dark bg-scout-yellow flex items-center gap-2"
            >
              <UserPlus className="w-4 h-4" />
              <span>Generare Cont Nou</span>
            </button>

            <button
              onClick={() => {
                onOpenBalooModal();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-md text-xs font-bold text-scout-yellow bg-scout-yellow/10 flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sfetnicul Baloo AI</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
