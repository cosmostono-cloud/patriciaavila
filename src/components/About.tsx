"use client";

import React from 'react';
import { CheckCircle2, Shield, Heart, Users, GraduationCap } from 'lucide-react';

const About = () => {
  const values = [
    { icon: <Heart className="text-rose-500" size={18} />, title: 'Empatia' },
    { icon: <Shield className="text-rose-500" size={18} />, title: 'Ética' },
    { icon: <CheckCircle2 className="text-rose-500" size={18} />, title: 'Sigilo' },
    { icon: <Users className="text-rose-500" size={18} />, title: 'Acolhimento' },
    { icon: <GraduationCap className="text-rose-500" size={18} />, title: 'Atualização científica' },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 lg:order-1 px-4 md:px-0">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl max-w-md mx-auto lg:max-w-none">
              <img 
                src="/images/awareness.jpg" 
                alt="Patrícia Ávila - Saúde da Mulher" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-rose-950">Sobre Patrícia Ávila</h2>
              <div className="w-16 md:w-20 h-1.5 bg-rose-500 rounded-full mx-auto lg:mx-0" />
            </div>

            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-600 leading-relaxed">
              <p>
                Patrícia Ávila é fisioterapeuta especializada em saúde pélvica e bem-estar íntimo feminino. Atua com abordagem humanizada, baseada em evidências científicas e focada no respeito à individualidade de cada paciente.
              </p>
              <p>
                Seu trabalho é voltado para prevenção, tratamento e reabilitação de disfunções pélvicas, promovendo qualidade de vida, autoestima e segurança corporal.
              </p>
            </div>

            <div className="bg-rose-50 p-6 md:p-8 rounded-2xl md:rounded-3xl space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-rose-900">Nossa Missão</h3>
              <p className="text-rose-800 text-sm md:text-base">
                Cuidar da saúde íntima feminina com conhecimento, sensibilidade e excelência profissional.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-2 p-2 md:p-3 rounded-xl hover:bg-rose-50 transition-colors border border-rose-50 lg:border-none">
                  <div className="shrink-0">{value.icon}</div>
                  <span className="font-medium text-rose-900 text-xs md:text-sm">{value.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;