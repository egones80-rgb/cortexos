# Catálogo de Ferramentas (CLIs, APIs, MCPs)

> Referência de tudo que o CortexOS sabe usar. Configurar sob demanda — não instale tudo de uma vez.

---

## Visual

### Playwright (HTML → PNG / scraping)
- **Pra que:** renderizar HTML em PNG (carrossel, slide, proposta), automatizar browser
- **Instalar:** `npm install -D playwright && npx playwright install chromium`
- **Env vars:** nenhuma
- **Quando usar:** `/carrossel`, `/slide`, qualquer skill que gera HTML

### Remotion (vídeo programático)
- **Pra que:** gerar vídeo curto (Reels, TikTok) via React
- **Instalar:** `npm install remotion @remotion/cli`
- **Quando usar:** se quiser automatizar produção de vídeo

## Publicação web

### Cloudflare Pages
- **Pra que:** hospedar site estático (HTML, blog)
- **Instalar:** `npm install -g wrangler`
- **Env vars:** `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_PROJECT_NAME`
- **Quando usar:** `/publicar-site`

### Vercel CLI
- **Pra que:** deploy de Next.js / frontends modernos
- **Instalar:** `npm install -g vercel`
- **Env vars:** `VERCEL_TOKEN`
- **Quando usar:** sites que precisam de SSR

## Publicação social

### Post for Me
- **Pra que:** postar em Instagram, TikTok, LinkedIn, X com uma chave só
- **Instalar:** API REST direta via `curl` ou via script Node
- **Env vars:** `POSTFORME_API_KEY`, `INSTAGRAM_ACCOUNT_ID`
- **Quando usar:** `/publicar-instagram` (modo simples)

### Meta Graph API
- **Pra que:** postar direto no Instagram + Facebook, controle total
- **Instalar:** App no developers.facebook.com, gerar token de longa duração
- **Env vars:** `INSTAGRAM_ACCESS_TOKEN`, `INSTAGRAM_USER_ID`, `IMGBB_API_KEY`, `FACEBOOK_PAGE_ID`, `FACEBOOK_ACCESS_TOKEN`
- **Quando usar:** `/publicar-instagram` (modo direto)

### WhatsApp Cloud API / Z-API
- **Pra que:** automação de WhatsApp Business
- **Instalar:** contrat Meta Business + setup Z-API
- **Env vars:** conforme servico

## Fetch e search

### WebFetch (nativo)
- **Pra que:** baixar e fazer parse de páginas web
- **Já vem no Claude Code.** Não precisa instalar.

### WebSearch (nativo)
- **Pra que:** busca web
- **Já vem.** Não precisa instalar.

### Jina Reader
- **Pra que:** extrair conteúdo limpo de qualquer URL (livre de ads/scripts)
- **Instalar:** API REST (`https://r.jina.ai/<url>`)
- **Env vars:** `JINA_API_KEY`

### DataForSEO
- **Pra que:** dados de keyword research (volume de busca, CPC, concorrência)
- **Instalar:** API REST
- **Env vars:** `DATAFORSEO_LOGIN`, `DATAFORSEO_PASSWORD`
- **Quando usar:** `/seo` fase 1 e 2

## Vídeo

### yt-dlp
- **Pra que:** baixar vídeo/áudio do YouTube e várias plataformas
- **Instalar:** `pip install yt-dlp` ou `brew install yt-dlp`
- **Quando usar:** captura de conteúdo de referência

### Whisper (OpenAI)
- **Pra que:** transcrever áudio/vídeo com alta qualidade
- **Instalar:** API OpenAI ou `pip install openai-whisper` (local)
- **Env vars:** `OPENAI_API_KEY`

### AssemblyAI
- **Pra que:** transcrição profissional com diarization (quem fala)
- **Instalar:** API REST
- **Env vars:** `ASSEMBLYAI_API_KEY`

## Geração de imagem

### Gemini (Google)
- **Pra que:** geração de imagem com prompt natural
- **Instalar:** API REST
- **Env vars:** `GEMINI_API_KEY`

### DALL-E (OpenAI)
- **Pra que:** geração de imagem
- **Instalar:** API REST
- **Env vars:** `OPENAI_API_KEY`

### FAL / Replicate
- **Pra que:** modelos open-source de geração (Flux, SDXL)
- **Instalar:** API REST
- **Env vars:** `FAL_KEY`, `REPLICATE_API_TOKEN`

## Dados

### gspread
- **Pra que:** ler/escrever Google Sheets via Python
- **Instalar:** `pip install gspread google-auth`
- **Env vars:** `GOOGLE_SERVICE_ACCOUNT_JSON`

### Google Sheets API (direto)
- **Pra que:** mesma coisa, sem wrapper
- **Instalar:** ativar API + service account

## Git e GitHub

### gh CLI
- **Pra que:** interagir com GitHub (releases, PR, issues)
- **Instalar:** `brew install gh` ou wingchocolate
- **Quando usar:** automatizar fluxos via GitHub

### GitHub API
- **Pra que:** tudo que o gh faz + webhooks
- **Env vars:** `GITHUB_TOKEN`

## Analytics e ads

### GA4 (Google Analytics 4)
- **Pra que:** leitura de dados de analytics
- **Instalar:** API REST com service account
- **Env varsA API key foi rejeitada. Confira a chave no setup ou solicite uma nova. de campanhas Meta Ads
- **Instalar:** app em developers.facebook.com
- **Env vars:** `META_ADS_ACCESS_TOKEN`, `META_ADS_ACCOUNT_ID`

### Google Ads API
- **Pra que:** leitura/escrita de campanhas Google Ads
- **Instalar:** OAuth flow + developer token
- **Env vars:** várias (siga docs oficiais)

## MCPs (Model Context Protocol)

Servidores MCP que adicionam ferramentas ao Claude Code:

| MCP | Comando de instalação | Pra que |
|---|---|---|
| Notion | `claude mcp add notion -- npx -y @notionhq/notion-mcp-server` | Ler/escrever Notion |
| Gmail | `claude mcp add gmail -- npx -y @gongrzhe/server-gmail-autoauth-mcp` | Ler/enviar emails |
| Google Calendar | `claude mcp add calendar -- npx -y @gongrzhe/server-calendar-autoauth-mcp` | Eventos de calendário |
| Canva | `claude mcp add canva -- npx -y @canva/mcp-server` | Designs no Canva |
| Google Drive | `claude mcp add drive -- npx -y @modelcontextprotocol/server-gdrive` | Drive |
| context7 | `claude mcp add context7 -- npx -y @upstash/context7-mcp` | Docs atualizadas de libs |
| GitHub | `claude mcp add github -- npx -y @modelcontextprotocol/server-github` | Issues, PRs, repos |
| Trello | `claude mcp add trello -- npx -y @modelcontextprotocol/server-trello` | Boards Trello |
| N8N | `claude mcp add n8n -- npx -y n8n-mcp` | Workflows N8N |
| Supabase | `claude mcp add supabase -- npx -y @supabase/mcp-server-supabase` | DB Supabase |
| Telegram | `claude mcp add telegram -- npx -y @chigwell/telegram-mcp` | Bot de Telegram |

---

## Como decidir o que instalar

Não tente instalar tudo. Quando o usuário precisar de uma capacidade nova, sugira **1-2 opções** do catálogo e instale só a escolhida.

**Regra de ouro:** prefira APIs REST / CLIs antes de MCPs (mais simples, menos dependência). MCP vale a pena quando o Claude precisa interagir com a ferramenta várias vezes durante uma sessão.
