import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';
import { CursorEffect } from '@/components/ui/cursor-effect';
import HeroSection from './portfolio/HeroSection';
import AboutSection from './portfolio/AboutSection';
import SkillsSection from './portfolio/SkillsSection';
import ExperienceSection from './portfolio/ExperienceSection';
import EducationSection from './portfolio/EducationSection';
import ContactSection from './portfolio/ContactSection';
const Portfolio = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground cursor-none">
      <CursorEffect />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold portfolio-text-gradient">
              Viswanath Jagaluri
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {[
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Experience', href: '#experience' },
                
                { label: 'Education', href: '#education' },
                { label: 'Contact', href: '#contact' }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-card py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold portfolio-text-gradient mb-4">
              Viswanath Jagaluri
            </div>
            <p className="text-muted-foreground mb-6">
              Full Stack Developer • Building Scalable & AI-Driven Web Solutions
            </p>
            <div className="flex items-center justify-center space-x-6 mb-6">
              <a 
                href="mailto:viswanath.jagaluri@example.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Email
              </a>
              <a 
                href="https://linkedin.com/in/viswanath-jagaluri" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="tel:+15551234567" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Mobile
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Viswanath Jagaluri. Crafted with passion and attention to detail.
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="sm"
          className="fixed bottom-8 right-8 z-50 portfolio-button text-white rounded-full w-12 h-12 p-0 shadow-portfolio-glow"
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};

export default Portfolio;