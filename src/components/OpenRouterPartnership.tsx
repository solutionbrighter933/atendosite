import React from 'react';
import { Brain, ArrowRight } from 'lucide-react';
import DiscountModal from './DiscountModal';

const OpenRouterPartnership = () => {
  const [showDiscountModal, setShowDiscountModal] = React.useState(false);

  const handleCreateAgentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDiscountModal(true);
  };

  const agentTypes = [
    {
      id: 'vendedor',
      name: 'Agente Vendedor',
      color: 'from-green-500 to-emerald-600',
      icon: () => (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
        </svg>
      )
    },
    {
      id: 'suporte',
      name: 'Agente de Suporte',
      color: 'from-blue-500 to-cyan-600',
      icon: () => (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
        </svg>
      )
    },
    {
      id: 'atendimento',
      name: 'Agente de Atendimento',
      color: 'from-purple-500 to-pink-600',
      icon: () => (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      id: 'gestor',
      name: 'Agente Gestor',
      color: 'from-yellow-500 to-orange-600',
      icon: () => (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      id: 'interativo',
      name: 'Agente Interativo',
      color: 'from-cyan-500 to-purple-600',
      icon: () => (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      id: 'personalizado',
      name: 'Agente Personalizado',
      color: 'from-red-500 to-pink-600',
      icon: () => (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
        </svg>
      )
    }
  ];

  return (
    <>
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-blue-900/20" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white mb-4">
                Monte Sua Equipe dos Sonhos
              </h3>
              <div className="mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold mb-4 backdrop-blur-sm">
                  <Brain className="w-4 h-4 mr-2" />
                  Parceria Exclusiva com Open Router
                </div>
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/40 rounded-xl p-4 mb-6 backdrop-blur-sm">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 p-2 mr-3">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-bold text-white">Open Router Partnership</span>
                  </div>
                  <p className="text-green-400 font-semibold text-lg">
                    Acesso a mais de <span className="text-2xl text-white">400+ modelos de IA</span> diferentes!
                  </p>
                  <p className="text-gray-300 text-sm mt-2">
                    Anthropic, OpenAI, Google, Meta, Mistral, Cohere e dezenas de outras empresas
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-cyan-400 mr-3" />
                <span className="text-lg text-gray-300">
                  Exemplos: <span className="text-green-400 font-semibold">GPT-5</span> • 
                  <span className="text-orange-400 font-semibold"> Claude 3.5 Sonnet</span> • 
                  <span className="text-blue-400 font-semibold"> Gemini 2.5 Pro</span> • 
                  <span className="text-purple-400 font-semibold"> Grok-4</span> • 
                  <span className="text-cyan-400 font-semibold"> Llama 3</span> • 
                  <span className="text-pink-400 font-semibold"> +395 outros</span>
                </span>
              </div>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto text-lg">
                <span className="text-white font-semibold">Você escolhe o modelo ideal para cada agente!</span> 
                <span className="text-cyan-400 font-semibold"> Flexibilidade total, resultados extraordinários.</span>
              </p>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-5xl mx-auto mb-8">
                {agentTypes.map((agent) => (
                  <div key={agent.id} className="text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${agent.color} p-4 mx-auto mb-2`}>
                      <agent.icon />
                    </div>
                    <div className="text-sm text-gray-300">{agent.name}</div>
                  </div>
                ))}
              </div>
              <a
                href="#"
                onClick={handleCreateAgentClick}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-bold text-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 glow-effect inline-flex items-center space-x-2"
              >
                <span>Criar Minha Equipe de Agentes IA</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
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

export default OpenRouterPartnership;