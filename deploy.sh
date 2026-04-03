#!/bin/bash

# ArteDesign - Deploy Script (Mac/Linux)
# Executa: ./deploy.sh

echo "🚀 ArteDesign Deploy Script"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Cores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Token GitHub
TOKEN="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"
GITHUB_USER="artedesignpt"
GITHUB_REPO="artedesign"

echo -e "${BLUE}📍 Passo 1: Inicializar Git${NC}"
git init
git config user.email "git@artedesign.pt"
git config user.name "ArteDesign Team"
echo -e "${GREEN}✅ Git inicializado${NC}\n"

echo -e "${BLUE}📍 Passo 2: Adicionar todos os arquivos${NC}"
git add .
echo -e "${GREEN}✅ Arquivos adicionados${NC}\n"

echo -e "${BLUE}📍 Passo 3: Criar commit inicial${NC}"
git commit -m "Initial commit: ArteDesign MVP - Homepage, Products, Checkout

- Homepage com hero section elegante
- Página de produtos completa com 6 itens
- Carrinho e checkout funcional
- Design responsivo com Tailwind CSS
- Estrutura modular para integrações (Stripe, Cloudinary, Mailchimp)
- Pronto para Vercel deploy

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>"
echo -e "${GREEN}✅ Commit criado${NC}\n"

echo -e "${BLUE}📍 Passo 4: Adicionar repositório remoto${NC}"
git remote add origin https://${GITHUB_USER}:${TOKEN}@github.com/${GITHUB_USER}/${GITHUB_REPO}.git
echo -e "${GREEN}✅ Repositório remoto adicionado${NC}\n"

echo -e "${BLUE}📍 Passo 5: Renomear branch para main${NC}"
git branch -M main
echo -e "${GREEN}✅ Branch renomeado${NC}\n"

echo -e "${BLUE}📍 Passo 6: Fazer push para GitHub${NC}"
git push -u origin main
echo -e "${GREEN}✅ Push concluído!${NC}\n"

echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}🎉 SUCESSO!${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "✨ Vercel está a fazer deploy..."
echo "⏳ Aguarda 2-3 minutos..."
echo ""
echo "🔗 Link: https://artedesign.vercel.app"
echo ""
echo -e "${YELLOW}⚠️  IMPORTANTE:${NC}"
echo "Depois disto, invalida o token em:"
echo "https://github.com/settings/tokens"
echo ""
echo "Avisa quando estiver LIVE! 🚀"
