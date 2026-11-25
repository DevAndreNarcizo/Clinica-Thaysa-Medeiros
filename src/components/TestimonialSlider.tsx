'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import { Card, CardContent } from '@/components/ui/Card';

export function TestimonialSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    return (
        <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden min-h-[280px] sm:min-h-[240px]">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: 'spring', stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                        className="absolute w-full"
                    >
                        <Card className="bg-ivory-light">
                            <CardContent className="p-8 sm:p-10">
                                {/* Header: Avatar + Google badge */}
                                <div className="flex items-center justify-between mb-5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-dark font-bold text-sm flex-shrink-0">
                                            {testimonials[currentIndex].avatar ?? testimonials[currentIndex].name.slice(0, 2).toUpperCase()}
                                        </div>
                                        <div className="text-left">
                                            <div className="font-semibold text-ink text-sm leading-tight">
                                                {testimonials[currentIndex].name}
                                            </div>
                                            <div className="text-xs text-gold mt-0.5">
                                                {testimonials[currentIndex].treatment}
                                            </div>
                                        </div>
                                    </div>
                                    {testimonials[currentIndex].source === 'Google' && (
                                        <div className="flex items-center gap-1.5 text-xs text-ink">
                                            <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
                                            <span>Google</span>
                                        </div>
                                    )}
                                </div>

                                {/* Stars */}
                                <div className="flex mb-4">
                                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-gold-light text-gold-light" />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <blockquote>
                                    <p className="text-base sm:text-lg text-ink leading-relaxed italic">
                                        "{testimonials[currentIndex].text}"
                                    </p>
                                </blockquote>
                            </CardContent>
                        </Card>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-6">
                <button
                    onClick={handlePrev}
                    className="p-2 rounded-full bg-ivory-light shadow-md hover:shadow-lg transition-shadow text-ink hover:text-primary-500"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-primary-500 w-8'
                                    : 'bg-blush hover:bg-blush'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className="p-2 rounded-full bg-ivory-light shadow-md hover:shadow-lg transition-shadow text-ink hover:text-primary-500"
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
