# East Rukum

This isn't just a website code. It's an attempt to show the world a place that is very close to my heart East Rukum.

When you look at the photos or read about the villages like Tak, I want you to feel like you are actually there. I didn't want to use big fancy words to describe it. I just wanted to show the stone roofs, the green hills in the monsoon, and the quiet life of the Kham Magar people.

## Why I made this

I built this because I think places like this are disappearing or getting forgotten. The way people live here eating dhindo, working in the fields, helping neighbors is special. I wanted to capture that feeling on a screen.

It's built using React because I wanted it to feel smooth when you move from the mountains to the villages.

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Animations**: Framer Motion, GSAP
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, Grid), PostCSS / Tailwind (Optional Utility Config)
- **State Management**: React Context API

## Why React?

React is uniquely suited for building dynamic and interactive single-page applications. For the East Rukum website, React provides several critical advantages.

## File Structure

```text
src/
├── components/          # Global reusable UI components
│   ├── ui/              # Dumb, presentation-only components (Hero, VisitCard, ImageModal)
│   ├── BackToTop.jsx
│   ├── Footer.jsx
│   ├── Gallery.jsx
│   ├── MusicPlayer.jsx
│   ├── Navbar.jsx
│   ├── ScrollToTop.jsx
│   └── Slider.jsx
├── context/             # React Context for global state (e.g., Language switch)
│   └── LanguageContext.jsx
├── hooks/               # Custom React hooks encapsulating logic
│   ├── useFetchData.js
│   └── useMusicPlayer.js
├── pages/               # Main application views/routes
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Culture.jsx
│   ├── GalleryPage.jsx
│   ├── Home.jsx
│   ├── TakVillage.jsx
│   ├── Villages.jsx
│   └── Visit.jsx
├── services/            # API and data fetching mechanisms
│   └── apiService.js
├── App.jsx              # Main routing and layout wrapper
├── index.css            # Global CSS variables and styling
└── main.jsx             # React app execution entry point
```

## How to look at it

If you want to run this on your computer:

1.  Download this folder.
2.  Open your terminal and type `npm install` to get the tools ready.
3.  Then type `npm run dev` to start it up.

## A personal note

If you ever get the chance, don't just look at the website. Go there. Listen to the wind in Chaurikharka. It's a feeling you can't really code, but I tried my best.
