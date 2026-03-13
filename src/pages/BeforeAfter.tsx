import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { formatWhatsAppLink, cn } from '@/lib/utils';
import { siteConfig } from '@/data/config';

// Placeholder before/after data
const beforeAfterGallery = [
    {
        id: '1',
        treatment: 'Harmonização Facial',
        beforeImage: '/images/before-after/harmonizacao-before.jpg',
        afterImage: '/images/before-after/harmonizacao-after.jpg',
        description: 'Realce natural dos contornos faciais com ácido hialurônico',
        timeframe: '1 sessão',
        category: 'facial',
    },
    {
        id: '2',
        treatment: 'Microagulhamento',
        beforeImage: '/images/before-after/microagulhamento-before.jpg',
        afterImage: '/images/before-after/microagulhamento-after.jpg',
        description: 'Melhora significativa de cicatrizes de acne e textura da pele',
        timeframe: '4 sessões',
        category: 'facial',
    },
    {
        id: '3',
        treatment: 'Criolipólise',
        beforeImage: '/images/before-after/criolipolise-before.jpg',
        afterImage: '/images/before-after/criolipolise-after.jpg',
        description: 'Redução de gordura localizada no abdômen',
        timeframe: '2 sessões',
        category: 'corporal',
    },
    {
        id: '4',
        treatment: 'Bioestimulador de Colágeno',
        beforeImage: '/images/before-after/bioestimulador-before.jpg',
        afterImage: '/images/before-after/bioestimulador-after.jpg',
        description: 'Rejuvenescimento facial com estímulo natural de colágeno',
        timeframe: '3 sessões',
        category: 'avancado',
    },
    {
        id: '5',
        treatment: 'Peeling Químico',
        beforeImage: '/images/before-after/peeling-before.jpg',
        afterImage: '/images/before-after/peeling-after.jpg',
        description: 'Clareamento de manchas e uniformização do tom da pele',
        timeframe: '4 sessões',
        category: 'facial',
    },
    {
        id: '6',
        treatment: 'Drenagem Linfática',
        beforeImage: '/images/before-after/drenagem-before.jpg',
        afterImage: '/images/before-after/drenagem-after.jpg',
        description: 'Redução de inchaço e melhora do contorno corporal',
        timeframe: '10 sessões',
        category: 'corporal',
    },
];

const categories = [
    { value: 'all', label: 'Todos' },
    { value: 'facial', label: 'Facial' },
    { value: 'corporal', label: 'Corporal' },
    { value: 'avancado', label: 'Avançado' },
];

export default function BeforeAfter() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const filteredGallery =
        selectedCategory === 'all'
            ? beforeAfterGallery
            : beforeAfterGallery.filter((item) => item.category === selectedCategory);

    return (
        <div className="min-h-screen bg-navy-900 text-white">
            <Helmet>
                <title>Antes e Depois | Resultados Reais | Thaysa Medeiros Goiânia</title>
                <meta name="description" content="Veja os resultados reais dos tratamentos estéticos da Clínica Thaysa Medeiros. Antes e depois de harmonização, criolipólise, microagulhamento e mais." />
                <link rel="canonical" href="https://clinicathaysamedeiros.com.br/antes-depois" />
            </Helmet>

            {/* Hero */}
            <section className="bg-navy-900 text-white py-24 sm:py-32 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/before-after-bg.jpg"
                        alt="Background"
                        className="w-full h-full object-cover opacity-10 brightness-[0.2]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900/90 to-navy-900/70" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                        <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Resultados Reais</span>
                        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                            Galeria <br /><span className="gold-text">Antes & Depois</span>
                        </h1>
                        <p className="text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
                            Veja os resultados reais dos nossos tratamentos. Cada transformação é única e personalizada, focada na naturalidade e harmonia facial e corporal.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filter Navigation */}
                    <div className="flex flex-wrap gap-4 mb-20 justify-center animate-fade-in delay-200">
                        {categories.map((category) => (
                            <button
                                key={category.value}
                                onClick={() => setSelectedCategory(category.value)}
                                className={cn(
                                    "px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 border-2",
                                    selectedCategory === category.value
                                        ? "bg-gold text-navy-900 border-gold shadow-lg shadow-gold/20"
                                        : "bg-transparent text-slate-400 border-white/10 hover:border-gold/50 hover:text-white"
                                )}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {filteredGallery.map((item) => (
                            <div key={item.id} className="glass rounded-3xl overflow-hidden border border-white/5 hover:border-gold/20 transition-all duration-500 group">
                                <BeforeAfterSlider
                                    beforeImage={item.beforeImage}
                                    afterImage={item.afterImage}
                                    alt={item.treatment}
                                />
                                <div className="p-10">
                                    <h3 className="font-display text-3xl font-bold text-white mb-3">
                                        {item.treatment}
                                    </h3>
                                    <p className="text-slate-400 mb-8 font-light text-lg italic">"{item.description}"</p>
                                     <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gold bg-gold/5 w-fit px-5 py-2 rounded-full border border-gold/10">
                                        <span className="opacity-60 font-medium">Protocolo:</span>
                                        <span className="text-white">{item.timeframe}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* CTA */}
            <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-950 opacity-50" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                        Pronta Para Sua <span className="gold-text">Transformação?</span>
                    </h2>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Agende sua avaliação gratuita e descubra qual tratamento é ideal para você.
                    </p>
                    <Button
                        size="lg"
                        variant="primary"
                        className="px-12 py-8 rounded-2xl shadow-2xl text-lg"
                        onClick={() =>
                            window.open(
                                formatWhatsAppLink(siteConfig.whatsapp, 'Olá! Vi os resultados no site e gostaria de agendar uma avaliação.'),
                                '_blank'
                            )
                        }
                    >
                        Agendar Avaliação Gratuita
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            </section>
        </div>
    );
}
