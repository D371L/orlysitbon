import React, { useEffect, useState } from 'react';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import { Menu, X, ArrowUp } from 'lucide-react';

interface GalleryPageProps {
  onNavigateHome: () => void;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigateHome }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Simple intersection observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
      // Проверяем, находится ли элемент уже в viewport
      const rect = el.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInViewport) {
        // Если элемент уже в viewport, сразу делаем его видимым
        el.classList.add('opacity-100', 'translate-y-0');
        el.classList.remove('opacity-0', 'translate-y-10');
      } else {
        // Иначе добавляем скрытие и наблюдаем
        el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Показывать кнопку когда прокрутили больше 300px от верха
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <div className="relative px-4 sm:px-6 pt-4 sm:pt-6 md:pt-8 bg-white">
        <nav className="max-w-7xl mx-auto flex items-center justify-between relative h-16 sm:h-20 md:h-24">
          {/* Right Side: Burger Menu */}
          <div className="flex justify-end z-20">
            <button
              onClick={toggleMenu}
              className="p-2 text-stone-900 hover:bg-stone-900/10 rounded-full transition-all group flex items-center gap-2 sm:gap-3"
              aria-label="ניווט"
            >
              {isMenuOpen ? <X size={22} strokeWidth={1.5} className="sm:w-6 sm:h-6" /> : <Menu size={22} strokeWidth={1.5} className="sm:w-6 sm:h-6" />}
              <span className="hidden md:block text-sm font-medium tracking-widest text-stone-900 group-hover:text-stone-700 transition-colors uppercase">ניווט</span>
            </button>
          </div>

          {/* Center: Logo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none pt-20 sm:pt-10 md:pt-12 z-40">
            <button
              onClick={onNavigateHome}
              className="pointer-events-auto cursor-pointer"
            >
              <img 
                src="/assets/logo.png"
                alt="אורלי סיטבון" 
                className="h-40 sm:h-32 md:h-36 lg:h-40 xl:h-44 w-auto object-contain"
                style={{ 
                  filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))',
                  opacity: 1,
                  visibility: 'visible',
                  display: 'block'
                }}
              />
            </button>
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
                onClick={() => {
                  onNavigateHome();
                  toggleMenu();
                }}
                className="w-full flex items-center justify-between text-3xl sm:text-4xl font-light text-stone-800 hover:text-stone-500 transition-colors group text-right"
              >
                <span>בית</span>
                <span className="text-stone-200 group-hover:text-stone-400">←</span>
              </button>
            </li>
            <li>
              <button
                onClick={toggleMenu}
                className="w-full flex items-center justify-between text-3xl sm:text-4xl font-light text-stone-800 hover:text-stone-500 transition-colors group text-right"
              >
                <span>גלריה</span>
                <span className="text-stone-200 group-hover:text-stone-400">←</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onNavigateHome();
                  toggleMenu();
                  setTimeout(() => {
                    const element = document.getElementById('about');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 100);
                }}
                className="w-full flex items-center justify-between text-3xl sm:text-4xl font-light text-stone-800 hover:text-stone-500 transition-colors group text-right"
              >
                <span>קצת עליי</span>
                <span className="text-stone-200 group-hover:text-stone-400">←</span>
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

      {/* Main Content */}
      <main className="pt-24 sm:pt-20 md:pt-16">
        <Gallery />
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-stone-900 text-white rounded-full shadow-lg hover:bg-stone-800 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="חזרה למעלה"
      >
        <ArrowUp size={24} strokeWidth={2} />
      </button>
    </div>
  );
};

export default GalleryPage;

