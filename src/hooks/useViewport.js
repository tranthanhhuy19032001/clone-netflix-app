import { useEffect, useState } from 'react';
const height = window.innerHeight || document.documentElement.clientHeight;
const width = window.innerWidth || document.documentElement.clientWidth;

export function useViewport() {
    const [windowDimensions, setWindowDimensions] = useState({ width, height });

    useEffect(() => {
        const handleReize = () => {
            const height = window.innerHeight || document.documentElement.clientHeight;
            const width = window.innerWidth || document.documentElement.clientWidth;
            setWindowDimensions({ height, width });
        };
        window.addEventListener('resize', handleReize);
        return () => {
            window.removeEventListener('resize', handleReize);
        };
    }, []);
    return [windowDimensions];
}
