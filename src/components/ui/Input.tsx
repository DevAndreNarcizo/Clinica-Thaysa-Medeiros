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
                        'flex h-12 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-base',
                        'placeholder:text-neutral-400',
                        'focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent',
                        'disabled:cursor-not-allowed disabled:opacity-50',
                        'transition-all duration-200',
                        error && 'border-red-500 focus:ring-red-400',
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {error && (
                    <p className="mt-1.5 text-sm text-red-600">{error}</p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

export { Input };
