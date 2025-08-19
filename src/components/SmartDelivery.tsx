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
  Bell,
  ArrowDown
} from 'lucide-react';

const SmartDelivery = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAnimating) {
      interval = setInterval(() => {
        setCurrentStep(prev => {
          const nextStep = (prev + 1) % 8;
          if (nextStep === 0) {
            // Reset completed steps when starting over
            setCompletedSteps([]);
          } else {
            // Add current step to completed steps
            setCompletedSteps(prevCompleted => [...prevCompleted, prev]);
          }
          return nextStep;
        });
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [isAnimating]);

  const startAnimation = () => {
    setIsAnimating(true);
    setCurrentStep(0);
    setCompletedSteps([]);
  };

  const stopAnimation = () => {
    setIsAnimating(false);
    setCurrentStep(0);
    setCompletedSteps([]);
  };

  const deliverySteps = [
    {
      id: 'order',
      title: 'Cliente Faz Pedido',
      description: 'WhatsApp ou Instagram',
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-600',
      detail: '"Quero 2 pizzas margherita e 1 coca-cola"',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      id: 'ai-process',
      title: 'IA Processa Pedido',
      description: 'Entende e organiza automaticamente',
      icon: Zap,
      color: 'from-purple-500 to-pink-600',
      detail: 'Pedido #1234 criado no sistema',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      id: 'payment',
      title: 'Link de Pagamento',
      description: 'Enviado automaticamente',
      icon: CreditCard,
      color: 'from-blue-500 to-cyan-600',
      detail: 'PIX/Cartão - R$ 45,90',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 'kitchen',
      title: 'Cozinha Notificada',
      description: 'Pedido vai para produção',
      icon: Store,
      color: 'from-orange-500 to-red-600',
      detail: 'Tempo estimado: 25 minutos',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30'
    },
    {
      id: 'motoboy',
      title: 'Motoboy Avisado',
      description: 'Notificação automática',
      icon: Truck,
      color: 'from-yellow-500 to-orange-600',
      detail: 'João - Disponível para entrega',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30'
    },
    {
      id: 'tracking',
      title: 'Cliente Acompanha',
      description: 'Updates em tempo real',
      icon: MapPin,
      color: 'from-cyan-500 to-blue-600',
      detail: 'Pedido saiu para entrega - 15 min',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30'
    },
    {
      id: 'delivery',
      title: 'Entrega Realizada',
      description: 'Confirmação automática',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-600',
      detail: 'Entregue às 19:45',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      id: 'invoice',
      title: 'Nota Fiscal Gerada',
      description: 'Emissão automática',
      icon: DollarSign,
      color: 'from-purple-500 to-pink-600',
      detail: 'NF #001234 enviada por email',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
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

        {/* Make-Style Flow Demo */}
        <div className="mb-16">
          <div className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white">Fluxo de Automação Smart Delivery</h3>
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
                    <span>Iniciar Fluxo</span>
                  </>
                )}
              </button>
            </div>

            {/* Make-Style Vertical Flow */}
            <div className="max-w-2xl mx-auto">
              <div className="space-y-6">
                {deliverySteps.map((step, index) => (
                  <div key={step.id} className="relative">
                    {/* Step Card */}
                    <div
                      className={`relative transition-all duration-700 transform ${
                        isAnimating && index === currentStep
                          ? 'scale-105 shadow-2xl'
                          : completedSteps.includes(index)
                            ? 'scale-100 opacity-80'
                            : 'scale-95 opacity-40'
                      }`}
                    >
                      <div
                        className={`${step.bgColor} backdrop-blur-sm border-2 ${
                          isAnimating && index === currentStep
                            ? `${step.borderColor} shadow-[0_0_30px_rgba(34,211,238,0.3)]`
                            : completedSteps.includes(index)
                              ? 'border-green-500/50'
                              : 'border-gray-700'
                        } rounded-xl p-6 transition-all duration-700`}
                      >
                        <div className="flex items-center space-x-4">
                          {/* Icon */}
                          <div
                            className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} p-4 flex items-center justify-center transition-all duration-700 ${
                              isAnimating && index === currentStep
                                ? 'animate-pulse scale-110'
                                : completedSteps.includes(index)
                                  ? 'scale-105'
                                  : 'scale-90'
                            }`}
                          >
                            <step.icon className="w-8 h-8 text-white" />
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <h4 className={`text-lg font-bold mb-1 transition-colors duration-700 ${
                              isAnimating && index === currentStep
                                ? 'text-white'
                                : completedSteps.includes(index)
                                  ? 'text-green-400'
                                  : 'text-gray-500'
                            }`}>
                              {step.title}
                            </h4>
                            <p className={`text-sm mb-2 transition-colors duration-700 ${
                              isAnimating && index === currentStep
                                ? 'text-cyan-400'
                                : completedSteps.includes(index)
                                  ? 'text-gray-300'
                                  : 'text-gray-600'
                            }`}>
                              {step.description}
                            </p>
                            
                            {/* Detail appears when active */}
                            {isAnimating && index === currentStep && (
                              <div className="mt-3 p-3 bg-black/70 rounded-lg border border-cyan-500/50 backdrop-blur-sm animate-fade-in-up">
                                <p className="text-cyan-400 text-sm font-medium">
                                  {step.detail}
                                </p>
                              </div>
                            )}
                          </div>

                          {/* Status Indicator */}
                          <div className="flex flex-col items-center space-y-2">
                            {completedSteps.includes(index) ? (
                              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                                <CheckCircle className="w-5 h-5 text-white" />
                              </div>
                            ) : isAnimating && index === currentStep ? (
                              <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center animate-pulse">
                                <div className="w-3 h-3 bg-white rounded-full animate-ping" />
                              </div>
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                                <div className="w-3 h-3 bg-gray-400 rounded-full" />
                              </div>
                            )}
                            
                            <span className="text-xs text-gray-400 font-mono">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Animated Data Flow */}
                      {isAnimating && index === currentStep && (
                        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.4s' }} />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Connector Arrow */}
                    {index < deliverySteps.length - 1 && (
                      <div className="flex justify-center my-4">
                        <div
                          className={`transition-all duration-700 ${
                            completedSteps.includes(index)
                              ? 'text-green-400 scale-110'
                              : isAnimating && index === currentStep
                                ? 'text-cyan-400 animate-bounce'
                                : 'text-gray-600 scale-90'
                          }`}
                        >
                          <ArrowDown className="w-6 h-6" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Progress Bar */}
              {isAnimating && (
                <div className="mt-8 p-4 bg-black/70 rounded-xl border border-gray-700 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-semibold">
                      Progresso do Fluxo
                    </span>
                    <span className="text-cyan-400 font-mono">
                      {currentStep + 1}/{deliverySteps.length}
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-800 rounded-full h-3 border border-gray-600 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 h-3 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                      style={{ width: `${((currentStep + 1) / deliverySteps.length) * 100}%` }}
                    />
                  </div>
                  
                  <div className="mt-3 text-center">
                    <p className="text-cyan-400 font-semibold text-lg">
                      {deliverySteps[currentStep]?.title}
                    </p>
                    <p className="text-gray-300 text-sm">
                      {deliverySteps[currentStep]?.detail}
                    </p>
                  </div>
                </div>
              )}
            </div>
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