---
name: design-tweet
description: Estilo de design que simula print de tweet/X — ideal pra carrossel que vai viralizar com formato de tweet controverso. Use quando o tema for polêmica ou citação famosa.
---

# Design: Tweet (Twitter/X screenshot)

Estilo que simula um tweet real. Visual familiar gera mais compartilhamento.

## Características

- Background branco (#FFFFFF)
- Avatar circular (80-90px)
- Nome em bold, @handle em cinza
- Texto do tweet com cor #0F1419
- Hashtags, mentions e links em #1D9BF0 (azul Twitter)
- Badge verificado (azul) opcional pra autoridade
- Timestamp em cinza #536471

## Estrutura HTML (componentes)

```html
<div class="tweet-card">
  <!-- Header -->
  <div class="tweet-header">
    <img class="avatar" src="identidade/logo.png" /> <!-- use sua foto/logo -->
    <div class="author">
      <div class="name">Nome <span class="verified">✓</span></div>
      <div class="handle">@handle</div>
    </div>
    <div class="x-logo">𝕏</div>
  </div>

  <!-- Body -->
  <div class="tweet-body">
    Texto do tweet aqui.
    <br>Múltiplas linhas permitidas.
    <br>
    <br>Última linha pode ter hashtag <span class="link">#topico</span>
  </div>

  <!-- Timestamp + métricas -->
  <div class="tweet-footer">
    10:42 · 17 de jul. de 2026
  </div>
</div>
```

## Cores

| Elemento | Cor |
|---|---|
| Background | #FFFFFF |
| Texto principal | #0F1419 |
| Texto secundário | #536471 |
| Links/hashtags | #1D9BF0 |
| Borda sutil | #EFF3F4 |

## Tipografia

- **Nome:** TwitterChirp Bold (ou fallback Inter Bold), 15-16px
- **Handle:** TwitterChirp Regular (ou Inter Regular), 14-15px, cor #536471
- **Tweet body:** TwitterChirp Regular (ou Inter Regular), 18-20px, line-height 1.4
- **Timestamp:** TwitterChirp Regular, 13-15px, cor #536471

Se não tiver a fonte do Twitter, use Inter — é a mais próxima em open-source.

## Layouts

### Layout 1: Tweet único (1 slide)
Tweet sozinho, centralizado. Caso clássico pra viralizar.

### Layout 2: Thread (3-7 slides)
Cada slide = 1 tweet da thread. Cada um começa com indicador "1/", "2/", etc. no canto.

### Layout 3: Tweet + reply
Tweet original + reply simulada abaixo. Útil pra ponto/contra-ponto.

## Badge verificado

Arquivo SVG em `.claude/skills/carrossel/references/badge-verificado.svg`:

```svg
<svg viewBox="0 0 22 22" width="22" height="22">
  <path fill="#1D9BF0" d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.087-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.154.636-.142 1.243-.49 1.69-.962.447-.472.745-1.093.88-1.732.13-.654.071-1.317-.162-1.942.573-.284 1.061-.722 1.412-1.265.351-.543.546-1.164.564-1.801zM9.662 14.85l-3.429-3.428 1.407-1.407 2.022 2.022 4.04-4.04 1.408 1.407-5.448 5.446z" />
</svg>
```

## Regras

- **Avatar consistente** em todos os slides (mesma imagem, mesmo tamanho).
- **Handle consistente** — não mude entre slides.
- **Numeração de thread visível** ("1/", "2/") no canto se for thread.
- **Texto do tweet: 1 ideia**, não comprima parágrafos.
- **Máximo 280 caracteres** por slide se quiser fidelidade ao Twitter real.
- **Sem reply chain muito longa** — limite a 1 reply.
- **Use com responsabilidade** — não crie tweet fake de pessoa real sem contexto.
