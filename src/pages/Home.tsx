import { ArrowRight, Sparkles, Award, HeartHandshake, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ServiceCard } from '@/components/ServiceCard';
import { TestimonialSlider } from '@/components/TestimonialSlider';
import { InstagramFeed } from '@/components/InstagramFeed';
import { featuredServices } from '@/data/services';
import { siteConfig } from '@/data/config';
import { formatWhatsAppLink } from '@/lib/utils';

export default function Home() {
    const reduceMotion = useReducedMotion();
    const reveal = reduceMotion
        ? {}
        : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.18 }, transition: { duration: 0.55 } };

    return (
        <>
            <Helmet>
                <title>Thaysa Medeiros | Estética Avançada em Goiânia</title>
                <meta name="description" content="Farmacêutica Esteta | CRF-18203. Tratamentos estéticos personalizados em Goiânia." />
                <link rel="canonical" href="https://clinicathaysamedeiros.com.br/" />
            </Helmet>

            <section className="relative flex min-h-[720px] items-center overflow-hidden bg-ivory pb-16 pt-28 sm:min-h-screen sm:pb-20 sm:pt-32">
                <div className="absolute right-0 top-0 h-[55%] w-[45%] bg-blush/10 blur-3xl" />
                <motion.div
                    {...(reduceMotion ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.65 } })}
                    className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[7fr_5fr] lg:gap-14 lg:px-8"
                >
                    <div>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-ivory-light/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-dark">
                            <Sparkles className="h-4 w-4 text-gold" />
                            Estética avançada em Goiânia
                        </div>
                        <h1 className="font-display text-[clamp(3.25rem,8vw,6.5rem)] font-semibold leading-[0.92] text-dark">
                            Beleza natural,
                            <span className="block italic text-gold">cuidado sensível.</span>
                        </h1>
                        <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink sm:text-lg">
                            Protocolos personalizados conduzidos por <strong className="text-dark">Dra. Thaysa Medeiros</strong>,
                            com foco em naturalidade, técnica e bem-estar.
                        </p>
                        <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-dark">Farmacêutica Esteta | CRF-18203</p>
                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                            <Button
                                size="lg"
                                className="w-full bg-dark px-8 py-6 text-ivory shadow-medium hover:bg-ink sm:w-auto"
                                onClick={() => window.open(formatWhatsAppLink(siteConfig.whatsapp, 'Olá! Gostaria de agendar uma avaliação com a Dra. Thaysa.'), '_blank')}
                            >
                                Agendar avaliação
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Link to="/servicos" className="w-full sm:w-auto">
                                <Button size="lg" variant="outline" className="w-full border-dark/20 bg-ivory-light/60 px-8 py-6 text-dark hover:bg-ivory-light sm:w-auto">
                                    Conhecer tratamentos
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                        <div className="absolute -left-5 top-10 h-32 w-32 rounded-full border border-gold/40" />
                        <div className="relative flex h-[420px] items-end overflow-hidden rounded-[2.5rem_2.5rem_5rem_2.5rem] border border-gold/20 bg-gradient-to-br from-ivory-light via-blush/25 to-sage/30 p-10 shadow-strong sm:h-[520px]">
                            <div className="absolute right-8 top-8 h-40 w-40 rounded-full border border-gold/30" />
                            <div className="absolute bottom-16 left-12 h-px w-32 bg-gold/50" />
                            <div>
                                <p className="font-display text-3xl font-semibold text-dark sm:text-4xl">Cuidado individual</p>
                                <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink">Protocolos definidos após avaliação, com condução técnica e atenção aos seus objetivos.</p>
                            </div>
                        </div>
                        <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-gold/20 bg-ivory/95 px-5 py-4 shadow-soft backdrop-blur sm:left-auto sm:right-[-1.5rem] sm:w-64">
                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-dark">Estética, beleza e bem-estar</p>
                        </div>
                    </div>
                </motion.div>

                <div className="absolute bottom-0 left-0 right-0 hidden border-t border-dark/10 bg-ivory-light/60 lg:block">
                    <div className="mx-auto grid max-w-7xl grid-cols-4 px-8 py-4">
                        {[
                            ['CRF-18203', 'Farmacêutica Esteta', Award],
                            ['Personalizado', 'Cuidado individual', HeartHandshake],
                            ['Goiânia', 'Atendimento local', MapPin],
                            ['Naturalidade', 'Técnica e sensibilidade', Sparkles],
                        ].map(([title, label, Icon]) => (
                            <div key={String(title)} className="flex items-center justify-center gap-3 border-r border-dark/10 last:border-r-0">
                                <Icon className="h-5 w-5 text-gold" />
                                <div>
                                    <p className="font-display text-lg font-semibold text-dark">{title as string}</p>
                                    <p className="text-[10px] uppercase tracking-widest text-ink">{label as string}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <motion.section {...reveal} className="bg-ivory-light py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Especialidades</span>
                        <h2 className="mt-3 font-display text-4xl font-semibold text-dark sm:text-5xl">Tratamentos em destaque</h2>
                        <div className="mx-auto mt-5 h-px w-16 bg-gold" />
                    </div>
                    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                        {featuredServices.map((service) => <ServiceCard key={service.id} service={service} />)}
                    </div>
                    <div className="mt-10 text-center">
                        <Link to="/servicos">
                            <Button size="lg" variant="outline" className="border-dark/20 text-dark hover:bg-dark hover:text-ivory">
                                Ver todos os serviços
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </motion.section>

            <motion.section {...reveal} className="border-y border-dark/5 bg-ivory py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Experiências</span>
                        <h2 className="mt-3 font-display text-4xl font-semibold text-dark sm:text-5xl">Depoimentos de pacientes</h2>
                    </div>
                    <TestimonialSlider />
                </div>
            </motion.section>

            <InstagramFeed />

            <section className="bg-dark py-20 text-ivory sm:py-24">
                <motion.div {...reveal} className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="font-display text-4xl font-semibold sm:text-5xl">Pronta para cuidar de você?</h2>
                    <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-ivory/75">
                        Agende uma avaliação e descubra o tratamento que mais combina com seus objetivos e sua beleza natural.
                    </p>
                    <Button
                        size="lg"
                        onClick={() => window.open(formatWhatsAppLink(siteConfig.whatsapp, 'Olá! Gostaria de agendar uma avaliação.'), '_blank')}
                        className="mt-9 bg-gold px-10 py-6 text-dark hover:bg-blush"
                    >
                        Agendar pelo WhatsApp
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </motion.div>
            </section>
        </>
    );
}
