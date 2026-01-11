import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck, faCheck, faMicroscope, faSliders, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import Video from '@/components/shared/Video';

export default function Features() {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="lg:w-1/2 relative">
                        <Video
                            src="/videos/demo-plp-listing-data.mp4"
                            autoPlay={false}
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-xl mb-6">
                            <FontAwesomeIcon icon={faListCheck} />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Мгновенный сбор данных</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            Market Ninja превращает страницы категорий, поиска и брендов в готовую таблицу данных всего за пару кликов.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-slate-700">
                                <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-3" /> Массовый парсинг каталогов и товаров
                            </li>
                            <li className="flex items-center text-slate-700">
                                <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-3" /> Выгрузка всех вариантов одной карточки
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
                    <div className="lg:w-1/2 relative">
                        <Video
                            src="/videos/demo-export.mp4"
                            autoPlay={false}
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-xl mb-6">
                            <FontAwesomeIcon icon={faMicroscope} />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Анализ и экспорт данных</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            Не просто собирайте данные, а работайте с ними. Находите выгодные предложения прямо в таблице или выгружайте отчеты для глубокой аналитики.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-slate-700">
                                <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-3" /> Мгновенный поиск по всей таблице
                            </li>
                            <li className="flex items-center text-slate-700">
                                <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-3" /> Умная сортировка данных
                            </li>
                            <li className="flex items-center text-slate-700">
                                <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-3" /> Экспорт в Excel (XLSX), CSV и JSON в один клик
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="lg:w-1/2 relative">
                        <Video
                            src="/videos/demo-custom-attributes.mp4"
                            autoPlay={false}
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-xl mb-6">
                            <FontAwesomeIcon icon={faSliders} />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Настройте парсер под себя</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            Добавляйте собственные поля для сбора данных. Если характеристика есть на сайте, Market Ninja сможет ее найти.
                        </p>
                        <div className="bg-white border border-slate-200 p-4 rounded-lg mb-6 text-sm text-slate-700 shadow-sm">
                            <p className="font-medium mb-2 text-amber-600"><FontAwesomeIcon icon={faLightbulb} className="mr-2" />Пример:</p>
                            <p>Вам нужно поле <strong>&ldquo;Объём&rdquo;</strong>? Просто укажите это название в настройках, и оно появится в вашей таблице.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}