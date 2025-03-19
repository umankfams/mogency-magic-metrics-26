
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Rocket, Trophy, Sparkles } from 'lucide-react';

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
              <Avatar className="w-28 h-28 border-2 border-mogency-neon-pink/50 shadow-lg">
                <AvatarImage src="/lovable-uploads/0c133f91-ba8e-499e-b896-fde994c25841.png" alt="Mohsin" />
                <AvatarFallback className="bg-mogency-neon-pink/20 text-white text-2xl">MH</AvatarFallback>
              </Avatar>
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
              <Avatar className="w-28 h-28 border-2 border-mogency-neon-blue/50 shadow-lg">
                <AvatarImage src="/lovable-uploads/74dab9ac-82a4-44bd-a837-8278c6bc8b50.png" alt="Momin" />
                <AvatarFallback className="bg-mogency-neon-blue/20 text-white text-2xl">MN</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-2xl font-bold mb-1">Momin</h3>
                <p className="text-mogency-neon-blue mb-4">Strategy & Growth Director</p>
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
