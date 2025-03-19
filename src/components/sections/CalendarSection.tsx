
import { useState, useEffect } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { Zap } from 'lucide-react';

const CalendarSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  
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
            "transform transition-all duration-700 delay-200 opacity-0 translate-y-8",
            isVisible && "opacity-100 translate-y-0"
          )}>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
              {/* Calendar info */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
                  <Zap size={20} className="mr-2 text-mogency-neon-pink" />
                  Schedule Your Call
                </h3>
                <p className="text-muted-foreground mb-8">
                  Choose a date from the calendar to see available time slots. Our team of experts is ready to discuss
                  how we can help you monetize your audience without upfront costs.
                </p>
                
                {date && (
                  <div className="p-4 bg-mogency-neon-blue/10 rounded-lg border border-mogency-neon-blue/20 mb-8">
                    <p className="text-white font-medium">Selected Date:</p>
                    <p className="text-mogency-neon-blue">{date.toDateString()}</p>
                    <p className="text-muted-foreground text-sm mt-2">
                      After selecting a date, you'll be able to choose a specific time slot.
                    </p>
                  </div>
                )}
                
                <div className="flex items-center space-x-4 mt-8">
                  <p className="text-muted-foreground text-sm">
                    <span className="text-mogency-neon-pink">*</span> No upfront cost - you only pay when we deliver results
                  </p>
                </div>
              </div>
              
              {/* Calendar embed */}
              <div className="md:col-span-3 bg-black/30 p-6 rounded-lg border border-mogency-neon-blue/20">
                <div className="flex justify-center mb-6">
                  {/* This is where you'd normally integrate with a real scheduling tool */}
                  {/* For now, we'll use the UI calendar component */}
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="bg-black/30 border border-mogency-neon-blue/30 rounded-lg shadow-neon"
                  />
                </div>
                
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    For a more complete scheduling experience, you would integrate with Calendly or another scheduling service here.
                  </p>
                  <a 
                    href="https://calendly.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-neon-gradient rounded-md text-white font-medium shadow-neon hover:opacity-90 transition-opacity"
                  >
                    <Zap className="mr-2 h-4 w-4" /> Open Full Calendar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
