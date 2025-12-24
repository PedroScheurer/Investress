# 📊 Investress

![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Frontend-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6.x-CA4245?logo=react-router&logoColor=white)
![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow)

**Investress** é uma aplicação front-end voltada para **gerenciamento de investimentos** e **execução de testes de estresse**, permitindo analisar como uma carteira pode se comportar em **cenários extremos de mercado**.

O projeto foi desenvolvido com foco em **boas práticas de front-end**, **tipagem forte** e **arquitetura escalável**, sendo ideal para demonstração em **portfólio profissional**.

---

## 🚀 Funcionalidades

- 📈 Gerenciamento de investimentos e ativos
- 🧮 Análise de alocação da carteira
- ⚠️ Simulação de **testes de estresse financeiro**
  - Quedas abruptas de mercado
  - Aumento de volatilidade
  - Cenários macroeconômicos extremos
- 📊 Visualização clara do impacto dos cenários na carteira
- 🔀 Navegação entre páginas com **React Router**

---

## 🔗 Integração com Back-end

O Investress consome uma **<a href='https://github.com/PedroScheurer/api-investress'>API própria</a>**, responsável por:

- 🔐 Autenticação e gerenciamento de usuários
- 💾 Persistência de dados de investimentos e carteiras
- 🧮 Execução dos cálculos financeiros e testes de estresse
- 📊 Geração de estatísticas e métricas de risco

O front-end atua como camada de visualização e interação, consumindo os dados processados no back-end de forma segura e escalável.

---

## 🛠️ Stack Tecnológica

- **TypeScript** — Segurança, legibilidade e escalabilidade
- **React** — Componentização e UI declarativa
- **React Router** — Controle de rotas e navegação
- **Vite** — Build rápido e ambiente de desenvolvimento moderno
- **CSS Modules** — Estilização de componentes

---

## 🧩 Arquitetura do Projeto

```bash
src/
├── assets/        # Recursos estáticos (imagens, ícones)
├── components/    # Componentes reutilizáveis e desacoplados
  ├── ui/          # Componentes de interface
├── contexts/      # Contextos para uso de estados globais
├── hooks/         # Hooks customizáveis
├── pages/         # Páginas da aplicação
├── providers/     # Providers de contextos
├── utils/         # Funções utilitárias e helpers
├── App.tsx
└── main.tsx
```

---

## ▶️ Como Rodar o Projeto

### Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- **Node.js** (versão **LTS** recomendada)
- Gerenciador de pacotes: **npm**, **yarn** ou **pnpm**

### Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/investress.git

# Acesse o diretório do projeto
cd investress

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

---

## 🎯 Objetivo Técnicos 
- Aplicar React + TypeScript em um cenário realista
- Utilizar boas práticas de componentização e tipagem
- Trabalhar com navegação e separação de responsabilidades
- Criar um projeto sólido para portfólio profissional

---

## 🔮 Roadmap / Próximos Passos

- Integração com APIs de dados financeiros
- Dashboards com gráficos interativos
- Exportação de relatórios de risco

---

## 📄 Licença

Este projeto é destinado a fins educacionais e demonstrativos.
Sinta-se à vontade para estudar, adaptar e evoluir.
