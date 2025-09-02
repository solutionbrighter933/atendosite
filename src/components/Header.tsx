import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import DiscountModal from './DiscountModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDiscountModal, setShowDiscountModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionSelector: string) => {
    const section = document.querySelector(sectionSelector);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleTesteFreeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDiscountModal(true);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <img 
              src="/LOGO.png" 
              alt="Atendos IA" 
              className="h-10 w-auto group-hover:scale-110 transition-all duration-300"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('#integrations')}
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group px-3 py-2"
            >
              Recursos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </button>
            
            <button
              onClick={() => scrollToSection('#pricing')}
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group px-3 py-2"
            >
              Preços
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </button>
            
            <button
              onClick={() => scrollToSection('#testimonials')}
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group px-3 py-2"
            >
              Cases
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </button>
            
            <a
              href="/sobre"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group px-3 py-2"
            >
              Sobre nós
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
            
            <div className="h-6 w-px bg-gray-600 mx-2" />
            
            <button
              onClick={() => scrollToSection('[data-section="atendos-meeting"]')}
              className="text-gray-300 hover:text-white transition-all duration-300 relative group px-3 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 rounded-lg backdrop-blur-sm overflow-hidden"
              style={{
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.1)',
                animation: 'whiteGlow 2s ease-in-out infinite alternate'
              }}
            >
              {/* White glow effects */}
              <div className="absolute inset-0 bg-white/5 opacity-30 group-hover:opacity-50 transition-opacity duration-500 rounded-lg"></div>
              <div className="absolute inset-0 bg-white/10 blur-md animate-pulse opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-lg"></div>
              
              {/* Content */}
              <div className="relative z-10">
              <span className="font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-text">Meeting</span>
              </div>
              
              {/* White floating particles */}
              <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full animate-ping opacity-60"></div>
              <div className="absolute bottom-1 right-2 w-0.5 h-0.5 bg-white rounded-full animate-ping opacity-40" style={{animationDelay: '0.5s'}}></div>
              
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
            </button>
            
            <button
              onClick={() => scrollToSection('[data-section="b2b-lead-generator"]')}
              className="text-gray-300 hover:text-white transition-all duration-300 relative group px-3 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/50 rounded-lg backdrop-blur-sm overflow-hidden"
              style={{
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.1)',
                animation: 'whiteGlow 2s ease-in-out infinite alternate'
              }}
            >
              {/* White glow effects */}
              <div className="absolute inset-0 bg-white/5 opacity-30 group-hover:opacity-50 transition-opacity duration-500 rounded-lg"></div>
              <div className="absolute inset-0 bg-white/10 blur-md animate-pulse opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-lg"></div>
              
              {/* Content */}
              <div className="relative z-10">
              <span className="font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient-text">Leadsgen</span>
              </div>
              
              {/* White floating particles */}
              <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full animate-ping opacity-60"></div>
              <div className="absolute bottom-1 right-2 w-0.5 h-0.5 bg-white rounded-full animate-ping opacity-40" style={{animationDelay: '0.5s'}}></div>
              
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4">
              <a 
                href="https://www.atendos.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-cyan-400 border border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Login
              </a>
              <button
                onClick={handleTesteFreeClick}
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 glow-effect"
              >
                Teste Grátis
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="flex lg:hidden items-center space-x-3">
              <a 
                href="https://www.atendos.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-cyan-400 border border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 text-sm font-semibold"
              >
                Login
              </a>
              
              <button
                onClick={() => scrollToSection('[data-section="atendos-meeting"]')}
                className="px-3 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 rounded-full backdrop-blur-sm overflow-hidden relative group"
                style={{
                  boxShadow: '0 0 15px rgba(255, 255, 255, 0.2), inset 0 0 15px rgba(255, 255, 255, 0.05)',
                  animation: 'whiteGlow 2s ease-in-out infinite alternate'
                }}
              >
                <div className="absolute inset-0 bg-white/5 opacity-30 group-hover:opacity-50 transition-opacity duration-500 rounded-full"></div>
                <span className="relative z-10 font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-text text-sm">
                  Meeting
                </span>
              </button>
              
              <button
                onClick={() => scrollToSection('[data-section="b2b-lead-generator"]')}
                className="px-3 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/50 rounded-full backdrop-blur-sm overflow-hidden relative group"
                style={{
                  boxShadow: '0 0 15px rgba(255, 255, 255, 0.2), inset 0 0 15px rgba(255, 255, 255, 0.05)',
                  animation: 'whiteGlow 2s ease-in-out infinite alternate'
                }}
              >
                <div className="absolute inset-0 bg-white/5 opacity-30 group-hover:opacity-50 transition-opacity duration-500 rounded-full"></div>
                <span className="relative z-10 font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient-text text-sm">
                  Leadsgen
                </span>
              </button>
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-cyan-400 hover:text-cyan-300 transition-colors duration-300 relative group"
            >
              <div className="relative p-2">
                {/* Animated white glow around menu icon */}
                <div className="absolute inset-0 bg-white/10 rounded-lg blur-md animate-pulse opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-lg"></div>
                
                {/* Menu icon with custom lines */}
                {isMenuOpen ? (
                  <X size={24} className="relative z-10 text-white" />
                ) : (
                  <div className="relative z-10 w-6 h-6 flex flex-col justify-center space-y-1">
                    <div className="w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-white rounded-full animate-gradient-text"></div>
                    <div className="w-6 h-0.5 bg-gradient-to-r from-white to-purple-400 rounded-full animate-gradient-text" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-6 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-gradient-text" style={{animationDelay: '1s'}}></div>
                  </div>
                )}
                
                {/* White floating particles */}
                <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full animate-ping opacity-40"></div>
                <div className="absolute bottom-1 left-1 w-0.5 h-0.5 bg-white rounded-full animate-ping opacity-30" style={{animationDelay: '0.7s'}}></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20 animate-fade-in-up">
          <nav className="container mx-auto px-6 py-6 space-y-4">
            {/* Main Navigation */}
            <div className="space-y-3 mb-6">
              <h4 className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Navegação Principal</h4>
              <button
                onClick={() => scrollToSection('#integrations')}
                className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-white/5"
              >
                Recursos
              </button>
              <button
                onClick={() => scrollToSection('#pricing')}
                className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-white/5"
              >
                Preços
              </button>
              <button
                onClick={() => scrollToSection('#testimonials')}
                className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-white/5"
              >
                Cases
              </button>
              <a
                href="/sobre"
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre nós
              </a>
            </div>
            
            {/* Featured Products */}
            <div className="space-y-4">
              <h4 className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Features Premium</h4>
              
              {/* Atendos Meeting - Highlighted */}
              <button
                onClick={() => scrollToSection('[data-section="atendos-meeting"]')}
                className="block w-full text-left relative group"
              >
                <div className="relative bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50 rounded-xl p-4 backdrop-blur-sm overflow-hidden">
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-xl animate-pulse"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-2 shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM5 8a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg group-hover:text-purple-300 transition-colors duration-300">
                          <span className="font-bold bg-gradient-to-r from-purple-400 via-white to-pink-400 bg-clip-text text-transparent animate-gradient-text">Atendos Meeting</span>
                        </div>
                        <div className="text-purple-300 text-xs font-medium">
                          Notetaker com IA
                        </div>
                      </div>
                    </div>
                    
                    {/* Animated text glow */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="text-white font-bold text-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-sm">
                        Atendos Meeting
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60"></div>
                  <div className="absolute bottom-3 right-4 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-40" style={{animationDelay: '0.5s'}}></div>
                </div>
              </button>
              
              {/* Atendos Leadsgen - Highlighted */}
              <button
                onClick={() => scrollToSection('[data-section="b2b-lead-generator"]')}
                className="block w-full text-left relative group"
              >
                <div className="relative bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/50 rounded-xl p-4 backdrop-blur-sm overflow-hidden">
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-xl animate-pulse"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 p-2 shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg group-hover:text-blue-300 transition-colors duration-300">
                          <span className="font-bold bg-gradient-to-r from-blue-400 via-white to-cyan-400 bg-clip-text text-transparent animate-gradient-text">Atendos Leadsgen</span>
                        </div>
                        <div className="text-blue-300 text-xs font-medium">
                          Gerador de Leads B2B
                        </div>
                      </div>
                    </div>
                    
                    {/* Animated text glow */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="text-white font-bold text-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-sm">
                        Atendos Leadsgen
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
                  <div className="absolute bottom-3 right-4 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-40" style={{animationDelay: '0.5s'}}></div>
                </div>
              </button>
            </div>
            
            <div className="pt-4 border-t border-gray-700">
              <button
                onClick={handleTesteFreeClick}
                className="block w-full text-center px-6 py-3 text-cyan-400 border border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                Teste Grátis
              </button>
            </div>
          </nav>
        </div>
      )}
      </header>
      
      <DiscountModal 
        isOpen={showDiscountModal} 
        onClose={() => setShowDiscountModal(false)} 
      />
    </>
  );
};

export default Header;