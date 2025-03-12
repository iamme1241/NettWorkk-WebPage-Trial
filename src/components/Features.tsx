
import React from 'react';
import { Users, Award, Briefcase, GraduationCap, Gift, Megaphone, Sparkles, Zap } from 'lucide-react';
import AnimatedText from './ui/AnimatedText';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  gradientFrom: string;
  gradientTo: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay, gradientFrom, gradientTo }) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 card-hover"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`mb-4 p-3 rounded-full inline-flex bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Official Recognition",
      description: "Receive offer letters, certificates, and LORs from top brands to boost your resume.",
      gradientFrom: "from-purple-500",
      gradientTo: "to-indigo-600"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Pan-India Network",
      description: "Connect with like-minded students and professionals across the country.",
      gradientFrom: "from-blue-500",
      gradientTo: "to-cyan-500"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Career Opportunities",
      description: "Unlock internships and full-time positions with our partner brands.",
      gradientFrom: "from-teal-500",
      gradientTo: "to-emerald-500"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Skill Development",
      description: "Develop new skills through collaborative projects and learning partnerships.",
      gradientFrom: "from-amber-500",
      gradientTo: "to-orange-600"
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Exclusive Perks",
      description: "Get brand merchandise and volunteer at premium events across India.",
      gradientFrom: "from-pink-500",
      gradientTo: "to-rose-500"
    },
    {
      icon: <Megaphone className="h-6 w-6" />,
      title: "Amplify Your Reach",
      description: "Grow your social media presence through strategic brand collaborations.",
      gradientFrom: "from-violet-500",
      gradientTo: "to-purple-600"
    }
  ];

  return (
    <section id="benefits" className="py-20 md:py-32 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-4 inline-block">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-secondary/10 text-secondary border border-secondary/20">
              Why Join Us
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <AnimatedText text="Benefits that Elevate Your Journey" tag="span" />
          </h2>
          
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Working with us is almost effortless, but the rewards are extraordinary. 
            Here's what you gain from being part of our community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
              gradientFrom={feature.gradientFrom}
              gradientTo={feature.gradientTo}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#join" 
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-secondary to-primary text-white font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <Sparkles className="h-5 w-5" />
            Apply Today
            <Zap className="h-5 w-5" />
          </a>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-0 w-full h-1/2 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 -skew-y-3 -z-10"></div>
    </section>
  );
};

export default Features;
