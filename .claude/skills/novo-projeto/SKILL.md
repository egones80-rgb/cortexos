---
name: novo-projeto
description: Cria pasta isolada para um novo cliente ou projeto, com CLAUDE.md próprio que herda o contexto raiz e adiciona regras específicas. Use quando o usuário disser "novo projeto", "novo cliente", "começar projeto pra X", "abrir pasta pra Y".
---

# /novo-projeto

Cria um espaço isolado para um cliente ou projeto, com `CLAUDE.md` próprio que herda tudo do kernel raiz + adiciona contexto específico.

## Workflow

### 1. Pergunte o essencial

- **Nome** do cliente ou projeto (vira o slug da pasta).
- **Tipo:**
  - Cliente externo (vai em `clientes/`)
  - Projeto interno (vai em `projetos/`)
  - Marca/produto (vai em `marcas/` ou `produtos/` — escolha baseada no que faz mais sentido pra estrutura já existente)
- **3 frases** sobre o que é o cliente/projeto e qual é o objetivo com ele.

### 2. Crie a estrutura

```
clientes/<slug>/
├── CLAUDE.md          # contexto específico desse cliente/projeto
├── briefings/         # entradas do cliente (vazio, vai sendo populado)
├── propostas/         # versões de proposta (vazio)
├── entregas/          # o que você produziu pra ele (vazio)
└── notas.md           # log de decisões, combinados, próximos passos
```

### 3. Gere o CLAUDE.md do cliente/projeto

Use este template (adapte conforme o tipo):

```markdown
# <Nome do cliente/projeto>

> Pasta: `clientes/<slug>/`
> Criado em: <YYYY-MM-DD>
> Herda contexto de: `../../CLAUDE.md`

## Sobre
<3 frases do que é>

## Tipo
<Cliente externo / Projeto interno / Marca / Produto>

## Objetivo
<O que define sucesso nesse cliente/projeto>

## Entregas previstas
- <!-- Lista inicial, editável -->

## Onde salvar
- Briefings → `briefings/`
- Propostas → `propostas/`
- Entregas finais → `entregas/`
- Decisões combinadas → `notas.md`

## Contexto herdado
Tudo que está em `_memoria/` + `CLAUDE.md` raiz **vale aqui**. Não duplique — referencie.

## Específico desse projeto
<!-- Regras que só valem pra esse cliente/projeto -->
- <!-- exemplo: "esse cliente não gosta de tom animado; prefere direto" -->
- <!-- exemplo: "sempre manda preview no WhatsApp antes de publicar" -->
```

### 4. Atualize `_memoria/empresa.md`

Adicione uma linha em "Quem paga" ou na lista de projetos ativos:

```
- <Nome do cliente/projeto> (<YYYY-MM-DD>) — <uma frase do objetivo>
```

### 5. Confirme

> "Criei `clientes/<slug>/` com CLAUDE.md próprio e briefing inicial em `briefings/`. Anota em `notas.md` sempre que combinar algo novo com o cliente. Quando precisar trabalhar nesse projeto, é só vir aqui."

## Regras

- **Slug limpo**: lowercase, sem acentos, espaços → hífens.
- **Não duplique contexto** entre raiz e pasta do projeto — referencie.
- **Não crie pastas vazias** além das 5 do template. Outras vão sendo criadas sob demanda.
- **Nunca sobrescreva** um projeto existente — se a pasta já existir, pergunte se quer reabrir/criar versão.
