
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
      description: "Analyze top-performing content and identify gaps and opportunities using AI-powered research tools."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Sales Funnel Optimization",
      description: "Automatically optimize conversion paths and improve sales funnel performance with AI recommendations."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Driven Ad Copy",
      description: "Generate high-converting ad copy variations that resonate with your target audience automatically."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Audience Segmentation",
      description: "Create hyper-targeted marketing campaigns by using AI to identify precise audience segments."
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Trend Analysis",
      description: "Stay ahead of market shifts with AI-powered trend analysis and predictive insights."
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Workflow Automation",
      description: "Streamline your marketing operations with intelligent automation for repetitive tasks."
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[30%] -right-[30%] w-[60%] h-[60%] rounded-full bg-mogency-teal/5 filter blur-3xl" />
      </div>
      
      <div id="features-section" className="section-container relative z-10">
        <div className="text-center mb-20">
          <h2 className={cn(
            "section-title",
            "transform transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            AI-Powered Tools for Modern <span className="text-gradient">Marketers</span>
          </h2>
          <p className={cn(
            "section-subtitle",
            "transform transition-all duration-700 delay-100",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            Our comprehensive suite of AI tools and automation helps you streamline marketing operations,
            generate better content, and boost conversion rates across all channels.
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
