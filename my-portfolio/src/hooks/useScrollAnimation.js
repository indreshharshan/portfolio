import { useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { amount: threshold, once: true });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return { ref, controls };
};
