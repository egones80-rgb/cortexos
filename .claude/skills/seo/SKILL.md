---
name: seo
description: Pipeline de 8 passos para SEO local + GEO (Generative Engine Optimization) + Google Ads. Use quando o usuário disser "seo", "geo", "gmb", "google ads", "ranquear no google", "aparecer no google".
---

# /seo

Pipeline de SEO completo: da pesquisa de demanda até monitoramento.

## Dependências

- `_memoria/empresa.md` (segmento, local, cliente ideal)
- `marketing/conteudo/` (conteúdo existente)
- Acesso ao Google Search Console, Google Analytics (opcional)

## Workflow — 8 fases numeradas

Cada fase gera **um arquivo** em `marketing/seo/`. Não pule fases sem motivo.

### Fase 1 — Pesquisa de demanda

Pergunte ao usuário o **segmento** e **local**. Use WebSearch pra puxar:

- "perguntas frequentes sobre [segmento]"
- "[segmento] + [local]"
- Termos relacionados do Google Suggest
- People Also Ask dos principais resultados

Gere `01-pesquisa-demanda.md` com:
- Top 20 palavras-chave (com volume estimado se der)
- 10 perguntas frequentes
- 5 temas de conteúdo prioritários

### Fase 2 — Análise de concorrência

Liste os 5 primeiros resultados orgânicos pra 3 palavras-chave principais.

Para cada concorrente:
- URL
- Title e meta description
- Estrutura do conteúdo (H1, H2, palavras-chave usadas)
- Backlinks estimados
- Pontos fortes e fracos

Gere `02-analise-concorrencia.md`.

### Fase 3 — Google Meu Negócio (GEO)

Se o negócio tem atuação local:

- Checklist de otimização do GMB (30+ itens): nome, categoria, descrição, horário, fotos, atributos, posts, produtos, serviços, Q&A
- Lista de citações locais pra construir (diretórios: Google, Bing, Apple Maps, Yelp, etc.)
- Estratégia de avaliações: como pedir, frequência, como responder

Gere `03-gmb-checklist.md`.

### Fase 4 — SEO on-page

Auditoria técnica + de conteúdo do site do usuário (se ele passar URL):

- Title e meta description
- Headings (H1-H6)
- Imagens (alt, peso)
- Estrutura de URLs
- Schema markup
- Velocidade
- Mobile

Gere `04-onpage-auditoria.md` com lista priorizada (alto/medio/baixo impacto).

### Fase 5 — Estratégia de conteúdo

Com base nas fases 1-4, defina:

- 5 pilares de conteúdo
- 20 títulos de posts pra os próximos 3 meses
- Calendário editorial mensal
- Como cada post conecta com keyword + fase do funil

Gere `05-estrategia-conteudo.md`.

### Fase 6 — Google Ads (estrutura de campanha)

Se o usuário quer mídia paga também:

- Estrutura de campanha (Search, Display, YouTube)
- Grupos de anúncios
- 10-15 anúncios por grupo (15 headlines + 4 descriptions)
- Palavras-chave negativas
- Orçamento diário sugerido + expectativa de CPA

Gere `06-google-ads-estrutura.md`.

Depois opcional: `/anuncio-google` gera os CSVs prontos pro Editor.

### Fase 7 — Monitoramento

KPIs e cadência:

- Semanal: posições, impressões, cliques, CTR (Search Console)
- Mensal: conversões, custo por aquisição, ROAS (se tiver Ads)
- Trimestral: revisão da estratégia, atualização de keywords, novos concorrentes

Gere `07-monitoramento-kpis.md` com dashboards sugeridos e frequência.

### Fase 8 — GEO (Generative Engine Optimization)

Otimização pra aparecer em respostas de IA (ChatGPT, Claude, Perplexity, Gemini):

- Estruturar FAQ no site com schema FAQPage
- Criar conteúdo autoral com nome + data + fontes citadas
- Listar o negócio em diretórios que IAs consultam (Wikipedia, Wikidata, Crunchbase, sites de review)
- Estratégia de "AI overview citation" — como ser a fonte que a IA cita

Gere `08-geo-otimizacao.md`.

## Saída

8 arquivos numerados em `marketing/seo/`:
```
01-pesquisa-demanda.md
02-analise-concorrencia.md
03-gmb-checklist.md
04-onpage-auditoria.md
05-estrategia-conteudo.md
06-google-ads-estrutura.md
07-monitoramento-kpis.md
08-geo-otimizacao.md
```

## Regras

- **Cada fase gera 1 arquivo**, não 1 arquivo gigante.
- **Não invente dados de volume de busca.** Se não conseguir via WebSearch, escreva "volume não estimado" e explique.
- **Não prometa resultados.** SEO é probabilístico. Escreva "estimativa", "possível", "tendência" — não "vai aparecer em primeiro".
- **Fase 6 (Ads) é opcional.** Pergunte antes se o usuário quer mídia paga.
- **Fase 8 (GEO) é o diferencial.** Faça com capricho.
