import React, { useState, useEffect } from 'react';
import { Calendar, Phone, X, MessageCircle } from 'lucide-react';

const FloatingMeetingButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [showFireworks, setShowFireworks] = useState(false);

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

  const handleButtonClick = () => {
    setIsExpanded(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* Fireworks Animation */}
      {showFireworks && (
        <div className="fixed inset-0 pointer-events-none z-40">
          {/* Screen flash effect */}
          <div className="absolute inset-0 animate-screen-flash" />
          
          {/* Multiple firework explosions - More and bigger */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-firework-explosion"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${i * 0.2}s`
              }}
            >
              {/* Main explosion particles - More particles */}
              {[...Array(20)].map((_, j) => (
                <div
                  key={j}
                  className="absolute w-3 h-3 bg-white rounded-full animate-firework-particle-burst shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                  style={{
                    transform: `rotate(${j * 18}deg)`,
                    animationDelay: `${i * 0.2 + 0.3}s`
                  }}
                />
              ))}
              
              {/* Colored particles - More variety */}
              {[...Array(16)].map((_, k) => (
                <div
                  key={`color-${k}`}
                  className={`absolute w-2 h-2 rounded-full animate-firework-particle-burst shadow-lg ${
                    k % 4 === 0 ? 'bg-cyan-400' :
                    k % 4 === 1 ? 'bg-purple-400' :
                    k % 4 === 2 ? 'bg-pink-400' : 'bg-yellow-400'
                  }`}
                  style={{
                    transform: `rotate(${k * 22.5 + 11.25}deg)`,
                    animationDelay: `${i * 0.2 + 0.5}s`
                  }}
                />
              ))}
              
              {/* Star burst effect */}
              <div
                className="absolute w-8 h-8 animate-star-burst"
                style={{
                  animationDelay: `${i * 0.2 + 0.1}s`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-80" />
                <div className="absolute inset-1 bg-gradient-to-r from-white to-yellow-200 rounded-full opacity-60" />
              </div>
            </div>
          ))}
          
          {/* Enhanced sparkles - More and varied */}
          {[...Array(40)].map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className={`absolute rounded-full animate-sparkle-twinkle ${
                i % 3 === 0 ? 'w-2 h-2 bg-white' :
                i % 3 === 1 ? 'w-1.5 h-1.5 bg-cyan-400' : 'w-1 h-1 bg-purple-400'
              } shadow-[0_0_8px_currentColor]`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
          
          {/* Confetti falling */}
          {[...Array(25)].map((_, i) => (
            <div
              key={`confetti-${i}`}
              className={`absolute w-3 h-6 animate-confetti-fall ${
                i % 5 === 0 ? 'bg-cyan-400' :
                i % 5 === 1 ? 'bg-purple-400' :
                i % 5 === 2 ? 'bg-pink-400' :
                i % 5 === 3 ? 'bg-yellow-400' : 'bg-green-400'
              } rounded-sm shadow-lg`}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
          
          {/* Firework trails */}
          {[...Array(10)].map((_, i) => (
            <div
              key={`trail-${i}`}
              className="absolute w-1 h-20 bg-gradient-to-t from-transparent via-white to-transparent animate-firework-trail"
              style={{
                left: `${20 + Math.random() * 60}%`,
                bottom: '0',
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
          
          {/* Ring explosions */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`ring-${i}`}
              className="absolute border-4 border-white rounded-full animate-firework-explosion opacity-60"
              style={{
                left: `${25 + Math.random() * 50}%`,
                top: `${25 + Math.random() * 50}%`,
                width: `${40 + Math.random() * 60}px`,
                height: `${40 + Math.random() * 60}px`,
                animationDelay: `${i * 0.4}s`
              }}
            />
          ))}
        </div>
      )}

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
              <span>Online</span>
            </button>
            
            <button
              onClick={handleWhatsAppClick}
              className="w-full px-4 py-3 bg-blue-500 hover:bg-blue-400 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Presencial</span>
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
          onClick={handleButtonClick}
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