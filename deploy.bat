@echo off
REM ArteDesign - Deploy Script (Windows)
REM Executa: deploy.bat (duplo-clique)

echo.
echo ========================================
echo   ArteDesign Deploy Script
echo ========================================
echo.

REM Token GitHub
set TOKEN=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
set GITHUB_USER=artedesignpt
set GITHUB_REPO=artedesign

echo [1/6] Inicializar Git...
git init
git config user.email "git@artedesign.pt"
git config user.name "ArteDesign Team"
echo OK!
echo.

echo [2/6] Adicionar arquivos...
git add .
echo OK!
echo.

echo [3/6] Criar commit...
git commit -m "Initial commit: ArteDesign MVP - Homepage, Products, Checkout - Pronto para Vercel deploy - Co-Authored-By: Claude Haiku 4.5 ^<noreply@anthropic.com^>"
echo OK!
echo.

echo [4/6] Adicionar repositorio remoto...
git remote add origin https://%GITHUB_USER%:%TOKEN%@github.com/%GITHUB_USER%/%GITHUB_REPO%.git
echo OK!
echo.

echo [5/6] Renomear branch para main...
git branch -M main
echo OK!
echo.

echo [6/6] Fazer push para GitHub...
git push -u origin main
echo OK!
echo.

echo ========================================
echo   SUCESSO!
echo ========================================
echo.
echo Vercel esta a fazer deploy...
echo Aguarda 2-3 minutos...
echo.
echo Link: https://artedesign.vercel.app
echo.
echo IMPORTANTE:
echo Invalida o token em:
echo https://github.com/settings/tokens
echo.
echo Avisa quando estiver LIVE!
echo.
pause
