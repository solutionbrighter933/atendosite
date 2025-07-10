import React, { useEffect, useRef } from 'react';
import { Phone, MessageCircle, Calendar, Brain, Mic, Settings, Instagram, Send } from 'lucide-react';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      const elements = featuresRef.current.querySelectorAll('.feature-card');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Mic,
      title: 'Voz Clonada do Proprietário',
      description: 'Seu agente IA fala literalmente com SUA voz. Clientes pensam que estão falando com você pessoalmente.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Phone,
      title: 'Ligações Inteligentes',
      description: 'Faz e recebe ligações, qualifica leads, agenda reuniões e fecha vendas por telefone.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageCircle,
      title: 'Domínio Total das Mensagens',
      description: 'Responde DMs, stories, comentários e mensagens com a personalidade e tom exato do dono.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Calendar,
      title: 'Agenda Automática',
      description: 'Integra com Google Calendar e marca reuniões automaticamente baseado na sua disponibilidade.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Brain,
      title: 'IA Evolutiva',
      description: 'Aprende continuamente seu estilo, melhora as respostas e evolui como um funcionário real.',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: Settings,
      title: 'Prompts Infinitos',
      description: 'Customização total da personalidade. É como ter um cérebro completamente sob seu comando.',
      color: 'from-cyan-500 to-purple-500'
    },
    {
      icon: Instagram,
      title: 'Integrações Nativas',
      description: 'WhatsApp Business, Instagram Direct, Google - tudo integrado em um clique.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Send,
      title: 'Vendas em Piloto Automático',
      description: 'Qualifica leads, apresenta ofertas, contorna objeções e fecha vendas 24/7.',
      color: 'from-purple-500 to-cyan-500'
    }
  ];

  return (
    <section ref={featuresRef} data-section="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Seu Clone Digital
            </span>
            <br />
            <span className="text-white">de Alta Performance</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Não é só um chatbot. É literalmente você, clonado digitalmente, 
            trabalhando 24h por dia sem nunca cansar ou reclamar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card opacity-0 bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:border-cyan-500/40 group"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 font-semibold backdrop-blur-sm">
            <Brain className="w-5 h-5 mr-2" />
            +50 Integrações Disponíveis
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;