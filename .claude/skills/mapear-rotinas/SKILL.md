---
name: mapear-rotinas
description: Descobre tarefas repetidas do usuário e propõe criar skills novas (ou instala de catálogo). Use quando o usuário disser "criar skills personalizadas", "automatizar minhas tarefas", "mapear rotinas", "mapear processos", "/mapear".
---

# /mapear-rotinas (ou /mapear)

Autoextensão do CortexOS. Identifica processos repetidos e vira em skills reutilizáveis.

## Workflow

### 1. Coleta sinais

Leia primeiro:
- `_memoria/estrategia.md` — o que o usuário disse que tira das costas (resposta Q8 do `/instalar`)
- `marketing/conteudo/` — se tem muito conteúdo parecido, há pipeline repetível
- `saidas/` — se tem muitos emails / análises / propostas com mesmo formato, há skill
- `clientes/` e `projetos/` — se tem vários clientes com mesmo fluxo, há skill de gestão

Combine com o que o usuário **diz explicitamente**: "toda semana eu faço X", "todo cliente precisa de Y", "perco tempo com Z".

### 2. Mapeie 3-6 rotinas candidatas

Apresente:
> "Achei essas rotinas que viram skill:
>
> 1. **<nome>** — você faz <descrição>. Hoje dá <tempo atual>. Como skill, ia pra <X minutos>.
> 2. **<nome>** — ...
> 3. ...
>
> Quais dessas vale virar skill? Pode escolher 1, 2 ou todas."

Critérios para valer a pena virar skill:
- Repetiu 3+ vezes (ou o usuário confirmou que repete)
- Tem passos claros (não é vago tipo "ajudar o cliente")
- Tem saída determinística (arquivo, planilha, post)

### 3. Para cada rotina escolhida

#### 3a. Verifique se já existe

- Em `.claude/skills/` (skills já instaladas no projeto)
- Em `templates/skills/` (templates prontos pra clonar)
- Em `templates/skills/catalogo.md` (skills externas recomendadas)

Se já existe, ofereça instalar / usar a que tem, não criar nova.

#### 3b. Se for skill de template existente

Copie o template para `.claude/skills/<nome>/SKILL.md` e ajuste:
- Nome e descrição (description = gatilhos)
- Caminhos de saída (ajuste pro padrão do negócio)
- Dependências (leia da `_memoria/` correspondente)

#### 3c. Se for skill nova

Pergunte as 5 perguntas da skill:

1. **Qual é o gatilho?** (frase que o usuário vai usar pra acionar)
2. **Quais são as entradas?** (arquivo, texto, link, briefing do usuário)
3. **Quais são os passos?** (3-7 fases, com checkpoints onde precisa de aprovação)
4. **Qual é a saída?** (arquivo + caminho exato onde vai ser salvo)
5. **Quais são as restrições?** (o que a skill nunca pode fazer)

Grave o `SKILL.md` em `.claude/skills/<nome>/SKILL.md` com este formato:

```markdown
---
name: <nome>
description: <gatilhos>
---

# /<nome>

## Dependências
- <!-- arquivos de contexto que consome -->

## Workflow
### Fase 1 — <nome>
1. <!-- passo -->
2. <!-- passo -->

CHECKPOINT: <o que precisa de aprovação antes de seguir>

### Fase 2 — <nome>
...

## Saída
- Caminho: `<caminho determinístico>`
- Formato: <.md | .html | .png>

## Regras
- <o que faz>
- <o que nunca faz>
```

### 4. Atualize `_memoria/empresa.md`

Adicione em "Equipe" ou seção nova "Ferramentas/Processos" a lista das skills instaladas pelo `/mapear-rotinas`.

### 5. Confirme e ofereça testar

> "Criei <N> skills. Quer testar uma agora? É só chamar pelo nome (ex: `/<nome>`)."

## Regras

- **Skill nova deve ser simples** — não invente 15 passos na primeira versão. Comece com 3-5.
- **Não duplique skill que já existe.** Cheque os 3 lugares (instaladas, templates, catálogo) antes de criar.
- **Skills locais vão em `.claude/skills/`.** Skills globais (úteis em qualquer projeto) vão em `~/.claude/skills/`. Pergunte antes se for global.
- **Não crie skill para tarefa única** — `/mapear-rotinas` é pra repetição.
