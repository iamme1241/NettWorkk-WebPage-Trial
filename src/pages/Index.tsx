
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Opportunities from '@/components/Opportunities';
import Community from '@/components/Community';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  // Add smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="relative py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <div className="mb-4 inline-block">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-nettwork-orange/10 text-nettwork-orange border border-nettwork-orange/20">
                    About Us
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Community-Powered Marketing for the Next Generation
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  At NettWorkk, we connect anyone with a social media presence to brands looking for authentic promotion. It's a win-win: brands get genuine advocacy, and you get rewarded for your influence.
                </p>
                
                <p className="text-muted-foreground mb-6">
                  Our carefully screened community includes students from across India, creating a powerful network that opens doors to certificates, offer letters, brand merchandise, and career opportunities.
                </p>
                
                <p className="font-medium">
                  Working with us is almost effortless – simply amplify brand messages through your social media and transform everyday activities into career-building opportunities.
                </p>
              </div>
              
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                    alt="NettWorkk team" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 rounded-xl glass-panel p-4 md:p-6 max-w-xs">
                  <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
                  <p className="text-sm">
                    Empower students to leverage their social presence into meaningful career growth and opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Features />
        <Opportunities />
        <Community />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
