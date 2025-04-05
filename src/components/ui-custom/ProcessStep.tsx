
import { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
  isLast?: boolean;
  color?: string;
}

const ProcessStep = ({ 
  number, 
  title, 
  description, 
  icon, 
  delay = 0,
  isLast = false,
  color = 'from-mogency-neon-blue to-mogency-neon-purple'
}: ProcessStepProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const stepRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, [delay]);

  // Determine glow class based on color gradient
  const getGlowClass = () => {
    if (color.includes('blue') && color.includes('purple')) return 'shadow-[0_0_20px_rgba(14,165,233,0.4)]';
    if (color.includes('pink') && color.includes('blue')) return 'shadow-[0_0_20px_rgba(217,70,239,0.4)]';
    if (color.includes('green') && color.includes('blue')) return 'shadow-[0_0_20px_rgba(16,185,129,0.4)]';
    return 'shadow-[0_0_20px_rgba(14,165,233,0.4)]';
  };

  return (
    <div ref={stepRef} className="flex relative">
      {/* Step content */}
      <div className={cn(
        'ml-8 md:ml-10 pb-8 md:pb-12 transform transition-all duration-500 opacity-0 translate-y-8',
        isVisible && 'opacity-100 translate-y-0'
      )}>
        <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 flex items-center text-white">
          <span className="mr-2">{title}</span>
        </h3>
        <p className="text-xs md:text-base text-muted-foreground mb-3 md:mb-4">{description}</p>
      </div>
      
      {/* Timeline elements */}
      <div className="absolute left-0 top-0">
        <div className={cn(
          `flex items-center justify-center w-6 h-6 md:w-10 md:h-10 rounded-full bg-gradient-to-r ${color} text-white animate-neon-pulse`,
          getGlowClass(),
          'transform transition-all duration-500 opacity-0 scale-0',
          isVisible && 'opacity-100 scale-100'
        )}>
          {icon}
        </div>
        
        {!isLast && (
          <div className={cn(
            `w-0.5 bg-gradient-to-b ${color} h-full absolute left-3 md:left-5 top-6 md:top-10 -translate-x-1/2`,
            'transform transition-all duration-1000 opacity-0 scale-y-0 origin-top',
            isVisible && 'opacity-100 scale-y-100'
          )} />
        )}
      </div>
    </div>
  );
};

export default ProcessStep;
