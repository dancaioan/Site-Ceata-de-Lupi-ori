import React, { useState } from 'react';
import { EVENTS } from '../constants';
import { ScoutEvent } from '../types';
import { 
  Calendar as CalendarIcon, 
  MapPin, 
  Clock, 
  CheckCircle, 
  PackageCheck 
} from 'lucide-react';

export const CalendarSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<ScoutEvent>(EVENTS[0]);
  const [rsvpState, setRsvpState] = useState<{ [id: string]: boolean }>({});
  const [rsvpNote, setRsvpNote] = useState<string | null>(null);

  const toggleRsvp = (eventId: string) => {
    setRsvpState(prev => {
      const isConfirmed = !prev[eventId];
      setRsvpNote(
        isConfirmed 
          ? "Prezență confirmată cu succes! Akela a fost înștiințat." 
          : "Prezență anulată. Vă rugăm să-l anunțați pe Akela prin telefon dacă e o urgență."
      );
      setTimeout(() => setRsvpNote(null), 4000);
      return { ...prev, [eventId]: isConfirmed };
    });
  };

  return (
    <div className="py-14 bg-scout-dark text-slate-200 border-b border-white/5">
      <div className="container mx-auto px-4 max-w-5xl space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-scout-yellow/10 text-scout-yellow text-xs font-bold uppercase tracking-wider border border-scout-yellow/30">
            Calendar Ieșiri
          </div>
          <h2 className="font-quote text-2xl sm:text-4xl font-bold text-scout-cream">
            Programul Activităților & Taberelor
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Urmărește datele ieșirilor de o zi, weekend-urile la munte și marea tabără de vară. Confirmă prezența lupișorului pentru asigurarea transportului.
          </p>
        </div>

        {rsvpNote && (
          <div className="p-4 bg-scout-surface border border-scout-yellow/40 text-yellow-300 rounded-xl flex items-center gap-3 animate-fadeIn">
            <CheckCircle className="w-5 h-5 text-scout-yellow flex-shrink-0" />
            <span className="text-sm font-semibold">{rsvpNote}</span>
          </div>
        )}

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left: Events List */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">
              Evenimente Programate ({EVENTS.length})
            </h3>
            {EVENTS.map((event) => {
              const isSelected = selectedEvent.id === event.id;
              const isRsvpd = !!rsvpState[event.id];
              return (
                <div
                  key={event.id}
                  onClick={() => setSelectedEvent(event)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-scout-surface text-white border-scout-yellow shadow-md'
                      : 'bg-scout-surface/50 hover:bg-scout-surface text-slate-300 border-scout-border'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className={`px-2 py-0.5 rounded-full font-bold ${
                      isSelected ? 'bg-scout-yellow text-scout-dark' : 'bg-white/5 text-slate-300'
                    }`}>
                      {event.type}
                    </span>
                    {isRsvpd && (
                      <span className="flex items-center gap-1 text-xs font-bold text-scout-yellow">
                        <CheckCircle className="w-3.5 h-3.5" />
                        Confirmat
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-sm sm:text-base mb-1 text-white">{event.title}</h4>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <CalendarIcon className="w-3.5 h-3.5 text-scout-yellow" />
                    <span>{event.date}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Selected Event Details Card */}
          <div className="lg:col-span-7 bg-scout-surface rounded-2xl p-6 sm:p-8 border border-scout-border shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-4">
                <div>
                  <span className="text-xs font-bold text-scout-yellow bg-scout-yellow/10 px-2.5 py-1 rounded-md border border-scout-yellow/30">
                    {selectedEvent.type}
                  </span>
                  <h3 className="font-quote text-2xl font-bold text-white mt-2">
                    {selectedEvent.title}
                  </h3>
                </div>
                <button
                  onClick={() => toggleRsvp(selectedEvent.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition shadow ${
                    rsvpState[selectedEvent.id]
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'bg-scout-yellow hover:bg-yellow-300 text-scout-dark'
                  }`}
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>
                    {rsvpState[selectedEvent.id] ? 'Participare Confirmată' : 'Confirmă Prezența'}
                  </span>
                </button>
              </div>

              {/* Quick stats row */}
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-scout-dark/60 rounded-xl flex items-center gap-2.5 border border-white/5">
                  <CalendarIcon className="w-4 h-4 text-scout-yellow" />
                  <div>
                    <div className="text-slate-400">Data:</div>
                    <div className="font-bold text-white">{selectedEvent.date}</div>
                  </div>
                </div>
                <div className="p-3 bg-scout-dark/60 rounded-xl flex items-center gap-2.5 border border-white/5">
                  <MapPin className="w-4 h-4 text-scout-yellow" />
                  <div>
                    <div className="text-slate-400">Locație:</div>
                    <div className="font-bold text-white">{selectedEvent.location}</div>
                  </div>
                </div>
                <div className="p-3 bg-scout-dark/60 rounded-xl flex items-center gap-2.5 border border-white/5">
                  <Clock className="w-4 h-4 text-scout-yellow" />
                  <div>
                    <div className="text-slate-400">Plecare:</div>
                    <div className="font-bold text-white">{selectedEvent.departureTime}</div>
                  </div>
                </div>
                <div className="p-3 bg-scout-dark/60 rounded-xl flex items-center gap-2.5 border border-white/5">
                  <Clock className="w-4 h-4 text-scout-yellow" />
                  <div>
                    <div className="text-slate-400">Întoarcere estimată:</div>
                    <div className="font-bold text-white">{selectedEvent.returnTime}</div>
                  </div>
                </div>
              </div>

              {/* Theme & description */}
              <div>
                <div className="text-xs font-bold uppercase text-slate-400 mb-1">Tema Activității:</div>
                <div className="font-semibold text-scout-yellow text-sm bg-scout-yellow/10 px-3 py-1.5 rounded-lg border border-scout-yellow/30">
                  {selectedEvent.theme}
                </div>
                <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>

              {/* Equipment list */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-white mb-2">
                  <PackageCheck className="w-4 h-4 text-scout-yellow" />
                  <span>Echipament Obligatoriu în Rucsac:</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedEvent.equipmentRequired.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs bg-scout-dark/60 p-2 rounded-lg text-slate-300 border border-white/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-scout-yellow"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>Înscrieri active: {selectedEvent.rsvpCount + (rsvpState[selectedEvent.id] ? 1 : 0)} lupișori</span>
              <span className="text-scout-yellow font-semibold">Contact: Akela (+40 774 575 087)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
