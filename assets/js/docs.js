document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('docSearchInput');
    const contentContainer = document.getElementById('documentation-content');

    if (!searchInput || !contentContainer) return;

    const sections = Array.from(contentContainer.children).filter(el => el.tagName === 'DIV' && el.id);

    // Сохраняем оригинальное содержимое, чтобы можно было убрать подсветку
    sections.forEach(section => {
        section.dataset.originalHtml = section.innerHTML;
    });

    const performSearch = () => {
        const query = searchInput.value.trim().toLowerCase();

        // Если поле поиска пустое, показываем все и убираем подсветку
        if (query === '') {
            sections.forEach(section => {
                section.innerHTML = section.dataset.originalHtml;
                section.style.display = 'block';
            });
            return;
        }

        const searchRegex = new RegExp(query, 'gi');
        let found = false;

        sections.forEach(section => {
            const originalHtml = section.dataset.originalHtml;
            const textContent = section.textContent.toLowerCase();

            if (textContent.includes(query)) {
                section.style.display = 'block';
                // Применяем подсветку
                section.innerHTML = originalHtml.replace(searchRegex, (match) =>
                    `<mark class="search-highlight">${match}</mark>`
                );
                found = true;
            } else {
                section.style.display = 'none';
                section.innerHTML = originalHtml; // Возвращаем исходный HTML
            }
        });
    };

    searchInput.addEventListener('input', performSearch);
});