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
        <Card hover className="h-full flex flex-col overflow-hidden group bg-navy border-white/5 hover:border-accent/30 transition-all duration-500 shadow-2xl">
            <div className="relative h-64 overflow-hidden">
                <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-80" />
                <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-accent text-navy">
                        {service.category === 'facial' && 'Facial'}
                        {service.category === 'corporal' && 'Corporal'}
                        {service.category === 'avancado' && 'Avançado'}
                    </span>
                </div>
            </div>

            <CardContent className="flex-1 p-8">
                <Link to={`/servicos/${service.slug}`}>
                    <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors hover:text-gold">
                        {service.title}
                    </h3>
                </Link>
                <p className="text-slate-400 text-sm leading-relaxed font-light mb-6">
                    {service.shortDescription}
                </p>

                <div className="space-y-3">
                    <div className="flex items-center text-xs text-slate-500 tracking-wide uppercase">
                        <span className="w-20 font-bold text-accent/70">Duração</span>
                        <span className="text-white/80">{service.duration}</span>
                    </div>
                    <div className="flex items-center text-xs text-slate-500 tracking-wide uppercase">
                        <span className="w-20 font-bold text-accent/70">Sessões</span>
                        <span className="text-white/80">{service.sessions}</span>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="p-8 pt-0 flex flex-col gap-3">
                {service.instagramPost && (
                    <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full border-accent/20 text-accent hover:bg-accent hover:text-navy glass text-xs font-bold py-5"
                        onClick={() => window.open(service.instagramPost, '_blank')}
                    >
                        Ver no Instagram
                        <ArrowRight className="w-3 h-3 ml-2" />
                    </Button>
                )}
                <Button 
                    className="w-full gold-gradient text-navy font-bold py-6 group/btn shadow-lg"
                    onClick={() => window.open(`https://wa.me/55${siteConfig.whatsapp}?text=Olá! Gostaria de mais informações sobre: ${service.title}`, '_blank')}
                >
                    Agendar Agora
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
            </CardFooter>
        </Card>
    );
}
