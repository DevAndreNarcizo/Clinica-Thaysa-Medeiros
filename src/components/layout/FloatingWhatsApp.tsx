'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig } from '@/data/config';
import { formatWhatsAppLink } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        // Show button after 2 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
            // Show tooltip after button appears
            setTimeout(() => setShowTooltip(true), 500);
            // Hide tooltip after 5 seconds
            setTimeout(() => setShowTooltip(false), 5500);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleClick = () => {
        window.open(
            formatWhatsAppLink(
                siteConfig.whatsapp,
                'Olá! Vim através do site e gostaria de mais informações sobre os tratamentos.'
            ),
            '_blank'
        );
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="fixed right-4 sm:right-6 z-50"
                    style={{ bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))' }}
                >
                    {/* Tooltip */}
                    <AnimatePresence>
                        {showTooltip && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="absolute bottom-full right-0 mb-4 mr-2"
                            >
                                <div className="relative bg-ivory-light rounded-lg shadow-strong p-4 max-w-xs">
                                    <button
                                        onClick={() => setShowTooltip(false)}
                                        className="absolute top-2 right-2 text-ink hover:text-ink"
                                        aria-label="Close tooltip"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                    <p className="text-sm text-ink pr-6">
                                        <strong className="text-ink">Olá! 👋</strong>
                                        <br />
                                        Precisa de ajuda? Fale comigo no WhatsApp!
                                    </p>
                                    {/* Arrow */}
                                    <div className="absolute -bottom-2 right-8 w-4 h-4 bg-ivory-light transform rotate-45 shadow-strong" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* WhatsApp Button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleClick}
                        className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-rose hover:bg-rose text-dark rounded-full shadow-strong transition-colors duration-200"
                        aria-label="Contact via WhatsApp"
                    >
                        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
                    </motion.button>

                    {/* Pulse animation */}
                    <span className="absolute inset-0 rounded-full bg-rose opacity-75 animate-ping pointer-events-none" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
