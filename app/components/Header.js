'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ArteDesign
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="#albuns" className="hover:text-purple-600 transition">
              Álbuns
            </Link>
            <Link href="#quadros" className="hover:text-purple-600 transition">
              Quadros
            </Link>
            <Link href="#portfolio" className="hover:text-purple-600 transition">
              Portfolio
            </Link>
            <Link href="#contacto" className="hover:text-purple-600 transition">
              Contacto
            </Link>
            <Link
              href="/checkout"
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Carrinho
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link href="#albuns" className="block hover:text-purple-600">
              Álbuns
            </Link>
            <Link href="#quadros" className="block hover:text-purple-600">
              Quadros
            </Link>
            <Link href="#portfolio" className="block hover:text-purple-600">
              Portfolio
            </Link>
            <Link href="#contacto" className="block hover:text-purple-600">
              Contacto
            </Link>
            <Link href="/checkout" className="block bg-purple-600 text-white px-4 py-2 rounded">
              Carrinho
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
