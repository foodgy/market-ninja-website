export function slugify(text) {
    if (!text) return '';
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/[^\w\s\u0400-\u04FF-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
}