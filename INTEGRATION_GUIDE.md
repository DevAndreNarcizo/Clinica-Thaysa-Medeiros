# Guia de Integração - Email e Google Maps

## 📧 Integração de Email (Resend - Recomendado)

### 1. Criar conta no Resend

1. Acesse [resend.com](https://resend.com)
2. Crie uma conta gratuita
3. Verifique seu domínio (ou use o domínio de teste)

### 2. Obter API Key

1. No dashboard do Resend, vá em **API Keys**
2. Clique em **Create API Key**
3. Copie a chave gerada

### 3. Configurar no projeto

Adicione ao arquivo `.env`:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_CONTACT_EMAIL=contato@thaysamedeiros.com.br
```

### 4. Instalar dependência

```bash
npm install resend
```

### 5. Atualizar API route

O arquivo `/src/app/api/contact/route.ts` já está preparado. Descomente as linhas do Resend e configure o email de destino.

---

## 🗺️ Integração Google Maps

### 1. Criar projeto no Google Cloud

1. Acesse [console.cloud.google.com](https://console.cloud.google.com)
2. Crie um novo projeto: "Thaysa Medeiros Site"
3. Ative a **Maps Embed API**

### 2. Obter API Key

1. Vá em **APIs & Services** > **Credentials**
2. Clique em **Create Credentials** > **API Key**
3. Restrinja a chave:
   - **Application restrictions**: HTTP referrers
   - **Website restrictions**: Adicione seu domínio
   - **API restrictions**: Maps Embed API

### 3. Gerar URL do Embed

1. Acesse [Google Maps](https://www.google.com/maps)
2. Busque o endereço: **Avenida Parque Atheneu Qd.07 Lt.23 Unidade 301, Goiânia - GO**
3. Clique em **Compartilhar** > **Incorporar um mapa**
4. Copie o código iframe
5. Extraia a URL do `src`

### 4. Configurar no projeto

Adicione ao arquivo `.env`:

```env
GOOGLE_MAPS_API_KEY=AIzaSyxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=https://www.google.com/maps/embed?pb=...
```

### 5. Atualizar página de contato

O componente já está preparado para receber a URL do embed. Basta configurar a variável de ambiente.

---

## ✅ Checklist de Configuração

### Email

- [ ] Criar conta no Resend
- [ ] Obter API Key
- [ ] Adicionar `RESEND_API_KEY` ao `.env`
- [ ] Adicionar `NEXT_PUBLIC_CONTACT_EMAIL` ao `.env`
- [ ] Instalar dependência: `npm install resend`
- [ ] Testar envio de email

### Google Maps

- [ ] Criar projeto no Google Cloud
- [ ] Ativar Maps Embed API
- [ ] Obter API Key
- [ ] Gerar URL do embed
- [ ] Adicionar variáveis ao `.env`
- [ ] Testar exibição do mapa

---

## 🔧 Comandos Úteis

```bash
# Instalar Resend
npm install resend

# Testar servidor local
npm run dev

# Build para produção
npm run build
```

---

## 📞 Suporte

Se precisar de ajuda com as integrações, consulte:

- [Documentação Resend](https://resend.com/docs)
- [Google Maps Platform](https://developers.google.com/maps/documentation/embed)
