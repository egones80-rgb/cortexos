# Skills do CortexOS

Aqui ficam as 15 skills nativas + os aliases dos comandos herdados do ccos-ratos.

## Estrutura

```
.claude/skills/
├── instalar/          # entrevista inicial (10 perguntas)
├── abrir/             # carrega memória + 5 linhas de resumo
├── iniciar/           # alias de /abrir
├── salvar/            # commit + push no GitHub
├── syncar/            # alias de /salvar
├── atualizar/         # reconcilia memória ↔ workspace
├── novo-projeto/      # cria pasta isolada pra cliente/projeto
├── mapear-rotinas/    # descobre rotinas → vira skill
├── mapear/            # alias de /mapear-rotinas
│
├── carrossel/         # Instagram/TikTok 1080×1350
│   └── references/    # 3 estilos de design + SVG
├── publicar-tema/     # blog + carrossel + 3 legendas
├── seo/               # pipeline 8 fases
├── slide/             # 1080×1080 / 1920×1080 / 1080×1920
├── roteiro-post/      # post / vídeo curto / thread / newsletter
├── responder-avaliacoes/  # respostas humanas pro GMB
├── aprovar-post/      # draft → site → redes
│
├── anuncio-google/    # estrutura + CSVs
├── relatorio-ads/     # relatório semanal executivo
├── analisar-dados/    # CSV/XLSX/PDF/JSON → resumo
│
├── proposta-comercial/# HTML com a marca
├── publicar-site/     # HTML → Cloudflare Pages
├── publicar-instagram/# Post for Me + Graph API
│   └── scripts/       # 2 scripts Node.js
├── email-profissional/# rascunho calibrado
└── conteudo/          # alias de roteamento
```

## Como escrever uma skill nova

1. **Escolha o local:**
   - Local do projeto (específico desse negócio) → `.claude/skills/<nome>/SKILL.md`
   - Global (vale em qualquer projeto) → `~/.claude/skills/<nome>/SKILL.md`

2. **Formato obrigatório** (frontmatter YAML):

   ```markdown
   ---
   name: nome-da-skill
   description: gatilhos — o que o usuário diz pra acionar
   ---

   # /nome-da-skill

   Descrição curta.

   ## Dependências
   - arquivos que consome

   ## Workflow
   ### Fase 1 — <nome>
   1. passo
   2. passo
   CHECKPOINT: <o que precisa de aprovação>

   ## Saída
   - caminho determinístico
   - formato

   ## Regras
   - o que faz
   - o que nunca faz
   ```

3. **Princípios:**
   - 3-7 fases (não mais)
   - Checkpoint explícito em cada fase
   - Saída determinística (caminho fixo)
   - Regras claras do que nunca fazer
   - Tom coerente com o resto do CortexOS

## Como adicionar uma skill externa

Veja `templates/skills/catalogo.md` pra referência de skills de fora.

```bash
# Clone o repo da skill
git clone <url> /tmp/<skill>
cp -r /tmp/<skill>/.claude/skills/<skill-name> .claude/skills/
# Recarregue o Claude Code
```
