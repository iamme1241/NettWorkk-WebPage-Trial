
import React from 'react';
import { ArrowRight } from 'lucide-react';
import BackgroundGradient from './ui/BackgroundGradient';
import AnimatedText from './ui/AnimatedText';
 
const Hero = () => {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <BackgroundGradient variant="vibrant">
        {/* Add empty children to fix the build error */}
      </BackgroundGradient>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 inline-block">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              Community-Powered Marketing
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 md:mb-8">
            <AnimatedText 
              text="Your NettWorkk is" 
              className="block" 
              tag="span"
            />
            <span className="block mt-2 text-gradient">Your Net Worth</span>
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-8 md:mb-12">
            Connect with top brands, amplify their message, and turn your social media presence into opportunities for growth, learning, and earnings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="#join"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-white font-medium shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white border border-gray-200 shadow hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="hidden md:block absolute top-1/4 -left-16 w-32 h-32 bg-primary/5 rounded-full animate-pulse-soft"></div>
      <div className="hidden md:block absolute bottom-1/4 -right-16 w-32 h-32 bg-primary/5 rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;
