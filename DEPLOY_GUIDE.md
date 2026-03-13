# 🚀 Guia de Deploy - Thaysa Medeiros

## Pré-requisitos

- Conta no GitHub
- Conta no Vercel (gratuita)
- Domínio personalizado (opcional)

---

## 📦 Preparação do Projeto

### 1. Criar Repositório no GitHub

```bash
# Inicializar Git (se ainda não foi feito)
cd "/media/calecos/Projetos/Site Profissional Para Estética"
git init

# Adicionar arquivos
git add .
git commit -m "Initial commit - Thaysa Medeiros website"

# Criar repositório no GitHub e conectar
git remote add origin https://github.com/SEU_USUARIO/thaysa-medeiros-site.git
git branch -M main
git push -u origin main
```

### 2. Verificar Build Local

```bash
# Testar build
npm run build

# Se houver erros, corrija antes de fazer deploy
# Testar produção localmente
npm run start
```

---

## 🌐 Deploy na Vercel

### Método 1: Via Interface Web (Recomendado)

1. **Acessar Vercel**
   - Vá para [vercel.com](https://vercel.com)
   - Faça login com GitHub

2. **Importar Projeto**
   - Clique em "Add New Project"
   - Selecione o repositório `thaysa-medeiros-site`
   - Clique em "Import"

3. **Configurar Projeto**
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

4. **Adicionar Variáveis de Ambiente**

   Clique em "Environment Variables" e adicione:

   ```
   NEXT_PUBLIC_WHATSAPP_NUMBER=+5562985394226
   NEXT_PUBLIC_INSTAGRAM_HANDLE=clinicathaysamedeiros
   NEXT_PUBLIC_PROFESSIONAL_NAME=Dra. Thaysa Medeiros
   NEXT_PUBLIC_BUSINESS_NAME=Thaysa Medeiros - Estética Avançada
   NEXT_PUBLIC_CITY=Goiânia
   NEXT_PUBLIC_STATE=GO
   NEXT_PUBLIC_ADDRESS=Avenida Parque Atheneu Qd.07 Lt.23 Unidade 301 (Sala 3), Goiânia - GO, CEP 74893-020
   NEXT_PUBLIC_PHONE_DISPLAY=(62) 98539-4226
   ```

5. **Deploy**
   - Clique em "Deploy"
   - Aguarde o build (2-3 minutos)
   - Site estará disponível em `https://seu-projeto.vercel.app`

### Método 2: Via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

---

## 🌍 Configurar Domínio Personalizado

### 1. Adicionar Domínio na Vercel

1. No dashboard do projeto, vá em **Settings** > **Domains**
2. Adicione seu domínio: `thaysamedeiros.com.br`
3. Vercel fornecerá os registros DNS

### 2. Configurar DNS

No seu provedor de domínio (Registro.br, GoDaddy, etc.):

**Opção A: Usar Nameservers da Vercel (Recomendado)**

```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Opção B: Adicionar Registros A**

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 3. Aguardar Propagação

- Propagação DNS: 24-48 horas
- SSL automático: Ativado pela Vercel

---

## 🔧 Configurações Pós-Deploy

### 1. Verificar Site

- [ ] Acessar URL de produção
- [ ] Testar todas as páginas
- [ ] Verificar links do WhatsApp
- [ ] Testar formulário de contato
- [ ] Verificar imagens carregando
- [ ] Testar responsividade (mobile)

### 2. Configurar Analytics

**Google Analytics 4:**

1. Criar propriedade em [analytics.google.com](https://analytics.google.com)
2. Obter ID de medição (G-XXXXXXXXXX)
3. Adicionar variável de ambiente na Vercel:

   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

4. Fazer redeploy

**Facebook Pixel:**

1. Criar pixel em [business.facebook.com](https://business.facebook.com)
2. Obter Pixel ID
3. Adicionar variável de ambiente:

   ```
   NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXXX
   ```

### 3. Submeter ao Google

**Google Search Console:**

1. Acessar [search.google.com/search-console](https://search.google.com/search-console)
2. Adicionar propriedade (seu domínio)
3. Verificar propriedade
4. Submeter sitemap: `https://seudominio.com.br/sitemap.xml`

**Google My Business:**

1. Criar perfil em [business.google.com](https://business.google.com)
2. Adicionar endereço: Av. Parque Atheneu Qd.07 Lt.23 Unidade 301
3. Adicionar fotos da clínica
4. Adicionar link do site

---

## 📊 Monitoramento

### Lighthouse Audit

```bash
# Instalar Lighthouse
npm install -g lighthouse

# Executar audit
lighthouse https://seudominio.com.br --view
```

**Metas:**

- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

### Vercel Analytics

1. No dashboard, ative **Analytics**
2. Monitore:
   - Page views
   - Unique visitors
   - Top pages
   - Devices
   - Locations

---

## 🔄 Atualizações Futuras

### Fluxo de Atualização

```bash
# Fazer alterações no código
# Commitar mudanças
git add .
git commit -m "Descrição da mudança"
git push origin main

# Vercel fará deploy automático!
```

### Rollback

Se algo der errado:

1. Acesse Vercel Dashboard
2. Vá em **Deployments**
3. Encontre deploy anterior funcionando
4. Clique em "..." > **Promote to Production**

---

## ✅ Checklist Final de Deploy

### Antes do Deploy

- [x] Logo atualizada
- [x] Todas as informações corretas
- [x] Fotos da clínica adicionadas
- [ ] Fotos reais dos serviços (você vai adicionar)
- [ ] Posts do Instagram atualizados (você vai adicionar)
- [x] Build local funcionando
- [x] Testes em diferentes navegadores

### Durante o Deploy

- [ ] Repositório GitHub criado
- [ ] Projeto importado na Vercel
- [ ] Variáveis de ambiente configuradas
- [ ] Deploy bem-sucedido
- [ ] Site acessível

### Após o Deploy

- [ ] Domínio personalizado configurado
- [ ] SSL ativo (HTTPS)
- [ ] Google Analytics configurado
- [ ] Sitemap submetido ao Google
- [ ] Google My Business criado
- [ ] Lighthouse audit > 90
- [ ] Testado em mobile
- [ ] WhatsApp links funcionando
- [ ] Formulário testado

---

## 🆘 Solução de Problemas

### Build Falhou

```bash
# Limpar cache e reinstalar
rm -rf .next node_modules
npm install
npm run build
```

### Imagens não carregam

- Verificar se estão em `public/images/`
- Verificar caminhos (case-sensitive)
- Verificar formato (jpg, png, webp)

### Variáveis de ambiente não funcionam

- Variáveis com `NEXT_PUBLIC_` são expostas ao cliente
- Após adicionar variável, fazer redeploy
- Verificar se não tem espaços extras

---

## 📞 Suporte

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)

---

**Última atualização:** 10/01/2026  
**Versão do Site:** 1.0.0
