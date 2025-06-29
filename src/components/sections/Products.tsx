
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
  return (
    <div 
      className="card-glass p-4 flex flex-col items-center justify-center text-center transition-all duration-500 hover:border-mogency-neon-blue/50"
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <div className="bg-black/50 p-3 rounded-full mb-3">
        {icon}
      </div>
      <h3 className="text-lg font-medium">{title}</h3>
    </div>
  );
};

const Products = () => {
  return (
    <section id="products" className="py-16 relative">
      <div className="section-container">
        <h2 
          className="section-title text-center mb-10"
          data-aos="fade-up"
        >
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
        
        <p 
          className="text-center mt-10 text-lg text-muted-foreground max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          From beginner-friendly setups to advanced modifications, we have everything you need for the perfect vaping experience.
        </p>
      </div>
    </section>
  );
};

export default Products;
