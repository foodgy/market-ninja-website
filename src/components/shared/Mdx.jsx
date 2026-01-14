import Link from 'next/link';

import Callout from '@/components/shared/Callout';
import Collapsible from '@/components/shared/Collapsible';
import Video from '@/components/shared/Video';

export const MdxComponents = {
    a: ({ href, children, ...props }) => {
        const isExternal = href && (href.startsWith('http') || href.startsWith('//'));
        if (isExternal) {
            return (
                <a href={href} className="font-normal text-blue-600 no-underline border-b border-blue-600 hover:border-0" target="_blank" rel="noopener noreferrer" {...props}>
                    {children}
                </a>
            );
        }
        return (
            <Link href={href} className="font-normal text-blue-600 no-underline border-b border-blue-600 hover:border-0" {...props}>
                {children}
            </Link>
        );
    },
    ul: (props) => <ul {...props} className="list-disc pl-5 mb-4 space-y-2" />,
    ol: (props) => <ol {...props} className="list-decimal pl-5 mb-4 space-y-2" />,
    li: (props) => <li {...props} className="pl-1" />,
    table: (props) => <table {...props} className="min-w-full not-prose" />,
    pre: (props) => (
        <pre {...props} className="bg-slate-900 text-slate-50 p-4 rounded-xl overflow-x-auto my-6" />
    ),
    div: (props) => <div {...props} />,
    Video: (props) => <div className="my-8 not-prose"><Video {...props} /></div>,
    Callout,
    Collapsible,
};