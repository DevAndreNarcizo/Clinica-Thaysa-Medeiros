import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Tag } from 'lucide-react';
import { getBlogPostBySlug, blogPosts } from '@/data/blog';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { siteConfig } from '@/data/config';
import { formatWhatsAppLink } from '@/lib/utils';

const categoryLabel: Record<string, string> = {
    facial: 'Facial',
    corporal: 'Corporal',
    avancado: 'Avançado',
    dicas: 'Dicas',
};

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const post = slug ? getBlogPostBySlug(slug) : null;

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-navy-900 p-4 text-center text-white">
                <h1 className="text-4xl font-bold mb-4 font-display">Artigo não encontrado</h1>
                <Button onClick={() => navigate('/blog')} variant="outline">Ver todos os artigos</Button>
            </div>
        );
    }

    const relatedPosts = blogPosts.filter(p => p.slug !== slug && p.category === post.category).slice(0, 3);

    return (
        <div className="min-h-screen bg-navy-900 text-white">
            <Helmet>
                <title>{post.title} | Blog Thaysa Medeiros</title>
                <meta name="description" content={post.excerpt} />
                <link rel="canonical" href={`https://clinicathaysamedeiros.com.br/blog/${post.slug}`} />
            </Helmet>

            {/* Breadcrumb */}
            <div className="bg-navy-900 border-b border-white/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Breadcrumb items={[
                        { label: 'Início', href: '/' },
                        { label: 'Blog', href: '/blog' },
                        { label: post.title },
                    ]} />
                </div>
            </div>

            {/* Cover Image */}
            <div className="relative h-64 sm:h-80">
                <img
                    src={post.coverImage}
                    alt={post.title}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover brightness-[0.4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-gold text-navy-900 mb-4 tracking-widest uppercase">
                            {categoryLabel[post.category] ?? post.category}
                        </span>
                        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">{post.title}</h1>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-8 pb-8 border-b border-white/10">
                    <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gold" />
                        {new Date(post.publishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gold" />
                        {post.readTime} minutos de leitura
                    </span>
                    <span className="flex items-center gap-2 sm:ml-auto text-xs">
                        Por <strong className="text-white ml-1">Dra. Thaysa Medeiros</strong>
                    </span>
                </div>

                {/* Article Body */}
                <div className="text-slate-300 leading-relaxed space-y-4">
                    {post.content.split('\n\n').map((block, i) => {
                        if (block.startsWith('## ')) {
                            return <h2 key={i} className="font-display text-2xl font-bold text-white mt-10 mb-4">{block.replace('## ', '')}</h2>;
                        }
                        if (block.startsWith('### ')) {
                            return <h3 key={i} className="font-display text-xl font-bold text-white mt-7 mb-3">{block.replace('### ', '')}</h3>;
                        }
                        if (block.startsWith('- ') || block.includes('\n- ')) {
                            const items = block.split('\n').filter(l => l.startsWith('- ')).map(l => l.replace('- ', ''));
                            return (
                                <ul key={i} className="list-disc list-inside space-y-2 ml-2">
                                    {items.map((item, j) => (
                                        <li key={j} className="text-slate-300" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                                    ))}
                                </ul>
                            );
                        }
                        if (block.trim() === '') return null;
                        return (
                            <p key={i} className="text-slate-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                        );
                    })}
                </div>

                {/* Tags */}
                {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-white/10">
                        <Tag className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        {post.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full text-xs bg-white/5 text-slate-400 border border-white/10">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* CTA */}
                <div className="mt-12 p-8 bg-navy border border-gold/20 rounded-2xl text-center">
                    <h3 className="font-display text-2xl font-bold text-white mb-3">
                        Quer saber mais sobre este tratamento?
                    </h3>
                    <p className="text-slate-400 mb-6 font-light">Agende sua avaliação gratuita com a Dra. Thaysa Medeiros em Goiânia.</p>
                    <Button
                        size="lg"
                        className="gold-gradient text-navy font-bold"
                        onClick={() => window.open(
                            formatWhatsAppLink(siteConfig.whatsapp, `Olá! Li o artigo "${post.title}" e gostaria de agendar uma avaliação.`),
                            '_blank'
                        )}
                    >
                        Agendar Avaliação Gratuita
                    </Button>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <div className="mt-12">
                        <h3 className="font-display text-2xl font-bold text-white mb-6">Artigos Relacionados</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {relatedPosts.map(p => (
                                <Link
                                    key={p.id}
                                    to={`/blog/${p.slug}`}
                                    className="group block bg-white/5 rounded-xl p-4 border border-white/5 hover:border-gold/30 transition-all"
                                >
                                    <h4 className="font-semibold text-white text-sm group-hover:text-gold transition-colors line-clamp-2">{p.title}</h4>
                                    <p className="text-xs text-slate-500 mt-1">{p.readTime} min de leitura</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
