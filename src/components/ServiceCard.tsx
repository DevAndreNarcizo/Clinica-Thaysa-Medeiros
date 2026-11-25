import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Service } from '@/types';
import { siteConfig } from '@/data/config';

interface ServiceCardProps {
    service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
    return (
        <Card hover className="flex h-full flex-col overflow-hidden border-dark/10 bg-ivory shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-medium">
            <div className="relative flex h-64 items-end overflow-hidden bg-gradient-to-br from-ivory-light via-blush/20 to-sage/30 p-7">
                <div className="absolute right-6 top-6 h-24 w-24 rounded-full border border-gold/30" />
                <span className="font-display text-3xl font-semibold text-dark/20" aria-hidden="true">
                    {String(service.id).padStart(2, '0')}
                </span>
                <div className="absolute right-4 top-4">
                    <span className="inline-flex rounded-full bg-ivory/95 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-dark shadow-sm">
                        {service.category === 'facial' && 'Facial'}
                        {service.category === 'corporal' && 'Corporal'}
                        {service.category === 'avancado' && 'Avançado'}
                    </span>
                </div>
            </div>

            <CardContent className="flex-1 p-7">
                <Link to={`/servicos/${service.slug}`}>
                    <h3 className="font-display text-2xl font-semibold text-dark transition-colors hover:text-gold">{service.title}</h3>
                </Link>
                <p className="mb-6 mt-3 text-sm leading-relaxed text-ink">{service.shortDescription}</p>
                <div className="space-y-2 text-xs">
                    <div className="flex"><span className="w-20 font-bold uppercase tracking-wide text-gold">Duração</span><span className="text-ink">{service.duration}</span></div>
                    <div className="flex"><span className="w-20 font-bold uppercase tracking-wide text-gold">Sessões</span><span className="text-ink">{service.sessions}</span></div>
                </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-3 p-7 pt-0">
                {service.instagramPost && (
                    <Button variant="outline" size="sm" className="w-full border-dark/15 text-dark hover:bg-dark hover:text-ivory" onClick={() => window.open(service.instagramPost, '_blank')}>
                        Ver no Instagram
                        <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                )}
                <Button className="w-full bg-dark py-5 text-ivory hover:bg-ink" onClick={() => window.open(`https://wa.me/55${siteConfig.whatsapp.replace('+55', '')}?text=Olá! Gostaria de mais informações sobre: ${service.title}`, '_blank')}>
                    Agendar agora
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </CardFooter>
        </Card>
    );
}
