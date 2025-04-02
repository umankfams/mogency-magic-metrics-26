
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
    sm: 'h-20',
    md: 'h-28',
    lg: 'h-36',
    xl: 'h-44',
    '2xl': 'h-52',
    '3xl': 'h-64',
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
