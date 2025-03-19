
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Rocket, Trophy, Sparkles, Crown } from 'lucide-react';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('team-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="team" className="py-20 md:py-32 relative overflow-hidden bg-black/40">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[30%] -left-[30%] w-[60%] h-[60%] rounded-full bg-mogency-neon-purple/10 filter blur-3xl" />
        <div className="absolute -bottom-[30%] -right-[30%] w-[60%] h-[60%] rounded-full bg-mogency-neon-blue/10 filter blur-3xl" />
      </div>
      
      <div id="team-section" className="section-container relative z-10">
        <div className="text-center mb-20">
          <h2 className={cn(
            "section-title",
            "transform transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            Meet the <span className="text-gradient">Founders</span>
          </h2>
          <p className={cn(
            "section-subtitle",
            "transform transition-all duration-700 delay-100",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            The experts behind Mogency's creator-first approach to monetization
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-16 max-w-6xl mx-auto">
          {/* Mohsin */}
          <div className={cn(
            "bg-black/30 rounded-xl overflow-hidden border border-mogency-neon-pink/20 p-6 md:p-10",
            "transform transition-all duration-700 delay-200",
            "hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] transition-all",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="w-28 h-28 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-mogency-neon-pink to-mogency-neon-purple rounded-xl transform -rotate-3 hover:rotate-0 transition-all overflow-hidden border-2 border-mogency-neon-pink/50 shadow-lg">
                  <svg 
                    viewBox="0 0 200 200" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full p-1"
                  >
                    {/* Head */}
                    <circle cx="100" cy="85" r="55" fill="#7c3aed" />
                    
                    {/* Face */}
                    <circle cx="75" cy="75" r="8" fill="#ffffff" /> {/* Left eye */}
                    <circle cx="125" cy="75" r="8" fill="#ffffff" /> {/* Right eye */}
                    <circle cx="75" cy="75" r="3" fill="#000000" /> {/* Left pupil */}
                    <circle cx="125" cy="75" r="3" fill="#000000" /> {/* Right pupil */}
                    <path d="M85,100 Q100,120 115,100" stroke="#ffffff" strokeWidth="3" fill="none" /> {/* Smile */}
                    
                    {/* Accessories - Glasses */}
                    <rect x="65" y="70" width="20" height="10" rx="5" fill="none" stroke="#ffffff" strokeWidth="2" />
                    <rect x="115" y="70" width="20" height="10" rx="5" fill="none" stroke="#ffffff" strokeWidth="2" />
                    <line x1="85" y1="75" x2="115" y2="75" stroke="#ffffff" strokeWidth="2" />
                    
                    {/* Hair */}
                    <path d="M60,60 Q100,20 140,60" fill="#ec4899" />
                    
                    {/* Body outline */}
                    <path d="M70,140 Q100,160 130,140 L130,200 L70,200 Z" fill="#ec4899" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Mohsin</h3>
                <p className="text-mogency-neon-pink mb-4">Product & Marketing Specialist</p>
                <p className="text-muted-foreground mb-4">
                  Transforming creator content into high-converting digital products with 
                  a deep understanding of audience psychology and marketing tactics.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-mogency-neon-pink/10 text-mogency-neon-pink">
                    <Rocket size={12} /> Digital Product Strategy
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-mogency-neon-purple/10 text-mogency-neon-purple">
                    <Sparkles size={12} /> Conversion Expert
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Momin */}
          <div className={cn(
            "bg-black/30 rounded-xl overflow-hidden border border-mogency-neon-blue/20 p-6 md:p-10",
            "transform transition-all duration-700 delay-300",
            "hover:shadow-[0_0_30px_rgba(14,165,233,0.2)] transition-all",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="w-28 h-28 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-mogency-neon-blue to-mogency-neon-green rounded-xl transform rotate-3 hover:rotate-0 transition-all overflow-hidden border-2 border-mogency-neon-blue/50 shadow-lg">
                  <svg 
                    viewBox="0 0 200 200" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full p-1"
                  >
                    {/* Head */}
                    <circle cx="100" cy="85" r="55" fill="#0e7490" />
                    
                    {/* Face */}
                    <circle cx="75" cy="75" r="8" fill="#ffffff" /> {/* Left eye */}
                    <circle cx="125" cy="75" r="8" fill="#ffffff" /> {/* Right eye */}
                    <circle cx="75" cy="75" r="3" fill="#000000" /> {/* Left pupil */}
                    <circle cx="125" cy="75" r="3" fill="#000000" /> {/* Right pupil */}
                    <path d="M80,105 Q100,120 120,105" stroke="#ffffff" strokeWidth="3" fill="none" /> {/* Smile */}
                    
                    {/* Crown */}
                    <path d="M70,40 L85,60 L100,35 L115,60 L130,40 L125,65 L75,65 Z" fill="#eab308" />
                    <circle cx="84" cy="50" r="3" fill="#ffffff" />
                    <circle cx="100" cy="45" r="3" fill="#ffffff" />
                    <circle cx="116" cy="50" r="3" fill="#ffffff" />
                    
                    {/* Hair - shorter/neater cut */}
                    <path d="M55,80 Q75,40 100,35 Q125,40 145,80" fill="#0ea5e9" />
                    
                    {/* Body - suit/business attire */}
                    <path d="M70,140 Q100,160 130,140 L130,200 L70,200 Z" fill="#0ea5e9" />
                    <path d="M85,150 L115,150 L115,200 L85,200 Z" fill="#0c4a6e" /> {/* Tie/center of suit */}
                  </svg>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-2xl font-bold">Momin</h3>
                  <Crown size={16} className="text-yellow-400" />
                </div>
                <p className="text-mogency-neon-blue mb-4">CEO & Growth Director</p>
                <p className="text-muted-foreground mb-4">
                  Building sustainable revenue engines for creators with strategic partnerships
                  and innovative business models that maximize value for audiences.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-mogency-neon-blue/10 text-mogency-neon-blue">
                    <Trophy size={12} /> Revenue Growth Expert
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-mogency-neon-green/10 text-mogency-neon-green">
                    <Sparkles size={12} /> Partnership Specialist
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={cn(
          "text-center mt-16 max-w-2xl mx-auto",
          "transform transition-all duration-700 delay-400",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          <p className="text-muted-foreground text-lg">
            With years of experience in digital marketing, product development, and the creator economy, 
            Mohsin and Momin founded Mogency to help content creators build sustainable businesses 
            without sacrificing creative freedom.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
