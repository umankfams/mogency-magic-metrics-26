
import { useState, useEffect } from 'react';
import { MessageSquare, ShoppingCart, Truck, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProcessStep from '../ui-custom/ProcessStep';

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    
    const element = document.getElementById('process-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const steps = [
    {
      number: 1,
      title: "1. Free Consultation",
      description: "Schedule a personalized consultation with our vaping experts. We'll discuss your preferences, experience level, and goals to understand exactly what you're looking for.",
      icon: <MessageSquare size={20} />,
      color: "from-mogency-neon-blue to-mogency-neon-purple"
    },
    {
      number: 2,
      title: "2. Custom Recommendations",
      description: "Based on your consultation, we'll curate a selection of devices, e-liquids, and accessories that perfectly match your needs and budget. No guesswork involved.",
      icon: <ShoppingCart size={20} />,
      color: "from-mogency-neon-pink to-mogency-neon-purple"
    },
    {
      number: 3,
      title: "3. Fast Delivery",
      description: "Get your premium vaping products delivered quickly and securely. We package everything carefully and provide tracking so you know exactly when to expect your order.",
      icon: <Truck size={20} />,
      color: "from-mogency-neon-purple to-mogency-neon-blue"
    },
    {
      number: 4,
      title: "4. Ongoing Support",
      description: "Enjoy lifetime support with maintenance tips, troubleshooting help, and upgrade recommendations. We're here to ensure your vaping experience stays perfect.",
      icon: <Heart size={20} />,
      color: "from-mogency-neon-green to-mogency-neon-blue"
    }
  ];

  return (
    <section id="process" className="py-20 bg-black/40 relative overflow-hidden z-10">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[30%] w-[40%] h-[40%] rounded-full bg-mogency-neon-blue/10 filter blur-3xl" />
      </div>
      
      <div id="process-section" className="section-container relative z-10">
        <div className="text-center mb-20">
          <h2 className={cn("section-title", "transform transition-all duration-700", isVisible ? "opacity-100" : "opacity-0")}>
            How <span className="text-gradient">It Works</span>
          </h2>
          <p className={cn("section-subtitle", "transform transition-all duration-700 delay-100", isVisible ? "opacity-100" : "opacity-0")}>
            From consultation to delivery, we make finding your perfect vaping setup simple and stress-free. 
            Let our experts guide you every step of the way.
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
      </div>
    </section>
  );
};

export default Process;
