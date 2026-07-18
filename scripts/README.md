# scripts/

**Vazio por design.** Cada skill que precisa de um script Node/Python cria o seu aqui, com instruções claras no `SKILL.md`.

Quando uma skill cria um script:

1. O script fica nesta pasta (ou em `.claude/skills/<nome>/scripts/` se for exclusivo daquela skill).
2. O `SKILL.md` da skill explica como rodar.
3. Variáveis de ambiente vão em `.env` (nunca no script).

Padrão de nomenclatura: `<verbo>-<coisa>.js`. Exemplos:
- `gerar-imagem.js` — gera imagens via API
- `postar-instagram.js` — publica carrossel
- `render.js` — converte HTML em PNG
- `sync-cloudflare.js` — deploy no Cloudflare Pages
