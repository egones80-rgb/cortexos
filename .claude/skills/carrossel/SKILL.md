---
name: carrossel
description: Gera carrossel para Instagram/TikTok (1080×1350) ou stories (1080×1920) com texto + visual coerente com a marca. Use quando o usuário disser "carrossel", "post", "gerar foto", "fazer carrossel pra Instagram", "criar post visual".
---

# /carrossel

Gera carrossel com texto → HTML → PNG (via Playwright) → legenda.

## Dependências

- `identidade/design-guide.md` (cores, fonte, logo)
- `_memoria/preferencias.md` (tom de voz)
- `_memoria/empresa.md` (pra quem se fala)
- Playwright CLI instalado (`npx playwright --version`)

## Pré-checagem (5 itens)

Antes de começar, confirme:

1. `identidade/design-guide.md` está preenchido? Se não: "Preciso da identidade visual primeiro. Roda `/instalar` ou me passa as cores e fonte agora."
2. Estilo de design escolhido (pergunte ao usuário):
   - **Minimalista** — fundo limpo, tipografia forte, sem ornamentação
   - **Elaborado** — gradientes, ruído, hierarquia complexa
   - **Tweet** — simula print de Twitter/X
3. Tom de voz em `preferencias.md` está preenchido?
4. Contexto do negócio em `empresa.md` está preenchido?
5. Playwright instalado? (`npx playwright install chromium` se não)

## Workflow

### Fase 1 — Briefing

Pergunte:
1. **Tema** do carrossel (uma frase)
2. **Público** (específico: "mãe de primeira viagem", "dono de agência pequena", etc.)
3. **Quantos slides** (recomendado: 6-10)
4. **CTA final** (o que você quer que façam depois)

### Fase 2 — Narrativa

Estrutura recomendada:
- Slide 1: **Capa/gancho** (promessa ou pergunta provocadora)
- Slides 2-N: **Conteúdo** (1 ideia por slide)
- Penúltimo: **Quebra de objeção ou reforço**
- Último: **CTA**

Mostre a estrutura em markdown e peça aprovação antes de gerar visual.

CHECKPOINT: "Posso seguir com essa narrativa?"

### Fase 3 — Texto de cada slide

Para cada slide, gere:
- **Título** (max 8 palavras, pode ser 2 linhas)
- **Corpo** (max 30 palavras)
- **Nota de design** (fundo claro/escuro, ícone sugerido, destaque)

Mostre tudo em markdown, peça aprovação slide a slide ou em bloco.

CHECKPOINT: "Aprova os textos?"

### Fase 4 — Geração visual

Para cada slide aprovado, gere um HTML standalone:
- Dimensões: 1080×1350 (Instagram) ou 1080×1920 (stories)
- Use as cores e fonte de `design-guide.md`
- Logo discreto no rodapé
- Cada HTML vai em `marketing/conteudo/carrossel-<slug>-<YYYY-MM-DD>/slide-N.html`

Depois de gerar todos, use Playwright pra renderizar PNG:

```bash
cd marketing/conteudo/carrossel-<slug>-<YYYY-MM-DD>/
for f in slide-*.html; do
  npx playwright screenshot "$f" "${f%.html}.png" --viewport-size=1080,1350
done
```

CHECKPOINT: "Renderizei os PNGs. Quer ver antes de eu seguir?"

### Fase 5 — Legenda

Gere uma legenda completa pro Instagram:
- Gancho (primeira linha — aparece antes do "ver mais")
- Desenvolvimento
- CTA
- Hashtags (5-10, relevantes, sem #love #instagood)

Salve em `marketing/conteudo/carrossel-<slug>-<YYYY-MM-DD>/legenda.md`.

### Fase 6 — Opcional — Adaptação TikTok

Se o destino for TikTok (1080×1920), gere versão com safe zone de 230px na parte inferior (evita sobreposição com botões de UI).

Salve em `marketing/conteudo/carrossel-<slug>-<YYYY-MM-DD>/tiktok/`.

## Saída

- `marketing/conteudo/carrossel-<slug>-<YYYY-MM-DD>/slide-*.html`
- `marketing/conteudo/carrossel-<slug>-<YYYY-MM-DD>/slide-*.png`
- `marketing/conteudo/carrossel-<slug>-<YYYY-MM-DD>/legenda.md`
- `marketing/conteudo/carrossel-<slug>-<YYYY-MM-DD>/tiktok/` (se aplicável)

## Regras

- **Sempre peça aprovação** em cada fase. Nunca renderize tudo sem aprovação textual.
- **Cores e fontes vêm de `design-guide.md`**. Se não tiver, pare e peça.
- **Não use jargão** ("alavancar", "sinergia", "vamos juntos", "continue no próximo"). Respeite `preferencias.md`.
- **Não use estrutura binária X/Y** ("Instagram diminui, atenção acelera"). É clichê.
- **Frase de travessão** ("—") só se o usuário usa no original. Senão, evite.
- **Hashtags com critério.** Não encha de 30 hashtags genéricas.
- Se for a primeira carrossel do projeto, **guarde `design-carrossel-<estilo>.md`** como referência em `.claude/skills/carrossel/references/` pra próxima vez.
