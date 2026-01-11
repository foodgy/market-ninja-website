import { LINKS } from '@/constants';

export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            //disallow: '/private/',
        },
        sitemap: `${LINKS.SITE_URL}/sitemap.xml`,
    };
}