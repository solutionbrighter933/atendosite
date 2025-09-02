import React from 'react';
import { X, Gift, Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface DiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DiscountModal: React.FC<DiscountModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Vi a oferta de 50% OFF e gostaria de marcar uma reunião online rápida para conhecer melhor o Atendos IA!');
    window.open(`https://wa.me/5535987079368?text=${message}`, '_blank');
    onClose();
  };

  const handleCreateAccount = () => {
    window.open('https://www.atendos.com.br/', '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-cyan-500/30 rounded-2xl p-6 md:p-8 max-w-md w-full relative overflow-hidden animate-fade-in-up">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1),transparent_70%)]" />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="text-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 p-5 mx-auto mb-4 animate-pulse">
              <Gift className="w-10 h-10 text-white" />
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/50 rounded-full text-yellow-400 text-sm font-semibold backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Oferta Especial
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              50% OFF
            </span>
            <br />
            <span className="text-white text-xl md:text-2xl">
              em Qualquer Plano!
            </span>
          </h3>

          {/* Message */}
          <p className="text-gray-300 text-center mb-8 leading-relaxed">
            Antes de criar uma conta, 
            <span className="text-cyan-400 font-semibold"> ganhe 50% off em qualquer plano </span> 
             marcando uma reunião conosco online rápida!
          </p>

          {/* Benefits */}
          <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4 mb-6">
            <h4 className="text-white font-semibold mb-3 text-center">O que você ganha:</h4>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Gift className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">50% de desconto no primeiro ano</span>
              </div>
              <div className="flex items-center text-sm">
                <Calendar className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Reunião de 15 minutos apenas</span>
              </div>
              <div className="flex items-center text-sm">
                <Sparkles className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Setup personalizado gratuito</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleWhatsAppClick}
              className="w-full px-6 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 glow-effect flex items-center justify-center space-x-2"
            >
              <Calendar className="w-6 h-6" />
              <span>Marcar Reunião (50% OFF)</span>
              <ArrowRight className="w-6 h-6" />
            </button>
            
            <button
              onClick={handleCreateAccount}
              className="w-full px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Criar Conta Sem Desconto
            </button>
          </div>

          {/* Footer Note */}
          <div className="mt-4 text-center">
            <p className="text-gray-400 text-xs">
              Oferta válida apenas para novos clientes
            </p>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute top-4 right-8 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-8 left-6 w-1 h-1 bg-orange-400 rounded-full animate-ping opacity-40" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-12 left-4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping opacity-50" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
};

export default DiscountModal;