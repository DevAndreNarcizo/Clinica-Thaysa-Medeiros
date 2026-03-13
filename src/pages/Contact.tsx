import { Phone, MapPin, Instagram } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { siteConfig } from '@/data/config';
import { formatWhatsAppLink } from '@/lib/utils';

export default function Contact() {
    return (
        <div className="min-h-screen bg-navy-900">
            {/* Hero */}
            <section className="bg-navy-900 text-white py-24 sm:py-32 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/contact-bg.jpg"
                        alt="Background"
                        className="w-full h-full object-cover opacity-10 brightness-[0.2]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900/95 to-navy-900/80" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Contato</span>
                        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
                            Vamos Iniciar Sua <br /><span className="gold-text">Transformação?</span>
                        </h1>
                        <p className="text-xl text-slate-300 font-light leading-relaxed">
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
                                <h2 className="font-display text-3xl font-bold text-white mb-6">
                                    Informações de <span className="gold-text">Contato</span>
                                </h2>
                                <p className="text-slate-400 mb-8 leading-relaxed font-light text-lg">
                                    Nossa equipe está pronta para atendê-la. Entre em contato através dos canais abaixo
                                    ou preencha o formulário e retornaremos em breve.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* Phone */}
                                <div className="flex items-start gap-4 p-6 glass rounded-2xl border border-accent/10">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                                        <Phone className="w-6 h-6 text-gold" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1 font-display">Telefone / WhatsApp</h3>
                                        <a
                                            href={formatWhatsAppLink(siteConfig.whatsapp, 'Olá! Gostaria de agendar uma avaliação.')}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-300 hover:text-gold font-medium transition-colors"
                                        >
                                            {siteConfig.phone}
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-4 p-6 glass rounded-2xl border border-accent/10">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-gold" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1 font-display">Localização</h3>
                                        <a 
                                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address || 'Goiânia - GO')}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-300 hover:text-gold font-light text-sm"
                                        >
                                            {siteConfig.address || `${siteConfig.city}, ${siteConfig.state}`}
                                        </a>
                                    </div>
                                </div>

                                {/* Instagram */}
                                <div className="flex items-start gap-4 p-6 glass rounded-2xl border border-accent/10">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                                        <Instagram className="w-6 h-6 text-gold" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1 font-display">Instagram</h3>
                                        <a
                                            href={`https://instagram.com/${siteConfig.instagram}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-300 hover:text-gold font-medium transition-colors"
                                        >
                                            @{siteConfig.instagram}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="rounded-2xl overflow-hidden h-64 bg-neutral-100 flex items-center justify-center border-2 border-dashed border-neutral-300">
                                <p className="text-neutral-500 font-medium">
                                    Mapa (Goiânia - GO)
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <div className="bg-navy-900 rounded-3xl p-8 sm:p-12 shadow-2xl border border-gold/10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                                <h2 className="font-display text-3xl sm:text-4xl text-white font-bold mb-4 relative z-10">
                                    Envie uma Mensagem
                                </h2>
                                <p className="text-slate-400 font-light mb-8">
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
