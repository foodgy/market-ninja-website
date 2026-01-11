import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faTags, faWarehouse, faCoins } from '@fortawesome/free-solid-svg-icons';

export default function DataPoints() {
    return (
        <section className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Более 25 параметров аналитики</h2>
                    <p className="mt-4 text-lg text-slate-600">Мы структурируем данные и готовим их для вашего отчета.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                            <FontAwesomeIcon icon={faCoins} />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-3">Ценообразование</h3>
                        <ul className="text-sm text-slate-600 space-y-2">
                            <li>&bull; Цена продажи</li>
                            <li>&bull; Цена до скидки</li>
                            <li>&bull; Скидка %</li>
                            <li>&bull; Цена WB Кошелек</li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                            <FontAwesomeIcon icon={faWarehouse} />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-3">Контент</h3>
                        <ul className="text-sm text-slate-600 space-y-2">
                            <li>&bull; Название / описание</li>
                            <li>&bull; Галерея товара</li>
                            <li>&bull; Rich-контент</li>
                            <li>&bull; Ссылки на медиа</li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                            <FontAwesomeIcon icon={faTags} />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-3">Товар</h3>
                        <ul className="text-sm text-slate-600 space-y-2">
                            <li>&bull; Бренд / Категория</li>
                            <li>&bull; Рейтинг / Отзывы</li>
                            <li>&bull; Артикул (SKU)</li>
                            <li>&bull; Размеры в наличии</li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                            <FontAwesomeIcon icon={faGears} />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-3">Дополнительно</h3>
                        <ul className="text-sm text-slate-600 space-y-2">
                            <li>&bull; ID Продавца</li>
                            <li>&bull; Название магазина</li>
                            <li>&bull; <strong>Кастомные поля</strong></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}