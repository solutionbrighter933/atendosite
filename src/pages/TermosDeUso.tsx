import React from 'react';
import { ArrowLeft, Shield, FileText, AlertTriangle, Scale, Clock, Globe } from 'lucide-react';

const TermosDeUso = () => {
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
                <FileText className="w-4 h-4 mr-2" />
                Documento Legal
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Termos de Uso
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Estes termos regem o uso da plataforma Atendos IA e estabelecem os direitos e responsabilidades entre você e nossa empresa.
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Section 1 */}
              <section className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-3 mr-4">
                    <Scale className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">1. Aceitação dos Termos</h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Ao acessar e utilizar a plataforma Atendos IA, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve usar nossos serviços.
                  </p>
                  <p>
                    Estes termos constituem um acordo legal entre você (usuário) e a Atendos IA, estabelecendo as condições para o uso de nossa plataforma de inteligência artificial para atendimento e vendas.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-3 mr-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">2. Descrição do Serviço</h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p>
                    A Atendos IA oferece uma plataforma de inteligência artificial que permite criar agentes virtuais para:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Atendimento automatizado ao cliente</li>
                    <li>Vendas e qualificação de leads</li>
                    <li>Suporte técnico e resolução de dúvidas</li>
                    <li>Gestão de relacionamento com clientes</li>
                    <li>Integração com WhatsApp, Instagram e Google Calendar</li>
                  </ul>
                  <p>
                    Nossos serviços incluem treinamento de IA, clonagem de voz, personalização de agentes e análise de performance.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-3 mr-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">3. Conta de Usuário e Responsabilidades</h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p>
                    <strong>3.1 Criação de Conta:</strong> Para usar nossos serviços, você deve criar uma conta fornecendo informações precisas e atualizadas.
                  </p>
                  <p>
                    <strong>3.2 Segurança:</strong> Você é responsável por manter a confidencialidade de suas credenciais de login e por todas as atividades que ocorrem em sua conta.
                  </p>
                  <p>
                    <strong>3.3 Uso Adequado:</strong> Você concorda em usar nossos serviços apenas para fins legais e de acordo com estes termos.
                  </p>
                  <p>
                    <strong>3.4 Proibições:</strong> É proibido usar nossa plataforma para:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Atividades ilegais ou fraudulentas</li>
                    <li>Spam ou comunicações não solicitadas</li>
                    <li>Violação de direitos de terceiros</li>
                    <li>Disseminação de malware ou conteúdo malicioso</li>
                  </ul>
                </div>
              </section>

              {/* Section 4 */}
              <section className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 p-3 mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">4. Propriedade Intelectual</h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p>
                    <strong>4.1 Direitos da Atendos IA:</strong> Todos os direitos de propriedade intelectual relacionados à plataforma, incluindo software, algoritmos, design e conteúdo, pertencem à Atendos IA.
                  </p>
                  <p>
                    <strong>4.2 Licença de Uso:</strong> Concedemos a você uma licença limitada, não exclusiva e revogável para usar nossa plataforma conforme estes termos.
                  </p>
                  <p>
                    <strong>4.3 Conteúdo do Usuário:</strong> Você mantém os direitos sobre o conteúdo que fornece para treinamento dos agentes IA, mas nos concede licença para processá-lo e utilizá-lo na prestação dos serviços.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-pink-500 p-3 mr-4">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">5. Limitação de Responsabilidade</h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p>
                    <strong>5.1 Isenção de Garantias:</strong> Nossos serviços são fornecidos "como estão", sem garantias expressas ou implícitas de qualquer tipo.
                  </p>
                  <p>
                    <strong>5.2 Limitação de Danos:</strong> Em nenhuma circunstância seremos responsáveis por danos indiretos, incidentais, especiais ou consequenciais.
                  </p>
                  <p>
                    <strong>5.3 Valor Máximo:</strong> Nossa responsabilidade total não excederá o valor pago por você nos 12 meses anteriores ao evento que deu origem à reclamação.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section className="bg-white/5 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-3 mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">6. Pagamentos e Cancelamentos</h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p>
                    <strong>6.1 Planos e Preços:</strong> Os preços dos nossos serviços estão disponíveis em nosso site e podem ser alterados mediante aviso prévio.
                  </p>
                  <p>
                    <strong>6.2 Cobrança:</strong> Os pagamentos são processados automaticamente conforme o plano escolhido (mensal ou anual).
                  </p>
                  <p>
                    <strong>6.3 Cancelamento:</strong> Você pode cancelar sua assinatura a qualquer momento através da sua conta. O cancelamento será efetivo no final do período de cobrança atual.
                  </p>
                  <p>
                    <strong>6.4 Reembolsos:</strong> Oferecemos garantia de 14 dias para novos usuários. Após este período, não há reembolsos para períodos não utilizados.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-3 mr-4">
                    <Scale className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">7. Modificações e Rescisão</h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p>
                    <strong>7.1 Alterações nos Termos:</strong> Podemos modificar estes termos a qualquer momento. As alterações serão comunicadas com 30 dias de antecedência.
                  </p>
                  <p>
                    <strong>7.2 Rescisão:</strong> Podemos suspender ou encerrar sua conta em caso de violação destes termos ou por outros motivos legítimos.
                  </p>
                  <p>
                    <strong>7.3 Efeitos da Rescisão:</strong> Após o encerramento, você perderá o acesso aos serviços e seus dados poderão ser excluídos conforme nossa política de retenção.
                  </p>
                </div>
              </section>

              {/* Section 8 */}
              <section className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-3 mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">8. Lei Aplicável e Jurisdição</h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais competentes do Brasil, especificamente na comarca onde está localizada nossa sede.
                  </p>
                  <p>
                    Em caso de conflito entre estes termos e as leis locais aplicáveis, as leis locais prevalecerão apenas na medida necessária para resolver o conflito.
                  </p>
                </div>
              </section>

              {/* Contact Section */}
              <section className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-white mb-4">Contato</h2>
                <p className="text-gray-300 mb-6">
                  Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-cyan-400 mb-2">Email</h3>
                    <p className="text-gray-300">legal@atendos.com.br</p>
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
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TermosDeUso;