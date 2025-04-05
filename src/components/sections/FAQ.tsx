
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "Do I need a large audience to get started?",
    answer: "Nope! Whether you have 1,000 or 100,000 followers, if you have an engaged audience, we can help you monetize. Our focus is on creating products that resonate with your people."
  },
  {
    question: "What kind of products can I create?",
    answer: "You can create anything that fits your niche — from eBooks and templates to high-ticket coaching programs. We'll help you find the right product to match your content and audience."
  },
  {
    question: "How does the revenue share work?",
    answer: "We work on a revenue share model, meaning we only get paid when you do. We take a percentage of the sales, so there's no upfront cost — you only pay when your product is making money."
  },
  {
    question: "How long does it take to launch my product?",
    answer: "It typically takes 2-4 weeks to get your product live, depending on the complexity. The more content you have ready, the faster we can work!"
  },
  {
    question: "Do I need to do any marketing myself?",
    answer: "Not necessarily. We handle the product creation and launch for you. If you want to promote it to your audience, that's awesome, but we've got proven strategies to help drive organic sales as well."
  },
  {
    question: "What if I don't have a product idea yet?",
    answer: "No worries! If you're unsure about what to create, we'll work with you to brainstorm and come up with something perfect for your audience. From there, we'll handle the tech, design, and launch."
  },
  {
    question: "How do I know I'll make money?",
    answer: "While results vary depending on your niche and audience, our system works. Creators like Matthew Hussey, Mel Robbins, and Jay Shetty have scaled their businesses using this exact model. With the right product and strategy, you're in a great position to generate significant income."
  },
  {
    question: "Do I have to handle customer service?",
    answer: "Nope, we've got you covered! We manage all customer service and support, so you can stay focused on what you do best — creating content."
  },
  {
    question: "Can I set my own prices?",
    answer: "Absolutely! You have control over the pricing of your products. We'll help guide you on what works best based on your audience, but the final decision is yours."
  },
  {
    question: "What's the next step if I'm ready to get started?",
    answer: "Hit the \"Book Now\" button and schedule a free call with us. We'll discuss your goals, your audience, and come up with a personalized strategy to build your digital product."
  }
];

const FAQ = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="faq" className="py-16 relative" ref={sectionRef}>
      <div className="section-container">
        <h2 className={cn(
          "section-title text-center mb-16 transition-all duration-500",
          "opacity-0 translate-y-4",
          isIntersecting && "opacity-100 translate-y-0"
        )}>
          Frequently Asked <span className="text-mogency-neon-blue">Questions</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion 
            type="single" 
            collapsible 
            className={cn(
              "transition-all duration-500 delay-100",
              "opacity-0 translate-y-4",
              isIntersecting && "opacity-100 translate-y-0"
            )}
          >
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
                <AccordionTrigger className="text-lg font-medium py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
