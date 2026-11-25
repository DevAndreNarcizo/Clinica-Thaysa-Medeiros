import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { formatWhatsAppLink } from '@/lib/utils';
import { siteConfig } from '@/data/config';

export default function BeforeAfter() {
    return (
        <div className="min-h-screen bg-dark text-dark">
            <Helmet>
                <title>Atendimento Individual | Thaysa Medeiros Goiânia</title>
                <meta name="description" content="Conheça os cuidados estéticos da Clínica Thaysa Medeiros por meio de uma avaliação individual." />
                <link rel="canonical" href="https://clinicathaysamedeiros.com.br/antes-depois" />
            </Helmet>

            <section className="flex min-h-[70vh] items-center justify-center bg-dark px-4 py-24 sm:px-6 lg:px-8">
                <div className="max-w-3xl text-center">
                    <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-gold">Cuidado individual</span>
                    <h1 className="font-display text-4xl font-bold sm:text-5xl">Avaliação personalizada</h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-ink">
                        O procedimento adequado é definido após avaliação profissional, considerando objetivos e características individuais.
                    </p>
                    <Button
                        size="lg"
                        className="mt-9 bg-gold px-10 py-6 text-dark hover:bg-blush"
                        onClick={() => window.open(formatWhatsAppLink(siteConfig.whatsapp, 'Olá! Gostaria de agendar uma avaliação individual.'), '_blank')}
                    >
                        Agendar pelo WhatsApp
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </section>
        </div>
    );
}
