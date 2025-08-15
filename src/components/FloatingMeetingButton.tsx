import React, { useState, useEffect } from 'react';
import { Calendar, Phone, X, MessageCircle } from 'lucide-react';

const FloatingMeetingButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Sempre visível, mas pode adicionar lógica se necessário
      setIsVisible(true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de marcar uma reunião para conhecer melhor o Atendos IA. Podem me ajudar?');
    window.open(`https://wa.me/5535987079368?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded ? (
        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl p-6 shadow-2xl border border-cyan-500/30 backdrop-blur-sm max-w-sm animate-fade-in-up">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-6 h-6 text-white" />
              <h3 className="text-white font-bold text-lg">Reunião</h3>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-white/90 mb-6 leading-relaxed">
            Deseja marcar uma reunião conosco online ou presencial?
          </p>
          
          <div className="space-y-3">
            <button
              onClick={handleWhatsAppClick}
              className="w-full px-4 py-3 bg-green-500 hover:bg-green-400 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp - Online</span>
            </button>
            
            <button
              onClick={handleWhatsAppClick}
              className="w-full px-4 py-3 bg-blue-500 hover:bg-blue-400 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Presencial - Pouso Alegre/MG</span>
            </button>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-white/70 text-xs">
              Resposta em até 1 minuto!
            </p>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 rounded-full p-4 shadow-2xl border border-cyan-500/30 backdrop-blur-sm transition-all duration-300 transform hover:scale-110 glow-effect group"
        >
          <div className="flex items-center space-x-3">
            <Calendar className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            <span className="text-white font-semibold hidden sm:block">
              Marcar Reunião
            </span>
          </div>
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 animate-ping opacity-20"></div>
        </button>
      )}
    </div>
  );
};

export default FloatingMeetingButton;