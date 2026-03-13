import { Award, Heart, Target, Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { team } from '@/data/team';

export default function About() {
    return (
        <div className="min-h-screen bg-navy-900">
            <Helmet>
                <title>Sobre a Clínica | Thaysa Medeiros — Estética Avançada Goiânia</title>
                <meta name="description" content="Conheça a Dra. Thaysa Medeiros, esteticista especialista em Goiânia. Nossa missão é oferecer tratamentos estéticos avançados com excelência e humanização." />
                <link rel="canonical" href="https://clinicathaysamedeiros.com.br/sobre" />
            </Helmet>
            {/* Hero */}
            <section className="bg-navy-900 text-white py-24 sm:py-32 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/about-mission.jpg"
                        alt="Background"
                        className="w-full h-full object-cover opacity-10 brightness-[0.2]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900/90 to-navy-900/70" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Sobre a Clínica</span>
                        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                            Excelência em <br /><span className="gold-text">Estética Avançada</span>
                        </h1>
                        <p className="text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
                            Conheça nossa história, valores e o compromisso inabalável com a sua autoestima e bem-estar.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-20 sm:py-24 bg-navy-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-slide-up">
                            <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">Propósito</span>
                            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8">
                                Nossa <span className="gold-text">Missão</span>
                            </h2>
                            <p className="text-slate-300 text-lg leading-relaxed mb-8 font-light">
                                Proporcionar tratamentos estéticos avançados com excelência técnica e atendimento humanizado,
                                valorizando a beleza natural de cada paciente e promovendo autoestima e bem-estar.
                            </p>
                            <p className="text-slate-300 text-lg leading-relaxed font-light border-l-2 border-gold pl-6">
                                Acreditamos que cada pessoa é única e merece um cuidado personalizado. Por isso,
                                desenvolvemos protocolos individualizados que respeitam suas características e objetivos.
                            </p>
                        </div>

                        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                            <img
                                src="/images/about-mission.jpg"
                                alt="Nossa Missão"
                                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 sm:py-24 bg-navy-900 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                            Nossos <span className="gold-text">Valores</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto font-light text-lg">
                            Princípios que guiam nosso trabalho e relacionamento com cada paciente
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-10 glass rounded-3xl border border-gold/10 hover:border-gold/30 transition-colors group">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/5 rounded-2xl mb-8 group-hover:bg-gold/10 transition-colors">
                                <Award className="w-10 h-10 text-gold" />
                            </div>
                            <h3 className="font-display text-2xl font-bold text-white mb-4">
                                Excelência
                            </h3>
                            <p className="text-slate-400 font-light leading-relaxed">
                                Compromisso com a qualidade técnica e resultados superiores em cada procedimento.
                            </p>
                        </div>

                        <div className="text-center p-10 glass rounded-3xl border border-gold/10 hover:border-gold/30 transition-colors group">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/5 rounded-2xl mb-8 group-hover:bg-gold/10 transition-colors">
                                <Heart className="w-10 h-10 text-gold" />
                            </div>
                            <h3 className="font-display text-2xl font-bold text-white mb-4">
                                Humanização
                            </h3>
                            <p className="text-slate-400 font-light leading-relaxed">
                                Atendimento acolhedor e empático, respeitando as necessidades individuais.
                            </p>
                        </div>

                        <div className="text-center p-10 glass rounded-3xl border border-gold/10 hover:border-gold/30 transition-colors group">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/5 rounded-2xl mb-8 group-hover:bg-gold/10 transition-colors">
                                <Target className="w-10 h-10 text-gold" />
                            </div>
                            <h3 className="font-display text-2xl font-bold text-white mb-4">
                                Personalização
                            </h3>
                            <p className="text-slate-400 font-light leading-relaxed">
                                Protocolos customizados que respeitam a individualidade de cada paciente.
                            </p>
                        </div>

                        <div className="text-center p-10 glass rounded-3xl border border-gold/10 hover:border-gold/30 transition-colors group">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/5 rounded-2xl mb-8 group-hover:bg-gold/10 transition-colors">
                                <Sparkles className="w-10 h-10 text-gold" />
                            </div>
                            <h3 className="font-display text-2xl font-bold text-white mb-4">
                                Inovação
                            </h3>
                            <p className="text-slate-400 font-light leading-relaxed">
                                Atualização constante com as mais modernas técnicas e tecnologias do mercado.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24 sm:py-32 bg-navy-900 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center text-center mb-20 animate-fade-in">
                        <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Especialistas</span>
                        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Nossa <span className="gold-text">Equipe</span>
                        </h2>
                        <div className="w-24 h-1 bg-gold/50 mx-auto mb-8"></div>
                        <p className="text-slate-400 max-w-2xl mx-auto font-light text-xl leading-relaxed">
                            Profissionais altamente qualificados e apaixonados por transformar vidas através da estética avançada.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {team.map((member) => (
                            <div key={member.id} className="glass rounded-3xl overflow-hidden border border-white/5 group hover:border-gold/20 transition-all duration-500">
                                <div className="relative h-[450px] overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-60"></div>
                                </div>
                                <div className="p-10">
                                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-gold font-bold text-sm tracking-widest uppercase mb-6">{member.role}</p>
                                    <p className="text-slate-400 mb-8 leading-relaxed font-light">{member.bio}</p>

                                    <div className="space-y-4">
                                        <h4 className="font-bold text-white text-xs uppercase tracking-widest border-b border-white/10 pb-2">Qualificações</h4>
                                        <ul className="space-y-2">
                                            {member.credentials.map((credential, index) => (
                                                <li key={index} className="text-xs text-slate-500 flex items-start gap-3">
                                                    <span className="text-gold mt-1">•</span>
                                                    {credential}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
