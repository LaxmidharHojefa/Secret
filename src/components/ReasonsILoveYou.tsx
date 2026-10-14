import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const REASONS = [
  'Because your smile makes my day better — every single time.',
  'Because tumhari chhoti-chhoti baatein bhi mujhe special lagti hain.',
  'Because you understand me in ways I cannot always explain.',
  'Because talking to you makes ordinary days feel beautiful.',
  'Because you are my favourite notification. 📱💗',
  'Because tum meri jaan ho, aur bas ho. ❤️',
  'Because even on difficult days, you bring warmth into my world.',
  'Because you make me want to be a better person.',
  'Because the way you care about things makes my heart full.',
  'Because every time I think of you, I can\'t help but smile.',
  'Because you\'re my person — aur woh feeling bohot rare hai.',
  'Because being loved by you feels like the luckiest thing in the world.',
]

function HeartBurst({ trigger }: { trigger: number }) {
  return (
    <AnimatePresence>
      {trigger > 0 && (
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2
            return (
              <motion.div
                key={`${trigger}-${i}`}
                initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                animate={{ x: Math.cos(angle) * 80, y: Math.sin(angle) * 80, scale: 0, opacity: 0 }}
                exit={{}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                style={{ position: 'absolute', fontSize: 16 }}
              >
                {['❤️', '💕', '💗', '🌹'][i % 4]}
              </motion.div>
            )
          })}
        </div>
      )}
    </AnimatePresence>
  )
}

export default function ReasonsILoveYou() {
  const [index, setIndex] = useState(0)
  const [shown, setShown] = useState([0])
  const [burst, setBurst] = useState(0)

  const next = () => {
    const nextIdx = (index + 1) % REASONS.length
    setIndex(nextIdx)
    setShown(p => p.includes(nextIdx) ? p : [...p, nextIdx])
    setBurst(b => b + 1)
  }

  return (
    <section id="reasons" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '80px 24px',
      background: 'radial-gradient(ellipse at 50% 50%, #1c003a 0%, #0d0015 70%)',
      position: 'relative',
    }}>
      <div className="section-divider" style={{ position: 'absolute', top: 0, left: 0 }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: 48 }}
      >
        <div style={{ fontSize: 13, letterSpacing: '0.2em', color: '#f5c97a', marginBottom: 12, fontFamily: 'Inter, sans-serif', textTransform: 'uppercase' }}>
          🧸 Reasons I Love You
        </div>
        <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(24px, 5vw, 44px)', color: '#ffd6e8', fontWeight: 700 }}>
          Why You Are My Favourite Person
        </h2>
      </motion.div>

      {/* Big Heart with current reason */}
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ fontSize: 80, lineHeight: 1, marginBottom: 32, display: 'inline-block' }}
        >
          ❤️
        </motion.div>
        <HeartBurst trigger={burst} />
      </div>

      {/* Reason card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          transition={{ duration: 0.5 }}
          style={{
            background: 'linear-gradient(145deg, rgba(40,0,70,0.8), rgba(20,0,40,0.95))',
            border: '1px solid rgba(255,77,141,0.3)',
            borderRadius: '20px', padding: 'clamp(24px, 5vw, 40px)',
            maxWidth: 520, width: '100%', textAlign: 'center',
            boxShadow: '0 0 50px rgba(255,77,141,0.12)',
            backdropFilter: 'blur(20px)',
            marginBottom: 32,
          }}
        >
          <p style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(18px, 4vw, 26px)',
            color: 'rgba(255,230,240,0.92)',
            lineHeight: 1.6, fontStyle: 'italic',
          }}>
            "{REASONS[index]}"
          </p>
          <div style={{ marginTop: 16, fontSize: 11, color: 'rgba(255,214,232,0.3)', fontFamily: 'Inter, sans-serif' }}>
            Reason {shown.indexOf(index) + 1} of {REASONS.length}
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.06, boxShadow: '0 0 40px rgba(255,77,141,0.4)' }}
        whileTap={{ scale: 0.95 }}
        onClick={next}
        style={{
          padding: '14px 36px',
          background: 'linear-gradient(135deg, rgba(255,77,141,0.22), rgba(181,123,238,0.22))',
          border: '1px solid rgba(255,77,141,0.45)', borderRadius: '40px',
          cursor: 'pointer', color: '#ffd6e8',
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(14px, 2.5vw, 17px)',
          letterSpacing: '0.04em', backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
        }}
      >
        Ek Aur Reason Batao, Baby 🥹
      </motion.button>

      {/* Mini reason trail */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginTop: 32, maxWidth: 600 }}>
        {shown.map(i => (
          <motion.button
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => setIndex(i)}
            style={{
              padding: '5px 14px',
              background: index === i ? 'rgba(255,77,141,0.25)' : 'rgba(255,77,141,0.07)',
              border: `1px solid ${index === i ? 'rgba(255,77,141,0.5)' : 'rgba(255,77,141,0.15)'}`,
              borderRadius: '20px', cursor: 'pointer',
              color: index === i ? '#ff85b3' : 'rgba(255,214,232,0.4)',
              fontFamily: 'Inter, sans-serif', fontSize: 12,
              transition: 'all 0.2s',
            }}
          >
            #{i + 1}
          </motion.button>
        ))}
      </div>
    </section>
  )
}
