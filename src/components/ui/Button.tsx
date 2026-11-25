import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                className={cn(
                    'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2',
                    'disabled:pointer-events-none disabled:opacity-50',
                    {
                        // Variants
                        'bg-gold-500 text-dark hover:bg-blush active:bg-gold-600 shadow-md hover:shadow-lg transition-all duration-300 font-bold':
                            variant === 'primary',
                        'bg-dark text-ivory hover:bg-ink active:bg-dark shadow-md hover:shadow-lg transition-all duration-300':
                            variant === 'secondary',
                        'border-2 border-dark/20 text-dark hover:bg-gold-50 active:bg-gold-100 transition-all duration-300':
                            variant === 'outline',
                        'text-dark hover:bg-ivory active:bg-ivory-100 transition-all duration-300':
                            variant === 'ghost',
                        // Sizes
                        'px-4 py-2 text-sm': size === 'sm',
                        'px-6 py-3 text-base': size === 'md',
                        'px-8 py-4 text-lg': size === 'lg',
                    },
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';

export { Button };
