
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Zap } from 'lucide-react';

const CalendarSection = () => {
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
    
    const element = document.getElementById('calendar-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="py-20 md:py-32 bg-black/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-[20%] -right-[20%] w-[50%] h-[50%] rounded-full bg-mogency-neon-purple/10 filter blur-3xl" />
      </div>
      
      <div id="calendar-section" className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className={cn(
            "section-title",
            "transform transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            Book a <span className="text-gradient">Strategy Call</span>
          </h2>
          <p className={cn(
            "section-subtitle",
            "transform transition-all duration-700 delay-100",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            Ready to turn your audience into revenue? Choose a time that works for you,
            and let's discuss how we can help you <span className="neon-text-pink">scale your content</span>.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className={cn(
            "card-glass p-8 md:p-10 border border-mogency-neon-blue/20 hover:border-mogency-neon-blue/30 transition-all duration-500",
            "transform transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
              {/* Calendar info */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
                  <Zap size={20} className="mr-2 text-mogency-neon-pink" />
                  Schedule Your Call
                </h3>
                <p className="text-muted-foreground mb-8">
                  Choose a time slot that works for you. Our team of experts is ready to discuss
                  how we can help you monetize your audience without upfront costs.
                </p>
                
                <div className="flex items-center space-x-4 mt-8">
                  <p className="text-muted-foreground text-sm">
                    <span className="text-mogency-neon-pink">*</span> No upfront cost - you only pay when we deliver results
                  </p>
                </div>
              </div>
              
              {/* Calendly embed */}
              <div className="md:col-span-3 bg-black/30 p-6 rounded-lg border border-mogency-neon-blue/20 h-[500px]">
                {/* Calendly inline widget */}
                <div 
                  className="calendly-inline-widget w-full h-full" 
                  data-url="https://calendly.com/your-calendly-url"
                  style={{ minWidth: '320px' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
