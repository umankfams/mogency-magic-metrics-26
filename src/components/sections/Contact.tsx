
import { useState, useEffect } from 'react';
import { ArrowRight, Mail, Send, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    
    const element = document.getElementById('contact-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible."
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div id="contact-section" className="section-container relative z-10">
        <div className="text-center mb-12">
          <h2 className={cn("section-title", "transform transition-all duration-700", isVisible ? "opacity-100" : "opacity-0")}>
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className={cn("section-subtitle max-w-2xl mx-auto mb-8", "transform transition-all duration-700 delay-100", isVisible ? "opacity-100" : "opacity-0")}>
            Ready to turn your audience into a thriving revenue source? Send us a message and let's start the conversation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className={cn("bg-black/40 backdrop-blur-sm border border-mogency-neon-blue/20 rounded-xl p-8", "transform transition-all duration-700 delay-200", isVisible ? "opacity-100" : "opacity-0")}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-black/60 border-mogency-neon-blue/30 focus:border-mogency-neon-blue"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="bg-black/60 border-mogency-neon-blue/30 focus:border-mogency-neon-blue"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Your Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your content, audience size, and goals..."
                  className="bg-black/60 border-mogency-neon-blue/30 focus:border-mogency-neon-blue min-h-[120px]"
                  required
                />
              </div>
              <div className="flex justify-end">
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-neon-gradient hover:opacity-90 transition-opacity shadow-neon rounded-full px-6 py-6 text-base"
                >
                  {isSubmitting ? (
                    <>Processing <Zap className="ml-2 h-4 w-4 animate-pulse" /></>
                  ) : (
                    <>Send Message <Send className="ml-2 h-4 w-4" /></>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
