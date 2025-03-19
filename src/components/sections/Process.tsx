
import { useState, useEffect } from 'react';
import { SearchCheck, BarChart4, Users, Workflow, GanttChartSquare, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProcessStep from '../ui-custom/ProcessStep';

const Process = () => {
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
    
    const element = document.getElementById('process-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const steps = [
    {
      number: 1,
      title: "Research & Analysis",
      description: "We analyze your market, competition, and target audience to identify opportunities using our AI-powered tools.",
      icon: <SearchCheck size={20} />,
      color: "from-mogency-neon-blue to-mogency-neon-purple"
    },
    {
      number: 2,
      title: "Strategy Development",
      description: "Using our findings, we develop a tailored marketing strategy focused on your specific KPIs and business goals.",
      icon: <BarChart4 size={20} />,
      color: "from-mogency-neon-pink to-mogency-neon-purple"
    },
    {
      number: 3,
      title: "Audience Targeting",
      description: "We build detailed audience segments to create personalized marketing campaigns that resonate with your customers.",
      icon: <Users size={20} />,
      color: "from-mogency-neon-purple to-mogency-neon-blue"
    },
    {
      number: 4,
      title: "Workflow Setup",
      description: "Our team sets up automated marketing workflows to save time, reduce errors, and scale your operations.",
      icon: <Workflow size={20} />,
      color: "from-mogency-neon-green to-mogency-neon-blue"
    },
    {
      number: 5,
      title: "Campaign Launch",
      description: "We implement multi-channel campaigns using AI-generated content and creative assets for maximum impact.",
      icon: <GanttChartSquare size={20} />,
      color: "from-mogency-neon-orange to-mogency-neon-pink"
    },
    {
      number: 6,
      title: "Optimization & Growth",
      description: "Continuous monitoring and optimization ensure your marketing efforts consistently improve and deliver better ROI.",
      icon: <Rocket size={20} />,
      color: "from-mogency-neon-pink to-mogency-neon-blue"
    }
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-black/40 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[20%] w-[50%] h-[50%] rounded-full bg-mogency-neon-blue/10 filter blur-3xl" />
      </div>
      
      <div id="process-section" className="section-container relative z-10">
        <div className="text-center mb-20">
          <h2 className={cn(
            "section-title",
            "transform transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className={cn(
            "section-subtitle",
            "transform transition-all duration-700 delay-100",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            We handle everything from research to optimization with our proven approach,
            so you can focus on creating great content.
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
