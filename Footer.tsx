
import React from 'react';
import { Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16 mb-12">
          <div className="md:w-1/3">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/ba59cba7-ccb3-40b2-9d1c-d0075060920e.png" 
                alt="NettWorkk" 
                className="h-10 w-auto" 
              />
              <span className="font-display font-bold text-xl">NettWorkk</span>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Transforming social media presence into valuable career opportunities for students across India.
            </p>
            
            <div className="flex items-center">
              <a 
                href="http://instagram.com/nettworkk.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <span className="ml-3 text-muted-foreground">@nettworkk.in</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3">
            <div>
              <h3 className="font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors">Benefits</a></li>
                <li><a href="#opportunities" className="text-muted-foreground hover:text-primary transition-colors">Opportunities</a></li>
                <li><a href="#join" className="text-muted-foreground hover:text-primary transition-colors">Apply Now</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="http://instagram.com/nettworkk.in" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <Instagram className="h-4 w-4" /> Instagram
                  </a>
                </li>
                <li><a href="mailto:info@nettworkk.in" className="text-muted-foreground hover:text-primary transition-colors">info@nettworkk.in</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} NettWorkk. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
