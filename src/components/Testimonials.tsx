"use client";

import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "O atendimento da Dra. Patrícia mudou minha relação com meu corpo. Senti-me acolhida e segura durante todo o processo.",
      author: "M. Silva",
      role: "Paciente de Pós-parto"
    },
    {
      text: "Excelente profissional! O tratamento para incontinência urinária foi eficaz e me devolveu a liberdade de sair sem preocupações.",
      author: "A. Oliveira",
      role: "Paciente de Reabilitação"
    },
    {
      text: "A abordagem humanizada faz toda a diferença. Recomendo a todas as mulheres que buscam cuidar da sua saúde íntima.",
      author: "R. Santos",
      role: "Paciente de Prevenção"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-rose-950">Depoimentos</h2>
          <p className="text-rose-800/70 max-w-2xl mx-auto text-lg">
            Relatos reais de pacientes que transformaram sua saúde e autoestima.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-rose-50/50 p-8 rounded-3xl relative">
              <Quote className="absolute top-6 right-6 text-rose-200" size={48} />
              <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                "{t.text}"
              </p>
              <div>
                <p className="font-bold text-rose-950">{t.author}</p>
                <p className="text-rose-700 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;