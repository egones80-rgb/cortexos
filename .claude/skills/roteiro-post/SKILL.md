---
name: roteiro-post
description: Transforma ideia, link ou transcrição em roteiro pra post, vídeo curto, thread ou newsletter. Use quando o usuário disser "roteiro", "script", "transforma isso em post", "ideia pra vídeo", "thread".
---

# /roteiro-post

Gera roteiro estruturado em 4 formatos diferentes.

## Dependências

- `_memoria/preferencias.md` (tom de voz)
- `_memoria/empresa.md` (público)

## Workflow

### 1. Entrada

Pergunte o formato desejado:
- **Post** (Instagram, LinkedIn, Facebook) — 800-1500 caracteres
- **Vídeo curto** (Reels, TikTok, Shorts) — 30-90 segundos
- **Thread** (Twitter/X, LinkedIn carousel texto) — 5-10 tweets
- **Newsletter** (email semanal) — 600-1200 palavras

E peça a **entrada**:
- Ideia solta
- Link pra referência
- Transcrição de áudio/vídeo
- Rascunho de texto

### 2. Estrutura por formato

#### Post
- **Gancho** (primeira linha — antes do "ver mais")
- **Desenvolvimento** (3-5 frases com 1 ideia cada)
- **CTA** (comentário, salvar, compartilhar)
- **Hashtags** (se aplicável, 5-10)

#### Vídeo curto
- **0-3s:** Hook visual + frase que prende
- **4-20s:** Problema (agitar a dor)
- **21-45s:** Resposta / solução (passo a passo ou história)
- **46-60s:** CTA + assinatura
- Notas de produção: cena, texto na tela, música

#### Thread
- **Tweet 1:** Gancho (promessa ou pergunta polêmica)
- **Tweets 2-N:** 1 ideia por tweet, com gancho pro próximo
- **Último tweet:** CTA + "siga pra mais X"

#### Newsletter
- **Subject** (específico, não "Newsletter #5")
- **Preview text** (complementa o subject)
- **Introdução** (contexto ou história)
- **Corpo** (1 ideia principal + 2-3 secundárias)
- **CTA** (link, botão, pergunta)

### 3. Aprovação

CHECKPOINT: "Esse é o roteiro. Aprova ou pede ajuste?"

## Saída

`saidas/roteiros/roteiro-<formato>-<slug>-<YYYY-MM-DD>.md`

## Regras

- **Gancho é tudo.** Se o gancho não prende, o resto não importa. Invista tempo nele.
- **1 ideia por slide/tweet/parágrafo.** Não comprima.
- **CTA claro.** "Comenta X", "Salva esse post", "Clica no link da bio". Sem ambiguidade.
- **Não use travessão** se o usuário não usa.
- **Não use estrutura binária** ("X cai, Y sobe").
