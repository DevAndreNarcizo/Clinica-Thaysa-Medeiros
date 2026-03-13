import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { getServiceBySlug } from '@/data/services';
import { siteConfig } from '@/data/config';
import { formatWhatsAppLink } from '@/lib/utils';
import { Link } from 'react-router-dom';

export default function ServiceDetail() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const service = slug ? getServiceBySlug(slug) : null;

    if (!service) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-navy-900 p-4 text-center text-white">
                <h1 className="text-4xl font-bold mb-4 font-display">Serviço não encontrado</h1>
                <Button onClick={() => navigate('/servicos')} variant="outline">Ver todos os serviços</Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-navy-900 text-white">
            {/* Back Button */}
            <div className="bg-navy-900 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link
                        to="/servicos"
                        className="inline-flex items-center text-slate-400 hover:text-gold font-medium transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Voltar para Serviços
                    </Link>
                </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-[400px] sm:h-[500px]">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover brightness-[0.4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-gold text-navy-900 mb-4 tracking-widest uppercase shadow-lg">
                            {service.category === 'facial' && 'Estética Facial'}
                            {service.category === 'corporal' && 'Estética Corporal'}
                            {service.category === 'avancado' && 'Estética Avançada'}
                        </span>
                        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
                            {service.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description */}
                        <div>
                            <h2 className="font-display text-3xl font-bold text-white mb-6">
                                Sobre o <span className="gold-text">Tratamento</span>
                            </h2>
                            <p className="text-slate-300 leading-relaxed text-lg font-light">
                                {service.fullDescription}
                            </p>
                        </div>

                        {/* Benefits */}
                        {service.benefits && service.benefits.length > 0 && (
                            <div>
                                <h2 className="font-display text-2xl font-bold text-white mb-6">
                                    Benefícios
                                </h2>
                                <ul className="space-y-4">
                                    {service.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center mt-1">
                                                <CheckCircle className="w-4 h-4 text-gold" />
                                            </div>
                                            <span className="text-slate-300 font-light">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* FAQ Section */}
                        <div className="pt-8 border-t border-white/5">
                            <h2 className="font-display text-2xl font-bold text-white mb-8">
                                Perguntas Frequentes
                            </h2>
                            <div className="space-y-4">
                                <details className="group glass border border-white/5 rounded-2xl p-6 transition-all">
                                    <summary className="font-bold text-white cursor-pointer list-none flex items-center justify-between">
                                        O tratamento é doloroso?
                                        <span className="text-gold transition-transform group-open:rotate-180">▼</span>
                                    </summary>
                                    <p className="mt-4 text-slate-400 font-light leading-relaxed">
                                        A maioria dos nossos tratamentos é minimamente invasiva e bem tolerada.
                                        Utilizamos técnicas e produtos que priorizam seu conforto durante todo o procedimento.
                                    </p>
                                </details>

                                <details className="group glass border border-white/5 rounded-2xl p-6 transition-all">
                                    <summary className="font-bold text-white cursor-pointer list-none flex items-center justify-between">
                                        Quando verei os resultados?
                                        <span className="text-gold transition-transform group-open:rotate-180">▼</span>
                                    </summary>
                                    <p className="mt-4 text-slate-400 font-light leading-relaxed">
                                        O tempo para visualizar resultados varia de acordo com o tratamento.
                                        Alguns procedimentos apresentam resultados imediatos, enquanto outros são progressivos.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 space-y-6">
                            {/* Info Card */}
                            <div className="glass border border-white/5 rounded-3xl p-8 space-y-6">
                                <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-gold" />
                                    Informações
                                </h3>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5">
                                        <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="font-bold text-white text-xs uppercase tracking-widest mb-1">Duração</div>
                                            <div className="text-slate-300 text-sm font-light">{service.duration}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5">
                                        <Calendar className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="font-bold text-white text-xs uppercase tracking-widest mb-1">Sessões</div>
                                            <div className="text-slate-300 text-sm font-light">{service.sessions}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Card */}
                            <div className="bg-navy-900 rounded-3xl p-8 text-white border border-gold/10 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full -mr-12 -mt-12 blur-2xl"></div>
                                <h3 className="font-display text-xl font-bold mb-2">
                                    Interessada?
                                </h3>
                                <p className="text-slate-400 text-sm mb-6 font-light">
                                    Agende sua avaliação gratuita e descubra como este tratamento pode transformar sua autoestima.
                                </p>
                                <Button
                                    size="lg"
                                    className="w-full gold-gradient text-navy font-bold shadow-lg"
                                    onClick={() =>
                                        window.open(
                                            formatWhatsAppLink(
                                                siteConfig.whatsapp,
                                                `Olá! Gostaria de agendar uma avaliação para ${service.title}.`
                                            ),
                                            '_blank'
                                        )
                                    }
                                >
                                    Agendar Avaliação
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
