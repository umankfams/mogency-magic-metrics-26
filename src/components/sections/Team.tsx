
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
    <section id="team" className="py-16 md:py-24 relative overflow-hidden bg-black">
      {/* Enhanced background elements for more consistent look */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] -left-[20%] w-[60%] h-[60%] rounded-full bg-mogency-neon-purple/15 filter blur-3xl" />
        <div className="absolute -bottom-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-mogency-neon-blue/15 filter blur-3xl" />
        {/* Added tech grid for consistent background styling */}
        <div className="absolute inset-0 tech-grid opacity-30" />
      </div>
      
      <div id="team-section" className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className={cn(
            "section-title",
            "transform transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            Meet the <span className="text-gradient">Founders</span>
          </h2>
          <p className={cn(
            "section-subtitle max-w-2xl mx-auto",
            "transform transition-all duration-700 delay-100",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            The experts behind Mogency's creator-first approach to monetization
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12 max-w-5xl mx-auto">
          {/* Mohsin - FIXED IMAGE */}
          <div className={cn(
            "bg-black/40 rounded-xl overflow-hidden border border-mogency-neon-pink/20 p-6 md:p-8",
            "transform transition-all duration-700 delay-200",
            "hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] transition-all",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
              <Avatar className="w-24 h-24 border-2 border-mogency-neon-pink/50 rounded-xl overflow-hidden shadow-lg transform -rotate-3 hover:rotate-0 transition-all">
                <AvatarImage src="/lovable-uploads/74dab9ac-82a4-44bd-a837-8278c6bc8b50.png" alt="Mohsin" className="object-cover" />
                <AvatarFallback className="bg-mogency-neon-pink/20">MO</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-2xl font-bold mb-1">Mohsin</h3>
                <p className="text-mogency-neon-pink mb-3">Product & Marketing Specialist</p>
                <p className="text-muted-foreground mb-3 text-sm">
                  Transforming creator content into high-converting digital products with 
                  a deep understanding of audience psychology and marketing tactics.
                </p>
                <div className="flex flex-wrap gap-2">
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

          {/* Momin - FIXED IMAGE */}
          <div className={cn(
            "bg-black/40 rounded-xl overflow-hidden border border-mogency-neon-blue/20 p-6 md:p-8",
            "transform transition-all duration-700 delay-300",
            "hover:shadow-[0_0_30px_rgba(14,165,233,0.2)] transition-all",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
              <Avatar className="w-24 h-24 border-2 border-mogency-neon-blue/50 rounded-xl overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-all">
                <AvatarImage src="/lovable-uploads/0c133f91-ba8e-499e-b896-fde994c25841.png" alt="Momin" className="object-cover" />
                <AvatarFallback className="bg-mogency-neon-blue/20">MO</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-2xl font-bold">Momin</h3>
                  <Crown size={16} className="text-yellow-400" />
                </div>
                <p className="text-mogency-neon-blue mb-3">CEO & Growth Director</p>
                <p className="text-muted-foreground mb-3 text-sm">
                  Building sustainable revenue engines for creators with strategic partnerships
                  and innovative business models that maximize value for audiences.
                </p>
                <div className="flex flex-wrap gap-2">
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
          "text-center mt-12 max-w-2xl mx-auto",
          "transform transition-all duration-700 delay-400",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          <p className="text-muted-foreground text-base">
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
