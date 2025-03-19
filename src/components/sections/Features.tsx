
import { useState, useEffect } from 'react';
import { TrendingUp, Users, Zap, Search, LineChart, Workflow } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedCard from '../ui-custom/AnimatedCard';

const Features = () => {
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
    
    const element = document.getElementById('features-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Content Research",
      description: "Our team analyzes top-performing content and identifies gaps and opportunities using AI research tools.",
      color: "text-mogency-neon-blue"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Sales Funnel Optimization",
      description: "We optimize your conversion paths and improve sales funnel performance with our proven methods.",
      color: "text-mogency-neon-pink"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Driven Ad Copy",
      description: "Our specialists generate high-converting ad copy variations that resonate with your target audience.",
      color: "text-mogency-neon-purple"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Audience Segmentation",
      description: "We create hyper-targeted marketing campaigns by identifying precise audience segments for you.",
      color: "text-mogency-neon-green"
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Trend Analysis",
      description: "Our team keeps you ahead of market shifts with advanced trend analysis and predictive insights.",
      color: "text-mogency-neon-orange"
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Workflow Automation",
      description: "We streamline your marketing operations with intelligent automation for all repetitive tasks.",
      color: "text-mogency-neon-blue"
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden bg-black/30">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[30%] -right-[30%] w-[60%] h-[60%] rounded-full bg-mogency-neon-pink/10 filter blur-3xl" />
      </div>
      
      <div id="features-section" className="section-container relative z-10">
        <div className="text-center mb-20">
          <h2 className={cn(
            "section-title",
            "transform transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            We Handle <span className="text-gradient">Everything</span> For You
          </h2>
          <p className={cn(
            "section-subtitle",
            "transform transition-all duration-700 delay-100",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            Our comprehensive DFY service combines AI tools and human expertise to handle all aspects of 
            your digital product marketing with zero upfront costs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={100 * index}
              glowColor={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
