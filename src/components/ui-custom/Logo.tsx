
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Neon Logo component for Mogency
 * 
 * This component creates a text-based logo with neon letter effects.
 * Each letter has its own color and animation delay to create a pulsating effect.
 * 
 * To recreate this logo:
 * 1. Use a font family with 'font-display' class (SF Pro Display with Inter as fallback)
 * 2. Apply neon colors to individual letters
 * 3. Add animation delays to create the pulsating sequence
 * 4. Use the animate-neon-pulse animation for the glow effect
 */
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
