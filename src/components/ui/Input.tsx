import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, error, ...props }, ref) => {
        return (
            <div className="w-full">
                <input
                    type={type}
                    className={cn(
                        'flex h-12 w-full rounded-lg border border-blush bg-ivory-light px-4 py-3 text-base',
                        'placeholder:text-ink',
                        'focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent',
                        'disabled:cursor-not-allowed disabled:opacity-50',
                        'transition-all duration-200',
                        error && 'border-rose focus:ring-rose',
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {error && (
                    <p className="mt-1.5 text-sm text-ink">{error}</p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

export { Input };
