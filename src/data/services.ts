import { Service } from '@/types';

export const services: Service[] = [
    // FACIAL
    {
        id: '1',
        slug: 'limpeza-de-pele-profunda',
        title: 'Limpeza de Pele Profunda',
        category: 'facial',
        shortDescription: 'Remoção de impurezas e cravos para uma pele renovada e saudável.',
        fullDescription: 'A limpeza de pele profunda é um procedimento essencial para manter a saúde e beleza da pele. Remove impurezas acumuladas, desobstrui os poros, elimina cravos e células mortas, proporcionando uma pele mais limpa, suave e radiante.',
        benefits: [
            'Remoção profunda de impurezas e cravos',
            'Desobstrução dos poros',
            'Renovação celular',
            'Melhora da textura da pele',
            'Prepara a pele para outros tratamentos',
        ],
        duration: '90 minutos',
        sessions: 'Mensal',
        image: '/images/services/limpeza-pele.jpg',
        featured: true,
        instagramPost: 'https://www.instagram.com/p/DBU75uOxa6S/',
    },
    {
        id: '2',
        slug: 'peeling-quimico',
        title: 'Peeling Químico',
        category: 'facial',
        shortDescription: 'Renovação celular profunda para tratar manchas e rugas.',
        fullDescription: 'O peeling químico promove...',
        benefits: [],
        duration: '45-60 minutos',
        sessions: '3-6 sessões',
        image: '/images/services/peeling.jpg',
        featured: true,
        instagramPost: 'https://www.instagram.com/p/DBR-bXWR4E-/',
    },
    {
        id: '3',
        slug: 'microagulhamento',
        title: 'Microagulhamento',
        category: 'facial',
        shortDescription: 'Estímulo de colágeno para rejuvenescimento, cicatrizes e flacidez facial.',
        fullDescription: 'O microagulhamento é uma técnica que utiliza microagulhas para criar microlesões controladas na pele, estimulando a produção natural de colágeno e elastina. Excelente para rejuvenescimento, tratamento de cicatrizes e melhora da textura da pele.',
        benefits: [
            'Estímulo intenso de colágeno',
            'Redução de rugas e linhas de expressão',
            'Melhora de cicatrizes de acne',
            'Tratamento de estrias faciais',
            'Firmeza e elasticidade da pele',
        ],
        duration: '60-90 minutos',
        sessions: '3-6 sessões (intervalo de 30 dias)',
        image: '/images/services/microagulhamento.jpg',
    },
    {
        id: '4',
        slug: 'harmonizacao-facial',
        title: 'Harmonização Facial',
        category: 'avancado',
        shortDescription: 'Realce sua beleza natural com equilíbrio e harmonia.',
        fullDescription: 'A harmonização facial...',
        benefits: [],
        duration: '60-120 minutos',
        sessions: 'Personalizado',
        image: '/images/services/harmonizacao.jpg',
        featured: true,
        instagramPost: 'https://www.instagram.com/p/DBU75uOxa6S/',
    },
    {
        id: '5',
        slug: 'toxina-botulinica',
        title: 'Toxina Botulínica (Botox)',
        category: 'avancado',
        shortDescription: 'Suavização de rugas dinâmicas e linhas de expressão com resultados naturais.',
        fullDescription: 'A aplicação de toxina botulínica é um dos procedimentos estéticos mais realizados no mundo. Atua relaxando a musculatura facial, suavizando rugas dinâmicas e prevenindo o aprofundamento de linhas de expressão, com resultados naturais e rejuvenescedores.',
        benefits: [
            'Suavização de rugas de expressão',
            'Prevenção de novas rugas',
            'Lifting de sobrancelhas',
            'Tratamento de hiperidrose (suor excessivo)',
            'Resultados visíveis em 7-15 dias',
        ],
        duration: '30-45 minutos',
        sessions: 'Manutenção a cada 4-6 meses',
        image: '/images/services/botox.jpg',
    },

    // CORPORAL
    {
        id: '6',
        slug: 'drenagem-linfatica',
        title: 'Drenagem Linfática',
        category: 'corporal',
        shortDescription: 'Redução de inchaço, retenção de líquidos e melhora da circulação.',
        fullDescription: 'A drenagem linfática é uma técnica de massagem suave que estimula o sistema linfático, auxiliando na eliminação de toxinas e líquidos retidos. Indicada para redução de inchaço, celulite, pós-operatório e bem-estar geral.',
        benefits: [
            'Redução de inchaço e retenção de líquidos',
            'Melhora da circulação',
            'Auxílio na eliminação de toxinas',
            'Redução de celulite',
            'Recuperação pós-cirúrgica',
        ],
        duration: '60-90 minutos',
        sessions: 'Semanal ou conforme indicação',
        image: '/images/services/drenagem.jpg',
    },
    {
        id: '7',
        slug: 'criolipolise',
        title: 'Criolipólise',
        category: 'corporal',
        shortDescription: 'Redução de gordura localizada através do congelamento de células adiposas.',
        fullDescription: 'A criolipólise é um procedimento não invasivo que utiliza o resfriamento controlado para eliminar células de gordura localizada. Ideal para quem busca reduzir medidas em áreas específicas sem cirurgia.',
        benefits: [
            'Redução de gordura localizada',
            'Procedimento não invasivo',
            'Sem tempo de recuperação',
            'Resultados progressivos e naturais',
            'Redução de até 25% de gordura na área tratada',
        ],
        duration: '60 minutos por área',
        sessions: '1-3 sessões por área',
        image: '/images/services/criolipolise.jpg',
        featured: true,
    },
    {
        id: '8',
        slug: 'radiofrequencia-corporal',
        title: 'Radiofrequência Corporal',
        category: 'corporal',
        shortDescription: 'Tratamento de flacidez e celulite com tecnologia de aquecimento profundo.',
        fullDescription: 'A radiofrequência corporal utiliza ondas eletromagnéticas para aquecer as camadas profundas da pele, estimulando a produção de colágeno e elastina. Excelente para combater flacidez, celulite e gordura localizada.',
        benefits: [
            'Redução de flacidez',
            'Melhora da celulite',
            'Estímulo de colágeno',
            'Contorno corporal',
            'Pele mais firme e tonificada',
        ],
        duration: '45-60 minutos',
        sessions: '6-10 sessões (semanal)',
        image: '/images/services/radiofrequencia.jpg',
    },
    {
        id: '9',
        slug: 'massagem-modeladora',
        title: 'Massagem Modeladora',
        category: 'corporal',
        shortDescription: 'Modelagem corporal através de técnicas manuais intensivas.',
        fullDescription: 'A massagem modeladora é uma técnica manual vigorosa que auxilia na quebra de gordura localizada, redução de celulite e modelagem do contorno corporal. Combina diferentes manobras para resultados visíveis.',
        benefits: [
            'Redução de medidas',
            'Melhora da celulite',
            'Ativação da circulação',
            'Quebra de gordura localizada',
            'Modelagem do contorno corporal',
        ],
        duration: '60 minutos',
        sessions: '2-3 vezes por semana',
        image: '/images/services/massagem-modeladora.jpg',
    },

    // AVANÇADOS
    {
        id: '10',
        slug: 'laser-co2-fracionado',
        title: 'Laser CO2 Fracionado',
        category: 'avancado',
        shortDescription: 'Rejuvenescimento profundo, cicatrizes e manchas com tecnologia laser.',
        fullDescription: 'O laser CO2 fracionado é um dos tratamentos mais eficazes para rejuvenescimento facial profundo. Atua nas camadas mais profundas da pele, promovendo renovação celular intensa e resultados significativos.',
        benefits: [
            'Rejuvenescimento profundo',
            'Redução de rugas e flacidez',
            'Tratamento de cicatrizes de acne',
            'Remoção de manchas',
            'Melhora da textura da pele',
        ],
        duration: '60-90 minutos',
        sessions: '1-3 sessões (intervalo de 30-60 dias)',
        image: '/images/services/laser-co2.jpg',
    },
    {
        id: '11',
        slug: 'bioestimulador-colageno',
        title: 'Bioestimulador de Colágeno',
        category: 'avancado',
        shortDescription: 'Estímulo natural de colágeno para rejuvenescimento facial e corporal.',
        fullDescription: 'Os bioestimuladores de colágeno são substâncias injetáveis que estimulam a produção natural de colágeno pelo organismo. Promovem rejuvenescimento gradual e natural, com resultados duradouros.',
        benefits: [
            'Estímulo natural de colágeno',
            'Melhora da qualidade da pele',
            'Redução de flacidez',
            'Resultados progressivos e naturais',
            'Efeito duradouro (até 2 anos)',
        ],
        duration: '45-60 minutos',
        sessions: '2-3 sessões (intervalo de 30 dias)',
        image: '/images/services/bioestimulador.jpg',
    },
    {
        id: '12',
        slug: 'fios-pdo',
        title: 'Fios de PDO (Lifting sem Cortes)',
        category: 'avancado',
        shortDescription: 'Lifting facial e corporal com fios absorvíveis para sustentação e rejuvenescimento.',
        fullDescription: 'Os fios de PDO são fios absorvíveis que promovem lifting imediato e estímulo de colágeno a longo prazo. Técnica minimamente invasiva para sustentação facial e corporal sem necessidade de cirurgia.',
        benefits: [
            'Lifting imediato',
            'Estímulo de colágeno',
            'Procedimento minimamente invasivo',
            'Resultados naturais',
            'Sem cicatrizes',
        ],
        duration: '60-90 minutos',
        sessions: 'Conforme avaliação (duração 12-18 meses)',
        image: '/images/services/fios-pdo.jpg',
    },
];

export const featuredServices = services.filter(s => s.featured);

export const getServiceBySlug = (slug: string): Service | undefined => {
    return services.find(s => s.slug === slug);
};

export const getServicesByCategory = (category: Service['category']): Service[] => {
    return services.filter(s => s.category === category);
};

export const getRelatedServices = (slug: string, limit = 3): Service[] => {
    const current = getServiceBySlug(slug);
    if (!current) return [];
    return services
        .filter(s => s.slug !== slug && s.category === current.category)
        .slice(0, limit);
};
