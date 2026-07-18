---
name: analisar-dados
description: Lê arquivo (CSV/XLSX/PDF/TXT/JSON) e gera resumo executivo com achados e recomendações. Use quando o usuário disser "analisa esse arquivo", "o que mostram esses dados", "analisar planilha", "interpretar csv".
---

# /analisar-dados

Análise de arquivo → resumo executivo.

## Dependências

- Arquivo em `dados/` (drop zone) ou caminho passado pelo usuário

## Workflow

### 1. Identifique o arquivo

Pergunte o caminho ou liste `dados/`.

Tipos suportados:
- `.csv` → use pandas via Bash (python3) ou leia direto
- `.xlsx` / `.xls` → use openpyxl/pandas
- `.json` → leia e identifique estrutura
- `.pdf` → use pdftotext ou similar
- `.txt` → leia direto

### 2. Exploração

Antes de gerar o resumo:

- **Dimensão:** quantas linhas/colunas?
- **Período:** que intervalo temporal cobre?
- **Tipos de dado:** numérico, categórico, temporal, texto?
- **Valores faltantes:** muitos? Onde?
- **Outliers óbvios:** tem algo muito fora do padrão?

### 3. Resumo executivo

Gere `saidas/analises/analise-<slug>-<YYYY-MM-DD>.md`:

```markdown
# Análise: <nome do arquivo>

**Data:** <YYYY-MM-DD>
**Origem:** <caminho do arquivo>
**Período coberto:** <intervalo>

## O que esses dados mostram
<2-3 parágrafos em prosa, não em bullets. A história que os dados contam.>

## O que está funcionando
- <ponto positivo 1>
- <ponto positivo 2>

## O que merece atenção
- <ponto de atenção 1>
- <ponto de atenção 2>

## 3 recomendações
1. <ação concreta>
2. <ação concreta>
3. <ação concreta>

## Números-chave
| Métrica | Valor |
|---|---|
| <métrica 1> | <valor> |
| <métrica 2> | <valor> |

## Observações metodológicas
- <limitações dos dados, suposições feitas, cuidado na interpretação>
```

### 4. Visualizações (opcional)

Se o usuário quiser, gere gráficos:
- Barras pra comparar categorias
- Linha pra tendência temporal
- Pizza só pra composição (raramente é boa ideia)

Use matplotlib/seaborn via Bash, salve PNG na mesma pasta.

### 5. Apresente

Mostre o resumo. Ofereça:
- Gráficos adicionais
- Cruzamento com outros dados
- Salvar como referência

## Regras

- **Prosa > bullets na seção "O que mostram".** É a história, não a tabela.
- **Recomendações concretas**, não "investigue mais" ou "otimize".
- **Limitações explícitas.** Se o dado tem viés ou falta info, diga.
- **Não invente números.** Se não dá pra calcular, escreva "não calculado".
- **Resumo em 1 página**, não 5. Aprofunde se o usuário pedir.
