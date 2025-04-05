
import { useState, useEffect, useRef } from 'react';
import { CalendarDays, ArrowRight, Check, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "@/hooks/use-toast";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  platform: z.string().min(2, {
    message: "Please let us know which platform you create content on.",
  }),
  message: z.string().optional(),
});

const BookCallSection = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      platform: "",
      message: "",
    },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate form submission 
    console.log("Form submitted with values:", values);
    
    try {
      // This would normally be a real API call to send the data
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setShowThankYou(true);
      
      toast({
        title: "Request received!",
        description: "We'll reach out to schedule your call shortly.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calendly popup handler
  const openCalendly = () => {
    // This would typically open your Calendly scheduling page
    window.open("https://calendly.com/your-calendly-link", "_blank");
  };

  return (
    <section id="book-call" className="py-12 md:py-24" ref={sectionRef}>
      <div className="section-container">
        <div className="card-glass p-6 md:p-12 max-w-4xl mx-auto border border-mogency-neon-blue/30 shadow-[0_0_30px_rgba(14,165,233,0.2)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left column - Info */}
            <div className={cn(
              "transition-all duration-500 delay-100",
              "opacity-0 translate-y-4",
              isIntersecting && "opacity-100 translate-y-0"
            )}>
              <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4">
                Book Your <span className="text-mogency-neon-blue">Free Strategy Call</span>
              </h2>
              
              <div className="space-y-6 text-left">
                <p className="text-sm sm:text-base text-muted-foreground">
                  We only take on a few creators at a time. Let's chat about your audience, content, and how we can help you monetize effectively.
                </p>
                
                <div className="flex items-start space-x-3 border-l-2 border-mogency-neon-blue pl-4">
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">No pitch. No pressure.</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Just an honest conversation about your goals and how we might help.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 border-l-2 border-mogency-neon-pink pl-4">
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Custom strategy for your audience</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">We'll analyze your audience and content to find the best monetization approach.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 border-l-2 border-mogency-neon-purple pl-4">
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Clear next steps</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">You'll leave with actionable ideas whether you work with us or not.</p>
                  </div>
                </div>

                <div className="hidden md:block pt-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="text-sm text-mogency-neon-blue hover:underline">
                        What happens on the call?
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="text-left w-80">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Your 30-minute strategy call includes:</p>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• Analysis of your current content and audience</li>
                          <li>• Product opportunities based on your niche</li>
                          <li>• Monetization strategy customized to your goals</li>
                          <li>• Q&A time for your specific questions</li>
                        </ul>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
            
            {/* Right column - Form */}
            <div className={cn(
              "transition-all duration-500 delay-200",
              "opacity-0 translate-y-4",
              isIntersecting && "opacity-100 translate-y-0"
            )}>
              {!showThankYou ? (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="platform"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Content Platform</FormLabel>
                          <FormControl>
                            <Input placeholder="YouTube, Instagram, TikTok, etc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message (optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your audience size, content niche, and what you're hoping to achieve"
                              className="resize-none"
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit"
                      className={cn(
                        "w-full bg-neon-gradient hover:opacity-90 transition-opacity shadow-neon rounded-full mt-6",
                        "text-sm sm:text-base",
                        "px-5 sm:px-6 py-4 sm:py-5"
                      )}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <CalendarDays className="mr-2" size={isMobile ? 16 : 20} />
                          <span>Request Your Free Strategy Call</span>
                          <ArrowRight className="ml-2" size={isMobile ? 14 : 18} />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              ) : (
                <div className={cn(
                  "flex flex-col items-center justify-center h-full text-center p-6 space-y-4",
                  "animate-scale-in"
                )}>
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
                    <Check className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-medium">Thanks for reaching out!</h3>
                  <p className="text-muted-foreground text-sm">
                    We've received your request and will get back to you within 24 hours to schedule your call.
                  </p>
                  <Button 
                    className="bg-neon-gradient hover:opacity-90 transition-opacity shadow-neon rounded-full mt-4"
                    onClick={() => setShowThankYou(false)}
                  >
                    Submit Another Request
                  </Button>
                </div>
              )}
              
              <p className={cn(
                "text-xs sm:text-sm text-center text-muted-foreground mt-4",
                !showThankYou && "opacity-60"
              )}>
                It's free. If you don't love the plan, no hard feelings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCallSection;
