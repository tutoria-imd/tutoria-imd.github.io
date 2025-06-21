# Tutoria IMD

A Tutoria é um projeto que busca promover a integração acadêmica e social dos ingressantes do BTI, oferecendo suporte técnico, pedagógico e emocional que facilite a adaptação ao ensino superior e contribua para o sucesso acadêmico e a permanência estudantil.

## Site

Este site busca ser uma plataforma informativa para ajudar os tutorados, oferecendo informações sobre atendimentos, materiais de apoio, dicas, eventos e contato.

## Tecnologias usadas

- **Tailwind CSS**: framework CSS utilitário para estilização rápida e responsiva  
- **PostCSS + Autoprefixer**: processamento do CSS gerado para garantir otimização
- **PNPM**: gerenciador de pacotes para instalação das dependências  

## Como usar este projeto localmente

### 1. Instale as dependências

```
pnpm install

```

### 2. Gere o CSS compilado do Tailwind

```
pnpm run build

```

Isso vai gerar o arquivo dist/output.css, que é o CSS minificado com apenas os estilos utilizados no projeto.

## Publicação

O site está hospedado no GitHub Pages.
Importante: o GitHub Pages não compila o Tailwind automaticamente, então o CSS deve ser gerado localmente e comitado junto ao código.
