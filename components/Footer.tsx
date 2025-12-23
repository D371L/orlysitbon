
import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-stone-100 py-20 text-stone-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium tracking-tight">אורלי סיטבון</h3>
            <p className="text-stone-500 leading-relaxed font-light text-sm">
              קונדיטוריה עילית המבוססת על דיוק, אסתטיקה וחומרי גלם משובחים ביותר.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-stone-100 rounded-full hover:bg-stone-50 transition-colors text-stone-400 hover:text-stone-900"><Instagram size={18} /></a>
              <a href="#" className="p-2 border border-stone-100 rounded-full hover:bg-stone-50 transition-colors text-stone-400 hover:text-stone-900"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-8">ניווט</h4>
            <ul className="space-y-4">
              <li><button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-stone-500 hover:text-stone-900 transition-colors text-sm font-light">בית</button></li>
              <li><button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} className="text-stone-500 hover:text-stone-900 transition-colors text-sm font-light">גלריה</button></li>
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-stone-500 hover:text-stone-900 transition-colors text-sm font-light">קצת עליי</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-8">יצירת קשר</h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-4 text-stone-500 text-sm font-light">
                <Phone size={14} className="text-stone-300" />
                <span>050-1234567</span>
              </li>
              <li className="flex items-center gap-4 text-stone-500 text-sm font-light">
                <Mail size={14} className="text-stone-300" />
                <span>office@orlysitbon.co.il</span>
              </li>
              <li className="flex items-center gap-4 text-stone-500 text-sm font-light">
                <MapPin size={14} className="text-stone-300" />
                <span>סטודיו לעיצוב, תל אביב</span>
              </li>
            </ul>
          </div>

          {/* Subscription */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-8">עדכונים</h4>
            <p className="text-xs text-stone-500 mb-6 font-light">הישארו מעודכנים בקולקציות החדשות שלנו.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="האימייל שלך" 
                className="bg-stone-50 border border-stone-100 rounded-none px-4 py-3 w-full text-xs focus:ring-1 focus:ring-stone-200 focus:outline-none transition-all"
              />
              <button className="bg-stone-900 hover:bg-stone-800 text-white px-6 py-3 font-medium text-xs transition-colors">שלח</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-stone-50 text-center text-stone-400 text-[10px] font-bold tracking-widest uppercase">
          <p>© {new Date().getFullYear()} ORLY SITBON BOUTIQUE. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
