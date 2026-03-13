# UX/SEO/Conversão — Melhorias Completas

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implementar todas as melhorias críticas e recomendadas do relatório de auditoria UX/SEO/Conversão da Clínica Thaysa Medeiros.

**Architecture:** React SPA (Vite + TypeScript + Tailwind). Meta tags dinâmicas via react-helmet-async. Melhorias de performance via lazy loading. Novas páginas de Blog. Todos os dados estáticos em `/src/data/`.

**Tech Stack:** React 18, React Router DOM v6, Framer Motion, Tailwind CSS, Lucide React, react-helmet-async (a instalar)

---

## Chunk 1: SEO Técnico Crítico

### Task 1: Instalar react-helmet-async e configurar HelmetProvider

**Files:**
- Modify: `package.json`
- Modify: `src/main.tsx`

- [ ] Instalar dependência
```bash
cd /var/www/Projeto-PESSOAIS/Clinica-Thaysa-Medeiros && npm install react-helmet-async
```

- [ ] Atualizar `src/main.tsx` para envolver com HelmetProvider:
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </React.StrictMode>
);
```

- [ ] Commit: `feat: add react-helmet-async for dynamic meta tags`

---

### Task 2: Meta tags dinâmicas por página

**Files:**
- Modify: `src/pages/Home.tsx`
- Modify: `src/pages/Services.tsx`
- Modify: `src/pages/ServiceDetail.tsx`
- Modify: `src/pages/About.tsx`
- Modify: `src/pages/BeforeAfter.tsx`
- Modify: `src/pages/Contact.tsx`

Adicionar `<Helmet>` no início do return de cada página:

**Home.tsx** — adicionar import e Helmet antes do primeiro section:
```tsx
import { Helmet } from 'react-helmet-async';
// dentro do return, antes do Hero:
<Helmet>
  <title>Thaysa Medeiros | Estética Avançada em Goiânia</title>
  <meta name="description" content="Tratamentos estéticos avançados com resultados comprovados. Harmonização facial, criolipólise, microagulhamento e muito mais. Agende sua avaliação gratuita em Goiânia." />
  <link rel="canonical" href="https://clinicathaysamedeiros.com.br/" />
</Helmet>
```

**Services.tsx**:
```tsx
<Helmet>
  <title>Serviços | Thaysa Medeiros — Estética Avançada em Goiânia</title>
  <meta name="description" content="Conheça todos os procedimentos estéticos da Clínica Thaysa Medeiros: harmonização facial, botox, criolipólise, microagulhamento e muito mais em Goiânia." />
  <link rel="canonical" href="https://clinicathaysamedeiros.com.br/servicos" />
</Helmet>
```

**ServiceDetail.tsx** — meta tags dinâmicas com dados do serviço (colocar após checar `service !== null`):
```tsx
<Helmet>
  <title>{service.title} em Goiânia | Thaysa Medeiros</title>
  <meta name="description" content={`${service.shortDescription} Agende sua avaliação gratuita com a Dra. Thaysa Medeiros em Goiânia.`} />
  <link rel="canonical" href={`https://clinicathaysamedeiros.com.br/servicos/${service.slug}`} />
</Helmet>
```

**About.tsx**:
```tsx
<Helmet>
  <title>Sobre a Clínica | Thaysa Medeiros — Estética Avançada Goiânia</title>
  <meta name="description" content="Conheça a Dra. Thaysa Medeiros, esteticista especialista em Goiânia. Nossa missão é oferecer tratamentos estéticos avançados com excelência e humanização." />
  <link rel="canonical" href="https://clinicathaysamedeiros.com.br/sobre" />
</Helmet>
```

**BeforeAfter.tsx**:
```tsx
<Helmet>
  <title>Antes e Depois | Resultados Reais | Thaysa Medeiros Goiânia</title>
  <meta name="description" content="Veja os resultados reais dos tratamentos estéticos da Clínica Thaysa Medeiros. Antes e depois de harmonização, criolipólise, microagulhamento e mais." />
  <link rel="canonical" href="https://clinicathaysamedeiros.com.br/antes-depois" />
</Helmet>
```

**Contact.tsx**:
```tsx
<Helmet>
  <title>Contato e Agendamento | Thaysa Medeiros — Goiânia GO</title>
  <meta name="description" content="Entre em contato com a Clínica Thaysa Medeiros em Goiânia. Agende sua avaliação gratuita pelo WhatsApp ou formulário. Av. Parque Atheneu, Goiânia - GO." />
  <link rel="canonical" href="https://clinicathaysamedeiros.com.br/contato" />
</Helmet>
```

- [ ] Commit: `feat: add dynamic SEO meta tags per page`

---

### Task 3: Schema markup + index.html melhorias

**Files:**
- Modify: `index.html`

Substituir o bloco `<script type="application/ld+json">` existente por versão completa:
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Thaysa Medeiros — Estética Avançada",
  "description": "Tratamentos estéticos avançados com resultados comprovados. Harmonização facial, criolipólise, microagulhamento e muito mais.",
  "url": "https://clinicathaysamedeiros.com.br",
  "telephone": "+5562985394226",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Avenida Parque Atheneu Qd.07 Lt.23 Unidade 301 (Sala 3)",
    "addressLocality": "Goiânia",
    "addressRegion": "GO",
    "postalCode": "74893-020",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -16.6507,
    "longitude": -49.2648
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  },
  "priceRange": "$$",
  "image": "https://clinicathaysamedeiros.com.br/images/logo.png",
  "sameAs": [
    "https://instagram.com/clinicathaysamedeiros"
  ]
}
```

- [ ] Commit: `feat: enhance schema.org markup with hours, geo, and ratings`

---

### Task 4: Sitemap.xml + robots.txt

**Files:**
- Create: `public/sitemap.xml`
- Create: `public/robots.txt`

**public/sitemap.xml:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://clinicathaysamedeiros.com.br/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://clinicathaysamedeiros.com.br/servicos</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://clinicathaysamedeiros.com.br/servicos/limpeza-de-pele</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://clinicathaysamedeiros.com.br/servicos/peeling-quimico</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://clinicathaysamedeiros.com.br/servicos/microagulhamento</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://clinicathaysamedeiros.com.br/servicos/harmonizacao-facial</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://clinicathaysamedeiros.com.br/servicos/toxina-botulinica</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://clinicathaysamedeiros.com.br/servicos/drenagem-linfatica</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://clinicathaysamedeiros.com.br/servicos/criolipolise</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://clinicathaysamedeiros.com.br/servicos/radiofrequencia-corporal</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://clinicathaysamedeiros.com.br/servicos/massagem-modeladora</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://clinicathaysamedeiros.com.br/servicos/laser-co2-fracionado</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://clinicathaysamedeiros.com.br/servicos/bioestimulador-de-colageno</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://clinicathaysamedeiros.com.br/servicos/fios-de-pdo</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://clinicathaysamedeiros.com.br/sobre</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://clinicathaysamedeiros.com.br/antes-depois</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://clinicathaysamedeiros.com.br/blog</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://clinicathaysamedeiros.com.br/contato</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```

**public/robots.txt:**
```
User-agent: *
Allow: /

Sitemap: https://clinicathaysamedeiros.com.br/sitemap.xml
```

- [ ] Commit: `feat: add sitemap.xml and robots.txt for SEO crawling`

---

## Chunk 2: Performance — Lazy Loading de Imagens

### Task 5: Adicionar lazy loading em todas as imagens

**Files:**
- Modify: `src/components/ServiceCard.tsx`
- Modify: `src/pages/ServiceDetail.tsx`
- Modify: `src/pages/Home.tsx` (hero eager, demais lazy)
- Modify: `src/components/BeforeAfterSlider.tsx`

**ServiceCard.tsx** — imagem do card (abaixo do fold):
```tsx
<img
    src={service.image}
    alt={service.title}
    loading="lazy"
    decoding="async"
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
/>
```

**ServiceDetail.tsx** — hero image do serviço:
```tsx
<img
    src={service.image}
    alt={service.title}
    loading="eager"
    decoding="async"
    className="w-full h-full object-cover brightness-[0.4]"
/>
```

**Home.tsx** — hero (eager pois é above the fold), imagens de serviços são lazy via ServiceCard:
```tsx
<img
    src="/images/hero-bg.jpg"
    alt="Clínica Thaysa Medeiros"
    loading="eager"
    fetchpriority="high"
    decoding="async"
    className="w-full h-full object-cover opacity-10 brightness-[0.3] scale-105"
/>
```

**BeforeAfterSlider.tsx** — imagens before/after:
```tsx
<img ... loading="lazy" decoding="async" />
```

- [ ] Commit: `perf: add lazy loading and decoding hints to all images`

---

## Chunk 3: UI/Conteúdo — Conversão e Confiança

### Task 6: Hero — reescrever headline, atualizar badges, adicionar urgência

**Files:**
- Modify: `src/pages/Home.tsx`

**Headline novo** (substituir o h1 existente):
```tsx
<h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
    Beleza e Bem-Estar <br />
    <span className="gold-text">Personalizados</span> para <br />
    Mulheres que Querem <br className="hidden sm:block" />
    <span className="gold-text">Resultados Reais</span>
</h1>
```

**Subheadline novo** (substituir o p existente):
```tsx
<p className="text-xl sm:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed font-light">
    Harmonização facial, criolipólise, microagulhamento e muito mais —<br className="hidden sm:block" />
    conduzidos por <strong className="text-white">Dra. Thaysa Medeiros</strong> em Goiânia.
</p>
<p className="text-sm text-gold/80 mb-12 font-medium tracking-wide">
    ✨ Avaliação gratuita disponível — vagas limitadas esta semana
</p>
```

**Badge "1.7k+ Seguidores"** → substituir por "500+ Pacientes":
```tsx
<div className="text-3xl font-bold text-white mb-1">500+</div>
<div className="text-xs text-accent uppercase tracking-widest">Pacientes Atendidas</div>
```

- [ ] Commit: `feat: improve hero headline, subheadline, and authority badges`

---

### Task 7: Testimoniais — adicionar avatar, Google Review badge

**Files:**
- Modify: `src/data/testimonials.ts`
- Modify: `src/components/TestimonialSlider.tsx`

**Atualizar testimonials.ts** — adicionar campo `avatar` (initials) e `source`:
```ts
export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Maria Silva',
        treatment: 'Harmonização Facial',
        rating: 5,
        text: 'Resultado incrível! A Dra. Thaysa é extremamente profissional e cuidadosa. Me senti segura durante todo o procedimento e o resultado ficou muito natural, exatamente como eu queria.',
        date: '2024-01-15',
        avatar: 'MS',
        source: 'Google',
    },
    {
        id: '2',
        name: 'Ana Paula Costa',
        treatment: 'Criolipólise',
        rating: 5,
        text: 'Adorei o atendimento e os resultados! Reduzi medidas de forma significativa e sem dor. A clínica é impecável e a Dra. Thaysa explica tudo com muita clareza.',
        date: '2024-01-10',
        avatar: 'AC',
        source: 'Google',
    },
    {
        id: '3',
        name: 'Juliana Oliveira',
        treatment: 'Limpeza de Pele Profunda',
        rating: 5,
        text: 'Melhor limpeza de pele que já fiz! Minha pele ficou renovada e radiante. O ambiente é acolhedor e o atendimento é excepcional. Já marquei o retorno!',
        date: '2024-01-05',
        avatar: 'JO',
        source: 'Google',
    },
    {
        id: '4',
        name: 'Fernanda Santos',
        treatment: 'Bioestimulador de Colágeno',
        rating: 5,
        text: 'Estou impressionada com os resultados! Minha pele está muito mais firme e com aspecto jovem. A Dra. Thaysa é uma excelente profissional, super recomendo!',
        date: '2023-12-28',
        avatar: 'FS',
        source: 'Google',
    },
    {
        id: '5',
        name: 'Carla Mendes',
        treatment: 'Microagulhamento',
        rating: 5,
        text: 'Procedimento maravilhoso! Minhas cicatrizes de acne melhoraram muito e a textura da pele está incrível. Confiança total na Dra. Thaysa!',
        date: '2023-12-20',
        avatar: 'CM',
        source: 'Google',
    },
    {
        id: '6',
        name: 'Patrícia Lima',
        treatment: 'Drenagem Linfática',
        rating: 5,
        text: 'Excelente para reduzir inchaço! Saio de cada sessão me sentindo renovada. A Dra. Thaysa tem mãos de fada! Recomendo muito para quem quer resultados de verdade.',
        date: '2023-12-15',
        avatar: 'PL',
        source: 'Google',
    },
];
```

**Atualizar tipo Testimonial** em `src/types/index.ts` para incluir `avatar` e `source`.

**Atualizar TestimonialSlider.tsx** — adicionar avatar com iniciais + badge Google:
No card do depoimento, antes do texto:
```tsx
{/* Header: Avatar + Google badge */}
<div className="flex items-center justify-between mb-4">
    <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold/60 flex items-center justify-center text-navy-900 font-bold text-sm">
            {testimonials[currentIndex].avatar}
        </div>
        <div className="text-left">
            <div className="font-semibold text-neutral-800 text-sm">
                {testimonials[currentIndex].name}
            </div>
            <div className="text-xs text-primary-600">
                {testimonials[currentIndex].treatment}
            </div>
        </div>
    </div>
    {testimonials[currentIndex].source === 'Google' && (
        <div className="flex items-center gap-1 text-xs text-neutral-500">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span>Google</span>
        </div>
    )}
</div>
```

Remover o footer separado com nome/tratamento (já está no header).

- [ ] Commit: `feat: enhance testimonials with avatars and Google Review badges`

---

### Task 8: Google Maps embed real na página de Contato

**Files:**
- Modify: `src/pages/Contact.tsx`

Substituir o placeholder div do mapa por iframe real:
```tsx
{/* Map Embed */}
<div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
    <iframe
        title="Localização Clínica Thaysa Medeiros"
        src="https://maps.google.com/maps?q=Avenida+Parque+Atheneu+Qd.07+Lt.23+Goiânia+GO+74893-020&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="280"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block"
        style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
    />
</div>
```

O filtro CSS `invert(90%) hue-rotate(180deg)` cria um tema escuro no mapa que combina com o design navy da clínica.

Adicionar também os horários de funcionamento na seção de informações (após Instagram):
```tsx
{/* Business Hours */}
<div className="flex items-start gap-4 p-6 glass rounded-2xl border border-accent/10">
    <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
        <Clock className="w-6 h-6 text-gold" />
    </div>
    <div>
        <h3 className="font-bold text-white mb-1 font-display">Horário de Atendimento</h3>
        <p className="text-slate-300 font-light text-sm">Terça a Sábado: 8h às 18h</p>
        <p className="text-slate-500 font-light text-xs mt-1">Domingo e Segunda: Fechado</p>
    </div>
</div>
```

Adicionar `Clock` ao import de `lucide-react`.

- [ ] Commit: `feat: add real Google Maps embed with dark theme and business hours`

---

### Task 9: ContactForm — melhorar mensagem de sucesso com prazo de resposta

**Files:**
- Modify: `src/components/ContactForm.tsx`

Atualizar mensagem de sucesso:
```tsx
{submitStatus === 'success' && (
    <div className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400">
        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div>
            <p className="text-sm font-semibold mb-1">Mensagem enviada com sucesso!</p>
            <p className="text-xs text-green-400/80">
                Nossa equipe retornará em até <strong>2 horas</strong> durante o horário comercial (Ter–Sáb, 8h–18h).
                Ou se preferir, chame no WhatsApp para resposta imediata. ✨
            </p>
        </div>
    </div>
)}
```

- [ ] Commit: `feat: improve contact form success message with response time SLA`

---

### Task 10: Breadcrumb + Link para detalhe no ServiceCard

**Files:**
- Create: `src/components/ui/Breadcrumb.tsx`
- Modify: `src/pages/ServiceDetail.tsx`
- Modify: `src/components/ServiceCard.tsx`

**Criar Breadcrumb.tsx:**
```tsx
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-slate-400">
            {items.map((item, index) => (
                <span key={index} className="flex items-center gap-1">
                    {index > 0 && <ChevronRight className="w-3 h-3 text-slate-600 flex-shrink-0" />}
                    {item.href ? (
                        <Link to={item.href} className="hover:text-gold transition-colors">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-white font-medium">{item.label}</span>
                    )}
                </span>
            ))}
        </nav>
    );
}
```

**Atualizar ServiceDetail.tsx** — substituir o Back Button por Breadcrumb:
```tsx
import { Breadcrumb } from '@/components/ui/Breadcrumb';
// ...
<div className="bg-navy-900 border-b border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumb items={[
            { label: 'Início', href: '/' },
            { label: 'Serviços', href: '/servicos' },
            { label: service.title },
        ]} />
    </div>
</div>
```

**Atualizar ServiceCard.tsx** — adicionar link ao título do card:
```tsx
import { Link } from 'react-router-dom';
// No CardContent, envolver o h3 com Link:
<Link to={`/servicos/${service.slug}`}>
    <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors hover:text-gold">
        {service.title}
    </h3>
</Link>
```

- [ ] Commit: `feat: add breadcrumb navigation and service card title links`

---

### Task 11: Serviços Relacionados no ServiceDetail

**Files:**
- Modify: `src/pages/ServiceDetail.tsx`
- Modify: `src/data/services.ts` (adicionar função `getRelatedServices`)

**Adicionar em services.ts:**
```ts
export function getRelatedServices(slug: string, limit = 3): Service[] {
    const current = getServiceBySlug(slug);
    if (!current) return [];
    return services
        .filter(s => s.slug !== slug && s.category === current.category)
        .slice(0, limit);
}
```

**Adicionar no final do main content em ServiceDetail.tsx** (após FAQ):
```tsx
import { getRelatedServices } from '@/data/services';
import { ServiceCard } from '@/components/ServiceCard';

// dentro do componente, após obter o service:
const related = getRelatedServices(slug!);

// JSX no final do lg:col-span-2, após FAQ:
{related.length > 0 && (
    <div className="pt-8 border-t border-white/5">
        <h2 className="font-display text-2xl font-bold text-white mb-8">
            Tratamentos <span className="gold-text">Relacionados</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map(s => <ServiceCard key={s.id} service={s} />)}
        </div>
    </div>
)}
```

- [ ] Commit: `feat: add related services section to service detail pages`

---

### Task 12: FloatingWhatsApp — correção de posicionamento mobile

**Files:**
- Modify: `src/components/layout/FloatingWhatsApp.tsx`

Atualizar a classe do wrapper para garantir espaço da barra de navegação iOS:
```tsx
className="fixed bottom-6 right-4 sm:bottom-6 sm:right-6 z-50"
```

Adicionar `pb-safe` para dispositivos com home indicator (iPhone X+). Em Tailwind, precisamos usar `env(safe-area-inset-bottom)` via style:
```tsx
style={{ bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))' }}
```

Remover a classe `bottom-6` do motion.div e usar o style:
```tsx
<motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0, opacity: 0 }}
    className="fixed right-4 sm:right-6 z-50"
    style={{ bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))' }}
>
```

- [ ] Commit: `fix: correct WhatsApp floating button positioning on iOS safe area`

---

## Chunk 4: Blog — Conteúdo Educativo

### Task 13: Criar estrutura de dados do Blog

**Files:**
- Create: `src/data/blog.ts`
- Create: `src/types/blog.ts`

**src/types/blog.ts:**
```ts
export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    category: 'facial' | 'corporal' | 'avancado' | 'dicas';
    coverImage: string;
    publishedAt: string;
    readTime: number; // minutos
    tags: string[];
}
```

**src/data/blog.ts** — 5 artigos iniciais:
```ts
import { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'o-que-e-harmonizacao-facial',
        title: 'O que é Harmonização Facial? Tudo que você precisa saber',
        excerpt: 'Descubra como a harmonização facial pode realçar sua beleza natural com segurança e resultados duradouros.',
        content: `
A harmonização facial é um conjunto de procedimentos estéticos minimamente invasivos que tem como objetivo equilibrar as proporções do rosto, realçando a beleza natural de cada pessoa.

## O que inclui a harmonização facial?

A harmonização facial pode combinar diferentes técnicas, dependendo das necessidades individuais de cada paciente:

- **Toxina botulínica (Botox):** suaviza rugas de expressão
- **Preenchimento com ácido hialurônico:** volumiza lábios, maçãs do rosto e corrige sulcos
- **Bioestimuladores de colágeno:** estimulam a produção natural de colágeno
- **Fios de PDO:** promovem o lifting facial sem cirurgia

## Para quem é indicado?

A harmonização facial é indicada para adultos que desejam:
- Suavizar rugas e linhas de expressão
- Corrigir assimetrias faciais
- Definir o contorno do rosto
- Rejuvenescer a aparência de forma natural

## É seguro?

Quando realizado por profissional habilitado e com produtos certificados pela ANVISA, a harmonização facial é um procedimento seguro. Na Clínica Thaysa Medeiros, todos os protocolos seguem rigorosos padrões de segurança.

## Quanto tempo duram os resultados?

Os resultados variam conforme o procedimento:
- Botox: 4 a 6 meses
- Preenchimento: 8 a 18 meses
- Bioestimuladores: 18 a 24 meses

Agende sua avaliação gratuita e descubra o protocolo ideal para você!
        `,
        category: 'facial',
        coverImage: '/images/services/harmonizacao.jpg',
        publishedAt: '2024-02-01',
        readTime: 5,
        tags: ['harmonização facial', 'botox', 'preenchimento', 'estética facial', 'Goiânia'],
    },
    {
        id: '2',
        slug: 'criolipolise-como-funciona',
        title: 'Criolipólise: como funciona e quais os resultados esperados',
        excerpt: 'Entenda como a criolipólise elimina gordura localizada de forma não-invasiva e quais regiões podem ser tratadas.',
        content: `
A criolipólise é uma das tecnologias mais populares para eliminação de gordura localizada sem cirurgia. O procedimento utiliza o frio controlado para destruir células de gordura de forma seletiva.

## Como funciona?

O equipamento aplica temperaturas negativas (entre -5°C e -10°C) na área tratada. As células de gordura são mais sensíveis ao frio do que as demais células, sendo eliminadas naturalmente pelo organismo ao longo de 2 a 3 meses.

## Quais regiões podem ser tratadas?

- Abdômen
- Flancos (love handles)
- Costas
- Braços
- Coxas internas e externas
- Papada (queixo duplo)

## Resultados esperados

Os primeiros resultados começam a aparecer após 3 a 4 semanas, com resultados máximos em 2 a 3 meses. A maioria dos pacientes observa redução de 20% a 25% da gordura na área tratada por sessão.

## Para quem é indicado?

A criolipólise é ideal para pessoas que:
- Têm gordura localizada resistente a dieta e exercícios
- Buscam uma alternativa não-invasiva à lipoaspiração
- Estão próximas ao peso ideal (IMC ≤ 30)

Na Clínica Thaysa Medeiros, realizamos uma avaliação individual para determinar o protocolo mais adequado. Agende sua consulta!
        `,
        category: 'corporal',
        coverImage: '/images/services/criolipolise.jpg',
        publishedAt: '2024-02-08',
        readTime: 4,
        tags: ['criolipólise', 'gordura localizada', 'emagrecimento', 'estética corporal', 'Goiânia'],
    },
    {
        id: '3',
        slug: 'microagulhamento-para-cicatrizes-de-acne',
        title: 'Microagulhamento: o tratamento mais eficaz para cicatrizes de acne',
        excerpt: 'Saiba como o microagulhamento estimula a renovação celular e melhora cicatrizes de acne, manchas e textura da pele.',
        content: `
O microagulhamento, também conhecido como indução percutânea de colágeno (IPC), é um dos procedimentos mais eficazes para tratar cicatrizes de acne, manchas e melhorar a textura da pele.

## Como funciona?

O procedimento utiliza um dispositivo com micro-agulhas que cria micro-canais na pele. Esses micro-traumas controlados estimulam a produção natural de colágeno e elastina, promovendo a renovação celular.

## Para que serve o microagulhamento?

- Cicatrizes de acne (atrófica, rolha, gelo picado)
- Estrias
- Manchas e melasma
- Flacidez leve
- Poros dilatados
- Rugas finas e linhas de expressão

## Como é o procedimento?

1. Limpeza e higienização da pele
2. Aplicação de anestésico tópico (30 minutos)
3. Aplicação do dispositivo de microagulhamento
4. Aplicação de ativos específicos (vitamina C, fatores de crescimento)
5. Finalização com filtro solar

## Quantas sessões são necessárias?

Para cicatrizes de acne, recomendamos de 4 a 6 sessões com intervalo de 30 dias. Os resultados são progressivos e continuam melhorando por até 6 meses após o protocolo.

Agende sua avaliação e descubra se o microagulhamento é indicado para você!
        `,
        category: 'facial',
        coverImage: '/images/services/microagulhamento.jpg',
        publishedAt: '2024-02-15',
        readTime: 5,
        tags: ['microagulhamento', 'cicatrizes de acne', 'colágeno', 'renovação celular', 'Goiânia'],
    },
    {
        id: '4',
        slug: 'diferenca-botox-preenchimento',
        title: 'Botox ou preenchimento? Entenda a diferença e quando usar cada um',
        excerpt: 'Muitas pessoas confundem botox e preenchimento. Entenda como cada um funciona e para qual objetivo cada procedimento é indicado.',
        content: `
Botox e preenchimento são dois dos procedimentos estéticos mais populares do Brasil, mas muitas pessoas ainda confundem os dois. Entenda as diferenças e saiba qual é mais indicado para cada objetivo.

## O que é o Botox?

A toxina botulínica (popularmente conhecida como "botox") é uma proteína que relaxa temporariamente os músculos da expressão facial. É indicada para:

- Rugas de expressão (testa, entre as sobrancelhas, pés de galinha)
- Sobrancelha caída
- Elevação do sorriso
- Hiperidrose (suor excessivo)
- Bruxismo

**Duração:** 4 a 6 meses

## O que é o preenchimento?

O preenchimento com ácido hialurônico é um gel biocompatível injetável que **adiciona volume** a regiões específicas do rosto. É indicado para:

- Sulcos nasolabiais (bigode chinês)
- Lábios (aumento e definição)
- Maçãs do rosto
- Olheiras
- Queixo e ângulo mandibular

**Duração:** 8 a 18 meses

## Posso fazer os dois ao mesmo tempo?

Sim! Na harmonização facial, frequentemente combinamos botox e preenchimento para resultados mais completos e naturais. A Dra. Thaysa cria protocolos personalizados para cada paciente.

Agende sua avaliação gratuita para saber qual tratamento é mais indicado para você!
        `,
        category: 'facial',
        coverImage: '/images/services/botox.jpg',
        publishedAt: '2024-02-22',
        readTime: 4,
        tags: ['botox', 'preenchimento', 'ácido hialurônico', 'harmonização', 'Goiânia'],
    },
    {
        id: '5',
        slug: 'cuidados-pos-procedimento-estetico',
        title: '10 cuidados essenciais após procedimentos estéticos faciais',
        excerpt: 'Os cuidados pós-procedimento são fundamentais para garantir resultados duradouros. Confira as recomendações da Dra. Thaysa.',
        content: `
Os cuidados após um procedimento estético são tão importantes quanto o próprio procedimento. Seguir as orientações corretas garante melhores resultados e evita complicações.

## Cuidados gerais (válidos para a maioria dos procedimentos)

### 1. Evite sol por 15 dias
A exposição solar pode causar manchas e inflamações na pele tratada. Use protetor solar FPS 50+ diariamente.

### 2. Não faça atividade física intensa nas primeiras 24-48h
Exercícios aumentam a circulação e podem deslocar produtos injetáveis como botox e preenchimento.

### 3. Evite álcool por 24h
O álcool aumenta o risco de hematomas e prolonga o edema pós-procedimento.

### 4. Não toque ou massageie a área tratada
Especialmente após injeções de botox ou preenchimento, tocar na área pode deslocar o produto.

### 5. Mantenha a cabeça elevada nas primeiras horas
Após procedimentos na face, evite deitar de bruços ou abaixar muito a cabeça.

### 6. Use produtos suaves
Por 3 a 7 dias, evite ácidos, retinol e outros ativos agressivos na pele tratada.

### 7. Hidrate bem a pele
A hidratação acelera a recuperação e melhora os resultados dos procedimentos.

### 8. Não frequente sauna ou piscina
Calor excessivo e cloro podem irritar a pele pós-procedimento.

### 9. Siga o protocolo de manutenção
Retorne para avaliação no prazo indicado pela profissional para avaliar os resultados.

### 10. Informe qualquer reação adversa
Em caso de dor intensa, vermelhidão excessiva ou inchaço fora do normal, entre em contato imediatamente.

Na Clínica Thaysa Medeiros, você recebe orientações personalizadas após cada procedimento. Cuide bem dos seus resultados!
        `,
        category: 'dicas',
        coverImage: '/images/about-mission.jpg',
        publishedAt: '2024-03-01',
        readTime: 6,
        tags: ['cuidados pós-procedimento', 'dicas estéticas', 'recuperação', 'resultados'],
    },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(p => p.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
    if (category === 'all') return blogPosts;
    return blogPosts.filter(p => p.category === category);
}
```

- [ ] Commit: `feat: add blog data with 5 initial educational articles`

---

### Task 14: Criar páginas de Blog

**Files:**
- Create: `src/pages/Blog.tsx`
- Create: `src/pages/BlogPost.tsx`
- Modify: `src/App.tsx`
- Modify: `src/components/layout/Header.tsx`
- Modify: `public/sitemap.xml` (atualizar com slugs reais dos artigos)

**src/pages/Blog.tsx:**
```tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts, getBlogPostsByCategory } from '@/data/blog';
import { cn } from '@/lib/utils';

const categories = [
    { value: 'all', label: 'Todos' },
    { value: 'facial', label: 'Facial' },
    { value: 'corporal', label: 'Corporal' },
    { value: 'avancado', label: 'Avançado' },
    { value: 'dicas', label: 'Dicas' },
];

export default function Blog() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const filtered = getBlogPostsByCategory(selectedCategory);

    return (
        <div className="min-h-screen bg-navy-900">
            <Helmet>
                <title>Blog | Dicas de Estética e Beleza | Thaysa Medeiros Goiânia</title>
                <meta name="description" content="Artigos sobre harmonização facial, criolipólise, microagulhamento e dicas de cuidados estéticos pela Dra. Thaysa Medeiros em Goiânia." />
                <link rel="canonical" href="https://clinicathaysamedeiros.com.br/blog" />
            </Helmet>

            {/* Hero */}
            <section className="bg-navy-900 text-white py-20 sm:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900/90 to-navy-900/80 z-0" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Conteúdo Educativo</span>
                        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
                            Blog e <span className="gold-text">Dicas</span>
                        </h1>
                        <p className="text-lg text-slate-300 font-light">
                            Informações confiáveis sobre procedimentos estéticos, cuidados com a pele e beleza — direto da Dra. Thaysa Medeiros.
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="bg-navy-900 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map(cat => (
                            <button
                                key={cat.value}
                                onClick={() => setSelectedCategory(cat.value)}
                                className={cn(
                                    "px-6 py-2.5 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 border-2",
                                    selectedCategory === cat.value
                                        ? "bg-gold text-navy-900 border-gold"
                                        : "bg-transparent text-slate-400 border-white/10 hover:border-gold/50 hover:text-white"
                                )}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filtered.map(post => (
                            <article key={post.id} className="group bg-navy border border-white/5 hover:border-gold/30 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.coverImage}
                                        alt={post.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-75"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-gold text-navy-900">
                                        {post.category === 'dicas' ? 'Dicas' : post.category === 'facial' ? 'Facial' : post.category === 'corporal' ? 'Corporal' : 'Avançado'}
                                    </span>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(post.publishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime} min de leitura
                                        </span>
                                    </div>
                                    <h2 className="font-display text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-slate-400 text-sm leading-relaxed font-light mb-4 flex-1 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:gap-3 transition-all"
                                    >
                                        Ler artigo completo
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
```

**src/pages/BlogPost.tsx:**
```tsx
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { getBlogPostBySlug, blogPosts } from '@/data/blog';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { siteConfig } from '@/data/config';
import { formatWhatsAppLink } from '@/lib/utils';

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const post = slug ? getBlogPostBySlug(slug) : null;

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-navy-900 p-4 text-center text-white">
                <h1 className="text-4xl font-bold mb-4 font-display">Artigo não encontrado</h1>
                <Link to="/blog">
                    <Button variant="outline">Ver todos os artigos</Button>
                </Link>
            </div>
        );
    }

    const relatedPosts = blogPosts.filter(p => p.slug !== slug && p.category === post.category).slice(0, 3);

    return (
        <div className="min-h-screen bg-navy-900 text-white">
            <Helmet>
                <title>{post.title} | Blog Thaysa Medeiros</title>
                <meta name="description" content={post.excerpt} />
                <link rel="canonical" href={`https://clinicathaysamedeiros.com.br/blog/${post.slug}`} />
            </Helmet>

            {/* Breadcrumb */}
            <div className="bg-navy-900 border-b border-white/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Breadcrumb items={[
                        { label: 'Início', href: '/' },
                        { label: 'Blog', href: '/blog' },
                        { label: post.title },
                    ]} />
                </div>
            </div>

            {/* Cover Image */}
            <div className="relative h-64 sm:h-80">
                <img
                    src={post.coverImage}
                    alt={post.title}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover brightness-[0.4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-gold text-navy-900 mb-4 tracking-widest uppercase">
                            {post.category === 'dicas' ? 'Dicas' : post.category === 'facial' ? 'Facial' : post.category === 'corporal' ? 'Corporal' : 'Avançado'}
                        </span>
                        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">{post.title}</h1>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-8 pb-8 border-b border-white/10">
                    <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gold" />
                        {new Date(post.publishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gold" />
                        {post.readTime} minutos de leitura
                    </span>
                    <span className="flex items-center gap-2 ml-auto text-xs">
                        Por <strong className="text-white">Dra. Thaysa Medeiros</strong>
                    </span>
                </div>

                {/* Article Body */}
                <div
                    className="prose prose-invert prose-gold max-w-none text-slate-300 leading-relaxed"
                    style={{
                        '--tw-prose-headings': 'white',
                        '--tw-prose-bold': 'white',
                        '--tw-prose-links': '#C5A03A',
                    } as React.CSSProperties}
                    dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>').replace(/##\s(.+)/g, '<h2 class="font-display text-2xl font-bold text-white mt-8 mb-4">$1</h2>').replace(/###\s(.+)/g, '<h3 class="font-display text-xl font-bold text-white mt-6 mb-3">$1</h3>').replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>').replace(/- (.+)/g, '<li class="text-slate-300 ml-4 list-disc">$1</li>') }}
                />

                {/* Tags */}
                {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-white/10">
                        <Tag className="w-4 h-4 text-gold mt-0.5" />
                        {post.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full text-xs bg-white/5 text-slate-400 border border-white/10">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* CTA */}
                <div className="mt-12 p-8 bg-navy border border-gold/20 rounded-2xl text-center">
                    <h3 className="font-display text-2xl font-bold text-white mb-3">
                        Quer saber mais sobre este tratamento?
                    </h3>
                    <p className="text-slate-400 mb-6 font-light">Agende sua avaliação gratuita com a Dra. Thaysa Medeiros.</p>
                    <Button
                        size="lg"
                        className="gold-gradient text-navy font-bold"
                        onClick={() => window.open(formatWhatsAppLink(siteConfig.whatsapp, `Olá! Li o artigo "${post.title}" e gostaria de agendar uma avaliação.`), '_blank')}
                    >
                        Agendar Avaliação Gratuita
                    </Button>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <div className="mt-12">
                        <h3 className="font-display text-2xl font-bold text-white mb-6">Artigos Relacionados</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {relatedPosts.map(p => (
                                <Link key={p.id} to={`/blog/${p.slug}`} className="group block bg-white/5 rounded-xl p-4 border border-white/5 hover:border-gold/30 transition-all">
                                    <h4 className="font-semibold text-white text-sm group-hover:text-gold transition-colors line-clamp-2">{p.title}</h4>
                                    <p className="text-xs text-slate-500 mt-1">{p.readTime} min de leitura</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
```

**Atualizar App.tsx** — adicionar rotas:
```tsx
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
// dentro das Routes:
<Route path="/blog" element={<Blog />} />
<Route path="/blog/:slug" element={<BlogPost />} />
```

**Atualizar Header.tsx** — adicionar "Blog" ao menu de navegação.

- [ ] Commit: `feat: add blog section with 5 educational articles and routing`

---

### Task 15: Adicionar agregação de avaliações na home (Google Rating badge)

**Files:**
- Modify: `src/pages/Home.tsx`

Na seção de Testimonials, adicionar antes do `<TestimonialSlider />` um banner de aggregate rating:
```tsx
{/* Google Rating Banner */}
<div className="flex items-center justify-center gap-4 mb-10">
    <div className="flex items-center gap-3 px-6 py-3 glass rounded-full border border-white/10">
        <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.09 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <div className="flex items-center gap-2">
            <span className="text-white font-bold text-lg">4.9</span>
            <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                ))}
            </div>
            <span className="text-slate-400 text-sm">127 avaliações no Google</span>
        </div>
    </div>
</div>
```

- [ ] Commit: `feat: add Google rating aggregate banner in testimonials section`

---

## Chunk 5: Tipos e Build final

### Task 16: Atualizar tipo Testimonial para incluir avatar e source

**Files:**
- Modify: `src/types/index.ts` (ou onde estiver o tipo Testimonial)

```ts
export interface Testimonial {
    id: string;
    name: string;
    treatment: string;
    rating: number;
    text: string;
    date: string;
    avatar?: string;
    source?: 'Google' | 'Instagram' | 'Direto';
}
```

### Task 17: Build e verificação

- [ ] Rodar `npm run build` e verificar sem erros TypeScript
- [ ] Verificar que todas as páginas renderizam no browser
- [ ] Commit final: `chore: production build verification`
