'use client'

import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200 border-b border-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
          Pronto para Preservar Suas Memórias?
        </h2>

        <p className="text-lg text-gray-600 mb-12 font-light">
          Crie seu primeiro projeto agora. Entrega rápida, qualidade garantida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="#albuns"
            className="px-8 py-4 border border-gray-900 text-gray-900 font-light hover:bg-gray-900 hover:text-white transition"
          >
            Começar Agora
          </Link>
          <Link
            href="#contacto"
            className="px-8 py-4 bg-gray-900 text-white font-light hover:bg-gray-800 transition"
          >
            Falar com Especialista
          </Link>
        </div>

        {/* Newsletter signup */}
        <div className="mt-12 max-w-md mx-auto">
          <p className="text-gray-600 mb-6 font-light text-sm">Receba promoções e novidades no seu email</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="seu@email.com"
              className="flex-1 px-4 py-3 border border-gray-300 bg-white text-gray-900 font-light focus:outline-none focus:border-gray-900 transition"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gray-900 text-white font-light hover:bg-gray-800 transition"
            >
              Inscrever
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
