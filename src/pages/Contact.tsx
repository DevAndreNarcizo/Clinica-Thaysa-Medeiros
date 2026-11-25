import { Phone, MapPin, Instagram, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { ContactForm } from '@/components/ContactForm';
import { siteConfig } from '@/data/config';
import { formatWhatsAppLink } from '@/lib/utils';

export default function Contact() {
    return (
        <div className="min-h-screen bg-dark">
            <Helmet>
                <title>Contato e Agendamento | Thaysa Medeiros — Goiânia GO</title>
                <meta name="description" content="Entre em contato com a Clínica Thaysa Medeiros em Goiânia. Agende sua avaliação gratuita pelo WhatsApp ou formulário. Av. Parque Atheneu, Goiânia - GO." />
                <link rel="canonical" href="https://clinicathaysamedeiros.com.br/contato" />
            </Helmet>
            {/* Hero */}
            <section className="bg-dark text-dark py-24 sm:py-32 relative overflow-hidden">
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-dark via-dark/95 to-dark/80" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Contato</span>
                        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
                            Vamos Iniciar Sua <br /><span className="gold-text">Transformação?</span>
                        </h1>
                        <p className="text-xl text-ink font-light leading-relaxed">
                            Estamos prontos para atendê-la. Agende sua avaliação ou tire suas dúvidas através dos nossos canais.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="font-display text-3xl font-bold text-dark mb-6">
                                    Informações de <span className="gold-text">Contato</span>
                                </h2>
                                <p className="text-ink mb-8 leading-relaxed font-light text-lg">
                                    Nossa equipe está pronta para atendê-la. Entre em contato através dos canais abaixo
                                    ou preencha o formulário e retornaremos em breve.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* Phone */}
                                <div className="flex items-start gap-4 p-6 glass rounded-2xl border border-gold/20">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                                        <Phone className="w-6 h-6 text-gold" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dark mb-1 font-display">Telefone / WhatsApp</h3>
                                        <a
                                            href={formatWhatsAppLink(siteConfig.whatsapp, 'Olá! Gostaria de agendar uma avaliação.')}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-ink hover:text-gold font-medium transition-colors"
                                        >
                                            {siteConfig.phone}
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-4 p-6 glass rounded-2xl border border-gold/20">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-gold" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dark mb-1 font-display">Localização</h3>
                                        <a
                                            href="https://maps.google.com/maps?q=Thaysa+Medeiros+Est%C3%A9tica+Beleza+e+Bem-estar+Goi%C3%A2nia+GO&t=&z=17&ie=UTF8&iwloc="
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-ink hover:text-gold font-light text-sm"
                                        >
                                            {siteConfig.address || `${siteConfig.city}, ${siteConfig.state}`}
                                        </a>
                                    </div>
                                </div>

                                {/* Instagram */}
                                <div className="flex items-start gap-4 p-6 glass rounded-2xl border border-gold/20">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                                        <Instagram className="w-6 h-6 text-gold" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dark mb-1 font-display">Instagram</h3>
                                        <a
                                            href={`https://instagram.com/${siteConfig.instagram}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-ink hover:text-gold font-medium transition-colors"
                                        >
                                            @{siteConfig.instagram}
                                        </a>
                                    </div>
                                </div>

                                {/* Business Hours */}
                                <div className="flex items-start gap-4 p-6 glass rounded-2xl border border-gold/20">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-gold" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dark mb-1 font-display">Horário de Atendimento</h3>
                                        <p className="text-ink font-light text-sm">{siteConfig.businessHours?.weekdays}</p>
                                        <p className="text-ink font-light text-xs mt-1">Domingo e Segunda: Fechado</p>
                                    </div>
                                </div>
                            </div>

                            {/* Google Maps Embed */}
                            <div className="rounded-2xl overflow-hidden border border-dark/10 shadow-xl">
                                <iframe
                                    title="Localização Clínica Thaysa Medeiros"
                                    src="https://maps.google.com/maps?q=Thaysa+Medeiros+Est%C3%A9tica+Beleza+e+Bem-estar+Goi%C3%A2nia+GO&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="280"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="block"
                                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                                />
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <div className="bg-dark rounded-3xl p-8 sm:p-12 shadow-2xl border border-gold/10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                                <h2 className="font-display text-3xl sm:text-4xl text-dark font-bold mb-4 relative z-10">
                                    Envie uma Mensagem
                                </h2>
                                <p className="text-ink font-light mb-8">
                                    Se preferir, preencha o formulário e nossa equipe retornará em breve.
                                </p>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
