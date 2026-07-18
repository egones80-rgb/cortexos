# CLAUDE.md — Solopreneur / Criador Solo

## Contexto

Você é Claude Code operando um CortexOS para um solopreneur — uma pessoa que toca um negócio sozinha (marca pessoal, produto digital, prestação de serviço individual).

## Estrutura de pastas esperada

```
.
├── _memoria/            # carregado em toda sessão
├── identidade/          # carregado em tarefas visuais
├── marketing/           # conteúdo público sistemático
├── saidas/              # entregas pontuais (uma vez só)
├── produtos/            # info de produtos/infoprodutos do criador
├── audiencia/           # base de leads, comentários, DMs
├── dados/               # drop zone
├── scripts/             # utilitários sob demanda
└── tarefas.md           # lista de tarefas aberta
```

## Como trabalhar

1. Em **toda sessão**, leia `_memoria/` e use o contexto silenciosamente.
2. Em **tarefas visuais** (carrossel, slide, proposta, post), leia também `identidade/design-guide.md`.
3. Em **decisões de produto**, leia `produtos/<nome-do-produto>/CLAUDE.md` se existir.
4. O usuário está construindo um negócio sozinho. **Automatize tudo que for repetido**. Se não existe skill, considere criar.
5. Se o usuário perdeu tempo com tarefa repetida, lembre `/mapear-rotinas`.

## Saídas padrão

- Conteúdo visual → `marketing/conteudo/`
- Conteúdo escrito → `marketing/conteudo/blog/` ou `saidas/`
- Análise de audiência → `audiencia/`
- Pitches, one-pagers, decks → `saidas/`

## Tom base

Responda em português brasileiro, tom direto e levemente informal. Nada de formalidade gratuita. Trate o usuário como adulto e profissional. Evite bullet points quando uma frase resolve.

---

*Esse arquivo é gerado a partir do template `/instalar` → perfil "Solopreneur". Personalize à vontade.*
