
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

  // Get the appropriate border and shadow color based on glowColor class
  const getBorderColor = () => {
    if (glowColor.includes('blue')) return 'border-mogency-neon-blue/30 hover:border-mogency-neon-blue/60';
    if (glowColor.includes('pink')) return 'border-mogency-neon-pink/30 hover:border-mogency-neon-pink/60';
    if (glowColor.includes('purple')) return 'border-mogency-neon-purple/30 hover:border-mogency-neon-purple/60';
    if (glowColor.includes('green')) return 'border-mogency-neon-green/30 hover:border-mogency-neon-green/60';
    return 'border-mogency-neon-blue/30 hover:border-mogency-neon-blue/60';
  };

  const getShadowColor = () => {
    if (glowColor.includes('blue')) return 'hover:shadow-[0_0_25px_rgba(14,165,233,0.2)]';
    if (glowColor.includes('pink')) return 'hover:shadow-[0_0_25px_rgba(217,70,239,0.2)]';
    if (glowColor.includes('purple')) return 'hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]';
    if (glowColor.includes('green')) return 'hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]';
    return 'hover:shadow-[0_0_25px_rgba(14,165,233,0.2)]';
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        'card-glass p-6 md:p-8 opacity-0 bg-black border transition-all duration-500',
        getBorderColor(),
        getShadowColor(),
        isVisible && 'animate-scale-in',
        className
      )}
    >
      <div className={cn("mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-black border border-black backdrop-blur-md animate-neon-pulse", glowColor)}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default AnimatedCard;
