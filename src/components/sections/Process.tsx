
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
      description: "We analyze your market, competition, and target audience to identify opportunities using AI-powered tools.",
      icon: <SearchCheck size={20} />
    },
    {
      number: 2,
      title: "Data-Driven Strategy",
      description: "Using our findings, we develop a tailored marketing strategy focused on your specific KPIs and business goals.",
      icon: <BarChart4 size={20} />
    },
    {
      number: 3,
      title: "Audience Segmentation",
      description: "We build detailed audience segments to create personalized marketing campaigns that resonate with your customers.",
      icon: <Users size={20} />
    },
    {
      number: 4,
      title: "Workflow Automation",
      description: "Our team sets up automated marketing workflows to save time, reduce errors, and scale your operations.",
      icon: <Workflow size={20} />
    },
    {
      number: 5,
      title: "Campaign Execution",
      description: "We implement multi-channel campaigns using AI-generated content and creative assets for maximum impact.",
      icon: <GanttChartSquare size={20} />
    },
    {
      number: 6,
      title: "Optimization & Growth",
      description: "Continuous monitoring and optimization ensure your marketing efforts consistently improve and deliver better ROI.",
      icon: <Rocket size={20} />
    }
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-mogency-gray-light/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[20%] w-[50%] h-[50%] rounded-full bg-mogency-blue/5 filter blur-3xl" />
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
            We follow a proven, data-driven approach to help content creators market and scale
            their digital products effectively.
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
