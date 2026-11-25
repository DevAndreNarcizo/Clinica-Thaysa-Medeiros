import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/data/services';
import type { Service } from '@/types';
import { cn } from '@/lib/utils';

const categories = [
    { value: 'all', label: 'Todos' },
    { value: 'facial', label: 'Facial' },
    { value: 'corporal', label: 'Corporal' },
    { value: 'avancado', label: 'Avançado' },
] as const;

export default function Services() {
    const [selectedCategory, setSelectedCategory] = useState<'all' | Service['category']>('all');

    const filteredServices =
        selectedCategory === 'all'
            ? services
            : services.filter((s) => s.category === selectedCategory);

    return (
        <div className="min-h-screen bg-dark">
            <Helmet>
                <title>Serviços | Thaysa Medeiros — Estética Avançada em Goiânia</title>
                <meta name="description" content="Conheça todos os procedimentos estéticos da Clínica Thaysa Medeiros: harmonização facial, botox, criolipólise, microagulhamento e muito mais em Goiânia." />
                <link rel="canonical" href="https://clinicathaysamedeiros.com.br/servicos" />
            </Helmet>

            {/* Hero */}
            <section className="bg-dark text-dark py-20 sm:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/90 to-dark/80 z-0" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
                            Nossos Serviços
                        </h1>
                        <p className="text-lg text-ink">
                            Tratamentos estéticos avançados personalizados para realçar sua beleza natural.
                            Tecnologia de ponta combinada com atendimento humanizado.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filters */}
            <section className="bg-dark border-b border-dark/10 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in delay-200">
                        {categories.map((category) => (
                            <button
                                key={category.value}
                                onClick={() => setSelectedCategory(category.value)}
                                className={cn(
                                    "px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 border-2",
                                    selectedCategory === category.value
                                        ? "bg-gold text-dark border-gold shadow-lg shadow-gold/20"
                                        : "bg-transparent text-ink border-dark/10 hover:border-gold/50 hover:text-dark"
                                )}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredServices.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>

                    {filteredServices.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-ink">Nenhum serviço encontrado nesta categoria.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
