
import { useState, useEffect, useRef } from 'react';
import { Ban, Clock, Palette, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProblemItem = ({ icon, text, delay }: { icon: React.ReactNode, text: string, delay: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div className={cn(
      "flex items-start gap-3 md:gap-4 mb-4 md:mb-6 transform transition-all duration-500",
      "opacity-0 translate-y-4",
      isVisible && "opacity-100 translate-y-0"
    )}>
      <div className="bg-black/50 p-1.5 md:p-2 rounded-lg border border-white/10">
        {icon}
      </div>
      <p className="text-base md:text-lg text-white">{text}</p>
    </div>
  );
};

const Problem = () => {
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
    <section id="problem" className="py-12 md:py-16" ref={sectionRef}>
      <div className="section-container">
        <h2 className={cn(
          "section-title text-center mb-8 md:mb-12 transition-all duration-500",
          "opacity-0 translate-y-4",
          isIntersecting && "opacity-100 translate-y-0"
        )}>
          Why Most Creators Stay <span className="text-mogency-neon-pink">Broke</span>
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <p className={cn(
            "text-base md:text-xl text-center text-muted-foreground mb-8 md:mb-12 transition-all duration-500",
            "opacity-0 translate-y-4",
            isIntersecting && "opacity-100 translate-y-0"
          )}>
            You're told to "monetize your audience" — but how?
          </p>
          
          <div className="space-y-4 md:space-y-6">
            <ProblemItem 
              icon={<Clock className="w-5 h-5 md:w-6 md:h-6 text-mogency-neon-blue" />} 
              text="Courses take forever to create, and you already have a content calendar to maintain."
              delay={200}
            />
            
            <ProblemItem 
              icon={<Palette className="w-5 h-5 md:w-6 md:h-6 text-mogency-neon-pink" />} 
              text="You're not a designer, copywriter, or marketer."
              delay={400}
            />
            
            <ProblemItem 
              icon={<Ban className="w-5 h-5 md:w-6 md:h-6 text-mogency-neon-purple" />} 
              text="You don't want to spend months building some product that might not even sell."
              delay={600}
            />
            
            <ProblemItem 
              icon={<DollarSign className="w-5 h-5 md:w-6 md:h-6 text-mogency-neon-green" />} 
              text="So you just... keep creating for free. And watch other creators print money from their content."
              delay={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
