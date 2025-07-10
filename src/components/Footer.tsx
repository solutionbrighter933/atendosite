import React from 'react';
import { Zap, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-cyan-500/20 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/LOGO.png" 
                alt="Atendos IA" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6">
              O futuro do atendimento chegou. Crie seu funcionário imortal hoje.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/atendos.ia?igsh=a2JlN3g4cDg3enpi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:solutionbrighter@gmail.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Produto</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => {
                    const section = document.querySelector('[data-section="agent-types"]');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  Recursos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const section = document.getElementById('integrations');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  Integrações
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const section = document.getElementById('pricing');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  Preços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const section = document.querySelector('[data-section="features"]');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  Demo
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Empresa</h4>
            <ul className="space-y-3">
              <li><a href="/sobre" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Sobre</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Cases</a></li>
            </ul>
          </div>

          <div></div>
        </div>

        <div className="pt-8 border-t border-cyan-500/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Atendos IA. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="/termos" className="hover:text-cyan-400 transition-colors duration-300">Termos de Uso</a>
            <a href="/privacidade" className="hover:text-cyan-400 transition-colors duration-300">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;