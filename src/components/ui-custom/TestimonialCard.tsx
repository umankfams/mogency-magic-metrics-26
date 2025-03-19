
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  delay?: number;
}

const TestimonialCard = ({ 
  quote, 
  author, 
  role, 
  company, 
  delay = 0 
}: TestimonialCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={cn(
        'card-glass px-8 pt-10 pb-8 opacity-0',
        isVisible && 'animate-scale-in'
      )}
    >
      <svg 
        width="45" 
        height="36" 
        className="mb-6 text-mogency-blue/20 fill-current"
        viewBox="0 0 45 36" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.5 0C6.04219 0 0 6.04219 0 13.5C0 20.9578 6.04219 27 13.5 27C15.4922 27 17.3906 26.5781 19.125 25.7344C19.125 25.7344 19.125 36 9 36H13.5C28.1484 36 40.5 27.9141 40.5 13.5C40.5 6.04219 34.4578 0 27 0C19.5422 0 13.5 6.04219 13.5 13.5C13.5 20.9578 19.5422 27 27 27C28.9922 27 30.8906 26.5781 32.625 25.7344C32.625 25.7344 32.625 36 22.5 36H27C41.6484 36 54 27.9141 54 13.5C54 6.04219 47.9578 0 40.5 0C33.0422 0 27 6.04219 27 13.5C27 20.9578 33.0422 27 40.5 27C42.4922 27 44.3906 26.5781 46.125 25.7344C46.125 25.7344 46.125 36 36 36H40.5C55.1484 36 67.5 27.9141 67.5 13.5C67.5 6.04219 61.4578 0 54 0C46.5422 0 40.5 6.04219 40.5 13.5" />
      </svg>
      
      <p className="mb-6 text-mogency-gray-dark">{quote}</p>
      
      <div>
        <p className="font-bold text-mogency-gray-dark">{author}</p>
        <p className="text-sm text-mogency-gray-medium">{role}, {company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
