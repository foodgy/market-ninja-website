import { LINKS } from '@/constants';

export default function sitemap() {
    const baseUrl = LINKS.SITE_URL;

    const routes = [
        {
            url: '',
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: '/docs',
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: '/changelog',
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: '/privacy',
            changeFrequency: 'yearly',
            priority: 0.5,
        },
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route.url}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}