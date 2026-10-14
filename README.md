# 💕 For My Mishtu — A Magical 3D Romantic Website

A deeply personal, cinematic, 3D romantic website built by **Hojefa** for his girlfriend **Mishtu**. Built with React + Vite + TypeScript + Tailwind CSS + Three.js + Framer Motion.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run locally (development)
npm run dev
```

Then open **http://localhost:5173** in your browser.

---

## 📁 Where to Add Your Personal Media

### 🎵 Music
| File | Path |
|------|------|
| Your romantic song | `public/audio/our-song.mp3` |

### 📸 Photos
| File | Purpose |
|------|---------|
| `public/images/mishtu-01.jpg` | Photo of Mishtu #1 |
| `public/images/mishtu-02.jpg` | Photo of Mishtu #2 |
| `public/images/mishtu-03.jpg` | Photo of Mishtu #3 |
| `public/images/our-memory-01.jpg` | Memory / together photo #1 |
| `public/images/our-memory-02.jpg` | Memory / together photo #2 |
| `public/images/our-memory-03.jpg` | Memory / together photo #3 |

Just drop the files in the right folder with the right names — **no code changes needed!**

### 🎬 Videos
| File | Path |
|------|------|
| Video memory | `public/videos/our-memory-01.mp4` |

### 😍 GIFs
| File | Path |
|------|------|
| Cute love GIF | `public/gifs/cute-love.gif` |
| Hearts GIF | `public/gifs/hearts.gif` |

> If any file is missing, the website shows a beautiful placeholder — nothing breaks. ✅

---

## 🌐 Deploy Online (Share with Mishtu)

### Option 1 — Vercel (Recommended, Free)
```bash
npm install -g vercel
vercel
```
Follow the prompts. You'll get a live URL like `mishtu.vercel.app` 🎉

### Option 2 — Netlify
```bash
npm run build
# Upload the dist/ folder to netlify.com → Drop & Deploy
```

### Option 3 — GitHub Pages
```bash
npm run build
# Push the dist/ folder to a GitHub repo and enable Pages
```

---

## 🛠️ Build for Production
```bash
npm run build
```
Output will be in the `dist/` folder.

---

## 📂 Project Structure
```
src/
  components/
    IntroScene.tsx      — Cinematic opening screen
    HeroSection.tsx     — Main hero with 3D torus heart
    LoveLetter.tsx      — Animated envelope + typewriter letter
    ShayariGallery.tsx  — 3D tilt shayari cards
    MemoryGallery.tsx   — Photo/video/GIF gallery with lightbox
    ReasonsILoveYou.tsx — Click-to-reveal reasons
    VirtualHug.tsx      — Two hearts + light trail animation
    SurpriseGift.tsx    — Animated gift box surprise
    GrandFinale.tsx     — Cinematic I LOVE YOU finale
    Navigation.tsx      — Responsive nav + back-to-top
    MusicPlayer.tsx     — Floating music player
    StarField.tsx       — Canvas starfield background
    FloatingHearts.tsx  — Ambient floating emoji hearts
  hooks/
    useIntro.ts
    useParallax.ts
    useInView.ts
  App.tsx
  index.css
public/
  audio/    ← Put our-song.mp3 here
  images/   ← Put photos here
  gifs/     ← Put GIFs here
  videos/   ← Put videos here
```

---

## 💌 Personalization Tips

- **Add more shayaris**: Edit `SHAYARIS` array in `src/components/ShayariGallery.tsx`
- **Add more reasons**: Edit `REASONS` array in `src/components/ReasonsILoveYou.tsx`
- **Change colors**: Edit CSS variables in `src/index.css` under `:root`
- **Edit the letter**: Modify the `LETTER` constant in `src/components/LoveLetter.tsx`

---

## ❤️ Made with love by Hojefa, for his Mishtu. Always.
