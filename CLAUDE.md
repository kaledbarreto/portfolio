# CLAUDE.md — Portfolio Kaled Barreto

Fonte de verdade do projeto. Edite este arquivo sempre que quiser mudar uma diretriz, convenção ou decisão de design. Claude Code lê isso automaticamente em toda sessão.

---

## Visão Geral

Portfolio pessoal de **Kaled Barreto** — Front-end Developer. Estética Digital Bauhaus / Neo-Memphis: formas geométricas puras em CSS, grid assimétrico, paleta de cores forte, tipografia com contraste extremo de peso.

**Objetivo de performance:** 95+ no Google Lighthouse em todos os eixos.  
**Deploy:** Vercel (zero-config — push para GitHub, deploy automático).

---

## Stack

| Tecnologia | Versão | Função |
|---|---|---|
| Next.js | 15 (App Router) | Framework — RSC por padrão |
| TypeScript | 5 (strict) | Tipagem em todo o projeto |
| Tailwind CSS | v4 (CSS-first) | Utilitários de layout e cores |
| next/font/google | — | Inter otimizado, sem render-blocking |

---

## Comandos

```bash
npm run dev      # servidor de desenvolvimento em localhost:3000
npm run build    # build de produção (deve terminar sem erros TS)
npm run start    # servir o build de produção localmente
npm run lint     # checar erros de lint
```

---

## Sistema de Design

### Paleta de Cores (imutável)

Definida em `app/globals.css` no bloco `@theme`. Gera classes Tailwind automaticamente.

```css
--color-creme:          #f4ebd9   /* fundo padrão de todas as seções */
--color-bauhaus-blue:   #1a66ff   /* azul dominante */
--color-bauhaus-red:    #e63917   /* vermelho-laranja vibrante */
--color-bauhaus-yellow: #f2d13d   /* amarelo primário */
--color-bauhaus-pink:   #f2b6c1   /* rosa de contraste suave */
--color-dark:           #111111   /* preto para tipografia, bordas, linhas */
```

**Uso:** `bg-bauhaus-blue`, `text-bauhaus-red`, `border-dark`, etc.

**Ritmo de cores por seção:**

| Seção | Fundo | Acento principal |
|---|---|---|
| Nav | `creme` | `bauhaus-red` (underline hover) |
| Hero | `creme` | `bauhaus-yellow` + `bauhaus-blue` |
| About `[01]` | `creme` | `bauhaus-blue` |
| Skills `[02]` | `creme` | `bauhaus-yellow` (topo) + `dark` |
| Projects `[03]` | `creme` | `bauhaus-red` (topo) — grid de cards, estado vazio elegante quando `projects[]` está vazio |
| Experience `[04]` | `dark` | `white` cards + `bauhaus-red` |
| Certifications `[05]` | `creme` | `bauhaus-blue` |
| Education `[06]` | `creme` | `bauhaus-pink` |
| Contact `[07]` | `bauhaus-blue` | `white` + `bauhaus-yellow` |

### Tipografia

- **Fonte:** Inter (carregada via `next/font/google` — 400, 600, 700, 900)
- **Headings:** `font-black` (900), `tracking-tight`, `leading-[0.88]–[0.9]`
- **Tamanhos fluidos:** sempre usar `clamp()` via `style={{ fontSize: 'clamp(...)' }}`
- **Labels de seção:** `text-xs font-semibold uppercase tracking-[0.2em]`
- **Body:** `text-base` ou `text-lg`, `leading-[1.8]–[1.85]`

### Elementos Geométricos

Todas as formas são divs HTML com CSS puro — **zero imagens** para gráficos.

- Círculo: `border-radius: 50%`
- Semicírculo: `border-radius: Xpx Xpx 0 0` (metade da largura no raio)
- Padrão de pontos: classe `.dot-pattern` (definida em `globals.css`)
- Linhas industriais: classe `.line-pattern` (definida em `globals.css`)

### Bordas e Sombras

```css
/* Bordas: sempre sólidas, sempre --dark */
border-2 border-dark   /* padrão */
border-[6px]           /* destaque (topo dos cert cards) */

/* Shadow-shift hover (interação principal dos cards) */
.card-hover            /* definida em globals.css — use como classe Tailwind */
/* Efeito: card sobe (-4px,-4px), sombra cresce (4px→8px) */
```

### O que é PROIBIDO neste projeto

- Glassmorphism (backdrop-blur, transparências em camadas)
- Dark mode genérico + neon + gradientes brilhantes
- Framer Motion ou qualquer biblioteca de animação JS
- Imagens externas para gráficos decorativos
- `box-shadow` com blur (apenas hard shadows offset: `X Y 0 #111`)
- Fontes além de Inter

---

## Arquitetura

### Regra Server vs Client Component

> **Padrão:** todos os componentes são Server Components (sem `'use client'`).  
> **Exceção:** apenas `Nav.tsx` é Client Component (precisa de `useState` para o menu mobile).

Nunca adicionar `'use client'` sem necessidade — prejudica o Lighthouse.

### Estrutura de Arquivos

```
portfolio/
├── app/
│   ├── layout.tsx          ← Inter font, metadata, metadataBase, globals.css
│   ├── page.tsx            ← Compõe todas as seções em ordem
│   ├── globals.css         ← @theme colors, @layer utilities, keyframes
│   ├── opengraph-image.tsx ← OG image gerada via next/og (ImageResponse), sem asset externo
│   ├── robots.ts           ← robots.txt gerado
│   └── sitemap.ts          ← sitemap.xml gerado
├── components/
│   ├── Nav.tsx             ← 'use client' — único
│   ├── Hero.tsx            ← Nome + tagline com efeito typewriter (CSS puro, centralizado)
│   ├── About.tsx           ← Seção [01]
│   ├── Skills.tsx          ← Seção [02] — 3 grupos de chips
│   ├── Projects.tsx        ← Seção [03] — grid de cards (estado vazio se `projects[]` vazio)
│   ├── Experience.tsx      ← Seção [04] — timeline wrapper
│   ├── ExperienceCard.tsx  ← Card individual de experiência
│   ├── Certifications.tsx  ← Seção [05] — grid 4 cards
│   ├── Education.tsx       ← Seção [06] — 3 strips horizontais
│   └── Contact.tsx         ← Seção [07] — fundo azul, CTA
├── lib/
│   ├── data.ts             ← ÚNICA fonte de conteúdo (ver abaixo)
│   └── site.ts             ← siteUrl (kaledbarreto.com.br)
└── public/
    └── favicon.svg
```

---

## Como Atualizar Conteúdo

**Regra de ouro:** todo conteúdo fica em `lib/data.ts`. Nunca hardcode texto de portfólio dentro dos componentes.

### Adicionar experiência

Em `lib/data.ts`, adicione um objeto ao array `experience[]`:

```typescript
{
  company: 'Nome da empresa',
  role: 'Cargo',
  period: 'Mês Ano – Mês Ano',
  bullets: [
    'Descrição do que foi feito.',
  ],
}
```

### Adicionar projeto

Em `lib/data.ts`, adicione um objeto ao array `projects[]` (fica vazio até você preencher — a seção mostra um estado "coming soon" enquanto isso). `ProjectItem` é uma union discriminada por `type`, renderizada em até três grupos separados (só aparecem se tiverem itens): **Client & Agency Work**, **Freelance Client Work** e **Personal Projects**.

Só o tipo `personal` pode levar `repoUrl` — `agency` e `freelance` são ambos entregas reais de cliente (o código pertence ao cliente), o TypeScript bloqueia `repoUrl` neles em build.

Campo opcional `image` (qualquer tipo): caminho de um screenshot em `public/`, ex. `'/boxonboard.png'`. Renderizado no topo do card via `next/image` com `fill` dentro de um container `aspect-[5/3]` — mantenha os screenshots em proporção parecida (a seção foi calibrada para ~5:3, tipo 1660×982) pra não distorcer o `object-cover`.

**`agency`** — feito através de uma empresa empregadora, com um time:

```typescript
{
  type: 'agency',
  company: 'Nome da empresa',
  title: 'Nome do projeto',
  description: 'O que o projeto faz e seu papel nele, em 1-2 frases.',
  stack: ['React', 'TypeScript'],
  liveUrl: 'https://...',   // opcional — só se o site for público
  accentColor: '#1a66ff',   // use uma das cores da paleta
}
```

**`freelance`** — cliente real, mas feito sozinho e sem vínculo com nenhuma empresa empregadora (sem campo `company`):

```typescript
{
  type: 'freelance',
  title: 'Nome do projeto',
  description: 'O que o projeto faz, em 1-2 frases.',
  stack: ['React', 'TypeScript'],
  liveUrl: 'https://...',   // opcional — só se o site for público
  accentColor: '#f2d13d',   // use uma das cores da paleta
}
```

**`personal`** — projeto seu de verdade (hobby/estudo), pode levar `repoUrl`:

```typescript
{
  type: 'personal',
  title: 'Nome do projeto',
  description: 'O que o projeto faz, em 1-2 frases.',
  stack: ['React', 'TypeScript'],
  liveUrl: 'https://...',   // opcional
  repoUrl: 'https://...',   // opcional
  accentColor: '#e63917',   // use uma das cores da paleta
}
```

### Adicionar certificação

```typescript
{
  title: 'Título do certificado',
  issuer: 'Emissor',
  year: '2025',
  accentColor: '#1a66ff',  // use uma das cores da paleta
}
```

### Adicionar entrada de educação

```typescript
{
  degree: 'Grau e curso',
  institution: 'Nome da instituição',
  period: '2020 – 2024',
  initials: 'SIGLA',  // aparece no badge amarelo
}
```

### Alterar links de contato

```typescript
export const links = {
  email: 'seuemail@gmail.com',
  linkedin: 'linkedin.com/in/seu-perfil',
  github: 'github.com/seu-usuario',
}
```

---

## Convenções de CSS

### Prioridade de uso

1. **Classes Tailwind** — layout, espaçamento, cores, tipografia
2. **Inline `style={{}}`** — valores dinâmicos (ex: `animationDelay`, `accentColor` do data.ts), tamanhos pixel-perfect de formas geométricas, `fontSize: 'clamp(...)'`
3. **`globals.css` `@layer utilities`** — classes customizadas reutilizáveis (`.card-hover`, `.dot-pattern`, `.line-pattern`, `.skill-chip`, `.nav-link`, `.contact-link`)

### Nunca fazer

- Criar arquivo `.module.css` — não usa CSS Modules neste projeto
- Usar `@apply` no Tailwind v4 — use classes diretamente no JSX
- Adicionar `will-change: transform` em massa — apenas em elementos com hover interativo

### Animações

Definidas como `@keyframes` em `globals.css`. A classe `.animate-shape` é usada nas formas do Hero.
Sempre adicionar `animationDelay` via inline style para staggers.
O `prefers-reduced-motion` em `globals.css` desabilita todas as animações automaticamente.

---

## Performance e Acessibilidade

- Cada `<section>` tem `id` + `aria-labelledby` apontando para o `<h2>` interno
- Hierarquia de headings: `<h1>` (nome no Hero) → `<h2>` (título de cada seção) → `<h3>` (cargos, certificados)
- Elementos puramente decorativos: sempre `aria-hidden="true"`
- Skip-to-content link no `layout.tsx` (primeiro elemento focável do `<body>`)
- Imagens (se algum dia adicionadas): `width` + `height` + `loading="lazy"`
- Contraste mínimo WCAG AA: dark-on-creme ≈12:1, white-on-blue ≈4.7:1

---

## Mudanças Frequentes — Checklist

Ao fazer qualquer alteração, verificar:

- [ ] `npm run build` termina sem erros TypeScript
- [ ] Responsivo funciona em 375px, 768px, 1024px, 1440px
- [ ] Nenhuma forma geométrica quebra em mobile
- [ ] Contraste de cores mantido
- [ ] Nenhuma biblioteca JS de animação foi adicionada
