---
name: instalar
description: Roda a entrevista inicial de 10 perguntas que configura o CortexOS para o seu negócio. Preenche _memoria/, identidade/, seleciona perfil de CLAUDE.md, sugere renomear pasta. Use quando o usuário disser "instalar", "configurar o sistema", "primeira vez", "rodar /instalar", "/setup".
---

# /instalar

Configuração inicial do CortexOS. Roda **uma vez só**. Dura 5-7 minutos.

## Pré-checagem

Antes de começar:

1. **Verifique se a pasta ainda tem nome genérico** (`cortexos`, `cortexos-main`, etc.). Se sim, anote para sugerir renomeação no fim.
2. **Verifique se `_memoria/empresa.md` já tem conteúdo** (não é só template). Se já estiver preenchido:
   > "Já tem configuração aqui. Quer **sobrescrever do zero** ou **complementar** o que tem?"

## Fase 1 — Perfil

Pergunte:
> "Qual desses é mais parecido com você?"
1. **Solopreneur / criador solo** — uma pessoa, marca pessoal + negócio
2. **Freelancer** — atende clientes, organiza por projeto/cliente
3. **Agência / consultoria** — time pequeno, vários clientes
4. **Empresa** — estruturada com departamentos

A resposta mapeia para `templates/perfis/claude-md-<perfil>.md` (que define a estrutura de pastas do CLAUDE.md raiz).

## Fase 2 — Entrevista (10 perguntas, uma de cada vez)

**Regras:**
- Faça **uma pergunta por vez**, espere a resposta.
- Se a resposta for vaga, peça concretenza **uma vez**. Não insista mais.
- Não enfileire perguntas.
- Não invente dados. Registre o que veio ou deixe placeholder explícito.

### Negócio (Q1-Q4)

1. "Como você chama o que você faz? (nome da empresa, ou seu nome se for marca pessoal)"
2. "O que sua empresa entrega, em uma frase do jeito que você falaria pro vizinho?"
3. "Quem te paga? (perfil de cliente real — descreve em uma ou duas frases, sem persona genérica)"
4. "Você toca sozinho ou tem equipe? Se tem, quantos e cada um fazendo o quê?"

### Voz (Q5-Q6)

5. "Me cola um exemplo da tua escrita — uma legenda do Insta, um email pra cliente, qualquer coisa real e recente. Assim eu calibro o jeito de escrever sem precisar adivinhar."
6. "O que te dá ranço quando alguém escreve assim? (ex: 'vamos juntos!', emoji em email formal, 'caro cliente', jargão de guru, 'alavancar', 'sinergia')"

### Foco (Q7-Q8)

7. "Qual o gargalo do teu negócio hoje? O que tá segurando ele de crescer?"
8. "Se eu pudesse tirar UMA coisa que você repete toda semana das tuas costas, qual seria?"

### Identidade visual (Q9-Q10)

9. "Tem identidade visual definida ou tá no zero? Se tem, me passa as cores principais e a fonte."
10. "Tem logo? Se sim, joga o arquivo em `identidade/logo.png` (ou `.svg`) e me confirma."

## Fase 3 — Popular arquivos

Com as respostas em mãos, preencha:

| Resposta | Arquivo |
|---|---|
| Q1-Q4 | `_memoria/empresa.md` |
| Q5-Q6 | `_memoria/preferencias.md` (com o exemplo de escrita real como âncora) |
| Q7-Q8 | `_memoria/estrategia.md` (Q8 vira candidato a `/mapear-rotinas`) |
| Q9-Q10 | `identidade/design-guide.md` |
| Perfil | `CLAUDE.md` (raiz) ← template do perfil + nome do negócio + estrutura de pastas |

**Importante:** não sobrescreva o `CLAUDE.md` se ele já tiver personalização. Preserve regras existentes e só adapte o que precisar.

## Fase 4 — Resumo

Mostre uma caixa de check verde:

```
✅ Instalação concluída

📁 Estrutura montada para: <perfil>
🧠 Memória carregada em: _memoria/
🎨 Identidade visual em: identidade/
📜 CLAUDE.md personalizado para: <nome do negócio>

Suas 15 skills estão prontas. Suas 5 memórias estão preenchidas.
```

## Fase 5 — Renomear pasta (se aplicável)

Se a pasta ainda tem nome genérico:

> "A pasta tá com nome genérico (`cortexos`). Sugiro renomear pra `<slug-do-negocio>` — mais limpo pro dia a dia.
>
> Pra renomear:
> 1. Fecha o VS Code
> 2. Renomeia a pasta no Explorador
> 3. Reabre o VS Code nessa pasta
>
> Ou só ignora e segue assim mesmo."

Slug: `lowercase`, sem acentos, espaços → hífens, sem caracteres especiais.

## Fase 6 — Próximos passos

> "Tá pronto. Três coisas pra já:
>
> 1. **Em toda sessão que começar:** rode `/abrir` — carrega memória e devolve um resumo de 5 linhas.
> 2. **Sobre a coisa que você quer tirar das costas (Q8):** rode `/mapear-rotinas` — vamos mapear e virar skill.
> 3. **Backup:** rode `/salvar` quando terminar uma entrega — sobe pro GitHub."

## Regras

- **Não invente dados.** Se o usuário não respondeu, registre placeholder ou omita o campo.
- **Não encha linguiça.** Se a resposta foi "ah, dou aula de violão", registre exatamente isso. Não transforme em persona de marketing.
- **Não rode perguntas extras.** São 10, nem 9 nem 11.
- **Setup deve durar 5-7 minutos no máximo.** Se o usuário travar, registra o que tem e segue.
