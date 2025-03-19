
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Logo from '@/components/ui-custom/Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled ? 'blur-backdrop' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-display font-bold text-2xl tracking-tight flex items-center gap-2">
              <Logo size="lg" />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-muted-foreground hover:text-mogency-neon-blue transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('process')} className="text-muted-foreground hover:text-mogency-neon-pink transition-colors">
              Process
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-muted-foreground hover:text-mogency-neon-purple transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-mogency-neon-green transition-colors">
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-black hover:bg-black/80 border border-mogency-neon-blue shadow-[0_0_15px_rgba(14,165,233,0.5)] hover:shadow-[0_0_20px_rgba(14,165,233,0.7)] transition-all duration-300 rounded-full"
            >
              <span className="text-mogency-neon-blue animate-neon-pulse">Work With Us</span>
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-mogency-neon-blue focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        'md:hidden transition-all duration-300 overflow-hidden',
        isOpen ? 'max-h-screen bg-black/90 backdrop-blur-lg shadow-lg' : 'max-h-0'
      )}>
        <div className="px-4 pt-2 pb-4 space-y-4">
          <button onClick={() => scrollToSection('features')} className="block text-muted-foreground hover:text-mogency-neon-blue transition-colors py-2">
            Features
          </button>
          <button onClick={() => scrollToSection('process')} className="block text-muted-foreground hover:text-mogency-neon-pink transition-colors py-2">
            Process
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="block text-muted-foreground hover:text-mogency-neon-purple transition-colors py-2">
            Testimonials
          </button>
          <button onClick={() => scrollToSection('contact')} className="block text-muted-foreground hover:text-mogency-neon-green transition-colors py-2">
            Contact
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="w-full bg-black hover:bg-black/80 border border-mogency-neon-blue shadow-[0_0_15px_rgba(14,165,233,0.5)] hover:shadow-[0_0_20px_rgba(14,165,233,0.7)] transition-all duration-300 rounded-full"
          >
            <span className="text-mogency-neon-blue animate-neon-pulse">Work With Us</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
