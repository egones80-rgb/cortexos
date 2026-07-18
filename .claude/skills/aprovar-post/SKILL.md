---
name: aprovar-post
description: Aprova e publica um post da fila — flipa o blog de draft pra published, copia os PNGs do carrossel pro public folder do site, faz commit e push, e posta o carrossel no Instagram + Facebook. Use quando o usuário disser "aprovar post X", "publicar o post do tema Y", "/aprovar-post X".
---

# /aprovar-post

Pipeline de aprovação: blog sai de draft → carrossel vai pro site → post vai pro Instagram + Facebook.

> **PRÉ-REQUISITO IMPORTANTE:** Esta skill exige que você já tenha um **site/blog próprio** configurado com pasta `public/posts/` (ou similar) e deploy automático em Netlify/Vercel/Cloudflare Pages. **Se você não tem site**, pule as fases de publicação no site e use apenas a publicação nas redes sociais (Instagram/Facebook).
>
> Para criar um site novo, use `/publicar-site` (Cloudflare Pages) primeiro.

## Dependências

**Obrigatórias:**
- Post gerado em `marketing/conteudo/carrossel-<slug>-<YYYY-MM-DD>/` (com PNGs)
- API keys para Instagram/Facebook (Post for Me ou Meta Graph API)

**Opcionais (apenas se for publicar em site próprio):**
- Site/blog configurado (Netlify/Vercel/Cloudflare Pages) com pasta `public/posts/`

**API keys (escolha um conjunto):**
- Post for Me: `POSTFORME_API_KEY`
- Graph API: `INSTAGRAM_ACCESS_TOKEN`, `INSTAGRAM_USER_ID`, `IMGBB_API_KEY`, `FACEBOOK_PAGE_ID`, `FACEBOOK_ACCESS_TOKEN`

## Workflow

### 1. Identifique o post

Pergunte ou detecte pelo nome do diretório:
> "Qual post quer aprovar? (slug ou diretório)"

Se houver posts em `marketing/conteudo/`, liste os que ainda não foram publicados (campo `status: draft` no frontmatter do blog).

### 2. Validação

Antes de publicar, confirme:

- [ ] Blog markdown está revisado e tem frontmatter válido
- [ ] PNGs do carrossel estão prontos
- [ ] Legenda está aprovada
- [ ] API keys estão em `.env`

**Se for publicar também em site próprio:**
- [ ] Site está deployado e funcionando
- [ ] Pasta `public/posts/` existe no repositório do site

CHECKPOINT: "Tudo certo pra publicar? Você quer publicar **só nas redes** ou **redes + site**?"

### 3. Publicação no site (OPCIONAL — só se você tem site)

> Se você não tem site próprio, **pule esta fase** e vá direto pra fase 5 (redes sociais).

1. Copie o blog markdown pra `public/posts/<slug>.md` (ou `<slug>.html` se o site renderiza direto)
2. Copie os PNGs do carrossel pra `public/posts/<slug>/`
3. Atualize o frontmatter: `status: published`, adicione `published_at: <YYYY-MM-DD>`
4. Commit + push:
```bash
git add public/posts/<slug>*
git commit -m "publish: <slug>"
git push
```

### 4. Aguardar deploy

Se o site está em Netlify/Vercel/Cloudflare:
> "Esperando deploy... (uns 30-60 segundos)"

Use `WebFetch` ou polling na URL do site pra confirmar que a página subiu.

### 5. Publicação nas redes

#### Instagram (carrossel)

Use o script `publish-postforme.js` ou `publish-graph-api.js` (em `.claude/skills/publicar-instagram/scripts/`):

```bash
# Opção A — Post for Me (mais simples)
node .claude/skills/publicar-instagram/scripts/publish-postforme.js \
  --platform instagram \
  --images "public/posts/<slug>/slide-1.png,public/posts/<slug>/slide-2.png,..." \
  --caption-file "marketing/conteudo/carrossel-<slug>-<YYYY-MM-DD>/legenda.md"

# Opção B — Meta Graph API direto (mais controle)
node .claude/skills/publicar-instagram/scripts/publish-graph-api.js \
  --platform instagram \
  --images "public/posts/<slug>/slide-1.png,public/posts/<slug>/slide-2.png,..." \
  --caption-file "marketing/conteudo/carrossel-<slug>-<YYYY-MM-DD>/legenda.md"
```

#### Facebook (post com imagens)

```bash
node .claude/skills/publicar-instagram/scripts/publish-graph-api.js \
  --platform facebook \
  --images "public/posts/<slug>/slide-1.png,..." \
  --caption-file "marketing/conteudo/carrossel-<slug>-<YYYY-MM-DD>/legenda.md"
```

**Recomendação:** Use Post for Me se a chave existir (`POSTFORME_API_KEY`). Senão, Graph API direto.

Se `--dry-run` estiver habilitado, faça dry-run primeiro e peça confirmação explícita antes de publicar.

### 6. Atualize a memória

- Adicione entrada em `marketing/conteudo/publicados.md`:
  ```markdown
  ## <YYYY-MM-DD>
  - <slug> — Instagram + Facebook + site
  ```

### 7. Confirme

> "Publicado!
> - Site: <URL do post>
> - Instagram: <URL do post>
> - Facebook: <URL do post>
>
> Quer agendar o próximo?"

## Saída

- Blog em `public/posts/<slug>.md` (publicado)
- PNGs em `public/posts/<slug>/`
- Post no Instagram e Facebook
- Entrada em `marketing/conteudo/publicados.md`

## Regras

- **NUNCA publicar sem confirmação explícita** do usuário. Mesmo que ele tenha dito "aprovar", mostre o que vai ser postado antes.
- **Sempre mostre a legenda** que vai ser publicada.
- **Use `--dry-run` por padrão** — publique só depois de confirmar.
- **Erro de API key**: mostre o erro, pare, e oriente reconfigurar em `.env`.
- **Se deploy do site falhar**, publique nas redes mesmo assim? Padrão: NÃO. Espere o site subir.