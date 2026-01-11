import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { CONFIG, LINKS } from '@/constants';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-20 bg-slate-900 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Начните экономить время на аналитике</h2>
                <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">Установите {CONFIG.SITE_NAME} и&nbsp;получите первую выгрузку данных уже через 2&nbsp;минуты!</p>

                <a href={LINKS.CHROME_STORE} target="_blank" className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl font-bold text-lg transition transform hover:scale-105 shadow-xl shadow-blue-900/50" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faChrome} className="mr-2" /> Установить бесплатно
                </a>

                <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <div className="mb-4 md:mb-0">
                        &copy; {currentYear} {CONFIG.SITE_NAME}, создано <Link href={LINKS.AUTHOR} target="_blank" className="border-b border-slate-500 hover:text-white hover:border-white transition-colors">romakoch.com</Link>
                    </div>
                    <div className="flex gap-6">
                        <Link href={LINKS.TELEGRAM} target="_blank" className="hover:text-white transition" rel="noopener noreferrer">Поддержка</Link>
                        <Link href="/docs" className="hover:text-white transition">Документация</Link>
                        <Link href="/privacy" className="hover:text-white transition">Конфиденциальность</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}