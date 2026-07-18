---
name: slide
description: Gera slide único (1080×1080), slide de deck (1920×1080) ou story (1080×1920) com HTML + PNG. Use quando o usuário disser "slide", "fazer um card", "imagem pra apresentação", "story".
---

# /slide

Gera um slide (imagem) avulso. Diferente de `/carrossel` que é sequência.

## Dependências

- `identidade/design-guide.md`
- `_memoria/preferencias.md`
- Playwright instalado

## Workflow

### 1. Briefing

Pergunte:
1. **Conteúdo** (uma frase: "10% dos meus clientes representam 60% do faturamento")
2. **Tipo:**
   - **Card** (1080×1080) — Instagram quadrado, post avulso, quote
   - **Slide de deck** (1920×1080) — apresentação, aula
   - **Story** (1080×1920) — Instagram/TikTok vertical
3. **Layout:**
   - **Dado/estatística** — número grande + frase de contexto
   - **Texto/insight** — frase provocadora + assinatura
   - **Diagrama/fluxo** — setas/blocos representando processo
   - **Visual/imagem** — foto + legenda curta

### 2. Geração

Crie o HTML standalone em `saidas/slides/slide-<slug>-<YYYY-MM-DD>.html`:

- Dimensões conforme o tipo
- Cores e fonte de `design-guide.md`
- Logo discreto
- Tipografia com hierarquia clara

### 3. Render

```bash
npx playwright screenshot saidas/slides/slide-<slug>-<YYYY-MM-DD>.html \
  saidas/slides/slide-<slug>-<YYYY-MM-DD>.png \
  --viewport-size=1080,1080  # ou 1920,1080 ou 1080,1920
```

### 4. Aprovação

CHECKPOINT: "Renderiza em PNG e mostra. Aprova ou pede ajuste?"

## Saída

- `saidas/slides/slide-<slug>-<YYYY-MM-DD>.html`
- `saidas/slides/slide-<slug>-<YYYY-MM-DD>.png`

## Regras

- **Um slide por vez.** Pra sequência, use `/carrossel`.
- **Tipografia grande** — legível a 1m de distância no celular.
- **Sem poluição visual.** Espaço em branco é seu amigo.
- **Cor de fundo**: alternar entre claro e escuro pra dar ritmo se for pra feed.
