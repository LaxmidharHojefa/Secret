import React, { useEffect, useRef } from 'react'

interface Star {
  x: number; y: number; r: number; opacity: number; speed: number
}
interface Particle {
  x: number; y: number; vx: number; vy: number; r: number; opacity: number; color: string
}

let stars: Star[] = []
let particles: Particle[] = []
let animId: number

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let W = canvas.width = window.innerWidth
    let H = canvas.height = window.innerHeight

    const COLORS = ['#ff4d8d', '#b57bee', '#f5c97a', '#ff85b3', '#d4a8ff']

    stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.3 + 0.05,
    }))

    particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 3 + 1,
      opacity: Math.random() * 0.4 + 0.1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }))

    let t = 0
    function draw() {
      ctx.clearRect(0, 0, W, H)
      t += 0.01

      // Stars with twinkle
      stars.forEach((s, i) => {
        const twinkle = 0.5 + 0.5 * Math.sin(t * s.speed * 5 + i)
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${s.opacity * twinkle})`
        ctx.fill()
      })

      // Floating color particles
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
        const fade = 0.6 + 0.4 * Math.sin(t + p.x * 0.01)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color + Math.round(p.opacity * fade * 255).toString(16).padStart(2, '0')
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  )
}
