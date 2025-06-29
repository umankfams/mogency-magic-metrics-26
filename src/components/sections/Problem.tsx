
import { useState, useEffect, useRef } from 'react';
import { Ban, Clock, Palette, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const ProblemItem = ({ icon, text, delay }: { icon: React.ReactNode, text: string, delay: number }) => {
  return (
    <div 
      className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6"
      data-aos="fade-right"
      data-aos-delay={delay}
    >
      <div className="bg-black/50 p-1.5 md:p-2 rounded-lg border border-white/10 flex-shrink-0">
        {icon}
      </div>
      <p className="text-base md:text-lg text-white">{text}</p>
    </div>
  );
};

const Problem = () => {
  const isMobile = useIsMobile();

  return (
    <section id="problem" className="py-8 md:py-16">
      <div className="section-container px-4 md:px-6">
        <h2 
          className="section-title text-center mb-6 md:mb-12 text-2xl sm:text-3xl md:text-4xl"
          data-aos="fade-up"
        >
          Why Most Vapers Stay <span className="text-mogency-neon-pink">Frustrated</span>
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <p 
            className="text-lg md:text-xl text-center text-muted-foreground mb-8 md:mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            You want the perfect vaping experience — but where do you start?
          </p>
          
          <div className="space-y-4 md:space-y-6 px-2 sm:px-0">
            <ProblemItem 
              icon={<Clock className="w-5 h-5 md:w-6 md:h-6 text-mogency-neon-blue" />} 
              text="Endless research on devices, coils, and e-liquids, but still can't find what works for you."
              delay={200}
            />
            
            <ProblemItem 
              icon={<Palette className="w-5 h-5 md:w-6 md:h-6 text-mogency-neon-pink" />} 
              text="Overwhelming choices with no clear guidance on what's right for your experience level."
              delay={300}
            />
            
            <ProblemItem 
              icon={<Ban className="w-5 h-5 md:w-6 md:h-6 text-mogency-neon-purple" />} 
              text="Wasted money on devices that don't deliver the satisfaction you're looking for."
              delay={400}
            />
            
            <ProblemItem 
              icon={<DollarSign className="w-5 h-5 md:w-6 md:h-6 text-mogency-neon-green" />} 
              text="So you settle for subpar products... and miss out on the premium vaping experience you deserve."
              delay={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
