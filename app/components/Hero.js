'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-pink-100 opacity-70"></div>

      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
          Transforme Suas Memórias em Arte
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Álbuns personalizados premium e quadros fotográficos de alta qualidade.
          Cada imagem merece ser mais que uma foto.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="#albuns"
            className="bg-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition transform hover:scale-105"
          >
            Explorar Álbuns
          </Link>
          <Link
            href="#quadros"
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg border-2 border-purple-600 hover:bg-purple-50 transition"
          >
            Ver Quadros
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <span>4.9/5 Avaliação</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🚚</span>
            <span>Envio Gratuito</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">✨</span>
            <span>Qualidade Premium</span>
          </div>
        </div>
      </div>
    </section>
  )
}
