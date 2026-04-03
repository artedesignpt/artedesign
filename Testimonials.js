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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-light tracking-widest text-gray-500 uppercase mb-4">Depoimentos</p>
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">O Que Dizem Nossos Clientes</h2>
          <p className="text-lg text-gray-600 font-light">Histórias de memórias transformadas em arte</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border border-gray-200 p-8 hover:border-gray-900 transition flex flex-col">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-gray-400 text-lg">★</span>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-8 font-light flex-grow">{testimonial.text}</p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-light text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm font-light">Cliente Verificado</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
