import React from 'react';
import { ArrowLeft, Users, MapPin, Target, Zap, Heart, Star } from 'lucide-react';

const Sobre = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 pointer-events-none" />
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <a 
                  href="/"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Voltar</span>
                </a>
                <div className="h-6 w-px bg-gray-600" />
                <img 
                  src="/LOGO.png" 
                  alt="Atendos IA" 
                  className="h-8 w-auto"
                />
              </div>
              <div className="text-sm text-gray-400">
                Nossa História
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-6 backdrop-blur-sm">
                <Users className="w-4 h-4 mr-2" />
                Nossa História
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Sobre a Atendos IA
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                A história de como duas mentes inquietas revolucionaram o atendimento com inteligência artificial
              </p>
            </div>

            {/* Story Section */}
            <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 md:p-12 mb-16">
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  A <span className="text-cyan-400 font-semibold">Atendos IA</span> nasceu da visão ousada de duas mentes inquietas: 
                  <span className="text-purple-400 font-semibold"> Omar Furtado de Oliveira Neto</span> e 
                  <span className="text-purple-400 font-semibold"> João Otávio Siqueira</span>, empreendedores obcecados por performance, 
                  automação e inteligência artificial aplicada a negócios reais.
                </p>

                <div className="flex items-center space-x-2 mb-8">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                  <p className="text-lg text-gray-300">
                    Tudo começou de forma prática, nas ruas e comércios da cidade de 
                    <span className="text-cyan-400 font-semibold"> Pouso Alegre, em Minas Gerais</span>, onde dezenas de testes foram feitos 
                    com empresas locais para entender, na pele, o que realmente funciona quando se trata de atendimento, conversão e automação com IA.
                  </p>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Depois de incontáveis iterações e validações no campo de batalha, a Atendos se consolidou como uma 
                  <span className="text-purple-400 font-semibold"> plataforma de atendimento inteligente feita para escalar</span>. 
                  Hoje, atende empresas de médio e grande porte em todo o Brasil, automatizando processos, aumentando vendas e 
                  transformando atendentes humanos em agentes digitais de alta performance.
                </p>

                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl p-6 mb-8">
                  <p className="text-xl text-white font-semibold text-center leading-relaxed">
                    A Atendos IA não é só uma ferramenta.
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      É o início de uma nova era, onde cada empresa pode ter seu próprio clone digital vendendo, 
                      atendendo, marcando reuniões e encantando clientes 24h por dia.
                    </span>
                  </p>
                </div>

                <p className="text-xl text-center text-gray-300 font-semibold">
                  Você não precisa contratar mais pessoas. 
                  <span className="text-cyan-400"> Só precisa treinar a sua IA.</span>
                </p>
              </div>
            </div>

            {/* Founders Section */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Conheça os Fundadores
                </span>
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Omar */}
                <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02]">
                  <div className="text-center mb-6">
                    <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-cyan-500/30">
                      <img 
                        src="/Omar Furtado Foto.jpg" 
                        alt="Omar Furtado de Oliveira Neto"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Omar Furtado de Oliveira Neto
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-4">Co-Fundador</p>
                    <div className="flex justify-center space-x-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Target className="w-5 h-5 text-cyan-400 mr-3" />
                      <span className="text-gray-300">Especialista em Marketing e Automação</span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="w-5 h-5 text-purple-400 mr-3" />
                      <span className="text-gray-300">Referência em IA Aplicada a Negócios</span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-5 h-5 text-pink-400 mr-3" />
                      <span className="text-gray-300">Obcecado por SaaS com foco híbrido em B2B / B2C</span>
                    </div>
                  </div>
                </div>

                {/* João */}
                <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02]">
                  <div className="text-center mb-6">
                    <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-500/30">
                      <img 
                        src="/João Otávio Foto.JPG" 
                        alt="João Otávio Siqueira"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      João Otávio Siqueira
                    </h3>
                    <p className="text-purple-400 font-semibold mb-4">Co-Fundador</p>
                    <div className="flex justify-center space-x-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Zap className="w-5 h-5 text-purple-400 mr-3" />
                      <span className="text-gray-300">Mestre em Inteligência Artificial</span>
                    </div>
                    <div className="flex items-center">
                      <Target className="w-5 h-5 text-cyan-400 mr-3" />
                      <span className="text-gray-300">Arquiteto de Soluções Escaláveis</span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-5 h-5 text-pink-400 mr-3" />
                      <span className="text-gray-300">Apaixonado por resultados reais e testes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-4 mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Nossa Missão</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Democratizar o acesso à inteligência artificial para empresas de todos os tamanhos, 
                  transformando atendimento em vantagem competitiva.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-4 mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Nossa Visão</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Ser a plataforma líder em IA conversacional no Brasil, 
                  onde cada empresa tenha seu próprio funcionário digital imortal.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 p-4 mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Nossos Valores</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Inovação constante, resultados reais, transparência total e 
                  obsessão pela satisfação dos nossos clientes.
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                Números que Comprovam Nossa Trajetória
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">+ 1.784</div>
                  <div className="text-gray-400">Agentes IA Ativos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">+ 17.639</div>
                  <div className="text-gray-400">Vendas Geradas</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-pink-400 mb-2">+ 80</div>
                  <div className="text-gray-400">Empresas Atendidas</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">99.8%</div>
                  <div className="text-gray-400">Uptime da Plataforma</div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <h3 className="text-3xl font-bold text-white mb-6">
                Faça Parte da Revolução da IA
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Junte-se a milhares de empresas que já descobriram o poder de ter um funcionário imortal
              </p>
              <a
                href="https://www.atendos.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-bold text-xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 glow-effect"
              >
                Criar Meu Agente IA Agora
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Sobre;