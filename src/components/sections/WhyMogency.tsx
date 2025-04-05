
import { useState, useEffect, useRef } from 'react';
import { DollarSign, Clock, Briefcase, Target, Award, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';

const ReasonItem = ({ 
  icon, 
  title, 
  delay = 0 
}: { 
  icon: React.ReactNode, 
  title: string, 
  delay?: number 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div className={cn(
      "flex items-center gap-4 transition-all duration-500",
      "opacity-0 translate-x-4",
      isVisible && "opacity-100 translate-x-0"
    )}>
      <div className="bg-black/50 p-2.5 rounded-lg border border-white/10">
        {icon}
      </div>
      <p className="text-lg font-medium">{title}</p>
    </div>
  );
};

const WhyMogency = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="why-mogency" className="py-16 relative" ref={sectionRef}>
      <div className="section-container">
        <h2 className={cn(
          "section-title text-center mb-16 transition-all duration-500",
          "opacity-0 translate-y-4",
          isIntersecting && "opacity-100 translate-y-0"
        )}>
          Why Creators Choose <span className="text-mogency-neon-blue">Mogency</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto">
          <ReasonItem 
            icon={<DollarSign className="w-6 h-6 text-mogency-neon-blue" />}
            title="No upfront cost (rev share only)"
            delay={100}
          />
          
          <ReasonItem 
            icon={<Briefcase className="w-6 h-6 text-mogency-neon-pink" />}
            title="We do everything (strategy, product, tech, launch)"
            delay={200}
          />
          
          <ReasonItem 
            icon={<Target className="w-6 h-6 text-mogency-neon-purple" />}
            title="Built for creators with small or large audiences"
            delay={300}
          />
          
          <ReasonItem 
            icon={<Award className="w-6 h-6 text-mogency-neon-green" />}
            title="Based on proven monetization playbooks"
            delay={400}
          />
          
          <ReasonItem 
            icon={<Tag className="w-6 h-6 text-mogency-neon-blue" />}
            title="Fully white-labeled — your brand, not ours"
            delay={500}
          />
          
          <ReasonItem 
            icon={<Clock className="w-6 h-6 text-mogency-neon-pink" />}
            title="Quick setup, faster revenue (weeks, not months)"
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyMogency;
