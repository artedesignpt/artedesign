'use client'

import Image from 'next/image'
import { productos } from '../lib/products'
import { useState } from 'react'

export default function GaleriaPage() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-6 inline-block">
            Galeria Premium
          </span>
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">
            Portfolio Exclusivo
          </h1>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Conheça nossos trabalhos realizados com dedicação à qualidade e ao detalhe
          </p>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productos.map((product, idx) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group cursor-pointer relative overflow-hidden rounded-2xl opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                {/* Image Container */}
                <div className="relative h-96 overflow-hidden bg-gray-100 rounded-2xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xl font-light mb-2">{product.name}</p>
                      <p className="text-sm text-gray-200">{product.price}€</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-96 overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 h-96">
              <div className="relative bg-gray-100">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-light mb-4">{selectedProduct.name}</h2>
                  <p className="text-gray-600 font-light mb-6">{selectedProduct.longDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProduct.features?.map((feature, idx) => (
                      <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-light">{selectedProduct.price}€</span>
                  <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-purple-600 transition-colors">
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
    </div>
  )
}
