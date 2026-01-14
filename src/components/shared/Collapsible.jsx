'use client';

import classNames from 'classnames';
import { ChevronDown } from 'lucide-react';

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

                <ChevronDown size={18} />
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