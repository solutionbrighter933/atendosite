import React, { useState, useEffect } from 'react';
import { Play, Pause, MessageCircle, Calendar, Phone, CheckCircle, Clock, User, Zap } from 'lucide-react';

const IntegrationsDemo = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [demoStep, setDemoStep] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (activeDemo) {
      interval = setInterval(() => {
        setDemoStep(prev => (prev + 1) % 4);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [activeDemo]);

  const integrations = [
    {
      id: 'instagram',
      name: 'Instagram',
      logo: '/instagram-new--v2.png',
      color: 'from-pink-500 to-purple-600',
      borderColor: 'border-pink-500/30',
      title: 'Domínio Total do Instagram',
      subtitle: 'Seu Clone Digital Nunca Dorme',
      description: 'Enquanto você dorme, seu agente IA está respondendo DMs, stories, comentários e convertendo seguidores em clientes pagantes.',
      features: [
        'Responde DMs instantaneamente com sua personalidade',
        'Comenta em stories mantendo seu tom de voz',
        'Qualifica leads através de conversas naturais',
        'Agenda reuniões direto pelo Instagram'
      ],
      demoSteps: [
        { action: 'Nova mensagem recebida', status: 'Eii! Acompanho seu perfil faz um tempo já. Curto demais o que você posta!😍', icon: MessageCircle },
        { action: 'IA processando resposta', status: 'Aplicando sua personalidade...', icon: User },
        { action: 'Resposta enviada', status: 'Aaaah, que mensagem boa de receber! Fico super feliz mesmo 🖤 Dei uma olhada no seu perfil também e acho que tem uma coisa que pode somar MUITO no que você faz. Posso te mandar um áudio explicando?', icon: CheckCircle },
        { action: 'Áudio enviado', status: 'Executando abordagem personalizada para qualificação do lead.', icon: Calendar }
      ]
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Business',
      logo: '/whatsapp--v2.png',
      color: 'from-green-500 to-emerald-600',
      borderColor: 'border-green-500/30',
      title: 'WhatsApp que Vende Sozinho',
      subtitle: 'Ligações + Mensagens = Vendas Infinitas',
      description: 'Seu agente não só responde mensagens. Ele LIGA para seus leads, fala com SUA voz clonada e fecha vendas por telefone.',
      features: [
        'Faz ligações com sua voz clonada',
        'Responde mensagens 24/7 sem parar',
        'Qualifica leads através de perguntas inteligentes',
        'Fecha vendas por áudio e texto',
        'Integra com CRM, Stripe, Asaas para pagamentos',
        'Emite notas fiscais automaticamente'
      ],
      demoSteps: [
        { action: 'Lead interessado detectado', status: 'Oii, podemos marcar uma consulta? que horas posso te ligar?', icon: Phone },
        { action: 'Ligação automática iniciada', status: 'Ligando com SUA voz clonada - "Oi Vanessa, aqui é o João! Vi que você tem interesse na consultoria..."', icon: User },
        { action: 'Qualificação e objeções contornadas', status: 'Fazendo perguntas estratégicas e apresentando proposta personalizada durante a ligação', icon: MessageCircle },
        { action: 'Venda fechada + Integração completa', status: 'Vanessa, ficou agendado pra quarta-feira às 14h! Pagamento processado via Stripe, dados salvos no CRM e nota fiscal sendo emitida automaticamente.', icon: CheckCircle }
      ]
    },
    {
      id: 'calendar',
      name: 'Google Calendar',
      logo: '/googlecalendar.png',
      color: 'from-blue-500 to-indigo-600',
      borderColor: 'border-blue-500/30',
      title: 'Agendamento Inteligente com Google Calendar',
      subtitle: 'Sua Agenda Organizada, Suas Vendas Otimizadas',
      description: 'Seu agente IA não só agenda consultas automaticamente no Google Calendar e Apple Calendar, mas também qualifica o cliente, envia links de pagamento quando necessário e gera notas fiscais instantaneamente após a confirmação.',
      features: [
        'Sincronização em tempo real com Google Calendar e Apple Calendar',
        'Qualificação automática do cliente antes do agendamento',
        'Verificação inteligente de disponibilidade de horários',
        'Envio automático de links de pagamento (Stripe/Asaas)',
        'Geração instantânea de notas fiscais pós-confirmação',
        'Lembretes automáticos e follow-ups personalizados'
      ],
      demoSteps: [
        { action: 'Cliente solicita agendamento', status: 'Oi! Gostaria de agendar uma consulta com vocês. Quando vocês têm disponibilidade?', icon: MessageCircle },
        { action: 'IA analisa e qualifica', status: 'Perfeito! Para eu encontrar o melhor horário, me conta: é para consultoria empresarial ou individual?', icon: User },
        { action: 'Verifica disponibilidade', status: 'Consultando Google Calendar e Apple Calendar em tempo real... Tenho terça às 14h ou quinta às 10h disponíveis.', icon: Calendar },
        { action: 'Agendamento confirmado + Link de pagamento', status: 'Agendado para terça às 14h! Aqui está o link para confirmar: [stripe.com/pay/123] - Consulta: R$ 300', icon: CheckCircle },
        { action: 'Pagamento confirmado + NF gerada', status: 'Pagamento recebido ✓ | Nota Fiscal #001234 enviada por email | Lembrete agendado para 1h antes da consulta', icon: Zap }
      ]
    }
  ];

  const startDemo = (integrationId: string) => {
    setActiveDemo(integrationId);
    setDemoStep(0);
  };

  const stopDemo = () => {
    setActiveDemo(null);
    setDemoStep(0);
  };

  return (
    <section id="integrations" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Integrações que
            </span>
            <br />
            <span className="text-white">Trabalham Sozinhas</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja seu agente IA em ação. Conecte uma vez, funciona para sempre.
            <span className="text-cyan-400 font-semibold"> Sem configuração complexa, sem dor de cabeça.</span>
          </p>
        </div>

        <div className="space-y-12">
          {integrations.map((integration) => (
            <div
              key={integration.id}
              className={`bg-white/5 backdrop-blur-sm border ${integration.borderColor} rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02]`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <img 
                      src={integration.logo} 
                      alt={integration.name}
                      className="w-16 h-16 mr-4"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {integration.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {integration.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {integration.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {integration.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => activeDemo === integration.id ? stopDemo() : startDemo(integration.id)}
                    className={`px-6 py-3 bg-gradient-to-r ${integration.color} rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 flex items-center space-x-2 glow-effect`}
                  >
                    {activeDemo === integration.id ? (
                      <>
                        <Pause className="w-5 h-5" />
                        <span>Pausar Demo</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5" />
                        <span>Ver em Ação</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="relative">
                  <div className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 min-h-[400px]">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-xs text-gray-400">Atendos IA - Live Demo</div>
                    </div>

                    {activeDemo === integration.id ? (
                      <div className="space-y-4">
                        {integration.demoSteps.map((step, index) => (
                          <div
                            key={index}
                            className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-500 ${
                              index <= demoStep 
                                ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30' 
                                : 'bg-gray-800/50 border border-gray-700'
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              index <= demoStep 
                                ? `bg-gradient-to-r ${integration.color}` 
                                : 'bg-gray-700'
                            }`}>
                              <step.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className={`font-semibold ${
                                index <= demoStep ? 'text-white' : 'text-gray-500'
                              }`}>
                                {step.action}
                              </div>
                              <div className={`text-sm ${
                                index <= demoStep ? 'text-cyan-400' : 'text-gray-600'
                              }`}>
                                {step.status}
                              </div>
                            </div>
                            {index === demoStep && (
                              <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                          <img 
                            src={integration.logo} 
                            alt={integration.name}
                            className="w-20 h-20 mx-auto mb-4 opacity-50"
                          />
                          <p className="text-gray-400 mb-4">
                            Clique em "Ver em Ação" para assistir a demonstração
                          </p>
                          <div className="text-sm text-gray-500">
                            Simulação em tempo real do seu agente IA trabalhando
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Conecte Tudo em 1 Clique
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Não precisa ser programador. Não precisa configurar APIs. 
              <span className="text-cyan-400 font-semibold"> Conecta, treina e coloca pra funcionar em menos de 5 minutos.</span>
            </p>
            <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
              <img src="/instagram-new--v2.png" alt="Instagram" className="w-12 h-12" />
              <span className="text-cyan-400 text-2xl">+</span>
              <img src="/whatsapp--v2.png" alt="WhatsApp" className="w-12 h-12" />
              <span className="text-cyan-400 text-2xl">+</span>
              <img src="/googlecalendar.png" alt="Google Calendar" className="w-12 h-12" />
              <span className="text-cyan-400 text-2xl">=</span>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Vendas Infinitas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsDemo;