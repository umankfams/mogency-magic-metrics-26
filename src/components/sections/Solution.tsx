
import { useState, useEffect, useRef } from 'react';
import { Video, FileText, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

const StepCard = ({ 
  number, 
  icon, 
  title, 
  description, 
  color = "border-mogency-neon-blue shadow-[0_0_15px_rgba(14,165,233,0.3)]",
  delay = 0
}: { 
  number: number, 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  color?: string,
  delay?: number
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div className={cn(
      `card-glass p-6 border ${color} transition-all duration-500`,
      "transform opacity-0 translate-y-8",
      isVisible && "opacity-100 translate-y-0 hover:translate-y-[-5px]"
    )}>
      <div className="flex justify-between items-center mb-4">
        <div className="bg-black/50 p-2.5 rounded-lg">
          {icon}
        </div>
        <span className="text-muted-foreground text-lg font-medium">Step {number}</span>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Solution = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="solution" className="py-16 relative" ref={sectionRef}>
      <div className="section-container">
        <h2 className={cn(
          "section-title text-center mb-4 transition-all duration-500",
          "opacity-0 translate-y-4",
          isIntersecting && "opacity-100 translate-y-0"
        )}>
          We Build & Launch Your Digital Product.
          <br />
          <span className="text-mogency-neon-blue">You Just Keep Creating.</span>
        </h2>
        
        <p className={cn(
          "text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto transition-all duration-500 delay-100",
          "opacity-0 translate-y-4",
          isIntersecting && "opacity-100 translate-y-0"
        )}>
          Ebooks, templates, coaching programs — we handle the strategy, creation, and launch.
          <br />No upfront cost. Revenue share only.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StepCard 
            number={1}
            icon={<Video className="w-6 h-6 text-mogency-neon-blue" />}
            title="You create content (as usual)"
            description="Keep doing what you do best - creating content that resonates with your audience and builds your authority."
            color="border-mogency-neon-blue shadow-[0_0_15px_rgba(14,165,233,0.3)]"
            delay={200}
          />
          
          <StepCard 
            number={2}
            icon={<FileText className="w-6 h-6 text-mogency-neon-pink" />}
            title="We turn your value into a product"
            description="Our team handles the strategy, design, and creation of your digital product from your existing content."
            color="border-mogency-neon-pink shadow-[0_0_15px_rgba(217,70,239,0.3)]"
            delay={400}
          />
          
          <StepCard 
            number={3}
            icon={<Rocket className="w-6 h-6 text-mogency-neon-purple" />}
            title="We launch it. You get paid."
            description="We handle the entire launch, marketing, and sales process. You collect revenue and we split the profits."
            color="border-mogency-neon-purple shadow-[0_0_15px_rgba(139,92,246,0.3)]"
            delay={600}
          />
        </div>

        <p className={cn(
          "text-center mt-10 text-lg font-medium text-mogency-neon-green animate-neon-pulse transition-all duration-500 delay-700",
          "opacity-0",
          isIntersecting && "opacity-100"
        )}>
          Products range from $19 to $5,000+
        </p>
      </div>
    </section>
  );
};

export default Solution;
