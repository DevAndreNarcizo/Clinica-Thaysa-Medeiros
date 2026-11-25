import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/data/config';
import { formatWhatsAppLink } from '@/lib/utils';

const footerLinks = {
    services: [
        { name: 'Harmonização Facial', href: '/servicos/harmonizacao-facial' },
        { name: 'Limpeza de Pele', href: '/servicos/limpeza-de-pele' },
        { name: 'Criolipólise', href: '/servicos/criolipolise' },
        { name: 'Microagulhamento', href: '/servicos/microagulhamento' },
    ],
    company: [
        { name: 'Sobre', href: '/sobre' },
        { name: 'Serviços', href: '/servicos' },
        { name: 'Antes & Depois', href: '/antes-depois' },
        { name: 'Contato', href: '/contato' },
    ],
    legal: [
        { name: 'Política de Privacidade', href: '/privacidade' },
        { name: 'Termos de Uso', href: '/termos' },
    ],
};

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-gold/20 bg-dark text-ivory">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                    <div className="space-y-5">
                        <span className="font-display text-2xl font-semibold text-ivory">
                            Thaysa Medeiros
                        </span>
                        <p className="text-sm leading-relaxed text-ivory/75">
                            {siteConfig.description}
                        </p>
                        <a
                            href={`https://instagram.com/${siteConfig.instagram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-blush transition-colors hover:border-blush hover:bg-ivory/10 hover:text-gold"
                            aria-label="Instagram da clínica"
                        >
                            <Instagram className="h-5 w-5" />
                        </a>
                    </div>

                    <div>
                        <h4 className="mb-4 font-semibold text-ivory">Serviços</h4>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.href} className="text-sm text-ivory/70 transition-colors hover:text-blush">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 font-semibold text-ivory">Institucional</h4>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.href} className="text-sm text-ivory/70 transition-colors hover:text-blush">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 font-semibold text-ivory">Contato</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm">
                                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                                <a href={formatWhatsAppLink(siteConfig.whatsapp, 'Olá! Gostaria de agendar uma avaliação.')} target="_blank" rel="noopener noreferrer" className="text-ivory/70 transition-colors hover:text-blush">
                                    {siteConfig.phone}
                                </a>
                            </li>
                            {siteConfig.email && (
                                <li className="flex items-start gap-3 text-sm">
                                    <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                                    <a href={`mailto:${siteConfig.email}`} className="text-ivory/70 transition-colors hover:text-blush">{siteConfig.email}</a>
                                </li>
                            )}
                            <li className="flex items-start gap-3 text-sm">
                                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                                <span className="text-ivory/70">{siteConfig.address || `${siteConfig.city}, ${siteConfig.state}`}</span>
                            </li>
                            {siteConfig.businessHours && (
                                <li className="flex items-start gap-3 text-sm">
                                    <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                                    <div className="text-ivory/70">
                                        <p>{siteConfig.businessHours.weekdays}</p>
                                        {siteConfig.businessHours.saturday && <p>{siteConfig.businessHours.saturday}</p>}
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between space-y-4 border-t border-ivory/15 pt-8 md:flex-row md:space-y-0">
                    <p className="text-sm text-ivory/60">© {currentYear} {siteConfig.name}. Todos os direitos reservados.</p>
                    <div className="flex space-x-6">
                        {footerLinks.legal.map((link) => (
                            <Link key={link.name} to={link.href} className="text-sm text-ivory/60 transition-colors hover:text-blush">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
