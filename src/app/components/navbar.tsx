'use client';

// Navbar estilizada pra uma loja de roupas com vibe urbana e elegante
import React, { useState } from 'react';
import Image from 'next/image';
import { FaShirtsinbulk } from "react-icons/fa6";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Controle do menu mobile

  // Função pra toggle do menu hamburguer
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-stone-900/95 fixed w-full z-50 top-0 left-0 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <FaShirtsinbulk className="text-rose-500 text-2xl" />
          <span className="font-serif text-xl sm:text-2xl font-bold text-rose-500 tracking-tight">
            Urban Threads
          </span>
        </a>

        {/* Botão hamburguer para mobile */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-stone-300 hover:text-white hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
          onClick={toggleMenu}
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Abrir menu principal</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Menu de navegação */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:block absolute md:static top-16 left-0 w-full md:w-auto bg-stone-900/95 md:bg-transparent transition-all duration-300 ease-in-out`}
          id="mobile-menu"
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0 text-sm sm:text-base font-medium text-stone-200">
            <li>
              <a
                href="/"
                className="block py-2 px-3 hover:text-rose-500 transition-colors duration-200 md:hover:bg-transparent"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/shop"
                className="block py-2 px-3 hover:text-rose-500 transition-colors duration-200 md:hover:bg-transparent"
              >
                Loja
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 px-3 hover:text-rose-500 transition-colors duration-200 md:hover:bg-transparent"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="/collections"
                className="block py-2 px-3 hover:text-rose-500 transition-colors duration-200 md:hover:bg-transparent"
              >
                Coleções
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block py-2 px-3 hover:text-rose-500 transition-colors duration-200 md:hover:bg-transparent"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;