import React from 'react';
import { NavSection } from '../types';
import { HERO_STATS } from '../constants';

interface HeroProps {
  onNavigate: (section: NavSection) => void;
  onOpenBaloo: () => void;
}

export const HeroSection: React.FC<HeroProps> = () => {
  return (
    <section className="relative flex-1 flex flex-col justify-between overflow-hidden bg-scout-dark text-white min-h-[calc(100vh-80px-230px)] lg:min-h-[640px]">
      {/* Background Image: Crisp, clearly visible scout image without blue dimming filter */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ 
          backgroundImage: `url('https://cdn.phototourl.com/free/2026-09-22-d9ef3772-df88-48d5-86fe-8e4a6071d371.jpg')` 
        }}
      />

      {/* Subtle neutral vignette only at the very top and bottom edges for text clarity, without any blue color tint */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35 pointer-events-none" />

      {/* Top spacer to center content */}
      <div className="pt-6 sm:pt-10"></div>

      {/* Center Content: The Inspiring Jungle Quote structured strictly on 4 lines */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center my-auto py-8 space-y-4">
        <blockquote className="font-quote italic text-base sm:text-xl md:text-2xl lg:text-[27px] xl:text-[29px] leading-[1.3] text-[#FEFDF8] font-normal tracking-wide drop-shadow-[0_3px_8px_rgba(0,0,0,0.95)] px-2 max-w-5xl mx-auto">
          <span className="block">„Pedagogia acestei grupe de vârstă se bazează pe</span>
          <span className="block">Cartea Junglei. Prin fiecare poveste trăită, Mowgli,</span>
          <span className="block">sub îndrumarea Bătrânilor Lupi, descoperă valori,</span>
          <span className="block">virtuți, principii pozitive, menite să îi inspire pe lupișori.”</span>
        </blockquote>

        {/* Character lineup with Cartea Junglei in white */}
        <div className="pt-1 text-xs sm:text-sm font-semibold tracking-wider font-sans uppercase drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)] text-scout-yellow">
          Akela • Baloo • Bagheera • Sahi • Hathi • Chil • <span className="text-white">Cartea Junglei</span>
        </div>
      </div>

      {/* Bottom 4 Metric Cards - Styled in bleumarin translucent glass with yellow text */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 sm:pb-14 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {HERO_STATS.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-scout-darker/85 hover:bg-scout-darker/95 border border-scout-border/60 rounded-xl p-3.5 sm:p-4 text-center backdrop-blur-md shadow-xl transition-transform hover:-translate-y-0.5"
            >
              <div className="font-quote font-bold text-lg sm:text-xl lg:text-2xl text-scout-yellow">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-1 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
