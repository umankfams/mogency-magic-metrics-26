
import { cn } from '@/lib/utils';
import Logo from '@/components/ui-custom/Logo';

const Footer = () => {
  return (
    <footer className="bg-black/80 border-t border-mogency-neon-blue/20 py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Logo size="sm" />
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <a href="#" className="text-muted-foreground hover:text-mogency-neon-blue transition-all duration-300">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-mogency-neon-pink transition-all duration-300">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-mogency-neon-purple transition-all duration-300">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-sm text-center text-muted-foreground">
            &copy; {new Date().getFullYear()} Vapetory. All rights reserved.
          </p>
          <p className="text-xs text-center text-muted-foreground/70 mt-2">
            Vape Safer and Healther.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
