
import React, { useState } from 'react';
import { Menu, X, ChevronLeft } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface HeroProps {
  onScrollTo: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollTo, onNavigateToGallery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMenuClick = (id: string) => {
    if (id === 'gallery' && onNavigateToGallery) {
      onNavigateToGallery();
      setIsMenuOpen(false);
    } else {
      onScrollTo(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <section id="hero" className="relative h-[95vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=1920"
          alt="רקע קונדיטוריה"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      {/* Top Navigation Bar - Burger and Logo */}
      <div className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 sm:pt-6 md:pt-8">
        <nav className="max-w-7xl mx-auto flex items-center justify-between relative h-16 sm:h-20 md:h-24">
          {/* Right Side: Burger Menu */}
          <div className="flex justify-end z-20">
            <button
              onClick={toggleMenu}
              className="p-2 text-stone-900 hover:bg-stone-900/10 rounded-full transition-all group flex items-center gap-2 sm:gap-3 backdrop-blur-sm bg-white/80"
              aria-label="ניווט"
            >
              {isMenuOpen ? <X size={22} strokeWidth={1.5} className="sm:w-6 sm:h-6" /> : <Menu size={22} strokeWidth={1.5} className="sm:w-6 sm:h-6" />}
              <span className="hidden md:block text-sm font-medium tracking-widest text-stone-900 group-hover:text-stone-700 transition-colors uppercase">ניווט</span>
            </button>
          </div>

          {/* Center: Logo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none pt-20 sm:pt-10 md:pt-12 z-40">
              <img 
                src={`${import.meta.env.BASE_URL || '/'}assets/logo.png`}
                alt="אורלי סיטבון" 
                className="h-40 sm:h-32 md:h-36 lg:h-40 xl:h-44 w-auto cursor-pointer object-contain pointer-events-auto"
              style={{ 
                filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))',
                opacity: 1,
                visibility: 'visible',
                display: 'block'
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              onError={(e) => {
                console.error('Logo failed to load:', `${import.meta.env.BASE_URL || '/'}assets/logo.png`);
              }}
              onLoad={() => {
                console.log('Logo loaded successfully');
              }}
            />
          </div>

          {/* Left Side: Spacer */}
          <div className="flex-1" aria-hidden="true" />
        </nav>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-stone-900/30 backdrop-blur-sm transition-opacity duration-500 z-[55] ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />
      
      {/* Sidebar Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full md:w-[450px] bg-white shadow-2xl transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) transform z-[60] ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 sm:p-8 md:p-12 lg:p-20 flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between mb-12 sm:mb-16 md:mb-24 flex-row-reverse">
             <button onClick={toggleMenu} className="p-2 hover:bg-stone-50 rounded-full text-stone-400 hover:text-stone-900 transition-colors">
              <X size={24} strokeWidth={1} className="sm:w-8 sm:h-8" />
            </button>
            <span className="text-xs sm:text-sm font-bold text-stone-300 tracking-[0.3em] uppercase">ניווט</span>
          </div>

          {/* Links */}
          <ul className="space-y-8 sm:space-y-10 md:space-y-12">
            <li>
              <button
                onClick={() => handleMenuClick('gallery')}
                className="w-full flex items-center justify-between text-3xl sm:text-4xl font-light text-stone-800 hover:text-stone-500 transition-colors group text-right"
              >
                <span>גלריה</span>
                <ChevronLeft size={24} className="sm:w-8 sm:h-8 transform group-hover:translate-x-4 transition-transform text-stone-200" />
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick('about')}
                className="w-full flex items-center justify-between text-3xl sm:text-4xl font-light text-stone-800 hover:text-stone-500 transition-colors group text-right"
              >
                <span>קצת עליי</span>
                <ChevronLeft size={24} className="sm:w-8 sm:h-8 transform group-hover:translate-x-4 transition-transform text-stone-200" />
              </button>
            </li>
          </ul>

          {/* Sidebar Footer */}
          <div className="mt-auto pt-8 sm:pt-12 md:pt-16 border-t border-stone-100 text-center">
            <p className="text-[10px] sm:text-[11px] text-stone-400 font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">אורלי סיטבון — בוטיק</p>
            <div className="flex justify-center gap-6 sm:gap-8 text-stone-400">
              <a href="#" className="hover:text-stone-900 transition-colors text-xs sm:text-sm font-medium">אינסטגרם</a>
              <a href="#" className="hover:text-stone-900 transition-colors text-xs sm:text-sm font-medium">פייסבוק</a>
            </div>
          </div>
        </div>
      </aside>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20 sm:pt-24 md:pt-0">
        <span className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 mb-6 sm:mb-8 md:mb-10 text-[9px] sm:text-[10px] font-bold tracking-[0.3em] sm:tracking-[0.4em] text-stone-400 uppercase border border-stone-200 rounded-full bg-white/90 shadow-sm">
          CONFECTIONERY ART
        </span>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[100px] mb-4 sm:mb-5 md:mb-6 leading-[1.1] sm:leading-[1] tracking-tight px-2">
          <span className="text-stone-900" style={{ fontFamily: "'Noto Serif Hebrew', serif", fontWeight: 300, letterSpacing: '0.02em' }}>אורלי סיטבון</span> <br /> 
          <span className="text-stone-500/80 italic font-serif text-3xl sm:text-4xl md:text-5xl lg:text-8xl mt-2 sm:mt-3 md:mt-4 block">קינוחי בוטיק בעבודת יד</span>
        </h1>

        <p className="text-stone-500 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 md:mb-16 max-w-xl mx-auto leading-relaxed font-light px-2">
          אצלנו תמצאו מגוון קינוחים עוגות ומאפים והכל בעבודת יד <br className="hidden sm:block" /> תוך יחס קפדני ואישי
        </p>
        
        {/* Action Buttons: flex-row-reverse ensures Order button (Black) is on the right in RTL */}
        <div className="flex flex-col sm:flex-row-reverse gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 md:mb-16 px-2">
          {NAV_LINKS.map((link, index) => {
            const isOrderButton = link.label === 'לרכישה בפטיסרי';
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-full font-medium transition-all transform hover:-translate-y-1 text-sm sm:text-base w-full sm:w-auto sm:min-w-[200px] text-center
                  ${isOrderButton
                    ? 'bg-stone-900 text-white shadow-lg hover:bg-stone-800 order-first sm:order-none'
                    : 'bg-white text-stone-800 border border-stone-100 shadow-md hover:shadow-lg hover:bg-stone-50'}
                `}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>

      {/* Subtle Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20 hidden md:block">
        <div className="w-px h-24 bg-stone-400 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
