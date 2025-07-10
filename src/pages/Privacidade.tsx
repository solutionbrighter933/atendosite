import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, Settings, AlertCircle } from 'lucide-react';

const Privacidade = () => {
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
                Última atualização: Janeiro 2024
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-6 backdrop-blur-sm">
                <Shield className="w-4 h-4 mr-2" />
                Política de Privacidade
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Sua Privacidade
                </span>
                <br />
                <span className="text-white">É Nossa Prioridade</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Entenda como coletamos, usamos, armazenamos e protegemos suas informações pessoais na plataforma Atendos IA.
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Section 1 */}
              <section className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-3 mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">1. Informações que Coletamos</h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p>
                    <strong>1.1 Informações de Conta:</strong> Nome, email, telefone, dados de pagamento e informações de perfil necessárias para criar e manter sua conta.
                  </p>
                  <p>
                    <strong>1.2 Dados de Uso:</strong> Informações sobre como você usa nossa plataforma, incluindo logs de acesso, interações com agentes IA e métricas de performance.
                  </p>
                  <p>
                    <strong>1.3 Conteúdo de Treinamento:</strong> Textos, áudios e outros materiais que você fornece para treinar seus agentes IA, incluindo dados de clonagem de voz.
                  </p>
                  <p>
                    <strong>1.4 Dados de Integração:</strong> Informações necessárias para conectar com WhatsApp, Instagram, Google Calendar e outras plataformas autorizadas por você.
                  </p>
                  <p>
                    <strong>1.5 Informações Técnicas:</strong> Endereço IP, tipo de dispositivo, navegador, sistema operacional e dados de localização aproximada.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-3 mr-4">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">2. Como Usamos Suas Informações</h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Utilizamos suas informações para:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Prestação de Serviços:</strong> Criar, treinar e operar seus agentes IA personalizados</li>
                    <li><strong>Clonagem de Voz:</strong> Processar amostras de áudio para replicar sua voz nos agentes</li>
                    <li><strong>Integrações:</strong> Conectar com suas contas de WhatsApp, Instagram e Google Calendar</li>
                    <li><strong>Suporte Técnico:</strong> Resolver problemas e fornecer assistência</li>
                    <li><strong>Melhorias:</strong> Aprimorar nossos algoritmos e funcionalidades</li>
                    <li><strong>Comunicação:</strong> Enviar atualizações, notificações e informações importantes</li>
                    <li><strong>Segurança:</strong> Detectar e prevenir fraudes e atividades maliciosas</li>
                    <li><strong>Conformidade:</strong> Cumprir obrigações legais e regulamentares</li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-3 mr-4">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">3. Proteção e Segurança</h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p>
                    <strong>3.1 Criptografia:</strong> Todos os dados são criptografados em trânsito (TLS 1.3) e em repouso (AES-256).
                  </p>
                  <p>
                    <strong>3.2 Acesso Restrito:</strong> Apenas funcionários autorizados têm acesso aos dados, seguindo o princípio do menor privilégio.
                  </p>
                  <p>
                    <strong>3.3 Infraestrutura Segura:</strong> Utilizamos servidores em data centers certificados com monitoramento 24/7.
                  </p>
                  <p>
                    <strong>3.4 Auditorias:</strong> Realizamos auditorias de segurança regulares e testes de penetração.
                  </p>
                  <p>
                    <strong>3.5 Backup e Recuperação:</strong> Mantemos backups seguros e planos de recuperação de desastres.
                  </p>
                  <p>
                    <strong>3.6 Conformidade:</strong> Seguimos padrões internacionais como ISO 27001 e LGPD.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 p-3 mr-4">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">4. Compartilhamento de Dados</h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p>
                    <strong>Não vendemos seus dados pessoais.</strong> Compartilhamos informações apenas nas seguintes situações:
                  </p>
                  <p>
                    <strong>4.1 Prestadores de Serviços:</strong> Com parceiros técnicos que nos ajudam a operar a plataforma (hospedagem, pagamentos, analytics).
                  </p>
                  <p>
                    <strong>4.2 Integrações Autorizadas:</strong> Com plataformas que você conecta (WhatsApp, Instagram, Google) conforme suas configurações.
                  </p>
                  <p>
                    <strong>4.3 Obrigações Legais:</strong> Quando exigido por lei, ordem judicial ou autoridades competentes.
                  </p>
                  <p>
                    <strong>4.4 Proteção de Direitos:</strong> Para proteger nossos direitos, propriedade ou segurança, ou de nossos usuários.
                  </p>
                  <p>
                    <strong>4.5 Transações Comerciais:</strong> Em caso de fusão, aquisição ou venda de ativos (com notificação prévia).
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 p-3 mr-4">
                    <UserCheck className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">5. Seus Direitos (LGPD)</h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Conforme a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Acesso:</strong> Saber quais dados pessoais processamos sobre você</li>
                    <li><strong>Correção:</strong> Solicitar correção de dados incompletos ou incorretos</li>
                    <li><strong>Exclusão:</strong> Solicitar a exclusão de dados desnecessários ou tratados inadequadamente</li>
                    <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado e legível</li>
                    <li><strong>Oposição:</strong> Opor-se ao tratamento de dados em certas situações</li>
                    <li><strong>Revogação:</strong> Retirar consentimento a qualquer momento</li>
                    <li><strong>Informação:</strong> Obter informações sobre compartilhamento de dados</li>
                  </ul>
                  <p>
                    Para exercer esses direitos, entre em contato através do email: <strong>privacidade@atendos.com.br</strong>
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-pink-500 p-3 mr-4">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">6. Retenção e Exclusão de Dados</h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p>
                    <strong>6.1 Período de Retenção:</strong> Mantemos seus dados pelo tempo necessário para prestar os serviços e cumprir obrigações legais.
                  </p>
                  <p>
                    <strong>6.2 Dados de Conta:</strong> Mantidos enquanto sua conta estiver ativa e por até 5 anos após o cancelamento para fins legais.
                  </p>
                  <p>
                    <strong>6.3 Dados de Treinamento:</strong> Áudios de clonagem de voz são mantidos enquanto você usar o serviço e excluídos em até 30 dias após o cancelamento.
                  </p>
                  <p>
                    <strong>6.4 Logs e Métricas:</strong> Dados anonimizados podem ser mantidos por até 2 anos para análises e melhorias.
                  </p>
                  <p>
                    <strong>6.5 Exclusão Automática:</strong> Implementamos processos automatizados para exclusão de dados conforme os prazos estabelecidos.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section className="bg-white/5 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-3 mr-4">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">7. Cookies e Tecnologias Similares</h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p>
                    <strong>7.1 Cookies Essenciais:</strong> Necessários para o funcionamento básico da plataforma (autenticação, segurança).
                  </p>
                  <p>
                    <strong>7.2 Cookies de Performance:</strong> Coletam informações sobre como você usa o site para melhorar a experiência.
                  </p>
                  <p>
                    <strong>7.3 Cookies de Funcionalidade:</strong> Lembram suas preferências e configurações personalizadas.
                  </p>
                  <p>
                    <strong>7.4 Controle:</strong> Você pode gerenciar cookies através das configurações do seu navegador, mas isso pode afetar algumas funcionalidades.
                  </p>
                  <p>
                    <strong>7.5 Tecnologias Similares:</strong> Também utilizamos web beacons, pixels e local storage para funcionalidades específicas.
                  </p>
                </div>
              </section>

              {/* Section 8 */}
              <section className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-3 mr-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">8. Transferência Internacional</h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p>
                    <strong>8.1 Localização:</strong> Seus dados são processados principalmente em servidores localizados no Brasil.
                  </p>
                  <p>
                    <strong>8.2 Transferências:</strong> Quando necessário transferir dados para outros países, garantimos proteção adequada através de:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Cláusulas contratuais padrão aprovadas</li>
                    <li>Certificações de adequação</li>
                    <li>Decisões de adequação da ANPD</li>
                  </ul>
                  <p>
                    <strong>8.3 Parceiros Internacionais:</strong> Alguns prestadores de serviços podem estar localizados em outros países, sempre com garantias de proteção adequada.
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-3 mr-4">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">9. Alterações nesta Política</h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p>
                    <strong>9.1 Atualizações:</strong> Podemos atualizar esta política periodicamente para refletir mudanças em nossas práticas ou na legislação.
                  </p>
                  <p>
                    <strong>9.2 Notificação:</strong> Alterações significativas serão comunicadas por email e através de aviso em nossa plataforma com 30 dias de antecedência.
                  </p>
                  <p>
                    <strong>9.3 Aceitação:</strong> O uso continuado dos serviços após as alterações constitui aceitação da nova política.
                  </p>
                  <p>
                    <strong>9.4 Histórico:</strong> Mantemos um histórico das versões anteriores desta política para transparência.
                  </p>
                </div>
              </section>

              {/* Contact Section */}
              <section className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-white mb-4">Contato e Encarregado de Dados</h2>
                <p className="text-gray-300 mb-6">
                  Para questões sobre privacidade, exercício de direitos ou denúncias, entre em contato:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-cyan-400 mb-2">Encarregado de Dados (DPO)</h3>
                    <p className="text-gray-300">privacidade@atendos.com.br</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-cyan-400 mb-2">WhatsApp</h3>
                    <a 
                      href="https://wa.me/5535987079368"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    >
                      +55 (35) 98707-9368
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-cyan-400 mb-2">Autoridade Nacional</h3>
                    <p className="text-gray-300">ANPD - anpd.gov.br</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-cyan-400 mb-2">Tempo de Resposta</h3>
                    <p className="text-gray-300">Até 15 dias úteis</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Privacidade;