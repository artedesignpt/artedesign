import Image from 'next/image'
import Link from 'next/link'
import { productos } from '../lib/products'
import { useState } from 'react'

export const metadata = {
  title: 'Produtos - ArteDesign',
  description: 'Veja toda a nossa coleção de álbuns e quadros fotográficos premium',
}

export default function ProdutosPage() {
  const [selectedCategory, setSelectedCategory] = useState('todos')

  const filtered = selectedCategory === 'todos'
    ? productos
    : productos.filter(p => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
              Catálogo Completo
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">
            Coleção Completa
          </h1>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto mb-12">
            Explore nossa seleção curada de álbuns, quadros e presentes premium
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {['todos', 'albuns', 'quadros', 'presentes'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {cat === 'todos' ? 'Todos' : cat === 'albuns' ? 'Álbuns' : cat === 'quadros' ? 'Quadros' : 'Presentes'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filtered.map((product) => (
              <Link key={product.id} href={`/produtos/${product.id}`}>
                <div className="group flex flex-col h-full hover:opacity-90 transition">
                  {/* Card */}
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                    {/* Image */}
                    <div className="relative h-72 overflow-hidden bg-gray-100">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {product.badge && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                            {product.badge}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-light text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm font-light mb-6 flex-grow">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                        <span className="text-2xl font-light text-gray-900">
                          {product.price}€
                        </span>
                        <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white group-hover:bg-purple-600 group-hover:scale-110 transition-all">
                          →
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
