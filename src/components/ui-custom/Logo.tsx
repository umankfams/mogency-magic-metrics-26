
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

/**
 * Logo component for Mogency
 * 
 * This component displays the Mogency logo as an image
 * with responsive sizing based on the size prop
 */
const Logo = ({ size = 'md', className }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-10',
    xl: 'h-12',
  };

  return (
    <div className={cn("flex items-center", className)}>
      <img 
        src="/lovable-uploads/ea76e865-89ad-4b19-babf-67cd246abffe.png" 
        alt="Mogency Logo" 
        className={cn(sizeClasses[size], "object-contain")}
      />
    </div>
  );
};

export default Logo;
