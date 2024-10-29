# Portfólio (Checkpoint 6)

**Disciplina**: Front-End Design Engineering  
**Professor**: Alexandre C. de Jesus  
**Curso**: Análise e Desenvolvimento de Sistemas - FIAP  
**Turma**: 1TDSPG

---

## Índice

- [Descrição Geral](#descrição-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Configuração](#instalação-e-configuração)
- [Funcionalidades](#funcionalidades)
- [Deploy](#deploy)
- [Integrantes](#integrantes)

---

## Descrição Geral

Este projeto tem como objetivo o desenvolvimento de uma aplicação web em **Next.js** e **TypeScript** para exibir um portfólio das avaliações realizadas ao longo da faculdade, com destaque para três tipos principais de avaliações:

1. **CheckPoints (CPS)** - Acompanhamento do progresso com avaliações intermediárias.
2. **GlobalSolution (GS)** - Avaliações integradoras, abrangendo o uso global dos conhecimentos.
3. **Challenger Sprints** - Desafios rápidos focados em resolução de problemas.

## A aplicação permite a visualização das notas e feedbacks das avaliações, além de possibilitar a adição e edição de dados por meio de formulários, seguindo os requisitos de rotas dinâmicas e layout responsivo.

## Tecnologias Utilizadas

- **Next.js** com **TypeScript**
- **Tailwind CSS** para estilização
- **Git** e **GitHub** para versionamento
- **Vercel** para deploy e hospedagem do projeto

---

## Instalação e Configuração

1. **Clone o repositório:**
   git clone https://github.com/felipeclarindo/portfolio-cp6.git

2. **Instale as dependências:**
   cd portfolio
   npm install

3. **Inicie o servidor de desenvolvimento:**
   npm run dev

4. **Acesse o projeto: Abra http://localhost:3000 no navegador para ver a aplicação.**

## Funcionalidades

- **Página Inicial (Dashboard):** Resumo das categorias de avaliações com links para as páginas detalhadas de CheckPoints, GlobalSolution e Challenger Sprints.
- **CheckPoints:** Listagem e detalhamento de avaliações intermediárias.
- **GlobalSolution:** Visualização de projetos integradores.
- **Challenger Sprints:** Lista dos desafios rápidos e notas associadas.
- **Visualização Detalhada:** Acesso individual a cada avaliação com notas, feedback e outras informações.
- **Formulários de Inserção e Edição:** Adição e edição de avaliações via formulários (POST e PUT).
- **Páginas de Erro Personalizadas:** Erros 404, 500 e outros.
- **Fallback e Loading States:** Tratamento visual de rotas dinâmicas e estados de carregamento.

---

## Deploy

O projeto está publicado na **Vercel** e pode ser acessado [aqui](https://portfolio-cp6.vercel.app).

---

## Integrantes

- Caetano Penafiel - RM: 557984
- Kauã Zipf - RM: 558957
- Victor Egidio - RM: 556653
- Felipe Clarindo - RM: 554547
- Diego Bassalo - RM: 558710
