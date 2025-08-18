import React, { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (testimonialsRef.current) {
      const elements = testimonialsRef.current.querySelectorAll('.testimonial-card');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: 'Marcelo Noronha',
      role: 'CEO do Bradesco',
      image: '/marcelo.png',
      text: 'Queremos ser protagonistas na inteligência artificial. Estamos redesenhando a BIA para que ela seja uma aliada ainda mais poderosa no dia a dia dos nossos clientes.',
      rating: 5
    },
    {
      name: 'Milton Maluhy Filho',
      role: 'CEO do Itaú Unibanco',
      image: '/milton.png',
      text: 'Nosso grande objetivo é usar a tecnologia para nos tornarmos o principal trusted advisor dos nossos clientes, e a IA é o caminho para isso.',
      rating: 5
    },
    {
      name: 'Tarciana Medeiros',
      role: 'Presidente do Banco do Brasil',
      image: '/tarciana.png',
      text: 'O objetivo é entregar um banco para cada cliente, aproveitando o conhecimento que temos e as novas tecnologias para individualizar a experiência.',
      rating: 5
    },
    {
      name: 'Tania Cosentino',
      role: 'Presidente da Microsoft Brasil',
      image: '/tania.png',
      text: 'A IA é sobre o empoderamento do ser humano e não sua substituição. É uma ferramenta para ampliar nossa criatividade e produtividade.',
      rating: 5
    },
    {
      name: 'Cleber Morais',
      role: 'Diretor-Geral da AWS Brasil',
      image: '/cleber.png',
      text: 'A nuvem está democratizando o acesso à IA generativa, permitindo que empresas de todos os tamanhos inovem e criem soluções que antes eram inimagináveis.',
      rating: 5
    },
    {
      name: 'Frederico Trajano',
      role: 'CEO do Magazine Luiza',
      image: '/fred.png',
      text: 'Nosso plano é ter IA em todas as áreas da companhia. A tecnologia será uma das principais alavancas de crescimento.',
      rating: 5
    },
    {
      name: 'Dennis Herszkowicz',
      role: 'CEO da TOTVS',
      image: '/denis.png',
      text: 'A IA vai transformar o ERP em um Digital Trusted Advisor, entregando insights e recomendações proativas para que nossos clientes tomem as melhores decisões.',
      rating: 5
    },
    {
      name: 'Gustavo Werneck',
      role: 'CEO da Gerdau',
      image: '/gustavo.png',
      text: 'O 5G privado é um game changer para a indústria. Ele nos permite acelerar a automação e o uso de IA no chão de fábrica em um nível que antes era impossível.',
      rating: 5
    }
  ];

  // Duplicar os depoimentos para criar o efeito de loop infinito
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" ref={testimonialsRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Resultados que</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Falam por Si
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Líderes empresariais que reconhecem o poder transformador da Inteligência Artificial
          </p>
        </div>

        {/* Carrossel Animado */}
        <div className="relative mb-16">
          {/* Gradientes nas bordas para efeito de fade */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
          
          {/* Container do carrossel */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-testimonials">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.name}-${index}`}
                  className="flex-shrink-0 mx-4"
                  style={{ minWidth: '350px', maxWidth: '350px' }}
                >
                  <div className="testimonial-card bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:border-cyan-500/40 group h-full">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <Quote className="w-8 h-8 text-cyan-400/30 mb-4" />
                    
                    <p className="text-gray-300 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">+ 1.784</div>
              <div className="text-gray-400">Agentes IA Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">+ 17.639</div>
              <div className="text-gray-400">Em Vendas Geradas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">+ 80</div>
              <div className="text-gray-400">Empresas Atendidas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;