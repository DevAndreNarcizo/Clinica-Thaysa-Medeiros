import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn, formatWhatsAppLink } from '@/lib/utils';
import { siteConfig } from '@/data/config';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

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
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!mobileMenuOpen) return;
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setMobileMenuOpen(false);
                menuButtonRef.current?.focus();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [mobileMenuOpen]);

    const closeMenu = () => setMobileMenuOpen(false);

    return (
        <header
            className={cn(
                'fixed left-0 top-0 z-50 w-full transition-all duration-300',
                scrolled
                    ? 'border-b border-blush/60 bg-ivory-light/95 py-2 shadow-[0_8px_30px_-18px_rgba(36,26,30,0.25)] backdrop-blur-lg'
                    : 'bg-transparent py-4 sm:py-5'
            )}
        >
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Navegação principal">
                <div className="flex h-14 items-center justify-between gap-3">
                    <Link to="/" className="group flex min-w-0 items-center" aria-label="Ir para a página inicial">
                        <span className="font-display text-xl font-semibold tracking-wide text-dark sm:text-2xl">
                            Thaysa Medeiros
                        </span>
                    </Link>

                    <div className="hidden items-center gap-7 lg:flex">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="text-sm font-semibold text-ink transition-colors hover:text-dark focus-visible:text-dark"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden items-center gap-3 lg:flex" suppressHydrationWarning>
                        <a
                            href={`https://instagram.com/${siteConfig.instagram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full p-2 text-ink transition-colors hover:text-dark"
                            aria-label="Abrir Instagram da clínica"
                        >
                            <Instagram className="h-5 w-5" />
                        </a>
                        <Button
                            size="md"
                            variant="primary"
                            className="bg-gold text-dark shadow-sm hover:bg-blush"
                            onClick={() => window.open(formatWhatsAppLink(siteConfig.whatsapp, 'Olá! Gostaria de agendar uma avaliação.'), '_blank')}
                        >
                            <Phone className="mr-2 h-4 w-4" />
                            Agendar Agora
                        </Button>
                    </div>

                    <button
                        ref={menuButtonRef}
                        type="button"
                        className="rounded-lg p-2 text-dark transition-colors hover:bg-blush/35 lg:hidden"
                        onClick={() => setMobileMenuOpen((open) => !open)}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-navigation"
                        aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            id="mobile-navigation"
                            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                            transition={{ duration: reduceMotion ? 0 : 0.25 }}
                            className="overflow-hidden lg:hidden"
                        >
                            <div className="mt-2 rounded-2xl border border-blush/60 bg-ivory/98 px-3 py-3 shadow-strong">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className="block rounded-xl px-4 py-3 text-base font-semibold text-ink hover:bg-blush/35 hover:text-dark"
                                        onClick={closeMenu}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <a
                                    href={`https://instagram.com/${siteConfig.instagram}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-blush/35"
                                    onClick={closeMenu}
                                >
                                    <Instagram className="mr-3 h-5 w-5 text-dark" />
                                    Instagram
                                </a>
                                <Button
                                    size="lg"
                                    className="mt-2 w-full bg-gold text-dark hover:bg-blush"
                                    onClick={() => {
                                        window.open(formatWhatsAppLink(siteConfig.whatsapp, 'Olá! Gostaria de agendar uma avaliação.'), '_blank');
                                        closeMenu();
                                    }}
                                >
                                    <Phone className="mr-2 h-4 w-4" />
                                    Agendar Avaliação
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
