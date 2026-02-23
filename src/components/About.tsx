"use client";

import React from 'react';
import { CheckCircle2, Shield, Heart, Users, GraduationCap } from 'lucide-react';

const About = () => {
  const values = [
    { icon: <Heart className="text-rose-500" />, title: 'Empatia' },
    { icon: <Shield className="text-rose-500" />, title: 'Ética' },
    { icon: <CheckCircle2 className="text-rose-500" />, title: 'Sigilo' },
    { icon: <Users className="text-rose-500" />, title: 'Acolhimento' },
    { icon: <GraduationCap className="text-rose-500" />, title: 'Atualização constante' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="/images/awareness.jpg" 
                alt="Patrícia Ávila - Saúde da Mulher" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-rose-950">Sobre Patrícia Machado Ávila</h2>
              <div className="w-20 h-1.5 bg-rose-500 rounded-full" />
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Patrícia Machado Ávila é fisioterapeuta especializada em saúde pélvica e bem-estar íntimo feminino. Atua com abordagem humanizada, baseada em evidências científicas e focada no respeito à individualidade de cada paciente.
              </p>
              <p>
                Seu trabalho é voltado para prevenção, tratamento e reabilitação de disfunções pélvicas, promovendo qualidade de vida, autoestima e segurança corporal.
              </p>
            </div>

            <div className="bg-rose-50 p-8 rounded-3xl space-y-4">
              <h3 className="text-xl font-bold text-rose-900">Nossa Missão</h3>
              <p className="text-rose-800">
                Cuidar da saúde íntima feminina com conhecimento, sensibilidade e excelência profissional.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-rose-50 transition-colors">
                  {value.icon}
                  <span className="font-medium text-rose-900 text-sm">{value.title}</span>
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