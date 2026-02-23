"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, BookOpen } from 'lucide-react';

const Hero = () => {
  const whatsappUrl = "https://wa.me/5521994182750";

  return (
    <section id="home" className="relative pt-24 pb-12 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-full md:w-1/2 h-full bg-rose-50/50 rounded-b-[50px] md:rounded-l-[100px] md:rounded-br-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-rose-500 font-semibold tracking-widest uppercase text-xs md:text-sm">Fisioterapeuta Pélvica</h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-rose-950 leading-tight">
                Patrícia Ávila
              </h1>
              <p className="text-lg md:text-xl text-rose-800/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Cuidado, ciência e acolhimento para o bem-estar do seu corpo íntimo.
              </p>
            </div>
            
            <p className="text-base md:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
              Minha missão é ajudar mulheres a se reconectarem com o próprio corpo, restaurando saúde, conforto e confiança através da fisioterapia pélvica e do cuidado integral da saúde íntima.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
              <Button className="bg-rose-600 hover:bg-rose-700 text-white px-6 md:px-8 py-5 md:py-6 rounded-full text-base md:text-lg shadow-lg shadow-rose-200 transition-all hover:scale-105 w-full sm:w-auto">
                <Calendar className="mr-2" size={18} />
                Agendar Consulta
              </Button>
              <Button 
                variant="outline" 
                className="border-rose-200 text-rose-700 hover:bg-rose-50 px-6 md:px-8 py-5 md:py-6 rounded-full text-base md:text-lg transition-all hover:scale-105 w-full sm:w-auto"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <MessageCircle className="mr-2" size={18} />
                Falar no WhatsApp
              </Button>
              <Button variant="ghost" className="text-rose-600 hover:text-rose-700 hover:bg-transparent px-6 md:px-8 py-5 md:py-6 text-base md:text-lg group w-full sm:w-auto">
                Ver Conteúdos
                <BookOpen className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </Button>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 px-4 md:px-0">
            <div className="relative z-10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-3 transition-transform hover:rotate-0 duration-500 max-w-md mx-auto lg:max-w-none">
              <img 
                src="/images/intro.jpg" 
                alt="Dra. Patrícia Ávila" 
                className="w-full h-auto object-cover aspect-[4/5] md:aspect-auto"
              />
            </div>
            <div className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 z-20 bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl hidden sm:block max-w-[250px]">
              <p className="text-rose-900 text-sm md:text-base font-medium italic">"Cuidar da saúde íntima é cuidar da sua qualidade de vida"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;