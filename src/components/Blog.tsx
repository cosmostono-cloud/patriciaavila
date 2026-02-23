"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  const topics = [
    {
      title: "Exercícios para o assoalho pélvico",
      category: "Saúde",
      image: "https://images.unsplash.com/photo-1518611012118-29617b0ccd0a?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Cuidados íntimos diários",
      category: "Bem-estar",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Pós-parto e recuperação corporal",
      category: "Maternidade",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-rose-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-rose-950">Espaço Educativo</h2>
            <p className="text-rose-800/70 max-w-xl text-lg">
              Informações confiáveis sobre saúde íntima, bem-estar e qualidade de vida.
            </p>
          </div>
          <button className="text-rose-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Ver todos os conteúdos <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <Card key={index} className="border-none shadow-lg rounded-3xl overflow-hidden group cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img 
                  src={topic.image} 
                  alt={topic.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader className="pb-2">
                <span className="text-rose-500 text-xs font-bold uppercase tracking-widest">{topic.category}</span>
                <CardTitle className="text-xl text-rose-950 group-hover:text-rose-600 transition-colors">{topic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Descubra orientações preventivas e mitos e verdades sobre a saúde íntima feminina...
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;