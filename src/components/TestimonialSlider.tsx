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
                        <Card className="bg-white">
                            <CardContent className="p-8 sm:p-10">
                                {/* Stars */}
                                <div className="flex justify-center mb-4">
                                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-primary-400 text-primary-400" />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <blockquote className="text-center">
                                    <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed italic mb-6">
                                        "{testimonials[currentIndex].text}"
                                    </p>
                                    <footer>
                                        <div className="font-semibold text-neutral-800">
                                            {testimonials[currentIndex].name}
                                        </div>
                                        <div className="text-sm text-primary-600 mt-1">
                                            {testimonials[currentIndex].treatment}
                                        </div>
                                    </footer>
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
                    className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow text-neutral-700 hover:text-primary-500"
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
                                    : 'bg-neutral-300 hover:bg-neutral-400'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow text-neutral-700 hover:text-primary-500"
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
