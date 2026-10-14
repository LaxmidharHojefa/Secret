import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei'

function GlassHeart() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh>
        <Sphere args={[1.2, 64, 64]}>
          <MeshDistortMaterial
            color="#ff4d8d"
            attach="material"
            distort={0.5}
            speed={2}
            roughness={0}
            metalness={0.8}
            emissive="#ff1060"
            emissiveIntensity={0.7}
            transparent
            opacity={0.75}
          />
        </Sphere>
      </mesh>
    </Float>
  )
}

const FINALE_LINES = [
  'Mishtu…',
  'Meri Jaan…',
  'Meri Sweetheart…',
  'Meri Babs…',
  'Meri favourite person in this entire universe…',
]

interface Props { onGoToLetter: () => void }

export default function GrandFinale({ onGoToLetter }: Props) {
  const [step, setStep] = useState(0)
  const [answered, setAnswered] = useState(false)

  const advance = () => {
    if (step < FINALE_LINES.length) setStep(s => s + 1)
  }

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '80px 24px',
      background: 'radial-gradient(ellipse at 50% 50%, #2a0040 0%, #150025 40%, #0d0015 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div className="section-divider" style={{ position: 'absolute', top: 0, left: 0 }} />

      {/* Soft pink glow overlay */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: '80vw', height: '80vw', maxWidth: 600, maxHeight: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,77,141,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* 3D Glass heart */}
      <div style={{ width: '200px', height: '200px', marginBottom: 40 }}>
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[3, 3, 2]} color="#ff4d8d" intensity={3} />
          <pointLight position={[-3, -2, 1]} color="#b57bee" intensity={2} />
          <GlassHeart />
        </Canvas>
      </div>

      {/* Sequential lines */}
      <div style={{ textAlign: 'center', marginBottom: 32, minHeight: 160 }}>
        <AnimatePresence>
          {FINALE_LINES.slice(0, step).map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: i < FINALE_LINES.length - 1 ? '"Dancing Script", cursive' : '"Playfair Display", serif',
                fontSize: i < FINALE_LINES.length - 1 ? 'clamp(18px, 4vw, 28px)' : 'clamp(16px, 3.5vw, 24px)',
                color: i < FINALE_LINES.length - 1 ? 'rgba(255,214,232,0.78)' : '#ffd6e8',
                marginBottom: 8,
              }}
            >
              {line}
            </motion.p>
          ))}
        </AnimatePresence>

        {step < FINALE_LINES.length && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={advance}
            style={{
              marginTop: 16, padding: '8px 22px',
              background: 'rgba(255,77,141,0.1)', border: '1px solid rgba(255,77,141,0.25)',
              borderRadius: '20px', cursor: 'pointer', color: '#ff85b3',
              fontFamily: 'Inter, sans-serif', fontSize: 13,
            }}
          >
            Continue…
          </motion.button>
        )}

        {/* Big I LOVE YOU */}
        <AnimatePresence>
          {step >= FINALE_LINES.length && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              style={{ marginTop: 16 }}
            >
              <h1 style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: 'clamp(32px, 8vw, 72px)',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #ff4d8d, #f5c97a, #b57bee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: 'none',
                letterSpacing: '0.03em',
                lineHeight: 1.2,
              }}>
                I LOVE YOU,<br />MISHTU. ❤️
              </h1>
              <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(14px, 3vw, 20px)', color: 'rgba(255,214,232,0.7)', fontStyle: 'italic', marginTop: 16 }}>
                From your Hojefa, with all the love my heart can hold.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Action buttons */}
      <AnimatePresence>
        {step >= FINALE_LINES.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}
          >
            {!answered ? (
              <motion.button
                whileHover={{ scale: 1.06, boxShadow: '0 0 60px rgba(255,77,141,0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setAnswered(true)}
                style={{
                  padding: '14px 36px',
                  background: 'linear-gradient(135deg, rgba(255,77,141,0.25), rgba(181,123,238,0.25))',
                  border: '1px solid rgba(255,77,141,0.5)', borderRadius: '40px',
                  cursor: 'pointer', color: '#ffd6e8',
                  fontFamily: '"Playfair Display", serif', fontSize: 'clamp(14px, 2.5vw, 17px)',
                  backdropFilter: 'blur(10px)', transition: 'all 0.3s ease',
                }}
              >
                Tap Here If You Love Me Too 🥹💗
              </motion.button>
            ) : (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ textAlign: 'center' }}
              >
                <p style={{ fontFamily: '"Dancing Script", cursive', fontSize: 'clamp(18px, 4vw, 26px)', color: '#ff85b3' }}>
                  Bas, ab smile kar do meri jaan…
                </p>
                <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(15px, 3vw, 20px)', color: 'rgba(255,214,232,0.75)', fontStyle: 'italic', marginTop: 8 }}>
                  tumhari smile hi toh meri favourite ending hai. ❤️
                </p>

                {/* Confetti burst */}
                {Array.from({ length: 24 }).map((_, i) => {
                  const angle = (i / 24) * Math.PI * 2
                  const dist = 100 + Math.random() * 150
                  return (
                    <motion.div
                      key={i}
                      initial={{ x: 0, y: 0, opacity: 1 }}
                      animate={{ x: Math.cos(angle) * dist, y: Math.sin(angle) * dist, opacity: 0 }}
                      transition={{ duration: 1.5, delay: i * 0.04 }}
                      style={{ position: 'absolute', top: '50%', left: '50%', fontSize: 22, pointerEvents: 'none' }}
                    >
                      {['❤️', '💗', '✨', '🌹', '💕', '⭐'][i % 6]}
                    </motion.div>
                  )
                })}
              </motion.div>
            )}

            <button
              onClick={onGoToLetter}
              style={{
                padding: '10px 26px',
                background: 'rgba(181,123,238,0.1)', border: '1px solid rgba(181,123,238,0.25)',
                borderRadius: '30px', cursor: 'pointer', color: '#d4a8ff',
                fontFamily: 'Inter, sans-serif', fontSize: 14, transition: 'all 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(181,123,238,0.2)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(181,123,238,0.1)')}
            >
              Read My Love Letter Again 💌
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
