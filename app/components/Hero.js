'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Hero Section com imagem grande */}
      <div className="relative h-screen w-full flex items-center justify-center pt-20">
        {/* Background com gradiente sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>

        {/* Grid pattern sutil */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}
        ></div>

        {/* Conteúdo */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Tag premium */}
          <div className="inline-block mb-8 opacity-0 animate-fadeIn">
            <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
              Coleção Exclusiva 2024
            </span>
          </div>

          {/* Heading principal - estilo Apple */}
          <h1 className="text-6xl md:text-8xl font-light leading-tight mb-8 text-gray-900 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Preserve suas<br />
            <span className="relative inline-block">
              memórias
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400"></span>
            </span>
            <br />com elegância
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Álbuns personalizados e quadros fotográficos de luxo.
            Transforme seus momentos em arte atemporal.
          </p>

          {/* CTA Buttons - Premium styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <Link
              href="#albuns"
              className="group px-8 py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all duration-300 rounded-lg inline-flex items-center justify-center gap-2"
            >
              Explorar Coleção
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="#quadros"
              className="px-8 py-4 border border-gray-300 text-gray-900 font-medium hover:border-gray-900 hover:bg-gray-50 transition-all duration-300 rounded-lg"
            >
              Ver Catálogo
            </Link>
          </div>

          {/* Stats - Premium layout */}
          <div className="flex flex-col sm:flex-row gap-12 justify-center text-center opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="group cursor-default">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">4.9★</p>
              <p className="text-sm text-gray-600 font-light uppercase tracking-wide">Clientes Satisfeitos</p>
            </div>
            <div className="hidden sm:block w-px bg-gray-300"></div>
            <div className="group cursor-default">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">100%</p>
              <p className="text-sm text-gray-600 font-light uppercase tracking-wide">Qualidade Premium</p>
            </div>
            <div className="hidden sm:block w-px bg-gray-300"></div>
            <div className="group cursor-default">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">24h</p>
              <p className="text-sm text-gray-600 font-light uppercase tracking-wide">Entrega Expressa</p>
            </div>
          </div>
        </div>

        {/* Hero Image com efeito parallax */}
        <div className="absolute bottom-0 right-0 w-1/2 h-3/4 hidden lg:block opacity-20" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="360" height="260" rx="20" stroke="currentColor" strokeWidth="2" className="text-purple-400"/>
            <path d="M60 80 Q200 40 340 80" stroke="currentColor" strokeWidth="2" className="text-pink-400"/>
          </svg>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
