
import { useEffect, useState } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

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

  return (
    <section className="relative min-h-[calc(100vh-6rem)] flex items-center justify-center pt-4 pb-12">
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Platform badges */}
          <div className={cn(
            "flex gap-3 items-center mb-8",
            "transform opacity-0 transition-all duration-700",
            isLoaded && "opacity-100"
          )}>
            <span className="platform-youtube px-3 py-1 text-sm font-medium rounded-full border border-white/10 bg-black/50 backdrop-blur-sm">YouTube</span>
            <span className="platform-instagram px-3 py-1 text-sm font-medium rounded-full border border-white/10 bg-black/50 backdrop-blur-sm">Instagram</span>
            <span className="platform-tiktok px-3 py-1 text-sm font-medium rounded-full border border-white/10 bg-black/50 backdrop-blur-sm">TikTok</span>
          </div>
          
          {/* Main headline - Updated with attention-grabbing design */}
          <div className={cn(
            "mb-6 transform opacity-0 transition-all duration-700 delay-200",
            isLoaded && "opacity-100 animate-subtle-bounce"
          )}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-red-500">
              <span className="inline-block">🚨</span> 
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-500 bg-clip-text text-transparent px-2">
                ATTENTION CREATORS!
              </span> 
              <span className="inline-block">🚨</span>
            </h1>
          </div>
          
          {/* Subheadline */}
          <h2 className={cn(
            "section-title max-w-4xl mb-6",
            "transform opacity-0 transition-all duration-700 delay-300",
            isLoaded && "opacity-100"
          )}>
            You're Sitting on a <span className="neon-text-pink">Goldmine</span> — But Have 
            <span className="bg-neon-gradient bg-clip-text text-transparent ml-2 animate-neon-pulse"> Nothing to Sell</span>
          </h2>
          
          {/* Subtitle */}
          <p className={cn(
            "text-xl text-muted-foreground max-w-2xl mb-6",
            "transform opacity-0 transition-all duration-700 delay-400",
            isLoaded && "opacity-100"
          )}>
            You've got content. An audience. Authority.
            <br />But no product. No offers. No income beyond brand deals or AdSense.
          </p>
          
          {/* CTA button */}
          <div className={cn(
            "flex flex-col sm:flex-row gap-4 mb-16",
            "transform opacity-0 transition-all duration-700 delay-500",
            isLoaded && "opacity-100"
          )}>
            <Button 
              size="lg"
              className="bg-neon-gradient hover:opacity-90 transition-opacity shadow-neon rounded-full px-8"
              onClick={scrollToBookCall}
            >
              <Zap className="mr-2" size={18} />
              <span>Let's Fix That – Book a Free Call</span>
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
          
          {/* Limited spots notice */}
          <div className={cn(
            "px-4 py-2 rounded-lg bg-black/50 border border-mogency-neon-pink/30 mb-8",
            "transform opacity-0 transition-all duration-700 delay-600",
            isLoaded && "opacity-100"
          )}>
            <p className="text-sm text-mogency-neon-pink font-medium">
              ⚠️ Limited spots available this month — we only work with a few creators at a time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
