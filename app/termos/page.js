'use client'

import Link from 'next/link'

export default function Termos() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 border-2 border-gray-900 flex items-center justify-center">
              <span className="text-sm font-light">A</span>
            </div>
            <span className="font-light tracking-wide text-gray-900">ARTEDESIGN</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-light text-gray-900 mb-12">Termos de Serviço</h1>

          <div className="space-y-8 text-gray-600 font-light">
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">1. Aceitação dos Termos</h2>
              <p>Ao usar o site ArteDesign, você concorda com estes termos e condições. Se não concordar, não use o site.</p>
            </div>

            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">2. Descrição do Serviço</h2>
              <p>ArteDesign fornece serviços de personalização e impressão de álbuns fotográficos e quadros. Os prazos de entrega são estimativas e podem variar.</p>
            </div>

            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">3. Pedidos e Pagamento</h2>
              <p>Ao fazer um pedido, você fornece informações precisas. O pagamento deve ser completo antes do processamento. Aceitamos cartão de crédito, transferência bancária e PayPal.</p>
            </div>

            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">4. Devoluções e Reembolsos</h2>
              <p>Produtos podem ser devolvidos dentro de 30 dias se não estiver satisfeito. Prazos de entrega podem variar conforme a localização.</p>
            </div>

            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">5. Responsabilidade Limitada</h2>
              <p>ArteDesign não é responsável por danos indiretos. Nossa responsabilidade está limitada ao valor do pedido.</p>
            </div>

            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">6. Direitos de Propriedade Intelectual</h2>
              <p>Você mantém os direitos das suas fotos. ArteDesign não reclama propriedade do seu conteúdo.</p>
            </div>

            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">7. Alterações dos Termos</h2>
              <p>Podemos alterar estes termos a qualquer momento. Continuações de uso implica aceitação das alterações.</p>
            </div>

            <div className="text-sm text-gray-500 mt-12 pt-8 border-t border-gray-200">
              <p>Última atualização: Março 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 font-light text-sm">
            © 2024 ArteDesign. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
