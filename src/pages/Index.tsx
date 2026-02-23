"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-rose-100 selection:text-rose-900">
      <Navbar />
      <main>
        <Hero />
        
        {/* Highlight Phrase Banner */}
        <div className="bg-rose-600 py-12 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {[1, 2, 3, 4].map((i) => (
              <span key={i} className="text-white text-2xl md:text-4xl font-bold mx-8 uppercase tracking-tighter opacity-90">
                Saúde íntima também é saúde • Informação é prevenção • Seu corpo merece atenção • 
              </span>
            ))}
          </div>
        </div>

        <About />
        <Services />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <MadeWithDyad />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Index;