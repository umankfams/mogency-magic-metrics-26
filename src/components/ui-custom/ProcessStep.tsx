
import { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

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

  return (
    <div ref={stepRef} className="flex relative">
      {/* Step content */}
      <div className={cn(
        'ml-10 pb-12 transform transition-all duration-500 opacity-0 translate-y-8',
        isVisible && 'opacity-100 translate-y-0'
      )}>
        <h3 className="text-xl font-bold mb-2 flex items-center text-white">
          <span className="mr-2">{title}</span>
        </h3>
        <p className="text-muted-foreground mb-4">{description}</p>
      </div>
      
      {/* Timeline elements */}
      <div className="absolute left-0 top-0">
        <div className={cn(
          `flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${color} text-white animate-neon-pulse`,
          'transform transition-all duration-500 opacity-0 scale-0',
          isVisible && 'opacity-100 scale-100'
        )}>
          {icon}
        </div>
        
        {!isLast && (
          <div className={cn(
            `w-0.5 bg-gradient-to-b ${color} h-full absolute left-5 top-10 -translate-x-1/2`,
            'transform transition-all duration-1000 opacity-0 scale-y-0 origin-top',
            isVisible && 'opacity-100 scale-y-100'
          )} />
        )}
      </div>
    </div>
  );
};

export default ProcessStep;
