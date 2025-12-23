
import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-stone-100 py-12 sm:py-16 md:py-20 text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-20">
          {/* Social Links */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="p-2 border border-stone-100 rounded-full hover:bg-stone-50 transition-colors text-stone-400 hover:text-stone-900"><Instagram size={16} className="sm:w-[18px] sm:h-[18px]" /></a>
              <a href="#" className="p-2 border border-stone-100 rounded-full hover:bg-stone-50 transition-colors text-stone-400 hover:text-stone-900"><Facebook size={16} className="sm:w-[18px] sm:h-[18px]" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-stone-900 mb-4 sm:mb-6 md:mb-8">ניווט</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-stone-900 hover:text-stone-700 transition-colors text-sm sm:text-base font-light">בית</button></li>
              <li><button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} className="text-stone-900 hover:text-stone-700 transition-colors text-sm sm:text-base font-light">גלריה</button></li>
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-stone-900 hover:text-stone-700 transition-colors text-sm sm:text-base font-light">קצת עליי</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-stone-900 mb-4 sm:mb-6 md:mb-8">יצירת קשר</h4>
            <ul className="space-y-3 sm:space-y-4 md:space-y-5">
              <li className="flex items-center gap-3 sm:gap-4 text-stone-900 text-sm sm:text-base font-light">
                <Phone size={16} className="sm:w-[18px] sm:h-[18px] text-stone-600 flex-shrink-0" />
                <span className="break-all">054-249-0337</span>
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-stone-900 text-sm sm:text-base font-light">
                <Mail size={16} className="sm:w-[18px] sm:h-[18px] text-stone-600 flex-shrink-0" />
                <span className="break-all">orlysytbon@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-stone-900 text-sm sm:text-base font-light">
                <MapPin size={16} className="sm:w-[18px] sm:h-[18px] text-stone-600 flex-shrink-0" />
                <span>יצחק שדה 7 נהריה</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-6 sm:pt-8 md:pt-10 border-t border-stone-50 text-center text-stone-900 text-xs sm:text-sm font-light">
          <p>
            Forged with 💜 by{' '}
            <a 
              href="https://pumalabs.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              Puma Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
