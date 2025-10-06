function setupLanguageSwitcher() {
    const elements = {
        buttons: {
            ru: document.getElementById('btn-ru'),
            en: document.getElementById('btn-en'),
        },
        content: {
            ru: document.getElementById('privacy-ru'),
            en: document.getElementById('privacy-en'),
        },
    };

    if (!elements.buttons.ru || !elements.buttons.en || !elements.content.ru || !elements.content.en) {
        return;
    }

    const updateView = (activeLang) => {
        Object.keys(elements.buttons).forEach(lang => {
            const button = elements.buttons[lang];
            const content = elements.content[lang];

            if (lang === activeLang) {
                content.classList.remove('hidden');
                button.classList.add(
                    'text-white',
                    'bg-blue-600',
                    'border-blue-600',
                    'hover:bg-blue-700',
                    'focus:z-10',
                    'focus:ring-2',
                    'focus:ring-blue-500'
                );
                button.classList.remove(
                    'text-gray-900',
                    'bg-white',
                    'border-gray-200',
                    'hover:bg-gray-100',
                    'hover:text-blue-700',
                    'focus:z-10',
                    'focus:ring-2',
                    'focus:ring-blue-500'
                );
            } else {
                content.classList.add('hidden');
                button.classList.add(
                    'text-gray-900',
                    'bg-white',
                    'border-gray-200',
                    'hover:bg-gray-100',
                    'hover:text-blue-700',
                    'focus:z-10',
                    'focus:ring-2',
                    'focus:ring-blue-500'
                );
                button.classList.remove(
                    'text-white',
                    'bg-blue-600',
                    'border-blue-600',
                    'hover:bg-blue-700',
                    'focus:z-10',
                    'focus:ring-2',
                    'focus:ring-blue-500'
                );
            }
        });
    };

    elements.buttons.ru.addEventListener('click', () => updateView('ru'));
    elements.buttons.en.addEventListener('click', () => updateView('en'));
}

document.addEventListener('DOMContentLoaded', setupLanguageSwitcher);