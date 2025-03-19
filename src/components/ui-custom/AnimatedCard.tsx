
import { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
  className?: string;
  glowColor?: string;
}

const AnimatedCard = ({ 
  icon, 
  title, 
  description, 
  delay = 0, 
  className,
  glowColor = 'text-mogency-neon-blue'
}: AnimatedCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={cn(
        'card-glass p-6 md:p-8 opacity-0 border-white/5 hover:border-white/10 hover:shadow-neon transition-all duration-500',
        isVisible && 'animate-scale-in',
        className
      )}
    >
      <div className={cn("mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-black/40 backdrop-blur-md animate-neon-pulse", glowColor)}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default AnimatedCard;
