'use client';

import Link from 'next/link';

import { smoothScrollTo } from '@/utils/scroll';

export default function CustomLink({ href, children, ...props }) {
    const isInternalAnchor = href && href.startsWith('#');
    const isExternal = href && (href.startsWith('http') || href.startsWith('//'));

    if (isInternalAnchor) {
        return (
            <a
                href={href}
                onClick={(e) => {
                    const id = href.substring(1);
                    smoothScrollTo(e, id, 120);
                }}
                {...props}
            >
                {children}
            </a>
        );
    }

    if (isExternal) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
            </a>
        );
    }

    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    );
}