import React from 'react'
import { motion } from 'framer-motion'

const HEARTS = ['❤️', '💗', '💕', '💖', '💝', '🌹', '✨']

function randomBetween(a: number, b: number) { return a + Math.random() * (b - a) }

export default function FloatingHearts() {
  const items = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    symbol: HEARTS[i % HEARTS.length],
    x: randomBetween(2, 95),
    delay: randomBetween(0, 12),
    duration: randomBetween(12, 22),
    size: randomBetween(14, 28),
    opacity: randomBetween(0.15, 0.45),
  }))

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}>
      {items.map(item => (
        <motion.div
          key={item.id}
          initial={{ y: '110vh', x: `${item.x}vw`, opacity: 0 }}
          animate={{ y: '-10vh', opacity: [0, item.opacity, item.opacity, 0] }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            fontSize: item.size,
            filter: 'blur(0.5px)',
          }}
        >
          {item.symbol}
        </motion.div>
      ))}
    </div>
  )
}
