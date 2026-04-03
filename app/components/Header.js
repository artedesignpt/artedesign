'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex justify-between items-center">
          {/* Logo - Classic & Premium */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 border-2 border-gray-900 flex items-center justify-center">
                <span className="text-lg font-light text-gray-900">A</span>
              </div>
              <div className="text-xl font-light tracking-wide text-gray-900">
                ARTE<span className="font-normal">DESIGN</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12 items-center">
            <Link href="#albuns" className="text-sm font-light text-gray-700 hover:text-gray-900 transition">
              Álbuns
            </Link>
            <Link href="#quadros" className="text-sm font-light text-gray-700 hover:text-gray-900 transition">
              Quadros
            </Link>
            <Link href="#portfolio" className="text-sm font-light text-gray-700 hover:text-gray-900 transition">
              Galeria
            </Link>
            <Link href="#contacto" className="text-sm font-light text-gray-700 hover:text-gray-900 transition">
              Contacto
            </Link>
            <Link
              href="/checkout"
              className="text-sm font-light px-6 py-2 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition"
            >
              Carrinho
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-200 pt-4">
            <Link href="#albuns" className="block text-sm font-light text-gray-700 hover:text-gray-900">
              Álbuns
            </Link>
            <Link href="#quadros" className="block text-sm font-light text-gray-700 hover:text-gray-900">
              Quadros
            </Link>
            <Link href="#portfolio" className="block text-sm font-light text-gray-700 hover:text-gray-900">
              Galeria
            </Link>
            <Link href="#contacto" className="block text-sm font-light text-gray-700 hover:text-gray-900">
              Contacto
            </Link>
            <Link href="/checkout" className="block text-sm font-light px-4 py-2 border border-gray-900 text-gray-900">
              Carrinho
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
