
import React from 'react';
import { GALLERY_CATEGORIES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-48 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-40">
          <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-6 tracking-tight">קולקציות</h2>
          <div className="w-16 h-px bg-stone-300 mx-auto mb-10" />
          <p className="text-stone-500 max-w-lg mx-auto font-light leading-relaxed text-xl">
            מבחר יצירות שנבחרו בקפידה, המשלבות טעמים קלאסיים עם נגיעה מודרנית.
          </p>
        </div>

        <div className="space-y-64">
          {GALLERY_CATEGORIES.map((category) => (
            <div key={category.id} className="animate-on-scroll">
              <div className="flex items-center justify-center mb-24 relative">
                <div className="absolute left-0 right-0 h-px bg-stone-100 -z-10" />
                <h3 className="text-4xl font-light text-stone-800 tracking-tight bg-white px-12">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-28">
                {category.products.map((product) => (
                  <div key={product.id} className="group">
                    <div className="relative overflow-hidden aspect-[4/5] mb-10 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-stone-900/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-center">
                      <h4 className="text-2xl font-medium text-stone-900 mb-4 tracking-tight">{product.name}</h4>
                      <p className="text-stone-500 text-base font-light leading-relaxed mb-8 px-6">
                        {product.description}
                      </p>
                      <div className="h-px w-10 bg-stone-200 mx-auto group-hover:w-32 transition-all duration-700" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
