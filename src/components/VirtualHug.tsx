import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function VirtualHug() {
  const [hugged, setHugged] = useState(false)

  const sendHug = () => setHugged(true)

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '80px 24px',
      background: 'radial-gradient(ellipse at 50% 30%, #1a0035 0%, #0d0015 65%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div className="section-divider" style={{ position: 'absolute', top: 0, left: 0 }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: 60, zIndex: 2 }}
      >
        <div style={{ fontSize: 13, letterSpacing: '0.2em', color: '#f5c97a', marginBottom: 12, fontFamily: 'Inter, sans-serif', textTransform: 'uppercase' }}>
          🫂 Distance, But Never Apart
        </div>
        <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(24px, 5vw, 44px)', color: '#ffd6e8', fontWeight: 700, marginBottom: 20 }}>
          Distance Between Us,<br />But Never Between Our Hearts.
        </h2>
        <p style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(15px, 3vw, 20px)',
          color: 'rgba(255,214,232,0.72)', fontStyle: 'italic',
          maxWidth: 520, margin: '0 auto',
          lineHeight: 1.7,
        }}>
          "Kaash abhi tum mere saamne hoti, toh main tumhe screen ke through nahi,<br />
          apni baahon mein lekar kehta…<br /><br />
          <span style={{ color: '#ff85b3' }}>Mishtu, I missed you. Bahut zyada. ❤️</span>"
        </p>
      </motion.div>

      {/* Two hearts connected by light trail */}
      <div style={{ position: 'relative', width: '100%', maxWidth: 520, height: 120, marginBottom: 48 }}>
        {/* Left heart — Hojefa */}
        <motion.div
          animate={hugged ? { x: 80 } : { x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'absolute', left: '8%', top: '50%', transform: 'translateY(-50%)', textAlign: 'center' }}
        >
          <div style={{ fontSize: 52 }}>💙</div>
          <p style={{ color: 'rgba(255,214,232,0.5)', fontSize: 11, fontFamily: 'Inter, sans-serif', marginTop: 4 }}>Hojefa</p>
        </motion.div>

        {/* Light trail */}
        <div style={{
          position: 'absolute', top: '50%', left: '20%', right: '20%',
          height: 2, transform: 'translateY(-50%)',
          background: 'linear-gradient(90deg, #4d88ff, #b57bee, #ff4d8d)',
          borderRadius: 2, opacity: 0.4,
        }}>
          {/* Animated dot */}
          <motion.div
            animate={{ left: ['0%', '100%', '0%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', top: '50%', transform: 'translateY(-50%)',
              width: 8, height: 8, borderRadius: '50%',
              background: '#ff85b3',
              boxShadow: '0 0 12px #ff4d8d, 0 0 20px rgba(255,77,141,0.5)',
            }}
          />
        </div>

        {/* Right heart — Mishtu */}
        <motion.div
          animate={hugged ? { x: -80 } : { x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'absolute', right: '8%', top: '50%', transform: 'translateY(-50%)', textAlign: 'center' }}
        >
          <div style={{ fontSize: 52 }}>💗</div>
          <p style={{ color: 'rgba(255,214,232,0.5)', fontSize: 11, fontFamily: 'Inter, sans-serif', marginTop: 4 }}>Mishtu</p>
        </motion.div>
      </div>

      {/* Hug button */}
      {!hugged ? (
        <motion.button
          whileHover={{ scale: 1.06, boxShadow: '0 0 50px rgba(255,77,141,0.4)' }}
          whileTap={{ scale: 0.95 }}
          onClick={sendHug}
          style={{
            padding: '14px 36px',
            background: 'linear-gradient(135deg, rgba(255,77,141,0.2), rgba(181,123,238,0.2))',
            border: '1px solid rgba(255,77,141,0.4)', borderRadius: '40px',
            cursor: 'pointer', color: '#ffd6e8',
            fontFamily: '"Playfair Display", serif', fontSize: 'clamp(14px, 2.5vw, 17px)',
            backdropFilter: 'blur(10px)', transition: 'all 0.3s ease',
          }}
        >
          Send Me a Hug, Jaan 🫂
        </motion.button>
      ) : (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{ textAlign: 'center', zIndex: 2 }}
        >
          <p style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(18px, 4vw, 28px)', color: '#ff85b3', marginBottom: 12 }}>
            Virtual hug delivered! 🤗
          </p>
          <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(15px, 3vw, 20px)', color: 'rgba(255,214,232,0.8)', fontStyle: 'italic' }}>
            Ab ek real wali bhi pending hai, meri jaan 💕
          </p>
          <button
            onClick={() => setHugged(false)}
            style={{
              marginTop: 20, padding: '8px 20px',
              background: 'rgba(255,77,141,0.1)', border: '1px solid rgba(255,77,141,0.25)',
              borderRadius: '20px', cursor: 'pointer', color: 'rgba(255,214,232,0.6)',
              fontFamily: 'Inter, sans-serif', fontSize: 13,
            }}
          >
            Send another? 🫂
          </button>
        </motion.div>
      )}

      {/* Warm particle burst on hug */}
      <AnimatePresence>
        {hugged && (
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {Array.from({ length: 20 }).map((_, i) => {
              const angle = (i / 20) * Math.PI * 2
              const dist = 120 + Math.random() * 100
              return (
                <motion.div
                  key={i}
                  initial={{ x: 0, y: 0, opacity: 1 }}
                  animate={{ x: Math.cos(angle) * dist, y: Math.sin(angle) * dist, opacity: 0 }}
                  transition={{ duration: 1.2, delay: i * 0.04, ease: 'easeOut' }}
                  style={{ position: 'absolute', fontSize: 20 }}
                >
                  {['❤️', '🫂', '💕', '✨', '💗'][i % 5]}
                </motion.div>
              )
            })}
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
