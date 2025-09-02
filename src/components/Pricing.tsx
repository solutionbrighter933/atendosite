import React from 'react';
import { Check, Star, Zap, Crown, Rocket, Settings } from 'lucide-react';
import DiscountModal from './DiscountModal';

const Pricing = () => {
  const [showDiscountModal, setShowDiscountModal] = React.useState(false);

  const handleCreateAgentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDiscountModal(true);
  };

  const plans = [
    {
      id: 'starter',
      name: 'Atendos IA Starter',
      subtitle: 'Starter - Plano ideal para começar com automação de atendimento',
      price: 'R$ 796,00',
      period: '/mês',
      trial: '7 dias grátis',
      popular: false,
      icon: Zap,
      color: 'from-blue-500 to-indigo-600',
      borderColor: 'border-blue-500/30',
      bgGlow: 'bg-blue-500/10',
      features: [
        'Atendimento automatizado com IA',
        'Integração com WhatsApp',
        'Dashboard completo',
        'Suporte técnico',
        'Treinamento personalizado da IA',
        'Até 2.000 mensagens/mês',
        'Integração automática com Google Sheets via IA',
        'Agente de agendamento via Google Calendar integrado'
      ]
    },
    {
      id: 'plus',
      name: 'Atendos IA Plus',
      subtitle: 'Plus - A Máquina de Conversão no Bolso',
      price: 'R$ 1.192,00',
      period: '/mês',
      trial: '7 dias grátis',
      popular: true,
      icon: Star,
      color: 'from-purple-500 to-pink-600',
      borderColor: 'border-purple-500/30',
      bgGlow: 'bg-purple-500/10',
      features: [
        '3.000 mensagens mensais com IA ativa 24h no automático',
        'Atendimento completo no Instagram Direct + WhatsApp',
        'Respostas adaptativas inteligentes que se moldam ao tom do cliente',
        'Monitoramento de leads em tempo real',
        'Funil de vendas invisível — o lead nem percebe que foi conduzido pro checkout',
        'Análise de intenção de compra automática',
        'Integração automática com Google Sheets via IA',
        'Agente de agendamento via Google Calendar integrado'
      ]
    },
    {
      id: 'pro',
      name: 'Atendos IA Pro',
      subtitle: 'Dominação Digital com Estilo Brutal',
      price: 'R$ 1.578,00',
      period: '/mês',
      trial: '7 dias grátis',
      popular: false,
      icon: Crown,
      color: 'from-yellow-500 to-orange-600',
      borderColor: 'border-yellow-500/30',
      bgGlow: 'bg-yellow-500/10',
      features: [
        'Mensagens ilimitadas mensais com + 500 modelos de IA disponíveis',
        'Atendimento total: WhatsApp + Instagram Direct, sem limites',
        'Integração automática com Google Sheets via IA',
        'Acesso prioritário ao suporte',
        'Modo personalização insana, treine a IA do seu jeito sem política de restrição',
        'Agente SDR com follow-up automático',
        'Agente de voz que liga, qualifica e marca reunião sozinho',
        'Agente de agendamento via Google Calendar integrado',
        'Agente vendedor com carrinho de compras embutido (Pix, boleto, crédito)',
        'Smart Delivery: Gestão completa de pedidos e entregas com IA',
        'Atendos Meeting: Notetaker com IA para Zoom, Meet e Teams',
        'Emissão automática de notas fiscais pós-venda',
        'Integrações ilimitadas: CRM, Telegram, Apple Calendar, Stripe, Asaas'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Escolha seu</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Plano
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Selecione o plano que melhor atende às suas necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative ${plan.bgGlow} backdrop-blur-sm border ${plan.borderColor} rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02] ${
                plan.popular ? 'ring-2 ring-purple-500/50 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2">
                    <Star className="w-4 h-4" />
                    <span>MAIS POPULAR</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} p-4 mx-auto mb-4`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {plan.subtitle}
                </p>

                <div className="mb-4">
                  <span className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-lg">{plan.period}</span>
                </div>

                <div className="text-green-400 text-sm font-semibold mb-6">
                  ✓ {plan.trial}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#"
                onClick={handleCreateAgentClick}
                className={`w-full px-6 py-4 bg-gradient-to-r ${plan.color} rounded-full text-white font-bold text-center hover:scale-105 transition-all duration-300 glow-effect block ${
                  plan.popular ? 'text-lg' : ''
                }`}
              >
                Começar Agora
              </a>
            </div>
          ))}
        </div>

        {/* Integration Note */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl p-8 backdrop-blur-sm max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 border border-orange-500/40 rounded-full text-orange-400 text-sm font-semibold mb-4 backdrop-blur-sm">
                <Crown className="w-4 h-4 mr-2" />
                Serviço Profissional Incluso
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Valor de Integração e Desenvolvimento de Prompt Profissional
              </h3>
              <div className="text-3xl font-bold text-orange-400 mb-4">
                R$ 2.000
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-left">
                <h4 className="text-lg font-semibold text-orange-400 mb-3 flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Modelo de Prompt Validado
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Prompts desenvolvidos por especialistas em IA</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Testados em milhares de conversas reais</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Otimizados para máxima taxa de conversão</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Personalizados para seu nicho de mercado</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-left">
                <h4 className="text-lg font-semibold text-orange-400 mb-3 flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  Integração Completa no Sistema
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Configuração de todas as integrações necessárias</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Conexão com WhatsApp, Instagram e Google</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Setup de CRM, Zapier, Make e outras ferramentas</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Testes completos antes da entrega</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
              <p className="text-green-400 font-semibold text-center">
                Testes e suporte exclusívo pela nossa equipe durante o primeiro mês.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Todos os Planos Incluem
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Rocket className="w-8 h-8 text-cyan-400 mb-2 mx-auto" />
                <h4 className="font-semibold text-white mb-1">Setup Rápido</h4>
                <p className="text-gray-400 text-sm">Configuração em 5 minutos</p>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 text-purple-400 mb-2 mx-auto" />
                <h4 className="font-semibold text-white mb-1">IA Evolutiva</h4>
                <p className="text-gray-400 text-sm">Aprende continuamente</p>
              </div>
              <div className="text-center">
                <Crown className="w-8 h-8 text-yellow-400 mb-2 mx-auto" />
                <h4 className="font-semibold text-white mb-1">Suporte Premium</h4>
                <p className="text-gray-400 text-sm">Atendimento especializado</p>
              </div>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              ✓ Sem taxa de setup • ✓ Cancele quando quiser • ✓ Garantia de 7 dias
            </div>
          </div>
        </div>
      </div>
      
      <DiscountModal 
        isOpen={showDiscountModal} 
        onClose={() => setShowDiscountModal(false)} 
      />
    </section>
  );
};

export default Pricing;