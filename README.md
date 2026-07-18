# CortexOS

> IA não é uma ferramenta que sua empresa usa. É o sistema operacional em que ela roda.

**CortexOS** é um framework de camada de memória + skills para Claude Code. Transforma uma sessão fresca do Claude em um sistema operacional de negócio que te conhece, lembra, e executa.

---

## Como instalar (em 5 minutos)

### Opção 1 — Copiar e colar no Claude Code
Abra o Claude Code nesta pasta e envie:

```
Roda o /instalar aqui dentro
```

### Opção 2 — Manual
```bash
git clone https://github.com/egones80-rgb/cortexos.git
cd cortexos
code .
claude       # abre o Claude Code
/instalar    # primeira execução
```

A entrevista `/instalar` faz 10 perguntas curtas e popula todo o sistema.

---

## Comandos principais (sempre disponíveis)

| Comando | O que faz |
|---|---|
| `/abrir` ou `/iniciar` | Começa o dia — carrega memória e devolve um resumo de 5 linhas |
| `/instalar` | Setup inicial — entrevista de 10 perguntas |
| `/salvar` ou `/syncar` | Commit + push pro GitHub (backup automático) |
| `/atualizar` | Reconcilia memória com a realidade do workspace |
| `/novo-projeto` | Cria pasta de cliente/projeto com CLAUDE.md próprio |
| `/mapear-rotinas` ou `/mapear` | Descobre tarefas repetidas → gera skills novas |

---

## Skills nativas

**Núcleo (6)**
- `abrir` · `salvar` · `atualizar` · `novo-projeto` · `mapear-rotinas` · `instalar`

**Conteúdo e SEO (7)**
- `carrossel` (1080×1350 → PNG via Playwright)
- `publicar-tema` (orquestrador: blog + carrossel + 3 legendas)
- `seo` (pipeline de 8 passos: demanda, concorrência, GMB, on-page, conteúdo, ads, monitoramento, GEO)
- `slide` (1080×1080 / 1920×1080 / 1080×1920)
- `roteiro-post` (post, vídeo curto, thread, newsletter)
- `responder-avaliacoes` (resposta humana pra reviews do GMB)
- `aprovar-post` (draft → publicado: copia PNG, push, posta via Meta API)

**Anúncios e análise (3)**
- `anuncio-google` (estrutura completa de campanha → CSV pro Editor)
- `relatorio-ads` (relatório semanal executivo a partir dos CSVs)
- `analisar-dados` (CSV/XLSX/PDF/JSON → resumo executivo)

**Comercial (4)**
- `proposta-comercial` (briefing → HTML com a marca)
- `publicar-site` (HTML → Cloudflare Pages)
- `publicar-instagram` (Post for Me + Graph API)
- `email-profissional` (rascunho com calibração de tom)

**Slash commands de atalho (4, em `.claude/commands/`)**
- `/iniciar` → alias de `/abrir`
- `/syncar` → alias de `/salvar`
- `/mapear` → alias de `/mapear-rotinas`
- `/conteudo` → roteador para skills de conteúdo

**Total:** 24 skills + 4 slash commands de atalho.

---

## Filosofia

**Processos abertos viram fechados.** Decidir → executar → não medir → repetir às cegas é o problema. CortexOS fecha esse loop: decide → executa → captura → realimenta → ajusta sozinho.

Três camadas:
1. **Memória** — `_memoria/` + `identidade/` (markdown humano-editável, lido em toda sessão)
2. **Skills** — `.claude/skills/` (capacidades reutilizáveis ativadas por comando)
3. **Saídas** — `marketing/` + `saidas/` (artefatos versionados no Git)

**Autoextensão.** Quando uma correção aparece, CortexOS pergunta se vale salvar. Quando uma tarefa repete 3+ vezes, oferece virar skill. O sistema cresce com você.

---

## Estrutura

```
cortexos/
├── .claude/
│   ├── commands/         # 4 slash commands (aliases)
│   └── skills/           # 24 skills nativas
├── _memoria/             # memória persistente (carregada sempre)
│   ├── empresa.md
│   ├── preferencias.md
│   └── estrategia.md
├── identidade/           # guia visual (cores, fonte, logo)
├── dados/                # drop zone (CSV, PDF, transcrições)
├── marketing/            # histórico vivo: conteúdo, SEO, campanhas, avaliações
├── saidas/               # entregas pontuais: análises, emails, propostas, slides, roteiros
├── scripts/              # utilitários (vazio; cada skill cria o que precisa)
└── templates/            # scaffolds reutilizáveis (perfis, marca, skills, ferramentas)
```

---

## Manutenção

Depois de instalar:

- **Tarefas novas do dia a dia** → `/mapear-rotinas` periodicamente
- **Memória desatualizada** → `/atualizar`
- **Backup** → `/salvar` (ou só trabalhar — há hook opcional de auto-sync)
- **Novo cliente/projeto** → `/novo-projeto`

Bem-vindo ao CortexOS.
