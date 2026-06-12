import { X } from 'lucide-react'

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden select-none font-sans">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="/dds3_1_rqhg7x.mp4"
          type="video/mp4"
        />
      </video>

      {/* Cinematic Vignette & Overlay */}
      <div className="absolute inset-0 z-10 cinematic-overlay" />
      <div className="absolute inset-0 z-10 cinematic-vignette" />

      {/* Floating Header */}
      <header className="absolute top-0 left-0 w-full px-6 sm:px-10 h-24 flex items-center justify-between z-30">
        {/* Left Spacer to keep the nav centered */}
        <div className="w-10 h-10 hidden md:block" />

        {/* Navigation Floating Pills */}
        <nav className="flex items-center gap-1.5 overflow-x-auto max-w-full no-scrollbar px-2">
          {/* Logo Badge (Asterisk) */}
          <a
            href="#"
            className="flex-shrink-0 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center font-bold text-[20px] leading-none hover:scale-105 transition-transform duration-300"
          >
            *
          </a>

          {/* Nav Links */}
          {['PRODUCTS', 'RESEARCH', 'DOCS', 'PRICING', 'CONTACT'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="flex-shrink-0 px-4 sm:px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[9px] sm:text-[10px] tracking-[0.18em] font-semibold text-white/80 hover:text-white hover:border-white/20 transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Close Button */}
        <button
          className="flex-shrink-0 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-white/20 transition-all duration-300 cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </header>

      {/* Central Hero Section */}
      <main className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-6">
        <div className="max-w-4xl flex flex-col items-center">
          {/* Tagline Pill */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-black/20 text-[9px] tracking-[0.2em] font-semibold text-white/60 mb-8 uppercase animate-fade-in-up">
            AI-FIRST ASSISTANT
          </div>

          {/* Main Headline */}
          <h1 className="font-serif font-normal text-[46px] sm:text-[72px] md:text-[84px] leading-[1.05] tracking-tight text-white mb-8 select-none">
            <span className="block opacity-0 animate-reveal-text" style={{ animationDelay: '0.1s' }}>
              Superintelligence
            </span>
            <span className="block opacity-0 animate-reveal-text" style={{ animationDelay: '0.4s' }}>
              on-device
            </span>
          </h1>

          {/* CTA Button */}
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <a
              href="#launch"
              className="inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[9px] sm:text-[10px] tracking-[0.22em] font-bold text-white/90 hover:bg-white hover:text-black hover:border-white transition-all duration-500 hover:scale-105 shadow-xl"
            >
              LAUNCH APP <span className="ml-2.5 font-light text-[12px] leading-none">→</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
