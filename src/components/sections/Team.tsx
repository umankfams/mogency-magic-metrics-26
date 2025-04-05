
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, Trophy, Sparkles, Crown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const TeamMember = ({
  name,
  role,
  description,
  image,
  accentColor = "blue",
  skills = [],
  isLeader = false,
  delay = 0
}: {
  name: string,
  role: string,
  description: string,
  image: string,
  accentColor?: "blue" | "pink" | "green" | "purple",
  skills?: { icon: React.ReactNode, text: string }[],
  isLeader?: boolean,
  delay?: number
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const adjustedDelay = isMobile ? delay * 0.5 : delay;
    const timer = setTimeout(() => setIsVisible(true), adjustedDelay);
    return () => clearTimeout(timer);
  }, [delay, isMobile]);
  
  // Get accent color classes
  const getColorClasses = () => {
    switch (accentColor) {
      case "pink":
        return {
          border: "border-mogency-neon-pink/20",
          text: "text-mogency-neon-pink",
          avatarBorder: "border-mogency-neon-pink/50",
          avatarFallback: "bg-mogency-neon-pink/20",
          avatarText: "text-mogency-neon-pink",
          shadow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]",
          skillBg: "bg-mogency-neon-pink/10",
          skillText: "text-mogency-neon-pink"
        };
      case "blue":
        return {
          border: "border-mogency-neon-blue/20",
          text: "text-mogency-neon-blue",
          avatarBorder: "border-mogency-neon-blue/50",
          avatarFallback: "bg-mogency-neon-blue/20",
          avatarText: "text-mogency-neon-blue",
          shadow: "hover:shadow-[0_0_30px_rgba(14,165,233,0.2)]",
          skillBg: "bg-mogency-neon-blue/10",
          skillText: "text-mogency-neon-blue"
        };
      case "green":
        return {
          border: "border-mogency-neon-green/20",
          text: "text-mogency-neon-green",
          avatarBorder: "border-mogency-neon-green/50",
          avatarFallback: "bg-mogency-neon-green/20",
          avatarText: "text-mogency-neon-green",
          shadow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]",
          skillBg: "bg-mogency-neon-green/10",
          skillText: "text-mogency-neon-green"
        };
      case "purple":
        return {
          border: "border-mogency-neon-purple/20",
          text: "text-mogency-neon-purple",
          avatarBorder: "border-mogency-neon-purple/50",
          avatarFallback: "bg-mogency-neon-purple/20",
          avatarText: "text-mogency-neon-purple",
          shadow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]",
          skillBg: "bg-mogency-neon-purple/10",
          skillText: "text-mogency-neon-purple"
        };
      default:
        return {
          border: "border-mogency-neon-blue/20",
          text: "text-mogency-neon-blue",
          avatarBorder: "border-mogency-neon-blue/50",
          avatarFallback: "bg-mogency-neon-blue/20",
          avatarText: "text-mogency-neon-blue",
          shadow: "hover:shadow-[0_0_30px_rgba(14,165,233,0.2)]",
          skillBg: "bg-mogency-neon-blue/10",
          skillText: "text-mogency-neon-blue"
        };
    }
  };
  
  const colors = getColorClasses();
  
  return (
    <Card className={cn(
      "overflow-hidden bg-black/40 backdrop-blur-sm transition-all duration-500",
      colors.border,
      colors.shadow,
      "transform opacity-0 translate-y-8",
      isVisible && "opacity-100 translate-y-0 hover:translate-y-[-5px]"
    )}>
      <CardContent className="p-6 md:p-8">
        <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
          <Avatar className={cn(
            "w-24 h-24 rounded-xl overflow-hidden shadow-lg",
            colors.avatarBorder,
            "border-2",
            isLeader ? "rotate-0 hover:rotate-3" : "transform -rotate-3 hover:rotate-0",
            "transition-all duration-300"
          )}>
            <AvatarImage alt={name} src={image} className="object-cover" />
            <AvatarFallback className={cn(colors.avatarFallback, colors.avatarText)}>
              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-2xl font-bold">{name}</h3>
              {isLeader && <Crown size={16} className="text-yellow-400" />}
            </div>
            <p className={cn("mb-3", colors.text)}>{role}</p>
            <p className="text-muted-foreground mb-3 text-sm">{description}</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className={cn(
                    "inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full",
                    colors.skillBg, colors.skillText,
                    "transition-all duration-300 hover:scale-105"
                  )}
                >
                  {skill.icon}
                  {skill.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: isMobile ? 0.05 : 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isMobile]);

  return (
    <section id="team" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="section-container" ref={sectionRef}>
        <div className="text-center mb-8 md:mb-12">
          <h2 className={cn(
            "section-title mb-3 md:mb-4 transition-all duration-500",
            "opacity-0 translate-y-4",
            isVisible && "opacity-100 translate-y-0"
          )}>
            Meet the <span className="text-gradient">Founders</span>
          </h2>
          <p className={cn(
            "section-subtitle max-w-2xl mx-auto",
            "opacity-0 translate-y-4 transition-all duration-500 delay-100",
            isVisible && "opacity-100 translate-y-0"
          )}>
            The experts behind Mogency's creator-first approach to monetization
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Mohsin */}
          <TeamMember 
            name="Mohsin"
            role="Product & Marketing Specialist"
            description="Transforming creator content into high-converting digital products with a deep understanding of audience psychology and marketing tactics."
            image="/lovable-uploads/8c697c7e-7efe-48d6-af09-4fa3adf37732.jpg"
            accentColor="pink"
            skills={[
              { 
                icon: <Rocket size={12} />, 
                text: "Digital Product Strategy" 
              },
              { 
                icon: <Sparkles size={12} />, 
                text: "Conversion Expert" 
              }
            ]}
            delay={200}
          />

          {/* Momin */}
          <TeamMember 
            name="Momin"
            role="CEO & Growth Director"
            description="Building sustainable revenue engines for creators with strategic partnerships and innovative business models that maximize value for audiences."
            image="/lovable-uploads/ea76e865-89ad-4b19-babf-67cd246abffe.png"
            accentColor="blue"
            skills={[
              { 
                icon: <Trophy size={12} />, 
                text: "Revenue Growth Expert" 
              },
              { 
                icon: <Sparkles size={12} />, 
                text: "Partnership Specialist" 
              }
            ]}
            isLeader={true}
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
