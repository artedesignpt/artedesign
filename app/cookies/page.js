'use client'

import Link from 'next/link'

export default function Cookies() {
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
          <h1 className="text-4xl font-light text-gray-900 mb-12">Política de Cookies</h1>

          <div className="space-y-8 text-gray-600 font-light">
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">O que são Cookies?</h2>
              <p>Cookies são pequenos ficheiros armazenados no seu navegador que ajudam a melhorar a sua experiência. Usamos cookies essenciais para funcionalidade básica e cookies analíticos para compreender como usa o site.</p>
            </div>

            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">Tipos de Cookies que Usamos</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-light text-gray-900 mb-2">Essenciais</h3>
                  <p>Necessários para o funcionamento do site (carrinho, login, segurança).</p>
                </div>
                <div>
                  <h3 className="text-lg font-light text-gray-900 mb-2">Analíticos</h3>
                  <p>Ajudam-nos a compreender como usa o site para melhorias futuras.</p>
                </div>
                <div>
                  <h3 className="text-lg font-light text-gray-900 mb-2">Publicitários</h3>
                  <p>Usados para marketing e publicidade direcionada (opcional).</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">Sua Privacidade</h2>
              <p>Não partilhamos dados de cookies com terceiros sem consentimento. Pode desativar cookies no seu navegador, mas alguns serviços podem não funcionar correctamente.</p>
            </div>

            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">Gerenciar Cookies</h2>
              <p>Pode alterar as suas preferências de cookies a qualquer momento. A maioria dos navegadores permite controlar ou eliminar cookies através das suas configurações.</p>
            </div>

            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">Contacto</h2>
              <p>Para dúvidas sobre cookies, contacte: mail@artedesign.pt</p>
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
