
import React, { useState } from 'react';
import { Menu, X, ChevronLeft } from 'lucide-react';

interface HeaderProps {
  onScrollTo: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onScrollTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMenuClick = (id: string) => {
    onScrollTo(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-stone-100">
      <nav className="max-w-7xl mx-auto px-6 h-24 flex items-center relative">
        
        {/* Left Side: Burger Menu Toggle */}
        <div className="flex-1 flex justify-start z-20">
          <button
            onClick={toggleMenu}
            className="p-2 text-stone-700 hover:bg-stone-50 rounded-full transition-all group flex items-center gap-3"
            aria-label="תפריט"
          >
            {isMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
            <span className="hidden md:block text-sm font-medium tracking-widest text-stone-400 group-hover:text-stone-900 transition-colors uppercase">תפריט</span>
          </button>
        </div>

        {/* Center: Logo Image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img 
            src="logo.png" 
            alt="אורלי סיטבון" 
            className="h-14 md:h-20 w-auto cursor-pointer object-contain pointer-events-auto"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            onError={(e) => {
              // Fallback if image is missing during development
              e.currentTarget.style.opacity = '0.5';
            }}
          />
        </div>

        {/* Right Side: Spacer */}
        <div className="flex-1 hidden md:block" aria-hidden="true" />
      </nav>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-stone-900/30 backdrop-blur-sm transition-opacity duration-500 z-[55] ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />
      
      {/* Sidebar Drawer - Now on the RIGHT */}
      <aside
        className={`fixed top-0 right-0 h-full w-full md:w-[450px] bg-white shadow-2xl transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) transform z-[60] ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-12 md:p-20 flex flex-col h-full">
          {/* Sidebar Header: X on the right, Navigation title on the left */}
          <div className="flex items-center justify-between mb-24 flex-row-reverse">
             <button onClick={toggleMenu} className="p-2 hover:bg-stone-50 rounded-full text-stone-400 hover:text-stone-900 transition-colors">
              <X size={32} strokeWidth={1} />
            </button>
            <span className="text-sm font-bold text-stone-300 tracking-[0.3em] uppercase">ניווט</span>
          </div>

          {/* Links aligned to the right */}
          <ul className="space-y-12">
            <li>
              <button
                onClick={() => handleMenuClick('gallery')}
                className="w-full flex items-center justify-between text-4xl font-light text-stone-800 hover:text-stone-500 transition-colors group text-right"
              >
                <span>גלריה</span>
                <ChevronLeft size={32} className="transform group-hover:translate-x-4 transition-transform text-stone-200" />
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick('about')}
                className="w-full flex items-center justify-between text-4xl font-light text-stone-800 hover:text-stone-500 transition-colors group text-right"
              >
                <span>קצת עליי</span>
                <ChevronLeft size={32} className="transform group-hover:translate-x-4 transition-transform text-stone-200" />
              </button>
            </li>
          </ul>

          {/* Sidebar Footer */}
          <div className="mt-auto pt-16 border-t border-stone-100 text-center">
            <p className="text-[11px] text-stone-400 font-bold uppercase tracking-[0.4em] mb-6">אורלי סיטבון — בוטיק</p>
            <div className="flex justify-center gap-8 text-stone-400">
              <a href="#" className="hover:text-stone-900 transition-colors text-sm font-medium">אינסטגרם</a>
              <a href="#" className="hover:text-stone-900 transition-colors text-sm font-medium">פייסבוק</a>
            </div>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Header;
