---
name: publicar-site
description: Sobe arquivo HTML estático pro Cloudflare Pages e devolve URL pública. Use quando o usuário disser "publicar html", "subir site", "cloudflare", "gerar url pública", "deploy".
---

# /publicar-site

Publica HTML estático no Cloudflare Pages.

## Dependências

- Arquivo HTML a ser publicado (caminho local)
- `.env` com:
  - `CLOUDFLARE_API_TOKEN`
  - `CLOUDFLARE_ACCOUNT_ID`
  - `CLOUDFLARE_PROJECT_NAME`

## Workflow

### 1. Identifique o arquivo

Pergunte o caminho do HTML ou detecte:
- `saidas/propostas/*.html`
- `saidas/slides/*.html`
- `saidas/outros/*.html`

### 2. Validação

Antes de subir, confirme:

- HTML é standalone (não tem caminhos relativos quebrados)
- Imagens referenciadas estão acessíveis (inline base64 ou URLs públicas)
- Fontes do Google Fonts (se usar) vão funcionar online

### 3. Upload

Use a API do Cloudflare Pages Direct Upload:

```bash
curl -X POST "https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/pages/projects/$CLOUDFLARE_PROJECT_NAME/deployments" \
  -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  -F "files=@<caminho-do-html>"
```

OU use o script local `scripts/sync-cloudflare.js` que encapsula isso.

### 4. Aguardar

O deploy leva 30-90 segundos. Polling:

```bash
# Aguardar status: success
while [ "$(curl -s -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  "https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/pages/projects/$CLOUDFLARE_PROJECT_NAME/deployments/<deployment-id>")" \
  | jq -r '.result[0].latest_stage.status')" != "success" ]; do
  sleep 5
done
```

### 5. Devolva a URL

A URL segue o padrão:
```
https://<project>.pages.dev/<arquivo>
```

Exemplo:
```
https://cortexos.pages.dev/proposta-cliente-x-2026-07-17.html
```

### 6. Confirme

> "Publicado: <URL>
>
> Compartilhe à vontade. O link fica no ar até você remover."

## Saída

URL pública + log do deploy em `saidas/publicados/<YYYY-MM-DD>.log` (opcional).

## Regras

- **Confirme que o HTML está pronto** antes de subir.
- **Não suba HTML quebrado** (teste local primeiro se possível).
- **Erro de API key**: mostre, pare, oriente reconfigurar `.env`.
- **Não suba arquivos pesados** (>10MB) sem avisar.
- **Se o arquivo for reutilizável**, considere criar página dedicada em vez de subir arquivo avulso.