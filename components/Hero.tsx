
import React from 'react';
import { NAV_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-[95vh] md:h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background with softer white overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=1920"
          alt="רקע קונדיטוריה"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <span className="inline-block px-6 py-2 mb-10 text-[10px] font-bold tracking-[0.4em] text-stone-400 uppercase border border-stone-200 rounded-full bg-white/90 shadow-sm">
          CONFECTIONERY ART
        </span>
        
        <h1 className="text-6xl md:text-[100px] font-light text-stone-900 mb-6 leading-[1] tracking-tight">
          אורלי סיטבון <br /> 
          <span className="text-stone-500/80 italic font-serif text-5xl md:text-8xl mt-4 block">קונדיטוריה עילית</span>
        </h1>

        <p className="text-stone-500 text-lg md:text-xl mb-16 max-w-xl mx-auto leading-relaxed font-light">
          דיוק, חומרי גלם משובחים ואהבה לפרטים הקטנים. <br /> כל יצירה היא חוויה בלתי נשכחת.
        </p>
        
        {/* Action Buttons: flex-row-reverse ensures index 0 (Black) is on the left in RTL */}
        <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-4 justify-center items-center mb-16">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                px-10 py-5 rounded-full font-medium transition-all transform hover:-translate-y-1 text-base min-w-[200px] text-center
                ${index === 0 
                  ? 'bg-stone-900 text-white shadow-lg hover:bg-stone-800' 
                  : 'bg-white text-stone-800 border border-stone-100 shadow-md hover:shadow-lg hover:bg-stone-50'}
              `}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom Navigation Shortcuts */}
        <div className="flex justify-center gap-12 pt-8">
           <button 
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-stone-400 hover:text-stone-900 transition-colors text-xs font-bold uppercase tracking-[0.2em] border-b border-transparent hover:border-stone-900 pb-1"
          >
            גלריה
          </button>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-stone-400 hover:text-stone-900 transition-colors text-xs font-bold uppercase tracking-[0.2em] border-b border-transparent hover:border-stone-900 pb-1"
          >
            קצת עליי
          </button>
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
