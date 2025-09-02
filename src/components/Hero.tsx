import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Bot, Zap } from 'lucide-react';
import DiscountModal from './DiscountModal';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [showDiscountModal, setShowDiscountModal] = React.useState(false);

  useEffect(() => {
    const createParticles = () => {
      if (!particlesRef.current) return;
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particlesRef.current.appendChild(particle);
      }
    };

    createParticles();

    // Listen for fireworks event
    const handleFireworks = () => {
      if (titleRef.current) {
        // Change title text
        const originalHTML = titleRef.current.innerHTML;
        titleRef.current.innerHTML = `
          <span class="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent animate-gradient-text font-bold animate-title-glow">
            Parabénsss! Prepare-se para
          </span>
          <br />
          <span class="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-gradient-text font-bold animate-title-glow">
            destruir a concorrência!
          </span>
        `;
        
        // Add white glow effect
        titleRef.current.classList.add('title-celebration');
        
        // Revert after 3 seconds
        setTimeout(() => {
          if (titleRef.current) {
            titleRef.current.innerHTML = originalHTML;
            titleRef.current.classList.remove('title-celebration');
          }
        }, 3000);
      }
    };

    window.addEventListener('fireworks-celebration', handleFireworks);

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      const elements = heroRef.current.querySelectorAll('.parallax-element');
      elements.forEach((element, index) => {
        const speed = (index + 1) * 0.5;
        (element as HTMLElement).style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('fireworks-celebration', handleFireworks);
    };
  }, []);

  const handleCreateAgentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDiscountModal(true);
  };

  return (
    <>
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />
      
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-cyan-900/30" />
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="parallax-element mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            +1.784 Agentes IA Já Ativos Vendendo Sem Parar
          </div>
        </div>

        <div className="parallax-element mb-12">
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Seu Novo Funcionário
            </span>
            <br />
            <span className="text-white">
              Imortal Acaba de
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Nascer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Treine, Personalize e Coloque pra Vender Por Você. 
            <span className="text-cyan-400 font-semibold"> 24h por Dia. Sem Folga. Sem Drama.</span>
          </p>
        </div>

        <div className="parallax-element mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={handleCreateAgentClick}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold text-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 glow-effect group"
            >
              Criar Meu Agente IA
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button 
              onClick={() => {
                const integrationsSection = document.getElementById('integrations');
                if (integrationsSection) {
                  integrationsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Ver Demo em Ação
            </button>
          </div>
        </div>

        <div className="parallax-element">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Bot, title: 'Voz Clonada', desc: 'Fala com SUA voz' },
              { icon: Zap, title: 'Vendas 24/7', desc: 'Nunca para de vender' },
              { icon: Sparkles, title: 'IA Evolutiva', desc: 'Aprende seu tom' }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:border-cyan-500/40">
                <item.icon className="w-8 h-8 text-cyan-400 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
      </section>

      <DiscountModal 
        isOpen={showDiscountModal} 
        onClose={() => setShowDiscountModal(false)} 
      />
    </>
  );
};

export default Hero;