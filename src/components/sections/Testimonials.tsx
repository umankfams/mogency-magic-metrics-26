
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import TestimonialCard from '../ui-custom/TestimonialCard';

const Testimonials = () => {
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
    
    const element = document.getElementById('testimonials-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const testimonials = [
    {
      quote: "Working with Mogency transformed our digital product marketing. Their AI-driven approach increased our course sales by over 300% in just two months.",
      author: "Sarah Johnson",
      role: "Founder",
      company: "The Creator Academy"
    },
    {
      quote: "The audience segmentation tools helped us target the right people at the right time. Our conversion rates are up 40% since we started working with Mogency.",
      author: "Michael Chen",
      role: "CEO",
      company: "Digital Mastery"
    },
    {
      quote: "Mogency's marketing automation saved us 20+ hours per week while improving our results. Their team truly understands the creator economy.",
      author: "Emma Rodriguez",
      role: "Marketing Director",
      company: "ContentPro"
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] -right-[20%] w-[50%] h-[50%] rounded-full bg-mogency-blue/5 filter blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[20%] w-[50%] h-[50%] rounded-full bg-mogency-teal/5 filter blur-3xl" />
      </div>
      
      <div id="testimonials-section" className="section-container relative z-10">
        <div className="text-center mb-20">
          <h2 className={cn(
            "section-title",
            "transform transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            What Our <span className="text-gradient">Clients</span> Say
          </h2>
          <p className={cn(
            "section-subtitle",
            "transform transition-all duration-700 delay-100",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            We're proud to have helped content creators and digital product owners achieve 
            remarkable growth through AI-powered marketing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              delay={150 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
