import { useState, useEffect, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Phone, Download, ChevronDown, Sparkles, Code, Rocket } from 'lucide-react';
import PCSetup3D from './PCSetup3D';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const roles = [
    'Software Engineer',
    'AI & LLM Integration',
    'Cloud Services Expert',
    'Full Stack Developer',
    'RAG & GenAI Specialist'
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (typewriterText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setTypewriterText(currentRole.slice(0, typewriterText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (typewriterText.length > 0) {
        timeout = setTimeout(() => {
          setTypewriterText(typewriterText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [typewriterText, isTyping, currentRoleIndex, roles]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <section className="min-h-screen flex items-center justify-center portfolio-bg-gradient relative overflow-hidden">
      {/* Enhanced Animated Background Elements with Neon Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes with Neon Glow */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-lg rotate-45 animate-float animate-neon-pulse"></div>
        <div className="absolute top-1/4 right-20 w-24 h-24 bg-accent/25 rounded-full animate-float-delayed animate-glow-wave"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-primary/30 rotate-12 animate-float hover-elastic" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-16 h-16 bg-accent/20 rounded-full animate-float animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Enhanced Gradient Orbs with Multiple Effects */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full animate-float blur-2xl animate-neon-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tl from-accent/15 to-primary/15 rounded-full animate-float-delayed blur-3xl animate-glow-wave" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full animate-pulse-glow blur-3xl"></div>
        
        {/* Animated Code-like Elements with Glow */}
        <div className="absolute top-1/3 left-20 text-primary/30 animate-bounce-in portfolio-glow-effect" style={{ animationDelay: '1.5s' }}>
          <Code className="w-10 h-10" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-accent/30 animate-zoom-in portfolio-glow-effect" style={{ animationDelay: '2.5s' }}>
          <Rocket className="w-8 h-8" />
        </div>
        <div className="absolute top-2/3 right-20 text-primary/30 animate-bounce-in portfolio-glow-effect" style={{ animationDelay: '3.5s' }}>
          <Sparkles className="w-9 h-9" />
        </div>
        
        {/* New Floating Elements */}
        <div className="absolute top-16 left-1/2 w-6 h-6 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 right-16 w-8 h-8 bg-primary/40 rotate-45 animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            
            {/* Animated Welcome Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-8 border border-primary/20 transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`} style={{ animationDelay: '500ms' }}>
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Welcome to my digital portfolio</span>
            </div>

            {/* Main Heading with Staggered Animation */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 portfolio-hero-title">
              <div className={`transition-all duration-700 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'}`} style={{ animationDelay: '800ms' }}>
                <span className="portfolio-text-gradient">Viswanath</span>
              </div>
              <div className={`transition-all duration-700 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'}`} style={{ animationDelay: '1000ms' }}>
                <span className="text-foreground">Jagaluri</span>
              </div>
            </h1>

            {/* Dynamic Typewriter Role */}
            <div className={`text-xl md:text-2xl mb-8 min-h-[3rem] transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1200ms' }}>
              <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                <span className="portfolio-neon-gradient font-bold text-xl md:text-2xl animate-text-shimmer">
                  {typewriterText}
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 text-accent`}>|</span>
                </span>
              </div>
              <div className="text-base text-muted-foreground mt-2">
                <span className="text-accent font-medium">Full Stack | AI & LLM Integration | Cloud Services</span>
              </div>
            </div>

            {/* Interactive Stats Cards */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 max-w-xl mb-8 transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`} style={{ animationDelay: '1400ms' }}>
              <div className="bg-background/50 backdrop-blur-sm rounded-lg p-3 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                <div className="text-xl font-bold text-primary">4+</div>
                <div className="text-xs text-muted-foreground">Years</div>
              </div>
              <div className="bg-background/50 backdrop-blur-sm rounded-lg p-3 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105">
                <div className="text-xl font-bold text-accent">40%</div>
                <div className="text-xs text-muted-foreground">Engagement</div>
              </div>
              <div className="bg-background/50 backdrop-blur-sm rounded-lg p-3 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                <div className="text-xl font-bold text-primary">∞</div>
                <div className="text-xs text-muted-foreground">Solutions</div>
              </div>
              <div className="bg-background/50 backdrop-blur-sm rounded-lg p-3 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105">
                <div className="text-xl font-bold text-accent">24/7</div>
                <div className="text-xs text-muted-foreground">Innovation</div>
              </div>
            </div>

            {/* Enhanced Contact Icons */}
            <div className={`flex items-center justify-center lg:justify-start gap-4 mb-8 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1600ms' }}>
              <a 
                href="mailto:viswanathjagaluri@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-2 bg-background/30 backdrop-blur-sm rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-4 h-4 text-primary group-hover:animate-pulse" />
                <span className="hidden sm:inline text-sm text-foreground group-hover:text-primary transition-colors">Email</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/viswanathjagaluri/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-2 px-3 py-2 bg-background/30 backdrop-blur-sm rounded-full border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-4 h-4 text-accent group-hover:animate-pulse" />
                <span className="hidden sm:inline text-sm text-foreground group-hover:text-accent transition-colors">LinkedIn</span>
              </a>
              <a 
                href="tel:+19013380102" 
                className="group flex items-center gap-2 px-3 py-2 bg-background/30 backdrop-blur-sm rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-110"
              >
                <Phone className="w-4 h-4 text-primary group-hover:animate-pulse" />
                <span className="hidden sm:inline text-sm text-foreground group-hover:text-primary transition-colors">Mobile</span>
              </a>
            </div>

            {/* Animated Action Buttons */}
            <div className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`} style={{ animationDelay: '1800ms' }}>
              <Button 
                className="portfolio-button text-white group relative overflow-hidden" 
                onClick={scrollToAbout}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Rocket className="w-4 h-4 group-hover:animate-bounce" />
                  Explore My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <a href={`${import.meta.env.BASE_URL}resume/Viswanath_SDE.docx`} download="Viswanath_SDE.docx">
                <Button variant="outline" className="portfolio-button-outline group">
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Enhanced Scroll Indicator */}
            <div className={`transition-all duration-700 hidden lg:block ${isVisible ? 'animate-bounce' : 'opacity-0'}`} style={{ animationDelay: '2000ms' }}>
              <button onClick={scrollToAbout} className="group text-muted-foreground hover:text-primary transition-all duration-300">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-xs font-medium opacity-70 group-hover:opacity-100">Scroll to explore</span>
                  <ChevronDown className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Content - 3D PC Setup */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
            <Suspense fallback={
              <div className="w-full h-[400px] md:h-[500px] flex items-center justify-center">
                <div className="text-primary animate-pulse">Loading 3D Scene...</div>
              </div>
            }>
              <PCSetup3D />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;