import { ArrowRight, Sparkles, Award, Users, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/Button';
import { ServiceCard } from '@/components/ServiceCard';
import { TestimonialSlider } from '@/components/TestimonialSlider';
import { InstagramFeed } from '@/components/InstagramFeed';
import { featuredServices } from '@/data/services';
import { siteConfig } from '@/data/config';
import { formatWhatsAppLink } from '@/lib/utils';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Thaysa Medeiros | Estética Avançada em Goiânia</title>
                <meta name="description" content="Tratamentos estéticos avançados com resultados comprovados. Harmonização facial, criolipólise, microagulhamento e muito mais. Agende sua avaliação gratuita em Goiânia." />
                <link rel="canonical" href="https://clinicathaysamedeiros.com.br/" />
            </Helmet>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero-bg.jpg"
                        alt="Clínica Thaysa Medeiros"
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        className="w-full h-full object-cover opacity-10 brightness-[0.3] scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy-900/95 via-navy-900/80 to-navy-900" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
                    <div className="animate-fade-in">
                        <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-accent text-sm font-medium mb-8 border border-accent/20">
                            <Sparkles className="w-4 h-4" />
                            Excelência e Autoridade em Estética Avançada
                        </div>

                        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                            Beleza e Bem-Estar <br />
                            <span className="gold-text">Personalizados</span> para <br />
                            Mulheres que Querem <br className="hidden sm:block" />
                            <span className="gold-text">Resultados Reais</span>
                        </h1>

                        <p className="text-xl sm:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed font-light">
                            Harmonização facial, criolipólise, microagulhamento e muito mais —<br className="hidden sm:block" />
                            conduzidos por <strong className="text-white">Dra. Thaysa Medeiros</strong> em Goiânia.
                        </p>
                        <p className="text-sm text-gold/80 mb-12 font-medium tracking-wide">
                            ✨ Avaliação gratuita disponível — vagas limitadas esta semana
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Button
                                size="lg"
                                className="gold-gradient text-navy-900 font-bold text-xl px-12 py-8 rounded-2xl shadow-[0_0_30px_rgba(197,160,58,0.4)] hover:scale-105 transition-transform border-none"
                                onClick={() => window.open(formatWhatsAppLink(siteConfig.whatsapp, 'Olá! Gostaria de agendar uma consulta com a Dra. Thaysa.'), '_blank')}
                            >
                                Agendar Minha Consulta
                                <ArrowRight className="w-6 h-6 ml-3" />
                            </Button>
                            <Link to="/servicos">
                                <Button size="lg" variant="outline" className="text-xl px-10 py-8 rounded-2xl border-white/20 text-white hover:bg-white/10 backdrop-blur-sm bg-white/5">
                                    Ver Procedimentos
                                </Button>
                            </Link>
                        </div>

                        {/* Authority Badges */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-4xl mx-auto border-t border-white/10 pt-12">
                            <div className="text-center group">
                                <Award className="w-8 h-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <div className="text-3xl font-bold text-white mb-1">Especialista</div>
                                <div className="text-xs text-accent uppercase tracking-widest">CRF-18203</div>
                            </div>
                            <div className="text-center group">
                                <Users className="w-8 h-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <div className="text-3xl font-bold text-white mb-1">500+</div>
                                <div className="text-xs text-accent uppercase tracking-widest">Pacientes Atendidas</div>
                            </div>
                            <div className="text-center group">
                                <Sparkles className="w-8 h-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <div className="text-3xl font-bold text-white mb-1">Premium</div>
                                <div className="text-xs text-accent uppercase tracking-widest">Atendimento VIP</div>
                            </div>
                            <div className="text-center group">
                                <Clock className="w-8 h-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <div className="text-3xl font-bold text-white mb-1">Goiânia</div>
                                <div className="text-xs text-accent uppercase tracking-widest">Localização Prime</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Services */}
            <section className="py-24 bg-navy-900 relative z-10 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center text-center mb-16">
                        <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Especialidades</span>
                        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
                            Serviços em <span className="gold-text">Destaque</span>
                        </h2>
                        <div className="w-20 h-1 bg-gold/50 mx-auto mb-6"></div>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
                            Protocolos exclusivos desenvolvidos para realçar sua beleza natural com sofisticação.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredServices.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/servicos">
                            <Button size="lg" variant="outline">
                                Ver Todos os Serviços
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-navy-900 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center text-center mb-16">
                        <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Feedback</span>
                        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
                            O Que Nossas <span className="gold-text">Pacientes Dizem</span>
                        </h2>
                        <div className="w-20 h-1 bg-gold/50 mx-auto mb-6"></div>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
                            Depoimentos reais de quem confia na nossa expertise para cuidar da sua beleza e bem-estar.
                        </p>
                    </div>

                    {/* Google Rating Banner */}
                    <div className="flex items-center justify-center mb-10">
                        <div className="flex items-center gap-3 px-6 py-3 glass rounded-full border border-white/10">
                            <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
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

                    <TestimonialSlider />
                </div>
            </section>

            {/* Instagram Feed */}
            <InstagramFeed />

            {/* CTA Section */}
            <section className="py-24 bg-navy-900 border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gold/5 opacity-30 mix-blend-overlay"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="font-display text-4xl sm:text-5xl font-bold mb-8 text-white">
                        Pronta Para Transformar Sua <span className="gold-text">Autoestima?</span>
                    </h2>
                    <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        Agende sua avaliação gratuita e descubra o tratamento ideal para você.
                        Nossa equipe está pronta para cuidar da sua beleza com excelência técnica e sensibilidade.
                    </p>
                    <Button
                        size="lg"
                        variant="primary"
                        onClick={() => window.open(formatWhatsAppLink(siteConfig.whatsapp, 'Olá! Gostaria de agendar uma avaliação gratuita.'), '_blank')}
                        className="text-xl px-12 py-8 rounded-2xl shadow-2xl"
                    >
                        Agendar Avaliação Gratuita
                        <ArrowRight className="w-6 h-6 ml-3" />
                    </Button>
                </div>
            </section>
        </>
    );
}
