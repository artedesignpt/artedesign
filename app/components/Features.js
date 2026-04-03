'use client'

const features = [
  {
    icon: '🎨',
    title: 'Design Personalizável',
    description: 'Crie o seu próprio design com nosso editor intuitivo'
  },
  {
    icon: '📸',
    title: 'Upload Ilimitado',
    description: 'Faça upload de quantas fotos quiser sem restrições'
  },
  {
    icon: '🎯',
    title: 'Qualidade Premium',
    description: 'Impressão em papel premium de 300g com cores vibrantes'
  },
  {
    icon: '🚚',
    title: 'Envio Rápido',
    description: 'Entrega em Portugal em 5-7 dias úteis'
  },
  {
    icon: '💎',
    title: 'Acabamento Luxo',
    description: 'Opções de encadernação premium em couro e linho'
  },
  {
    icon: '✨',
    title: 'Garantia de Qualidade',
    description: '100% satisfação ou devolução do dinheiro'
  },
]

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Por Que Escolher ArteDesign</h2>
          <p className="text-xl text-gray-600">Tudo o que você precisa para criar memórias perfeitas</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
