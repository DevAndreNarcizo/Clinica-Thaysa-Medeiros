export interface Service {
    id: string;
    slug: string;
    title: string;
    category: 'facial' | 'corporal' | 'avancado';
    shortDescription: string;
    fullDescription: string;
    benefits: string[];
    duration: string;
    sessions: string;
    image: string;
    featured?: boolean;
    /** URL do post do Instagram com resultado real do tratamento */
    instagramPost?: string;
}

export interface Testimonial {
    id: string;
    name: string;
    treatment: string;
    rating: number;
    text: string;
    image?: string;
    date: string;
    avatar?: string;
    source?: 'Google' | 'Instagram' | 'Direto';
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    credentials: string[];
    image: string;
}

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    category: 'facial' | 'corporal' | 'avancado' | 'dicas';
    coverImage: string;
    publishedAt: string;
    readTime: number;
    tags: string[];
}

export interface BeforeAfter {
    id: string;
    treatment: string;
    beforeImage: string;
    afterImage: string;
    description: string;
    timeframe: string;
}

export interface InstagramPost {
    id: string;
    postId: string; // Instagram post ID for URL generation
    caption: string;
    imageUrl: string;
    likes?: number;
    timestamp: string;
    permalink: string; // Direct link to Instagram post
}

export interface SiteConfig {
    name: string;
    professionalName: string;
    specialty: string;
    description: string;
    whatsapp: string;
    instagram: string;
    email?: string;
    phone: string;
    address?: string;
    city: string;
    state: string;
    businessHours?: {
        weekdays: string;
        saturday?: string;
        sunday?: string;
    };
}
