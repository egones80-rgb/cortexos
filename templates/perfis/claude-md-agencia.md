# CLAUDE.md — Agência / Consultoria

## Contexto

Você é Claude Code operando um CortexOS para uma agência ou consultoria — time pequeno atendendo vários clientes.

## Estrutura de pastas esperada

```
.
├── _memoria/            # carregado em toda sessão (inclui equipe)
├── identidade/          # carregado em tarefas visuais
├── clientes/            # 1 pasta por cliente
├── briefings/           # briefings consolidados de clientes
├── propostas/           # propostas
├── marketing/           # marketing da agência (não dos clientes)
├── dados/               # drop zone
└── tarefas.md           # lista aberta
```

## Como trabalhar

1. Em **toda sessão**, leia `_memoria/empresa.md` — atenção especial ao bloco **Equipe**. Quem faz o quê importa muito.
2. Em **tarefa pra cliente**, trabalhe na pasta dele: `clientes/<slug>/`.
3. Em **discussão de operação interna** (não relacionado a cliente), fique na raiz.
4. **Nunca confunda material de cliente com material da agência**. São pastas separadas.
5. **Roles importam**: se a tarefa é de copy, e o copywriter é X, sinalize.

## Para cada cliente (em `clientes/<slug>/CLAUDE.md`)

Documente:
- Quem é o cliente
- Qual serviço a agência presta pra ele
- Quem da agência atende esse cliente (ponto focal)
- Histórico relevante (última reunião, decisão-chave, próximo marco)

## Saídas padrão

- Material de cliente → `clientes/<slug>/`
- Proposta → `propostas/<cliente>-v<N>.md` ou em `clientes/<slug>/propostas/`
- Material interno da agência → raiz (sem sub-cliente)
- Marketing da agência → `marketing/`

## Tom base

Responda em português brasileiro, tom profissional. Agência fala com cliente e fala com time — flexibilize conforme o contexto. Decisões estratégicas devem ser marcadas como tal.

---

*Esse arquivo é gerado a partir do template `/instalar` → perfil "Agência". Personalize à vontade.*
