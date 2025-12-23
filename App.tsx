
import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import GalleryPage from './pages/GalleryPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'gallery'>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navigateToGallery = () => {
    setCurrentPage('gallery');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
  };

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
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
      el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
      observer.observe(el);
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

  if (currentPage === 'gallery') {
    return <GalleryPage onNavigateHome={navigateToHome} />;
  }

  return (
    <div className="min-h-screen">
      <main>
        <Hero onScrollTo={scrollToSection} onNavigateToGallery={navigateToGallery} />
        
        <div className="animate-on-scroll">
          <AboutMe />
        </div>
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

export default App;
