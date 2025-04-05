import { useState, useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const CreatorExample = ({ 
  name, 
  image,
  achievements, 
  delay = 0
}: { 
  name: string, 
  image: string,
  achievements: string[], 
  delay?: number
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Reduce animation delays on mobile for better UX
    const adjustedDelay = isMobile ? delay * 0.5 : delay;
    const timer = setTimeout(() => setIsVisible(true), adjustedDelay);
    return () => clearTimeout(timer);
  }, [delay, isMobile]);
  
  return (
    <Card className={cn(
      "overflow-hidden border border-white/10 bg-black/80 backdrop-blur-md transition-all duration-500",
      "transform opacity-0 translate-y-8",
      isVisible && "opacity-100 translate-y-0 hover:translate-y-[-5px] hover:shadow-[0_8px_30px_rgba(14,165,233,0.15)]"
    )}>
      <CardContent className="p-4 sm:p-5 md:p-6">
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
          <div className="w-12 h-12 sm:w-16 sm:h-16 relative rounded-full border-2 border-white/10 ring-2 ring-mogency-neon-blue/20 overflow-hidden">
            <AspectRatio ratio={1} className="h-full w-full">
              <img 
                src={image} 
                alt={name} 
                className="object-cover h-full w-full"
              />
            </AspectRatio>
          </div>
          <h3 className="text-lg sm:text-xl font-bold">{name}</h3>
        </div>
        
        <ul className="space-y-2.5 sm:space-y-3.5">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex gap-2.5 items-start group">
              <CheckCircle className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-mogency-neon-green mt-0.5 
                group-hover:text-mogency-neon-green/90 transition-colors duration-300" />
              <span className="text-sm sm:text-base text-muted-foreground group-hover:text-white/90 transition-colors duration-300">
                {achievement}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const Examples = () => {
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
      // Lower threshold for mobile to trigger animations earlier
      { threshold: isMobile ? 0.05 : 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isMobile]);

  return (
    <section id="examples" className="py-12 md:py-16 lg:py-20 relative" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-8 md:mb-12">
          <h2 className={cn(
            "section-title mb-3 md:mb-4 transition-all duration-500",
            "opacity-0 translate-y-4",
            isIntersecting && "opacity-100 translate-y-0"
          )}>
            Real Creators. Real Results. <span className="text-mogency-neon-blue">Same Strategy.</span>
          </h2>
          
          <p className={cn(
            "section-subtitle max-w-2xl mx-auto",
            "opacity-0 translate-y-4 transition-all duration-500 delay-100",
            isIntersecting && "opacity-100 translate-y-0"
          )}>
            Creators who transformed their audiences into sustainable revenue streams
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          <CreatorExample 
            name="Matthew Hussey"
            image="/lovable-uploads/ab11a5df-9751-40e1-9a77-5dcfe7a1a563.png"
            achievements={[
              "Built a $5M+ coaching business from dating advice content",
              "Grew email list to over 500,000 subscribers",
              "Launched a $2,000+ coaching program that generates 6-figure months"
            ]}
            delay={150}
          />
          
          <CreatorExample 
            name="Mel Robbins"
            image="/lovable-uploads/a4df2000-6f3e-4df0-8f25-aac2aea81ce5.png"
            achievements={[
              "From a 10-minute TED Talk to creating an 8-figure digital product empire",
              "Sold over 1 million copies of her books",
              "Created a $5K online course and monthly paid membership"
            ]}
            delay={250}
          />
          
          <CreatorExample 
            name="Jay Shetty"
            image="/lovable-uploads/072e9d74-94dd-4e1e-9387-81f390316f71.png"
            achievements={[
              "Turned viral videos into a $10M+ media business",
              "Launched a $1,500+ online course",
              "Runs a successful certification program for coaches"
            ]}
            delay={350}
          />
          
          <CreatorExample 
            name="Lori Harder"
            image="/lovable-uploads/ea3c1cb4-3011-4523-ae95-4e0b95c1e9f4.png"
            achievements={[
              "Built a multi-7-figure wellness brand through digital courses",
              "Grew audience to over 1 million across social platforms",
              "Launched $500 group coaching programs and $3K+ mentorship offers"
            ]}
            delay={450}
          />
        </div>
        
        <p className={cn(
          "text-center mt-8 sm:mt-10 md:mt-12 text-lg sm:text-xl font-medium transition-all duration-500 delay-500",
          "opacity-0",
          isIntersecting && "opacity-100"
        )}>
          They used content to build cashflow — <span className="text-mogency-neon-green">and you can too.</span>
        </p>
      </div>
    </section>
  );
};

export default Examples;
