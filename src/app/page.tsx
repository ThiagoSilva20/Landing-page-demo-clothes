
'use client';

// Página inicial responsiva para um site de moda urbana
import Footer from './components/footer';
import Gallery from './components/gallery';
import HeroSection from './components/hero';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Container principal com largura fluida e padding */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}