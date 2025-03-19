
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
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
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-black/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-[20%] -right-[20%] w-[50%] h-[50%] rounded-full bg-mogency-neon-purple/10 filter blur-3xl" />
      </div>
      
      <div id="contact-section" className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className={cn(
            "section-title",
            "transform transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            Ready to <span className="text-gradient">Scale</span> Your Content?
          </h2>
          <p className={cn(
            "section-subtitle",
            "transform transition-all duration-700 delay-100",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            Get in touch with our team to see how we can help you grow your digital products
            with AI-powered marketing at <span className="neon-text-pink">no upfront cost</span>.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className={cn(
            "card-glass p-8 md:p-10 border border-mogency-neon-blue/20 hover:border-mogency-neon-blue/30 transition-all duration-500",
            "transform transition-all duration-700 delay-200 opacity-0 translate-y-8",
            isVisible && "opacity-100 translate-y-0"
          )}>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
              {/* Contact info */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
                  <Zap size={20} className="mr-2 text-mogency-neon-pink" />
                  Get in Touch
                </h3>
                <p className="text-muted-foreground mb-8">
                  Ready to scale your digital products? Our team of experts is here to help you succeed, 
                  and you only pay when we deliver results.
                </p>
                
                <div className="flex items-center mb-4">
                  <Mail className="mr-3 text-mogency-neon-blue" size={20} />
                  <a href="mailto:hello@mogency.com" className="text-muted-foreground hover:text-mogency-neon-blue transition-colors">
                    hello@mogency.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-4 mt-8">
                  {/* Social icons would go here */}
                </div>
              </div>
              
              {/* Contact form */}
              <div className="md:col-span-3">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full bg-black/40 border-mogency-neon-blue/20 text-white"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        required
                        className="w-full bg-black/40 border-mogency-neon-blue/20 text-white"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project and goals"
                        required
                        className="w-full min-h-[120px] bg-black/40 border-mogency-neon-blue/20 text-white"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-neon-gradient hover:opacity-90 transition-opacity shadow-neon"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          Sending <Send className="ml-2 h-4 w-4 animate-pulse" />
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Zap className="mr-2 h-4 w-4" /> Start Scaling Your Content
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
