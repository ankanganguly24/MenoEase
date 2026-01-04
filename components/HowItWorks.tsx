
import React from 'react';
import PhoneMockup from './PhoneMockup';

const steps = [
  {
    title: 'Log symptoms effortlessly',
    description: 'Quickly track hot flashes, moods, and physical changes with a UI designed for speed and simplicity.',
    mockup: 'quick-log',
    color: 'indigo'
  },
  {
    title: 'Uncover personal patterns',
    description: 'Our AI analyzes your entries to find correlations with diet, activity, and external triggers.',
    mockup: 'insights',
    color: 'purple'
  },
  {
    title: 'Feel more in control',
    description: 'Use specialized reports to have productive conversations with your doctor and get the treatment you need.',
    mockup: 'dashboard',
    color: 'emerald'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">How MenoEase Works</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Three simple steps to transition from confusion to clarity.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-16 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-indigo-100 -z-10 translate-y-[-200px]"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="mb-12 relative">
                <div className={`absolute -inset-4 bg-indigo-50 rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                <div className="transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
                  <PhoneMockup type={step.mockup as any} />
                </div>
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full shadow-lg border-2 border-indigo-600 flex items-center justify-center font-bold text-indigo-900 text-xl z-30">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
