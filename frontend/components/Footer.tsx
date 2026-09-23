import React from 'react';
import { NavSection } from '../types';
import { TEXTUL_PROMISIUNII } from '../constants';
import { ExternalLink, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: NavSection) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-scout-darker text-white border-t border-scout-border/40 pt-12 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* 3 Columns matching the laptop screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-xs sm:text-sm text-slate-400">
          
          {/* Column 1: MENIU RAPID */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-scout-yellow">
              MENIU RAPID
            </h4>
            <ul className="space-y-1.5 text-slate-300 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition">
                  Acasă
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('parinti')} className="hover:text-white transition">
                  Secțiune părinți
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('lupisori')} className="hover:text-white transition">
                  Secțiune lupișori
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('albume')} className="hover:text-white transition">
                  Albume foto
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('calendar')} className="hover:text-white transition">
                  Calendar ieșiri
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('metriza')} className="hover:text-white transition">
                  Despre noi
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: TEXTUL PROMISIUNII */}
          <div className="md:col-span-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-scout-yellow">
              TEXTUL PROMISIUNII
            </h4>
            <p className="font-quote italic text-slate-300 text-xs sm:text-sm leading-relaxed max-w-lg">
              {TEXTUL_PROMISIUNII}
            </p>
          </div>

          {/* Column 3: DESPRE ASOCIAȚIE */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-scout-yellow">
              DESPRE ASOCIAȚIE
            </h4>
            <div className="space-y-2.5">
              <div>
                <a
                  href="https://cercetasii-muntilor.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-scout-yellow transition inline-flex items-center gap-2 text-xs font-medium"
                >
                  <img
                    src="https://cercetasii-muntilor.ro/uploads/sigla.svg"
                    alt="Sigla"
                    className="w-4 h-4 object-contain filter drop-shadow"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <span>Cercetașii Munților România</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div>
                <a
                  href="https://www.instagram.com/cercetasiimuntilorcluj?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-scout-yellow transition inline-flex items-center gap-2 text-xs font-medium"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Instagram @cercetasiimuntilorcluj</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line matching the photo */}
        <div className="pt-6 border-t border-scout-border/30 text-center text-[11px] text-slate-400">
          © {new Date().getFullYear()} Ceata de Lupișori „Sfântul Anton de Padova” • Cercetașii Munților. Toate drepturile rezervate.
        </div>
      </div>
    </footer>
  );
};
