'use client';

// Footer estilizado para uma loja de roupas com vibe urbana e sofisticada
import React from 'react';
import Image from 'next/image';
import { FaShirtsinbulk } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-200 m-4 rounded-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Logo e branding */}
          <a href="/" className="flex items-center mb-6 md:mb-0 space-x-3">
            <FaShirtsinbulk className="text-rose-500 text-2xl" />
            <span className="font-serif text-xl font-bold text-rose-500 tracking-tight">
              Urban Threads
            </span>
          </a>

          {/* Links de navegação */}
          <ul className="flex flex-wrap items-center text-sm font-medium text-stone-300 mb-6 md:mb-0">
            <li>
              <a
                href="/about"
                className="hover:text-rose-500 transition-colors duration-200 me-4 md:me-6"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="hover:text-rose-500 transition-colors duration-200 me-4 md:me-6"
              >
                Política de Privacidade
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:text-rose-500 transition-colors duration-200 me-4 md:me-6"
              >
                Termos de Uso
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-rose-500 transition-colors duration-200"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Divisor */}
        <hr className="my-6 border-stone-700 sm:mx-auto lg:my-8" />

        {/* Copyright */}
        <span className="block text-sm text-stone-400 sm:text-center">
          © {new Date().getFullYear()}{' '}
          <a href="/" className="hover:text-rose-500 transition-colors duration-200">
            Urban Threads™
          </a>
          . Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;