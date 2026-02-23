"use client";

import React, { useState } from 'react';
import { Menu, X, Flower2 } from 'lucide-react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Conteúdos', href: '#blog' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20 items-center">
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="bg-rose-100 p-2 rounded-full group-hover:bg-rose-200 transition-colors">
              <Flower2 className="text-rose-600" size={24} />
            </div>
            <span className="text-xl md:text-2xl font-bold text-rose-950 tracking-tight">
              Patrícia <span className="text-rose-600">Ávila</span>
            </span>
          </a>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-rose-900/70 hover:text-rose-600 transition-all font-semibold text-xs uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-rose-950 p-2 hover:bg-rose-50 rounded-lg transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden bg-white border-b border-rose-100 transition-all duration-300 ease-in-out overflow-hidden shadow-xl",
        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-4 pt-4 pb-10 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-4 py-4 text-rose-950 hover:text-rose-600 font-bold text-lg rounded-xl hover:bg-rose-50 transition-all"
            >
              {link.name}
              <Flower2 size={16} className="text-rose-200" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;