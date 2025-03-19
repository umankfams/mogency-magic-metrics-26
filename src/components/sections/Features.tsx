
import { useState, useEffect } from 'react';
import { TrendingUp, Users, Zap, Package, CreditCard, Award } from 'lucide-react';
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
      icon: <Package className="w-6 h-6" />,
      title: "Zero Upfront Costs",
      description: "Unlike agencies that charge hefty retainers, we invest in you. We only make money when you do—ensuring we're fully committed to your success.",
      color: "text-mogency-neon-green"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "100% Done For You",
      description: "No need to learn marketing, build funnels, or manage tech. We handle everything while you focus entirely on creating content your audience loves.",
      color: "text-mogency-neon-pink"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Direct Fan Revenue",
      description: "Stop relying on brand deals that undervalue your influence. We help you sell directly to your audience—unlocking income that truly matches your worth.",
      color: "text-mogency-neon-purple"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Audience Monetization",
      description: "We identify what your specific audience will happily pay for and create offers that perfectly match their needs and your expertise.",
      color: "text-mogency-neon-blue"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Predictable Income",
      description: "Transform unpredictable sponsorships into consistent monthly revenue with digital products your audience will purchase again and again.",
      color: "text-mogency-neon-orange"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Implementation",
      description: "We move quickly. From initial call to first sales in weeks, not months—allowing you to see results while others are still planning.",
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
            Why Creators <span className="text-gradient">Choose</span> Mogency
          </h2>
          <p className={cn(
            "section-subtitle",
            "transform transition-all duration-700 delay-100",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            You've built an audience that trusts you. Now it's time to build the revenue stream you deserve—
            without sacrificing your creative freedom or taking on business headaches.
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
