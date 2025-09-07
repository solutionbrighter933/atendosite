import React from 'react';
import { 
  ShoppingCart, 
  Headphones, 
  Users, 
  Crown, 
  Zap, 
  MessageCircle,
  CheckCircle,
  Star,
  Brain,
  ArrowRight,
  Settings
} from 'lucide-react';
import DiscountModal from './DiscountModal';

const AgentTypes = () => {
  const [showDiscountModal, setShowDiscountModal] = React.useState(false);

  const handleCreateAgentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDiscountModal(true);
  };

  const agentTypes = [
    {
      id: 'vendedor',
      name: 'Agente Vendedor',
      icon: ShoppingCart,
      aiModel: 'GPT-5',
      aiModelColor: 'text-green-400',
      color: 'from-green-500 to-emerald-600',
      borderColor: 'border-green-500/30',
      bgGlow: 'bg-green-500/10',
      title: 'Máquina de Vendas Implacável',
      subtitle: 'Powered by GPT-5 • Fecha Negócios Enquanto Você Dorme',
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
      }
    },
    {
      id: 'suporte',
      name: 'Agente de Suporte',
      icon: Headphones,
      aiModel: 'Claude 3.5 Sonnet',
      aiModelColor: 'text-orange-400',
      color: 'from-blue-500 to-cyan-600',
      borderColor: 'border-blue-500/30',
      bgGlow: 'bg-blue-500/10',
      title: 'Suporte que Nunca Falha',
      subtitle: 'Powered by Claude 3.5 Sonnet • Resolve Problemas na Velocidade da Luz',
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
      }
    },
    {
      id: 'atendimento',
      name: 'Agente de Atendimento',
      icon: MessageCircle,
      aiModel: 'Gemini 2.5 Pro',
      aiModelColor: 'text-blue-400',
      color: 'from-purple-500 to-pink-600',
      borderColor: 'border-purple-500/30',
      bgGlow: 'bg-purple-500/10',
      title: 'Primeiro Contato Perfeito',
      subtitle: 'Powered by Gemini 2.5 Pro • Recepção VIP para Todos os Clientes',
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
      }
    },
    {
      id: 'gestor',
      name: 'Agente Gestor de Clientes',
      icon: Crown,
      aiModel: 'Grok-4',
      aiModelColor: 'text-purple-400',
      color: 'from-yellow-500 to-orange-600',
      borderColor: 'border-yellow-500/30',
      bgGlow: 'bg-yellow-500/10',
      title: 'Relacionamento que Gera Receita',
      subtitle: 'Powered by Grok-4 • Transforma Clientes em Fãs Apaixonados',
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
      }
    },
    {
      id: 'interativo',
      name: 'Agente Interativo',
      icon: Zap,
      aiModel: 'Llama 3',
      aiModelColor: 'text-cyan-400',
      color: 'from-cyan-500 to-purple-600',
      borderColor: 'border-cyan-500/30',
      bgGlow: 'bg-cyan-500/10',
      title: 'Experiência Mágica e Envolvente',
      subtitle: 'Powered by Llama 3 • Engajamento que Vicia e Converte',
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
      }
    },
    {
      id: 'personalizado',
      name: 'Agente Personalizado',
      icon: Settings,
      aiModel: 'Claude Opus 4.1',
      aiModelColor: 'text-red-400',
      color: 'from-red-500 to-pink-600',
      borderColor: 'border-red-500/30',
      bgGlow: 'bg-red-500/10',
      title: 'Automação Sem Limites',
      subtitle: 'Powered by Claude Opus 4.1 • Integração Total com Qualquer Sistema',
      description: 'Seu especialista em automação que se conecta com qualquer ferramenta existente. CRM, Zapier, Make, bancos de dados - ele integra tudo e cria fluxos personalizados únicos para seu negócio.',
      features: [
        'Integração nativa com CRMs (Salesforce, HubSpot, Pipedrive)',
        'Conecta com Zapier e Make para automações complexas',
        'Acesso direto a bancos de dados e APIs customizadas',
        'Criação de workflows personalizados do zero',
        'Automações multi-plataforma sem código',
        'Personalização 100% adaptada ao seu negócio'
      ],
      metrics: {
        integrations: '500+',
        automation: '99%',
        customization: '100%'
      }
    }
  ];

  return (
    <section data-section="agent-types" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">6 Tipos de</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Funcionários Imortais
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Não é só um chatbot. São 6 especialistas digitais, cada um com sua expertise única.
            <span className="text-cyan-400 font-semibold"> Monte sua equipe perfeita em minutos.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {agentTypes.map((agent, index) => (
            <div
              key={agent.id}
              className={`${agent.bgGlow} backdrop-blur-sm border ${agent.borderColor} rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02]`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${agent.color} p-4 mr-4`}>
                  <agent.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <Brain className="w-4 h-4 mr-2 text-gray-400" />
                    <span className={`text-sm font-semibold ${agent.aiModelColor}`}>
                      {agent.aiModel}
                    </span>
                  </div>
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
              <div className="grid grid-cols-3 gap-4">
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
                       key === 'availability' ? 'Disponibilidade' :
                       key === 'integrations' ? 'Integrações' :
                       key === 'automation' ? 'Automação' :
                       key === 'customization' ? 'Personalização' : key}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
      
      <DiscountModal 
        isOpen={showDiscountModal} 
        onClose={() => setShowDiscountModal(false)} 
      />
    </section>
  );
};

export default AgentTypes;