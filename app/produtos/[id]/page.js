'use client'

import Image from 'next/image'
import Link from 'next/link'
import { productos } from '../../lib/products'

export default function ProductPage({ params }) {
  const product = productos.find(p => p.id === parseInt(params.id))

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Produto não encontrado</h1>
          <Link href="/produtos" className="text-purple-600 hover:text-purple-700">
            Voltar para produtos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <Link href="/produtos" className="text-sm text-gray-600 hover:text-gray-900">
            ← Voltar aos produtos
          </Link>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Image */}
            <div className="flex items-center">
              <div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              {product.badge && (
                <div className="inline-block mb-4">
                  <span className="bg-gray-100 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                    {product.badge}
                  </span>
                </div>
              )}

              <h1 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">
                {product.name}
              </h1>

              <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
                {product.longDescription}
              </p>

              {/* Price */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <span className="text-5xl font-light text-gray-900">
                  {product.price}€
                </span>
              </div>

              {/* Features */}
              <div className="mb-12">
                <h3 className="text-xl font-light mb-6 text-gray-900">Características</h3>
                <ul className="space-y-3">
                  {product.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 font-light">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-4"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="space-y-4">
                <button className="w-full bg-gray-900 text-white py-4 rounded-lg font-medium hover:bg-purple-600 transition-colors">
                  Adicionar ao Carrinho
                </button>
                <button className="w-full border border-gray-300 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Adicionar à Lista de Desejos
                </button>
              </div>

              {/* Info */}
              <div className="mt-12 pt-12 border-t border-gray-200 space-y-4 text-sm text-gray-600">
                <p>✓ Envio grátis para encomendas acima de 50€</p>
                <p>✓ Garantia de satisfação 30 dias</p>
                <p>✓ Suporte ao cliente 24/7</p>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-32">
            <h2 className="text-4xl font-light mb-12 text-gray-900">Produtos Relacionados</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {productos
                .filter(p => p.category === product.category && p.id !== product.id)
                .slice(0, 4)
                .map((relatedProduct) => (
                  <Link key={relatedProduct.id} href={`/produtos/${relatedProduct.id}`}>
                    <div className="group">
                      <div className="relative h-64 overflow-hidden rounded-2xl bg-gray-100 mb-4">
                        <Image
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="font-light text-lg text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-gray-600 font-light text-sm">
                        {relatedProduct.price}€
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
