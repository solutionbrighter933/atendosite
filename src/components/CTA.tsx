import React from 'react';
import { ArrowRight, Zap, Clock, Shield } from 'lucide-react';
import DiscountModal from './DiscountModal';

const CTA = () => {
  const [showDiscountModal, setShowDiscountModal] = React.useState(false);

  const handleCreateAgentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDiscountModal(true);
  };

  return (
    <>
      <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-purple-900/30 to-pink-900/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Pare de Perder</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Dinheiro Dormindo
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Enquanto você dorme, seu concorrente está vendendo.
            <br />
            <span className="text-cyan-400 font-semibold">Seu agente IA trabalha 24h. Ele não.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button
              onClick={handleCreateAgentClick}
              className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-bold text-xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 glow-effect group"
            >
              Criar Agente IA Agora
              <ArrowRight className="inline-block ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <div className="text-gray-400 text-sm">
              Sem setup complexo • Sem mensalidade inicial
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <Zap className="w-8 h-8 text-cyan-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Setup em 5 Minutos</h3>
              <p className="text-gray-400 text-sm">Conecte, treine e coloque pra funcionar</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <Clock className="w-8 h-8 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Trabalha 24/7</h3>
              <p className="text-gray-400 text-sm">Nunca dorme, nunca reclama, nunca pede aumento</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-pink-500/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <Shield className="w-8 h-8 text-pink-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Teste Grátis 14 Dias</h3>
              <p className="text-gray-400 text-sm">Sem compromisso, sem cartão de crédito</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">
              Junte-se a mais de 80 empresas que já descobriram o futuro com a Atendos IA
            </p>
            <div className="flex justify-center items-center space-x-4 text-xs text-gray-500">
              <span>✓ Integração instantânea</span>
              <span>✓ Suporte 24/7</span>
              <span>✓ Garantia de resultado</span>
            </div>
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

export default CTA;