import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Torus, MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

function SpinningHeart() {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4
      meshRef.current.rotation.z = Math.sin(Date.now() * 0.001) * 0.1
    }
  })
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={meshRef}>
        <Torus args={[1, 0.4, 32, 100]}>
          <MeshDistortMaterial
            color="#ff4d8d"
            attach="material"
            distort={0.3}
            speed={3}
            roughness={0}
            metalness={0.5}
            emissive="#ff1060"
            emissiveIntensity={0.5}
            transparent
            opacity={0.9}
          />
        </Torus>
      </mesh>
    </Float>
  )
}

const NICKNAMES = [
  { text: 'Jaan ❤️', x: '-40%', y: '10%', delay: 0.2, color: '#ff4d8d' },
  { text: 'Babs 🧸', x: '35%', y: '-25%', delay: 0.4, color: '#b57bee' },
  { text: 'Sweetheart 🌷', x: '-45%', y: '-30%', delay: 0.6, color: '#f5c97a' },
  { text: 'Baby 🫶', x: '42%', y: '25%', delay: 0.8, color: '#ff85b3' },
  { text: 'Janeman 💗', x: '10%', y: '-45%', delay: 1.0, color: '#d4a8ff' },
]

interface Props { onScrollDown: () => void }

export default function HeroSection({ onScrollDown }: Props) {
  return (
    <section id="hero" style={{
      minHeight: '100vh', position: 'relative', display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', padding: '80px 24px 60px',
      background: 'radial-gradient(ellipse at 40% 40%, #2d0050 0%, #1a0030 40%, #0d0015 100%)',
    }}>
      {/* Gradient blob */}
      <div style={{
        position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(181,123,238,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* 3D Canvas */}
      <div style={{ width: '220px', height: '220px', position: 'relative' }}>
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[3, 3, 3]} color="#ff4d8d" intensity={3} />
          <pointLight position={[-3, -2, 1]} color="#b57bee" intensity={2} />
          <SpinningHeart />
        </Canvas>

        {/* Floating nickname tags */}
        {NICKNAMES.map((n, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: n.delay + 0.5, duration: 0.5, type: 'spring' }}
            style={{
              position: 'absolute',
              left: '50%', top: '50%',
              transform: `translate(calc(-50% + ${n.x}), calc(-50% + ${n.y}))`,
              background: 'rgba(13,0,21,0.7)',
              border: `1px solid ${n.color}50`,
              borderRadius: '20px', padding: '4px 12px',
              fontFamily: '"Dancing Script", cursive',
              fontSize: 'clamp(11px, 2.5vw, 14px)',
              color: n.color, whiteSpace: 'nowrap',
              backdropFilter: 'blur(8px)',
              boxShadow: `0 0 12px ${n.color}30`,
            }}
          >
            {n.text}
          </motion.div>
        ))}
      </div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{ textAlign: 'center', marginTop: 48, zIndex: 2 }}
      >
        <h1 style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(28px, 7vw, 64px)',
          fontWeight: 700, color: '#ffd6e8',
          textShadow: '0 0 40px rgba(255,77,141,0.4)',
          lineHeight: 1.2, marginBottom: 20,
        }}>
          Hey, My Mishtu… 🥹❤️
        </h1>
        <p style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(16px, 3vw, 22px)',
          color: 'rgba(255,214,232,0.75)',
          fontStyle: 'italic', maxWidth: 560, margin: '0 auto 40px',
          lineHeight: 1.6,
        }}>
          Welcome to the little world that exists only because you exist in mine.
        </p>
        <motion.button
          whileHover={{ scale: 1.06, boxShadow: '0 0 50px rgba(255,77,141,0.45)' }}
          whileTap={{ scale: 0.95 }}
          onClick={onScrollDown}
          style={{
            padding: '14px 36px',
            background: 'linear-gradient(135deg, rgba(255,77,141,0.25), rgba(181,123,238,0.25))',
            border: '1px solid rgba(255,77,141,0.5)', borderRadius: '40px',
            cursor: 'pointer', color: '#ffd6e8',
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(14px, 2.5vw, 17px)',
            letterSpacing: '0.04em', backdropFilter: 'blur(10px)',
            boxShadow: '0 0 30px rgba(255,77,141,0.2)',
            transition: 'all 0.3s ease',
          }}
        >
          There's Something I Want to Tell You 💌
        </motion.button>
      </motion.div>
    </section>
  )
}
