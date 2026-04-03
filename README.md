# 🎨 ArteDesign - MVP Next.js

Website premium de venda de álbuns e quadros fotográficos personalizados.

## 🚀 Status

**MVP em desenvolvimento** - Estrutura pronta, integrações em progresso.

## 📋 O que já existe

✅ Homepage com hero section elegante
✅ Página de produtos completa
✅ Carrinho de compras com checkout
✅ Responsive design (mobile-first)
✅ Estilos com Tailwind CSS
✅ Estrutura modular pronta para integrações

## 🔄 Próximos passos

- [ ] Integração Stripe (pagamentos)
- [ ] Integração Cloudinary (upload de fotos)
- [ ] Integração Mailchimp (newsletter)
- [ ] Integração Dreambooks (gestão de ordens)
- [ ] API Routes para processamento
- [ ] Agentes automáticos para marketing

## 🛠️ Setup Local

### Requisitos

- Node.js 16+ instalado
- npm ou yarn

### Instalação

```bash
# 1. Instalar dependências
npm install

# 2. Criar .env.local (copiar de .env.example)
cp .env.example .env.local

# 3. Preencher variáveis de ambiente (depois com valores reais)

# 4. Rodar em desenvolvimento
npm run dev
```

Acede a: http://localhost:3000

## 📦 Estrutura do Projeto

```
artedesign/
├── app/
│   ├── components/       # Componentes React reutilizáveis
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── ProductShowcase.js
│   │   ├── Features.js
│   │   ├── Testimonials.js
│   │   └── CTA.js
│   ├── styles/
│   │   └── globals.css   # Estilos globais + Tailwind
│   ├── api/              # API Routes (próximo)
│   ├── produtos/         # Página de produtos
│   ├── checkout/         # Página de checkout
│   ├── layout.js         # Layout principal
│   └── page.js           # Homepage
├── public/               # Assets estáticos
├── .env.example          # Variáveis de exemplo
├── package.json          # Dependências
├── tailwind.config.js    # Configuração Tailwind
├── postcss.config.js     # Configuração PostCSS
└── next.config.js        # Configuração Next.js
```

## 🌐 Deploy no Vercel

### Passo 1: Fazer Push para GitHub

```bash
# 1. Inicializar git (se ainda não foi feito)
cd artedesign
git init

# 2. Adicionar todos os arquivos
git add .

# 3. Primeiro commit
git commit -m "Initial commit: ArteDesign MVP"

# 4. Adicionar repositório remoto
git remote add origin https://github.com/artedesignpt/artedesign.git

# 5. Fazer push para main
git branch -M main
git push -u origin main
```

### Passo 2: Conectar Vercel

1. Vai para: https://vercel.com/import
2. Seleciona "Import GitHub Project"
3. Procura por "artedesignpt/artedesign"
4. Clica "Import"
5. Deixa as settings por defeito
6. Clica "Deploy"

**Aguarda ~3 minutos... estará live!** 🎉

### Passo 3: Apontar Domínio artedesign.pt

1. Copia o domínio temporário (tipo: artedesign.vercel.app)
2. Vai a: https://www.dominios.pt
3. Entra na tua conta
4. Vai a "artedesign.pt" → "Registos DNS"
5. Cria um CNAME:
   - **Nome:** www
   - **Valor:** cname.vercel-dns.com
6. Cria outro CNAME:
   - **Nome:** (deixa em branco para raiz)
   - **Valor:** cname.vercel-dns.com
7. Aguarda 24h para propagação

**Ou** deixa que Vercel guie (mais simples).

## 🔐 Variáveis de Ambiente

Copia `.env.example` para `.env.local` e preenche com:

```env
# Cloudinary (para upload de fotos)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Stripe (para pagamentos)
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=

# Mailchimp (para newsletter)
MAILCHIMP_API_KEY=
MAILCHIMP_LIST_ID=
MAILCHIMP_SERVER=

# Dreambooks (para ordens)
DREAMBOOKS_API_KEY=

# Email (para contactos)
SMTP_HOST=
SMTP_USER=
SMTP_PASS=
CONTACT_EMAIL=contact@artedesign.pt

# App
NEXT_PUBLIC_APP_URL=https://artedesign.pt
```

## 🚀 Workflow de Desenvolvimento

```
1. Tu develops/valida
   ↓
2. git add .
   git commit -m "descrição da mudança"
   git push origin main
   ↓
3. GitHub Actions testa automaticamente
   ↓
4. Vercel detecta push
   ↓
5. Vercel faz build
   ↓
6. Vercel faz deploy
   ↓
7. artedesign.pt atualiza automaticamente ✨
```

## 📱 Responsividade

Todas as páginas são mobile-first e responsivas:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## 🎯 Próximas Integrações

### 1. Stripe (Pagamentos)
```javascript
// Exemplo será adicionado
const handlePayment = async () => {
  // Integração com Stripe API
}
```

### 2. Cloudinary (Upload)
```javascript
// Widget de upload
<CldUploadWidget />
```

### 3. Mailchimp (Newsletter)
```javascript
// Subscrição automática
const subscribeToNewsletter = async (email) => {
  // API call para Mailchimp
}
```

## 🐛 Troubleshooting

### "npm install" com erro
```bash
npm cache clean --force
rm -rf node_modules
npm install
```

### Port 3000 já em uso
```bash
# Linux/Mac
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID [PID] /F
```

### Vercel com erro de build
1. Verifica `.env.local` tem todas as variáveis
2. Corre `npm run build` localmente para testar
3. Vê os logs em Vercel Dashboard

## 📞 Contacto & Suporte

- Email: git@artedesign.pt
- Domínio: artedesign.pt
- GitHub: github.com/artedesignpt

## 📄 Licença

© 2024 ArteDesign. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para ArteDesign**
