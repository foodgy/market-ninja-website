import { Coins, Columns3Cog, Image as LucidImage, ShoppingBasket } from 'lucide-react';
 
export default function DataPoints() {
    return (
        <section className="py-20 border border-slate-200 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold text-slate-900">Более 25 параметров товаров</h2>
                    <p className="mt-4 text-lg text-slate-600">Мы структурируем данные и готовим их для ваших отчетов</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-6 rounded-2xl bg-white border border-slate-200">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                            <Coins size={20} />
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-3">Ценообразование</h3>
                        <ul className="text-sm text-slate-600 space-y-2">
                            <li>&bull; Цена продажи</li>
                            <li>&bull; Цена до скидки</li>
                            <li>&bull; Скидка %</li>
                            <li>&bull; Цена WB Кошелек</li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-2xl bg-white border border-slate-200">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                            <LucidImage size={20} />
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-3">Контент</h3>
                        <ul className="text-sm text-slate-600 space-y-2">
                            <li>&bull; Название / Описание</li>
                            <li>&bull; Галерея товара</li>
                            <li>&bull; Rich-контент</li>
                            <li>&bull; Ссылки на медиа</li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-2xl bg-white border border-slate-200">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                            <ShoppingBasket size={20} />
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-3">Товар</h3>
                        <ul className="text-sm text-slate-600 space-y-2">
                            <li>&bull; Бренд / Категория</li>
                            <li>&bull; Рейтинг / Отзывы</li>
                            <li>&bull; Артикул (SKU)</li>
                            <li>&bull; Размеры в наличии</li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-2xl bg-white border border-slate-200">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                            <Columns3Cog size={20} />
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-3">Дополнительно</h3>
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