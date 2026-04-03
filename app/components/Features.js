'use client'

const features = [
  {
    icon: '01',
    title: 'Design Personalizável',
    description: 'Crie o seu próprio design com nosso editor intuitivo'
  },
  {
    icon: '02',
    title: 'Upload Ilimitado',
    description: 'Faça upload de quantas fotos quiser sem restrições'
  },
  {
    icon: '03',
    title: 'Qualidade Premium',
    description: 'Impressão em papel premium de 300g com cores vibrantes'
  },
  {
    icon: '04',
    title: 'Envio Rápido',
    description: 'Entrega em Portugal em 5-7 dias úteis'
  },
  {
    icon: '05',
    title: 'Acabamento Luxo',
    description: 'Opções de encadernação premium em couro e linho'
  },
  {
    icon: '06',
    title: 'Garantia de Qualidade',
    description: '100% satisfação ou devolução do dinheiro'
  },
]

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-light tracking-widest text-gray-500 uppercase mb-4">Excelência</p>
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">Por Que Escolher ArteDesign</h2>
          <p className="text-lg text-gray-600 font-light">Tudo o que você precisa para criar memórias perfeitas</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="border border-gray-200 p-8 hover:border-gray-900 transition">
              <div className="text-sm font-light tracking-widest text-gray-500 uppercase mb-4">{feature.icon}</div>
              <h3 className="text-lg font-light mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 font-light text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
