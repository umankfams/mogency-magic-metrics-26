
import { useState, useEffect } from 'react';
import { CalendarDays } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Logo from '@/components/ui-custom/Logo';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

declare global {
  interface Window {
    Calendly?: any;
  }
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setCalendlyLoaded(true);
    document.body.appendChild(script);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    document.head.appendChild(link);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/mogency-mo/strategy-call'
      });
    } else {
      window.open('https://calendly.com/mogency-mo/strategy-call', '_blank');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'blur-backdrop py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#" 
              className="font-display font-bold tracking-tight flex items-center" 
              aria-label="Mogency Home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <Logo size={isMobile ? "md" : "lg"} />
            </a>
          </div>
          
          <div className="hidden md:flex items-center">
            <Button 
              onClick={openCalendly}
              className="bg-black hover:bg-black/80 border border-mogency-neon-blue shadow-[0_0_15px_rgba(14,165,233,0.5)] hover:shadow-[0_0_20px_rgba(14,165,233,0.7)] transition-all duration-300 rounded-full"
              aria-label="Schedule a free strategy call"
            >
              <CalendarDays className="mr-2 h-4 w-4" />
              <span className="text-mogency-neon-blue animate-neon-pulse">Schedule Your Free Strategy Call</span>
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button 
              onClick={openCalendly}
              className="bg-black hover:bg-black/80 border border-mogency-neon-blue shadow-[0_0_15px_rgba(14,165,233,0.5)] hover:shadow-[0_0_20px_rgba(14,165,233,0.7)] transition-all duration-300 rounded-full"
              aria-label="Schedule a free strategy call on mobile"
              size="sm"
            >
              <CalendarDays className="h-4 w-4 mr-1" />
              <span className="text-mogency-neon-blue animate-neon-pulse text-xs">Book Call</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
