
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
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
    sm: 'h-16',
    md: 'h-24',
    lg: 'h-32',
    xl: 'h-40',
    '2xl': 'h-48',
    '3xl': 'h-56',
  };

  return (
    <div className={cn("flex items-center", className)}>
      <img 
        src="/lovable-uploads/ea76e865-89ad-4b19-babf-67cd246abffe.png" 
        alt="Mogency - Digital Agency for Content Creators" 
        className={cn(sizeClasses[size], "object-contain")}
      />
    </div>
  );
};

export default Logo;
