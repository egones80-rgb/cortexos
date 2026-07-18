# Avaliações Pendentes

> Template pra você colar avaliações do Google Meu Negócio que ainda não foram respondidas.
> Quando rodar `/responder-avaliacoes`, a skill lê este arquivo (se existir) e processa.

## Como usar

1. Abra o Google Meu Negócio
2. Vá em "Avaliações" → "A responder"
3. Pra cada avaliação pendente, copie/cole aqui neste formato:

```
## <YYYY-MM-DD> — <Nome do avaliador> (<nota>⭐)
Texto: "<texto da avaliação>"
Resposta: <!-- deixe vazio, a skill preenche -->
Status: pendente
```

## Exemplo

```
## 2026-07-15 — Maria Silva (5⭐)
Texto: "Atendimento ótimo, recomendo!"
Resposta:
Status: pendente
```

## Depois de processar

Quando você rodar `/responder-avaliacoes`, a skill:
- Lê cada bloco com `Status: pendente`
- Gera a resposta seguindo o tom de `_memoria/preferencias.md`
- Salva em `marketing/avaliacoes-google/<YYYY-MM>-respostas.md`
- **NÃO apaga** daqui automaticamente — você decide quando remover (após publicar no GMB)
