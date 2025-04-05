
import { useEffect, useState } from 'react';
import { ArrowRight, Zap, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  const scrollToBookCall = () => {
    const bookCallSection = document.getElementById('book-call');
    if (bookCallSection) {
      bookCallSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    // Scroll to the next section (Problem section)
    window.scrollBy({
      top: window.innerHeight * 0.75,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center pt-4 pb-8 md:pb-12">
      <div className="section-container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Platform badges */}
          <div className={cn(
            "flex flex-wrap justify-center gap-2 md:gap-3 items-center mb-4 md:mb-8",
            "transform opacity-0 transition-all duration-700",
            isLoaded && "opacity-100"
          )}>
            <span className="platform-youtube px-2 md:px-3 py-1 text-xs md:text-sm font-medium rounded-full border border-white/10 bg-black/50 backdrop-blur-sm">YouTube</span>
            <span className="platform-instagram px-2 md:px-3 py-1 text-xs md:text-sm font-medium rounded-full border border-white/10 bg-black/50 backdrop-blur-sm">Instagram</span>
            <span className="platform-tiktok px-2 md:px-3 py-1 text-xs md:text-sm font-medium rounded-full border border-white/10 bg-black/50 backdrop-blur-sm">TikTok</span>
          </div>
          
          {/* Main headline - Updated with attention-grabbing design and improved mobile sizing */}
          <div className={cn(
            "mb-3 md:mb-6 transform opacity-0 transition-all duration-700 delay-200",
            isLoaded && "opacity-100 animate-subtle-bounce"
          )}>
            <h1 className={cn(
              "font-bold text-red-500",
              "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            )}>
              <span className="inline-block">🚨</span> 
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-500 bg-clip-text text-transparent px-1 md:px-2">
                ATTENTION CREATORS!
              </span> 
              <span className="inline-block">🚨</span>
            </h1>
          </div>
          
          {/* Subheadline with improved mobile sizing */}
          <h2 className={cn(
            "mb-3 md:mb-6 font-display font-bold px-1",
            "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
            "transform opacity-0 transition-all duration-700 delay-300",
            isLoaded && "opacity-100"
          )}>
            You're Sitting on a <span className="neon-text-pink">Goldmine</span> — But Have 
            <span className="bg-neon-gradient bg-clip-text text-transparent ml-1 md:ml-2 animate-neon-pulse"> Nothing to Sell</span>
          </h2>
          
          {/* Subtitle with improved mobile spacing */}
          <p className={cn(
            "text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mb-5 md:mb-6 px-2",
            "transform opacity-0 transition-all duration-700 delay-400",
            isLoaded && "opacity-100"
          )}>
            You've got content. An audience. Authority.
            <br className="hidden sm:block" />
            But no product. No offers. No income beyond brand deals or AdSense.
          </p>
          
          {/* CTA button with improved mobile styling */}
          <div className={cn(
            "flex flex-col gap-4 mb-8 md:mb-12 lg:mb-16 w-full px-4 sm:px-0 sm:w-auto",
            "transform opacity-0 transition-all duration-700 delay-500",
            isLoaded && "opacity-100"
          )}>
            <Button 
              size="default"
              className={cn(
                "bg-neon-gradient hover:opacity-90 transition-opacity shadow-neon rounded-full",
                "px-5 sm:px-6 md:px-8 py-5 sm:py-6 text-sm sm:text-base md:text-lg",
                "w-full sm:w-auto"
              )}
              onClick={scrollToBookCall}
            >
              <Zap className="mr-2" size={isMobile ? 16 : 18} />
              <span>Let's Fix That – Book a Free Call</span>
              <ArrowRight className="ml-1 md:ml-2" size={isMobile ? 14 : 16} />
            </Button>
          </div>
          
          {/* Limited spots notice with improved mobile styling */}
          <div className={cn(
            "px-3 md:px-4 py-2 rounded-lg bg-black/50 border border-mogency-neon-pink/30 mb-5 md:mb-8",
            "transform opacity-0 transition-all duration-700 delay-600 max-w-[90%] sm:max-w-md md:max-w-lg",
            isLoaded && "opacity-100"
          )}>
            <p className="text-xs md:text-sm text-mogency-neon-pink font-medium">
              ⚠️ Limited spots available this month — we only work with a few creators at a time
            </p>
          </div>
          
          {/* Mobile scroll indicator */}
          {isMobile && (
            <div className={cn(
              "absolute bottom-4 left-0 right-0 mx-auto text-center animate-bounce opacity-0 transition-opacity duration-1000 delay-1000",
              isLoaded && "opacity-70"
            )}>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-10 w-10 rounded-full bg-black/30 border border-white/10"
                onClick={scrollToNext}
              >
                <ChevronDown size={20} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
