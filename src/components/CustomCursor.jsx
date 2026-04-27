import React, { useEffect, useRef, useState } from 'react'

const CustomCursor = () => {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: -100, y: -100 })
  const ring = useRef({ x: -100, y: -100 })
  const raf = useRef(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const handleMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    const handleHoverIn = (e) => {
      if (
        e.target.closest('a, button, [role="button"], input, textarea, select, label, [tabindex]')
      ) {
        setHovered(true)
      }
    }
    const handleHoverOut = () => setHovered(false)

    document.addEventListener('mousemove', handleMove)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleHoverIn)
    document.addEventListener('mouseout', handleHoverOut)

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`
      }

      // Smooth lerp for ring
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`
      }

      raf.current = requestAnimationFrame(animate)
    }

    raf.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleHoverIn)
      document.removeEventListener('mouseout', handleHoverOut)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          width: clicked ? '6px' : '8px',
          height: clicked ? '6px' : '8px',
          borderRadius: '50%',
          background: hovered ? '#a78bfa' : '#60a5fa',
          boxShadow: hovered
            ? '0 0 12px 4px rgba(167,139,250,0.8)'
            : '0 0 10px 3px rgba(96,165,250,0.7)',
          transition: 'background 0.2s, box-shadow 0.2s, width 0.1s, height 0.1s',
          willChange: 'transform',
        }}
      />

      {/* Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{
          width: hovered ? '48px' : clicked ? '28px' : '36px',
          height: hovered ? '48px' : clicked ? '28px' : '36px',
          borderRadius: '50%',
          border: `1.5px solid ${hovered ? 'rgba(167,139,250,0.6)' : 'rgba(96,165,250,0.5)'}`,
          boxShadow: hovered
            ? '0 0 16px 2px rgba(167,139,250,0.25), inset 0 0 8px rgba(167,139,250,0.1)'
            : '0 0 12px 1px rgba(96,165,250,0.2)',
          background: hovered ? 'rgba(167,139,250,0.05)' : 'transparent',
          transition: 'width 0.25s ease, height 0.25s ease, border-color 0.2s, box-shadow 0.2s, background 0.2s',
          willChange: 'transform',
        }}
      />
    </>
  )
}

export default CustomCursor
