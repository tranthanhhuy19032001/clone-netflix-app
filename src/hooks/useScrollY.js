import { useState, useEffect } from 'react';

export function useScroolY() {
    const [scrollY, setScrollY] = useState(0);

    const handleScrollY = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setScrollY(scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrollY);
        return () => {
            window.removeEventListener('scroll', handleScrollY);
        };
    }, []);
    return [scrollY];
}
