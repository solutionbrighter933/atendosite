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
      name: 'Carlos Mendes',
      role: 'CEO, TechSolutions',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Meu agente IA já fechou R$ 280k em vendas nos últimos 60 dias. Melhor contratação que já fiz.',
      rating: 5
    },
    {
      name: 'Mariana Silva',
      role: 'Infoprodutora',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Consegui escalar de 50k para 300k/mês sem contratar ninguém. O agente trabalha enquanto eu durmo.',
      rating: 5
    },
    {
      name: 'Roberto Santos',
      role: 'Fundador, StartupXYZ',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Impressionante como ele aprendeu meu tom de voz e jeito de vender. Clientes nem percebem a diferença.',
      rating: 5
    }
  ];

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
            Donos de negócios que já descobriram o poder de ter um funcionário imortal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card opacity-0 bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:border-cyan-500/40 group"
            >
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
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">+9.000</div>
              <div className="text-gray-400">Agentes Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">R$ 50Mi+</div>
              <div className="text-gray-400">Vendas Geradas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">99.8%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;