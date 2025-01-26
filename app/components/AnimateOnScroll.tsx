'use client'

import { useEffect, useRef, ReactNode } from 'react'

export default function AnimateOnScroll({ children, delay = 0 }: { children: ReactNode, delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${delay}ms`
          entry.target.classList.add('animate-slideBounce')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className="opacity-0">
      {children}
    </div>
  )
}