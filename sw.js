# PSI Broker Mobile — Android PWA

Esta pasta contém a versão instalável para Android como PWA.

## Instalar no Android

1. Envia esta pasta para um alojamento HTTPS, por exemplo Netlify, Vercel, GitHub Pages ou outro servidor com HTTPS.
2. Abre `index.html` no Chrome Android através desse endereço HTTPS.
3. Toca em **Instalar** quando aparecer o botão, ou usa o menu do Chrome: **⋮ → Adicionar ao ecrã principal / Instalar app**.
4. A app fica com ícone próprio e abre em ecrã inteiro.

## Nota importante

Abrir o ficheiro diretamente como `file://` no telemóvel não permite instalar uma PWA completa, porque Android/Chrome exige contexto seguro, normalmente HTTPS, para manifest e service worker.

## Dados de mercado

A app mantém a mesma lógica da versão mobile: tenta obter cotações via Yahoo Chart e proxies públicos. Para uso sério/produção, usa um backend próprio ou uma API licenciada da Euronext.
