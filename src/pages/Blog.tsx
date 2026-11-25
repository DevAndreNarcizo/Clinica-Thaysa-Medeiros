import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { getBlogPostsByCategory } from '@/data/blog';
import { cn } from '@/lib/utils';

const categories = [
    { value: 'all', label: 'Todos' },
    { value: 'facial', label: 'Facial' },
    { value: 'corporal', label: 'Corporal' },
    { value: 'avancado', label: 'Avançado' },
    { value: 'dicas', label: 'Dicas' },
];

const categoryLabel: Record<string, string> = {
    facial: 'Facial',
    corporal: 'Corporal',
    avancado: 'Avançado',
    dicas: 'Dicas',
};

export default function Blog() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const filtered = getBlogPostsByCategory(selectedCategory);

    return (
        <div className="min-h-screen bg-dark">
            <Helmet>
                <title>Blog | Dicas de Estética e Beleza | Thaysa Medeiros Goiânia</title>
                <meta name="description" content="Artigos sobre harmonização facial, criolipólise, microagulhamento e dicas de cuidados estéticos pela Dra. Thaysa Medeiros em Goiânia." />
                <link rel="canonical" href="https://clinicathaysamedeiros.com.br/blog" />
            </Helmet>

            {/* Hero */}
            <section className="bg-dark text-dark py-20 sm:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/90 to-dark/80 z-0" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Conteúdo Educativo</span>
                        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
                            Blog e <span className="gold-text">Dicas</span>
                        </h1>
                        <p className="text-lg text-ink font-light">
                            Informações confiáveis sobre procedimentos estéticos, cuidados com a pele e beleza — direto da Dra. Thaysa Medeiros.
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="bg-dark border-b border-dark/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map(cat => (
                            <button
                                key={cat.value}
                                onClick={() => setSelectedCategory(cat.value)}
                                className={cn(
                                    "px-6 py-2.5 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 border-2",
                                    selectedCategory === cat.value
                                        ? "bg-gold text-dark border-gold shadow-lg shadow-gold/20"
                                        : "bg-transparent text-ink border-dark/10 hover:border-gold/50 hover:text-dark"
                                )}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filtered.map(post => (
                            <article key={post.id} className="group bg-ivory border border-dark/10 hover:border-gold/30 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col shadow-xl">
                                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-ivory-light via-blush/20 to-sage/30">
                                    <div className="absolute right-6 top-6 h-24 w-24 rounded-full border border-gold/30" />
                                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-gold text-dark">
                                        {categoryLabel[post.category] ?? post.category}
                                    </span>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center gap-4 text-xs text-ink mb-3">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(post.publishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime} min
                                        </span>
                                    </div>
                                    <h2 className="font-display text-lg font-bold text-dark mb-2 group-hover:text-gold transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-ink text-sm leading-relaxed font-light mb-4 flex-1 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:gap-3 transition-all"
                                    >
                                        Ler artigo completo
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-ink">Nenhum artigo encontrado nesta categoria.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
