import { TeamMember } from '@/types';

export const team: TeamMember[] = [
    {
        id: '1',
        name: 'Dra. Thaysa Medeiros',
        role: 'Esteticista e Cosmetóloga',
        bio: 'Especialista em Estética Avançada com anos de experiência em procedimentos faciais e corporais. Apaixonada por realçar a beleza natural de cada paciente através de técnicas modernas e personalizadas.',
        credentials: [
            'Graduação em Estética e Cosmética',
            'Especialização em Estética Avançada',
            'Certificação em Harmonização Facial',
            'Curso de Bioestimuladores e Preenchedores',
            'Treinamento em Laser e Tecnologias Avançadas',
        ],
        image: '/images/team/dra-thaysa.jpg',
    },
    {
        id: '2',
        name: 'Rayssa',
        role: 'Nutricionista',
        bio: 'Nutricionista especializada em nutrição estética e funcional. Trabalha de forma integrada com os tratamentos estéticos para potencializar resultados através da alimentação adequada.',
        credentials: [
            'Graduação em Nutrição',
            'Especialização em Nutrição Estética',
            'Nutrição Funcional',
            'Suplementação Esportiva',
        ],
        image: '/images/team/profile.jpg',
    },
    {
        id: '3',
        name: 'Thaís',
        role: 'Nail Designer',
        bio: 'Nail Designer especializada em técnicas avançadas de esmaltação e design de unhas. Apaixonada por criar nail arts exclusivas e personalizadas para cada cliente.',
        credentials: [
            'Formação em Nail Designer',
            'Especialização em Nail Art',
            'Técnicas de Alongamento',
            'Blindagem e Fortalecimento',
        ],
        image: '/images/team/file-1.jpg',
    },
];
