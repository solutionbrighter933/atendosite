import React, { useState, useEffect } from 'react';
import { 
  Truck, 
  ShoppingBag, 
  MapPin, 
  Clock, 
  CheckCircle, 
  MessageCircle, 
  CreditCard, 
  Users, 
  Zap,
  Play,
  Pause,
  ArrowRight,
  Phone,
  Store,
  User,
  Package,
  DollarSign,
  Bell
} from 'lucide-react';

const SmartDelivery = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAnimating) {
      interval = setInterval(() => {
        setCurrentStep(prev => (prev + 1) % 8);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isAnimating]);

  const startAnimation = () => {
    setIsAnimating(true);
    setCurrentStep(0);
  };

  const stopAnimation = () => {
    setIsAnimating(false);
    setCurrentStep(0);
  };

  const deliverySteps = [
    {
      id: 'order',
      title: 'Cliente Faz Pedido',
      description: 'WhatsApp ou Instagram',
      icon: MessageCircle,
      position: { x: 15, y: 25 },
      color: 'from-green-500 to-emerald-600',
      detail: '"Quero 2 pizzas margherita e 1 coca-cola"'
    },
    {
      id: 'ai-process',
      title: 'IA Processa Pedido',
      description: 'Entende e organiza automaticamente',
      icon: Zap,
      position: { x: 35, y: 10 },
      color: 'from-purple-500 to-pink-600',
      detail: 'Pedido #1234 criado no sistema'
    },
    {
      id: 'payment',
      title: 'Link de Pagamento',
      description: 'Enviado automaticamente',
      icon: CreditCard,
      position: { x: 65, y: 10 },
      color: 'from-blue-500 to-cyan-600',
      detail: 'PIX/Cartão - R$ 45,90'
    },
    {
      id: 'kitchen',
      title: 'Cozinha Notificada',
      description: 'Pedido vai para produção',
      icon: Store,
      position: { x: 85, y: 25 },
      color: 'from-orange-500 to-red-600',
      detail: 'Tempo estimado: 25 minutos'
    },
    {
      id: 'motoboy',
      title: 'Motoboy Avisado',
      description: 'Notificação automática',
      icon: Truck,
      position: { x: 85, y: 50 },
      color: 'from-yellow-500 to-orange-600',
      detail: 'João - Disponível para entrega'
    },
    {
      id: 'tracking',
      title: 'Cliente Acompanha',
      description: 'Updates em tempo real',
      icon: MapPin,
      position: { x: 65, y: 75 },
      color: 'from-cyan-500 to-blue-600',
      detail: 'Pedido saiu para entrega - 15 min'
    },
    {
      id: 'delivery',
      title: 'Entrega Realizada',
      description: 'Confirmação automática',
      icon: CheckCircle,
      position: { x: 35, y: 75 },
      color: 'from-green-500 to-emerald-600',
      detail: 'Entregue às 19:45'
    },
    {
      id: 'invoice',
      title: 'Nota Fiscal Gerada',
      description: 'Emissão automática',
      icon: DollarSign,
      position: { x: 15, y: 50 },
      color: 'from-purple-500 to-pink-600',
      detail: 'NF #001234 enviada por email'
    }
  ];

  const features = [
    {
      icon: MessageCircle,
      title: 'Pedidos por WhatsApp/Instagram',
      description: 'Cliente faz pedido naturalmente, IA entende tudo automaticamente',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Zap,
      title: 'Processamento Inteligente',
      description: 'IA organiza pedidos, calcula preços e gerencia estoque em tempo real',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: CreditCard,
      title: 'Pagamento Automático',
      description: 'Links de pagamento enviados instantaneamente (PIX, cartão, boleto)',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: DollarSign,
      title: 'Nota Fiscal Automática',
      description: 'Emissão instantânea de NF após confirmação do pagamento',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Store,
      title: 'Gestão da Cozinha/Estoque',
      description: 'Funcionários recebem pedidos organizados com prioridades e tempos',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Truck,
      title: 'Logística de Entrega',
      description: 'Motoboys notificados automaticamente com rotas otimizadas',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold mb-6 backdrop-blur-sm">
            <Truck className="w-4 h-4 mr-2" />
            Nova Feature: Smart Delivery
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Smart Delivery
            </span>
            <br />
            <span className="text-white">Revolucione o Comércio Local</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Seu agente IA entende pedidos por WhatsApp/Instagram, processa pagamentos, 
            coordena cozinha, avisa motoboys e mantém cliente informado. 
            <span className="text-green-400 font-semibold"> Tudo automatizado, do pedido à entrega!</span>
          </p>
        </div>

        {/* Animated Mind Map */}
        <div className="mb-16">
          <div className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white">Mapa Mental: Fluxo Completo Smart Delivery</h3>
              <button
                onClick={isAnimating ? stopAnimation : startAnimation}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 flex items-center space-x-2 glow-effect"
              >
                {isAnimating ? (
                  <>
                    <Pause className="w-5 h-5" />
                    <span>Pausar</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    <span>Ver Fluxo</span>
                  </>
                )}
              </button>
            </div>

            <div className="relative h-[500px] bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl overflow-hidden border border-gray-700">
              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-blue-500 p-5 flex items-center justify-center shadow-2xl border-4 border-white/20">
                  <Zap className="w-12 h-12 text-white" />
                </div>
                <div className="text-center mt-2">
                  <div className="text-white font-bold text-sm">Atendos IA</div>
                  <div className="text-gray-400 text-xs">Smart Delivery</div>
                </div>
              </div>

              {/* Steps */}
              {deliverySteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`absolute transition-all duration-1000 ${
                    isAnimating && index <= currentStep ? 'opacity-100 scale-100 z-10' : 'opacity-40 scale-75'
                  }`}
                  style={{
                    left: `${step.position.x}%`,
                    top: `${step.position.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className={`w-18 h-18 rounded-full bg-gradient-to-r ${step.color} p-4 mb-3 shadow-lg border-2 border-white/20 ${
                    isAnimating && index === currentStep ? 'animate-pulse ring-4 ring-white/50 scale-110' : ''
                  }`}>
                    <step.icon className="w-10 h-10 text-white drop-shadow-lg" />
                  </div>
                  <div className="text-center max-w-28">
                    <div className="text-white font-bold text-xs mb-1 drop-shadow">{step.title}</div>
                    <div className="text-gray-300 text-xs">{step.description}</div>
                    {isAnimating && index === currentStep && (
                      <div className="mt-3 p-2 bg-black/80 rounded-lg text-xs text-green-400 border border-green-500/50 shadow-lg backdrop-blur-sm">
                        {step.detail}
                      </div>
                    )}
                  </div>

                  {/* Animated Connection Lines to Center */}
                  {isAnimating && index <= currentStep && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div 
                        className="absolute w-1 bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse"
                        style={{
                          height: `${Math.sqrt(Math.pow((step.position.x - 50), 2) + Math.pow((step.position.y - 50), 2)) * 4}px`,
                          transformOrigin: 'top',
                          transform: `rotate(${Math.atan2(step.position.y - 50, step.position.x - 50) * 180 / Math.PI + 90}deg)`
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}

              {/* Central Pulse Effect */}
              {isAnimating && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-green-400 rounded-full animate-ping transform -translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-blue-400/30 rounded-full animate-pulse transform -translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-purple-400/20 rounded-full animate-pulse transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              )}
            </div>

            {isAnimating && (
              <div className="mt-6 text-center">
                <div className="text-green-400 font-semibold mb-2">
                  Passo {currentStep + 1} de {deliverySteps.length}: {deliverySteps[currentStep]?.title}
                </div>
                <div className="text-gray-300 text-sm">
                  {deliverySteps[currentStep]?.detail}
                </div>
                <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${((currentStep + 1) / deliverySteps.length) * 100}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:border-green-500/40 group"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-green-400 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl p-8 backdrop-blur-sm mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Perfeito Para Qualquer Negócio Local
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-orange-500 p-4 mx-auto mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Restaurantes</h4>
              <p className="text-gray-400 text-sm">Pizzarias, hamburguerias, comida japonesa</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-4 mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Farmácias</h4>
              <p className="text-gray-400 text-sm">Medicamentos, produtos de higiene</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-4 mx-auto mb-4">
                <Store className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Mercados</h4>
              <p className="text-gray-400 text-sm">Supermercados, mercearias, hortifruti</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-4 mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Qualquer Delivery</h4>
              <p className="text-gray-400 text-sm">Flores, presentes, produtos locais</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Benefícios do Smart Delivery
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="flex items-center space-x-4">
              <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-semibold text-white">Aumento de 300% nas Vendas</h4>
                <p className="text-gray-400 text-sm">Pedidos 24/7 sem perder nenhuma oportunidade</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-semibold text-white">Redução de 80% nos Erros</h4>
                <p className="text-gray-400 text-sm">IA processa pedidos com precisão total</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-semibold text-white">Economia de 70% em Atendimento</h4>
                <p className="text-gray-400 text-sm">Menos funcionários, mais eficiência</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-semibold text-white">Satisfação de 95% dos Clientes</h4>
                <p className="text-gray-400 text-sm">Experiência perfeita do pedido à entrega</p>
              </div>
            </div>
          </div>

          <a
            href="https://www.atendos.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full text-white font-bold text-xl hover:from-green-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 glow-effect inline-flex items-center space-x-2"
          >
            <Truck className="w-6 h-6" />
            <span>Disponível apenas no Atendos Pro!</span>
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SmartDelivery;