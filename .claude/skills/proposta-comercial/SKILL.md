---
name: proposta-comercial
description: Gera proposta comercial em HTML com cores da marca, em 10 seções. Use quando o usuário disser "proposta", "proposta comercial", "orçamento pra cliente", "documento de proposta".
---

# /proposta-comercial

Proposta comercial em HTML pronto pra enviar.

## Dependências

- `identidade/design-guide.md` (cores)
- `_memoria/empresa.md` (sobre, serviços)
- Briefing do usuário

## Workflow

### 1. Briefing (5 perguntas)

1. **Cliente** (nome, empresa, contato)
2. **Problema/oportunidade** que o cliente tem
3. **Solução** que você oferece (em linhas gerais)
4. **Prazo** de execução
5. **Investimento** (valor, condições de pagamento)

Opcional:
- Cases / resultados anteriores
- Diferenciais específicos
- Prazo de validade da proposta

### 2. Estrutura (10 seções)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Proposta — <cliente></title>
  <style>
    /* cores de design-guide.md */
    /* tipografia */
    /* layout responsivo */
  </style>
</head>
<body>
  <header>
    <img src="identidade/logo.png" alt="logo">
    <h1>Proposta Comercial</h1>
    <p>Para: <cliente></p>
    <p>Data: <data></p>
    <p>Validade: <data></p>
  </header>

  <section id="destinatario">
    <h2>1. Pra quem é</h2>
    <p><quem é o cliente, contexto, momento></p>
  </section>

  <section id="problema">
    <h2>2. O problema / oportunidade</h2>
    <p><dor real que o cliente tem></p>
  </section>

  <section id="solucao">
    <h2>3. A solução</h2>
    <p><como você resolve, com que abordagem></p>
  </section>

  <section id="escopo">
    <h2>4. O que está incluído</h2>
    <ul>
      <li><entregável 1></li>
      <li><entregável 2></li>
    </ul>
  </section>

  <section id="nao-incluido">
    <h2>5. O que NÃO está incluído</h2>
    <ul>
      <li><item fora do escopo></li>
    </ul>
  </section>

  <section id="prazo">
    <h2>6. Prazo e entregáveis</h2>
    <table>...</table>
  </section>

  <section id="investimento">
    <h2>7. Investimento</h2>
    <p><valor total></p>
    <p><condições de pagamento></p>
  </section>

  <section id="proximos">
    <h2>8. Próximos passos</h2>
    <ol>
      <li>Aprovação da proposta</li>
      <li>Assinatura de contrato</li>
      <li>Kick-off</li>
    </ol>
  </section>

  <section id="sobre">
    <h2>9. Sobre a empresa</h2>
    <p><mini-bio do negócio></p>
  </section>

  <section id="contato">
    <h2>10. Contato</h2>
    <p><nome, cargo, email, telefone></p>
  </section>

  <footer>
    <p>Proposta válida até <data></p>
  </footer>
</body>
</html>
```

### 3. Geração

Salve em `saidas/propostas/proposta-<cliente>-<YYYY-MM-DD>.html`.

Use as cores e fonte de `identidade/design-guide.md`.

### 4. Renderização (opcional)

```bash
npx playwright screenshot saidas/propostas/proposta-<cliente>-<YYYY-MM-DD>.html \
  saidas/propostas/proposta-<cliente>-<YYYY-MM-DD>.png \
  --full-page
```

### 5. Publicação (opcional)

Se o usuário quiser publicar online (URL pública pra enviar), use `/publicar-site`.

### 6. Apresente

> "Proposta pronta. Como você quer usar?
> 1. Abrir o HTML localmente
> 2. Renderizar em PNG pra mandar como imagem
> 3. Publicar online (URL pública via Cloudflare Pages)"

## Regras

- **HTML completo e standalone** — sem dependências externas além de fontes do Google Fonts (se usar).
- **Cores de `design-guide.md`** — coerência visual com a marca.
- **"O que NÃO está incluído"** é tão importante quanto o que está. Use.
- **Investimento claro** — valor + condições. Sem ambiguidade.
- **Validade** — toda proposta expira. Defina uma data (15-30 dias).
- **Próximos passos explícitos** — não deixa o cliente sem saber o que fazer.
