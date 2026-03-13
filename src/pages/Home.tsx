import { ArrowRight, Sparkles, Award, Users, Clock } from 'lucide-react';
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
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero-bg.jpg"
                        alt="Clínica Thaysa Medeiros"
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

                        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                            Realce Sua Versão mais <br />
                            <span className="gold-text">Poderosa e Elegante</span>
                        </h1>

                        <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                            Protocolos exclusivos e personalizados conduzidos por <strong>Dra. Thaysa Medeiros</strong>. 
                            Resultados sofisticados que respeitam sua identidade.
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
                                <div className="text-3xl font-bold text-white mb-1">1.7k+</div>
                                <div className="text-xs text-accent uppercase tracking-widest">Seguidores</div>
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
                    <div className="text-center mb-16">
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
                    <div className="text-center mb-16">
                        <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Feedback</span>
                        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
                            O Que Nossas <span className="gold-text">Pacientes Dizem</span>
                        </h2>
                        <div className="w-20 h-1 bg-gold/50 mx-auto mb-6"></div>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
                            Depoimentos reais de quem confia na nossa expertise para cuidar da sua beleza e bem-estar.
                        </p>
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
