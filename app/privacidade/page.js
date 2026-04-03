'use client'

import Link from 'next/link'

export default function Privacidade() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 border-2 border-gray-900 flex items-center justify-center">
              <span className="text-sm font-light">A</span>
            </div>
            <span className="font-light tracking-wide text-gray-900">ARTEDESIGN</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-light text-gray-900 mb-12">Política de Privacidade</h1>

          <div className="space-y-8 text-gray-600 font-light">
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">1. Introdução</h2>
              <p>A ArteDesign respeita a sua privacidade. Esta política explica como recolhemos, usamos e protegemos os seus dados pessoais.</p>
            </div>

            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">2. Dados que Recolhemos</h2>
              <p>Recolhemos dados que voluntariamente partilha connosco, incluindo:</p>
              <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                <li>Nome, email e telefone</li>
                <li>Endereço de entrega</li>
                <li>Histórico de pedidos</li>
                <li>Fotos que envia para customização</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">3. Como Usamos os Seus Dados</h2>
              <p>Usamos os seus dados para:</p>
              <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                <li>Processar e entregar os seus pedidos</li>
                <li>Comunicar sobre o seu pedido</li>
                <li>Melhorar os nossos serviços</li>
                <li>Enviar newsletters (apenas se autorizar)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">4. Segurança</h2>
              <p>Protegemos os seus dados com encriptação SSL e outras medidas de segurança. Não armazenamos informações sensíveis como números de cartão de crédito.</p>
            </div>

            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">5. Seus Direitos</h2>
              <p>Tem o direito de:</p>
              <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                <li>Aceder aos seus dados</li>
                <li>Corrigir dados incorretos</li>
                <li>Apagar seus dados</li>
                <li>Cancelar a subscrição de newsletters</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">6. Contacto</h2>
              <p>Para dúvidas sobre privacidade, contacte: mail@artedesign.pt</p>
            </div>

            <div className="text-sm text-gray-500 mt-12 pt-8 border-t border-gray-200">
              <p>Última atualização: Março 2024</p>
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
