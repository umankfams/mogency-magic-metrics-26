
import { useState, useEffect } from 'react';
import { MessageSquare, ShoppingCart, Truck, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProcessStep from '../ui-custom/ProcessStep';

const Process = () => {
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
      
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <h2 
            className="section-title"
            data-aos="fade-up"
          >
            How <span className="text-gradient">It Works</span>
          </h2>
          <p 
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            From consultation to delivery, we make finding your perfect vaping setup simple and stress-free. 
            Let our experts guide you every step of the way.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              data-aos="fade-right"
              data-aos-delay={150 * index}
            >
              <ProcessStep 
                number={step.number} 
                title={step.title} 
                description={step.description} 
                icon={step.icon} 
                delay={0} 
                isLast={index === steps.length - 1} 
                color={step.color} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
