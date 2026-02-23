"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Sparkles, UserCheck, Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Fisioterapia Pélvica",
      icon: <Activity className="text-rose-500" size={32} />,
      description: "Tratamentos personalizados para fortalecimento e reabilitação do assoalho pélvico.",
      indications: ["Incontinência urinária", "Dor pélvica", "Pós-parto", "Preparação para o parto", "Disfunções musculares íntimas"]
    },
    {
      title: "Saúde Íntima Feminina",
      icon: <Sparkles className="text-rose-500" size={32} />,
      description: "Cuidado especializado para promover equilíbrio, conforto e bem-estar íntimo.",
      indications: ["Prevenção", "Educação corporal", "Autoconhecimento íntimo", "Reabilitação funcional"]
    },
    {
      title: "Consultas e Acompanhamentos",
      icon: <UserCheck className="text-rose-500" size={32} />,
      description: "Atendimento individualizado com avaliação completa e plano terapêutico personalizado.",
      indications: ["Presencial", "Online (quando aplicável)"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-rose-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-rose-950">Nossos Serviços</h2>
          <p className="text-rose-800/70 max-w-2xl mx-auto text-lg">
            Oferecemos tratamentos especializados com foco na saúde integral da mulher.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-xl shadow-rose-100/50 rounded-3xl overflow-hidden hover:translate-y-[-8px] transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="mb-4 p-3 bg-rose-50 w-fit rounded-2xl">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl text-rose-950">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  <p className="font-semibold text-rose-900 text-sm uppercase tracking-wider">Indicações:</p>
                  <ul className="space-y-2">
                    {service.indications.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <Check size={16} className="text-rose-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="relative rounded-3xl overflow-hidden shadow-lg group">
            <img src="/images/whitening-intimate.jpg" alt="Clareamento Íntimo" className="w-full h-auto transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-950/60 to-transparent flex items-end p-8">
              <h3 className="text-white text-xl font-bold">Resultados: Clareamento Íntimo</h3>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-lg group">
            <img src="/images/whitening-armpit.jpg" alt="Clareamento Axila" className="w-full h-auto transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-950/60 to-transparent flex items-end p-8">
              <h3 className="text-white text-xl font-bold">Resultados: Clareamento na Axila</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;