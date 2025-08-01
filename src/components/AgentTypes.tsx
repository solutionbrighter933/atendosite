import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, 
  Headphones, 
  Users, 
  Crown, 
  Zap, 
  Play, 
  Pause,
  MessageCircle,
  Phone,
  Calendar,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Clock,
  Star,
  Target
} from 'lucide-react';

const AgentTypes = () => {
  const [activeAgent, setActiveAgent] = useState<string | null>(null);
  const [demoStep, setDemoStep] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (activeAgent) {
      interval = setInterval(() => {
        setDemoStep(prev => (prev + 1) % 5);
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [activeAgent]);

  const agentTypes = [
    {
      id: 'vendedor',
      name: 'Agente Vendedor',
      icon: ShoppingCart,
      color: 'from-green-500 to-emerald-600',
      borderColor: 'border-green-500/30',
      bgGlow: 'bg-green-500/10',
      title: 'Máquina de Vendas Implacável',
      subtitle: 'Fecha Negócios Enquanto Você Dorme',
      description: 'Seu vendedor digital que nunca cansa, nunca desiste e nunca perde uma oportunidade. Qualifica leads, apresenta propostas, contorna objeções e fecha vendas 24/7.',
      features: [
        'Qualifica leads automaticamente com perguntas inteligentes',
        'Apresenta propostas personalizadas para cada cliente',
        'Contorna objeções usando técnicas de vendas avançadas',
        'Fecha vendas por WhatsApp, Instagram e ligações',
        'Faz follow-up automático até converter o lead',
        'Emite notas fiscais automaticamente após a venda'
      ],
      metrics: {
        conversion: '85%',
        response: '< 30s',
        availability: '24/7'
      },
      demoSteps: [
        { 
          action: 'Lead capturado', 
          status: 'Analisando perfil do cliente...', 
          icon: Target,
          detail: 'João Silva interessado em consultoria'
        },
        { 
          action: 'Qualificação iniciada', 
          status: 'Fazendo perguntas estratégicas...', 
          icon: MessageCircle,
          detail: '"Qual seu maior desafio atual?"'
        },
        { 
          action: 'Proposta personalizada', 
          status: 'Criando oferta sob medida...', 
          icon: Star,
          detail: 'Pacote Premium - R$ 2.997'
        },
        { 
          action: 'Objeção detectada', 
          status: 'Aplicando técnica de vendas...', 
          icon: AlertCircle,
          detail: '"Entendo sua preocupação com o preço..."'
        },
        { 
          action: 'Venda fechada + NF emitida!', 
          status: 'Pagamento confirmado e nota fiscal gerada', 
          icon: CheckCircle,
          detail: 'R$ 2.997 - PIX recebido ✓ | NF #001234 emitida'
        }
      ]
    },
    {
      id: 'suporte',
      name: 'Agente de Suporte',
      icon: Headphones,
      color: 'from-blue-500 to-cyan-600',
      borderColor: 'border-blue-500/30',
      bgGlow: 'bg-blue-500/10',
      title: 'Suporte que Nunca Falha',
      subtitle: 'Resolve Problemas na Velocidade da Luz',
      description: 'Seu especialista em suporte que conhece cada detalhe do seu produto. Resolve dúvidas, problemas técnicos e mantém seus clientes sempre satisfeitos.',
      features: [
        'Resolve 90% das dúvidas instantaneamente',
        'Acesso completo à base de conhecimento',
        'Escalona casos complexos automaticamente',
        'Coleta feedback e melhora continuamente',
        'Funciona em todos os canais simultaneamente'
      ],
      metrics: {
        resolution: '90%',
        satisfaction: '4.9/5',
        response: '< 10s'
      },
      demoSteps: [
        { 
          action: 'Problema reportado', 
          status: 'Analisando questão do cliente...', 
          icon: AlertCircle,
          detail: 'Cliente não consegue acessar área restrita'
        },
        { 
          action: 'Diagnóstico automático', 
          status: 'Consultando base de conhecimento...', 
          icon: Zap,
          detail: 'Problema identificado: senha expirada'
        },
        { 
          action: 'Solução aplicada', 
          status: 'Enviando instruções detalhadas...', 
          icon: CheckCircle,
          detail: 'Link de redefinição enviado por email'
        },
        { 
          action: 'Acompanhamento', 
          status: 'Verificando se problema foi resolvido...', 
          icon: Clock,
          detail: 'Cliente confirmou acesso restaurado'
        },
        { 
          action: 'Feedback coletado', 
          status: 'Satisfação registrada', 
          icon: Star,
          detail: 'Avaliação: 5 estrelas ⭐⭐⭐⭐⭐'
        }
      ]
    },
    {
      id: 'atendimento',
      name: 'Agente de Atendimento',
      icon: MessageCircle,
      color: 'from-purple-500 to-pink-600',
      borderColor: 'border-purple-500/30',
      bgGlow: 'bg-purple-500/10',
      title: 'Primeiro Contato Perfeito',
      subtitle: 'Recepção VIP para Todos os Clientes',
      description: 'Seu recepcionista digital que causa a primeira impressão perfeita. Acolhe visitantes, direciona demandas e garante que ninguém seja ignorado.',
      features: [
        'Recebe todos os visitantes com cordialidade',
        'Identifica a necessidade de cada cliente',
        'Direciona para o setor correto automaticamente',
        'Coleta informações importantes antes do atendimento',
        'Mantém histórico completo de todas as interações'
      ],
      metrics: {
        response: '< 5s',
        routing: '98%',
        satisfaction: '4.8/5'
      },
      demoSteps: [
        { 
          action: 'Visitante chegou', 
          status: 'Iniciando recepção personalizada...', 
          icon: Users,
          detail: 'Boa tarde! Como posso ajudá-lo hoje?'
        },
        { 
          action: 'Necessidade identificada', 
          status: 'Coletando informações relevantes...', 
          icon: MessageCircle,
          detail: 'Entendi, você precisa de informações sobre preços'
        },
        { 
          action: 'Dados coletados', 
          status: 'Registrando perfil do cliente...', 
          icon: Users,
          detail: 'Nome: Maria, Empresa: TechCorp, Interesse: Planos'
        },
        { 
          action: 'Direcionamento inteligente', 
          status: 'Conectando com especialista...', 
          icon: Target,
          detail: 'Transferindo para Agente Vendedor...'
        },
        { 
          action: 'Handoff completo', 
          status: 'Contexto transferido com sucesso', 
          icon: CheckCircle,
          detail: 'Vendedor já sabe tudo sobre Maria'
        }
      ]
    },
    {
      id: 'gestor',
      name: 'Agente Gestor de Clientes',
      icon: Crown,
      color: 'from-yellow-500 to-orange-600',
      borderColor: 'border-yellow-500/30',
      bgGlow: 'bg-yellow-500/10',
      title: 'Relacionamento que Gera Receita',
      subtitle: 'Transforma Clientes em Fãs Apaixonados',
      description: 'Seu gerente de relacionamento que nunca esquece um aniversário, sempre lembra de fazer follow-up e transforma clientes em defensores da marca.',
      features: [
        'Acompanha jornada completa de cada cliente',
        'Identifica oportunidades de upsell e cross-sell',
        'Envia follow-ups personalizados automaticamente',
        'Detecta sinais de churn antes que aconteça',
        'Programa campanhas de retenção inteligentes'
      ],
      metrics: {
        retention: '94%',
        upsell: '67%',
        satisfaction: '4.9/5'
      },
      demoSteps: [
        { 
          action: 'Cliente inativo detectado', 
          status: 'Analisando padrão de comportamento...', 
          icon: TrendingUp,
          detail: 'Carlos não acessa há 15 dias'
        },
        { 
          action: 'Campanha de reativação', 
          status: 'Criando abordagem personalizada...', 
          icon: Target,
          detail: 'Oferta especial baseada no histórico'
        },
        { 
          action: 'Contato reestabelecido', 
          status: 'Cliente respondeu positivamente...', 
          icon: MessageCircle,
          detail: '"Que bom que lembraram de mim!"'
        },
        { 
          action: 'Oportunidade identificada', 
          status: 'Detectando necessidade de upgrade...', 
          icon: Star,
          detail: 'Cliente precisa de mais recursos'
        },
        { 
          action: 'Upsell realizado', 
          status: 'Receita aumentada com sucesso', 
          icon: CheckCircle,
          detail: 'Plano Premium ativado - +R$ 500/mês'
        }
      ]
    },
    {
      id: 'interativo',
      name: 'Agente Interativo',
      icon: Zap,
      color: 'from-cyan-500 to-purple-600',
      borderColor: 'border-cyan-500/30',
      bgGlow: 'bg-cyan-500/10',
      title: 'Experiência Mágica e Envolvente',
      subtitle: 'Engajamento que Vicia e Converte',
      description: 'Seu especialista em engajamento que cria experiências interativas únicas. Gamifica processos, cria conexões emocionais e torna cada interação memorável.',
      features: [
        'Cria experiências gamificadas e divertidas',
        'Adapta comunicação ao perfil de cada pessoa',
        'Usa storytelling para engajar emocionalmente',
        'Implementa quizzes e pesquisas interativas',
        'Gera conteúdo personalizado em tempo real'
      ],
      metrics: {
        engagement: '89%',
        completion: '76%',
        virality: '43%'
      },
      demoSteps: [
        { 
          action: 'Visitante engajado', 
          status: 'Iniciando experiência interativa...', 
          icon: Zap,
          detail: 'Quiz: "Qual seu perfil empreendedor?"'
        },
        { 
          action: 'Perfil mapeado', 
          status: 'Analisando respostas do usuário...', 
          icon: Target,
          detail: 'Perfil: Visionário Estratégico'
        },
        { 
          action: 'Conteúdo personalizado', 
          status: 'Gerando recomendações únicas...', 
          icon: Star,
          detail: 'Ebook exclusivo para Visionários'
        },
        { 
          action: 'Gamificação ativada', 
          status: 'Desbloqueando próximo nível...', 
          icon: Crown,
          detail: 'Parabéns! Você ganhou 100 pontos'
        },
        { 
          action: 'Conversão alcançada', 
          status: 'Lead qualificado com alta intenção', 
          icon: CheckCircle,
          detail: 'Agendou consultoria gratuita'
        }
      ]
    }
  ];

  const startDemo = (agentId: string) => {
    setActiveAgent(agentId);
    setDemoStep(0);
  };

  const stopDemo = () => {
    setActiveAgent(null);
    setDemoStep(0);
  };

  return (
    <section data-section="agent-types" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">5 Tipos de</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Funcionários Imortais
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Não é só um chatbot. São 5 especialistas digitais, cada um com sua expertise única.
            <span className="text-cyan-400 font-semibold"> Monte sua equipe perfeita em minutos.</span>
          </p>
        </div>

        <div className="space-y-8">
          {agentTypes.map((agent, index) => (
            <div
              key={agent.id}
              className={`${agent.bgGlow} backdrop-blur-sm border ${agent.borderColor} rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.01]`}
            >
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Agent Info */}
                <div className="xl:col-span-1">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${agent.color} p-4 mr-4`}>
                      <agent.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {agent.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {agent.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {agent.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {agent.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(agent.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className={`text-2xl font-bold bg-gradient-to-r ${agent.color} bg-clip-text text-transparent`}>
                          {value}
                        </div>
                        <div className="text-xs text-gray-400 capitalize">
                          {key === 'response' ? 'Resposta' : 
                           key === 'conversion' ? 'Conversão' :
                           key === 'resolution' ? 'Resolução' :
                           key === 'satisfaction' ? 'Satisfação' :
                           key === 'routing' ? 'Direcionamento' :
                           key === 'retention' ? 'Retenção' :
                           key === 'upsell' ? 'Upsell' :
                           key === 'engagement' ? 'Engajamento' :
                           key === 'completion' ? 'Conclusão' :
                           key === 'virality' ? 'Viralização' :
                           key === 'availability' ? 'Disponibilidade' : key}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => activeAgent === agent.id ? stopDemo() : startDemo(agent.id)}
                    className={`w-full px-6 py-3 bg-gradient-to-r ${agent.color} rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 glow-effect`}
                  >
                    {activeAgent === agent.id ? (
                      <>
                        <Pause className="w-5 h-5" />
                        <span>Pausar Demo</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5" />
                        <span>Ver {agent.name} em Ação</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Demo Screen */}
                <div className="xl:col-span-2">
                  <div className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 min-h-[500px]">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-xs text-gray-400">
                        {agent.name} - Demonstração ao Vivo
                      </div>
                    </div>

                    {activeAgent === agent.id ? (
                      <div className="space-y-4">
                        {agent.demoSteps.map((step, stepIndex) => (
                          <div
                            key={stepIndex}
                            className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-700 ${
                              stepIndex <= demoStep 
                                ? `bg-gradient-to-r ${agent.color.replace('to-', 'to-').split(' ')[0]}/20 ${agent.color.replace('from-', 'to-').split(' ')[1]}/20 border ${agent.borderColor}` 
                                : 'bg-gray-800/50 border border-gray-700'
                            }`}
                          >
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                              stepIndex <= demoStep 
                                ? `bg-gradient-to-r ${agent.color}` 
                                : 'bg-gray-700'
                            }`}>
                              <step.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className={`font-semibold mb-1 ${
                                stepIndex <= demoStep ? 'text-white' : 'text-gray-500'
                              }`}>
                                {step.action}
                              </div>
                              <div className={`text-sm mb-2 ${
                                stepIndex <= demoStep ? 'text-cyan-400' : 'text-gray-600'
                              }`}>
                                {step.status}
                              </div>
                              <div className={`text-xs p-2 rounded ${
                                stepIndex <= demoStep 
                                  ? 'bg-black/30 text-gray-300 border border-gray-600' 
                                  : 'bg-gray-800 text-gray-600'
                              }`}>
                                {step.detail}
                              </div>
                            </div>
                            {stepIndex === demoStep && (
                              <div className="flex items-center space-x-2">
                                <div className={`w-3 h-3 rounded-full animate-pulse bg-gradient-to-r ${agent.color}`}></div>
                                <div className="text-xs text-gray-400">Processando...</div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                          <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${agent.color} p-6 mx-auto mb-6 opacity-50`}>
                            <agent.icon className="w-12 h-12 text-white" />
                          </div>
                          <h4 className="text-xl font-semibold text-white mb-2">
                            {agent.name}
                          </h4>
                          <p className="text-gray-400 mb-4">
                            Clique em "Ver em Ação" para assistir este agente trabalhando
                          </p>
                          <div className="text-sm text-gray-500">
                            Demonstração interativa em tempo real
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
            <h3 className="text-3xl font-bold text-white mb-4">
              Monte Sua Equipe dos Sonhos
            </h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto text-lg">
              Combine diferentes tipos de agentes para criar a equipe perfeita para seu negócio.
              <span className="text-cyan-400 font-semibold"> Cada um com sua especialidade, todos trabalhando em harmonia.</span>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto mb-8">
              {agentTypes.map((agent) => (
                <div key={agent.id} className="text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${agent.color} p-4 mx-auto mb-2`}>
                    <agent.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm text-gray-300">{agent.name}</div>
                </div>
              ))}
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-bold text-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 glow-effect">
              <a 
                href="https://www.atendos.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                Criar Minha Equipe de Agentes IA
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentTypes;