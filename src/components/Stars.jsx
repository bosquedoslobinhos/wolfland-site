import { useEffect, useRef } from 'react'

export default function Stars() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Stars
    for (let i = 0; i < 90; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      const sz = Math.random() * 2.5 + 0.5
      star.style.cssText = `
        width:${sz}px; height:${sz}px;
        top:${Math.random() * 75}%; left:${Math.random() * 100}%;
        --d:${2 + Math.random() * 3}s; --delay:${Math.random() * 4}s;
      `
      container.appendChild(star)
    }

    // Fireflies
    for (let i = 0; i < 18; i++) {
      const ff = document.createElement('div')
      ff.className = 'firefly'
      const r = () => (Math.random() - 0.5) * 200
      ff.style.cssText = `
        top:${30 + Math.random() * 50}%; left:${Math.random() * 100}%;
        --d:${7 + Math.random() * 8}s; --delay:${Math.random() * 6}s;
        --tx1:${r()}px; --ty1:${r()}px;
        --tx2:${r()}px; --ty2:${r()}px;
        --tx3:${r()}px; --ty3:${r()}px;
        --tx4:${r()}px; --ty4:${r()}px;
      `
      container.appendChild(ff)
    }

    return () => { container.innerHTML = '' }
  }, [])

  return <div ref={containerRef} className="stars-container" aria-hidden="true" />
}
