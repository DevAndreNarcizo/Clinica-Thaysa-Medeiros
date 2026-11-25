import { InstagramPost } from '@/types';

export const profileUrl = 'https://instagram.com/clinicathaysamedeiros';

export const instagramPosts: InstagramPost[] = [];

export const getRecentPosts = (count: number = 6): InstagramPost[] => instagramPosts.slice(0, count);
