import { getAllChangelogs, groupChangelogByYear } from '@/lib/changelog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { MdxComponents } from '@/components/shared/Mdx';
import SidebarNav from '@/components/shared/SidebarNav';
import MobileNav from '@/components/shared/MobileNav';
import { generateBreadcrumbsJsonLd } from '@/lib/json-ld';
import { LINKS } from '@/constants';

export const metadata = {
    title: 'История изменений',
    description: 'Что нового в Market Ninja: история версий и обновлений.',
};

export default async function ChangelogPage() {
    const breadcrumbs = [
        { name: 'Главная', item: LINKS.SITE_URL },
        { name: '🚀 Бесплатный парсинг', item: `${LINKS.SITE_URL}/#` },
        { name: 'История изменений', item: `${LINKS.SITE_URL}/changelog` }
    ];

    const logs = await getAllChangelogs();

    // Группируем логи для меню (например: "2025 год", "2024 год")
    const menuGroups = groupChangelogByYear(logs);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateBreadcrumbsJsonLd(breadcrumbs)),
                }}
            />
            <div className="bg-white min-h-screen pt-20 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Мобильная навигация */}
                    <MobileNav menuGroups={menuGroups} labelField="label" />

                    <div className="flex flex-col md:flex-row gap-12 py-6 md:py-10">

                        {/* Левая колонка: Сайдбар */}
                        <aside className="hidden md:block w-64 shrink-0">
                            <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 custom-scrollbar">
                                <SidebarNav menuGroups={menuGroups} labelField="label" />
                            </div>
                        </aside>

                        {/* Правая колонка: Контент */}
                        <main className="flex-1 min-w-0">
                            {/* Хлебные крошки */}
                            <div className="mb-8 text-sm text-gray-500">
                                <Link href="/" className="hover:text-blue-600">Главная</Link>
                                <span className="mx-2 text-gray-400">/</span>
                                <span className="text-gray-900">История изменений</span>
                            </div>

                            <div className="mb-12 border-b border-gray-200 pb-8">
                                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">История версий</h1>
                                <p className="text-xl text-gray-600">
                                    Мы постоянно улучшаем продукт на основе ваших отзывов.
                                </p>
                            </div>

                            {/* Блок "В разработке" (Хардкод или отдельный MDX) */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-16">
                                <p className="font-semibold mb-2">В разработке:</p>
                                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                                    <li>Возможность парсить данные товаров по списку URL;</li>
                                    <li>Выгрузка сразу всех характеристик товара;</li>
                                    <li>Больше настроек экспорта и парсинга;</li>
                                    <li>API.</li>
                                </ul>
                            </div>

                            {/* Список версий */}
                            <div className="space-y-20">
                                {logs.map((log) => (
                                    <article
                                        key={log.slug}
                                        id={log.slug}
                                        className="scroll-mt-28 border-b border-gray-100 pb-16 last:border-0"
                                    >
                                        <div className="mb-6">
                                            <h2 className="text-2xl font-semibold text-gray-900">{log.title}</h2>
                                        </div>

                                        <div className="prose prose-slate max-w-none prose-headings:scroll-mt-28 prose-a:text-blue-600">
                                            <MDXRemote
                                                source={log.content}
                                                components={MdxComponents}
                                                options={{
                                                    mdxOptions: { remarkPlugins: [remarkGfm] }
                                                }}
                                            />
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}