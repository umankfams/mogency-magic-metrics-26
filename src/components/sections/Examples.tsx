
import { useState, useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface CustomerExampleProps {
  name: string;
  image: string;
  achievements: string[];
  delay?: number;
}

const CustomerExample = ({ 
  name, 
  image,
  achievements, 
  delay = 0
}: CustomerExampleProps) => {
  return (
    <Card 
      className="overflow-hidden border border-white/10 bg-black/80 backdrop-blur-md transition-all duration-500 hover:translate-y-[-5px] hover:shadow-[0_8px_30px_rgba(14,165,233,0.15)]"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <CardContent className="p-4 sm:p-5 md:p-6">
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
          <div className="w-12 h-12 sm:w-16 sm:h-16 relative rounded-full border-2 border-white/10 ring-2 ring-mogency-neon-blue/20 overflow-hidden">
            <AspectRatio ratio={1} className="h-full w-full">
              <img 
                src={image} 
                alt={`${name} profile`}
                className="object-cover h-full w-full"
                style={{ objectPosition: "center top" }}
                loading="lazy"
              />
            </AspectRatio>
          </div>
          <h3 className="text-lg sm:text-xl font-bold">{name}</h3>
        </div>
        
        <ul className="space-y-2.5 sm:space-y-3.5" aria-label={`${name}'s experience`}>
          {achievements.map((achievement, index) => (
            <li key={index} className="flex gap-2.5 items-start group">
              <CheckCircle aria-hidden="true" className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-mogency-neon-green mt-0.5 
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
  return (
    <section id="examples" className="py-12 md:py-16 lg:py-20 relative">
      <div className="section-container">
        <div className="text-center mb-8 md:mb-12">
          <h2 
            className="section-title mb-3 md:mb-4"
            data-aos="fade-up"
          >
            Real Customers. Amazing Results. <span className="text-mogency-neon-blue">Premium Experience.</span>
          </h2>
          
          <p 
            className="section-subtitle max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Vapers who found their perfect setup with Vapetory's expert guidance
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          <CustomerExample 
            name="Sarah M."
            image="/lovable-uploads/ab11a5df-9751-40e1-9a77-5dcfe7a1a563.png"
            achievements={[
              "Upgraded from basic pen to premium pod system",
              "Found perfect nicotine strength and flavor profile",
              "Reduced vaping costs by 40% with right setup"
            ]}
            delay={150}
          />
          
          <CustomerExample 
            name="Mike R."
            image="/lovable-uploads/a4df2000-6f3e-4df0-8f25-aac2aea81ce5.png"
            achievements={[
              "Transitioned from smoking to vaping successfully",
              "Custom coil build consultation improved satisfaction",
              "Now enjoys cloud chasing with advanced mods"
            ]}
            delay={250}
          />
          
          <CustomerExample 
            name="Jessica L."
            image="/lovable-uploads/072e9d74-94dd-4e1e-9387-81f390316f71.png"
            achievements={[
              "Discovered premium dessert flavors that match taste",
              "Learned proper device maintenance and care",
              "Built collection of 5 different devices for occasions"
            ]}
            delay={350}
          />
          
          <CustomerExample 
            name="David K."
            image="/lovable-uploads/ea3c1cb4-3011-4523-ae95-4e0b95c1e9f4.png"
            achievements={[
              "Found discreet setup perfect for work environment",
              "Monthly subscription keeps favorite flavors stocked",
              "Recommended friends who became loyal customers too"
            ]}
            delay={450}
          />
        </div>
        
        <p 
          className="text-center mt-8 sm:mt-10 md:mt-12 text-lg sm:text-xl font-medium"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          They found their perfect vaping experience — <span className="text-mogency-neon-green">and you can too.</span>
        </p>
      </div>
    </section>
  );
};

export default Examples;
