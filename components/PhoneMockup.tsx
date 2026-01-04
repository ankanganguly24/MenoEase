
import React from 'react';
import { Thermometer, Brain, Moon, Sparkles, Clock, Zap, Users, FileText, BarChart3 } from 'lucide-react';

interface PhoneMockupProps {
  type: 'dashboard' | 'quick-log' | 'insights' | 'report';
  label?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ type, label }) => {
  return (
    <div className="relative w-[280px] h-[580px] bg-[#2D2926] rounded-[3.5rem] p-3 shadow-2xl border-[6px] border-[#3D3936]">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#2D2926] rounded-b-2xl z-30"></div>
      
      {/* Screen */}
      <div className="w-full h-full bg-[#FCF9F7] rounded-[2.8rem] overflow-hidden relative flex flex-col font-sans">
        {type === 'dashboard' && (
          <div className="p-6 flex-grow bg-white">
            <div className="flex justify-between items-center mt-6 mb-8">
              <div>
                <p className="text-[10px] text-[#A6998E] font-bold uppercase tracking-[0.2em]">Welcome Back,</p>
                <h4 className="text-2xl font-serif font-bold text-[#2D2926]">Elizabeth</h4>
              </div>
              <div className="w-10 h-10 bg-[#FFF5F1] rounded-full flex items-center justify-center text-[#E29578]">
                <Sparkles size={18} />
              </div>
            </div>

            {/* Quick Action */}
            <div className="bg-[#FFF5F1] p-5 rounded-3xl mb-6 flex items-center gap-4 border border-[#F4ECE4]">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#E29578] shadow-sm">
                <Thermometer size={22} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#2D2926]">Hot Flash Now?</p>
                <p className="text-[10px] text-[#A6998E] font-medium uppercase tracking-wider">Start Cooling Timer</p>
              </div>
            </div>

            {/* Daily Overview */}
            <h5 className="text-xs font-bold text-[#2D2926] uppercase tracking-widest mb-4 opacity-50">Today's Pulse</h5>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-2xl border border-[#F4ECE4] shadow-sm">
                <Thermometer size={16} className="text-[#E29578] mb-2" />
                <p className="text-2xl font-serif font-bold text-[#2D2926]">3</p>
                <p className="text-[9px] font-bold text-[#A6998E] uppercase tracking-tighter">Events logged</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-[#F4ECE4] shadow-sm">
                <Moon size={16} className="text-[#006D77] mb-2" />
                <p className="text-2xl font-serif font-bold text-[#2D2926]">6.5h</p>
                <p className="text-[9px] font-bold text-[#A6998E] uppercase tracking-tighter">Deep Sleep</p>
              </div>
            </div>

            <div className="bg-[#83C5BE] p-5 rounded-3xl text-white shadow-lg shadow-[#83C5BE]/20">
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">Pattern Spotted</p>
              <p className="text-xs font-medium leading-relaxed">Evening flashes are peaking. Try a cool shower before 9 PM today.</p>
            </div>
          </div>
        )}

        {type === 'quick-log' && (
          <div className="p-6 flex-grow flex flex-col items-center justify-center bg-white">
            <div className="w-44 h-44 rounded-full border-[10px] border-[#FFF5F1] flex flex-col items-center justify-center mb-10 relative">
              <div className="absolute inset-[-10px] border-[10px] border-[#E29578] border-t-transparent rounded-full animate-[spin_4s_linear_infinite]"></div>
              <p className="text-4xl font-serif font-bold text-[#2D2926]">01:45</p>
              <p className="text-[10px] font-bold text-[#E29578] uppercase mt-1 tracking-widest">Active Cooling</p>
            </div>
            <h4 className="text-2xl font-serif font-bold text-[#2D2926] mb-2">Relief in Progress</h4>
            <p className="text-center text-[#5F5955] text-sm mb-10 leading-relaxed px-4">Breathe deeply, Elizabeth. We're tracking the intensity for your records.</p>
            <button className="w-full py-4 bg-[#E29578] text-white font-bold rounded-2xl shadow-lg">End & Log</button>
          </div>
        )}

        {type === 'insights' && (
          <div className="p-6 flex-grow bg-[#FCF9F7]">
            <h4 className="text-2xl font-serif font-bold text-[#2D2926] mt-6 mb-6">Weekly Insights</h4>
            <div className="space-y-4">
              {[
                { icon: <Brain size={16} />, title: "Focus Clarity", desc: "Low between 2-4 PM", color: "#83C5BE" },
                { icon: <Zap size={16} />, title: "Energy Peak", desc: "Highest after breakfast", color: "#E29578" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-[#F4ECE4] flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: item.color }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#2D2926]">{item.title}</p>
                    <p className="text-[10px] text-[#A6998E] font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
              
              <div className="mt-8 p-6 bg-[#006D77] rounded-[2rem] text-white shadow-xl">
                <BarChart3 size={28} className="mb-3 opacity-60" />
                <h5 className="font-serif font-bold text-xl leading-tight mb-2">Doctor's Brief</h5>
                <p className="text-[10px] opacity-80 mb-4 leading-relaxed">Your 30-day symptom summary is ready to be shared with your specialist.</p>
                <button className="bg-white text-[#006D77] text-xs font-bold px-5 py-2.5 rounded-xl shadow-md">Export PDF</button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Nav Bar */}
        <div className="h-20 border-t border-[#F4ECE4] flex items-center justify-around px-4 bg-white mt-auto">
          <div className="flex flex-col items-center gap-1 text-[#E29578]">
             <Clock size={20} strokeWidth={2.5} />
          </div>
          <div className="text-[#D9D1C9]"><BarChart3 size={20} /></div>
          <div className="w-12 h-12 bg-[#E29578] rounded-2xl -mt-10 shadow-lg shadow-[#E29578]/30 flex items-center justify-center text-white">
            <span className="text-2xl font-light">+</span>
          </div>
          <div className="text-[#D9D1C9]"><Users size={20} /></div>
          <div className="text-[#D9D1C9]"><FileText size={20} /></div>
        </div>
      </div>

      {label && (
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-5 py-2 rounded-full border border-[#F4ECE4] text-[10px] font-bold text-[#A6998E] shadow-sm uppercase tracking-widest">
          {label}
        </div>
      )}
    </div>
  );
};

export default PhoneMockup;
