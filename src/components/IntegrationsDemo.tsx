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
        { action: 'Nova mensagem recebida', status: 'Analisando contexto...', icon: MessageCircle },
        { action: 'IA processando resposta', status: 'Aplicando sua personalidade...', icon: User },
        { action: 'Resposta enviada', status: 'Lead qualificado automaticamente', icon: CheckCircle },
        { action: 'Reunião agendada', status: 'Convertido em oportunidade', icon: Calendar }
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
        'Fecha vendas por áudio e texto'
      ],
      demoSteps: [
        { action: 'Lead interessado detectado', status: 'Iniciando sequência de vendas...', icon: Phone },
        { action: 'Ligação automática iniciada', status: 'Falando com SUA voz...', icon: User },
        { action: 'Objeções contornadas', status: 'Apresentando proposta...', icon: MessageCircle },
        { action: 'Venda fechada', status: 'Pagamento confirmado!', icon: CheckCircle }
      ]
    },
    {
      id: 'calendar',
      name: 'Google Calendar',
      logo: '/googlecalendar.png',
      color: 'from-blue-500 to-indigo-600',
      borderColor: 'border-blue-500/30',
      title: 'Agenda que se Organiza Sozinha',
      subtitle: 'Nunca Mais Perca uma Reunião Importante',
      description: 'Seu agente IA gerencia sua agenda como um assistente pessoal premium. Marca, desmarca, reagenda e otimiza seu tempo automaticamente.',
      features: [
        'Marca reuniões baseado na sua disponibilidade real',
        'Envia lembretes automáticos para clientes',
        'Reagenda conflitos automaticamente',
        'Otimiza sua agenda para máxima produtividade'
      ],
      demoSteps: [
        { action: 'Cliente solicita reunião', status: 'Verificando disponibilidade...', icon: Calendar },
        { action: 'Horário encontrado', status: 'Enviando convite automático...', icon: Clock },
        { action: 'Reunião confirmada', status: 'Lembretes programados...', icon: CheckCircle },
        { action: 'Otimização completa', status: 'Agenda maximizada!', icon: Zap }
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