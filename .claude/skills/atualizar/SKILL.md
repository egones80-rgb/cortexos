---
name: atualizar
description: Reconcilia a memória persistente (_memoria/, identidade/, CLAUDE.md) com a realidade do workspace. Detecta o que mudou e propõe edições cirúrgicas. Use quando o usuário disser "atualizar", "atualiza o contexto", "sincroniza a memória", "varre o projeto".
---

# /atualizar

Reconciliador de memória. Detecta mudanças no workspace que ainda não estão refletidas na memória persistente, e propõe edições pontuais.

## Workflow

### 1. Inventário

Liste o que existe no workspace que **não** está na memória:

- Pastas em `clientes/` ou `projetos/` → clientes/projetos ativos não documentados
- Pastas em `marketing/conteudo/` com mais de 5 itens → temas ativos
- Skills em `.claude/skills/` (não-nativas) → processos personalizados que devem estar em `_memoria/empresa.md` (equipe/ferramentas) ou ser auto-reconhecidos
- Mudanças em `identidade/` (logo novo, cores novas) que `design-guide.md` não reflete

### 2. Diff de memória

Para cada arquivo em `_memoria/` e `identidade/`:

- Campo vazio mas agora tem dado concreto no workspace → preencher
- Dado na memória contradiz realidade → flag
- Dado na memória não tem contraparte no workspace e parece obsoleto → perguntar

Exemplo: se `empresa.md` diz "toque sozinho" mas tem `clientes/cliente-x/` com 3 arquivos de proposta, há um novo cliente que deveria estar em `empresa.md`.

### 3. Proposta de mudanças

Liste as mudanças propostas, uma por linha:

```
1. _memoria/empresa.md → adicionar "cliente X (proposta enviada 2026-07-10)"
2. identidade/design-guide.md → atualizar cor primária pra #FF6B35 (logo novo diz isso)
3. _memoria/estrategia.md → mover "responder avaliações GMB" de prioridade pra pode-esperar (não foi tocado em 30 dias)
```

### 4. Aprovação

> "Achei 3 coisas pra atualizar. Aplico todas, ou você quer revisar uma por uma?"

Três modos:

- **"Aplica tudo"** → edite cada arquivo, mostre o diff resumido.
- **"Revisar uma por uma"** → mostra a mudança proposta, espera OK/recusa antes da próxima.
- **"Cancela"** → não mexe em nada.

### 5. Aplica e confirma

Edite cirurgicamente (não reescreva o arquivo todo). Mostre o diff. Confirme:
> "Atualizado. Quer commitar agora? (pode rodar `/salvar`)"

## Regras

- **Nunca edite sem mostrar antes.**
- **Nunca invente dados.** Se a memória não tem algo, ofereça **perguntar** ao usuário, não deduza.
- **Não toque em `CLAUDE.md`** sem perguntar explicitamente — esse arquivo é o kernel.
- Mudanças em `marketing/` ou `saidas/` (artefatos) **não** são mudanças de memória. Não toque na `_memoria/`.
- Se nada mudou: "Memória tá sincronizada. Nada pra atualizar."
