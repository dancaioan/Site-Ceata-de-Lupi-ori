import React, { useState } from 'react';
import { askBalooScoutAdvisor } from '../services/geminiService';
import { X, Sparkles, Send } from 'lucide-react';

interface BalooModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  sender: 'baloo' | 'user';
  text: string;
}

export const BalooAdvisorModal: React.FC<BalooModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'baloo',
      text: 'Mormăit prietenos! Eu sunt bătrânul urs Baloo, învățătorul Legii Junglei pentru Ceata Sfântul Anton de Padova. Cu ce te pot ajuta astăzi, micule vânător sau stimate părinte? Întreabă-mă despre Legea Haitei, cum se împachetează rucsacul, uniformă sau Cartea Junglei!'
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSend = async (textToSend?: string) => {
    const q = textToSend || inputQuery;
    if (!q.trim() || loading) return;

    const userMsg: Message = { sender: 'user', text: q };
    setMessages(prev => [...prev, userMsg]);
    setInputQuery('');
    setLoading(true);

    try {
      const answer = await askBalooScoutAdvisor(q);
      setMessages(prev => [...prev, { sender: 'baloo', text: answer }]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          sender: 'baloo',
          text: 'Vântul junglei a foșnit prea tare printre crengi... Te rog să mă întrebi din nou, frate lup!'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const sampleQuestions = [
    "Ce trebuie să conțină rucsacul de zi pentru o ieșire la pădure?",
    "Cum sună Legea Haitei și ce înseamnă pentru un copil?",
    "Cum se depune Marea Promisiune a lupișorului?",
    "Ce semnificație are salutul cu două degete?"
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#060B1A]/85 flex items-center justify-center p-3 sm:p-4 backdrop-blur-md animate-fadeIn">
      <div className="bg-scout-surface rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col h-[85vh] max-h-[680px] border border-scout-yellow/40">
        {/* Header */}
        <div className="bg-scout-darker p-4 flex items-center justify-between text-white border-b border-scout-yellow/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-scout-yellow flex items-center justify-center text-scout-dark font-extrabold shadow-md border-2 border-yellow-200">
              🐻
            </div>
            <div>
              <div className="font-quote font-bold text-base sm:text-lg text-white flex items-center gap-2">
                <span>Înțelepciunea lui Baloo</span>
                <span className="text-[10px] bg-scout-yellow text-scout-dark px-2 py-0.5 rounded-full font-bold">
                  AI Scout Guide
                </span>
              </div>
              <div className="text-[11px] text-scout-yellow">
                Sfetnicul cetei pentru Legea Junglei și viața de lupișor
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-scout-dark/95">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'baloo' && (
                <div className="w-7 h-7 rounded-full bg-scout-yellow text-scout-dark flex items-center justify-center text-xs flex-shrink-0 font-bold shadow-sm">
                  🐻
                </div>
              )}
              <div
                className={`max-w-[85%] sm:max-w-[75%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-sm ${
                  m.sender === 'user'
                    ? 'bg-scout-yellow text-scout-dark font-medium rounded-br-xs'
                    : 'bg-scout-surface text-slate-200 rounded-bl-xs border border-scout-border'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs text-yellow-300 bg-scout-surface border border-scout-yellow/30 p-2.5 rounded-xl w-fit">
              <Sparkles className="w-4 h-4 animate-spin text-scout-yellow" />
              <span>Baloo răsfoiește Cartea Junglei și chibzuiește...</span>
            </div>
          )}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-3 py-2 bg-scout-darker border-t border-scout-border/40 overflow-x-auto flex gap-1.5 no-scrollbar">
          {sampleQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="text-[11px] whitespace-nowrap bg-scout-surface hover:bg-scout-surfaceLight text-slate-300 hover:text-scout-yellow px-2.5 py-1 rounded-full border border-scout-border/60 transition flex-shrink-0"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Query Input */}
        <div className="p-3 bg-scout-surface border-t border-scout-border/50 flex items-center gap-2">
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Întreabă-l pe Baloo despre lupișori, uniforme, rucsac..."
            className="flex-1 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-scout-border focus:outline-none focus:ring-2 focus:ring-scout-yellow bg-scout-dark text-white"
          />
          <button
            onClick={() => handleSend()}
            disabled={loading || !inputQuery.trim()}
            className="p-2.5 rounded-xl bg-scout-yellow hover:bg-yellow-300 disabled:opacity-40 text-scout-dark font-bold transition shadow"
            title="Trimite întrebarea"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
