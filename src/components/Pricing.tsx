import React from 'react';
import { Check, Star, Zap, Crown, Rocket } from 'lucide-react';

const Pricing = () => {
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
        'Até 1.000 mensagens/mês'
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
        '2.000 mensagens mensais com IA ativa 24h no automático',
        'Atendimento completo no Instagram Direct + WhatsApp',
        'Respostas adaptativas inteligentes que se moldam ao tom do cliente',
        'Monitoramento de leads em tempo real',
        'Funil de vendas invisível — o lead nem percebe que foi conduzido pro checkout',
        'Análise de intenção de compra automática'
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
        '3.000 mensagens mensais com IA customizada',
        'Atendimento total: WhatsApp + Instagram Direct, sem limites',
        'Integração automática com Google Sheets via IA',
        'Acesso prioritário ao suporte',
        'Personalização insana da IA — treine ela do seu jeito',
        'Agente SDR com follow-up automático',
        'Agente de voz que liga, qualifica e marca reunião sozinho',
        'Agente de agendamento via Google Calendar integrado',
        'Agente vendedor com carrinho de compras embutido (Pix, boleto, crédito)',
        'Smart Delivery: Gestão completa de pedidos e entregas com IA',
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
                href="https://www.atendos.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full px-6 py-4 bg-gradient-to-r ${plan.color} rounded-full text-white font-bold text-center hover:scale-105 transition-all duration-300 glow-effect block ${
                  plan.popular ? 'text-lg' : ''
                }`}
              >
                Começar Agora
              </a>
            </div>
          ))}
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
    </section>
  );
};

export default Pricing;