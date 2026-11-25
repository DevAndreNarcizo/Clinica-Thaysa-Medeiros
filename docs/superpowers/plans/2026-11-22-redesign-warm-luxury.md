# Redesign Warm Luxury Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implementar o redesign warm luxury completo no site React existente, com transições suaves, responsividade e integração clara ao WhatsApp e Instagram.

**Architecture:** A implementação será feita no site React/Vite atual, centralizando a identidade visual em Tailwind e CSS global e mantendo os dados existentes em `src/data`. A home será reestruturada com componentes já existentes; Header e Footer serão adaptados ao novo tema; os demais cards também receberão ajustes coerentes.

**Tech Stack:** React 18, TypeScript, Vite, React Router DOM, Tailwind CSS 3, Framer Motion, Lucide React.

**Spec:** `docs/superpowers/specs/2026-11-22-redesign-warm-luxury.md`

## Global Constraints

- Preserve todas as rotas existentes e os dados comerciais de `src/data/config.ts`.
- Use `#FFF9F4` como base clara, `#171318` como grafite escuro, `#C89B45` como dourado, `#E6A7B8` como rosa pó e `#241A1E` como grafite.
- Use a logo fornecida pela marca, com “THAYSA MEDEIROS”, símbolo feminino alado e assinatura `ESTÉTICA, BELEZA E BEM-ESTAR`; use apenas os assets aprovados: logo-horizontal.png no cabeçalho e rodapé e logo-round.png em selos circulares.
- Use `Cormorant Garamond` para display e `Manrope` para body, com fallbacks serif/sans.
- Preserve links oficiais de Instagram e WhatsApp.
- Implemente `prefers-reduced-motion`.
- Não adicione placeholders permalink fictício a links/permalinks públicos.

## Review Focus

- Validar viewports 320 px, 768 px e 1280 px; não pode haver overflow horizontal.
- Navegação mobile aberta/fechada deve manter leitura, scroll e CTA acionáveis; testar navegação por Tab e Escape.
- Header transparente/scrollado deve permanecer legível em hero claro e em todas as rotas.
- Seção Instagram não pode apontar para URLs fictícias.
- Texto e controles devem atender contraste WCAG AA em estados normal, hover e foco.
- Motion deve ser desativado ou reduzido para `prefers-reduced-motion: reduce`.
- Build, type-check e lint devem passar após mudanças em componentes compartilhados.

---

### Task 1: Definir o sistema visual global

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/index.css`
- Modify: `index.html`

**Interfaces:**
- Consumes: classes Tailwind existentes e imports de fontes.
- Produces: novas cores Tailwind `ivory`, `gold`, `gold-light`, `rose`, `blush`, `ink`, `dark` e famílias `display`/`body`.

- [ ] **Step 1: Atualizar a configuração Tailwind com a nova paleta**

Adicione as famílias e cores exatas da spec em `tailwind.config.ts`, mantendo a compatibilidade com classes existentes enquanto os componentes migram para o novo tema.

- [ ] **Step 2: Atualizar fontes e estilos globais**

Em `index.html`, importe `Cormorant Garamond` e `Manrope` pelo Google Fonts. Em `src/index.css`, defina CSS variables para ivory, ivory-light, gold, gold-light, rose, blush, ink e dark; defina scroll suave e estilos globais de seleção, foco e redução de movimento.

- [ ] **Step 3: Verificar a configuração**

Run: `npm run build`
Expected: PASS, sem erro de Tailwind ou TypeScript.

### Task 2: Atualizar Header e Footer

**Files:**
- Modify: `src/components/layout/Header.tsx`
- Modify: `src/components/layout/Footer.tsx`

**Interfaces:**
- Consumes: `siteConfig`, `formatWhatsAppLink`.
- Produces: header responsivo claro/scrollado e footer warm luxury sem quebrar links existentes.

- [ ] **Step 1: Implementar header claro**

Use fundo transparente no topo sobre hero claro; ao scrollar, use `bg-[#FFF9F4]/95`, backdrop blur, borda `ink/10` e texto escuro. No mobile, mantenha menu com animação e botão WhatsApp completo.

- [ ] **Step 2: Implementar footer warm luxury**

Use fundo dark, texto ivory, gold em detalhes e links com hover blush/gold. Preserve todas as categorias e links existentes.

- [ ] **Step 3: Verificar Header/Footer**

Run: `npm run type-check && npm run build`
Expected: PASS.

### Task 3: Reestruturar a página inicial

**Files:**
- Modify: `src/pages/Home.tsx`

**Interfaces:**
- Consumes: `featuredServices`, `siteConfig`, `formatWhatsAppLink`, `InstagramFeed`, `TestimonialSlider`.
- Produces: hero editorial, faixas de autoridade, serviços warm luxury, depoimentos, Instagram e CTA final.

- [ ] **Step 1: Substituir o hero dark por layout editorial claro**

Use grid 7/5 em desktop com copy à esquerda e imagem `/images/hero-bg.jpg` à direita em frame organic. Preserve a mendarkm de Dra. Thaysa, CRF-18203 e CTA WhatsApp.

- [ ] **Step 2: Migrar todas as seções da home para o tema claro**

Use ivory e branco em superfícies, ink em títulos, dark em elementos premium e blush/dourado em detalhes. Remova copy que afirma métricas não verificadas, especialmente contagens não validadas.

- [ ] **Step 3: Adicionar reveals com Framer Motion**

Crie uma utilidade local de motion para entrada em viewport, com duração 0.5–0.7 s e fallback sem motion quando `prefers-reduced-motion` estiver ativo.

- [ ] **Step 4: Verificar a home**

Run: `npm run type-check && npm run build`
Expected: PASS e a home deve renderizar com semântica/links preservados.

### Task 4: Redesenhar cards e feed do Instagram

**Files:**
- Modify: `src/components/ServiceCard.tsx`
- Modify: `src/components/InstagramFeed.tsx`
- Modify: `src/data/instagram.ts`

**Interfaces:**
- Consumes: `Service`, `InstagramPost`, `siteConfig`.
- Produces: cards claros com imagem, descrição e ações; feed sem permalinks fictícios.

- [ ] **Step 1: Transformar cards de serviço**

Use fundo ivory, bordas suaves, foto com borda arredondada e texto ink. Preserve duração, sessões, link para detalhe e Instagram/WhatsApp.

- [ ] **Step 2: Converter posts fictícios**

Em `src/data/instagram.ts`, remova IDs, captions e timestamps de exemplo. Deixe a seção apontar diretamente para `https://instagram.com/clinicathaysamedeiros` até os posts reais serem fornecidos ou verificados.

- [ ] **Step 3: Simplificar o feed**

Use 6 cards visuais apenas com imagens locais já existentes ou removê-los da listagem; cada card deve abrir o perfil oficial, não uma URL de permalink fictício.

- [ ] **Step 4: Verificar cards/feed**

Run: `npm run type-check && npm run build`
Expected: PASS e nenhum permalink contendo `permalink fictício`.

### Task 5: Revisão visual e responsiva

**Files:**
- Modify: `src/pages/*.tsx`
- Modify: `src/components/**/*.tsx`

- [ ] **Step 1: Alinhar superfícies das páginas secundárias**

Aplique a paleta warm luxury em About, Services, ServiceDetail, BeforeAfter, Contact, Blog e BlogPost sem remover conteúdo ou rotas.

- [ ] **Step 2: Validar responsividade**

Execute `npm run dev -- --host 0.0.0.0`, abra em viewport mobile e desktop e revise header, hero, cards, feed e footer.

- [ ] **Step 3: Executar validações finais**

Run: `npm run type-check && npm run lint && npm run build`
Expected: PASS.
