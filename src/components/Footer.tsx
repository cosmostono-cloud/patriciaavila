"use client";

import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-rose-50 py-12 border-t border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Heart className="text-rose-500 fill-rose-500" size={20} />
            <span className="text-lg font-semibold text-rose-900">Patrícia Ávila</span>
          </div>
          
          <div className="text-rose-800/60 text-sm text-center">
            © {new Date().getFullYear()} Patrícia Machado Ávila. Todos os direitos reservados.
            <br />
            Fisioterapia Pélvica e Saúde Íntima Feminina.
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-rose-800/60 hover:text-rose-500 transition-colors">Privacidade</a>
            <a href="#" className="text-rose-800/60 hover:text-rose-500 transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;