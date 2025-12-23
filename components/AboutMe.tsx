
import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-40 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-24">
          {/* Clean Image Container - No decorations */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="relative overflow-hidden shadow-2xl rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800"
                alt="אורלי סיטבון"
                className="w-full h-auto object-cover grayscale-[0.05]"
              />
            </div>
          </div>

          <div className="flex-1 text-right">
            <span className="text-stone-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-8 block">הסיפור שלי</span>
            <h2 className="text-4xl md:text-6xl font-light text-stone-900 mb-12 leading-tight">
              התשוקה שלי <br /> <span className="text-stone-500 italic font-serif">לאפייה וליופי</span>
            </h2>
            <div className="space-y-10 text-xl text-stone-600 leading-relaxed font-light">
              <p>
                נעים מאוד, אני אורלי. המפגש הראשון שלי עם הקמח והסוכר היה במטבח הביתי, ומאז ועד היום, האהבה הזאת רק הלכה והעמיקה.
              </p>
              <p>
                לאחר שנים של השתלמויות בבתי ספר מובילים, פיתחתי סגנון ייחודי המשלב אסתטיקה נקייה עם טעמים עשירים ומרקמים מדויקים.
              </p>
              <p>
                אני מאמינה שקינוח טוב הוא כזה שמעורר את כל החושים. הריח, המראה, המרקם וכמובן - הטעם הבלתי נשכח. כל יצירה שיוצאת מהתנור שלי מקבלת טיפול אישי ומסור.
              </p>
            </div>
            
            <div className="mt-20 flex flex-wrap gap-16 border-t border-stone-200 pt-12">
              <div className="flex flex-col">
                <span className="text-4xl font-light text-stone-900">12+</span>
                <span className="text-stone-400 text-xs font-bold uppercase tracking-widest mt-2">שנות יצירה</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-light text-stone-900">2,000+</span>
                <span className="text-stone-400 text-xs font-bold uppercase tracking-widest mt-2">רגעים מתוקים</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-light text-stone-900">100%</span>
                <span className="text-stone-400 text-xs font-bold uppercase tracking-widest mt-2">חומרי גלם טבעיים</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
