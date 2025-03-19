
import { useEffect } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

const Index = () => {
  useEffect(() => {
    // Set document title
    document.title = 'Mogency | Turn Your Audience Into Revenue - For Content Creators';
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      
      <footer className="bg-black/80 border-t border-mogency-neon-blue/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 flex justify-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-mogency-neon-blue transition-all duration-300">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-mogency-neon-pink transition-all duration-300">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-mogency-neon-purple transition-all duration-300">
                Contact
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Mogency. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/70 mt-2">
              We only succeed when our creators succeed. Zero upfront cost.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
