'use client'

import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Pronto para Transformar Suas Memórias?
        </h2>

        <p className="text-xl text-purple-100 mb-8">
          Crie seu primeiro projeto agora. Entrega rápida, qualidade garantida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#albuns"
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105"
          >
            Começar Agora
          </Link>
          <Link
            href="#contacto"
            className="bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-800 transition border-2 border-white"
          >
            Falar com Especialista
          </Link>
        </div>

        {/* Newsletter signup */}
        <div className="mt-12">
          <p className="text-purple-100 mb-4">Receba promoções e novidades no seu email</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="seu@email.com"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition"
            >
              Inscrever
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
