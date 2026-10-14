import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'My Letter', href: '#letter' },
  { label: 'Shayari', href: '#shayari' },
  { label: 'Memories', href: '#memories' },
  { label: 'Reasons', href: '#reasons' },
  { label: 'Surprise', href: '#surprise' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleClick = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '12px 24px',
          background: scrolled ? 'rgba(13,0,21,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,77,141,0.15)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        <button
          onClick={() => handleClick('#hero')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px' }}
          aria-label="Home"
        >
          ❤️
        </button>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }} className="hidden-mobile">
          {NAV_ITEMS.map(item => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'rgba(255,213,225,0.8)', fontSize: '13px',
                fontFamily: 'Inter, sans-serif', letterSpacing: '0.05em',
                fontWeight: 500, transition: 'color 0.2s',
                textTransform: 'uppercase',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ff4d8d')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,213,225,0.8)')}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="show-mobile"
          onClick={() => setOpen(o => !o)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: '22px', color: '#ff85b3',
          }}
          aria-label="Menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed', top: 56, left: 0, right: 0, zIndex: 49,
              background: 'rgba(13,0,21,0.95)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,77,141,0.2)',
              display: 'flex', flexDirection: 'column', gap: '4px',
              padding: '16px',
            }}
          >
            {NAV_ITEMS.map(item => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'rgba(255,213,225,0.9)', fontSize: '16px',
                  fontFamily: 'Inter, sans-serif', padding: '12px 8px',
                  textAlign: 'left', borderBottom: '1px solid rgba(255,77,141,0.08)',
                }}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to top button */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            style={{
              position: 'fixed', bottom: '80px', right: '24px', zIndex: 100,
              background: 'rgba(255,77,141,0.15)', border: '1px solid rgba(255,77,141,0.4)',
              borderRadius: '50%', width: '44px', height: '44px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', fontSize: '20px', backdropFilter: 'blur(10px)',
            }}
          >
            ❤️
          </motion.button>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) { .hidden-mobile { display: none !important; } }
        @media (min-width: 641px) { .show-mobile { display: none !important; } }
      `}</style>
    </>
  )
}
