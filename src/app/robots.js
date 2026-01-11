import { LINKS } from '@/constants';

export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/*?',
                '/*.pdf$'
            ],
        },
        sitemap: `${LINKS.SITE_URL}/sitemap.xml`,
    };
}