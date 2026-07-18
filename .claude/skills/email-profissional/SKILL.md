---
name: email-profissional
description: Gera rascunho de email profissional com calibração de tom (direto ou suave). Use quando o usuário disser "escreve um email pra", "como respondo isso", "email formal", "email pra cliente".
---

# /email-profissional

Rascunho de email com tom calibrado.

## Dependências

- `_memoria/preferencias.md` (tom base)
- `_memoria/empresa.md` (pra saber o quê é o negócio)

## Workflow

### 1. Briefing

Pergunte:
1. **Pra quem é o email** (cliente, fornecedor, parceiro, equipe — e nome se souber)
2. **Assunto/contexto** (o que motivou o email)
3. **Objetivo** (1 frase: o que você quer que aconteça depois desse email)
4. **Tom desejado:**
   - **Direto** — vai ao ponto, sem rodeio
   - **Suave** — delicado, preserva relação (cobrança, má notícia, recusa)
5. **Histórico** (se já teve email anterior sobre o assunto)

### 2. Estrutura

```markdown
**Subject:** <específico, não genérico>

<saudação — use o nome se souber>

<parágrafo 1: contexto + objetivo (2-3 frases)>

<parágrafo 2: detalhes, proposta ou pergunta (2-5 frases)>

<CTA claro — o que você quer que façam>

<fechamento — uma assinatura, sem "atenciosamente" se o tom for casual>
```

### 3. Calibração

#### Tom direto
- Frases curtas
- Verbo no presente/indicativo
- CTA explícito ("me responde até sexta", "agenda pra próxima semana")
- Sem pedir desculpas excessivo

#### Tom suave
- Reconhece o lado do outro antes de pedir
- "Entendo que...", "Imagino que...", "Sei que não é o melhor momento, mas..."
- CTA sugerido, não imperativo ("Que tal se a gente...?")
- Oferece saída honrosa

### 4. Geração

Salve em `saidas/emails/email-<pra-quem>-<YYYY-MM-DD>.md`:

```markdown
# Email para <nome> — <assunto>

**Data:** <YYYY-MM-DD>
**Tom:** <direto | suave>

---

**Subject:** <subject>

<corpo do email>

---

## Variação (se aplicável)
<versão alternativa com outro tom, se a situação for delicada>
```

### 5. Versões alternativas

Se o email for delicado (cobrança, recusa, más notícias), gere **2 versões** — uma mais direta, uma mais suave. Marque o que cada uma tem de diferente.

### 6. Apresente

> "Rascunhei o email. Quer ajustar o tom, o tamanho, ou tá pronto pra enviar?"

## Saída

`saidas/emails/email-<pra-quem>-<YYYY-MM-DD>.md`

## Regras

- **Subject específico**, nunca genérico. "Seguimento" é proibido. "Proposta comercial — projeto X" é aceito.
- **Sem "Caro cliente"**. Use o nome.
- **Sem "atenciosamente"** se o tom for casual. Use "abraço", "valeu", "até mais".
- **CTA claro** — sem ambiguidade sobre o que vem depois.
- **Assinatura com nome, cargo e contato**. Não use placeholders vazios.
- **Se for resposta**, referencie o email anterior ("Sobre sua pergunta de X...").
