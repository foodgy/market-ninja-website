// src/lib/docs.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Путь к папке с контентом
const docsDirectory = path.join(process.cwd(), 'src/content/docs');

// Порядок категорий для сортировки
export const CATEGORY_ORDER = [
    'Начало работы',
    'Как использовать',
    'Сценарии использования',
    'Настройки',
    'Справочник данных',
    'Поддержка',
];

/**
 * Читает все MDX файлы и возвращает массив объектов документов.
 * (Ранее эта функция была в lib/mdx.js)
 */
export async function getAllDocs() {
    if (!fs.existsSync(docsDirectory)) return [];

    const fileNames = fs.readdirSync(docsDirectory);

    const allDocs = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(docsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        const { data, content } = matter(fileContents);

        return {
            slug,
            content,
            ...data, // title, description, category, order, icon
        };
    });

    // Сортируем по полю order
    return allDocs.sort((a, b) => (a.order || 999) - (b.order || 999));
}

/**
 * Группирует документы по категориям согласно CATEGORY_ORDER.
 */
export function groupDocsByCategory(docs) {
    const grouped = docs.reduce((acc, doc) => {
        const category = doc.category || 'Разное';
        if (!acc[category]) acc[category] = [];
        acc[category].push(doc);
        return acc;
    }, {});

    const sortedCategories = Object.keys(grouped).sort((a, b) => {
        const indexA = CATEGORY_ORDER.indexOf(a);
        const indexB = CATEGORY_ORDER.indexOf(b);
        
        // Если обе категории есть в списке порядка - сортируем по индексу
        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
        // Если только А есть - она выше
        if (indexA !== -1) return -1;
        // Если только B есть - она выше
        if (indexB !== -1) return 1;
        // Иначе по алфавиту
        return a.localeCompare(b);
    });

    return sortedCategories.map(category => ({
        name: category,
        items: grouped[category]
    }));
}