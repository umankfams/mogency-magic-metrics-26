
import { useState, useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div className={cn(
      "card-glass p-6 transition-all duration-500",
      "transform opacity-0 translate-y-8",
      isVisible && "opacity-100 translate-y-0 hover:translate-y-[-5px]"
    )}>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-black/50">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold">{name}</h3>
      </div>
      
      <ul className="space-y-3">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex gap-2">
            <CheckCircle className="shrink-0 w-5 h-5 text-mogency-neon-green mt-0.5" />
            <span className="text-muted-foreground">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Examples = () => {
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
    <section id="examples" className="py-16 relative" ref={sectionRef}>
      <div className="section-container">
        <h2 className={cn(
          "section-title text-center mb-4 transition-all duration-500",
          "opacity-0 translate-y-4",
          isIntersecting && "opacity-100 translate-y-0"
        )}>
          Real Creators. Real Results. <span className="text-mogency-neon-blue">Same Strategy.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <CreatorExample 
            name="Matthew Hussey"
            image="/lovable-uploads/48c4203b-a70f-46eb-8974-dbb32448228d.png"
            achievements={[
              "Built a $5M+ coaching business from dating advice content",
              "Grew email list to over 500,000 subscribers",
              "Launched a $2,000+ coaching program that generates 6-figure months"
            ]}
            delay={200}
          />
          
          <CreatorExample 
            name="Mel Robbins"
            image="/lovable-uploads/74dab9ac-82a4-44bd-a837-8278c6bc8b50.png"
            achievements={[
              "From a 10-minute TED Talk to creating an 8-figure digital product empire",
              "Sold over 1 million copies of her books",
              "Created a $5K online course and monthly paid membership"
            ]}
            delay={400}
          />
          
          <CreatorExample 
            name="Jay Shetty"
            image="/lovable-uploads/0c133f91-ba8e-499e-b896-fde994c25841.png"
            achievements={[
              "Turned viral videos into a $10M+ media business",
              "Launched a $1,500+ online course",
              "Runs a successful certification program for coaches"
            ]}
            delay={600}
          />
          
          <CreatorExample 
            name="Lori Harder"
            image="/lovable-uploads/2435256a-79ee-4733-943f-78d62181bf25.jpg"
            achievements={[
              "Built a multi-7-figure wellness brand through digital courses",
              "Grew audience to over 1 million across social platforms",
              "Launched $500 group coaching programs and $3K+ mentorship offers"
            ]}
            delay={800}
          />
        </div>
        
        <p className={cn(
          "text-center mt-12 text-xl font-medium transition-all duration-500 delay-1000",
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
