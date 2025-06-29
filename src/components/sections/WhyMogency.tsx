
import { useState, useEffect, useRef } from 'react';
import { Shield, Clock, Award, Target, Users, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card } from '@/components/ui/card';

const ReasonItem = ({ 
  icon, 
  title, 
  delay = 0,
  className
}: { 
  icon: React.ReactNode, 
  title: string, 
  delay?: number,
  className?: string
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <Card className={cn(
      "flex items-center gap-4 transition-all duration-500 p-4 bg-black/70 border-white/5 hover:border-white/10",
      "transform opacity-0 translate-y-4",
      isVisible && "opacity-100 translate-y-0",
      "hover:shadow-[0_0_15px_rgba(14,165,233,0.15)] hover:bg-black/80 transition-all duration-300",
      className
    )}>
      <div className="bg-black/70 p-2.5 rounded-lg border border-white/10 transition-all duration-300">
        {icon}
      </div>
      <p className="text-lg font-medium">{title}</p>
    </Card>
  );
};

const WhyMogency = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Define the reasons with consistent color scheme
  const reasons = [
    {
      icon: <Award className="w-6 h-6 text-mogency-neon-blue" />,
      title: "Premium quality products from trusted brands only",
      color: "from-mogency-neon-blue to-mogency-neon-blue/70"
    },
    {
      icon: <Users className="w-6 h-6 text-mogency-neon-blue" />,
      title: "Expert consultation tailored to your experience level",
      color: "from-mogency-neon-blue to-mogency-neon-blue/70"
    },
    {
      icon: <Shield className="w-6 h-6 text-mogency-neon-blue" />,
      title: "Authentic products with full manufacturer warranties",
      color: "from-mogency-neon-blue to-mogency-neon-blue/70"
    },
    {
      icon: <Clock className="w-6 h-6 text-mogency-neon-blue" />,
      title: "Fast shipping with same-day processing available",
      color: "from-mogency-neon-blue to-mogency-neon-blue/70"
    },
    {
      icon: <Target className="w-6 h-6 text-mogency-neon-blue" />,
      title: "Personalized recommendations based on your preferences",
      color: "from-mogency-neon-blue to-mogency-neon-blue/70"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-mogency-neon-blue" />,
      title: "Lifetime support and maintenance guidance included",
      color: "from-mogency-neon-blue to-mogency-neon-blue/70"
    }
  ];

  // Calculate base delay and increment for staggered animation
  const baseDelay = 100;
  const delayIncrement = 100;

  return (
    <section id="why-mogency" className="py-16 relative bg-black/40 backdrop-blur-sm" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-[20%] left-[30%] w-[40%] h-[40%] rounded-full bg-mogency-neon-blue/10 filter blur-3xl" />
        <div className="absolute bottom-[20%] right-[30%] w-[40%] h-[40%] rounded-full bg-mogency-neon-pink/10 filter blur-3xl" />
      </div>
      
      <div className="section-container relative z-10">
        <h2 className={cn(
          "section-title text-center mb-8 transition-all duration-700",
          "opacity-0 translate-y-4",
          isIntersecting && "opacity-100 translate-y-0"
        )}>
          Why Vapers Choose <span className="text-mogency-neon-blue">Vapetory</span>
        </h2>
        
        <p className={cn(
          "text-center max-w-2xl mx-auto text-muted-foreground mb-16 transition-all duration-700 delay-100",
          "opacity-0 translate-y-4",
          isIntersecting && "opacity-100 translate-y-0"
        )}>
          We're not just another vape shop. We're your trusted partner in creating the perfect vaping experience, bringing expertise and premium products that deliver real satisfaction.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <ReasonItem 
              key={index}
              icon={reason.icon}
              title={reason.title}
              delay={baseDelay + (isMobile ? index * delayIncrement : (index % 2) * delayIncrement + Math.floor(index / 2) * delayIncrement * 2)}
              className={cn(
                "border-l-2",
                index % 2 === 0 ? "border-l-mogency-neon-blue/30" : "border-l-mogency-neon-blue/20"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMogency;
