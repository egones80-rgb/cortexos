---
name: publicar-tema
description: Orquestrador completo — pega um tema e gera post de blog + carrossel + 3 legendas pra Instagram. Use quando o usuário disser "publicar tema", "transforma esse tema em post", "quero conteúdo sobre X".
---

# /publicar-tema

Pipeline completo de conteúdo a partir de um tema. Combina blog + carrossel + legendas.

## Dependências

- Tudo de `/carrossel`
- `marketing/seo/05-estrategia-conteudo.md` (se já existir do pipeline `/seo`)
- `_memoria/empresa.md`

## Workflow

### Fase 1 — Tema

Pergunte:
1. **Tema** (uma frase: "como cobrar cliente sem perder amizade")
2. **Público** (específico)
3. **Onde já apareceu?** (se há conteúdo relacionado em `marketing/conteudo/`, referencie)

### Fase 2 — Pesquisa de demanda (opcional)

Se o usuário quiser, rode `/seo` na fase 1 (pesquisa de demanda) pra puxar palavras-chave reais e dado de volume. Senão, prossiga com bom senso.

### Fase 3 — Outline do blog

Estrutura recomendada:
- **H1** com palavra-chave principal
- **Introdução** (problema, não solução — agitar a dor)
- **3-5 seções** com H2
- **CTA** no final
- Meta description

Mostre o outline, peça aprovação.

### Fase 4 — Carrossel

Use a skill `/carrossel` para gerar a versão visual. (Siga o SKILL.md dela.)

### Fase 5 — 3 legendas

Gere 3 versões de legenda pro mesmo tema, com ângulos diferentes:

1. **Storytelling pessoal** — começa com "ano passado eu...", termina com lição
2. **Lista/framework** — começa com número ou estrutura, vai direto ao ponto
3. **Pergunta provocadora** — começa com pergunta polêmica, termina com CTA pra comentar

Salve cada uma em `marketing/conteudo/carrossel-<slug>-<YYYY-MM-DD>/legenda-<versao>.md`.

### Fase 6 — Blog

Gere o post completo em markdown:
- Frontmatter YAML (title, slug, date, tags, description)
- Conteúdo (1.500-2.500 palavras)
- Imagens referenciando os slides do carrossel

Salve em `marketing/conteudo/blog/post-<slug>-<YYYY-MM-DD>.md`.

### Fase 7 — Pronto pra publicar

> "Tudo gerado. Próximos passos:
> 1. Revisar textos (se ainda não revisou)
> 2. `/aprovar-post <slug>` pra subir pro site e postar nas redes
> 3. `/salvar` pra commitar"

## Saída

- `marketing/conteudo/blog/post-<slug>-<YYYY-MM-DD>.md`
- `marketing/conteudo/carrossel-<slug>-<YYYY-MM-DD>/` (carrossel + legendas)

## Regras

- **Blog e carrossel devem ser complementares**, não o mesmo texto formatado diferente.
- **3 legendas com ângulos diferentes**, não 3 variações da mesma ideia.
- **CTA coerente** com o funil do negócio (`empresa.md` → onde leva o cliente).
- **Não publique sem o usuário revisar**. Esta skill só **gera** — a publicação é outra skill (`/aprovar-post`).
