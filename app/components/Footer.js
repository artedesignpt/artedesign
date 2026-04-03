'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 border border-gray-900 flex items-center justify-center">
                <span className="text-sm font-light">A</span>
              </div>
              <span className="font-light tracking-wide text-gray-900">ARTEDESIGN</span>
            </div>
            <p className="text-sm text-gray-600 font-light mb-4">
              Preservando memórias com elegância e qualidade premium
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-600 hover:text-gray-900 transition text-sm font-light">
                Instagram
              </a>
              <a href="https://facebook.com" className="text-gray-600 hover:text-gray-900 transition text-sm font-light">
                Facebook
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-light mb-4 text-gray-900">Produtos</h4>
            <ul className="space-y-2">
              <li><Link href="/produtos" className="text-gray-600 hover:text-gray-900 transition font-light">Álbuns Premium</Link></li>
              <li><Link href="/produtos" className="text-gray-600 hover:text-gray-900 transition font-light">Quadros Fotográficos</Link></li>
              <li><Link href="/produtos" className="text-gray-600 hover:text-gray-900 transition font-light">Edições Limitadas</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-light mb-4 text-gray-900">Empresa</h4>
            <ul className="space-y-2">
              <li><Link href="/sobre" className="text-gray-600 hover:text-gray-900 transition font-light">Sobre Nós</Link></li>
              <li><Link href="/contacto" className="text-gray-600 hover:text-gray-900 transition font-light">Contacto</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-gray-900 transition font-light">FAQs</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-light mb-4 text-gray-900">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacidade" className="text-gray-600 hover:text-gray-900 transition font-light">Política de Privacidade</Link></li>
              <li><Link href="/termos" className="text-gray-600 hover:text-gray-900 transition font-light">Termos de Serviço</Link></li>
              <li><Link href="/cookies" className="text-gray-600 hover:text-gray-900 transition font-light">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-600 text-center font-light text-sm">
            &copy; 2024 ArteDesign. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
