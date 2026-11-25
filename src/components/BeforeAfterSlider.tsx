import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    alt: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage, alt }: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

        setSliderPosition(percent);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] overflow-hidden rounded-xl cursor-ew-resize select-none"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
        >
            {/* After Image (Background) */}
            <div className="absolute inset-0">
                <img
                    src={afterImage}
                    alt={`${alt} - Depois`}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-rose text-dark px-3 py-1 rounded-full text-sm font-medium">
                    Depois
                </div>
            </div>

            {/* Before Image (Clipped) */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img
                    src={beforeImage}
                    alt={`${alt} - Antes`}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-ink text-dark px-3 py-1 rounded-full text-sm font-medium">
                    Antes
                </div>
            </div>

            {/* Slider Line */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-ivory-light cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
            >
                {/* Slider Handle */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-ivory-light rounded-full shadow-strong flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="flex gap-1">
                        <div className="w-0.5 h-6 bg-blush" />
                        <div className="w-0.5 h-6 bg-blush" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
