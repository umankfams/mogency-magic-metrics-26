
import { useEffect } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import Examples from '@/components/sections/Examples';
import Products from '@/components/sections/Products';
import Process from '@/components/sections/Process';
import WhyMogency from '@/components/sections/WhyMogency';
import FAQ from '@/components/sections/FAQ';
import BookCallSection from '@/components/sections/BookCallSection';
import Footer from '@/components/sections/Footer';

const Index = () => {
  useEffect(() => {
    // Set document title
    document.title = 'Mogency | Turn Your Audience Into Revenue - For Content Creators';
  }, []);
  
  return (
    <div className="min-h-screen relative">
      {/* Background gradient elements spanning the entire page */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] rounded-full bg-mogency-neon-blue/20 filter blur-3xl" />
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-mogency-neon-pink/20 filter blur-3xl" />
        <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] rounded-full bg-mogency-neon-purple/15 filter blur-3xl" />
        
        {/* Tech grid background */}
        <div className="absolute inset-0 tech-grid opacity-20"></div>
      </div>

      <Navbar />
      <main className="pt-20 md:pt-24 lg:pt-32"> {/* Adjusted padding top for mobile */}
        <Hero />
        <div className="mt-12 md:mt-16 lg:mt-24"></div>
        <Problem />
        <div className="mt-12 md:mt-16 lg:mt-24"></div>
        <Solution id="solution" />
        <div className="mt-12 md:mt-16 lg:mt-24"></div>
        <Examples />
        <div className="mt-12 md:mt-16 lg:mt-24"></div>
        <Products />
        <div className="mt-12 md:mt-16 lg:mt-24"></div>
        <Process />
        <div className="mt-12 md:mt-16 lg:mt-24"></div>
        <WhyMogency />
        <div className="mt-12 md:mt-16 lg:mt-24"></div>
        <FAQ />
        <div className="mt-12 md:mt-16 lg:mt-24"></div>
        <BookCallSection />
        <div className="mt-12 md:mt-16 lg:mt-24"></div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
