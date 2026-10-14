import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import StarField from './components/StarField'
import FloatingHearts from './components/FloatingHearts'
import MusicPlayer from './components/MusicPlayer'

import IntroScene from './components/IntroScene'
import HeroSection from './components/HeroSection'
import LoveLetter from './components/LoveLetter'
import ShayariGallery from './components/ShayariGallery'

import ReasonsILoveYou from './components/ReasonsILoveYou'
import VirtualHug from './components/VirtualHug'
import SurpriseGift from './components/SurpriseGift'
import GrandFinale from './components/GrandFinale'

export default function App() {
  const [introDone, setIntroDone] = useState(false)
  const [musicPlaying, setMusicPlaying] = useState(false)

  const handleEnter = () => {
    setIntroDone(true)
    setMusicPlaying(true)
  }

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Always-on ambient layers */}
      <StarField />
      {introDone && <FloatingHearts />}

      {/* Intro scene */}
      <AnimatePresence>
        {!introDone && (
          <IntroScene onEnter={handleEnter} />
        )}
      </AnimatePresence>

      {/* Main content */}
      {introDone && (
        <>
          <MusicPlayer isPlaying={musicPlaying} toggle={() => setMusicPlaying(p => !p)} />

          <main>
            <HeroSection onScrollDown={() => scrollTo('letter')} />
            <LoveLetter />
            <ShayariGallery />

            <ReasonsILoveYou />
            <VirtualHug />
            <SurpriseGift />
            <GrandFinale onGoToLetter={() => scrollTo('letter')} />
          </main>

          {/* Footer */}
          <footer style={{
            textAlign: 'center', padding: '40px 24px',
            background: 'rgba(13,0,21,0.95)',
            borderTop: '1px solid rgba(255,77,141,0.1)',
          }}>
            <p style={{ fontFamily: '"Dancing Script", cursive', fontSize: 20, color: 'rgba(255,214,232,0.5)' }}>
              Made with ❤️ by Hojefa, for his Mishtu. Always.
            </p>
          </footer>
        </>
      )}
    </div>
  )
}
