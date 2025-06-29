
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  className?: string;
}

/**
 * Logo component for Vapetory
 * 
 * This component displays the Vapetory logo as an image
 * with responsive sizing based on the size prop
 */
const Logo = ({ size = 'md', className }: LogoProps) => {
  const sizeClasses = {
    xs: 'h-10',
    sm: 'h-20',
    md: 'h-28',
    lg: 'h-36',
    xl: 'h-44',
    '2xl': 'h-52',
    '3xl': 'h-64',
  };

  return (
    <div className={cn("flex items-center rounded-full", className)}>
      <img 
        src="/lovable-uploads/b3c1612c-c8c7-4148-939d-95deb6d4212b.png" 
        alt="Vapetory - Premium Vape Store" 
        className={cn(sizeClasses[size], "object-contain")}
      />
    </div>
  );
};

export default Logo;
