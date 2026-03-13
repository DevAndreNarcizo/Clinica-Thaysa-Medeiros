import { Instagram, ExternalLink } from 'lucide-react';
import { instagramPosts } from '@/data/instagram';
import { siteConfig } from '@/data/config';
import { Button } from '@/components/ui/Button';

interface InstagramFeedProps {
    limit?: number;
}

export function InstagramFeed({ limit = 6 }: InstagramFeedProps) {
    const posts = instagramPosts.slice(0, limit);

    return (
        <section className="py-24 bg-navy-900 border-t border-white/5 relative z-10 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center gap-3 mb-6">
                        <Instagram className="w-10 h-10 text-gold" />
                        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
                            Siga no <span className="gold-text">Instagram</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg mt-2">
                        Acompanhe nossos resultados, dicas de beleza e novidades no{' '}
                        <a
                            href={`https://instagram.com/${siteConfig.instagram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gold hover:text-white font-medium transition-colors"
                        >
                            @{siteConfig.instagram}
                        </a>
                    </p>
                </div>

                {/* Posts Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {posts.map((post) => (
                        <a
                            key={post.id}
                            href={post.permalink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-square overflow-hidden rounded-lg"
                        >
                            <img
                                src={post.imageUrl}
                                alt={post.caption.slice(0, 100)}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                                    <ExternalLink className="w-8 h-8 text-white mb-2" />
                                    <p className="text-white text-xs text-center line-clamp-3">
                                        {post.caption}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-10">
                    <Button
                        size="lg"
                        variant="outline"
                        className="text-white border-2 border-white hover:bg-white/10 hover:text-gold transition-all font-bold px-10 py-6 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                        onClick={() => window.open(`https://instagram.com/${siteConfig.instagram}`, '_blank')}
                    >
                        <Instagram className="w-5 h-5 mr-3" />
                        Siga-nos no Instagram
                    </Button>
                </div>
            </div>
        </section>
    );
}
