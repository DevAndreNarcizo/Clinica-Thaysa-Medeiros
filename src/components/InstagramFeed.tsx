import { Instagram, ExternalLink } from 'lucide-react';
import { instagramPosts } from '@/data/instagram';
import { siteConfig } from '@/data/config';
import { Button } from '@/components/ui/Button';

interface InstagramFeedProps {
    limit?: number;
}

export function InstagramFeed({ limit = 6 }: InstagramFeedProps) {
    const posts = instagramPosts.slice(0, limit);
    const profileUrl = `https://instagram.com/${siteConfig.instagram}`;

    return (
        <section className="relative z-10 border-t border-dark/5 bg-ivory-light py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 text-center">
                    <div className="mb-4 inline-flex items-center gap-3 text-dark">
                        <Instagram className="h-8 w-8 text-gold" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em]">Instagram</span>
                    </div>
                    <h2 className="font-display text-4xl font-semibold text-dark sm:text-5xl">Acompanhe a clínica</h2>
                    <p className="mx-auto mt-4 max-w-xl text-ink">
                        Siga <a href={profileUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-dark hover:text-gold">@{siteConfig.instagram}</a> para ver conteúdos publicados no perfil oficial.
                    </p>
                </div>

                {posts.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
                        {posts.map((post) => (
                            <a
                                key={post.id}
                                href={profileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative aspect-square overflow-hidden rounded-2xl border border-dark/10 bg-ivory"
                            >
                                <img src={post.imageUrl} alt="Conteúdo publicado pela clínica no Instagram" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 flex items-center justify-center bg-dark/0 transition-colors group-hover:bg-dark/55">
                                    <ExternalLink className="h-7 w-7 scale-75 text-dark opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100" />
                                </div>
                            </a>
                        ))}
                    </div>
                )}

                <div className="mt-10 text-center">
                    <Button size="lg" variant="outline" className="border-dark/20 text-dark hover:bg-dark hover:text-ivory" onClick={() => window.open(profileUrl, '_blank')}>
                        <Instagram className="mr-3 h-5 w-5" />
                        Siga-nos no Instagram
                    </Button>
                </div>
            </div>
        </section>
    );
}
