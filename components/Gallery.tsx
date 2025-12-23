
import React from 'react';
import { GALLERY_CATEGORIES } from '../constants';

const Gallery: React.FC = () => {
  // Debug: Log categories on mount
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Gallery categories:', GALLERY_CATEGORIES.map(c => ({
        id: c.id,
        title: c.title,
        productsCount: c.products.length
      })));
    }
  }, []);

  if (GALLERY_CATEGORIES.length === 0) {
    return (
      <section id="gallery" className="py-16 sm:py-24 md:py-32 lg:py-48 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-stone-500">Нет данных для отображения</p>
        </div>
      </section>
    );
  }
  
  return (
    <section id="gallery" className="py-16 sm:py-24 md:py-32 lg:py-48 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-24 md:mb-32 lg:mb-40">
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            {GALLERY_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  const element = document.getElementById(`category-${category.id}`);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="text-xl sm:text-2xl md:text-3xl font-light text-stone-900 hover:text-stone-600 transition-colors px-4 sm:px-6 py-2 sm:py-3"
              >
                {category.title}
              </button>
            ))}
          </nav>
        </div>

        <div className="space-y-20 sm:space-y-32 md:space-y-48 lg:space-y-64">
          {GALLERY_CATEGORIES.map((category, categoryIndex) => {
            // Debug logging
            if (process.env.NODE_ENV === 'development') {
              console.log(`Category ${category.id} (${category.title}): ${category.products.length} products`);
            }
            
            // Skip empty categories
            if (category.products.length === 0) {
              return null;
            }
            
            return (
            <div 
              key={category.id} 
              id={`category-${category.id}`} 
              data-category-id={category.id}
              className={categoryIndex === 0 
                ? 'scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32' 
                : 'animate-on-scroll scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32'}
            >
              <div className="flex items-center justify-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 relative">
                <div className="absolute left-0 right-0 h-px bg-stone-100 -z-10" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-stone-800 tracking-tight bg-white px-4 sm:px-6 md:px-8 lg:px-12">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-12 md:gap-x-16 gap-y-12 sm:gap-y-16 md:gap-y-20 lg:gap-y-28">
                {category.products.map((product, productIndex) => {
                  // Первые 6 изображений (первые 2 категории по 3 изображения) загружаем сразу
                  const globalIndex = categoryIndex * category.products.length + productIndex;
                  const shouldLoadEager = globalIndex < 6;
                  
                  return (
                  <div key={product.id} className="group">
                    <div className="relative overflow-hidden aspect-[4/5] mb-6 sm:mb-8 md:mb-10 shadow-sm group-hover:shadow-2xl transition-all duration-700 rounded-3xl">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                        loading={shouldLoadEager ? "eager" : "lazy"}
                        onError={(e) => {
                          // Only log if image actually failed (not just loading)
                          if (e.currentTarget.complete && e.currentTarget.naturalWidth === 0) {
                            console.error('Image failed to load:', product.image);
                            e.currentTarget.style.opacity = '0.5';
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-stone-900/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-center">
                      <h4 className="text-xl sm:text-2xl font-medium text-stone-900 mb-3 sm:mb-4 tracking-tight">{product.name}</h4>
                      <p className="text-stone-500 text-sm sm:text-base font-light leading-relaxed mb-6 sm:mb-8 px-2 sm:px-4 md:px-6">
                        {product.description}
                      </p>
                      <div className="h-px w-10 bg-stone-200 mx-auto group-hover:w-32 transition-all duration-700" />
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
