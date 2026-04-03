'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              ArteDesign
            </h3>
            <p className="text-gray-400">
              Criando memórias em formato premium
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com" className="text-gray-400 hover:text-pink-400 transition">
                Instagram
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-blue-400 transition">
                Facebook
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4">Produtos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#albuns" className="hover:text-white transition">Álbuns Premium</Link></li>
              <li><Link href="#quadros" className="hover:text-white transition">Quadros Fotográficos</Link></li>
              <li><Link href="#albuns" className="hover:text-white transition">Edições Limitadas</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-white transition">Sobre Nós</Link></li>
              <li><Link href="#" className="hover:text-white transition">Contacto</Link></li>
              <li><Link href="#" className="hover:text-white transition">FAQs</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-white transition">Política de Privacidade</Link></li>
              <li><Link href="#" className="hover:text-white transition">Termos de Serviço</Link></li>
              <li><Link href="#" className="hover:text-white transition">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-center">
            &copy; 2024 ArteDesign. Todos os direitos reservados. | LFMCORPORATE
          </p>
        </div>
      </div>
    </footer>
  )
}
