'use client';

import { useScrollSpy } from '@/hooks/useScrollSpy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faList } from '@fortawesome/free-solid-svg-icons';

export default function MobileNav({
    menuGroups,
    labelField = 'title'
}) {
    // Собираем все ID для слежения
    const allIds = menuGroups.flatMap(group => group.items.map(item => item.slug));

    // Переиспользуем логику: activeId будет меняться при скролле
    const { activeId, scrollTo } = useScrollSpy(allIds, 200);

    const handleChange = (e) => {
        const slug = e.target.value;
        if (slug) {
            scrollTo(slug);
        }
    };

    return (
        <div className="md:hidden mb-8 sticky top-20 z-40">
            <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-lg">
                <label
                    htmlFor="mobile-docs-nav"
                    className="flex items-center text-sm font-bold text-gray-700 mb-2"
                >
                    <FontAwesomeIcon icon={faList} className="mr-2 text-blue-600" />
                    Навигация по разделам:
                </label>

                <div className="relative">
                    <select
                        id="mobile-docs-nav"
                        value={activeId || ''} // Привязываем значение к скроллу
                        onChange={handleChange}
                        className="appearance-none w-full bg-slate-50 border border-slate-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 pr-10 transition-shadow outline-none"
                    >
                        <option value="" disabled>Выберите тему...</option>
                        {menuGroups.map((group) => (
                            <optgroup label={group.name} key={group.name}>
                                {group.items.map((item) => {
                                    // Та же логика выбора названия
                                    const label = item.sidebarLabel || item[labelField] || item.title;

                                    return (
                                        <option key={item.slug} value={item.slug}>
                                            {label}
                                        </option>
                                    );
                                })}
                            </optgroup>
                        ))}
                    </select>

                    {/* Кастомная стрелочка */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
                    </div>
                </div>
            </div>
        </div>
    );
}