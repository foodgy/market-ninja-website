// src/hooks/useScrollSpy.js
import { useState, useEffect, useRef } from 'react';

export function useScrollSpy(ids, offset = 100) {
    const [activeId, setActiveId] = useState('');
    const isClickedRef = useRef(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        // Защита от отсутствия window (SSR)
        if (typeof window === 'undefined') return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (isClickedRef.current) return;
                
                // Находим элемент, который наиболее видим на экране
                // или первый пересекший границу
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                // rootMargin сдвигает область видимости. 
                // '-100px 0px -60% 0px' означает, что элемент считается активным, 
                // когда он находится в верхней части экрана
                rootMargin: `-${offset}px 0px -60% 0px`, 
                threshold: 0
            }
        );

        ids.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [ids, offset]);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (!element) return;

        isClickedRef.current = true;
        setActiveId(id);

        // Расчет позиции с учетом offset
        const y = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' }); // smooth лучше чем auto для UX

        // Очистка предыдущего таймера
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        
        // Снимаем блокировку чуть позже, чем закончится анимация скролла
        timeoutRef.current = setTimeout(() => {
            isClickedRef.current = false;
        }, 800);
    };

    return { activeId, scrollTo };
}