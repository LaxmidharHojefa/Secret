import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SurpriseGift() {
  const [opened, setOpened] = useState(false)

  return (
    <section id="surprise" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '80px 24px',
      background: 'radial-gradient(ellipse at 50% 60%, #200040 0%, #0d0015 65%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div className="section-divider" style={{ position: 'absolute', top: 0, left: 0 }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: 48 }}
      >
        <div style={{ fontSize: 13, letterSpacing: '0.2em', color: '#f5c97a', marginBottom: 12, fontFamily: 'Inter, sans-serif', textTransform: 'uppercase' }}>
          🎁 Your Surprise
        </div>
        <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(22px, 5vw, 44px)', color: '#ffd6e8', fontWeight: 700 }}>
          Mishtu, tumhare liye ek chhota sa surprise hai…
        </h2>
      </motion.div>

      {/* Gift box */}
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="box"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, rotateY: [0, 3, -3, 0] }}
            exit={{ scale: 0, opacity: 0, rotateY: 180 }}
            transition={{ duration: 0.6 }}
            style={{
              cursor: 'pointer', textAlign: 'center',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24,
            }}
          >
            {/* Surrounding roses */}
            <div style={{ position: 'relative', width: 180, height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {['🌹', '🌷', '🌹', '🌷'].map((r, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear', delay: i * 3 }}
                  style={{
                    position: 'absolute',
                    left: '50%', top: '50%',
                    transform: `rotate(${i * 90}deg) translateY(-80px)`,
                    transformOrigin: '0 0',
                    fontSize: 22,
                  }}
                >
                  {r}
                </motion.div>
              ))}

              {/* Glowing particles around box */}
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i / 8) * Math.PI * 2
                return (
                  <motion.div
                    key={`p${i}`}
                    animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 }}
                    style={{
                      position: 'absolute',
                      left: `calc(50% + ${Math.cos(angle) * 65}px)`,
                      top: `calc(50% + ${Math.sin(angle) * 65}px)`,
                      width: 6, height: 6, borderRadius: '50%',
                      background: ['#ff4d8d', '#b57bee', '#f5c97a'][i % 3],
                    }}
                  />
                )
              })}

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ fontSize: 80, filter: 'drop-shadow(0 0 20px rgba(255,77,141,0.5))' }}
              >
                🎁
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.06, boxShadow: '0 0 50px rgba(245,201,122,0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpened(true)}
              style={{
                padding: '14px 36px',
                background: 'linear-gradient(135deg, rgba(245,201,122,0.2), rgba(255,77,141,0.2))',
                border: '1px solid rgba(245,201,122,0.4)', borderRadius: '40px',
                cursor: 'pointer', color: '#fde8a0',
                fontFamily: '"Playfair Display", serif', fontSize: 'clamp(14px, 2.5vw, 17px)',
                backdropFilter: 'blur(10px)',
              }}
            >
              Open Your Gift, Baby 🎀
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="message"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ textAlign: 'center', maxWidth: 520, position: 'relative' }}
          >
            {/* Floating roses and hearts */}
            {Array.from({ length: 16 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, opacity: 1, scale: 0.5 }}
                animate={{
                  x: (Math.random() - 0.5) * 400,
                  y: (Math.random() - 0.5) * 300,
                  opacity: 0, scale: 1.5,
                }}
                transition={{ duration: 1.5, delay: i * 0.06, ease: 'easeOut' }}
                style={{ position: 'absolute', top: '50%', left: '50%', fontSize: 24, zIndex: 3 }}
              >
                {['🌹', '❤️', '💗', '✨', '🌷'][i % 5]}
              </motion.div>
            ))}

            <div style={{
              background: 'linear-gradient(145deg, rgba(40,0,70,0.85), rgba(20,0,40,0.97))',
              border: '1px solid rgba(245,201,122,0.3)',
              borderRadius: 24, padding: 'clamp(28px, 6vw, 52px)',
              boxShadow: '0 0 60px rgba(245,201,122,0.12), 0 20px 80px rgba(0,0,0,0.4)',
              backdropFilter: 'blur(20px)',
            }}>
              <div style={{ fontSize: 48, marginBottom: 20 }}>🏆</div>
              <p style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(16px, 3.5vw, 22px)', color: '#fde8a0', lineHeight: 1.7, marginBottom: 20 }}>
                Congratulations, meri jaan! ❤️
              </p>
              <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(15px, 3vw, 20px)', color: 'rgba(255,230,240,0.88)', fontStyle: 'italic', lineHeight: 1.7 }}>
                Tum officially duniya ke sabse pyaare insaan ke dil mein rehti ho.
              </p>
              <p style={{ fontFamily: '"Dancing Script", cursive', fontSize: 'clamp(18px, 4vw, 26px)', color: '#ff85b3', marginTop: 20 }}>
                Aur us insaan ka naam hai… Hojefa. 🥹💋
              </p>
            </div>

            <button
              onClick={() => setOpened(false)}
              style={{
                marginTop: 20, padding: '8px 20px',
                background: 'rgba(245,201,122,0.08)', border: '1px solid rgba(245,201,122,0.2)',
                borderRadius: '20px', cursor: 'pointer', color: 'rgba(255,214,232,0.5)',
                fontFamily: 'Inter, sans-serif', fontSize: 13,
              }}
            >
              Open again? 🎁
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
