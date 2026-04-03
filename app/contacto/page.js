'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // TODO: Integrar com API de email (SendGrid, Mailgun, etc)
      console.log('Formulário enviado:', formData)
      setEnviado(true)
      setFormData({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' })
      setTimeout(() => setEnviado(false), 3000)
    } catch (error) {
      console.error('Erro ao enviar:', error)
    }
  }

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
              <Link href="/contacto" className="font-light text-gray-900 hover:text-gray-600 transition border-b-2 border-gray-900">Contacto</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Entre em Contacto
          </h1>
          <p className="text-lg text-gray-600 font-light">
            Tem dúvidas? Estamos aqui para ajudar. Envie-nos uma mensagem.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

          {/* Contact Information */}
          <div className="md:col-span-1 space-y-8">
            <div>
              <h3 className="text-lg font-light text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 font-light">mail@artedesign.pt</p>
            </div>
            <div>
              <h3 className="text-lg font-light text-gray-900 mb-2">Telefone</h3>
              <p className="text-gray-600 font-light">+351 XXX XXX XXX</p>
            </div>
            <div>
              <h3 className="text-lg font-light text-gray-900 mb-2">Morada</h3>
              <p className="text-gray-600 font-light">Portugal</p>
            </div>
            <div>
              <h3 className="text-lg font-light text-gray-900 mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="https://instagram.com" className="text-gray-600 hover:text-gray-900 transition font-light">
                  Instagram
                </a>
                <a href="https://facebook.com" className="text-gray-600 hover:text-gray-900 transition font-light">
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            {enviado ? (
              <div className="border border-gray-200 p-8 text-center">
                <h3 className="text-xl font-light text-gray-900 mb-2">Mensagem Enviada!</h3>
                <p className="text-gray-600 font-light">Obrigado. Entraremos em contacto em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-light text-gray-900 mb-2">Nome</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 font-light focus:outline-none focus:border-gray-900 transition"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-gray-900 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 font-light focus:outline-none focus:border-gray-900 transition"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-light text-gray-900 mb-2">Telefone (opcional)</label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 font-light focus:outline-none focus:border-gray-900 transition"
                      placeholder="+351 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-gray-900 mb-2">Assunto</label>
                    <input
                      type="text"
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 font-light focus:outline-none focus:border-gray-900 transition"
                      placeholder="Assunto"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-900 mb-2">Mensagem</label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 font-light focus:outline-none focus:border-gray-900 transition resize-none"
                    placeholder="Sua mensagem..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gray-900 text-white font-light hover:bg-gray-800 transition"
                >
                  Enviar Mensagem
                </button>
              </form>
            )}
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
