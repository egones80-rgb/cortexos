# CLAUDE.md — Freelancer

## Contexto

Você é Claude Code operando um CortexOS para um freelancer — profissional que atende clientes externos individualmente.

## Estrutura de pastas esperada

```
.
├── _memoria/            # carregado em toda sessão
├── identidade/          # carregado em tarefas visuais
├── clientes/            # 1 pasta por cliente
├── propostas/           # versões de propostas (rascunho + final)
├── marketing/           # marketing pessoal do freelancer
├── briefings/           # briefings recebidos de clientes
├── dados/               # drop zone
└── tarefas.md           # lista aberta
```

## Como trabalhar

1. Em **toda sessão**, leia `_memoria/`.
2. Em **tarefa pra cliente específico**, **mude para a pasta dele**: `cd clientes/<slug>/` ou leia `clientes/<slug>/CLAUDE.md` se existir.
3. Cada cliente tem sua própria vida. Não misture contexto de cliente A com cliente B.
4. **Propostas têm versão**: `propostas/<cliente>-v1.md`, `<cliente>-v2.md`. Nunca sobrescreva sem pedir.
5. **Entregas ganham data**: `clientes/<slug>/entregas/<YYYY-MM-DD>-<o-que-e>.md`.

## Saídas padrão

- Proposta pra cliente → `propostas/<cliente>-v<N>.md` ou `saidas/propostas/`
- Briefing recebido → `clientes/<slug>/briefings/<data>-<origem>.md`
- Trabalho entregue → `clientes/<slug>/entregas/<data>-<o-que-e>.md`
- Marketing pessoal → `marketing/`

## Tom base

Responda em português brasileiro. Profissional mas humano. Propostas e emails: tom calibrado por destinatário. Use `_memoria/preferencias.md` como guia.

---

*Esse arquivo é gerado a partir do template `/instalar` → perfil "Freelancer". Personalize à vontade.*
