
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo = ({ size = 'md', className }: LogoProps) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={cn("font-display font-bold tracking-tight flex items-center gap-1", sizeClasses[size], className)}>
      <span className="text-mogency-neon-blue animate-neon-pulse">M</span>
      <span className="text-mogency-neon-pink animate-neon-pulse delay-75">O</span>
      <span className="text-mogency-neon-purple animate-neon-pulse delay-150">G</span>
      <span className="text-mogency-neon-green animate-neon-pulse delay-225">E</span>
      <span className="text-mogency-neon-blue animate-neon-pulse delay-300">N</span>
      <span className="text-mogency-neon-pink animate-neon-pulse delay-375">C</span>
      <span className="text-mogency-neon-purple animate-neon-pulse delay-450">Y</span>
    </div>
  );
};

export default Logo;
