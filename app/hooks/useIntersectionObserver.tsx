import { useEffect } from 'react'

export default function useIntersectionObserver(selector: string) {
    useEffect(() => {
        const elements = document.querySelectorAll(selector);

        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {   root: null,
                rootMargin: '0px 0px -20% 0px',
                threshold: 0.1 }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, [selector]);
}
