'use client'

const testimonials = [
  {
    name: 'Maria Silva',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    text: 'O álbum chegou perfeito! A qualidade é extraordinária. Recomendo muito!',
    rating: 5
  },
  {
    name: 'João Santos',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    text: 'Que serviço impecável! O quadro ficou lindo na minha parede.',
    rating: 5
  },
  {
    name: 'Ana Costa',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    text: 'Excelente qualidade e entrega rápida. Voltarei a encomendar!',
    rating: 5
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">O Que Dizem Nossos Clientes</h2>
          <p className="text-xl text-gray-600">Histórias de memórias transformadas em arte</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-6 italic">{testimonial.text}</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">Cliente Verificado</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
