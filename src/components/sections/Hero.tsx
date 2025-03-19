
import { useEffect, useState } from 'react';
import { ArrowDown, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[50%] rounded-full bg-mogency-neon-blue/20 filter blur-3xl" />
        <div className="absolute -bottom-[30%] -right-[10%] w-[50%] h-[50%] rounded-full bg-mogency-neon-pink/20 filter blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Small badge/pill */}
          <div className={cn(
            "px-4 py-1.5 mb-8 rounded-full bg-black/50 backdrop-blur-sm border border-mogency-neon-blue/30 shadow-sm",
            "transform opacity-0 transition-all duration-700",
            isLoaded && "opacity-100"
          )}>
            <span className="text-sm font-medium flex items-center gap-2">
              <Zap size={14} className="text-mogency-neon-blue animate-neon-pulse" />
              <span className="neon-text">Done For You Marketing Service</span>
            </span>
          </div>
          
          {/* Main headline */}
          <h1 className={cn(
            "section-title max-w-4xl mb-6",
            "transform opacity-0 transition-all duration-700 delay-100",
            isLoaded && "opacity-100"
          )}>
            Scale Your Content Empire with 
            <span className="bg-neon-gradient bg-clip-text text-transparent ml-2 animate-neon-pulse"> AI-Powered </span> 
            Marketing
          </h1>
          
          {/* Subtitle */}
          <p className={cn(
            "text-xl text-muted-foreground max-w-2xl mb-6",
            "transform opacity-0 transition-all duration-700 delay-200",
            isLoaded && "opacity-100"
          )}>
            Mogency creates, markets, and scales digital products 
            for content creators with no upfront cost.
          </p>

          {/* Second subtitle */}
          <p className={cn(
            "text-lg text-muted-foreground/80 max-w-xl mb-10",
            "transform opacity-0 transition-all duration-700 delay-250",
            isLoaded && "opacity-100"
          )}>
            Our AI-powered team handles everything from audience segmentation to sales funnel optimization.
          </p>
          
          {/* CTA buttons */}
          <div className={cn(
            "flex flex-col sm:flex-row gap-4 mb-16",
            "transform opacity-0 transition-all duration-700 delay-300",
            isLoaded && "opacity-100"
          )}>
            <Button 
              size="lg"
              className="bg-neon-gradient hover:opacity-90 transition-opacity shadow-neon rounded-full px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Zap className="mr-2" size={18} />
              <span>Work With Us</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-full border-mogency-neon-blue/40 text-white hover:bg-mogency-neon-blue/10 px-8"
              onClick={scrollToFeatures}
            >
              Learn More
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className={cn(
            "animate-subtle-bounce cursor-pointer",
            "transform opacity-0 transition-all duration-700 delay-700",
            isLoaded && "opacity-100"
          )}>
            <button 
              onClick={scrollToFeatures}
              aria-label="Scroll to features"
              className="flex flex-col items-center text-muted-foreground hover:text-mogency-neon-pink transition-colors"
            >
              <span className="text-sm mb-2">Discover More</span>
              <ArrowDown size={20} className="animate-neon-pulse text-mogency-neon-pink" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
