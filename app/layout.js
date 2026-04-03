import './styles/globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'ArteDesign - Álbuns e Quadros Fotográficos Premium',
  description: 'Álbuns personalizados e quadros fotográficos de alta qualidade. Crie suas memórias com estilo.',
  openGraph: {
    title: 'ArteDesign - Álbuns e Quadros Fotográficos Premium',
    description: 'Álbuns personalizados e quadros fotográficos de alta qualidade',
    url: 'https://artedesign.pt',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-gray-900">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
