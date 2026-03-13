import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/data/config';
import { formatWhatsAppLink } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Antes & Depois', href: '/antes-depois' },
    { name: 'Blog', href: '/blog' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Contato', href: '/contato' },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                'fixed w-full z-50 transition-all duration-500',
                scrolled
                    ? 'py-3 bg-navy-900/90 backdrop-blur-lg border-b border-white/5 shadow-2xl'
                    : 'py-6 bg-transparent'
            )}
        >
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-white shadow-xl flex-shrink-0 border-2 border-gold transition-transform duration-300 group-hover:scale-105">
                            <div className="absolute inset-0 rounded-full overflow-hidden">
                                <img
                                    src="/images/logo.png"
                                    alt="Thaysa Medeiros"
                                    className="w-full h-full object-cover scale-110"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className={`font-display text-xl sm:text-2xl font-bold transition-colors ${scrolled ? 'text-white' : 'text-white'}`}>
                                Thaysa Medeiros
                            </span>
                            <span className="text-xs sm:text-sm text-accent font-medium tracking-wide uppercase">
                                {siteConfig.specialty}
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="text-sm font-medium text-white/80 hover:text-accent transition-colors duration-200"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-4">
                        <a
                            href={`https://instagram.com/${siteConfig.instagram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/80 hover:text-accent transition-colors p-2"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                        <Button
                            size="md"
                            variant="primary"
                            className="gold-gradient text-navy-900 font-bold shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:scale-105 transition-transform"
                            onClick={() => window.open(formatWhatsAppLink(siteConfig.whatsapp, 'Olá! Gostaria de agendar uma avaliação.'), '_blank')}
                        >
                            <Phone className="w-4 h-4 mr-2" />
                            Agendar Agora
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className="lg:hidden p-2 text-white hover:text-accent transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="lg:hidden overflow-hidden"
                        >
                            <div className="pt-4 pb-6 space-y-1 px-4 bg-navy-900/95 backdrop-blur-xl border-b border-white/5 shadow-2xl">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className="block px-4 py-3 text-base font-semibold text-white/80 hover:text-gold hover:bg-white/5 rounded-xl transition-all"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <div className="pt-4 space-y-3 px-1">
                                    <a
                                        href={`https://instagram.com/${siteConfig.instagram}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center px-4 py-3 text-base font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                                    >
                                        <Instagram className="w-5 h-5 mr-3 text-gold" />
                                        Instagram
                                    </a>
                                    <Button
                                        size="lg"
                                        className="w-full gold-gradient text-navy-900 font-bold shadow-lg"
                                        onClick={() => {
                                            window.open(formatWhatsAppLink(siteConfig.whatsapp, 'Olá! Gostaria de agendar uma avaliação.'), '_blank');
                                            setMobileMenuOpen(false);
                                        }}
                                    >
                                        <Phone className="w-4 h-4 mr-2" />
                                        Agendar Avaliação
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
