---
name: abrir
description: Começo do dia — carrega memória persistente (_memoria/ e identidade/) e devolve um resumo curto de 5 linhas do que importa agora. Use quando o usuário disser "abrir", "começar o dia", "bom dia", primeira mensagem da sessão, ou após /instalar.
---

# /abrir (ou /iniciar)

Carregador de contexto. Roda no início de toda sessão (ou quando o usuário pedir "começar o dia", "abrir", "bom dia").

## Workflow

1. Leia em silêncio:
   - `_memoria/empresa.md`
   - `_memoria/preferencias.md`
   - `_memoria/estrategia.md`
   - `CLAUDE.md` (regras)
   - Se a pasta `clientes/` ou `projetos/` tiver conteúdo e a tarefa do dia for sobre um cliente/projeto específico, leia o `CLAUDE.md` dele também.

2. **Não confirme a leitura.** Apenas use o contexto.

3. Devolva **5 linhas** no máximo:

```
📍 <fase atual> | 🎯 <prioridade>

Memória carregada pra <nome>. Tô pronto pra <próximo passo estratégico>.

Sobre o quê você quer trabalhar?
```

4. Se a memória tiver lacunas óbvias (campos vazios em `empresa.md`, por exemplo), mencione **uma vez** e ofereça corrigir via `/atualizar`:
   > "Notei que `preferencias.md` não tem o exemplo de escrita que você me passou. Quer rodar `/atualizar` pra preencher, ou seguimos?"

5. Se a tarefa do dia já estiver clara (o usuário veio com pedido), puxe direto. Resumo de 5 linhas só quando o usuário abriu a sessão sem objetivo definido.

## Regras

- Máximo 5 linhas no resumo. Não explique o que você leu.
- Não cumprimente com formalidade. Tom direto.
- Se a sessão já está rolando e o usuário só mandou "bom dia", responda "Bom dia. Em que posso ajudar hoje?" e pare.
- Se a memória estiver toda vazia, **diga uma vez** e ofereça rodar `/instalar`. Não invente contexto.
