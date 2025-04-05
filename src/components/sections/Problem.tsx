
import { useState, useEffect, useRef } from 'react';
import { Ban, Clock, Palette, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const ProblemItem = ({ icon, text, delay }: { icon: React.ReactNode, text: string, delay: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Reduce delay time on mobile for better UX
    const adjustedDelay = isMobile ? delay * 0.5 : delay;
    const timer = setTimeout(() => setIsVisible(true), adjustedDelay);
    return () => clearTimeout(timer);
  }, [delay, isMobile]);
  
  return (
    <div className={cn(
      "flex items-start gap-3 md:gap-4 mb-4 md:mb-6 transform transition-all",
      "duration-300 md:duration-500 opacity-0 translate-y-4",
      isVisible && "opacity-100 translate-y-0"
    )}>
      <div className="bg-black/50 p-1.5 md:p-2 rounded-lg border border-white/10 flex-shrink-0">
        {icon}
      </div>
      <p className="text-base md:text-lg text-white">{text}</p>
    </div>
  );
};

const Problem = () => {
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
      // Lower threshold for mobile to trigger animations earlier
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
    <section id="problem" className="py-8 md:py-16" ref={sectionRef}>
      <div className="section-container px-4 md:px-6">
        <h2 className={cn(
          "section-title text-center mb-6 md:mb-12 transition-all duration-500",
          "text-2xl sm:text-3xl md:text-4xl opacity-0 translate-y-4",
          isIntersecting && "opacity-100 translate-y-0"
        )}>
          Why Most Creators Stay <span className="text-mogency-neon-pink">Broke</span>
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <p className={cn(
            "text-lg md:text-xl text-center text-muted-foreground mb-8 md:mb-12 transition-all duration-500",
            "opacity-0 translate-y-4",
            isIntersecting && "opacity-100 translate-y-0"
          )}>
            You're told to "monetize your audience" — but how?
          </p>
          
          <div className="space-y-4 md:space-y-6 px-2 sm:px-0">
            <ProblemItem 
              icon={<Clock className="w-5 h-5 md:w-6 md:h-6 text-mogency-neon-blue" />} 
              text="Courses take forever to create, and you already have a content calendar to maintain."
              delay={200}
            />
            
            <ProblemItem 
              icon={<Palette className="w-5 h-5 md:w-6 md:h-6 text-mogency-neon-pink" />} 
              text="You're not a designer, copywriter, or marketer."
              delay={300}
            />
            
            <ProblemItem 
              icon={<Ban className="w-5 h-5 md:w-6 md:h-6 text-mogency-neon-purple" />} 
              text="You don't want to spend months building some product that might not even sell."
              delay={400}
            />
            
            <ProblemItem 
              icon={<DollarSign className="w-5 h-5 md:w-6 md:h-6 text-mogency-neon-green" />} 
              text="So you just... keep creating for free. And watch other creators print money from their content."
              delay={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
