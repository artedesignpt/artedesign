'use client'

import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Álbum Clássico Premium',
    price: '€450',
    image: 'https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=500&h=500&fit=crop',
    description: 'Álbum de 40 páginas com capa em linho premium',
    badge: 'Mais Popular'
  },
  {
    id: 2,
    name: 'Quadro Fotográfico 50x70',
    price: '€599',
    image: 'https://images.unsplash.com/photo-1564247586-a987f1659a98?w=500&h=500&fit=crop',
    description: 'Quadro em madeira com vidro anti-reflexo',
    badge: 'Premium'
  },
  {
    id: 3,
    name: 'Álbum Luxo Édição Limitada',
    price: '€899',
    image: 'https://images.unsplash.com/photo-1516575334481-f410a11e8f45?w=500&h=500&fit=crop',
    description: 'Álbum de 60 páginas com encadernação em couro genuíno',
    badge: 'Exclusivo'
  },
  {
    id: 4,
    name: 'Série de Quadros 3-Peças',
    price: '€1.299',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&h=500&fit=crop',
    description: 'Três quadros coordenados com moldura premium',
    badge: 'Destaque'
  },
]

export default function ProductShowcase() {
  return (
    <section id="albuns" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossa Coleção Premium</h2>
        <p className="text-xl text-gray-600">Cada peça é uma obra de arte</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            {/* Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              {/* Image container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {product.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-purple-600">{product.price}</span>
                  <Link
                    href={`/produto/${product.id}`}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                  >
                    Ver
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View all button */}
      <div className="text-center mt-12">
        <Link
          href="/produtos"
          className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition"
        >
          Ver Toda a Coleção
        </Link>
      </div>
    </section>
  )
}
