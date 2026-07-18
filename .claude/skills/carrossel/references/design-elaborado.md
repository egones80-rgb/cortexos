---
name: design-elaborado
description: Estilo de design elaborado/editorial pra carrossel — gradientes, ruído, hierarquia complexa. Use pra conteúdo premium ou de marca.
---

# Design: Elaborado (editorial)

Estilo com peso. Hierarquia complexa, mas controlada.

## Características

- Backgrounds com gradiente sutil ou textura (SVG noise filter)
- Mistura de pesos tipográficos (light + bold)
- Elementos gráficos (linhas, blocos, ícones simples)
- 2-3 cores por slide, com hierarquia clara
- Layout assimétrico intencional (não centralizado)

## Paleta típica (exemplo)

- Background: gradiente diagonal de #1A1A2E pra #16213E
- Acento primário: #E94560
- Texto principal: #FFFFFF
- Texto secundário: #B8B8B8

## Tipografia

- Display: Playfair Display Bold, 64-80px (pra editorial)
- Corpo: Inter Regular, 18-22px
- Mono: JetBrains Mono, 14px (pra labels/dados)

## Layouts

### Layout 1: Editorial split
```
                ⟋  ESPAÇO BRANCO
    
    TÍTULO
    PRINCIPAL
    —
    Subtítulo
    descritivo
    
                ⟋  bloco de cor
```

### Layout 2: Estatístico com gráfico
```
    [barra/gráfico]
    
    10X
    
    o que mudou em
    2026
    
    — fonte / observação
```

### Layout 3: Citação com moldura
```
    ╭────────────────────────╮
    │                        │
    │   Frase aqui em        │
    │   itálico e bold       │
    │                        │
    ╰────────────────────────╯
           — nome, cargo
```

### Layout 4: Card empilhado
```
    ╔══════════════╗
    ║  CATEGORIA   ║
    ╠══════════════╣
    ║              ║
    ║  Conteúdo    ║
    ║  principal   ║
    ║              ║
    ╚══════════════╝
```

## Assets necessários

- **SVG noise filter** (textura sutil) — inline no HTML
- **Gradiente** — linearGradient SVG ou CSS
- **Ícones simples** (line icons) — opcional, max 1 por slide

## Regras

- **Hierarquia clara** mesmo com elementos múltiplos: 1 herói por slide.
- **Espaçamento respiratório**, senão fica poluído.
- **Máximo 3 cores** por slide.
- **Sempre** texto secundário em peso menor, mesmo tamanho de fonte menor.
- **Contraste mínimo AA** sempre (teste com WebAIM Contrast Checker).
