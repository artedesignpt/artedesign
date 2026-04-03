'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      pergunta: 'Qual é o tempo de entrega?',
      resposta: 'O tempo de entrega padrão é de 5-7 dias úteis após confirmação do pagamento. Para encomendas urgentes, contacte-nos diretamente.'
    },
    {
      pergunta: 'Posso customizar o design?',
      resposta: 'Sim! Oferecemos várias opções de customização. Pode adicionar seus próprios textos, escolher cores e layouts. Após o pedido, entraremos em contacto para detalhar as suas preferências.'
    },
    {
      pergunta: 'Qual é a qualidade da impressão?',
      resposta: 'Usamos impressoras de última geração com papel premium de 300g. As cores são vibrantes e duráveis, garantindo uma qualidade que resiste ao tempo.'
    },
    {
      pergunta: 'Que métodos de pagamento aceitam?',
      resposta: 'Aceitamos cartão de crédito, transferência bancária e PayPal. Todos os pagamentos são processados de forma segura.'
    },
    {
      pergunta: 'Como faço para fazer uma encomenda?',
      resposta: 'Visite a página "Produtos", escolha o item desejado, customize-o, adicione ao carrinho e proceda com o checkout. É rápido e simples!'
    },
    {
      pergunta: 'Posso devolver ou trocar a minha encomenda?',
      resposta: 'Sim. Se não ficar satisfeito com o produto, pode devolver dentro de 30 dias para reembolso total. Consulte os termos completos no site.'
    },
    {
      pergunta: 'Como protegem as minhas fotos?',
      resposta: 'Não armazenamos as suas fotos após o envio. Usamos encriptação SSL para proteger todos os dados. A privacidade é nossa prioridade.'
    },
    {
      pergunta: 'Oferecem descontos para encomendas grandes?',
      resposta: 'Sim! Para encomendas corporativas ou em volume, oferecemos descontos especiais. Contacte-nos para um orçamento personalizado.'
    },
    {
      pergunta: 'Qual é a política de privacidade?',
      resposta: 'Pode consultar a nossa política completa aqui. Em resumo: nunca partilhamos os seus dados com terceiros e usamos encriptação para proteger as suas informações.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 border-2 border-gray-900 flex items-center justify-center">
                <span className="text-sm font-light">A</span>
              </div>
              <span className="font-light tracking-wide text-gray-900">ARTEDESIGN</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="font-light text-gray-900 hover:text-gray-600 transition">Home</Link>
              <Link href="/produtos" className="font-light text-gray-900 hover:text-gray-600 transition">Produtos</Link>
              <Link href="/faq" className="font-light text-gray-900 hover:text-gray-600 transition border-b-2 border-gray-900">FAQ</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Perguntas Frequentes
          </h1>
          <p className="text-lg text-gray-600 font-light">
            Respostas às dúvidas mais comuns sobre os nossos produtos e serviços.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span className="text-lg font-light text-gray-900 text-left">{faq.pergunta}</span>
                <span className="text-gray-600 font-light">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-600 font-light">{faq.resposta}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">Ainda tem dúvidas?</h2>
          <p className="text-gray-600 font-light mb-8">
            Entre em contacto connosco directamente. Estamos aqui para ajudar.
          </p>
          <Link href="/contacto" className="px-8 py-4 bg-gray-900 text-white font-light hover:bg-gray-800 transition">
            Contacte-nos
          </Link>
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
