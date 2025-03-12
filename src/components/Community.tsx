
import React from 'react';
import { Users, MessageSquare, Heart, Sparkles, Zap } from 'lucide-react';
import AnimatedText from './ui/AnimatedText';

const Community = () => {
  return (
    <section id="community" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <div className="mb-4 inline-block">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-nettwork-pink/10 text-nettwork-pink border border-nettwork-pink/20">
                Our Community
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              <AnimatedText text="Join a Network of Ambitious GenZ Talent" tag="span" />
            </h2>
            
            <p className="text-muted-foreground mb-8 text-lg">
              NettWorkk is more than opportunities – it's a carefully curated community of creative, ambitious students from across India. We verify every profile to ensure quality connections.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-nettwork-purple/10 text-nettwork-purple mt-1">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Pan-India Network</h3>
                  <p className="text-muted-foreground">Connect with peers and professionals from campuses across the country</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-nettwork-blue/10 text-nettwork-blue mt-1">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Personalized Guidance</h3>
                  <p className="text-muted-foreground">Get advice from NettWorkk advisors on skills, careers, and growth opportunities</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-nettwork-pink/10 text-nettwork-pink mt-1">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Supportive Environment</h3>
                  <p className="text-muted-foreground">Learn and grow in a community that celebrates collaboration over competition</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-nettwork-orange/10 text-nettwork-orange mt-1">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Creative Opportunities</h3>
                  <p className="text-muted-foreground">Express yourself and showcase your creativity through brand campaigns</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-nettwork-teal/10 text-nettwork-teal mt-1">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Growth Accelerator</h3>
                  <p className="text-muted-foreground">Fast-track your career with exclusive opportunities and industry connections</p>
                </div>
              </div>
            </div>
            
            <a
              href="#join"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Apply Now
            </a>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80" 
                  alt="Collaborative workspace" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-nettwork-pink/30 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-nettwork-blue/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-nettwork-purple/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
};

export default Community;
