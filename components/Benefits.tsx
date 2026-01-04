
import React from 'react';
import { 
  Timer, 
  Sparkles, 
  Brain, 
  FileText, 
  ShieldCheck, 
  Users, 
  Heart,
  Zap
} from 'lucide-react';

const benefits = [
  {
    icon: <Timer className="text-orange-500" />,
    title: 'Quick hot flash logging with one-tap timer',
    description: 'Track duration and intensity effortlessly. Use our cooling countdowns to help stay calm during the heat.'
  },
  {
    icon: <Brain className="text-purple-500" />,
    title: '50+ real symptoms (including the "weird" ones)',
    description: 'From night sweats and brain fog to itching, joint pain, and teeth grinding. Nothing is too strange to track.'
  },
  {
    icon: <Sparkles className="text-indigo-500" />,
    title: 'AI-powered pattern insights',
    description: 'Spot triggers you never noticed. See how caffeine, stress, or weather impacts your unique symptoms.'
  },
  {
    icon: <FileText className="text-emerald-500" />,
    title: 'Professional doctor reports',
    description: 'Export structured data and summaries to share at appointments. Get the medical support you deserve.'
  },
  {
    icon: <Zap className="text-blue-500" />,
    title: 'Evidence-based relief tips',
    description: 'Find comfort with advice vetted by menopause specialists. Practical, actionable steps for daily relief.'
  },
  {
    icon: <Users className="text-rose-500" />,
    title: 'Private community support',
    description: 'Connect with others who understand. Share experiences, find comfort, and end the isolation.'
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Designed Exclusively for Your Menopause Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8 font-medium">
            No cycle predictions. No fertility focus. Just clarity and calm.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-indigo-200">
              Privacy First
            </span>
            <span className="bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-purple-200">
              No Ad Tracking
            </span>
            <span className="bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-emerald-200">
              GDPR Compliant
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-10 bg-indigo-900 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 p-8 opacity-10">
              <Heart size={160} />
           </div>
           <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Ready to take back control?</h3>
           <p className="text-indigo-100 mb-8 max-w-xl mx-auto relative z-10">Join 12,000+ women on the waitlist and get our exclusive 'Menopause Symptom Relief Guide' free upon registration.</p>
           <a href="#waitlist" className="inline-block bg-white text-indigo-900 font-bold px-10 py-4 rounded-2xl hover:bg-indigo-50 transition-colors shadow-lg relative z-10">
             Claim Your Early Access
           </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
