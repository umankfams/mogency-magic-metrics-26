
import { useState, useEffect, useRef } from 'react';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { toast } from "@/hooks/use-toast";

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

  const openCalendly = () => {
    // We're using the Calendly widget now, so we'll just show a toast
    // The actual scheduling will be handled by the Calendly badge widget
    toast({
      title: "Book Your Call",
      description: "Use the blue button in the corner to schedule your free strategy call.",
    });
    
    // This will make the Calendly badge pulse to draw attention
    if (window.Calendly) {
      const badge = document.querySelector('.calendly-badge-widget');
      if (badge) {
        badge.classList.add('pulse');
        // Remove the pulse class after the animation
        setTimeout(() => badge.classList.remove('pulse'), 2000);
      }
    }
  };

  return (
    <section id="book-call" className="py-12 md:py-24" ref={sectionRef}>
      <div className="section-container">
        <div className="card-glass p-6 md:p-12 max-w-4xl mx-auto border border-mogency-neon-blue/30 shadow-[0_0_30px_rgba(14,165,233,0.2)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left column - Info */}
            <div className={cn(
              "transition-all duration-500 delay-100",
              "opacity-0 translate-y-4",
              isIntersecting && "opacity-100 translate-y-0"
            )}>
              <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4">
                Book Your <span className="text-mogency-neon-blue">Free Strategy Call</span>
              </h2>
              
              <div className="space-y-6 text-left">
                <p className="text-sm sm:text-base text-muted-foreground">
                  We only take on a few creators at a time. Let's chat about your audience, content, and how we can help you monetize effectively.
                </p>
                
                <div className="flex items-start space-x-3 border-l-2 border-mogency-neon-blue pl-4 py-1">
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">No pitch. No pressure.</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Just an honest conversation about your goals and how we might help.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 border-l-2 border-mogency-neon-pink pl-4 py-1">
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Custom strategy for your audience</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">We'll analyze your audience and content to find the best monetization approach.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 border-l-2 border-mogency-neon-purple pl-4 py-1">
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Clear next steps</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">You'll leave with actionable ideas whether you work with us or not.</p>
                  </div>
                </div>

                <div className="hidden md:block pt-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="text-sm text-mogency-neon-blue hover:underline">
                        What happens on the call?
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="text-left w-80">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Your 30-minute strategy call includes:</p>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• Analysis of your current content and audience</li>
                          <li>• Product opportunities based on your niche</li>
                          <li>• Monetization strategy customized to your goals</li>
                          <li>• Q&A time for your specific questions</li>
                        </ul>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
            
            {/* Right column - Calendly Button */}
            <div className={cn(
              "transition-all duration-500 delay-200",
              "opacity-0 translate-y-4",
              isIntersecting && "opacity-100 translate-y-0",
              "flex flex-col items-center justify-center" // Updated for better centering
            )}>
              <div className="text-center space-y-5 w-full max-w-xs"> {/* Changed to fixed width for better control */}
                <div className="w-16 h-16 rounded-full bg-mogency-neon-blue/20 flex items-center justify-center mx-auto">
                  <CalendarDays className="h-8 w-8 text-mogency-neon-blue" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Ready to grow your audience revenue?</h3>
                  <p className="text-muted-foreground text-sm">
                    Schedule a free 30-minute call with our team to discuss your content strategy and monetization options.
                  </p>
                </div>
                
                <Button 
                  onClick={openCalendly}
                  className={cn(
                    "w-full bg-neon-gradient hover:opacity-90 transition-opacity shadow-neon rounded-full",
                    "text-sm sm:text-base",
                    "px-4 sm:px-6 py-3 sm:py-4"
                  )}
                >
                  <CalendarDays className="mr-2" size={isMobile ? 16 : 20} />
                  <span>Schedule Your Free Strategy Call</span>
                  <ArrowRight className="ml-2" size={isMobile ? 14 : 18} />
                </Button>
                
                <p className="text-xs text-center text-muted-foreground opacity-60">
                  30 minutes. Zero obligation. Completely free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add a style for the pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.7);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(14, 165, 233, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(14, 165, 233, 0);
          }
        }
        
        :global(.calendly-badge-widget.pulse) {
          animation: pulse 1.5s;
        }
      `}</style>
    </section>
  );
};

export default BookCallSection;
