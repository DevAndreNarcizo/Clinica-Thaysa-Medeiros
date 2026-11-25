import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-ink">
            {items.map((item, index) => (
                <span key={index} className="flex items-center gap-1">
                    {index > 0 && <ChevronRight className="w-3 h-3 text-ink flex-shrink-0" />}
                    {item.href ? (
                        <Link to={item.href} className="hover:text-gold transition-colors">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-dark font-medium truncate max-w-[200px] sm:max-w-none">{item.label}</span>
                    )}
                </span>
            ))}
        </nav>
    );
}
