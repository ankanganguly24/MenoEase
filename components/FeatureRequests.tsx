
import React, { useState } from 'react';
import { ThumbsUp, Send, MessageSquare, Sparkles } from 'lucide-react';

const initialFeatures = [
  { id: 1, title: 'AI-Powered Nutritional Guide', votes: 124, description: 'Personalized meal plans to manage weight gain and inflammation.' },
  { id: 2, title: 'Direct Export for Specialist', votes: 89, description: 'One-click professional PDF report for your menopause specialist.' },
  { id: 3, title: 'Partner "Support" Mode', votes: 56, description: 'A shared link for partners to learn how to support you during cycles.' },
  { id: 4, title: 'Cooling Timer Presets', votes: 42, description: 'Quick-start timers with breathing exercises for varied flash intensities.' }
];

const FeatureRequests: React.FC = () => {
  const [features, setFeatures] = useState(initialFeatures);
  const [suggestion, setSuggestion] = useState('');
  const [voted, setVoted] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleVote = (id: number) => {
    if (voted.includes(id)) return;
    setFeatures(features.map(f => f.id === id ? { ...f, votes: f.votes + 1 } : f));
    setVoted([...voted, id]);
  };

  const handleSuggest = (e: React.FormEvent) => {
    e.preventDefault();
    if (suggestion.trim()) {
      setSubmitted(true);
      setSuggestion('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="feature-requests" className="py-24 px-6 bg-white relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#83C5BE]/10 text-[#006D77] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} /> Community Wishlist
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2D2926] mb-6 leading-tight">
            Help Us Shape the Future
          </h2>
          <p className="text-lg text-[#5F5955] max-w-2xl mx-auto font-light leading-relaxed">
            MenoEase is built for you. Vote on the features you need most or suggest something new. We listen to every request.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Voting Column */}
          <div className="lg:col-span-2 space-y-4">
            {features.sort((a, b) => b.votes - a.votes).map((feature) => (
              <div 
                key={feature.id} 
                className={`p-6 rounded-3xl border transition-all duration-300 flex items-center justify-between gap-6 ${voted.includes(feature.id) ? 'bg-[#83C5BE]/5 border-[#83C5BE]/30' : 'bg-white border-slate-100 shadow-sm hover:shadow-md'}`}
              >
                <div className="flex-grow">
                  <h4 className="text-lg font-bold text-[#2D2926] mb-1">{feature.title}</h4>
                  <p className="text-sm text-[#5F5955] font-light">{feature.description}</p>
                </div>
                <button 
                  onClick={() => handleVote(feature.id)}
                  className={`flex flex-col items-center gap-1 px-4 py-3 rounded-2xl transition-all ${voted.includes(feature.id) ? 'text-[#006D77] bg-[#83C5BE]/20' : 'text-[#A6998E] hover:bg-slate-50'}`}
                >
                  <ThumbsUp size={20} className={voted.includes(feature.id) ? 'fill-[#006D77]' : ''} />
                  <span className="text-xs font-bold">{feature.votes}</span>
                </button>
              </div>
            ))}
          </div>

          {/* Suggestion Form */}
          <div className="bg-[#FCF9F7] p-8 rounded-[2.5rem] border border-[#F4ECE4] h-fit sticky top-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#E29578] rounded-full flex items-center justify-center text-white">
                <MessageSquare size={18} />
              </div>
              <h4 className="text-xl font-serif font-bold text-[#2D2926]">Your Idea</h4>
            </div>
            <p className="text-sm text-[#5F5955] mb-6 leading-relaxed">
              Don't see what you need? Tell us what feature would make your menopause journey easier.
            </p>
            
            <form onSubmit={handleSuggest} className="space-y-4">
              <textarea 
                placeholder="Ex: Better integration with smart watches..."
                className="w-full p-4 rounded-2xl bg-white border-none outline-none focus:ring-2 focus:ring-[#E29578] h-32 resize-none text-sm placeholder-slate-400"
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
              />
              <button 
                type="submit" 
                className="w-full bg-[#006D77] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#005a63] transition-all shadow-lg shadow-[#006D77]/10"
              >
                {submitted ? 'Request Received!' : 'Submit Request'} <Send size={16} />
              </button>
            </form>
            
            {submitted && (
              <p className="mt-4 text-xs text-center text-[#006D77] font-bold animate-in fade-in duration-300">
                Thank you! We've added this to our review list.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureRequests;
