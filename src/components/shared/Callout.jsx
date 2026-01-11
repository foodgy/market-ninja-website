'use client';

import classNames from 'classnames';

const VARIANTS = {
    blue: {
        container: 'bg-blue-50 border-blue-100',
        text: 'text-blue-700',
        icon: 'text-blue-500',
    },
    gray: {
        container: 'bg-gray-50 border-gray-200',
        text: 'text-gray-700',
        icon: 'text-gray-500',
    },
    amber: {
        container: 'bg-amber-50 border-amber-100',
        text: 'text-amber-700',
        icon: 'text-amber-500',
    }
};

const Callout = ({
    children,
    icon,
    variant = 'blue',
    className
}) => {
    const theme = VARIANTS[variant] || VARIANTS.blue;

    return (
        <div className={classNames(
            'group rounded-lg border overflow-hidden my-6',
            theme.container,
            className
        )}>
            <div className={classNames(
                'flex items-center justify-between p-4',
                theme.text
            )}>
                <div className="flex gap-3 items-center">
                    {icon && (
                        <div className={classNames('shrink-0 h-5 w-5', theme.icon)}>
                            {icon}
                        </div>
                    )}
                    <span className="text-sm">
                        {children}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Callout;