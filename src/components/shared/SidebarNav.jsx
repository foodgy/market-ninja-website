'use client';

import classNames from 'classnames';

import { useScrollSpy } from '@/hooks/useScrollSpy';
import { smoothScrollTo } from '@/utils/scroll';

export default function SidebarNav({
    menuGroups,
    labelField = 'title'
}) {
    const allIds = menuGroups.flatMap(group => group.items.map(item => item.slug));

    const { activeId } = useScrollSpy(allIds, 100);

    const handleClick = (e, slug) => {
        smoothScrollTo(e, slug, 100);
    };

    return (
        <nav className="space-y-8">
            {menuGroups.map((group) => (
                <div key={group.name}>
                    <h3 className="font-semibold text-slate-500 mb-3 uppercase text-xs px-2 border-l-2 border-transparent">
                        {group.name}
                    </h3>
                    <div className="space-y-1">
                        {group.items.map((item) => {
                            const isActive = activeId === item.slug;
                            const label = item.sidebarLabel || item[labelField] || item.title;

                            return (
                                <a
                                    key={item.slug}
                                    href={`#${item.slug}`}
                                    onClick={(e) => handleClick(e, item.slug)}
                                    className={classNames(
                                        'block px-2.5 py-1.5 rounded-md text-sm font-medium',
                                        isActive
                                            ? 'bg-blue-50 text-blue-700'
                                            : 'text-gray-700 hover:border-gray-50 hover:bg-gray-50 hover:text-gray-900'
                                    )}
                                >
                                    {label}
                                </a>
                            );
                        })}
                    </div>
                </div>
            ))}
        </nav>
    );
}