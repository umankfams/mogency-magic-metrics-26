
import { useState, useEffect, useRef } from 'react';
import { FileText, Video, Mail, Users, Monitor, Star, CreditCard } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProductCard = ({ 
  icon, 
  title, 
  delay = 0
}: { 
  icon: React.ReactNode, 
  title: string, 
  delay?: number
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div className={cn(
      "card-glass p-4 flex flex-col items-center justify-center text-center transition-all duration-500",
      "transform opacity-0 scale-95",
      isVisible && "opacity-100 scale-100 hover:border-mogency-neon-blue/50"
    )}>
      <div className="bg-black/50 p-3 rounded-full mb-3">
        {icon}
      </div>
      <h3 className="text-lg font-medium">{title}</h3>
    </div>
  );
};

const Products = () => {
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
    <section id="products" className="py-16 relative" ref={sectionRef}>
      <div className="section-container">
        <h2 className={cn(
          "section-title text-center mb-10 transition-all duration-500",
          "opacity-0 translate-y-4",
          isIntersecting && "opacity-100 translate-y-0"
        )}>
          What We Can Help You <span className="text-mogency-neon-pink">Create</span>
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          <ProductCard 
            icon={<FileText className="w-6 h-6 text-mogency-neon-blue" />}
            title="Notion templates"
            delay={100}
          />
          
          <ProductCard 
            icon={<FileText className="w-6 h-6 text-mogency-neon-pink" />}
            title="Digital guides & PDFs"
            delay={200}
          />
          
          <ProductCard 
            icon={<Mail className="w-6 h-6 text-mogency-neon-purple" />}
            title="Email courses"
            delay={300}
          />
          
          <ProductCard 
            icon={<Monitor className="w-6 h-6 text-mogency-neon-green" />}
            title="Live & pre-recorded workshops"
            delay={400}
          />
          
          <ProductCard 
            icon={<Star className="w-6 h-6 text-mogency-neon-blue" />}
            title="1:1 coaching programs"
            delay={500}
          />
          
          <ProductCard 
            icon={<Users className="w-6 h-6 text-mogency-neon-pink" />}
            title="High-ticket group offers"
            delay={600}
          />
          
          <ProductCard 
            icon={<Users className="w-6 h-6 text-mogency-neon-purple" />}
            title="Paid community"
            delay={700}
          />
          
          <ProductCard 
            icon={<CreditCard className="w-6 h-6 text-mogency-neon-green" />}
            title="Subscriptions"
            delay={800}
          />
        </div>
        
        <p className={cn(
          "text-center mt-10 text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-500 delay-900",
          "opacity-0",
          isIntersecting && "opacity-100"
        )}>
          We design your offer around your niche, audience, and energy level.
        </p>
      </div>
    </section>
  );
};

export default Products;
