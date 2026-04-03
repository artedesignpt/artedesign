import Image from 'next/image'
import Link from 'next/link'

const allProducts = [
  {
    id: 1,
    name: 'Álbum Clássico Premium',
    price: 450,
    image: 'https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=500&h=500&fit=crop',
    description: 'Álbum de 40 páginas com capa em linho premium',
    category: 'albums',
    badge: 'Mais Popular'
  },
  {
    id: 2,
    name: 'Quadro Fotográfico 50x70',
    price: 599,
    image: 'https://images.unsplash.com/photo-1564247586-a987f1659a98?w=500&h=500&fit=crop',
    description: 'Quadro em madeira com vidro anti-reflexo',
    category: 'frames',
    badge: 'Premium'
  },
  {
    id: 3,
    name: 'Álbum Luxo Édição Limitada',
    price: 899,
    image: 'https://images.unsplash.com/photo-1516575334481-f410a11e8f45?w=500&h=500&fit=crop',
    description: 'Álbum de 60 páginas com encadernação em couro genuíno',
    category: 'albums',
    badge: 'Exclusivo'
  },
  {
    id: 4,
    name: 'Série de Quadros 3-Peças',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&h=500&fit=crop',
    description: 'Três quadros coordenados com moldura premium',
    category: 'frames',
    badge: 'Destaque'
  },
  {
    id: 5,
    name: 'Álbum Personalizado Pequeno',
    price: 350,
    image: 'https://images.unsplash.com/photo-1606933248051-5ce98adc9e0b?w=500&h=500&fit=crop',
    description: 'Álbum de 20 páginas, perfeito para viagens',
    category: 'albums',
    badge: 'Novo'
  },
  {
    id: 6,
    name: 'Quadro Fotográfico 70x100',
    price: 799,
    image: 'https://images.unsplash.com/photo-1609003601031-491c71ba96d7?w=500&h=500&fit=crop',
    description: 'Grande formato para salas espaçosas',
    category: 'frames',
    badge: ''
  },
]

export const metadata = {
  title: 'Produtos - ArteDesign',
  description: 'Veja toda a nossa coleção de álbuns e quadros fotográficos premium',
}

export default function ProdutosPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Nossa Coleção Completa</h1>
          <p className="text-xl text-purple-100">Explore todos os nossos produtos premium</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.map((product) => (
            <div key={product.id} className="group relative product-card">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                  />
                  {product.badge && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded mb-4 inline-block">
                    {product.category === 'albums' ? 'Álbum' : 'Quadro'}
                  </span>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-bold text-purple-600">€{product.price}</span>
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
      </section>
    </div>
  )
}
