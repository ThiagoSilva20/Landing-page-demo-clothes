'use client';

// Hero Section pensada pra uma loja de roupas com vibe moderna e autêntica
import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-start bg-stone-900 text-white overflow-hidden">
      {/* Imagem de fundo com um toque de estilo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/street-fashion.jpg" // Escolhi uma foto de street style pra dar vibe urbana
          alt="Street Fashion Vibes"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          quality={90} // Um pouco menos que 100 pra carregar rápido
          className="opacity-50 transform scale-105" // Zoom sutil pra dar dinamismo
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 to-transparent"></div> {/* Gradiente pra destacar o texto */}
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-lg ml-8 sm:ml-12 lg:ml-24 text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
          Moda que Conta Sua História
        </h1>
        <p className="text-base sm:text-lg lg:text-xl mb-6 text-stone-200 max-w-md">
          Feito por mim Thiago Silva para demonstração para Altair Moura
        </p>
        <a
          href="/shop"
          className="inline-block bg-rose-600 text-white text-sm sm:text-base font-medium py-3 px-8 rounded-md shadow-md hover:bg-rose-700 hover:shadow-lg transition-all duration-200"
        >
          Explore Nossa Loja
        </a>
      </div>

      </section>
  );
};

export default HeroSection;