# Catálogo de Skills

> Referência. Não instalar cegamente — instale a skill só quando o usuário precisar.

---

## Copywriting

### /schwartz-copy
- **O que faz:** aplica a metodologia de Eugene Schwartz (5 níveis de consciência)
- **Bom pra:** copy de página de vendas, email longo, anúncios diretos
- **Instalar de:** `github.com/duduesh/schwartz-copy`

### /ogilvy-copy
- **O que faz:** aplica a metodologia de David Ogilvy (headline, prova, especificidade)
- **Bom pra:** copy de marca, posicionamento,品牌形象
- **Instalar de:** `github.com/duduesh/ogilvy-copy`

## Design e documento (nativas)

| Skill | Bom pra |
|---|---|
| `/frontend-design` | Landing pages com HTML+CSS de alta qualidade |
| `/canvas-design` | Posts visuais via Canvas |
| `/pdf` | Manipulação de PDF |
| `/docx` | Manipulação de Word |
| `/pptx` | Apresentações em PowerPoint |
| `/xlsx` | Planilhas |
| `/doc-coauthoring` | Escrever docs colaborativamente |

## Vídeo e transcrição

| Skill | Bom pra |
|---|---|
| `/yt-transcript` | Extrair transcrição de vídeo do YouTube |
| `/transcribe` | Transcrever áudio/vídeo via Whisper |
| **Instalar:** `github.com/duduesh/transcribe` | |

## Tráfego pago

| Skill | Bom pra |
|---|---|
| `/ads-ratos` | Orquestrador de campanhas pagas |
| `/ga4-ratos` | Relatórios do GA4 |
| `/meta-ads-ratos` | Análise Meta Ads |
| `/google-ads-ratos` | Análise Google Ads |
| **Instalar de:** `github.com/duduesh/*` | |

## Descoberta e utilidade

| Skill | Bom pra |
|---|---|
| `/find-skills` | Buscar skills por necessidade |
| `/webapp-testing` | Testar aplicações web |
| `/skill-creator` | Criar skills novas |

---

## Como instalar uma skill

```bash
# Clonar o repo da skill
git clone <url> /tmp/<skill>

# Copiar para a pasta global de skills (~/) ou local do projeto (./)
cp -r /tmp/<skill>/.claude/skills/<skill-name> ~/.claude/skills/
# ou
cp -r /tmp/<skill>/.claude/skills/<skill-name> .claude/skills/
```

Após instalar, recarregue o Claude Code para a skill aparecer.

## Quando não instalar

- **Não instale por instalar.** Só instale quando a skill for resolver um problema real que apareceu.
- **Não instale skills duplicadas.** Veja as 15 nativas do CortexOS antes de instalar algo externo.
