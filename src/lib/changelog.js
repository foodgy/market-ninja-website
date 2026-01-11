// src/lib/changelog.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content/changelog');

export async function getAllChangelogs() {
    // Если папки нет, возвращаем пустой массив (чтобы не падало при сборке)
    if (!fs.existsSync(contentDirectory)) return [];

    const fileNames = fs.readdirSync(contentDirectory);

    const allChangelogs = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(contentDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug,
            content,
            ...data, // title, date, version
        };
    });

    return allChangelogs.sort((a, b) => {
        const v1 = a.version.split('.').map(Number);
        const v2 = b.version.split('.').map(Number);

        // Сравниваем мажорные версии
        if (v2[0] !== v1[0]) return v2[0] - v1[0];
        // Сравниваем минорные версии
        if (v2[1] !== v1[1]) return v2[1] - v1[1];
        // Сравниваем патчи
        return v2[2] - v1[2];
    });

}

// Группировка по годам для Сайдбара
export function groupChangelogByYear(logs) {
    const grouped = logs.reduce((acc, log) => {
        const year = new Date(log.date).getFullYear().toString();
        if (!acc[year]) acc[year] = [];
        acc[year].push(log);
        return acc;
    }, {});

    // Сортируем годы по убыванию (2025, 2024...)
    const sortedYears = Object.keys(grouped).sort((a, b) => b - a);

    return sortedYears.map(year => ({
        name: year,
        items: grouped[year]
    }));
}