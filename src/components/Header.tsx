import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#integrations"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group"
            >
              Recursos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group"
            >
              Preços
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group"
            >
              Cases
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="https://wa.me/5535987079368"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group"
            >
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a 
              href="https://www.atendos.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block px-6 py-2 text-cyan-400 border border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Login
            </a>
            <a 
              href="https://www.atendos.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 glow-effect"
            >
              Teste Grátis
            </a>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20">
          <nav className="container mx-auto px-6 py-4 space-y-4">
            <a
              href="#integrations"
              className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Recursos
            </a>
            <a
              href="#pricing"
              className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Preços
            </a>
            <a
              href="#testimonials"
              className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Cases
            </a>
            <a
              href="https://wa.me/5535987079368"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
            <a 
              href="https://www.atendos.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4 px-6 py-2 text-cyan-400 border border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 block text-center"
            >
              Login
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;