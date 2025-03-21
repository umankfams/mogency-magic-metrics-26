import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Zap, Calendar, CheckCircle } from 'lucide-react';
const CalendarSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
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
  return <section id="contact" className="py-12 md:py-20 bg-black/50 relative overflow-hidden -mt-40 md:-mt-60 z-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden mx-0 py-0 my-[98px]">
        <div className="absolute -bottom-[20%] -right-[20%] w-[50%] h-[50%] rounded-full bg-mogency-neon-purple/10 filter blur-3xl" />
      </div>
      
      <div id="calendar-section" className="section-container relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-black/50 backdrop-blur-sm border border-mogency-neon-blue/30">
            <Zap size={16} className="mr-2 text-mogency-neon-pink" />
            <span className="text-sm font-medium">Only 5 Spots Remaining This Month</span>
          </div>
          
          <h2 className={cn("text-4xl md:text-5xl font-bold tracking-tight", "transform transition-all duration-700", isVisible ? "opacity-100" : "opacity-0")}>
            Book Your <span className="text-gradient">Strategy Call</span> Now
          </h2>
          <p className={cn("mt-3 text-xl text-muted-foreground max-w-2xl mx-auto", "transform transition-all duration-700 delay-100", isVisible ? "opacity-100" : "opacity-0")}>
            Take the first step toward building a sustainable revenue stream from your audience.
            <span className="neon-text-pink block mt-1">We succeed when you succeed — it's that simple.</span>
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className={cn("card-glass p-6 md:p-8 border border-mogency-neon-blue/20 hover:border-mogency-neon-blue/30 transition-all duration-500 rounded-xl overflow-hidden", "transform transition-all duration-700 delay-200", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Calendar info */}
              <div className="md:col-span-4">
                <div className="bg-black/40 rounded-lg p-5 border border-mogency-neon-blue/20 mb-4">
                  <div className="flex items-center mb-3">
                    <Calendar size={24} className="text-mogency-neon-pink mr-3" />
                    <h3 className="text-2xl font-bold text-white">1:1 Strategy Session</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Private consultation with <span className="font-semibold text-white">Momin, the Founder</span>, 
                    who will design a custom monetization strategy specifically for your unique audience.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle size={18} className="text-mogency-neon-green mt-1 mr-3 flex-shrink-0" />
                      <p className="text-sm text-white">Personalized revenue strategy for your specific niche</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={18} className="text-mogency-neon-green mt-1 mr-3 flex-shrink-0" />
                      <p className="text-sm text-white">Actionable implementation plan with clear next steps</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={18} className="text-mogency-neon-green mt-1 mr-3 flex-shrink-0" />
                      <p className="text-sm text-white">Zero technical work for you — we handle everything</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={18} className="text-mogency-neon-green mt-1 mr-3 flex-shrink-0" />
                      <p className="text-sm text-white">Shared success model — we only win when you win</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-black/40 p-4 rounded-lg border border-mogency-neon-pink/20">
                  <p className="text-sm text-center text-white">
                    <span className="font-semibold text-mogency-neon-pink">⚠️ Limited availability:</span> We only partner with 5 new creators each month to ensure exceptional results
                  </p>
                </div>
              </div>
              
              {/* Calendly embed - increased height further to eliminate scrolling */}
              <div className="md:col-span-8 bg-black/30 rounded-lg border border-mogency-neon-blue/20 overflow-hidden h-[850px]">
                {/* Calendly inline widget with increased height */}
                <div className="calendly-inline-widget w-full h-full" data-url="https://calendly.com/gm-agentleadlab/strategy-call" style={{
                minWidth: '320px'
              }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CalendarSection;