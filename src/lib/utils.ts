import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with clsx
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Format WhatsApp number for click-to-chat link
 */
export function formatWhatsAppLink(number: string, message?: string): string {
    const cleanNumber = number.replace(/\D/g, '');
    const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : '';
    return `https://wa.me/${cleanNumber}${encodedMessage}`;
}

/**
 * Format phone number for display
 */
export function formatPhoneDisplay(number: string): string {
    const cleaned = number.replace(/\D/g, '');
    if (cleaned.length === 13) {
        // +55 62 98539-4226
        return `+${cleaned.slice(0, 2)} (${cleaned.slice(2, 4)}) ${cleaned.slice(4, 9)}-${cleaned.slice(9)}`;
    }
    return number;
}

/**
 * Slugify text for URLs
 */
export function slugify(text: string): string {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/--+/g, '-')
        .trim();
}

/**
 * Truncate text to specified length
 */
export function truncate(text: string, length: number): string {
    if (text.length <= length) return text;
    return text.slice(0, length).trim() + '...';
}
