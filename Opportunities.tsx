
import React from 'react';
import { Rocket, Calendar, Award, Star, Network } from 'lucide-react';
import AnimatedText from './ui/AnimatedText';

interface OpportunityProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const OpportunityCard: React.FC<OpportunityProps> = ({ icon, title, description, index }) => {
  return (
    <div 
      className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6 rounded-xl transition-all hover:bg-white/60 hover:shadow-md"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

// Custom Rupee icon component
const RupeeSign = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M6 3h12M6 8h12M6 13h3m3 0h6M9 13v8m3-8v8"/>
  </svg>
);

const Opportunities = () => {
  const opportunities = [
    {
      icon: <RupeeSign className="h-6 w-6" />,
      title: "Earn While You Learn",
      description: "Get paid to promote brands on your social media. Turn your everyday posting into a source of income."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Resume Boosters",
      description: "Receive official offer letters, certificates, and recommendation letters from top brands and NettWorkk."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Premium Events",
      description: "Volunteer at exclusive events across India, expanding your network while gaining valuable experience."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Career Launchpad",
      description: "Access internships and full-time positions with our partner brands based on your performance."
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Skill Development",
      description: "Learn new skills through our learning partners. We'll help you grow regardless of your starting point."
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Networking",
      description: "Connect with a curated community of students and professionals from across India."
    },
  ];

  return (
    <section id="opportunities" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-2/5">
            <div className="mb-4 inline-block">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-nettwork-teal/10 text-nettwork-teal border border-nettwork-teal/20">
                What You Gain
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              <AnimatedText text="Transforming Social Activity Into Opportunity" tag="span" />
            </h2>
            
            <p className="text-muted-foreground mb-8">
              At NettWorkk, we believe your social media presence has untapped potential. Join our community to connect with brands and turn your social activity into valuable career assets.
            </p>
            
            <div className="relative w-full aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2574&auto=format&fit=crop" 
                alt="Students collaborating" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="font-semibold">Amplify your social reach with NettWorkk</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/5">
            <div className="space-y-6">
              {opportunities.map((opportunity, index) => (
                <OpportunityCard
                  key={index}
                  icon={opportunity.icon}
                  title={opportunity.title}
                  description={opportunity.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
