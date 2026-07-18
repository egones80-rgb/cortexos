---
name: anuncio-google
description: Gera a estrutura completa de campanha Google Ads + CSVs prontos pra importar no Google Ads Editor. Use quando o usuário disser "anúncio google", "criar campanha google ads", "csv pro google ads", "estrutura de campanha".
---

# /anuncio-google

Estrutura de campanha → CSVs prontos pro Google Ads Editor.

## Dependências

- `marketing/seo/06-google-ads-estrutura.md` (se já existir do pipeline `/seo`)
- `_memoria/empresa.md` (segmento, público, orçamento)

## Workflow

### 1. Briefing

Pergunte:
1. **Objetivo da campanha** (vendas, leads, tráfego, awareness)
2. **Segmento** e **local de atuação**
3. **Orçamento diário** (em R$)
4. **Landing page** (URL que vai receber o tráfego)
5. **Diferenciais** (o que te destaca dos concorrentes)

### 2. Estrutura de campanha

Crie a hierarquia:

```
Campanha: <nome>
├── Conjunto de anúncios: <segmento>
│   ├── Grupo 1: <palavra-chave principal>
│   ├── Grupo 2: <palavra-chave secundária>
│   └── ...
└── Conjunto de anúncios: <local>
    └── ...
```

Recomende baseado no objetivo:
- **Vendas/Conversão:** Maximizar conversões + tCPA alvo
- **Leads:** Maximizar conversões + tCPA alvo
- **Tráfego:** Maximizar cliques
- **Awareness:** Alcance + frequência

### 3. Palavras-chave

Por grupo, liste 10-20 keywords:
- **Correspondência exata:** `[palavra]`
- **Frase:** `"palavra"`
- **Ampla:** `palavra`

Inclua **palavras-chave negativas** (irrelevantes que devem ser excluídas).

### 4. Anúncios

Para cada grupo, gere 3-5 variações de anúncio responsivo:
- **15 headlines** (max 30 caracteres cada)
- **4 descriptions** (max 90 caracteres cada)

Use os diferentes diferenciais. Cada headline deve fazer sentido sozinha (Google combina dinamicamente).

### 5. Extensões

- **Sitelinks** (4-6 links adicionais)
- **Callouts** (6-8 frases curtas, ex: "Atendimento 24h", "Frete grátis")
- **Structured snippets** (lista de: tipos, marcas, serviços)
- **Call extension** (se aplicável)
- **Location extension** (se aplicável)

### 6. CSVs para Google Ads Editor

Gere 3 CSVs em `marketing/campanhas/<campanha>-<YYYY-MM-DD>/`:

1. **keywords.csv**
```
Campaign,Ad group,Keyword,Match type,Max CPC
<campanha>,<grupo>,<keyword>,Broad,<valor>
```

2. **ads.csv**
```
Campaign,Ad group,Headline 1,Headline 2,...,Description 1,Description 2
<campanha>,<grupo>,<h1>,<h2>,...,<d1>,<d2>
```

3. **extensions.csv**
```
Campaign,Sitelink 1,Sitelink 2,...,Callout 1,Callout 2
```

### 7. Orientações de importação

> "Pra importar:
> 1. Abre o Google Ads Editor
> 2. Conta → Importar → selecione os CSVs
> 3. Revise antes de aplicar
> 4. Publique quando estiver tudo certo"

## Saída

`marketing/campanhas/<campanha>-<YYYY-MM-DD>/`
- `estrutura.md` (visão geral)
- `keywords.csv`
- `ads.csv`
- `extensions.csv`

## Regras

- **Headlines com max 30 caracteres** (Google corta). Conte os caracteres.
- **Descriptions com max 90 caracteres**. Conte.
- **Não invente promoções.** Se o usuário não passou, deixe genérico ou pergunte.
- **Palavras-chave negativas são essenciais.** Liste pelo menos 5 por grupo.
- **Recomende tCPA baseado em benchmarks do segmento** — não chute.
- **Não prometa resultado.** CPA "estimado" é honesto. "Vai custar X" não é.
