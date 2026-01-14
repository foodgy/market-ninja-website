import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content/changelog');

export async function getAllChangelogs() {
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
            ...data,
        };
    });

    return allChangelogs.sort((a, b) => {
        const v1 = a.version.split('.').map(Number);
        const v2 = b.version.split('.').map(Number);

        if (v2[0] !== v1[0]) return v2[0] - v1[0];
        if (v2[1] !== v1[1]) return v2[1] - v1[1];
        return v2[2] - v1[2];
    });

}

export function groupChangelogByYear(logs) {
    const grouped = logs.reduce((acc, log) => {
        const year = new Date(log.date).getFullYear().toString();
        if (!acc[year]) acc[year] = [];
        acc[year].push(log);
        return acc;
    }, {});

    const sortedYears = Object.keys(grouped).sort((a, b) => b - a);

    return sortedYears.map(year => ({
        name: year,
        items: grouped[year]
    }));
}