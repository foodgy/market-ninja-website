import { LINKS, CONFIG } from '@/constants';

export const generateBreadcrumbsJsonLd = (items) => {
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'BreadcrumbList',
                'itemListElement': items.map((item, index) => ({
                    '@type': 'ListItem',
                    'position': index + 1,
                    'name': item.name,
                    'item': item.item || LINKS.SITE_URL
                }))
            }
        ]
    };
};

export const generateHomepageJsonLd = () => {
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                '@id': `${LINKS.SITE_URL}/#organization`,
                'name': CONFIG.SITE_NAME,
                'url': LINKS.SITE_URL,
                'logo': {
                    '@type': 'ImageObject',
                    'url': `${LINKS.SITE_URL}/assets/img/logo.png`,
                    'width': 600,
                    'height': 532
                }
            },
            {
                '@type': 'WebSite',
                '@id': `${LINKS.SITE_URL}/#website`,
                'url': LINKS.SITE_URL,
                'name': CONFIG.SITE_NAME,
                'publisher': {
                    '@id': `${LINKS.SITE_URL}/#organization`
                }
            },
            {
                '@type': 'SoftwareApplication',
                '@id': 'https://marketninja.ru/#software',
                'name': CONFIG.SITE_NAME,
                'description': 'Market Ninja — бесплатный парсер цен Ozon, Wildberries и Lamoda. Получайте информацию о товарах, ценах и многом другом одним нажатием кнопки!',
                'url': LINKS.SITE_URL,
                'applicationCategory': 'BrowserApplication',
                'operatingSystem': [
                    'Windows',
                    'macOS',
                    'Linux',
                    'Chrome OS'
                ],
                'downloadUrl': LINKS.CHROME_STORE,
                'screenshot': [
                    {
                        '@type': 'ImageObject',
                        'url': 'https://lh3.googleusercontent.com/W8NqUtlmiu2BySR3RkzwEbGzSYG_pu-frns7mFcNxgnnSj1Z4uRApyKYI5iecdquJxk7MhXfzsJKRuXF2pqTNf5klQ=s1600-w1600-h1000',
                        'caption': 'Скриншот расширения Market Ninja'
                    }
                ],
                'author': {
                    '@type': 'Person',
                    'name': 'Роман Кох',
                    'jobTitle': 'Head of E-commerce',
                    'description': 'Роман Кох — эксперт в области электронной коммерции с более чем 15-летним опытом, пишет о менеджменте, e-commerce и методах продуктивности.',
                    'url': 'https://romakoch.com/about/',
                    'image': {
                        '@type': 'ImageObject',
                        'url': 'https://romakoch.com/assets/img/author.png',
                        'width': 400,
                        'height': 400
                    },
                    'sameAs': [
                        'https://www.linkedin.com/in/fatnotbad/',
                        'https://habr.com/ru/users/FatNotBad/',
                        'https://vc.ru/u/245143-roman-koh',
                        'https://www.e-xecutive.ru/users/1898956-roman-koh'
                    ]
                },
                'publisher': {
                    '@id': `${LINKS.SITE_URL}/#organization`
                },
                'offers': {
                    '@type': 'Offer',
                    'price': '0',
                    'priceCurrency': 'RUB',
                    'url': LINKS.CHROME_STORE,
                    'availability': 'https://schema.org/InStock'
                },
                'aggregateRating': {
                    '@type': 'AggregateRating',
                    'ratingValue': '5.0',
                    'ratingCount': '125'
                }
            },
            {
                '@type': 'VideoObject',
                '@id': `${LINKS.SITE_URL}/#demo-video`,
                'name': 'Market Ninja — демо использования расширения',
                'description': 'Видео-обзор возможностей Market Ninja: как парсить цены и собирать данные с Ozon и Wildberries.',
                'thumbnailUrl': `${LINKS.SITE_URL}/assets/img/preview.jpg`,
                'uploadDate': '2025-09-25',
                'embedUrl': 'https://www.youtube.com/embed/JqRSYqkRi5E',
                'publisher': {
                    '@id': `${LINKS.SITE_URL}/#organization`
                }
            },
            {
                '@type': 'BreadcrumbList',
                'itemListElement': [
                    {
                        '@type': 'ListItem',
                        'position': 1,
                        'name': 'Главная',
                        'item': LINKS.SITE_URL
                    },
                    {
                        '@type': 'ListItem',
                        'position': 2,
                        'name': '🚀  Бесплатный парсинг маркетлпейсов',
                        'item': `${LINKS.SITE_URL}/#`
                    }
                ]
            }
        ]
    }
};