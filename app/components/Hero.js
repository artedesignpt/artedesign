'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Subtitle */}
        <div className="mb-6">
          <p className="text-sm font-light tracking-widest text-gray-500 uppercase">
            Coleção Premium
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-light mb-8 text-gray-900 leading-tight">
          Preserve Suas<br />Memórias com<br />Elegância
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light">
          Álbuns personalizados e quadros fotográficos premium.
          Cada momento merece ser preservado como arte.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="#albuns"
            className="px-8 py-3 border border-gray-900 text-gray-900 font-light hover:bg-gray-900 hover:text-white transition"
          >
            Explorar Álbuns
          </Link>
          <Link
            href="#quadros"
            className="px-8 py-3 bg-gray-900 text-white font-light hover:bg-gray-800 transition"
          >
            Ver Quadros
          </Link>
        </div>

        {/* Features */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center text-sm text-gray-600 font-light">
          <div>
            <p className="text-gray-900 font-normal mb-1">4.9/5</p>
            <p>Clientes Satisfeitos</p>
          </div>
          <div className="hidden sm:block w-px bg-gray-300"></div>
          <div>
            <p className="text-gray-900 font-normal mb-1">Premium</p>
            <p>Qualidade Garantida</p>
          </div>
          <div className="hidden sm:block w-px bg-gray-300"></div>
          <div>
            <p className="text-gray-900 font-normal mb-1">Portugal</p>
            <p>Entrega Rápida</p>
          </div>
        </div>
      </div>
    </section>
  )
}
