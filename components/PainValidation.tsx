
import React from 'react';
import { Quote } from 'lucide-react';

const PainValidation: React.FC = () => {
  return (
    <section className="py-28 px-6 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#2D2926] mb-8 leading-tight">
            If You’re Feeling Blindsided by Menopause, <span className="italic text-[#E29578]">You’re Not Alone.</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#F4ECE4] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-xl text-[#5F5955] leading-relaxed font-light">
            <p>
              Existing health apps keep asking about periods that never come. They track fertility you're not looking for and use bright pink interfaces designed for twenty-somethings.
            </p>
            <p className="font-serif italic text-2xl text-[#2D2926] font-medium border-l-4 border-[#83C5BE] pl-8 py-2">
              It feels like the tech world has forgotten about 50% of the population.
            </p>
            <p>
              Doctors often dismiss symptoms as "just aging." Friends might not understand the sudden anxiety or sleepless nights. You just want something that <span className="text-[#006D77] font-bold italic">gets it</span>.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -top-12 -left-8 text-[#F4ECE4] -z-10">
              <Quote size={160} fill="currentColor" stroke="none" />
            </div>
            <div className="bg-[#FCF9F7] p-10 rounded-[3rem] border border-[#F4ECE4] shadow-sm italic relative">
              <p className="text-2xl text-[#2D2926] leading-relaxed mb-8 font-serif">
                "I wish there was a proper menopause app. Every time I open my current tracker, it tells me I'm 'late' for a period that stopped 18 months ago. It's frustrating and discouraging."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#83C5BE] rounded-full flex items-center justify-center text-white font-bold">R</div>
                <div>
                  <p className="font-bold text-[#2D2926] text-base">Reddit User • r/Menopause</p>
                  <p className="text-[#A6998E] text-[10px] font-bold uppercase tracking-[0.2em]">Verified Sentiment</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-[#83C5BE]/10 p-6 rounded-2xl border border-[#83C5BE]/20 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/face${i+10}/100/100`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="user" />
                ))}
              </div>
              <p className="text-sm font-bold text-[#006D77]">
                Thousands of women are waiting for MenoEase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainValidation;
