"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-rose-50/50 rounded-l-[100px] hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-rose-500 font-semibold tracking-widest uppercase text-sm">Fisioterapeuta Pélvica</h2>
              <h1 className="text-5xl lg:text-7xl font-bold text-rose-950 leading-tight">
                Patrícia Machado Ávila
              </h1>
              <p className="text-xl text-rose-800/80 max-w-xl leading-relaxed">
                Cuidado, ciência e acolhimento para o bem-estar do seu corpo íntimo.
              </p>
            </div>
            
            <p className="text-lg text-gray-600 max-w-lg">
              Minha missão é ajudar mulheres a se reconectarem com o próprio corpo, restaurando saúde, conforto e confiança através da fisioterapia pélvica e do cuidado integral da saúde íntima.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-6 rounded-full text-lg shadow-lg shadow-rose-200 transition-all hover:scale-105">
                <Calendar className="mr-2" size={20} />
                Agendar Consulta
              </Button>
              <Button variant="outline" className="border-rose-200 text-rose-700 hover:bg-rose-50 px-8 py-6 rounded-full text-lg transition-all hover:scale-105">
                <MessageCircle className="mr-2" size={20} />
                WhatsApp
              </Button>
              <Button variant="ghost" className="text-rose-600 hover:text-rose-700 hover:bg-transparent px-8 py-6 text-lg group">
                Ver Conteúdos
                <BookOpen className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-3 transition-transform hover:rotate-0 duration-500">
              <img 
                src="/images/intro.jpg" 
                alt="Dra. Patrícia Ávila" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl hidden sm:block">
              <p className="text-rose-900 font-medium italic">"Cuidar da saúde íntima é cuidar da sua qualidade de vida"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;