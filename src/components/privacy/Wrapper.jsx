'use client';

import { useState } from 'react';
import classNames from 'classnames';

export default function Wrapper({ childrenRu, childrenEn, metaRu, metaEn }) {
    const [lang, setLang] = useState('ru');

    const currentMeta = lang === 'ru' ? metaRu : metaEn;

    return (
        <>
            {/* Header Area with Switcher */}
            <div className="mb-12 border-b border-gray-200 pb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                            {currentMeta.title}
                        </h1>
                        <p className="text-gray-500">
                            {lang === 'ru' ? 'Последнее обновление:' : 'Last updated:'} {currentMeta.lastUpdated}
                        </p>
                    </div>

                    {/* Language Switcher */}
                    <div className="flex bg-slate-100 p-1 rounded-lg self-start md:self-center shrink-0">
                        <button
                            onClick={() => setLang('ru')}
                            className={classNames(
                                "px-4 py-2 text-sm font-bold rounded-md transition-all",
                                lang === 'ru'
                                    ? "bg-white text-blue-600 shadow-sm"
                                    : "text-slate-500 hover:text-slate-700"
                            )}
                        >
                            Русский
                        </button>
                        <button
                            onClick={() => setLang('en')}
                            className={classNames(
                                "px-4 py-2 text-sm font-bold rounded-md transition-all",
                                lang === 'en'
                                    ? "bg-white text-blue-600 shadow-sm"
                                    : "text-slate-500 hover:text-slate-700"
                            )}
                        >
                            English
                        </button>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            {/* Мы рендерим оба блока, но скрываем ненужный через CSS (display: none).
                Это позволяет сохранить MDX-контент, отрендеренный на сервере. */}

            <div className={classNames("prose prose-slate max-w-none prose-headings:scroll-mt-28 prose-a:text-blue-600", lang === 'ru' ? 'block' : 'hidden')}>
                {childrenRu}
            </div>

            <div className={classNames("prose prose-slate max-w-none prose-headings:scroll-mt-28 prose-a:text-blue-600", lang === 'en' ? 'block' : 'hidden')}>
                {childrenEn}
            </div>
        </>
    );
}