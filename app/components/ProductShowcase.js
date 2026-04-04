'use client'

import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Álbum Clássico Premium',
    price: '€450',
    image: '/images/dummy/product-1.jpg',
    description: 'Álbum de 40 páginas com capa em linho premium',
    badge: 'Mais Popular',
    color: 'from-purple-100 to-pink-100'
  },
  {
    id: 2,
    name: 'Quadro Fotográfico 50x70',
    price: '€599',
    image: '/images/dummy/product-2.jpg',
    description: 'Quadro em madeira com vidro anti-reflexo',
    badge: 'Premium',
    color: 'from-pink-100 to-rose-100'
  },
  {
    id: 3,
    name: 'Álbum Luxo Édição Limitada',
    price: '€899',
    image: '/images/dummy/product-3.jpg',
    description: 'Álbum de 60 páginas com encadernação em couro genuíno',
    badge: 'Exclusivo',
    color: 'from-blue-100 to-cyan-100'
  },
  {
    id: 4,
    name: 'Série de Quadros 3-Peças',
    price: '€1.299',
    image: '/images/dummy/product-4.jpg',
    description: 'Três quadros coordenados com moldura premium',
    badge: 'Destaque',
    color: 'from-amber-100 to-orange-100'
  },
]

export default function ProductShowcase() {
  return (
    <section id="albuns" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
              Seleção Premium
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">
            Coleção <span className="font-normal">Exclusiva</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Cada peça é uma celebração da qualidade, do design e da emoção
          </p>
        </div>

        {/* Grid de produtos - Apple style */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <div key={product.id} className="group flex flex-col h-full opacity-0 animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Product Card */}
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500">
                {/* Image container com gradiente de fundo */}
                <div className={`relative h-80 md:h-96 overflow-hidden bg-gradient-to-br ${product.color}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay sutil ao hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>

                  {/* Badge premium */}
                  <div className="absolute top-6 right-6">
                    <span className="inline-block bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase shadow-lg">
                      {product.badge}
                    </span>
                  </div>
                </div>

                {/* Content - Minimalist */}
                <div className="p-8 md:p-10">
                  {/* Nome do produto */}
                  <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {product.name}
                  </h3>

                  {/* Descrição */}
                  <p className="text-gray-600 text-sm font-light mb-8 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Preço e CTA */}
                  <div className="flex items-end justify-between pt-6 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Preço</p>
                      <p className="text-3xl md:text-4xl font-light text-gray-900">
                        {product.price}
                      </p>
                    </div>
                    <Link
                      href={`/produto/${product.id}`}
                      className="group/btn inline-flex items-center justify-center w-14 h-14 bg-gray-900 text-white rounded-full hover:bg-purple-600 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-6 h-6 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-20">
          <Link
            href="/produtos"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-purple-600 hover:shadow-2xl transition-all duration-300 group/cta"
          >
            Ver Toda a Coleção
            <svg className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
