import { InstagramPost } from '@/types';

/**
 * Instagram posts from @clinicathaysamedeiros
 * 
 * IMPORTANTE: Estes são posts de exemplo. Substitua com os posts reais do Instagram.
 * Para obter os dados reais:
 * 1. Acesse cada post no Instagram
 * 2. Copie o ID do post da URL (ex: https://www.instagram.com/p/ABC123/ -> postId: 'ABC123')
 * 3. Copie a legenda do post
 * 4. Salve a imagem do post em /public/images/instagram/
 * 5. Atualize este arquivo com os dados reais
 */

export const instagramPosts: InstagramPost[] = [
    {
        id: '1',
        postId: 'EXAMPLE1', // Substitua com o ID real do post
        caption: 'Resultado incrível de harmonização facial! ✨ Realce natural da beleza com técnicas avançadas. #esteticaavancada #harmonizacaofacial',
        imageUrl: '/images/instagram/post-1.jpg',
        timestamp: '2024-01-15T10:00:00Z',
        permalink: 'https://www.instagram.com/p/EXAMPLE1/',
    },
    {
        id: '2',
        postId: 'EXAMPLE2',
        caption: 'Antes e depois de tratamento com bioestimulador de colágeno 💫 Resultados naturais e duradouros!',
        imageUrl: '/images/instagram/post-2.jpg',
        timestamp: '2024-01-10T14:30:00Z',
        permalink: 'https://www.instagram.com/p/EXAMPLE2/',
    },
    {
        id: '3',
        postId: 'EXAMPLE3',
        caption: 'Limpeza de pele profunda: o cuidado essencial que sua pele merece 🌟',
        imageUrl: '/images/instagram/post-3.jpg',
        timestamp: '2024-01-05T16:00:00Z',
        permalink: 'https://www.instagram.com/p/EXAMPLE3/',
    },
    {
        id: '4',
        postId: 'EXAMPLE4',
        caption: 'Criolipólise: tecnologia avançada para redução de gordura localizada sem cirurgia ❄️',
        imageUrl: '/images/instagram/post-4.jpg',
        timestamp: '2024-01-01T12:00:00Z',
        permalink: 'https://www.instagram.com/p/EXAMPLE4/',
    },
    {
        id: '5',
        postId: 'EXAMPLE5',
        caption: 'Microagulhamento: estímulo natural de colágeno para uma pele renovada ✨',
        imageUrl: '/images/instagram/post-5.jpg',
        timestamp: '2023-12-28T11:00:00Z',
        permalink: 'https://www.instagram.com/p/EXAMPLE5/',
    },
    {
        id: '6',
        postId: 'EXAMPLE6',
        caption: 'Sua autoestima merece o melhor cuidado! Agende sua avaliação 💕',
        imageUrl: '/images/instagram/post-6.jpg',
        timestamp: '2023-12-20T15:00:00Z',
        permalink: 'https://www.instagram.com/p/EXAMPLE6/',
    },
];

/**
 * Get recent Instagram posts (limited to specified count)
 */
export const getRecentPosts = (count: number = 6): InstagramPost[] => {
    return instagramPosts.slice(0, count);
};
