---
name: relatorio-ads
description: Lê CSVs de Google Ads / Meta Ads e gera relatório executivo semanal com análise de performance e recomendações. Use quando o usuário disser "relatório de ads", "performance da semana", "como tão as campanhas".
---

# /relatorio-ads

Relatório executivo semanal a partir dos CSVs de ads.

## Dependências

- CSVs de campanha em `marketing/campanhas/` ou `dados/`
- `_memoria/estrategia.md` (prioridades da semana)

## Workflow

### 1. Localize os dados

Pergunte onde estão os CSVs:
- `marketing/campanhas/` (histórico versionado)
- `dados/` (drop zone recente)

Pode ser:
- Google Ads export
- Meta Ads export
- GA4 (CSV)
- Planilha interna (XLSX)

### 2. Período

Pergunte o período do relatório:
- Última semana (seg-dom)
- Último mês
- Período customizado (datas específicas)

### 3. Análise

Calcule:

**Métricas básicas:**
- Investimento total
- Impressões
- Cliques
- CTR (cliques / impressões)
- CPC médio (investimento / cliques)
- Conversões
- CPA (investimento / conversões)
- ROAS (receita / investimento) — se houver dado de receita

**Comparação vs período anterior:**
- Variação % de cada métrica
- Destacar o que melhorou e o que piorou significativamente (>20%)

**Por campanha / conjunto / anúncio:**
- Qual campanha tem melhor CPA
- Qual campanha tem pior CPA
- Qual anúncio tem melhor CTR
- Qual anúncio tem pior CTR

**Palavras-chave:**
- Top 10 que mais gastaram
- Top 10 que mais converteram
- Palavras-chave com CPA muito alto (>2x média) — candidatas a pausar

### 4. Relatório

Gere `marketing/campanhas/relatorios/semana-<YYYY-MM-DD>.md`:

```markdown
---
periodo: <YYYY-MM-DD a YYYY-MM-DD>
investimento: <R$>
conversoes: <N>
canais: [google, meta, ...]
---

# Relatório de Ads — Semana <data>

## Resumo executivo
<2-3 frases: o que aconteceu na semana, o que se destaca>

## Números-chave
| Métrica | Valor | vs semana anterior |
|---|---|---|
| Investimento | R$ X | +X% |
| Conversões | N | +X% |
| CPA | R$ X | -X% |
| ROAS | X | +X% |

## O que tá funcionando
- <campanha/anúncio X com CPA Y>

## O que merece atenção
- <campanha Z com CPA alto / CTR baixo>

## 3 recomendações pra próxima semana
1. <ação concreta>
2. <ação concreta>
3. <ação concreta>

## Próximos passos
- <decisões a tomar>
```

### 5. Apresente

Mostre ao usuário o relatório. Ofereça:
- Salvar como referência
- Enviar por email
- Apresentar pro cliente/equipe

## Regras

- **Sempre inclua comparação** com período anterior. Sem comparação, sem contexto.
- **Destaque o que fugiu do padrão** (>20% de variação). Métricas "normais" vão no quadro, não em destaque.
- **Recomendações concretas**, não genéricas. "Pausar campanha X" > "otimizar campanhas".
- **Não prometa resultado futuro** baseado em dado passado.
- **Se faltar dado** (ex: sem ROAS porque não tem receita), escreva "não informado" e siga.
