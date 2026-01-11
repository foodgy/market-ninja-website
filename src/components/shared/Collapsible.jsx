'use client';

import classNames from 'classnames';

const VARIANTS = {
    blue: {
        container: 'bg-blue-50 border-blue-100',
        text: 'text-blue-700',
        content: 'text-blue-700 border-blue-100',
        icon: 'text-blue-500',
        arrow: 'text-blue-400'
    },
    gray: {
        container: 'bg-gray-50 border-gray-200',
        text: 'text-gray-700',
        content: 'text-gray-600 border-gray-200',
        icon: 'text-gray-500',
        arrow: 'text-gray-400'
    },
    amber: {
        container: 'bg-amber-50 border-amber-100',
        text: 'text-amber-700',
        content: 'text-amber-700 border-amber-100',
        icon: 'text-amber-500',
        arrow: 'text-amber-400'
    }
};

const Collapsible = ({
    title,
    children,
    icon,
    variant = 'blue',
    className
}) => {
    const theme = VARIANTS[variant] || VARIANTS.blue;

    return (
        <details className={classNames(
            'group rounded-lg border overflow-hidden select-none my-6',
            theme.container,
            className
        )}>
            <summary className={classNames(
                'flex cursor-pointer items-center justify-between p-4',
                'list-none [&::-webkit-details-marker]:hidden',
                theme.text
            )}>
                <div className="flex gap-3 items-center">
                    {icon && (
                        <div className={classNames('shrink-0 h-5 w-5', theme.icon)}>
                            {icon}
                        </div>
                    )}
                    <span className="text-sm font-medium select-none">
                        {title}
                    </span>
                </div>

                <svg
                    className={classNames(
                        'h-5 w-5 transition-transform duration-200 group-open:rotate-180',
                        theme.arrow
                    )}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
            </summary>

            <div className={classNames(
                'px-4 pb-4 pt-0 text-sm border-t border-transparent group-open:border-dashed',
                'group-open:mt-2',
                theme.content
            )}>
                {children}
            </div>
        </details>
    );
};

export default Collapsible;