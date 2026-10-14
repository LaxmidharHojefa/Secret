import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SHAYARIS = [
  {
    title: 'Meri Mishtu',
    lines: [
      'Na chaand ki khwahish hai, na sitaaron ki farmaish hai,',
      'Meri har chhoti si khushi mein bas tumhari inaayat hai.',
      'Log poochhte hain meri muskurahat ki wajah,',
      'Main kya bataun… meri har khushi mein sirf Mishtu ki rifaqat hai. ❤️',
    ],
    emoji: '🌹',
    color: '#ff4d8d',
  },
  {
    title: 'Dooriyan',
    lines: [
      'Faasle sirf raaston mein hain, dil mein nahi,',
      'Tum meri soch mein ho, kisi roshan khwaab ki tarah.',
      'Jab bhi tumse baat karne ka mann karta hai,',
      'Meri duniya simat aati hai tumhari ek muskurahat mein. 💗',
    ],
    emoji: '🌌',
    color: '#b57bee',
  },
  {
    title: 'Tumhari Smile',
    lines: [
      'Tumhari muskurahat meri favourite jagah hai,',
      'Tumhara khush rehna meri dil se nikli dua hai.',
      'Tum paas ho ya door, farq bas itna sa hai,',
      'Meri jaan, tumse pyaar karna meri khushi ki wajah hai. 🌷',
    ],
    emoji: '🌷',
    color: '#f5c97a',
  },
  {
    title: 'Ek Hug Ke Naam',
    lines: [
      'Ek hug tumhara udhaar hai mujh par,',
      'Ek mulaqat ka intezaar hai mujh par.',
      'Jab milenge na, meri jaan, toh waqt se keh dunga,',
      'Aaj thoda dheere chalna… bahut saara pyaar hai mujh par. 🫂❤️',
    ],
    emoji: '🫂',
    color: '#ff85b3',
  },
  {
    title: 'I Love You',
    lines: [
      'Har baar tumhe I love you kehna chahta hoon,',
      'Har baar tumhe aur kareeb mehsoos karna chahta hoon.',
      'Alfaaz kam pad jaate hain tumhe samjhane mein,',
      'Main bas har din tumhe thoda aur pyaar karna chahta hoon. 💋',
    ],
    emoji: '💋',
    color: '#d4a8ff',
  },
]

function ShayariCard({ shayari, active }: { shayari: typeof SHAYARIS[0]; active: boolean }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width - 0.5) * 20
    const y = -((e.clientY - top) / height - 0.5) * 20
    setTilt({ x, y })
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: 'transform 0.1s',
        background: `linear-gradient(145deg, rgba(30,0,55,0.85), rgba(15,0,30,0.95))`,
        border: `1px solid ${shayari.color}40`,
        borderRadius: '20px',
        padding: 'clamp(24px, 5vw, 40px)',
        boxShadow: `0 0 40px ${shayari.color}15, 0 20px 60px rgba(0,0,0,0.4)`,
        backdropFilter: 'blur(20px)',
        maxWidth: 600, width: '100%',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Glow accent */}
      <div style={{
        position: 'absolute', top: '-40%', right: '-20%',
        width: '200px', height: '200px', borderRadius: '50%',
        background: `radial-gradient(circle, ${shayari.color}15 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
        <span style={{ fontSize: 28 }}>{shayari.emoji}</span>
        <h3 style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(16px, 3vw, 20px)',
          color: shayari.color, fontWeight: 600,
        }}>
          {shayari.title}
        </h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {shayari.lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            style={{
              fontFamily: '"Noto Serif Devanagari", serif',
              fontSize: 'clamp(14px, 2.5vw, 17px)',
              color: 'rgba(255,230,240,0.88)',
              lineHeight: 1.7, fontStyle: 'italic',
            }}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </motion.div>
  )
}

export default function ShayariGallery() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(c => (c - 1 + SHAYARIS.length) % SHAYARIS.length)
  const next = () => setCurrent(c => (c + 1) % SHAYARIS.length)

  return (
    <section id="shayari" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '80px 24px',
      background: 'radial-gradient(ellipse at 30% 60%, #16003a 0%, #0d0015 70%)',
      position: 'relative',
    }}>
      <div className="section-divider" style={{ position: 'absolute', top: 0 }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: 48 }}
      >
        <div style={{ fontSize: 13, letterSpacing: '0.2em', color: '#f5c97a', marginBottom: 12, fontFamily: 'Inter, sans-serif', textTransform: 'uppercase' }}>
          🌹 Dil Se Sirf Tumhare Liye
        </div>
        <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(24px, 5vw, 44px)', color: '#ffd6e8', fontWeight: 700 }}>
          Meri Jaan Ke Naam, Kuch Dil Ki Baatein…
        </h2>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <ShayariCard shayari={SHAYARIS[current]} active />
        </motion.div>
      </AnimatePresence>

      <div style={{ display: 'flex', gap: 16, marginTop: 36, alignItems: 'center' }}>
        <button
          onClick={prev}
          disabled={current === 0}
          style={{
            padding: '10px 22px', background: 'rgba(181,123,238,0.12)',
            border: '1px solid rgba(181,123,238,0.3)', borderRadius: '30px',
            cursor: current === 0 ? 'not-allowed' : 'pointer',
            color: current === 0 ? 'rgba(255,255,255,0.3)' : '#d4a8ff',
            fontFamily: 'Inter, sans-serif', fontSize: 13,
            transition: 'all 0.2s',
          }}
        >
          ← Pehli Shayari
        </button>

        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, fontFamily: 'Inter, sans-serif' }}>
          {current + 1} / {SHAYARIS.length}
        </span>

        <button
          onClick={next}
          disabled={current === SHAYARIS.length - 1}
          style={{
            padding: '10px 22px', background: 'rgba(255,77,141,0.12)',
            border: '1px solid rgba(255,77,141,0.3)', borderRadius: '30px',
            cursor: current === SHAYARIS.length - 1 ? 'not-allowed' : 'pointer',
            color: current === SHAYARIS.length - 1 ? 'rgba(255,255,255,0.3)' : '#ff85b3',
            fontFamily: 'Inter, sans-serif', fontSize: 13,
            transition: 'all 0.2s',
          }}
        >
          Next Shayari, Jaan? 💌
        </button>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', gap: 8, marginTop: 20 }}>
        {SHAYARIS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Shayari ${i + 1}`}
            style={{
              width: i === current ? 24 : 8, height: 8,
              borderRadius: 4, border: 'none', cursor: 'pointer',
              background: i === current ? '#ff4d8d' : 'rgba(255,77,141,0.25)',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </section>
  )
}
