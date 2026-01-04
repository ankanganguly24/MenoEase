
import React from 'react';
import { Sparkles, Instagram, Twitter, Facebook, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FCF9F7] pt-24 pb-12 px-6 border-t border-[#F4ECE4]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#006D77] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#006D77]/20">
                <Sparkles size={20} />
              </div>
              <span className="text-2xl font-serif font-bold text-[#2D2926] tracking-tight">MenoEase</span>
            </div>
            <p className="text-[#5F5955] max-w-sm mb-8 leading-relaxed font-light">
              MenoEase is the first dedicated companion app designed specifically for the unique needs of women in perimenopause and menopause. Empowering you through every wave.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-white border border-[#F4ECE4] rounded-full flex items-center justify-center text-[#A6998E] hover:text-[#006D77] hover:border-[#006D77] transition-all shadow-sm">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white border border-[#F4ECE4] rounded-full flex items-center justify-center text-[#A6998E] hover:text-[#006D77] hover:border-[#006D77] transition-all shadow-sm">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white border border-[#F4ECE4] rounded-full flex items-center justify-center text-[#A6998E] hover:text-[#006D77] hover:border-[#006D77] transition-all shadow-sm">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-[#2D2926] text-xl mb-8">Product</h4>
            <ul className="space-y-4 text-[#5F5955] font-medium text-sm">
              <li><a href="#benefits" className="hover:text-[#006D77] transition-colors">Core Benefits</a></li>
              <li><a href="#how-it-works" className="hover:text-[#006D77] transition-colors">How It Works</a></li>
              <li><a href="#feature-requests" className="hover:text-[#006D77] transition-colors">Request a Feature</a></li>
              <li><a href="#waitlist" className="hover:text-[#006D77] transition-colors">Founders Waitlist</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-[#2D2926] text-xl mb-8">Resources</h4>
            <ul className="space-y-4 text-[#5F5955] font-medium text-sm">
              <li><a href="#blog" className="hover:text-[#006D77] transition-colors">Menopause Blog</a></li>
              <li><a href="#blog" className="hover:text-[#006D77] transition-colors">Medically Reviewed Guides</a></li>
              <li><a href="#" className="hover:text-[#006D77] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#006D77] transition-colors">Terms of Use</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-[#F4ECE4] flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs text-[#A6998E] font-bold uppercase tracking-widest">
            © 2024 MenoEase Health. Global Companion.
          </p>
          <div className="flex items-center gap-3 text-[#A6998E] text-xs font-bold uppercase tracking-widest">
            <span>Made with</span>
            <Heart size={14} className="text-[#E29578] fill-[#E29578]" />
            <span>by the MenoEase Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
