
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import AnimatedText from './ui/AnimatedText';

const CallToAction = () => {
  return (
    <section id="join" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-nettwork-purple/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-nettwork-teal/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-4 inline-block">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              Get Started
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <AnimatedText 
              text="Ready to Transform Your Social Media Into Opportunities?" 
              tag="span" 
            />
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Join NettWorkk today and connect with top brands, grow your skills, and build a network that elevates your career journey.
          </p>
          
          <div className="mb-10">
            <a
              href="https://deformity.ai/d/cWgbU6sGBURm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-medium text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Sparkles className="h-5 w-5" />
              Apply Now
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            By joining, you'll receive updates about opportunities and events. We respect your privacy and you can unsubscribe at any time.
          </p>
        </div>
        
        <div className="mt-16 flex flex-col items-center justify-center">
          <img 
            src="/lovable-uploads/ba59cba7-ccb3-40b2-9d1c-d0075060920e.png" 
            alt="NettWorkk Logo" 
            className="h-16 w-auto mb-4"
          />
          <p className="text-center text-lg font-medium">
            Your NettWorkk is Your Net Worth
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
