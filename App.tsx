
import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  Menu,
  X,
  ShieldCheck
} from 'lucide-react';
import Hero from './components/Hero';
import PainValidation from './components/PainValidation';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';
import BlogSection from './components/BlogSection';
import FeatureRequests from './components/FeatureRequests';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen feminine-gradient text-slate-800 overflow-x-hidden font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#006D77] rounded-full flex items-center justify-center text-white shadow-lg">
              <Sparkles size={20} />
            </div>
            <span className="text-2xl font-serif font-bold text-[#2D2926] tracking-tight cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>MenoEase</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#benefits" className="text-slate-600 hover:text-[#006D77] transition-colors font-medium">Benefits</a>
            <a href="#blog" className="text-slate-600 hover:text-[#006D77] transition-colors font-medium">Resources</a>
            <a href="#feature-requests" className="text-slate-600 hover:text-[#006D77] transition-colors font-medium">Shape the App</a>
            <a href="#waitlist" className="bg-[#E29578] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#d48466] transition-all shadow-md">Join Waitlist</a>
          </div>

          <button className="md:hidden text-slate-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl p-6 border-t border-slate-100 flex flex-col gap-4">
            <a href="#benefits" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-700">Benefits</a>
            <a href="#blog" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-700">Resources</a>
            <a href="#feature-requests" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-700">Shape the App</a>
            <a href="#waitlist" onClick={() => setIsMenuOpen(false)} className="w-full text-center bg-[#E29578] text-white py-3 rounded-xl font-bold">Join Waitlist</a>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <PainValidation />
        <Benefits />
        <HowItWorks />
        <BlogSection />
        <FeatureRequests />
        <SocialProof />
        
        {/* Final CTA Section */}
        <section id="waitlist" className="relative py-28 px-6 bg-[#EDF6F9]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#83C5BE]/20 text-[#006D77] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-8">
              <Heart size={16} fill="#006D77" /> Founding Members Program
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2D2926] mb-6 leading-tight">
              Be the First to Experience MenoEase
            </h2>
            
            <p className="text-xl text-[#5F5955] mb-12 max-w-2xl mx-auto leading-relaxed">
              Join our exclusive waitlist today and secure: 
              <span className="block mt-2 font-semibold text-[#006D77]">
                Lifetime 30% discount • Exclusive founder updates • Free Menopause Relief Starter Guide
              </span>
            </p>
            
            <div className="bg-white p-2 rounded-3xl shadow-xl shadow-[#83C5BE]/10 max-w-xl mx-auto">
              <WaitlistForm />
            </div>
            
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 text-[#5F5955] text-sm font-medium">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#83C5BE]" /> Limited founding perks
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#83C5BE]" /> 100% Secure & Private
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;

export const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="p-10 text-center animate-in fade-in duration-500">
        <div className="w-16 h-16 bg-[#83C5BE] rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-[#83C5BE]/30">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-3xl font-serif font-bold text-[#2D2926] mb-2">You're on the list!</h3>
        <p className="text-[#5F5955]">Welcome to the community. Check your inbox for your guide.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
      <input
        type="email"
        required
        placeholder="Enter your email"
        className="flex-grow px-6 py-5 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-[#83C5BE] transition-all text-slate-800 placeholder-slate-400 font-medium"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button 
        type="submit" 
        className="bg-[#E29578] hover:bg-[#d48466] text-white font-bold py-5 px-10 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#E29578]/20"
      >
        Get Access <ChevronRight size={20} />
      </button>
    </form>
  );
};
