import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

function GlowHeart({ expanded }: { expanded: boolean }) {
  return (
    <mesh scale={expanded ? 5 : 1}>
      <Sphere args={[1, 32, 32]}>
        <MeshDistortMaterial
          color="#ff4d8d"
          attach="material"
          distort={0.45}
          speed={2}
          roughness={0}
          metalness={0.2}
          emissive="#ff1060"
          emissiveIntensity={0.6}
        />
      </Sphere>
    </mesh>
  )
}

const INTRO_LINES = [
  'Somewhere in this beautiful universe…',
  '…there is one person who makes my world special.',
  'And that person is YOU, MISHTU. ❤️',
]

interface Props { onEnter: () => void }

export default function IntroScene({ onEnter }: Props) {
  const [lineIndex, setLineIndex] = useState(-1)
  const [showButton, setShowButton] = useState(false)
  const [expanding, setExpanding] = useState(false)

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>
    const timings = [800, 2600, 5000, 7800]
    t = setTimeout(() => setLineIndex(0), timings[0])
    const t2 = setTimeout(() => setLineIndex(1), timings[1])
    const t3 = setTimeout(() => setLineIndex(2), timings[2])
    const t4 = setTimeout(() => setShowButton(true), timings[3])
    return () => { clearTimeout(t); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [])

  const handleEnter = () => {
    setExpanding(true)
    setTimeout(onEnter, 1200)
  }

  return (
    <motion.div
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'radial-gradient(ellipse at center, #1a0030 0%, #0d0015 100%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', gap: '0',
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      {/* 3D Heart */}
      <motion.div
        animate={expanding ? { scale: 8, opacity: 0 } : { scale: [1, 1.08, 1] }}
        transition={expanding
          ? { duration: 1.0, ease: 'easeInOut' }
          : { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
        }
        style={{ width: 160, height: 160, marginBottom: 40 }}
      >
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[2, 3, 2]} color="#ff4d8d" intensity={2} />
          <pointLight position={[-2, -1, 1]} color="#b57bee" intensity={1} />
          <GlowHeart expanded={expanding} />
        </Canvas>
      </motion.div>

      {/* Lines */}
      <div style={{ textAlign: 'center', marginBottom: 40, padding: '0 24px' }}>
        <AnimatePresence mode="wait">
          {lineIndex >= 0 && (
            <motion.div
              key={lineIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8 }}
              style={{
                fontFamily: lineIndex === 2 ? '"Playfair Display", serif' : '"Cormorant Garamond", serif',
                fontSize: lineIndex === 2 ? 'clamp(20px, 4.5vw, 36px)' : 'clamp(15px, 3vw, 22px)',
                color: lineIndex === 2 ? '#ff85b3' : 'rgba(255,214,232,0.85)',
                fontStyle: lineIndex === 2 ? 'normal' : 'italic',
                fontWeight: lineIndex === 2 ? 700 : 300,
                letterSpacing: '0.03em',
                lineHeight: 1.5,
                textShadow: lineIndex === 2 ? '0 0 30px rgba(255,77,141,0.6)' : 'none',
              }}
            >
              {INTRO_LINES[lineIndex]}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Enter Button */}
      <AnimatePresence>
        {showButton && !expanding && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEnter}
            style={{
              padding: '14px 36px',
              background: 'linear-gradient(135deg, rgba(255,77,141,0.2), rgba(181,123,238,0.2))',
              border: '1px solid rgba(255,77,141,0.5)',
              borderRadius: '40px', cursor: 'pointer',
              color: '#ffd6e8', fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(15px, 3vw, 18px)', letterSpacing: '0.05em',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 0 30px rgba(255,77,141,0.25)',
              transition: 'box-shadow 0.3s',
            }}
          >
            Open Your Little Universe ✨
          </motion.button>
        )}
      </AnimatePresence>

      {/* Particle burst on expand */}
      <AnimatePresence>
        {expanding && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i / 24) * Math.PI * 2
              const dist = 200 + Math.random() * 150
              return (
                <motion.div
                  key={i}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{
                    x: Math.cos(angle) * dist,
                    y: Math.sin(angle) * dist,
                    opacity: 0, scale: 0,
                  }}
                  transition={{ duration: 1.0, ease: 'easeOut' }}
                  style={{ position: 'absolute', fontSize: 18 }}
                >
                  {['❤️', '✨', '💗', '⭐', '🌟'][i % 5]}
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
