import React, { useState, useEffect, useRef } from 'react'

interface Props { isPlaying: boolean; toggle: () => void }

export default function MusicPlayer({ isPlaying, toggle }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [volume, setVolume] = useState(0.6)
  const [hasFile, setHasFile] = useState(true)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = volume
    audio.loop = true
    if (isPlaying) {
      audio.play().catch(() => setHasFile(false))
    } else {
      audio.pause()
    }
  }, [isPlaying, volume])

  return (
    <div
      style={{
        position: 'fixed', bottom: '24px', right: '24px', zIndex: 100,
        display: 'flex', alignItems: 'center', gap: '10px',
        background: 'rgba(13,0,21,0.8)', border: '1px solid rgba(255,77,141,0.3)',
        backdropFilter: 'blur(16px)', borderRadius: '40px',
        padding: '10px 16px', transition: 'all 0.3s ease',
      }}
    >
      <audio ref={audioRef} src="/audio/our-song.mp3" preload="none" />

      <button
        onClick={toggle}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontSize: '20px', lineHeight: 1, padding: 0,
          transition: 'transform 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.2)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {isPlaying ? '🎵' : '🎶'}
      </button>

      {isPlaying && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '11px', color: '#ff85b3', fontFamily: 'Inter, sans-serif' }}>
            {hasFile ? 'Our Song ♫' : 'Add music ♫'}
          </span>
          <input
            type="range" min={0} max={1} step={0.05} value={volume}
            onChange={e => setVolume(Number(e.target.value))}
            style={{ width: '60px', accentColor: '#ff4d8d' }}
            aria-label="Volume"
          />
        </div>
      )}
    </div>
  )
}
