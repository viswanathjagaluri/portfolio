import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Users, TrendingUp, Award } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "AI & LLM",
      description: "LangChain, RAG, GenAI",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "35% Workflow Efficiency",
      color: "text-accent"
    },
    {
      icon: TrendingUp,
      title: "Performance",
      description: "60% Processing Reduction",
      color: "text-primary"
    },
    {
      icon: Award,
      title: "Innovation",
      description: "RAG with 85% Accuracy",
      color: "text-accent"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 portfolio-section-title">
              About <span className="portfolio-text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <ScrollReveal direction="right" delay={200} className="lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-4 border-primary/20 portfolio-surface hover-lift">
                <img 
                  src="/lovable-uploads/viswanath.jpeg"
                  alt="Viswanath Jagaluri - Professional Portrait"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center animate-pulse-glow">
                <span className="text-white font-bold">VJ</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Story Content */}
          <ScrollReveal direction="left" delay={100} className="lg:order-1">
            <Card className="portfolio-card p-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Full Stack Developer with <span className="text-accent font-semibold">4 years of experience</span> designing, 
                  developing, and deploying scalable web applications on <span className="text-primary font-semibold">AWS and Azure</span>. 
                  Expertise in front-end architecture using React and Angular, and back-end development with Python and Java.
                </p>
                <p>
                  Proven ability to see projects through from conception to completion, creating servers, 
                  managing <span className="text-accent font-semibold">SQL (PostgreSQL, MySQL)</span> and{' '}
                  <span className="text-primary font-semibold">NoSQL (MongoDB)</span> databases, and building robust RESTful APIs.
                </p>
                <p>
                  Leverages <span className="text-accent font-semibold">AI and LLM integration (LangChain, Hugging Face)</span> to 
                  deliver innovative, high-impact software solutions including{' '}
                  <span className="text-primary font-semibold">RAG systems with 85% factual accuracy</span>.
                </p>
              </div>
            </Card>
          </ScrollReveal>
        </div>

        {/* Highlights Grid */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="portfolio-card hover-lift text-center">
                  <div className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                      <highlight.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-foreground">{highlight.title}</h4>
                    <p className={`text-sm font-medium ${highlight.color}`}>{highlight.description}</p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <ScrollReveal delay={400}>
          <div className="mt-16">
            <Card className="portfolio-card p-8 text-center">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Core Values</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Innovation-Driven", "Team Leadership", "Scalable Solutions", 
                  "AI Integration", "Performance Optimization", "User-Centric Design"
                ].map((value, index) => (
                  <Badge 
                    key={index}
                    className="px-4 py-2 bg-gradient-primary text-white border-0 hover:shadow-portfolio-glow transition-all duration-300"
                  >
                    {value}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;