import React, { useState, useEffect } from 'react';
import { 
  Video, 
  Mic, 
  FileText, 
  Globe, 
  Brain, 
  Play, 
  Pause, 
  Users, 
  Clock, 
  CheckCircle,
  TrendingUp,
  AlertTriangle,
  DollarSign,
  Search,
  BarChart3,
  Languages,
  Download,
  Share2,
  Calendar,
  Zap,
  ArrowRight,
  Eye,
  Headphones,
  MessageSquare,
  Target,
  Database
} from 'lucide-react';
import DiscountModal from './DiscountModal';

const AtendosMeeting = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [transcriptionText, setTranscriptionText] = useState('');
  const [currentPhase, setCurrentPhase] = useState<'recording' | 'transcribing' | 'analyzing' | 'complete'>('recording');
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showDiscountModal, setShowDiscountModal] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const startDemo = () => {
    setIsAnimating(true);
    setIsRecording(true);
    setRecordingTime(0);
    setTranscriptionText('');
    setCurrentPhase('recording');
    setAnalysisResults(null);

    // Fase 1: Gravação (5 segundos)
    setTimeout(() => {
      setCurrentPhase('transcribing');
      simulateTranscription();
    }, 5000);

    // Fase 2: Análise (após transcrição)
    setTimeout(() => {
      setCurrentPhase('analyzing');
      simulateAnalysis();
    }, 12000);

    // Fase 3: Resultados completos
    setTimeout(() => {
      setCurrentPhase('complete');
      setIsRecording(false);
    }, 18000);
  };

  const stopDemo = () => {
    setIsAnimating(false);
    setIsRecording(false);
    setRecordingTime(0);
    setTranscriptionText('');
    setCurrentPhase('recording');
    setAnalysisResults(null);
  };

  const handleCreateAgentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDiscountModal(true);
  };

  const simulateTranscription = () => {
    const fullText = "João: Bom dia! Obrigado por aceitar nossa reunião. Somos uma empresa de consultoria em marketing digital e estamos buscando uma solução de automação para nosso atendimento. Maria: Perfeito! Podem me explicar um pouco mais sobre o volume de clientes que vocês atendem? João: Atendemos cerca de 200 clientes por mês, mas queremos escalar para 500. O problema é que não conseguimos contratar mais pessoas agora. Maria: Entendo perfeitamente. Nossa solução de IA pode automatizar 80% do seu atendimento. O investimento seria de R$ 1.500 por mês. João: Hmm, é um valor alto para nós. Temos um orçamento de até R$ 1.000. Maria: Posso verificar se conseguimos uma condição especial para vocês...";
    
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTranscriptionText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);
  };

  const simulateAnalysis = () => {
    setTimeout(() => {
      setAnalysisResults({
        sentiment: 'Positivo',
        dealProbability: 75,
        budget: 'R$ 1.000',
        proposedValue: 'R$ 1.500',
        painPoints: ['Falta de pessoal', 'Necessidade de escalar', 'Orçamento limitado'],
        nextSteps: ['Proposta personalizada', 'Desconto especial', 'Follow-up em 2 dias'],
        competitorAnalysis: {
          found: true,
          competitors: ['ChatGuru', 'BotMaker', 'AutoChat'],
          pricing: ['R$ 800/mês', 'R$ 1.200/mês', 'R$ 900/mês'],
          recommendation: 'Oferecer R$ 950/mês com 3 meses grátis'
        },
        insights: [
          'Cliente tem urgência para escalar',
          'Orçamento flexível se mostrar ROI',
          'Decisor presente na reunião',
          'Concorrência oferece preços menores'
        ]
      });
    }, 3000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const features = [
    {
      icon: Video,
      title: 'Gravação Automática',
      description: 'Grava reuniões no Zoom, Google Meet e MS Teams automaticamente',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Languages,
      title: 'Transcrição Multilíngue',
      description: 'Transcreve e traduz em mais de 30 idiomas, incluindo português brasileiro',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Brain,
      title: 'Análise Inteligente',
      description: 'IA analisa sentimentos, identifica pain points e sugere próximos passos',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Search,
      title: 'Pesquisa de Concorrência',
      description: 'Busca automaticamente concorrentes e compara preços em tempo real',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: FileText,
      title: 'Ata Automática',
      description: 'Gera resumo executivo com insights, decisões e action items',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Database,
      title: 'Integração com CRM',
      description: 'Atualiza automaticamente seu CRM com informações da reunião',
      color: 'from-pink-500 to-purple-600'
    }
  ];

  return (
    <section data-section="atendos-meeting" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-6 backdrop-blur-sm">
            <Video className="w-4 h-4 mr-2" />
            Nova Feature: Atendos Meeting
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Atendos Meeting
            </span>
            <br />
            <span className="text-white">Notetaker com IA</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            IA que grava, transcreve e resume reuniões automaticamente no Zoom, Google Meet e MS Teams. 
            Traduz em 30+ idiomas, analisa sentimentos, pesquisa concorrência e gera atas completas.
            <span className="text-blue-400 font-semibold"> Sua reunião vira inteligência de negócio!</span>
          </p>
        </div>

        {/* Demo Interface */}
        <div className="mb-16">
          <div className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg md:text-2xl font-bold text-white">Demonstração: Atendos Meeting em Ação</h3>
              <button
                onClick={isAnimating ? stopDemo : startDemo}
                className="px-3 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 flex items-center space-x-1 md:space-x-2 glow-effect text-sm md:text-base"
              >
                {isAnimating ? (
                  <>
                    <Pause className="w-5 h-5" />
                    <span className="hidden sm:inline">Pausar Demo</span>
                    <span className="sm:hidden">Pausar</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    <span className="hidden sm:inline">Iniciar Reunião</span>
                    <span className="sm:hidden">Iniciar</span>
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
              {/* Meeting Interface */}
              <div className="space-y-6">
                {/* Recording Status */}
                <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl p-4 md:p-6 border border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-gray-500'}`}></div>
                      <span className="text-white font-semibold text-sm md:text-base">
                        {isRecording ? 'Gravando Reunião' : 'Reunião Finalizada'}
                      </span>
                    </div>
                    <div className="text-cyan-400 font-mono text-sm md:text-base">
                      {formatTime(recordingTime)}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 md:space-x-4 mb-4 flex-wrap">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300 text-sm">2 participantes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300 text-sm">Português BR</span>
                    </div>
                  </div>

                  {/* Phase Indicators */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <div className={`text-center p-2 rounded-lg transition-all duration-500 ${
                      currentPhase === 'recording' ? 'bg-red-500/20 border border-red-500/50' : 
                      ['transcribing', 'analyzing', 'complete'].includes(currentPhase) ? 'bg-green-500/20 border border-green-500/50' : 
                      'bg-gray-800/50 border border-gray-600'
                    }`}>
                      <Mic className={`w-5 h-5 mx-auto mb-1 ${
                        currentPhase === 'recording' ? 'text-red-400' : 
                        ['transcribing', 'analyzing', 'complete'].includes(currentPhase) ? 'text-green-400' : 
                        'text-gray-500'
                      }`} />
                      <div className="text-xs text-gray-300 hidden md:block">Gravando</div>
                      <div className="text-xs text-gray-300 md:hidden">Grav.</div>
                    </div>
                    
                    <div className={`text-center p-2 rounded-lg transition-all duration-500 ${
                      currentPhase === 'transcribing' ? 'bg-blue-500/20 border border-blue-500/50' : 
                      ['analyzing', 'complete'].includes(currentPhase) ? 'bg-green-500/20 border border-green-500/50' : 
                      'bg-gray-800/50 border border-gray-600'
                    }`}>
                      <FileText className={`w-5 h-5 mx-auto mb-1 ${
                        currentPhase === 'transcribing' ? 'text-blue-400' : 
                        ['analyzing', 'complete'].includes(currentPhase) ? 'text-green-400' : 
                        'text-gray-500'
                      }`} />
                      <div className="text-xs text-gray-300 hidden md:block">Transcrevendo</div>
                      <div className="text-xs text-gray-300 md:hidden">Trans.</div>
                    </div>
                    
                    <div className={`text-center p-2 rounded-lg transition-all duration-500 ${
                      currentPhase === 'analyzing' ? 'bg-purple-500/20 border border-purple-500/50' : 
                      currentPhase === 'complete' ? 'bg-green-500/20 border border-green-500/50' : 
                      'bg-gray-800/50 border border-gray-600'
                    }`}>
                      <Brain className={`w-5 h-5 mx-auto mb-1 ${
                        currentPhase === 'analyzing' ? 'text-purple-400' : 
                        currentPhase === 'complete' ? 'text-green-400' : 
                        'text-gray-500'
                      }`} />
                      <div className="text-xs text-gray-300 hidden md:block">Analisando</div>
                      <div className="text-xs text-gray-300 md:hidden">Anál.</div>
                    </div>
                    
                    <div className={`text-center p-2 rounded-lg transition-all duration-500 ${
                      currentPhase === 'complete' ? 'bg-green-500/20 border border-green-500/50' : 
                      'bg-gray-800/50 border border-gray-600'
                    }`}>
                      <CheckCircle className={`w-5 h-5 mx-auto mb-1 ${
                        currentPhase === 'complete' ? 'text-green-400' : 'text-gray-500'
                      }`} />
                      <div className="text-xs text-gray-300 hidden md:block">Completo</div>
                      <div className="text-xs text-gray-300 md:hidden">OK</div>
                    </div>
                  </div>
                </div>

                {/* Live Transcription */}
                <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl p-4 md:p-6 border border-gray-700 min-h-[250px] md:min-h-[300px]">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-base md:text-lg font-semibold text-white flex items-center">
                      <Languages className="w-5 h-5 mr-2 text-blue-400" />
                      <span className="hidden md:inline">Transcrição em Tempo Real</span>
                      <span className="md:hidden">Transcrição</span>
                    </h4>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm">Live</span>
                    </div>
                  </div>
                  
                  <div className="bg-black/30 rounded-lg p-3 md:p-4 min-h-[150px] md:min-h-[200px] border border-gray-600 overflow-y-auto">
                    {transcriptionText ? (
                      <div className="space-y-3">
                        <div className="text-gray-300 text-xs md:text-sm leading-relaxed whitespace-pre-wrap break-words">
                          {transcriptionText}
                          {currentPhase === 'transcribing' && (
                            <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-pulse"></span>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                          <Headphones className="w-8 md:w-12 h-8 md:h-12 text-gray-500 mx-auto mb-3" />
                          <p className="text-gray-400 text-sm md:text-base px-2">
                            {isRecording ? 'Aguardando áudio...' : 'Clique em "Iniciar" para ver a demo'}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Analysis Panel */}
              <div className="space-y-6">
                {/* AI Analysis */}
                <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl p-4 md:p-6 border border-gray-700">
                  <h4 className="text-base md:text-lg font-semibold text-white mb-4 flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-purple-400" />
                    <span className="hidden md:inline">Análise de IA</span>
                    <span className="md:hidden">Análise</span>
                  </h4>
                  
                  {analysisResults ? (
                    <div className="space-y-3 md:space-y-4">
                      {/* Deal Probability */}
                      <div className="bg-black/30 p-3 md:p-4 rounded-lg border border-gray-600">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-300 text-xs md:text-sm">
                            <span className="hidden md:inline">Probabilidade de Fechamento</span>
                            <span className="md:hidden">Prob. Fechamento</span>
                          </span>
                          <span className="text-green-400 font-bold text-sm md:text-base">{analysisResults.dealProbability}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${analysisResults.dealProbability}%` }}
                          />
                        </div>
                      </div>

                      {/* Budget Analysis */}
                      <div className="bg-black/30 p-3 md:p-4 rounded-lg border border-gray-600">
                        <h5 className="text-white font-semibold mb-2 flex items-center text-sm md:text-base">
                          <DollarSign className="w-4 h-4 mr-2 text-yellow-400" />
                          <span className="hidden md:inline">Análise Financeira</span>
                          <span className="md:hidden">Financeiro</span>
                        </h5>
                        <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-400">
                              <span className="hidden md:inline">Orçamento Cliente:</span>
                              <span className="md:hidden">Orçamento:</span>
                            </span>
                            <span className="text-red-400">{analysisResults.budget}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">
                              <span className="hidden md:inline">Valor Proposto:</span>
                              <span className="md:hidden">Proposta:</span>
                            </span>
                            <span className="text-blue-400">{analysisResults.proposedValue}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">
                              <span className="hidden md:inline">Recomendação IA:</span>
                              <span className="md:hidden">Recomendação:</span>
                            </span>
                            <span className="text-green-400 text-xs md:text-sm break-words">{analysisResults.competitorAnalysis.recommendation}</span>
                          </div>
                        </div>
                      </div>

                      {/* Competitor Analysis */}
                      <div className="bg-black/30 p-3 md:p-4 rounded-lg border border-gray-600">
                        <h5 className="text-white font-semibold mb-3 flex items-center text-sm md:text-base">
                          <Search className="w-4 h-4 mr-2 text-orange-400" />
                          <span className="hidden md:inline">Concorrência Encontrada</span>
                          <span className="md:hidden">Concorrência</span>
                        </h5>
                        <div className="space-y-1 md:space-y-2">
                          {analysisResults.competitorAnalysis.competitors.map((competitor: string, index: number) => (
                            <div key={index} className="flex justify-between items-center text-xs md:text-sm">
                              <span className="text-gray-300 truncate mr-2">{competitor}</span>
                              <span className="text-orange-400 flex-shrink-0">{analysisResults.competitorAnalysis.pricing[index]}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Insights */}
                      <div className="bg-black/30 p-3 md:p-4 rounded-lg border border-gray-600">
                        <h5 className="text-white font-semibold mb-3 flex items-center text-sm md:text-base">
                          <Target className="w-4 h-4 mr-2 text-cyan-400" />
                          <span className="hidden md:inline">Insights Principais</span>
                          <span className="md:hidden">Insights</span>
                        </h5>
                        <div className="space-y-1 md:space-y-2">
                          {analysisResults.insights.map((insight: string, index: number) => (
                            <div key={index} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-xs md:text-sm break-words">{insight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-48 md:h-64">
                      <div className="text-center">
                        {currentPhase === 'recording' && isRecording ? (
                          <div>
                            <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center mx-auto mb-4 animate-pulse">
                              <Mic className="w-6 md:w-8 h-6 md:h-8 text-red-400" />
                            </div>
                            <p className="text-red-400 font-semibold text-sm md:text-base">
                              <span className="hidden md:inline">Gravando reunião...</span>
                              <span className="md:hidden">Gravando...</span>
                            </p>
                            <p className="text-gray-400 text-xs md:text-sm px-2">
                              <span className="hidden md:inline">IA está ouvindo e processando</span>
                              <span className="md:hidden">IA processando</span>
                            </p>
                          </div>
                        ) : currentPhase === 'transcribing' ? (
                          <div>
                            <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center mx-auto mb-4 animate-spin">
                              <FileText className="w-6 md:w-8 h-6 md:h-8 text-blue-400" />
                            </div>
                            <p className="text-blue-400 font-semibold text-sm md:text-base">
                              <span className="hidden md:inline">Transcrevendo áudio...</span>
                              <span className="md:hidden">Transcrevendo...</span>
                            </p>
                            <p className="text-gray-400 text-xs md:text-sm px-2">
                              <span className="hidden md:inline">Convertendo fala em texto</span>
                              <span className="md:hidden">Convertendo áudio</span>
                            </p>
                          </div>
                        ) : currentPhase === 'analyzing' ? (
                          <div>
                            <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center mx-auto mb-4">
                              <Brain className="w-6 md:w-8 h-6 md:h-8 text-purple-400 animate-pulse" />
                            </div>
                            <p className="text-purple-400 font-semibold text-sm md:text-base">
                              <span className="hidden md:inline">Analisando conteúdo...</span>
                              <span className="md:hidden">Analisando...</span>
                            </p>
                            <p className="text-gray-400 text-xs md:text-sm px-2">
                              <span className="hidden md:inline">IA processando insights</span>
                              <span className="md:hidden">Processando</span>
                            </p>
                          </div>
                        ) : (
                          <div>
                            <Video className="w-12 md:w-16 h-12 md:h-16 text-gray-500 mx-auto mb-4" />
                            <p className="text-gray-400 text-sm md:text-base px-2">
                              <span className="hidden md:inline">Inicie a demonstração para ver a IA em ação</span>
                              <span className="md:hidden">Inicie para ver a IA</span>
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            {isAnimating && (
              <div className="mt-6 md:mt-8 p-3 md:p-4 bg-black/70 rounded-xl border border-gray-700 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-semibold text-sm md:text-base">
                    <span className="hidden md:inline">Progresso da Análise</span>
                    <span className="md:hidden">Progresso</span>
                  </span>
                  <span className="text-cyan-400 font-mono text-xs md:text-sm">
                    {currentPhase === 'recording' ? 'Gravando...' :
                     currentPhase === 'transcribing' ? 'Transcrevendo...' :
                     currentPhase === 'analyzing' ? 'Analisando...' : 'Completo!'}
                  </span>
                </div>
                
                <div className="w-full bg-gray-800 rounded-full h-3 border border-gray-600 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 h-3 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                    style={{ 
                      width: currentPhase === 'recording' ? '25%' :
                             currentPhase === 'transcribing' ? '50%' :
                             currentPhase === 'analyzing' ? '75%' : '100%'
                    }}
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
            <span className="hidden md:inline">Perfeito Para Qualquer Reunião de Negócios</span>
            <span className="md:hidden text-2xl">Para Qualquer Reunião</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-4 mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2 text-sm md:text-base">Vendas B2B</h4>
              <p className="text-gray-400 text-xs md:text-sm">
                <span className="hidden md:inline">Propostas, negociações, fechamentos</span>
                <span className="md:hidden">Propostas</span>
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-4 mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2 text-sm md:text-base">Consultoria</h4>
              <p className="text-gray-400 text-xs md:text-sm">
                <span className="hidden md:inline">Diagnósticos, estratégias, planejamento</span>
                <span className="md:hidden">Estratégias</span>
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-4 mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2 text-sm md:text-base">
                <span className="hidden md:inline">Reuniões Internas</span>
                <span className="md:hidden">Internas</span>
              </h4>
              <p className="text-gray-400 text-xs md:text-sm">
                <span className="hidden md:inline">Planejamento, alinhamentos, decisões</span>
                <span className="md:hidden">Planejamento</span>
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 p-4 mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2 text-sm md:text-base">
                <span className="hidden md:inline">Qualquer Reunião</span>
                <span className="md:hidden">Qualquer</span>
              </h4>
              <p className="text-gray-400 text-xs md:text-sm">
                <span className="hidden md:inline">Zoom, Meet, Teams - funciona em tudo</span>
                <span className="md:hidden">Zoom, Meet, Teams</span>
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            <span className="hidden md:inline">Resultados Comprovados</span>
            <span className="md:hidden text-2xl">Resultados</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-gray-400 text-sm md:text-base">
                <span className="hidden md:inline">Precisão na Transcrição</span>
                <span className="md:hidden">Precisão</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-purple-400 mb-2">30+</div>
              <div className="text-gray-400 text-sm md:text-base">
                <span className="hidden md:inline">Idiomas Suportados</span>
                <span className="md:hidden">Idiomas</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-green-400 mb-2">80%</div>
              <div className="text-gray-400 text-sm md:text-base">
                <span className="hidden md:inline">Economia de Tempo</span>
                <span className="md:hidden">Economia</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-cyan-400 mb-2">100%</div>
              <div className="text-gray-400 text-sm md:text-base">Automático</div>
            </div>
          </div>

          <a
            href="#"
            onClick={handleCreateAgentClick}
            className="px-6 md:px-10 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-bold text-lg md:text-xl hover:from-blue-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 glow-effect inline-flex items-center space-x-2"
          >
            <Video className="w-6 h-6" />
            <span className="hidden sm:inline">Disponível apenas no Atendos Pro!</span>
            <span className="sm:hidden">Atendos Pro!</span>
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </div>
      
      <DiscountModal 
        isOpen={showDiscountModal} 
        onClose={() => setShowDiscountModal(false)} 
      />
    </section>
  );
};

export default AtendosMeeting;