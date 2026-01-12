'use client';

import { useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { CONFIG } from '@/constants';

const NAV_ITEMS = [
    { label: 'Документация', href: '/docs' },
    { label: 'История версий', href: '/changelog' },
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);
    const toggleMenu = useCallback(() => setIsMobileMenuOpen(prev => !prev), []);

    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center space-x-3" onClick={closeMenu}>
                            <div className="w-9 h-9 relative">
                                <Image
                                    src="/images/logo.png"
                                    alt={CONFIG.SITE_NAME}
                                    width={60}
                                    height={60}
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <span className="font-semibold text-xl tracking-tight text-slate-900">
                                {CONFIG.SITE_NAME}
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        {NAV_ITEMS.map((item) => (
                            <NavLink key={item.href} href={item.href}>
                                {item.label}
                            </NavLink>
                        ))}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-slate-100 transition-all focus:outline-none"
                            aria-expanded={isMobileMenuOpen}
                            aria-label="Navigation"
                        >
                            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="text-xl w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <MobileMenu onClose={closeMenu} />
            )}
        </nav>
    );
}

function NavLink({ href, children, className, onClick }) {
    const pathname = usePathname();

    const isActive = href === '/'
        ? pathname === href
        : pathname.startsWith(href);

    return (
        <Link
            href={href}
            onClick={onClick}
            className={classNames(
                'font-medium transition-colors',
                isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600',
                className
            )}
        >
            {children}
        </Link>
    );
}

function MobileMenu({ onClose }) {
    return (
        <div className="md:hidden border-t border-slate-100 bg-white shadow-lg absolute w-full left-0 animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 pt-4 pb-6 space-y-2">
                <MobileLink href="/" onClick={onClose}>
                    Главная
                </MobileLink>

                {NAV_ITEMS.map((item) => (
                    <MobileLink key={item.href} href={item.href} onClick={onClose}>
                        {item.label}
                    </MobileLink>
                ))}
            </div>
        </div>
    );
}

function MobileLink({ href, children, onClick }) {
    const pathname = usePathname();
    const isActive = href === '/' ? pathname === href : pathname.startsWith(href);

    return (
        <Link
            href={href}
            onClick={onClick}
            className={classNames(
                'block px-3 py-2 rounded-lg text-base font-medium transition-colors',
                isActive
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            )}
        >
            {children}
        </Link>
    );
}