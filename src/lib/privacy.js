import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content/privacy');

export async function getPrivacyContent(locale) {
    const fullPath = path.join(contentDirectory, `${locale}.mdx`);

    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { content, data } = matter(fileContents);

    return { content, meta: data };
}