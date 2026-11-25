import { Award, Heart, Target, Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
export default function About() {
    return (
        <div className="min-h-screen bg-dark">
            <Helmet>
                <title>Sobre a Clínica | Thaysa Medeiros — Estética Avançada Goiânia</title>
                <meta name="description" content="Conheça a Dra. Thaysa Medeiros, esteticista especialista em Goiânia. Nossa missão é oferecer tratamentos estéticos avançados com excelência e humanização." />
                <link rel="canonical" href="https://clinicathaysamedeiros.com.br/sobre" />
            </Helmet>
            {/* Hero */}
            <section className="bg-dark text-dark py-24 sm:py-32 relative overflow-hidden">
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-dark via-dark/90 to-dark/70" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Sobre a Clínica</span>
                        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                            Excelência em <br /><span className="gold-text">Estética Avançada</span>
                        </h1>
                        <p className="text-xl text-ink font-light leading-relaxed max-w-2xl">
                            Conheça nossa história, valores e o compromisso inabalável com a sua autoestima e bem-estar.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-20 sm:py-24 bg-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-slide-up">
                            <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">Propósito</span>
                            <h2 className="font-display text-3xl sm:text-4xl font-bold text-dark mb-8">
                                Nossa <span className="gold-text">Missão</span>
                            </h2>
                            <p className="text-ink text-lg leading-relaxed mb-8 font-light">
                                Proporcionar tratamentos estéticos avançados com excelência técnica e atendimento humanizado,
                                valorizando a beleza natural de cada paciente e promovendo autoestima e bem-estar.
                            </p>
                            <p className="text-ink text-lg leading-relaxed font-light border-l-2 border-gold pl-6">
                                Acreditamos que cada pessoa é única e merece um cuidado personalizado. Por isso,
                                desenvolvemos protocolos individualizados que respeitam suas características e objetivos.
                            </p>
                        </div>

                        <div className="relative h-[500px] overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-ivory-light/90 via-blush/30 to-sage/30 shadow-2xl">
                            <div className="absolute left-12 top-12 h-32 w-32 rounded-full border border-gold/40" />
                            <div className="absolute bottom-12 right-12 h-px w-40 bg-gold/50" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 sm:py-24 bg-dark border-t border-dark/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-dark mb-6">
                            Nossos <span className="gold-text">Valores</span>
                        </h2>
                        <p className="text-ink max-w-2xl mx-auto font-light text-lg">
                            Princípios que guiam nosso trabalho e relacionamento com cada paciente
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-10 glass rounded-3xl border border-gold/10 hover:border-gold/30 transition-colors group">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/10 rounded-2xl mb-8 group-hover:bg-gold/10 transition-colors">
                                <Award className="w-10 h-10 text-gold" />
                            </div>
                            <h3 className="font-display text-2xl font-bold text-dark mb-4">
                                Excelência
                            </h3>
                            <p className="text-ink font-light leading-relaxed">
                                Compromisso com a qualidade técnica e resultados superiores em cada procedimento.
                            </p>
                        </div>

                        <div className="text-center p-10 glass rounded-3xl border border-gold/10 hover:border-gold/30 transition-colors group">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/10 rounded-2xl mb-8 group-hover:bg-gold/10 transition-colors">
                                <Heart className="w-10 h-10 text-gold" />
                            </div>
                            <h3 className="font-display text-2xl font-bold text-dark mb-4">
                                Humanização
                            </h3>
                            <p className="text-ink font-light leading-relaxed">
                                Atendimento acolhedor e empático, respeitando as necessidades individuais.
                            </p>
                        </div>

                        <div className="text-center p-10 glass rounded-3xl border border-gold/10 hover:border-gold/30 transition-colors group">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/10 rounded-2xl mb-8 group-hover:bg-gold/10 transition-colors">
                                <Target className="w-10 h-10 text-gold" />
                            </div>
                            <h3 className="font-display text-2xl font-bold text-dark mb-4">
                                Personalização
                            </h3>
                            <p className="text-ink font-light leading-relaxed">
                                Protocolos customizados que respeitam a individualidade de cada paciente.
                            </p>
                        </div>

                        <div className="text-center p-10 glass rounded-3xl border border-gold/10 hover:border-gold/30 transition-colors group">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/10 rounded-2xl mb-8 group-hover:bg-gold/10 transition-colors">
                                <Sparkles className="w-10 h-10 text-gold" />
                            </div>
                            <h3 className="font-display text-2xl font-bold text-dark mb-4">
                                Inovação
                            </h3>
                            <p className="text-ink font-light leading-relaxed">
                                Atualização constante com as mais modernas técnicas e tecnologias do mercado.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
