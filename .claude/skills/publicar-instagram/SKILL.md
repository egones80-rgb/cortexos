---
name: publicar-instagram
description: Publica carrossel/post no Instagram e Facebook via Meta Graph API ou Post for Me. Use quando o usuário disser "publicar no instagram", "postar no instagram", "publicar carrossel", "subir no instagram".
---

# /publicar-instagram

Publica conteúdo visual no Instagram e Facebook.

## Dependências

- PNGs do carrossel/post
- Legenda em markdown
- `.env` com uma das opções:
  - **Opção A — Post for Me:** `POSTFORME_API_KEY`
  - **Opção B — Meta Graph API direto:** `INSTAGRAM_ACCESS_TOKEN`, `INSTAGRAM_USER_ID`, `IMGBB_API_KEY`, `FACEBOOK_PAGE_ID`, `FACEBOOK_ACCESS_TOKEN`

## Workflow

### 1. Identifique o conteúdo

Pergunte ou detecte:
- Diretório em `marketing/conteudo/carrossel-<slug>-<YYYY-MM-DD>/`
- Diretório em `saidas/slides/`

### 2. Escolha do método

Pergunte (ou detecte pelo `.env`):
- **Post for Me** (mais fácil, suporta IG + TikTok + LinkedIn + X) — precisa só `POSTFORME_API_KEY`
- **Meta Graph API direto** (mais controle, sem custo de intermediário) — precisa de várias chaves

Padrão: Post for Me se a chave existir; senão Graph API.

### 3. Preparação

Para Meta Graph API:
- Faça upload de cada PNG pra imgbb (pega URL pública)
- Anote as URLs públicas

Para Post for Me:
- Faça upload das imagens direto (Post for Me aceita upload)

### 4. Dry-run

Mostre ao usuário:
- Lista de imagens que vão ser postadas
- Legenda completa que vai ser publicada
- Plataforma (Instagram, Facebook, ambos?)

CHECKPOINT: "Vai postar assim. Confirma?"

### 5. Publicação

#### Via Post for Me

```bash
node scripts/publish-postforme.js \
  --platform instagram \
  --images "slide-1.png,slide-2.png,slide-3.png" \
  --caption-file "legenda.md" \
  --account-id "$INSTAGRAM_ACCOUNT_ID"
```

#### Via Meta Graph API

```bash
node scripts/publish-graph-api.js \
  --images "slide-1.png,slide-2.png,slide-3.png" \
  --caption-file "legenda.md" \
  --platform instagram
```

### 6. Confirmação

O script devolve a URL do post publicado. Salve em `marketing/conteudo/<slug>/publicacao-<YYYY-MM-DD>.log`:

```markdown
# Publicação — <YYYY-MM-DD>

**Plataforma:** Instagram + Facebook
**URL:** <URL do post>
**Curtidas/Comentários (24h depois):** <!-- atualizar -->
```

### 7. Próximos passos

> "Publicado!
> - Instagram: <URL>
> - Facebook: <URL>
>
> Quer que eu agende o próximo post, ou já era?"

## Saída

- Post publicado em Instagram e/ou Facebook
- Log consolidado em `marketing/conteudo/publicados.md` (mesmo arquivo usado por `/aprovar-post`)

## Regras

- **NUNCA publicar sem confirmação** explícita do usuário.
- **Sempre faça dry-run** primeiro, se a flag `--dry-run` estiver habilitada.
- **TikTok**: se destino for TikTok, configure `is_draft: true` — usuário precisa escolher música no app.
- **Erro de API**: pare, mostre, oriente reconfigurar `.env`.
- **Limite de caracteres Instagram**: legenda até 2.200 caracteres. Se passar, corte com aviso.