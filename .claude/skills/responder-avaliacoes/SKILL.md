---
name: responder-avaliacoes
description: Gera resposta humana pra avaliações do Google Meu Negócio. Tom pessoal, específico, 1-3 frases, sem corporativo. Use quando o usuário disser "responder avaliação", "avaliação do GMB", "responder review", "tô负 comentários do google".
---

# /responder-avaliacoes

Resposta pra reviews do GMB. Tom pessoal, sem texto de atendente.

## Dependências

- `_memoria/preferencias.md` (tom, o que evitar)
- `_memoria/empresa.md` (nome do negócio, serviços)

## Workflow

### 1. Coleta

O usuário pode:
- Colar a avaliação diretamente
- Passar o link (se conseguir abrir via WebFetch)
- Pedir pra puxar de `marketing/avaliacoes-google/avaliacoes-pendentes.md`

Para cada avaliação:
- **Nota** (1-5)
- **Nome do avaliador**
- **Texto da avaliação**
- **Data** (se disponível)

### 2. Tom por nota

#### 5 estrelas — agradece com específico
Mencione o que a pessoa elogiou. Não genérico.

❌ "Muito obrigado pela avaliação!" (genérico)
✅ "Valeu, Ana! Foi um prazer montar a estratégia de conteúdo com você. Quando quiser, tô aqui pra ajustar o que precisar."

#### 4 estrelas — agradece + pega o ponto
Tem algo a melhorar mesmo com nota alta. Reconheça.

#### 3 estrelas — agradece + aborda a crítica
Escuta ativa. Pergunta se pode resolver.

#### 2 estrelas ou 1 estrela — reconhece + resolve privado
Nunca discuta em público. Ofereça canal direto (WhatsApp, email).

❌ "Lamentamos pelo ocorrido. Entre em contato..."
✅ "Poxa, Marcelo, essa experiência não reflete o que a gente busca entregar. Me chama no WhatsApp (11) 9XXXX-XXXX que quero entender o que aconteceu e resolver."

### 3. Resposta

Gere a resposta em `marketing/avaliacoes-google/YYYY-MM-respostas.md`:

```markdown
# Respostas — Mês Ano

## Avaliação: João Silva (5⭐, 2026-07-10)
**Texto:** "Atendimento excelente, recomendo!"
**Resposta:** <texto>

## Avaliação: Maria Souza (2⭐, 2026-07-12)
**Texto:** "Demorei pra ser atendida."
**Resposta:** <texto>
```

### 4. Publicação

Se o usuário quiser publicar direto:
- Via API do GMB (complexo, peça confirmação)
- Copiar e colar manual (modo padrão)

## Saída

- `marketing/avaliacoes-google/<YYYY-MM>-respostas.md`

## Regras

- **1-3 frases no máximo.** Resposta longa é descaso.
- **Sempre mencione o nome** do avaliador.
- **Específico > genérico.** Se elogiaram "o bolo de chocolate", mencione o bolo.
- **Crítica → privado.** Nunca discuta em público.
- **Sem corporativo.** Nada de "Agradecemos a sua contribuição", "Somos gratos", "Sua opinião é muito importante".
- **Emoji: zero.** Avaliação do Google não é Instagram.
