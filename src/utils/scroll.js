export const smoothScrollTo = (e, id, offset = 120) => {
    if (e && e.preventDefault) {
        e.preventDefault();
    }

    if (!id) return;

    const decodedId = decodeURIComponent(id);

    const element = document.getElementById(decodedId);

    if (!element) {
        console.warn(`Element with id "${decodedId}" not found`);
        return;
    }

    window.history.pushState(null, '', `#${decodedId}`);

    const y = element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: y, behavior: 'smooth' });
};