
import { useState, useEffect, useRef } from 'react';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const BookCallSection = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Calendly popup handler
  const openCalendly = () => {
    // This would typically open your Calendly scheduling page
    window.open("https://calendly.com/your-calendly-link", "_blank");
  };

  return (
    <section id="book-call" className="py-16" ref={sectionRef}>
      <div className="section-container">
        <div className="card-glass p-6 md:p-12 max-w-3xl mx-auto border border-mogency-neon-blue/30 shadow-[0_0_30px_rgba(14,165,233,0.2)]">
          <div className="text-center">
            <h2 className={cn(
              "text-2xl md:text-3xl lg:text-4xl font-bold mb-4 transition-all duration-500",
              "opacity-0 translate-y-4",
              isIntersecting && "opacity-100 translate-y-0"
            )}>
              Book Your <span className="text-mogency-neon-blue">Free Strategy Call</span>
            </h2>
            
            <p className={cn(
              "text-base md:text-lg text-muted-foreground mb-8 transition-all duration-500 delay-100",
              "opacity-0 translate-y-4",
              isIntersecting && "opacity-100 translate-y-0"
            )}>
              We only take on a few creators at a time.
              <br />No pitch. No pressure. Just strategy.
            </p>
            
            <Button 
              size={isMobile ? "default" : "lg"}
              className={cn(
                "bg-neon-gradient hover:opacity-90 transition-opacity shadow-neon rounded-full",
                isMobile ? "px-6 py-5 text-base w-full" : "px-8 py-6 text-lg",
                "transition-all duration-500 delay-200",
                "opacity-0 scale-95",
                isIntersecting && "opacity-100 scale-100"
              )}
              onClick={openCalendly}
            >
              <CalendarDays className="mr-2" size={isMobile ? 18 : 20} />
              <span>Book Now — Let's Build Your Product</span>
              <ArrowRight className="ml-2" size={isMobile ? 16 : 18} />
            </Button>
            
            <p className={cn(
              "text-sm text-muted-foreground mt-6 transition-all duration-500 delay-300",
              "opacity-0",
              isIntersecting && "opacity-100"
            )}>
              It's free. If you don't love the plan, no hard feelings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCallSection;
