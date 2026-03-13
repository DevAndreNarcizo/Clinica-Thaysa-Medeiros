# Clínica Thaysa Medeiros - Estética Avançada

Site institucional profissional desenvolvido para a **Dra. Thaysa Medeiros**, especialista em Estética Avançada em Goiânia, GO.

## 🎯 Objetivos do Projeto

- **Aquisição de Pacientes**: Estrutura otimizada para conversão com CTAs estratégicos
- **Autoridade no Nicho**: Demonstração de expertise através de conteúdo educativo e cases de sucesso
- **Experiência Premium**: Design que reflete o padrão de qualidade dos serviços oferecidos
- **SEO Local**: Otimização para busca local e palavras-chave do segmento de estética

## 🚀 Tecnologias Utilizadas

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Animações**: Framer Motion
- **Formulários**: React Hook Form + Zod
- **Ícones**: Lucide React

## 📁 Estrutura do Projeto

```
├── src/
│   ├── app/                    # Páginas e rotas (App Router)
│   │   ├── page.tsx           # Página inicial
│   │   ├── servicos/          # Catálogo e detalhes de serviços
│   │   ├── sobre/             # Sobre a clínica
│   │   ├── antes-depois/      # Galeria de resultados
│   │   ├── contato/           # Formulário de contato
│   │   ├── api/               # API routes
│   │   ├── layout.tsx         # Layout raiz
│   │   ├── globals.css        # Estilos globais
│   │   ├── sitemap.ts         # Sitemap dinâmico
│   │   └── robots.ts          # Robots.txt
│   ├── components/            # Componentes React
│   │   ├── ui/                # Componentes de UI base
│   │   ├── layout/            # Header, Footer, FloatingWhatsApp
│   │   ├── ServiceCard.tsx
│   │   ├── TestimonialSlider.tsx
│   │   ├── InstagramFeed.tsx
│   │   ├── BeforeAfterSlider.tsx
│   │   └── ContactForm.tsx
│   ├── data/                  # Dados estáticos
│   │   ├── config.ts          # Configurações do site
│   │   ├── services.ts        # Catálogo de serviços
│   │   ├── testimonials.ts    # Depoimentos
│   │   ├── team.ts            # Equipe
│   │   └── instagram.ts       # Posts do Instagram
│   ├── lib/                   # Utilitários
│   │   ├── utils.ts           # Funções auxiliares
│   │   └── validations.ts     # Schemas de validação
│   └── types/                 # Definições TypeScript
│       └── index.ts
├── public/                    # Arquivos estáticos
│   └── images/                # Imagens
└── ...
```

## ⚙️ Configuração e Instalação

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

1. Clone o repositório ou navegue até o diretório do projeto

2. Instale as dependências:

```bash
npm install
```

1. Configure as variáveis de ambiente:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas informações:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=+5562985394226
NEXT_PUBLIC_INSTAGRAM_HANDLE=clinicathaysamedeiros
NEXT_PUBLIC_PROFESSIONAL_NAME="Dra. Thaysa Medeiros"
# ... outras variáveis
```

1. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

1. Abra [http://localhost:3000](http://localhost:3000) no navegador

## 📝 Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Cria build de produção
npm run start        # Inicia servidor de produção
npm run lint         # Executa linter
npm run type-check   # Verifica tipos TypeScript
```

## 🎨 Personalização

### Atualizando Informações da Profissional

Edite o arquivo `src/data/config.ts`:

```typescript
export const siteConfig: SiteConfig = {
  name: 'Clínica Thaysa Medeiros',
  professionalName: 'Dra. Thaysa Medeiros',
  whatsapp: '+5562985394226',
  instagram: 'clinicathaysamedeiros',
  // ... outras configurações
};
```

### Adicionando/Editando Serviços

Edite o arquivo `src/data/services.ts`:

```typescript
export const services: Service[] = [
  {
    id: '1',
    slug: 'nome-do-servico',
    title: 'Nome do Serviço',
    category: 'facial', // ou 'corporal' ou 'avancado'
    shortDescription: 'Descrição curta',
    fullDescription: 'Descrição completa',
    benefits: ['Benefício 1', 'Benefício 2'],
    duration: '60 minutos',
    sessions: '3-6 sessões',
    image: '/images/services/servico.jpg',
    featured: true, // Aparece na home
  },
  // ... outros serviços
];
```

### Integrando Posts do Instagram

Edite o arquivo `src/data/instagram.ts`:

1. Acesse cada post no Instagram
2. Copie o ID do post da URL (ex: `https://www.instagram.com/p/ABC123/` → `ABC123`)
3. Salve a imagem do post em `public/images/instagram/`
4. Atualize o array:

```typescript
export const instagramPosts: InstagramPost[] = [
  {
    id: '1',
    postId: 'ABC123', // ID real do post
    caption: 'Legenda do post...',
    imageUrl: '/images/instagram/post-1.jpg',
    timestamp: '2024-01-15T10:00:00Z',
    permalink: 'https://www.instagram.com/p/ABC123/',
  },
  // ... outros posts
];
```

### Adicionando Imagens

Coloque suas imagens em:

- `public/images/services/` - Imagens dos serviços
- `public/images/before-after/` - Fotos antes/depois
- `public/images/instagram/` - Posts do Instagram
- `public/images/team/` - Fotos da equipe

**Importante**: Use imagens otimizadas (WebP quando possível) e com tamanhos adequados para melhor performance.

## 🌐 Deploy

### Vercel (Recomendado)

1. Instale a CLI do Vercel:

```bash
npm i -g vercel
```

1. Faça login:

```bash
vercel login
```

1. Deploy:

```bash
vercel --prod
```

### Outras Plataformas

O projeto é compatível com qualquer plataforma que suporte Next.js:

- Netlify
- AWS Amplify
- Railway
- Render

## 📊 SEO e Performance

### Otimizações Implementadas

- ✅ Metadata dinâmica por página
- ✅ Schema.org markup (LocalBusiness, MedicalBusiness)
- ✅ Sitemap.xml automático
- ✅ Robots.txt configurado
- ✅ Open Graph e Twitter Cards
- ✅ Imagens otimizadas com Next/Image
- ✅ Lazy loading de imagens
- ✅ Fontes otimizadas (Google Fonts)

### Checklist Pós-Deploy

- [ ] Submeter sitemap no Google Search Console
- [ ] Configurar Google Analytics
- [ ] Verificar Core Web Vitals
- [ ] Testar em dispositivos móveis
- [ ] Verificar links do WhatsApp e Instagram
- [ ] Testar formulário de contato

## 🔧 Integrações Pendentes

### Formulário de Contato

O formulário está configurado mas precisa de integração com serviço de email. Opções:

1. **Resend** (recomendado):

```bash
npm install resend
```

1. **SendGrid**
2. **Nodemailer com SMTP**

Edite `src/app/api/contact/route.ts` para implementar o envio.

### Google Maps

Para adicionar mapa na página de contato:

1. Obtenha uma API key do Google Maps
2. Adicione ao `.env`:

```env
GOOGLE_MAPS_API_KEY=sua-chave-aqui
```

3. Atualize o componente em `src/app/contato/page.tsx`

### Analytics

Adicione o Google Analytics ID em `.env`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:

- 📱 Mobile (375px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1440px+)

## ♿ Acessibilidade

- WCAG 2.1 AA compliant
- Navegação por teclado
- Textos alternativos em imagens
- Contraste de cores adequado
- Labels apropriados em formulários

## 📄 Licença

Este projeto foi desenvolvido exclusivamente para a Clínica Thaysa Medeiros.

## 👨‍💻 Desenvolvedor

Desenvolvido por **André Narcizo**

- GitHub: [DevAndreNarcizo](https://github.com/DevAndreNarcizo)
- Portfólio: [dev-andrenarcizo.netlify.app](https://dev-andrenarcizo.netlify.app)

## 📞 Suporte

Para dúvidas ou suporte técnico, entre em contato através do WhatsApp: +55 62 98539-4226

---

**Clínica Thaysa Medeiros** | Estética Avançada | Goiânia, GO
