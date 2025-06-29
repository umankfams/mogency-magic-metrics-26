
import { useState, useEffect, useRef } from 'react';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { toast } from "@/hooks/use-toast";

// Declare Calendly as a global type
declare global {
  interface Window {
    Calendly?: any;
  }
}

const BookCallSection = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
      }
    }, {
      threshold: 0.1
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setCalendlyLoaded(true);
    document.body.appendChild(script);

    // Load Calendly styles
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    document.head.appendChild(link);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      // Clean up script and link if component unmounts
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/vapetory/consultation'
      });
    } else {
      // Fallback if Calendly isn't loaded
      window.open('https://calendly.com/vapetory/consultation', '_blank');
    }
  };

  return (
    <section id="book-call" className="py-12 md:py-24" ref={sectionRef}>
      <div className="section-container">
        <div className="card-glass p-6 md:p-12 max-w-4xl mx-auto border border-mogency-neon-blue/30 shadow-[0_0_30px_rgba(14,165,233,0.2)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left column - Info */}
            <div className={cn("transition-all duration-500 delay-100", "opacity-0 translate-y-4", isIntersecting && "opacity-100 translate-y-0")}>
              <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4">
                Book Your <span className="text-mogency-neon-blue">Free Consultation</span>
              </h2>
              
              <div className="space-y-6 text-left">
                <p className="text-sm sm:text-base text-muted-foreground">
                  Our vaping experts are here to help you find the perfect setup. Whether you're new to vaping or looking to upgrade, we'll guide you every step of the way.
                </p>
                
                <div className="flex items-start space-x-3 border-l-2 border-mogency-neon-blue pl-4 py-1">
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Personalized recommendations</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Get device and e-liquid suggestions tailored to your preferences and experience level.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 border-l-2 border-mogency-neon-pink pl-4 py-1">
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Expert guidance</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Learn proper usage, maintenance, and safety tips from our experienced team.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 border-l-2 border-mogency-neon-purple pl-4 py-1">
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Special offers</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Access exclusive deals and starter packages during your consultation.</p>
                  </div>
                </div>

                <div className="hidden md:block pt-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="text-sm text-mogency-neon-blue hover:underline">
                        What happens during the consultation?
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="text-left w-80">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Your 30-minute consultation includes:</p>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• Assessment of your vaping goals and preferences</li>
                          <li>• Device recommendations based on your needs</li>
                          <li>• E-liquid flavor and nicotine strength guidance</li>
                          <li>• Setup assistance and usage tutorials</li>
                          <li>• Exclusive pricing on recommended products</li>
                        </ul>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
            
            {/* Right column - Calendly Button */}
            <div className={cn("transition-all duration-500 delay-200", "opacity-0 translate-y-4", isIntersecting && "opacity-100 translate-y-0", "flex flex-col items-center justify-center")}>
              <div className="text-center space-y-5 w-full max-w-xs">
                <div className="w-16 h-16 rounded-full bg-mogency-neon-blue/20 flex items-center justify-center mx-auto">
                  <CalendarDays className="h-8 w-8 text-mogency-neon-blue" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Ready to elevate your vaping experience?</h3>
                  <p className="text-muted-foreground text-sm">
                    Schedule a free 30-minute consultation with our vaping specialists to find your perfect setup.
                  </p>
                </div>
                
                <Button onClick={openCalendly} className={cn("w-full bg-neon-gradient hover:opacity-90 transition-opacity shadow-neon rounded-full", "text-sm sm:text-base", "px-4 sm:px-6 py-3 sm:py-4")}>
                  <CalendarDays className="mr-2" size={isMobile ? 16 : 20} />
                  <span className="mx-0 text-sm">Schedule Your Free Consultation</span>
                  <ArrowRight className="ml-2" size={isMobile ? 14 : 18} />
                </Button>
                
                <p className="text-xs text-center text-muted-foreground opacity-60">
                  30 minutes. Expert advice. Completely free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCallSection;
