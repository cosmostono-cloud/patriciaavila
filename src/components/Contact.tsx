"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Instagram, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  const whatsappUrl = "https://wa.me/5521994182750";

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-rose-950 rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-20 space-y-10 md:space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Vamos conversar?</h2>
                <p className="text-rose-100/70 text-base md:text-lg">
                  Agende sua consulta ou tire suas dúvidas. Estou aqui para ajudar você.
                </p>
              </div>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center gap-4 md:gap-6 group">
                  <div className="p-3 md:p-4 bg-rose-900 rounded-2xl text-rose-300 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                    <Phone size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-rose-300 text-[10px] md:text-sm uppercase tracking-widest font-bold">WhatsApp</p>
                    <p className="text-white text-lg md:text-xl">(21) 99418-2750</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 md:gap-6 group">
                  <div className="p-3 md:p-4 bg-rose-900 rounded-2xl text-rose-300 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                    <Instagram size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-rose-300 text-[10px] md:text-sm uppercase tracking-widest font-bold">Instagram</p>
                    <p className="text-white text-lg md:text-xl">@patriciaavila</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 md:gap-6 group">
                  <div className="p-3 md:p-4 bg-rose-900 rounded-2xl text-rose-300 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                    <Mail size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-rose-300 text-[10px] md:text-sm uppercase tracking-widest font-bold">Email</p>
                    <p className="text-white text-base md:text-xl truncate">contato@patriciaavila.com.br</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 md:gap-6 group">
                  <div className="p-3 md:p-4 bg-rose-900 rounded-2xl text-rose-300 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                    <MapPin size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-rose-300 text-[10px] md:text-sm uppercase tracking-widest font-bold">Atendimento</p>
                    <p className="text-white text-lg md:text-xl">Rio de Janeiro e Valença</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-rose-900/30 p-8 md:p-12 lg:p-20 flex flex-col justify-center items-center text-center space-y-6 md:space-y-8">
              <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-rose-500/20 flex items-center justify-center">
                <MessageCircle size={40} className="text-rose-400 md:w-16 md:h-16" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-white">Pronta para começar?</h3>
                <p className="text-rose-100/60 text-sm md:text-base">
                  Clique no botão abaixo para iniciar seu atendimento personalizado via WhatsApp.
                </p>
              </div>
              <Button 
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="bg-rose-500 hover:bg-rose-600 text-white px-8 md:px-12 py-6 md:py-8 rounded-full text-lg md:text-xl shadow-xl transition-all hover:scale-105 w-full sm:w-auto"
              >
                Agendar Atendimento
              </Button>
              <p className="text-rose-100/40 text-xs md:text-sm italic">
                "Seu corpo merece atenção, respeito e cuidado profissional"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;