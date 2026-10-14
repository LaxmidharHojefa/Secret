import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LETTER = `Dear Mishtu, meri jaan ❤️,

Pata hai, kabhi-kabhi mujhe samajh hi nahi aata ki tumhe kaise bataun ki tum mere liye kitni special ho.

Tumse baat karna, tumhari smile ke baare mein sochna, tumhare message ka wait karna… pata nahi kyun, tumhari chhoti-chhoti baatein bhi mere din ko special bana deti hain.

Kabhi tumhe hug karne ka mann karta hai, kabhi bas tumhare paas baithkar tumse baatein karne ka. Aur kabhi toh bas itna mann karta hai ki tum saamne ho aur main tumhe dekhkar smile karta rahun.

Distance hai humare beech, lekin meri feelings mein kabhi distance nahi raha.

Tum meri sweetheart ho, meri jaan ho, meri babs ho… aur sabse badhkar, tum woh insaan ho jiske saath main apni khushiyan, apni silly baatein aur apne sapne share karna chahta hoon.

Main perfect nahi hoon, lekin tumhare liye apni taraf se hamesha pyaar, care aur honesty rakhna chahta hoon.

Bas aaj tumhe ek baar phir yaad dilana tha…

I LOVE YOU, MISHTU. Aaj bhi, kal bhi, aur har us din jab tumhe meri yaad aaye. ❤️

Forever your Hojefa. 💋`

function TypewriterText({ text, speed = 25 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState('')
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    setDisplayed('')
    setIdx(0)
  }, [text])

  useEffect(() => {
    if (idx < text.length) {
      const t = setTimeout(() => {
        setDisplayed(prev => prev + text[idx])
        setIdx(i => i + 1)
      }, speed)
      return () => clearTimeout(t)
    }
  }, [idx, text, speed])

  return <>{displayed}</>
}

export default function LoveLetter() {
  const [open, setOpen] = useState(false)
  const [key, setKey] = useState(0)

  const replay = () => { setOpen(false); setTimeout(() => { setOpen(true); setKey(k => k + 1) }, 400) }

  return (
    <section id="letter" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '80px 24px',
      background: 'radial-gradient(ellipse at 60% 30%, #1e0040 0%, #0d0015 70%)',
      position: 'relative',
    }}>
      <div className="section-divider" style={{ position: 'absolute', top: 0, left: 0 }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: 48 }}
      >
        <div style={{ fontSize: 14, letterSpacing: '0.2em', color: '#f5c97a', marginBottom: 12, fontFamily: 'Inter, sans-serif', textTransform: 'uppercase' }}>
          💌 From My Heart to Yours
        </div>
        <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(26px, 5vw, 48px)', color: '#ffd6e8', fontWeight: 700 }}>
          A Letter For My Jaan
        </h2>
      </motion.div>

      {/* Envelope */}
      <motion.div
        animate={{ y: open ? 0 : [0, -10, 0] }}
        transition={{ duration: 3, repeat: open ? 0 : Infinity, ease: 'easeInOut' }}
        style={{ width: '100%', maxWidth: 560, cursor: open ? 'default' : 'pointer' }}
        onClick={() => !open && setOpen(true)}
      >
        {/* Envelope body */}
        <AnimatePresence mode="wait">
          {!open && (
            <motion.div
              key="envelope"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              style={{
                background: 'linear-gradient(145deg, rgba(45,0,80,0.7), rgba(26,0,48,0.9))',
                border: '1px solid rgba(255,77,141,0.35)',
                borderRadius: '16px', padding: '60px 40px',
                textAlign: 'center',
                boxShadow: '0 20px 60px rgba(255,77,141,0.1), 0 0 100px rgba(181,123,238,0.05)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Flap */}
              <div style={{
                position: 'relative',
                width: 60, height: 60, margin: '0 auto 24px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{
                  width: 60, height: 60, background: 'linear-gradient(135deg, #ff4d8d, #b57bee)',
                  clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                  position: 'absolute', top: 0,
                }} />
                <div style={{
                  width: 60, height: 40, background: 'rgba(45,0,80,0.8)',
                  position: 'absolute', bottom: 0, borderRadius: '0 0 8px 8px',
                }} />
              </div>
              <p style={{ fontFamily: '"Dancing Script", cursive', fontSize: 28, color: '#ffd6e8', marginBottom: 8 }}>
                For My Mishtu 💌
              </p>
              <p style={{ color: 'rgba(255,214,232,0.6)', fontSize: 14, fontFamily: 'Inter, sans-serif' }}>
                Click to open ✨
              </p>
            </motion.div>
          )}

          {open && (
            <motion.div
              key="letter"
              initial={{ rotateX: -90, opacity: 0, scaleY: 0.3 }}
              animate={{ rotateX: 0, opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'linear-gradient(145deg, rgba(35,5,60,0.9), rgba(20,0,38,0.97))',
                border: '1px solid rgba(255,77,141,0.25)',
                borderRadius: '16px', padding: '48px clamp(20px, 5vw, 48px)',
                boxShadow: '0 20px 60px rgba(255,77,141,0.15)',
                backdropFilter: 'blur(20px)',
                transformOrigin: 'top center',
              }}
            >
              <div style={{
                fontFamily: '"Dancing Script", cursive',
                fontSize: 'clamp(15px, 2.5vw, 19px)',
                color: 'rgba(255,230,240,0.92)',
                lineHeight: 1.9,
                whiteSpace: 'pre-line',
              }}>
                <TypewriterText key={key} text={LETTER} speed={18} />
              </div>

              <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button
                  onClick={replay}
                  style={{
                    padding: '10px 24px',
                    background: 'rgba(255,77,141,0.12)',
                    border: '1px solid rgba(255,77,141,0.35)',
                    borderRadius: '30px', cursor: 'pointer',
                    color: '#ff85b3', fontFamily: 'Inter, sans-serif', fontSize: 13,
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,77,141,0.22)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,77,141,0.12)')}
                >
                  🔄 Read Again
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
