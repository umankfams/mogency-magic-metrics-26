
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Plus, Minus } from 'lucide-react';
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";

type FAQItem = {
  question: string;
  answer: string;
  category?: string;
};

const faqItems: FAQItem[] = [
  {
    question: "Do I need a large audience to get started?",
    answer: "Nope! Whether you have 1,000 or 100,000 followers, if you have an engaged audience, we can help you monetize. Our focus is on creating products that resonate with your people.",
    category: "Getting Started"
  },
  {
    question: "What kind of products can I create?",
    answer: "You can create anything that fits your niche — from eBooks and templates to high-ticket coaching programs. We'll help you find the right product to match your content and audience.",
    category: "Getting Started"
  },
  {
    question: "How does the revenue share work?",
    answer: "We work on a revenue share model, meaning we only get paid when you do. We take a percentage of the sales, so there's no upfront cost — you only pay when your product is making money.",
    category: "Payments"
  },
  {
    question: "How long does it take to launch my product?",
    answer: "It typically takes 2-4 weeks to get your product live, depending on the complexity. The more content you have ready, the faster we can work!",
    category: "Process"
  },
  {
    question: "Do I need to do any marketing myself?",
    answer: "Not necessarily. We handle the product creation and launch for you. If you want to promote it to your audience, that's awesome, but we've got proven strategies to help drive organic sales as well.",
    category: "Marketing"
  },
  {
    question: "What if I don't have a product idea yet?",
    answer: "No worries! If you're unsure about what to create, we'll work with you to brainstorm and come up with something perfect for your audience. From there, we'll handle the tech, design, and launch.",
    category: "Getting Started"
  },
  {
    question: "How do I know I'll make money?",
    answer: "While results vary depending on your niche and audience, our system works. Creators like Matthew Hussey, Mel Robbins, and Jay Shetty have scaled their businesses using this exact model. With the right product and strategy, you're in a great position to generate significant income.",
    category: "Results"
  },
  {
    question: "Do I have to handle customer service?",
    answer: "Nope, we've got you covered! We manage all customer service and support, so you can stay focused on what you do best — creating content.",
    category: "Process"
  },
  {
    question: "Can I set my own prices?",
    answer: "Absolutely! You have control over the pricing of your products. We'll help guide you on what works best based on your audience, but the final decision is yours.",
    category: "Payments"
  },
  {
    question: "What's the next step if I'm ready to get started?",
    answer: "Hit the \"Book Now\" button and schedule a free call with us. We'll discuss your goals, your audience, and come up with a personalized strategy to build your digital product.",
    category: "Getting Started"
  }
];

const FAQ = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Extract unique categories
    const uniqueCategories = Array.from(new Set(faqItems.map(item => item.category || 'General')));
    setCategories(uniqueCategories);
    
    // Set first category as active by default
    if (uniqueCategories.length > 0) {
      setActiveCategory(uniqueCategories[0]);
    }
  }, []);

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

  const toggleItem = (itemId: string) => {
    if (openItems.includes(itemId)) {
      setOpenItems(openItems.filter(id => id !== itemId));
    } else {
      setOpenItems([...openItems, itemId]);
    }
  };

  const filteredItems = activeCategory 
    ? faqItems.filter(item => (item.category || 'General') === activeCategory)
    : faqItems;

  return (
    <section id="faq" className="py-16 relative" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-[20%] left-[30%] w-[40%] h-[40%] rounded-full bg-mogency-neon-blue/10 filter blur-3xl" />
        <div className="absolute bottom-[20%] right-[30%] w-[40%] h-[40%] rounded-full bg-mogency-neon-pink/10 filter blur-3xl" />
      </div>
      
      <div className="section-container">
        <h2 className={cn(
          "section-title text-center mb-10 transition-all duration-500",
          "opacity-0 translate-y-4",
          isIntersecting && "opacity-100 translate-y-0"
        )}>
          Frequently Asked <span className="text-gradient bg-blue-gradient">Questions</span>
        </h2>
        
        {/* Category tabs */}
        <div className={cn(
          "flex flex-wrap justify-center gap-2 mb-12",
          "opacity-0 translate-y-4 transition-all duration-500 delay-100",
          isIntersecting && "opacity-100 translate-y-0"
        )}>
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category 
                  ? "bg-mogency-neon-blue text-white shadow-[0_0_10px_rgba(14,165,233,0.5)] scale-105" 
                  : "bg-black/40 border border-white/10 hover:border-white/20 text-white/70 hover:text-white",
                "opacity-0 translate-y-4 transition-all duration-300",
                isIntersecting && "opacity-100 translate-y-0"
              )}
              style={{ 
                transitionDelay: isIntersecting ? `${150 + index * 50}ms` : '0ms',
              }}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto">
          {filteredItems.map((item, index) => (
            <div 
              key={index}
              className={cn(
                "mb-4 bg-black/40 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden transition-all duration-500",
                "opacity-0 translate-y-4",
                isIntersecting && "opacity-100 translate-y-0",
                openItems.includes(`item-${index}`) && "shadow-[0_0_15px_rgba(14,165,233,0.2)] border-white/10"
              )}
              style={{ 
                transitionDelay: isIntersecting ? `${200 + index * 75}ms` : '0ms'
              }}
            >
              <Collapsible
                open={openItems.includes(`item-${index}`)}
                onOpenChange={() => toggleItem(`item-${index}`)}
                className="w-full"
              >
                <div className="flex items-center">
                  <CollapsibleTrigger className="flex items-center justify-between w-full py-4 px-6 text-lg font-medium hover:bg-white/5 transition-colors">
                    <span>{item.question}</span>
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-mogency-neon-blue/10 text-mogency-neon-blue">
                      {openItems.includes(`item-${index}`) ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className={cn(
                  "text-muted-foreground text-base overflow-hidden transition-all",
                  openItems.includes(`item-${index}`) ? "animate-accordion-down" : "animate-accordion-up"
                )}>
                  <div className="p-6 pt-0 border-t border-white/5">
                    {item.answer}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>
        
        {/* Extra help section */}
        <div className={cn(
          "mt-12 p-6 max-w-3xl mx-auto bg-mogency-neon-blue/10 border border-mogency-neon-blue/20 rounded-xl text-center transition-all duration-500",
          "opacity-0 translate-y-4",
          isIntersecting && "opacity-100 translate-y-0 delay-500"
        )}>
          <h3 className="text-xl font-medium mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-4">We're here to help you at every step of the way.</p>
          <a 
            href="#book-call" 
            className="inline-flex items-center gap-2 bg-mogency-neon-blue hover:bg-mogency-neon-blue/90 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.5)]"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

