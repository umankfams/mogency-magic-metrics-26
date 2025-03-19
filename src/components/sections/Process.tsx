
import { useState, useEffect } from 'react';
import { LightbulbIcon, Package, ShoppingBag, PiggyBank, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProcessStep from '../ui-custom/ProcessStep';
import { Button } from '@/components/ui/button';

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('process-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const steps = [
    {
      number: 1,
      title: "1. Ideation",
      description: "We analyze your content, audience, and niche to identify the perfect digital product that your followers will eagerly purchase. No guesswork, just data-driven decisions.",
      icon: <LightbulbIcon size={20} />,
      color: "from-mogency-neon-blue to-mogency-neon-purple"
    },
    {
      number: 2,
      title: "2. Offer Creation",
      description: "Our team builds your complete digital product package—from content and design to checkout and delivery systems. You review, we handle all the technical details.",
      icon: <Package size={20} />,
      color: "from-mogency-neon-pink to-mogency-neon-purple"
    },
    {
      number: 3,
      title: "3. Marketing & Sales",
      description: "We implement proven sales funnels and marketing campaigns designed specifically for creator audiences. Your offer gets positioned perfectly to maximize conversions.",
      icon: <ShoppingBag size={20} />,
      color: "from-mogency-neon-purple to-mogency-neon-blue"
    },
    {
      number: 4,
      title: "4. Money in Your Pocket",
      description: "Watch sales roll in while we manage customer support, payments, and delivery. You receive regular payouts and detailed performance reports—with zero hassle.",
      icon: <PiggyBank size={20} />,
      color: "from-mogency-neon-green to-mogency-neon-blue"
    }
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-black/40 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[20%] w-[50%] h-[50%] rounded-full bg-mogency-neon-blue/10 filter blur-3xl" />
      </div>
      
      <div id="process-section" className="section-container relative z-10">
        <div className="text-center mb-20">
          <h2 className={cn(
            "section-title",
            "transform transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            How <span className="text-gradient">It Works</span>
          </h2>
          <p className={cn(
            "section-subtitle",
            "transform transition-all duration-700 delay-100",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            From idea to income in four simple steps. You keep creating amazing content while we 
            build and manage the entire revenue machine behind the scenes.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              delay={150 * index}
              isLast={index === steps.length - 1}
              color={step.color}
            />
          ))}
        </div>

        {/* Improved CTA in the process section */}
        <div className={cn(
          "mt-16 rounded-xl max-w-3xl mx-auto overflow-hidden",
          "transform transition-all duration-700 delay-600",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          <div className="bg-black/70 border border-mogency-neon-pink/40 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-3 text-white">Ready to monetize your audience?</h3>
                <p className="text-muted-foreground">
                  Stop leaving money on the table. Book a strategy call with Momin today and discover your audience's revenue potential.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-white">
                    <span className="text-mogency-neon-pink mr-2">•</span>
                    No technical skills needed
                  </li>
                  <li className="flex items-center text-sm text-white">
                    <span className="text-mogency-neon-pink mr-2">•</span>
                    Zero upfront investment
                  </li>
                  <li className="flex items-center text-sm text-white">
                    <span className="text-mogency-neon-pink mr-2">•</span>
                    Results-based partnership
                  </li>
                </ul>
              </div>
              <div className="flex flex-col space-y-4 items-center md:items-end">
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full md:w-auto bg-neon-gradient hover:opacity-90 transition-opacity shadow-neon rounded-full px-8 py-6 text-base"
                >
                  Book Your Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-xs text-mogency-neon-pink/80">
                  Limited spots available this month!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
