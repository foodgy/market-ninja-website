import classNames from 'classnames';
import { Info, Lightbulb, TriangleAlert } from 'lucide-react';

import Callout from '@/components/shared/Callout';
import Collapsible from '@/components/shared/Collapsible';
import CustomLink from '@/components/shared/CustomLink';
import Video from '@/components/shared/Video';

const Heading = ({ as: Tag, children, id, className, prefix = '', ...props }) => {
    const uniqueId = prefix ? `${prefix}-${id}` : id;

    return (
        <Tag
            id={uniqueId}
            className={classNames('scroll-mt-28 group relative', className)}
            {...props}
        >
            {children}
            <CustomLink
                href={`#${uniqueId}`}
                className={classNames(
                    'absolute -left-6 top-0 opacity-0 transition-opacity',
                    'text-slate-400 no-underline px-1',
                    'group-hover:opacity-100 not-prose',
                )}
                aria-label="Ссылка на этот раздел"
            >
                #
            </CustomLink>
        </Tag>
    );
};

const baseComponents = {
    a: (props) => (
        <CustomLink
            className="font-normal text-blue-600 no-underline border-b border-blue-600 hover:border-0 cursor-pointer"
            {...props}
        />
    ),
    ul: (props) => <ul {...props} className="list-disc pl-5 mb-4 space-y-2" />,
    ol: (props) => <ol {...props} className="list-decimal pl-5 mb-4 space-y-2" />,
    li: (props) => <li {...props} className="pl-1" />,
    table: (props) => <table {...props} className="min-w-full not-prose" />,
    pre: (props) => (
        <pre {...props} className="bg-slate-900 text-slate-50 p-4 rounded-xl overflow-x-auto my-6" />
    ),
    div: (props) => <div {...props} />,

    // Components
    Video: (props) => <div className="my-8 not-prose"><Video {...props} /></div>,
    Callout,
    Collapsible,

    // Lucide Icons
    Info,
    Lightbulb,
    TriangleAlert
};

export const getMdxComponents = (variant = 'default', idPrefix = '') => {
    const isChangelog = variant === 'changelog';

    const components = {
        ...baseComponents,
        h2: (props) => <Heading as="h2" prefix={idPrefix} {...props} />,
    };

    if (isChangelog) {
        components.h3 = (props) => <h3 {...props} />;
        components.h4 = (props) => <h4 {...props} />;
    } else {
        components.h3 = (props) => <Heading as="h3" prefix={idPrefix} {...props} />;
        components.h4 = (props) => <Heading as="h4" prefix={idPrefix} {...props} />;
    }

    return components;
}