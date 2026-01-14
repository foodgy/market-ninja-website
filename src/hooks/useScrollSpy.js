import { useEffect, useRef, useState } from 'react';

export function useScrollSpy(ids, offset = 100) {
    const [activeId, setActiveId] = useState('');
    const isClickedRef = useRef(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (isClickedRef.current) return;
                
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
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

        const y = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' }); // smooth лучше чем auto для UX

        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        
        timeoutRef.current = setTimeout(() => {
            isClickedRef.current = false;
        }, 800);
    };

    return { activeId, scrollTo };
}