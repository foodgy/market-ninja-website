import { Inter } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import classNames from 'classnames';
import FontAwesomeConfig from '@/components/FontAwesomeConfig';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CONFIG, LINKS } from '@/constants';
import './styles/index.css';

export const metadata = {
    metadataBase: new URL(LINKS.SITE_URL),
    alternates: {
        canonical: './',
    },
    title: {
        default: 'Market Ninja — парсинг Ozon, Wildberries, Lamoda',
        template: '%s | Market Ninja'
    },
    description: 'Бесплатный парсер цен Ozon, Wildberries и Lamoda.',
};
const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-inter',
    display: 'swap',
});

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <GoogleTagManager gtmId={CONFIG.GTM_ID} />
            <body
                className={classNames(
                    'text-slate-800 bg-white antialiased scroll-smooth',
                    inter.variable
                )}
            >
                <FontAwesomeConfig />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}