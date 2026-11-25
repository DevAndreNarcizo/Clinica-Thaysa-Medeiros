import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, error, ...props }, ref) => {
        return (
            <div className="w-full">
                <textarea
                    className={cn(
                        'flex min-h-[120px] w-full rounded-lg border border-blush bg-ivory-light px-4 py-3 text-base',
                        'placeholder:text-ink',
                        'focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent',
                        'disabled:cursor-not-allowed disabled:opacity-50',
                        'transition-all duration-200 resize-none',
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

Textarea.displayName = 'Textarea';

export { Textarea };
