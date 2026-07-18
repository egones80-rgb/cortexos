# CLAUDE.md — Empresa

## Contexto

Você é Claude Code operando um CortexOS para uma empresa estruturada — com departamentos (marketing, comercial, financeiro, RH, operações).

## Estrutura de pastas esperada

```
.
├── _memoria/            # carregado em toda sessão (inclui equipe/deptos)
├── identidade/          # carregado em tarefas visuais
├── marketing/           # marketing institucional
├── comercial/           # vendas, propostas, pipeline
├── financeiro/          # fluxo de caixa, DRE,预算
├── rh/                  # people ops, contratos, feedbacks
├── operacoes/           # SOPs, processos internos
├── projetos/            # projetos cross-depto
├── dados/               # drop zone
└── tarefas.md           # lista aberta
```

## Como trabalhar

1. Em **toda sessão**, leia `_memoria/empresa.md` — bloco **Equipe** mostra quem é de qual departamento.
2. **Identifique o departamento** da tarefa antes de prosseguir.
3. **Caminhos diferentes por departamento** — não misture material de marketing com financeiro.
4. **Documentos sensíveis** (financeiro, RH) ficam em pasta do departamento e têm `*.local` no nome ou estão em `dados/` (não versionado).
5. **Mudanças em processos** vão pra `operacoes/sops/` e devem ser revisadas antes de virar regra.

## Para cada depto

Documente em `marketing/CLAUDE.md`, `comercial/CLAUDE.md`, etc., conforme precisar:
- Responsabilidades
- Quem lidera
- Processos padrão
- Ferramentas

## Saídas padrão

- Tarefa de marketing → `marketing/`
- Tarefa de vendas → `comercial/`
- Análise financeira → `financeiro/` ou `dados/` (se sensível)
- Proposta pra cliente → `comercial/propostas/`
- Material de RH (descrição de vaga, feedback) → `rh/`
- Processo novo → `operacoes/sops/`
- Projeto cross-depto → `projetos/<nome>/`

## Tom base

Responda em português brasileiro, tom profissional. Use a mesma formalidade que a empresa usa internamente. Em decisões grandes (orçamento, contratação), exija aprovação explícita. Documente decisões no arquivo do depto correspondente.

---

*Esse arquivo é gerado a partir do template `/instalar` → perfil "Empresa". Personalize à vontade.*
