
import React from 'react';
import { WaitlistForm } from '../App';
import PhoneMockup from './PhoneMockup';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-36 pb-24 px-6 overflow-hidden">
      {/* Sophisticated Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E29578] rounded-full blob -z-10 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#83C5BE] rounded-full blob -z-10 -ml-24 -mb-24"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-[#F4ECE4] text-[#8D7B6D] px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-[#E8D9CE]">
            <span className="flex h-2 w-2 rounded-full bg-[#E29578] animate-pulse"></span>
            Launching early 2026 • Join the Waitlist
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#2D2926] leading-[1.05]">
            Finally… An App That <span className="italic text-[#006D77]">Truly</span> Gets Menopause
          </h1>
          
          <p className="text-xl md:text-2xl text-[#5F5955] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
            Track symptoms, uncover patterns, and find calm in perimenopause & menopause – designed for the woman you are today.
          </p>
          
          <div className="bg-white/60 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/80 shadow-2xl shadow-[#83C5BE]/5">
            <p className="text-[#2D2926] font-serif italic text-2xl mb-8 leading-relaxed">
              "You're not alone. The hot flashes and sleepless nights don't have to feel so overwhelming. MenoEase is built just for you."
            </p>
            <WaitlistForm />
          </div>
          
          <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
             <div className="text-center">
                <p className="text-2xl font-serif font-bold text-[#2D2926]">12k+</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Waitlisted</p>
             </div>
             <div className="w-px h-10 bg-slate-200"></div>
             <div className="text-center">
                <p className="text-2xl font-serif font-bold text-[#2D2926]">50+</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Symptoms</p>
             </div>
             <div className="w-px h-10 bg-slate-200"></div>
             <div className="text-center">
                <p className="text-2xl font-serif font-bold text-[#2D2926]">100%</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Private</p>
             </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center lg:justify-end">
          <div className="relative w-full max-w-md">
            {/* Center Phone Mockup */}
            <div className="z-20 relative transform transition-all duration-1000">
              <PhoneMockup 
                type="dashboard" 
                label="Your Dashboard"
              />
            </div>
            
            {/* Side Phone Mockups - Styled to feel light and airy */}
            <div className="absolute top-10 -left-20 z-10 hidden md:block opacity-40 transform -rotate-12 transition-all duration-700 hover:rotate-0 hover:opacity-100 scale-90 origin-bottom">
              <PhoneMockup type="quick-log" label="Quick Log" />
            </div>
            
            <div className="absolute top-10 -right-20 z-10 hidden md:block opacity-40 transform rotate-12 transition-all duration-700 hover:rotate-0 hover:opacity-100 scale-90 origin-bottom">
              <PhoneMockup type="insights" label="Personal Insights" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
