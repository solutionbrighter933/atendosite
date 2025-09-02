import React from 'react';

const LogoCarousel = () => {
  // Placeholder logos - você pode substituir pelos logos reais das empresas
  const logos = [
    { name: 'Empresa 1', logo: '/1.png' },
    { name: 'Empresa 2', logo: '/2.png' },
    { name: 'Empresa 3', logo: '/3.png' },
    { name: 'Empresa 4', logo: '/4.png' },
    { name: 'Empresa 5', logo: '/5.png' },
    { name: 'Empresa 6', logo: '/6.png' },
    { name: 'Empresa 7', logo: '/7.png' },
    { name: 'Empresa 8', logo: '/8.png' },
    { name: 'Empresa 9', logo: '/9.png' }
  ];

  // Duplicar os logos para criar o efeito de loop infinito
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-r from-gray-900/50 to-black/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Empresas que já usam a
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Atendos IA</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            São empresas que já descobriram o poder de ter funcionários imortais trabalhando 24/7
          </p>
        </div>

        {/* Carrossel Animado */}
        <div className="relative">
          {/* Gradientes nas bordas para efeito de fade */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
          
          {/* Container do carrossel */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-infinite">
              {duplicatedLogos.map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                  style={{ minWidth: '160px' }}
                >
                  <div className="bg-white/10 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-12 w-auto mx-auto filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">80+</div>
            <div className="text-gray-400">Empresas Ativas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">99.8%</div>
            <div className="text-gray-400">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-gray-400">Funcionamento</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;