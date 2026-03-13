import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/data/config';
import { formatWhatsAppLink } from '@/lib/utils';

const footerLinks = {
    services: [
        { name: 'Harmonização Facial', href: '/servicos/harmonizacao-facial' },
        { name: 'Limpeza de Pele', href: '/servicos/limpeza-de-pele-profunda' },
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
        <footer className="bg-navy-900 text-white border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-display text-2xl font-bold text-white">
                                {siteConfig.professionalName}
                            </h3>
                            <p className="text-gold font-medium mt-1">
                                {siteConfig.specialty}
                            </p>
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            {siteConfig.description}
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href={`https://instagram.com/${siteConfig.instagram}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-gold hover:bg-white/10 transition-all"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Serviços</h4>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                    to={link.href}
                                        className="text-neutral-400 hover:text-gold transition-colors text-sm font-light"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Institucional</h4>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                    to={link.href}
                                        className="text-slate-400 hover:text-gold transition-colors text-sm font-light"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Contato</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-sm group">
                                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                                <a
                                    href={formatWhatsAppLink(siteConfig.whatsapp, 'Olá! Gostaria de agendar uma avaliação.')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 group-hover:text-gold transition-colors font-light"
                                >
                                    {siteConfig.phone}
                                </a>
                            </li>
                            {siteConfig.email && (
                                <li className="flex items-start space-x-3 text-sm group">
                                    <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                                    <a
                                        href={`mailto:${siteConfig.email}`}
                                        className="text-slate-400 group-hover:text-gold transition-colors font-light"
                                    >
                                        {siteConfig.email}
                                    </a>
                                </li>
                            )}
                            <li className="flex items-start space-x-3 text-sm">
                                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                                <span className="text-slate-400 font-light">
                                    {siteConfig.address || `${siteConfig.city}, ${siteConfig.state}`}
                                </span>
                            </li>
                            {siteConfig.businessHours && (
                                <li className="flex items-start space-x-3 text-sm">
                                    <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                                    <div className="text-slate-400 font-light">
                                        <p>{siteConfig.businessHours.weekdays}</p>
                                        {siteConfig.businessHours.saturday && (
                                            <p>{siteConfig.businessHours.saturday}</p>
                                        )}
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-neutral-800">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-neutral-400 text-sm">
                            © {currentYear} {siteConfig.name}. Todos os direitos reservados.
                        </p>
                        <div className="flex space-x-6">
                            {footerLinks.legal.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
