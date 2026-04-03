'use client'

import Link from 'next/link'

export default function Sobre() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 border-2 border-gray-900 flex items-center justify-center">
                <span className="text-sm font-light">A</span>
              </div>
              <span className="font-light tracking-wide text-gray-900">ARTEDESIGN</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="font-light text-gray-900 hover:text-gray-600 transition">Home</Link>
              <Link href="/produtos" className="font-light text-gray-900 hover:text-gray-600 transition">Produtos</Link>
              <Link href="/sobre" className="font-light text-gray-900 hover:text-gray-600 transition border-b-2 border-gray-900">Sobre</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Sobre ArteDesign
          </h1>
          <p className="text-lg text-gray-600 font-light">
            Preservamos memórias com elegância, qualidade e dedicação ao detalhe.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-6">A Nossa História</h2>
            <p className="text-gray-600 font-light leading-relaxed mb-4">
              ArteDesign nasceu de uma paixão simples: transformar momentos especiais em obras de arte duráveis. Acreditamos que as memórias merecem ser preservadas com elegância e qualidade premium.
            </p>
            <p className="text-gray-600 font-light leading-relaxed">
              Desde o início, comprometemo-nos com a excelência em cada detalhe - desde a seleção de materiais até à impressão final. Cada álbum e quadro é criado com cuidado, garantindo que as suas memórias sejam preservadas para as gerações futuras.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-6">Os Nossos Valores</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-gray-200 p-6">
                <h3 className="text-lg font-light text-gray-900 mb-3">Qualidade</h3>
                <p className="text-gray-600 font-light text-sm">Usamos apenas os melhores materiais e processos de impressão para garantir durabilidade.</p>
              </div>
              <div className="border border-gray-200 p-6">
                <h3 className="text-lg font-light text-gray-900 mb-3">Elegância</h3>
                <p className="text-gray-600 font-light text-sm">Cada design é cuidadosamente pensado para refletir sofisticação e bom gosto.</p>
              </div>
              <div className="border border-gray-200 p-6">
                <h3 className="text-lg font-light text-gray-900 mb-3">Serviço</h3>
                <p className="text-gray-600 font-light text-sm">Estamos sempre disponíveis para ajudar e garantir que fica completamente satisfeito.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-6">Por Que Escolher ArteDesign?</h2>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-gray-900 font-light">✓</span>
                <span className="text-gray-600 font-light">Materiais premium e processos de impressão de alta qualidade</span>
              </li>
              <li className="flex gap-4">
                <span className="text-gray-900 font-light">✓</span>
                <span className="text-gray-600 font-light">Design elegante e intemporal que resiste ao tempo</span>
              </li>
              <li className="flex gap-4">
                <span className="text-gray-900 font-light">✓</span>
                <span className="text-gray-600 font-light">Entrega rápida e cuidadosa em Portugal</span>
              </li>
              <li className="flex gap-4">
                <span className="text-gray-900 font-light">✓</span>
                <span className="text-gray-600 font-light">Suporte ao cliente dedicado e personalizado</span>
              </li>
              <li className="flex gap-4">
                <span className="text-gray-900 font-light">✓</span>
                <span className="text-gray-600 font-light">Garantia de satisfação em cada projeto</span>
              </li>
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Pronto para Começar?</h2>
            <p className="text-gray-600 font-light mb-6">
              Explore os nossos produtos e descubra como podemos ajudar a preservar as suas memórias mais especiais.
            </p>
            <div className="flex gap-4">
              <Link href="/produtos" className="px-8 py-4 bg-gray-900 text-white font-light hover:bg-gray-800 transition">
                Ver Produtos
              </Link>
              <Link href="/contacto" className="px-8 py-4 border border-gray-900 text-gray-900 font-light hover:bg-gray-900 hover:text-white transition">
                Entre em Contacto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 font-light text-sm">
            © 2024 ArteDesign. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
