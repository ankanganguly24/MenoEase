
import React from 'react';
// Added ChevronRight to imports
import { BookOpen, Clock, ArrowUpRight, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    tag: 'Understanding',
    title: 'The 34 Symptoms of Menopause: More Than Just Hot Flashes',
    excerpt: 'From skin changes to brain fog, we explore the lesser-known signs of perimenopause and how to track them.',
    author: 'Dr. Sarah Jenkins',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    tag: 'Lifestyle',
    title: 'Cooling Strategies for Better Sleep during Night Sweats',
    excerpt: 'Practical, evidence-based tips to help you lower your core temperature and reclaim your rest tonight.',
    author: 'Elena Rossi',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=400'
  },
  {
    tag: 'Expert Opinion',
    title: 'Why Most Health Apps Fail Women Over 40',
    excerpt: 'The technology gap in womens health is real. Learn why dedicated tools are essential for the menopause journey.',
    author: 'Medically Reviewed',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400'
  }
];

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-24 px-6 bg-[#FCF9F7]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#006D77] font-bold uppercase tracking-widest text-xs mb-4">
              <BookOpen size={16} /> Learning Hub
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2D2926] leading-tight">
              Resources for Your Journey
            </h2>
            <p className="text-lg text-[#5F5955] mt-6 font-light">
              Expert-backed insights to help you navigate perimenopause and menopause with confidence.
            </p>
          </div>
          <button className="text-[#006D77] font-bold border-b-2 border-[#006D77] pb-1 hover:text-[#E29578] hover:border-[#E29578] transition-all flex items-center gap-2 group">
            Explore All Resources <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[2rem] mb-6 aspect-[4/3]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#006D77]">
                  {post.tag}
                </div>
              </div>
              <div className="flex items-center gap-4 text-[10px] font-bold text-[#A6998E] uppercase tracking-widest mb-4">
                <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span>By {post.author}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#2D2926] mb-4 group-hover:text-[#006D77] transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-[#5F5955] font-light leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-[#E29578] font-bold text-sm">
                Read Article <ChevronRight size={16} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
