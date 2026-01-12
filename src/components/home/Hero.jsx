import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome } from '@fortawesome/free-brands-svg-icons';
import { faUsers, faStar} from '@fortawesome/free-solid-svg-icons';
import Video from '@/components/shared/Video';
import { LINKS } from '@/constants';

export default function Home() {
    return (
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-linear-to-b from-[#eff6ff] via-white to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto mb-10">
                    <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
                        Парсер маркетплейсов, 
                        <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-emerald-500">который работает</span>
                    </h1>
                    <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                        Парсер для Wildberries, Ozon и Lamoda прямо в вашем браузере
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href={LINKS.CHROME_STORE}
                            target="_blank"
                            className={classNames(
                                'flex items-center justify-center gap-2',
                                'px-8 py-4 text-lg font-semibold text-white rounded-xl',
                                'bg-blue-600 hover:bg-blue-700 transition',
                                'shadow-lg shadow-blue-500/20',
                            )}
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faChrome} /> Установить в Chrome
                        </a>
                    </div>
                    <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-500">
                        <div className="flex items-center gap-1.5">
                            <FontAwesomeIcon icon={faUsers} className="text-blue-500 text-xs" />
                            1 000+ установок
                        </div>
                        <div className="flex items-center gap-1.5">
                            <FontAwesomeIcon icon={faStar} className="text-amber-400 text-xs" />
                            5.0 рейтинг
                        </div>
                    </div>
                </div>

                <div className="relative max-w-5xl mx-auto mt-8">
                    <Video
                        src="/videos/demo-hero.mp4"
                        poster="/images/poster_main.jpg"
                        autoPlay={true}
                        loop={true}
                    />
                </div>
            </div>
        </section>
    );
}