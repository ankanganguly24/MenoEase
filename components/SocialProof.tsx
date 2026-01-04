
import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock, CheckCircle2, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "I've tried 4 different period apps and they all feel like they're for teenagers. I just want something that understands night sweats.",
    author: "Reddit User",
    context: "r/Menopause Thread"
  },
  {
    quote: "If this app can help me show my GP exactly how often my mood swings occur, it will be worth its weight in gold.",
    author: "Waitlist Member",
    context: "Early Feedback"
  },
  {
    quote: "Finally, a health app that doesn't assume I want to get pregnant. The focus on relief is exactly what's missing.",
    author: "Reddit User",
    context: "r/Perimenopause"
  }
];

const SocialProof: React.FC = () => {
  const [count, setCount] = useState(12347);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3));
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 bg-indigo-50/50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-full font-bold text-xl mb-6 shadow-xl shadow-indigo-200 animate-bounce">
            {count.toLocaleString()} Women on the Waitlist
          </div>
          <h2 className="text-4xl font-bold text-indigo-950 mb-4">Join Thousands Already Waiting for Real Support</h2>
          <p className="text-indigo-700/80 font-medium">Building the first truly empathetic menopause companion.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-indigo-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <Quote className="text-indigo-200 mb-4" size={32} />
                <p className="text-indigo-900 italic text-lg leading-relaxed mb-6">"{t.quote}"</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  <span className="font-bold text-xs">M</span>
                </div>
                <div>
                  <p className="font-bold text-indigo-950 text-sm">{t.author}</p>
                  <p className="text-slate-400 text-xs uppercase font-bold">{t.context}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
          <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all">
            <ShieldCheck className="text-indigo-600" />
            <span className="font-bold text-slate-600 tracking-wider">GDPR COMPLIANT</span>
          </div>
          <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all">
            <Lock className="text-indigo-600" />
            <span className="font-bold text-slate-600 tracking-wider">PRIVACY FIRST</span>
          </div>
          <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all">
            <CheckCircle2 className="text-indigo-600" />
            <span className="font-bold text-slate-600 tracking-wider">BUILT WITH INPUT FROM REAL WOMEN</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
