import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Globe, 
  User, 
  Send, 
  Target, 
  Zap,
  Play,
  Pause,
  CheckCircle,
  ArrowRight,
  Database,
  MessageSquare,
  Users,
  TrendingUp,
  Filter,
  Download,
  Eye,
  Edit3
} from 'lucide-react';

const B2BLeadGenerator = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [foundLeads, setFoundLeads] = useState<any[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAnimating) {
      interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= 4) {
            setIsAnimating(false);
            return 0;
          }
          return prev + 1;
        });
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [isAnimating]);

  const startDemo = () => {
    setIsAnimating(true);
    setCurrentStep(0);
    setSearchQuery('');
    setFoundLeads([]);
    
    // Simular busca
    setTimeout(() => setSearchQuery('empresas de tecnologia em São Paulo'), 500);
    
    // Simular resultados
    setTimeout(() => {
      setFoundLeads([
        {
          id: 1,
          name: 'TechCorp Solutions',
          email: 'contato@techcorp.com.br',
          phone: '+55 11 99999-1234',
          address: 'Av. Paulista, 1000 - São Paulo, SP',
          website: 'www.techcorp.com.br',
          hours: 'Seg-Sex: 9h-18h',
          category: 'Desenvolvimento de Software'
        },
        {
          id: 2,
          name: 'InnovaTech Ltda',
          email: 'vendas@innovatech.com.br',
          phone: '+55 11 88888-5678',
          address: 'R. Augusta, 500 - São Paulo, SP',
          website: 'www.innovatech.com.br',
          hours: 'Seg-Sex: 8h-17h',
          category: 'Consultoria em TI'
        },
        {
          id: 3,
          name: 'Digital Systems Pro',
          email: 'info@digitalsystems.com.br',
          phone: '+55 11 77777-9012',
          address: 'Av. Faria Lima, 2000 - São Paulo, SP',
          website: 'www.digitalsystems.com.br',
          hours: 'Seg-Sex: 9h-19h',
          category: 'Transformação Digital'
        }
      ]);
    }, 3000);
  };

  const stopDemo = () => {
    setIsAnimating(false);
    setCurrentStep(0);
    setSearchQuery('');
    setFoundLeads([]);
  };

  const demoSteps = [
    {
      title: 'Busca Inteligente Iniciada',
      description: 'IA processando sua solicitação...',
      icon: Search,
      color: 'from-blue-500 to-cyan-500',
      detail: 'Analisando: "empresas de tecnologia em São Paulo"'
    },
    {
      title: 'Mineração de Dados',
      description: 'Coletando informações de múltiplas fontes...',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      detail: 'Fontes: Google Maps, LinkedIn, sites corporativos, diretórios'
    },
    {
      title: 'Leads Encontrados',
      description: 'Dados organizados e validados',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      detail: '247 empresas encontradas com dados completos'
    },
    {
      title: 'Mensagens Personalizadas',
      description: 'IA criando abordagens únicas para cada lead',
      icon: MessageSquare,
      color: 'from-orange-500 to-red-500',
      detail: 'Personalizando com base no perfil de cada empresa'
    },
    {
      title: 'Campanha Enviada',
      description: 'Mensagens entregues com sucesso!',
      icon: CheckCircle,
      color: 'from-cyan-500 to-blue-500',
      detail: '247 mensagens enviadas • Taxa de entrega: 98.7%'
    }
  ];

  const features = [
    {
      icon: Search,
      title: 'Busca Inteligente por IA',
      description: 'Digite qualquer critério e nossa IA encontra empresas relevantes automaticamente',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Dados Completos e Atualizados',
      description: 'Email, telefone, endereço, site, horários e informações de contato validadas',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Segmentação Avançada',
      description: 'Filtre por setor, tamanho, localização, faturamento e outros critérios específicos',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MessageSquare,
      title: 'Mensagens Personalizadas',
      description: 'IA cria abordagens únicas para cada empresa baseada no perfil e necessidades',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Send,
      title: 'Envio em Massa Inteligente',
      description: 'Envie para todos de uma vez ou personalize individualmente com timing otimizado',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: TrendingUp,
      title: 'Analytics e Acompanhamento',
      description: 'Monitore abertura, resposta, conversão e ROI de cada campanha em tempo real',
      color: 'from-pink-500 to-purple-500'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-6 backdrop-blur-sm">
            <Target className="w-4 h-4 mr-2" />
            Nova Feature: B2B Lead Generator
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Gerador de Leads
            </span>
            <br />
            <span className="text-white">para B2B</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Digite "busque empresas de tecnologia em São Paulo" e nossa IA encontra centenas de leads qualificados 
            com dados completos. Depois envia mensagens personalizadas para todos de uma só vez.
            <span className="text-blue-400 font-semibold"> Prospecção nunca foi tão fácil!</span>
          </p>
        </div>

        {/* Demo Interface */}
        <div className="mb-16">
          <div className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white">Demonstração: B2B Lead Generator em Ação</h3>
              <button
                onClick={isAnimating ? stopDemo : startDemo}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 flex items-center space-x-2 glow-effect"
              >
                {isAnimating ? (
                  <>
                    <Pause className="w-5 h-5" />
                    <span>Pausar Demo</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    <span>Iniciar Demo</span>
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Search Interface */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Search className="w-5 h-5 mr-2 text-blue-400" />
                    Busca Inteligente
                  </h4>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Ex: empresas de tecnologia em São Paulo"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                    />
                    <button className="absolute right-2 top-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md text-white text-sm hover:scale-105 transition-all duration-300">
                      <Search className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {isAnimating && currentStep >= 0 && (
                    <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                        <span className="text-blue-400 text-sm">Processando busca...</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Progress Steps */}
                <div className="space-y-3">
                  {demoSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-700 ${
                        isAnimating && index <= currentStep 
                          ? `bg-gradient-to-r ${step.color.replace('to-', 'to-').split(' ')[0]}/20 ${step.color.replace('from-', 'to-').split(' ')[1]}/20 border border-blue-500/30` 
                          : 'bg-gray-800/50 border border-gray-700'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isAnimating && index <= currentStep 
                          ? `bg-gradient-to-r ${step.color}` 
                          : 'bg-gray-700'
                      }`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className={`font-semibold ${
                          isAnimating && index <= currentStep ? 'text-white' : 'text-gray-500'
                        }`}>
                          {step.title}
                        </div>
                        <div className={`text-sm ${
                          isAnimating && index <= currentStep ? 'text-blue-400' : 'text-gray-600'
                        }`}>
                          {step.description}
                        </div>
                        {isAnimating && index === currentStep && (
                          <div className="mt-2 text-xs text-gray-300 bg-black/30 p-2 rounded border border-gray-600">
                            {step.detail}
                          </div>
                        )}
                      </div>
                      {isAnimating && index === currentStep && (
                        <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Results Panel */}
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-green-400" />
                  Leads Encontrados
                </h4>
                
                {foundLeads.length > 0 ? (
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {foundLeads.map((lead, index) => (
                      <div
                        key={lead.id}
                        className="bg-black/30 border border-gray-600 rounded-lg p-4 hover:bg-black/50 transition-all duration-300"
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h5 className="font-semibold text-white">{lead.name}</h5>
                            <p className="text-xs text-gray-400">{lead.category}</p>
                          </div>
                          <div className="flex space-x-2">
                            <button className="p-1 text-blue-400 hover:text-blue-300">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-1 text-green-400 hover:text-green-300">
                              <Edit3 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center text-gray-300">
                            <Mail className="w-4 h-4 mr-2 text-blue-400" />
                            {lead.email}
                          </div>
                          <div className="flex items-center text-gray-300">
                            <Phone className="w-4 h-4 mr-2 text-green-400" />
                            {lead.phone}
                          </div>
                          <div className="flex items-center text-gray-300">
                            <MapPin className="w-4 h-4 mr-2 text-red-400" />
                            {lead.address}
                          </div>
                          <div className="flex items-center text-gray-300">
                            <Globe className="w-4 h-4 mr-2 text-purple-400" />
                            {lead.website}
                          </div>
                          <div className="flex items-center text-gray-300">
                            <Clock className="w-4 h-4 mr-2 text-yellow-400" />
                            {lead.hours}
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {isAnimating && currentStep >= 3 && (
                      <div className="mt-6 space-y-3">
                        <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                          <Send className="w-5 h-5" />
                          <span>Enviar para Todos (247 leads)</span>
                        </button>
                        <button className="w-full px-4 py-3 border border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center space-x-2">
                          <Edit3 className="w-5 h-5" />
                          <span>Personalizar Individualmente</span>
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Database className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">
                      {isAnimating ? 'Buscando leads...' : 'Inicie a demonstração para ver os resultados'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:border-blue-500/40 group"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-sm mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Exemplos de Buscas Inteligentes
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-blue-400 mb-4">Por Setor:</h4>
              <div className="space-y-2">
                <div className="bg-black/30 p-3 rounded-lg border border-gray-600">
                  <span className="text-gray-300">"empresas de tecnologia em São Paulo"</span>
                </div>
                <div className="bg-black/30 p-3 rounded-lg border border-gray-600">
                  <span className="text-gray-300">"clínicas médicas no Rio de Janeiro"</span>
                </div>
                <div className="bg-black/30 p-3 rounded-lg border border-gray-600">
                  <span className="text-gray-300">"escritórios de advocacia em Belo Horizonte"</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-purple-400 mb-4">Por Características:</h4>
              <div className="space-y-2">
                <div className="bg-black/30 p-3 rounded-lg border border-gray-600">
                  <span className="text-gray-300">"startups com mais de 50 funcionários"</span>
                </div>
                <div className="bg-black/30 p-3 rounded-lg border border-gray-600">
                  <span className="text-gray-300">"empresas que usam Salesforce"</span>
                </div>
                <div className="bg-black/30 p-3 rounded-lg border border-gray-600">
                  <span className="text-gray-300">"e-commerces com faturamento acima de R$ 1M"</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Resultados Comprovados
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">10x</div>
              <div className="text-gray-400">Mais Leads Qualificados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">85%</div>
              <div className="text-gray-400">Taxa de Entrega</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">3x</div>
              <div className="text-gray-400">Mais Conversões</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">90%</div>
              <div className="text-gray-400">Economia de Tempo</div>
            </div>
          </div>

          <a
            href="https://www.atendos.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-bold text-xl hover:from-blue-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 glow-effect inline-flex items-center space-x-2"
          >
            <Target className="w-6 h-6" />
            <span>Começar a Gerar Leads Agora</span>
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default B2BLeadGenerator;