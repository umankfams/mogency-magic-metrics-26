
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Logo from '@/components/ui-custom/Logo';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when user clicks outside
  useEffect(() => {
    if (!isOpen) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.mobile-menu-container') && !target.closest('.mobile-menu-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close mobile menu when a section is clicked
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  // Updated navigation items with correct section IDs
  const navItems = [
    { id: 'solution', label: 'Features' },
    { id: 'process', label: 'Process' },
    { id: 'book-call', label: 'Work With Us', isButton: true }
  ];

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
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              item.isButton ? (
                <Button 
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="bg-black hover:bg-black/80 border border-mogency-neon-blue shadow-[0_0_15px_rgba(14,165,233,0.5)] hover:shadow-[0_0_20px_rgba(14,165,233,0.7)] transition-all duration-300 rounded-full text-base"
                  aria-label={`Go to ${item.label} section`}
                >
                  <span className="text-mogency-neon-blue animate-neon-pulse">{item.label}</span>
                </Button>
              ) : (
                <button 
                  key={index}
                  onClick={() => scrollToSection(item.id)} 
                  className="text-lg text-muted-foreground hover:text-mogency-neon-blue transition-colors"
                  aria-label={`Go to ${item.label} section`}
                >
                  {item.label}
                </button>
              )
            ))}
          </div>
          
          {/* Mobile menu button */}
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

      {/* Mobile menu */}
      <div className={cn(
        'md:hidden transition-all duration-300 overflow-hidden mobile-menu-container',
        isOpen ? 'max-h-screen bg-black/90 backdrop-blur-lg shadow-lg' : 'max-h-0'
      )}>
        <div className="px-4 pt-2 pb-6 space-y-6">
          {navItems.map((item, index) => (
            item.isButton ? (
              <Button 
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="w-full bg-black hover:bg-black/80 border border-mogency-neon-blue shadow-[0_0_15px_rgba(14,165,233,0.5)] hover:shadow-[0_0_20px_rgba(14,165,233,0.7)] transition-all duration-300 rounded-full text-base py-6"
                aria-label={`Go to ${item.label} section on mobile`}
              >
                <span className="text-mogency-neon-blue animate-neon-pulse">{item.label}</span>
              </Button>
            ) : (
              <button 
                key={index}
                onClick={() => scrollToSection(item.id)} 
                className="block w-full text-left text-lg text-muted-foreground hover:text-mogency-neon-blue transition-colors py-4"
                aria-label={`Go to ${item.label} section on mobile`}
              >
                {item.label}
              </button>
            )
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
