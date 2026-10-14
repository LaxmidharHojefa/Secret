import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PHOTOS = [
  { id: 1, src: '/images/mishtu-01.jpg', caption: 'My favourite smile in this whole universe.', alt: 'Mishtu smiling' },
  { id: 2, src: '/images/mishtu-02.jpg', caption: 'A little moment, a lot of love.', alt: 'A beautiful memory' },
  { id: 3, src: '/images/our-memory-01.jpg', caption: 'Door ho, par dil ke sabse paas.', alt: 'Our memory together' },
  { id: 4, src: '/images/our-memory-02.jpg', caption: 'My forever favourite person — Mishtu.', alt: 'Mishtu, my love' },
  { id: 5, src: '/images/our-memory-03.jpg', caption: 'Every moment with you is a treasure.', alt: 'Our beautiful memory' },
  { id: 6, src: '/images/mishtu-03.jpg', caption: 'Tumhari aankhon mein meri duniya hai.', alt: 'Mishtu, my world' },
]

const GIFS = [
  { id: 1, src: '/gifs/cute-love.gif', caption: 'We are like this 🥰', alt: 'Cute love gif' },
  { id: 2, src: '/gifs/hearts.gif', caption: 'My heart every time you text 💗', alt: 'Hearts gif' },
]

const VIDEOS = [
  { id: 1, src: '/videos/our-memory-01.mp4', caption: 'A moment I never want to forget.', poster: '/images/our-memory-01.jpg' },
]

function PlaceholderCard({ caption }: { caption: string }) {
  return (
    <div style={{
      width: '100%', aspectRatio: '4/5',
      background: 'linear-gradient(145deg, rgba(45,0,80,0.5), rgba(20,0,40,0.7))',
      border: '1px dashed rgba(255,77,141,0.25)', borderRadius: '16px',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: 12, padding: 24,
    }}>
      <div style={{ fontSize: 36 }}>📸</div>
      <p style={{ color: 'rgba(255,214,232,0.5)', fontFamily: '"Dancing Script", cursive', fontSize: 16, textAlign: 'center' }}>
        Our next beautiful memory goes here ❤️
      </p>
      <p style={{ color: 'rgba(255,214,232,0.35)', fontFamily: 'Inter, sans-serif', fontSize: 12, textAlign: 'center' }}>
        {caption}
      </p>
    </div>
  )
}

interface LightboxProps { src: string; caption: string; alt: string; onClose: () => void }
function Lightbox({ src, caption, alt, onClose }: LightboxProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 300,
        background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(20px)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: 24, cursor: 'pointer',
      }}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        style={{ maxWidth: '80vw', maxHeight: '75vh', position: 'relative' }}
        onClick={e => e.stopPropagation()}
      >
        <img src={src} alt={alt}
          style={{ maxWidth: '100%', maxHeight: '65vh', borderRadius: 16, objectFit: 'contain', display: 'block' }}
          onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
        <p style={{ fontFamily: '"Dancing Script", cursive', fontSize: 18, color: '#ffd6e8', textAlign: 'center', marginTop: 16 }}>
          {caption}
        </p>
      </motion.div>
      <button onClick={onClose} style={{ position: 'absolute', top: 20, right: 24, background: 'none', border: 'none', color: '#ff85b3', fontSize: 24, cursor: 'pointer' }}>✕</button>
    </motion.div>
  )
}

export default function MemoryGallery() {
  const [lightbox, setLightbox] = useState<typeof PHOTOS[0] | null>(null)

  return (
    <section id="memories" style={{
      padding: '80px 24px',
      background: 'radial-gradient(ellipse at 70% 40%, #100030 0%, #0d0015 70%)',
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
          📸 Humari Yaadein
        </div>
        <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(24px, 5vw, 44px)', color: '#ffd6e8', fontWeight: 700 }}>
          Our Beautiful Memories
        </h2>
        <p style={{ color: 'rgba(255,214,232,0.5)', fontFamily: 'Inter, sans-serif', fontSize: 14, marginTop: 12, maxWidth: 500, margin: '12px auto 0' }}>
          Add your real photos in <code style={{ color: '#b57bee' }}>public/images/</code> to replace the placeholders below.
        </p>
      </motion.div>

      {/* Photo grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 20, maxWidth: 900, margin: '0 auto 60px',
      }}>
        {PHOTOS.map((photo, i) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(255,77,141,0.2)' }}
            style={{ cursor: 'pointer', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,77,141,0.15)' }}
            onClick={() => setLightbox(photo)}
          >
            <div style={{ position: 'relative', aspectRatio: '4/5', background: 'rgba(20,0,40,0.8)' }}>
              <img
                src={photo.src} alt={photo.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
              />
              <PlaceholderCard caption={photo.caption} />
            </div>
            <div style={{ padding: '12px 14px', background: 'rgba(20,0,40,0.9)' }}>
              <p style={{ fontFamily: '"Dancing Script", cursive', fontSize: 14, color: 'rgba(255,214,232,0.75)', lineHeight: 1.4 }}>
                {photo.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* GIFs */}
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 24, color: '#b57bee', marginBottom: 24 }}>
          Sweet Moments 🎀
        </h3>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
          {GIFS.map(gif => (
            <div key={gif.id} style={{ width: 200, textAlign: 'center' }}>
              <div style={{
                width: 200, height: 160, borderRadius: 12, overflow: 'hidden',
                background: 'rgba(20,0,40,0.8)', border: '1px solid rgba(181,123,238,0.2)',
              }}>
                <img src={gif.src} alt={gif.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => {
                    const el = e.target as HTMLImageElement
                    el.style.display = 'none'
                    const p = el.parentElement!
                    p.style.display = 'flex'
                    p.style.alignItems = 'center'
                    p.style.justifyContent = 'center'
                    p.innerHTML = '<span style="font-size:40px">🎀</span>'
                  }}
                />
              </div>
              <p style={{ fontFamily: '"Dancing Script", cursive', fontSize: 14, color: 'rgba(255,214,232,0.6)', marginTop: 8 }}>
                {gif.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Videos */}
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 24, color: '#f5c97a', marginBottom: 24 }}>
          Video Memories 🎬
        </h3>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
          {VIDEOS.map(v => (
            <div key={v.id} style={{ width: 'min(360px, 100%)', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(245,201,122,0.2)' }}>
              <video controls width="100%" poster={v.poster}
                style={{ display: 'block', background: '#0d0015', maxHeight: 240 }}
                onError={e => {
                  const el = e.target as HTMLVideoElement
                  el.style.display = 'none'
                }}
              >
                <source src={v.src} type="video/mp4" />
              </video>
              <div style={{ padding: '12px 14px', background: 'rgba(20,0,40,0.9)' }}>
                <p style={{ fontFamily: '"Dancing Script", cursive', fontSize: 14, color: 'rgba(255,214,232,0.75)' }}>
                  {v.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <Lightbox {...lightbox} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
