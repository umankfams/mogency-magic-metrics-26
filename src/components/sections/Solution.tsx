
import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { ArrowRight, Lightbulb, Zap, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Solution = ({ id = 'solution' }) => {
  return (
    <section id={id} className="py-16 md:py-20 lg:py-24">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="section-title mb-4">Our <span className="neon-text-green">Solution</span></h2>
          <p className="section-subtitle">
            Turn your audience into revenue with our proven framework for content creators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Solution Card 1 */}
          <Card className="card-glass hover:border-mogency-neon-blue/30 hover:shadow-lg transition-all p-6">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-mogency-neon-blue/10 border border-mogency-neon-blue/20">
                <Lightbulb className="w-6 h-6 text-mogency-neon-blue" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3">Strategic Product Design</h3>
            <p className="text-muted-foreground text-center mb-4">
              We identify your audience's pain points and create digital products they'll actually pay for
            </p>
          </Card>

          {/* Solution Card 2 */}
          <Card className="card-glass hover:border-mogency-neon-pink/30 hover:shadow-lg transition-all p-6">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-mogency-neon-pink/10 border border-mogency-neon-pink/20">
                <Zap className="w-6 h-6 text-mogency-neon-pink" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3">High-Converting Funnel</h3>
            <p className="text-muted-foreground text-center mb-4">
              Custom-built sales pages and email sequences that turn viewers into paying customers
            </p>
          </Card>

          {/* Solution Card 3 */}
          <Card className="card-glass md:col-span-2 lg:col-span-1 hover:border-mogency-neon-purple/30 hover:shadow-lg transition-all p-6">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-mogency-neon-purple/10 border border-mogency-neon-purple/20">
                <LineChart className="w-6 h-6 text-mogency-neon-purple" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3">Revenue Amplification</h3>
            <p className="text-muted-foreground text-center mb-4">
              Ongoing optimization to increase conversions and maximize your passive revenue stream
            </p>
          </Card>
        </div>

        <div className="flex justify-center mt-10">
          <Button 
            variant="outline" 
            className="group border-mogency-neon-blue/30 hover:border-mogency-neon-blue/60 text-white"
            onClick={() => document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Learn More</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solution;
