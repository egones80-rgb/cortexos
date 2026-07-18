---
name: salvar
description: Faz commit e push do trabalho pro GitHub. Auto-configura o remote na primeira vez. Use quando o usuário disser "salvar", "commit", "push", "subir pro github", "synca", "fazer backup".
---

# /salvar (ou /syncar)

Backup do trabalho no GitHub. Versiona o que mudou, sobe pro remote.

## Pré-checagem

1. Verifique se é um repositório git: `git rev-parse --is-inside-work-tree`.
2. Se não for: `git init` (com confirmação do usuário).
3. Verifique se tem remote: `git remote -v`.
4. Se não tem: pergunte a URL do repositório (ou oriente a criar em `github.com/new`).

## Workflow

### Caso 1 — Primeira vez (sem remote)

> "Não tem remote configurado ainda. Crie um repositório vazio em github.com/new (sem README, sem .gitignore, sem licença) e cola a URL aqui."

Depois:

```bash
git remote add origin <url>
git branch -M main
git push -u origin main
```

Confirme: "Subiu. Próximas vezes é só `git push`."

### Caso 2 — Já tem remote, sem mudanças

> "Nada pra subir. Tá tudo commitado."

### Caso 3 — Tem mudanças

```bash
git add -A
git status   # mostra o que vai entrar
git diff --cached --stat   # resumo numérico
```

Mostre ao usuário:
> "Vai entrar no commit:
> - <arquivo 1> (+<N>, -<N>)
> - <arquivo 2> (+<N>, -<N>)
> - ...
>
> Mensagem do commit: `<sugestão>`"

Sugestão de mensagem:
- Se a mudança for de skill nova: `"feat: adiciona skill <nome>"`
- Se for conteúdo: `"content: <descrição curta>"`
- Se for memória atualizada: `"chore: atualiza memória"`
- Se for mista: `"chore: salva trabalho de <data>"`

**Espere confirmação** (a menos que o usuário tenha dito "só salva sem perguntar").

Depois:
```bash
git commit -m "<mensagem>"
git push
```

### Caso 4 — Push falha

Erros comuns:
- **Sem permissão** → usuário precisa configurar chave SSH ou PAT
- **Repositório não existe** → oriente criar
- **Conflito** → mostre o conflito, ofereça `git pull --rebase` ou abort

Nunca force-push sem pedir explicitamente.

## Regras

- **Nunca commite `.env`, `dados/*.csv`, dados sensíveis.** Respeite o `.gitignore`.
- **Nunca force-push** sem confirmação explícita.
- **Sempre mostre o que vai entrar** antes do commit.
- Se o usuário disser "só salva", pode pular confirmação de mensagem — use mensagem genérica `"chore: salva trabalho"`.
- Se o usuário disser "salva tudo que tem", faça sem perguntar (mas mostre o diff depois).
