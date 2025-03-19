
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
    document.title = 'Mogency | AI-Powered Marketing for Content Creators';
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
      
      <footer className="bg-white py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-mogency-gray-medium">
              &copy; {new Date().getFullYear()} Mogency. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
