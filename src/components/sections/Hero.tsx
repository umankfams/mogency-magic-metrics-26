
import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
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
        <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[50%] rounded-full bg-mogency-blue/10 filter blur-3xl" />
        <div className="absolute -bottom-[30%] -right-[10%] w-[50%] h-[50%] rounded-full bg-mogency-teal/10 filter blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Small badge/pill */}
          <div className={cn(
            "px-4 py-1.5 mb-8 rounded-full bg-white/50 backdrop-blur-sm border border-white/20 shadow-sm",
            "transform opacity-0 transition-all duration-700",
            isLoaded && "opacity-100"
          )}>
            <span className="text-sm font-medium bg-blue-gradient bg-clip-text text-transparent">
              AI-Powered Digital Marketing
            </span>
          </div>
          
          {/* Main headline */}
          <h1 className={cn(
            "section-title max-w-4xl mb-6",
            "transform opacity-0 transition-all duration-700 delay-100",
            isLoaded && "opacity-100"
          )}>
            Scale Your Content Empire with 
            <span className="bg-blue-gradient bg-clip-text text-transparent"> AI-Powered </span> 
            Marketing
          </h1>
          
          {/* Subtitle */}
          <p className={cn(
            "text-xl text-mogency-gray-medium max-w-2xl mb-10",
            "transform opacity-0 transition-all duration-700 delay-200",
            isLoaded && "opacity-100"
          )}>
            Mogency helps content creators build, market, and scale digital products 
            with AI-driven content research, audience segmentation, and automated marketing workflows.
          </p>
          
          {/* CTA buttons */}
          <div className={cn(
            "flex flex-col sm:flex-row gap-4 mb-16",
            "transform opacity-0 transition-all duration-700 delay-300",
            isLoaded && "opacity-100"
          )}>
            <Button 
              size="lg"
              className="bg-blue-gradient hover:opacity-90 transition-opacity shadow-md rounded-full px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-full border-mogency-blue/20 text-mogency-gray-dark hover:bg-mogency-blue/5 px-8"
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
              className="flex flex-col items-center text-mogency-gray-medium hover:text-mogency-blue transition-colors"
            >
              <span className="text-sm mb-2">Discover More</span>
              <ArrowDown size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
