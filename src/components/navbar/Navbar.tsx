import { useState, useEffect } from 'react';
import { Menu, X, CalendarDays } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Logo from '@/components/ui-custom/Logo';
import { useIsMobile } from '@/hooks/use-mobile';

declare global {
  interface Window {
    Calendly?: any;
  }
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsOpen(!isOpen);

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
      setIsOpen(false);
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
            <button
              onClick={toggleMenu}
              className="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-mogency-neon-blue focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={cn(
        'md:hidden transition-all duration-300 overflow-hidden mobile-menu-container',
        isOpen ? 'max-h-screen bg-black/90 backdrop-blur-lg shadow-lg' : 'max-h-0'
      )}>
        <div className="px-4 pt-2 pb-6 space-y-6">
          <Button 
            onClick={openCalendly}
            className="w-full bg-black hover:bg-black/80 border border-mogency-neon-blue shadow-[0_0_15px_rgba(14,165,233,0.5)] hover:shadow-[0_0_20px_rgba(14,165,233,0.7)] transition-all duration-300 rounded-full text-base py-6"
            aria-label="Schedule a free strategy call on mobile"
          >
            <CalendarDays className="mr-2 h-4 w-4" />
            <span className="text-mogency-neon-blue animate-neon-pulse">Schedule Your Free Strategy Call</span>
          </Button>
          
          <button 
            onClick={() => scrollToSection('solution')} 
            className="block w-full text-left text-lg text-muted-foreground hover:text-mogency-neon-blue transition-colors py-4"
            aria-label="Go to Features section on mobile"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('process')} 
            className="block w-full text-left text-lg text-muted-foreground hover:text-mogency-neon-blue transition-colors py-4"
            aria-label="Go to Process section on mobile"
          >
            Process
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
