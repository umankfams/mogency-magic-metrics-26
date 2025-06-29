
import { useState, useEffect, useRef } from 'react';
import { Zap, Droplets, Wrench, Battery, Cpu, Flame, Shield, Package } from 'lucide-react';
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
          Premium Products We <span className="text-mogency-neon-pink">Offer</span>
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          <ProductCard 
            icon={<Zap className="w-6 h-6 text-mogency-neon-blue" />}
            title="Pod Systems"
            delay={100}
          />
          
          <ProductCard 
            icon={<Battery className="w-6 h-6 text-mogency-neon-pink" />}
            title="Box Mods"
            delay={200}
          />
          
          <ProductCard 
            icon={<Droplets className="w-6 h-6 text-mogency-neon-purple" />}
            title="Premium E-Liquids"
            delay={300}
          />
          
          <ProductCard 
            icon={<Flame className="w-6 h-6 text-mogency-neon-green" />}
            title="Coils & Atomizers"
            delay={400}
          />
          
          <ProductCard 
            icon={<Cpu className="w-6 h-6 text-mogency-neon-blue" />}
            title="Advanced Mods"
            delay={500}
          />
          
          <ProductCard 
            icon={<Shield className="w-6 h-6 text-mogency-neon-pink" />}
            title="Safety Accessories"
            delay={600}
          />
          
          <ProductCard 
            icon={<Wrench className="w-6 h-6 text-mogency-neon-purple" />}
            title="DIY Kits"
            delay={700}
          />
          
          <ProductCard 
            icon={<Package className="w-6 h-6 text-mogency-neon-green" />}
            title="Starter Bundles"
            delay={800}
          />
        </div>
        
        <p className={cn(
          "text-center mt-10 text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-500 delay-900",
          "opacity-0",
          isIntersecting && "opacity-100"
        )}>
          From beginner-friendly setups to advanced modifications, we have everything you need for the perfect vaping experience.
        </p>
      </div>
    </section>
  );
};

export default Products;
