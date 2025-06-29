
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { ArrowRight, UserCheck, Zap, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const SolutionCard = ({ 
  icon, 
  title, 
  description, 
  delay,
  color = "mogency-neon-blue"
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string, 
  delay: number,
  color?: string 
}) => {
  // Get the appropriate border and shadow color classes
  const getBorderColor = () => {
    if (color === "mogency-neon-blue") return "border-mogency-neon-blue/30 hover:border-mogency-neon-blue/60";
    if (color === "mogency-neon-pink") return "border-mogency-neon-pink/30 hover:border-mogency-neon-pink/60";
    if (color === "mogency-neon-purple") return "border-mogency-neon-purple/30 hover:border-mogency-neon-purple/60";
    return "border-mogency-neon-blue/30 hover:border-mogency-neon-blue/60";
  };
  
  // Get the appropriate background color for the icon container
  const getIconBgColor = () => {
    if (color === "mogency-neon-blue") return "bg-mogency-neon-blue/10 border-mogency-neon-blue/20";
    if (color === "mogency-neon-pink") return "bg-mogency-neon-pink/10 border-mogency-neon-pink/20";
    if (color === "mogency-neon-purple") return "bg-mogency-neon-purple/10 border-mogency-neon-purple/20";
    return "bg-mogency-neon-blue/10 border-mogency-neon-blue/20";
  };
  
  // Get the appropriate text color for the icon
  const getIconColor = () => {
    if (color === "mogency-neon-blue") return "text-mogency-neon-blue";
    if (color === "mogency-neon-pink") return "text-mogency-neon-pink";
    if (color === "mogency-neon-purple") return "text-mogency-neon-purple";
    return "text-mogency-neon-blue";
  };
  
  return (
    <Card 
      className={cn(
        "card-glass p-5 md:p-6 transition-all duration-500",
        getBorderColor()
      )}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="flex justify-center mb-4">
        <div className={cn("p-3 rounded-full border flex items-center justify-center", getIconBgColor())}>
          {React.cloneElement(icon as React.ReactElement, { 
            className: cn("w-5 h-5 md:w-6 md:h-6", getIconColor()) 
          })}
        </div>
      </div>
      <h3 className="text-lg md:text-xl font-bold text-center mb-2 md:mb-3">{title}</h3>
      <p className="text-sm md:text-base text-muted-foreground text-center">{description}</p>
    </Card>
  );
};

const Solution = ({ id = 'solution' }) => {
  return (
    <section id={id} className="py-12 md:py-16 lg:py-20">
      <div className="section-container px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 
            className="section-title mb-3 md:mb-4"
            data-aos="fade-up"
          >
            Our <span className="neon-text-green">Solution</span>
          </h2>
          
          <p 
            className="section-subtitle max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Experience premium vaping with personalized guidance and expert recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {/* Solution Card 1 */}
          <SolutionCard 
            icon={<UserCheck />}
            title="Personalized Consultation"
            description="Get tailored device and e-liquid recommendations based on your preferences and experience level"
            delay={200}
            color="mogency-neon-blue"
          />

          {/* Solution Card 2 */}
          <SolutionCard 
            icon={<Zap />}
            title="Premium Products"
            description="Access to high-quality devices, premium e-liquids, and authentic accessories from trusted brands"
            delay={300}
            color="mogency-neon-pink"
          />

          {/* Solution Card 3 */}
          <Card 
            className={cn(
              "card-glass md:col-span-2 lg:col-span-1 border-mogency-neon-purple/30 hover:border-mogency-neon-purple/60 p-5 md:p-6",
              "transition-all duration-500"
            )}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-mogency-neon-purple/10 border border-mogency-neon-purple/20 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5 md:w-6 md:h-6 text-mogency-neon-purple" />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-center mb-2 md:mb-3">Ongoing Support</h3>
            <p className="text-sm md:text-base text-muted-foreground text-center">
              Lifetime guidance on maintenance, troubleshooting, and upgrades to keep your vaping experience perfect
            </p>
          </Card>
        </div>

        <div 
          className="flex justify-center mt-8 md:mt-10"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Button 
            variant="outline" 
            className="group border-mogency-neon-blue/30 hover:border-mogency-neon-blue/60 text-white px-5 py-2 md:px-6 md:py-2.5"
            onClick={() => document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Learn More</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solution;
