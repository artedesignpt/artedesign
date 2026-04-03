'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CheckoutPage() {
  const [cartItems] = useState([
    { id: 1, name: 'Álbum Clássico Premium', price: 450, quantity: 1 }
  ])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postal: '',
    country: 'Portugal'
  })

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 100 ? 0 : 10
  const total = subtotal + shipping

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleCheckout = async (e) => {
    e.preventDefault()
    console.log('Processando pagamento...', formData)
    alert('Integrando com Stripe e Dreambooks...')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Carrinho de Compras</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleCheckout} className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-6">Informações de Entrega</h2>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telemóvel</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Morada</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cidade</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Código Postal</label>
                  <input
                    type="text"
                    name="postal"
                    value={formData.postal}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">País</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    <option>Portugal</option>
                    <option>Espanha</option>
                    <option>França</option>
                    <option>Outro</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-purple-700 transition"
              >
                Proceder ao Pagamento
              </button>

              <Link href="/produtos" className="block text-center mt-4 text-purple-600 hover:text-purple-700">
                ← Continuar Comprando
              </Link>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow sticky top-20">
              <h2 className="text-2xl font-bold mb-6">Resumo da Encomenda</h2>

              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between mb-4 pb-4 border-b">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">Qtd: {item.quantity}</p>
                  </div>
                  <p className="font-bold">€{item.price * item.quantity}</p>
                </div>
              ))}

              <div className="space-y-3 py-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span>€{subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Envio:</span>
                  <span className={shipping === 0 ? 'text-green-600 font-bold' : ''}>
                    {shipping === 0 ? 'Grátis' : `€${shipping}`}
                  </span>
                </div>
              </div>

              <div className="border-t-2 border-gray-200 pt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-purple-600">€{total}</span>
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                ✨ Envio grátis em encomendas acima de €100
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
