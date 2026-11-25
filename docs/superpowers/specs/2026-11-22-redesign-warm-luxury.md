# Redesign Warm Luxury da Clínica Thaysa Medeiros

## Intent and why

Atualizar o site institucional da Clínica Thaysa Medeiros para refletir a identidade pública da marca no Instagram: sofisticação delicada, tratamentos naturais e credibilidade profissional. O redesign deve melhorar a percepção premium, facilitar o agendamento pelo WhatsApp e preservar todos os dados e páginas existentes.

## Goals

- Aplicar uma direção visual `warm luxury` inspirada na logo fornecida pela marca: “THAYSA MEDEIROS” em serifado dourado/rose, símbolo feminino alado em rosa e dourado, pérola, branco quente e grafite escuro como cor funcional.
- Tornar a página inicial mais editorial e menos escura, com fotografia real em evidência.
- Manter títulos, serviços, antes e depois, blog, contato e navegação já implementados.
- Adicionar transições suaves de entrada e rolagem sem prejudicar leitura, acessibilidade ou performance.
- Usar o conteúdo público do Instagram como referência visual e como ponto de entrada externo para acompanhamento da clínica.
- Garantir navegação responsiva, hierarquia clara e CTAs persistentes para WhatsApp.

## Non-goals

- Não alterar dados comerciais reais nem inventar avaliações, resultados ou credenciais.
- Não integrar uma API privada ou scraping de conteúdo do Instagram.
- Não remover páginas, rotas ou serviços existentes.
- Não trocar o sistema React/Vite/Tailwind atual.
- Não publicar ou alterar infraestrutura, domínio, DNS ou identidade profissional.

## Anti-goals

- Não conservar o visual predominantemente grafite escuro/dourado da versão atual.
- Não transformar o site em um catálogo genérico de procedimentos.
- Não usar animações contínuas que distraiam ou prejudiquem motion-sensitive users.
- Não usar o feed do Instagram como se fosse feed oficial sincronizado quando os dados forem estáticos/exemplo.

## Constraints

- Preservar a estrutura existente em React 18, React Router DOM, Tailwind CSS 3 e Framer Motion.
- Usar exclusivamente recursos já disponíveis no projeto, exceto fontes web instaladas via Google Fonts ou assets locais já aprovados.
- Usar a paleta derivada da marca: `#FFF9F4` branco quente, `#171318` grafite escuro, `#C89B45` dourado, `#E6A7B8` rosa pó e `#241A1E` grafite.
- Usar tipografia de display serifada elegante e body sans-serif moderna. A implementação pode usar `Cormorant Garamond` e `Manrope`.
- Todas as interações devem permanecer funcionais por teclado e ter estados de foco visíveis.
- Respeitar `prefers-reduced-motion`.
- Não quebrar build, type-check ou lint.

## Approaches

1. **Warm luxury editorial — recomendado:** fundo claro, contraste sofisticado, grandes áreas respiráveis, imagem clínica em destaque e CTAs dourado/rose. Preserve o caráter humano da marca e diferencia o site da estética dark/gold atual.
2. **Luxo noturno:** manter grafite escuro/dourado em uma versão mais refinada. É coerente com a primeira versão, mas entra em conflito com a delicadeza rosé/gold do Instagram.
3. **Clínico minimalista:** branco puro, grafite e tipografia neutra. É confiável, mas menos memorável e distante da identidade visual já usada pela marca.

## Visual system

- Header transparente sobre o hero claro, com a logo fornecida pela marca, nome da profissional e navegação em grafite.
- Ao rolar, header ganha fundo pérola com blur, borda suave e sombra leve.
- Hero dividido em texto/editorial e fotografia da clínica, com frames orgânicos, a logo completa da marca e badges de credibilidade sem recortar o símbolo ou a assinatura.
- Seções alternam off-white e branco, com títulos serifados, labels pequenos em uppercase e divisores dourados discretos.
- Cards de serviços com bordas suaves, imagem superior, microinteração de elevação e CTAs secundários claros.
- Resultados e depoimentos usam superfícies claras, sem excesso de brilho dourado.
- Instagram usa uma grade editorial de 6 imagens reais locais ou links oficiais; não mostrar placeholders permalink fictício em produção.
- CTA final em grafite escuro com texto claro e botão dourado/rose.
- Rodapé em grafite escuro com contatos, serviços, navegação e redes sociais.

## Motion

- Entrada inicial do hero em 400–700 ms com fade/slide, sem autoload pesado.
- Reveal progressivo de seções com Framer Motion enquanto entram na viewport.
- Hover e transição de cards em 300–500 ms.
- Header reagindo ao scroll em 300–400 ms.
- Menu mobile com animação de altura/opacidade.
- Redução automática de movimento quando `prefers-reduced-motion: reduce`.

## Content and data

- Preservar nome, WhatsApp, telefone, endereço e especialidade de `src/data/config.ts`.
- Ajustar o copy da home para “Farmacêutica Esteta | CRF-18203” sem inventar métricas não verificadas.
- Substituir placeholders de Instagram por posts reais somente quando URLs e imagens forem verificáveis.
- Até essa verificação, manter a seção como promoção oficial do perfil, sem IDs/permalinks fictícios.

## Remaining to builder

- Detalhar quais fotos locais são adequadas para cada seção; usar os arquivos existentes sem duplicar imagens sem necessidade.
- Ajustar copy final sem alterar procedimentos ou informações comerciais confirmadas.
- Implementar e revisar responsividade em mobile, tablet e desktop.
