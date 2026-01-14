import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

import { slugify } from '@/utils/slugify';

const docsDirectory = path.join(process.cwd(), 'src/content/docs');

export const CATEGORY_ORDER = [
    'Начало работы',
    'Как использовать',
    'Сценарии использования',
    'Настройки',
    'Справочник данных',
    'Поддержка',
];

export async function getAllDocs() {
    if (!fs.existsSync(docsDirectory)) return [];

    const fileNames = fs.readdirSync(docsDirectory);

    const allDocs = fileNames.map((fileName) => {
        const fullPath = path.join(docsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        const slug = data.slug
            ? data.slug
            : (data.title ? slugify(data.title) : fileName.replace(/\.mdx$/, ''));

        return {
            slug,
            content,
            ...data,
        };
    });

    return allDocs.sort((a, b) => (a.order || 999) - (b.order || 999));
}

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

        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
        return a.localeCompare(b);
    });

    return sortedCategories.map(category => ({
        name: category,
        items: grouped[category]
    }));
}