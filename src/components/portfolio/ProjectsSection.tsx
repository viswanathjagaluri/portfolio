import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ExternalLink, 
  Github, 
  Brain, 
  Database, 
  Layers, 
  MessageSquare,
  TrendingUp,
  Zap,
  Play,
  MousePointer
} from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeDemo, setActiveDemo] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Oracle AI First - Chatbot Platform",
      subtitle: "AI-Powered Recruitment & Project Management",
      description: "Established responsive and interactive chatbot interfaces with REST APIs, improving user engagement and reducing latency by 15%.",
      longDescription: "Engineered an AI-driven project lifecycle management system enhancing workflow efficiency by 35%. Progressed LLM performance using LangChain to fine-tune datasets, resulting in significant boost in user satisfaction.",
      impact: "35% Workflow Boost",
      technologies: ["Angular", "Python", "Tailwind CSS", "REST APIs", "LangChain", "LLMs"],
      icon: Brain,
      color: "text-primary",
      bgGradient: "bg-gradient-primary"
    },
    {
      id: 2,
      title: "AI Tutor - Personalized Learning Platform",
      subtitle: "Full-Stack AI-Powered Education",
      description: "Designed and built a full-stack AI-powered tutoring platform with Admin, Tutor, and User roles using JWT + RBAC authentication.",
      longDescription: "Integrated AI tutor features: contextual explanations, interactive Q&A, and automated quiz generation using open-source LLMs and FAISS vector search. Implemented progress tracking with real-time analytics and Recharts visualizations.",
      impact: "AI-Powered Learning",
      technologies: ["React", "FastAPI", "PostgreSQL", "Redis", "Celery", "FAISS", "Docker", "LangChain"],
      icon: Database,
      color: "text-accent",
      bgGradient: "bg-gradient-accent"
    },
    {
      id: 3,
      title: "Generative AI Q&A System",
      subtitle: "RAG-Powered News Analysis",
      description: "Developed a Generative AI Q&A system using Retrieval-Augmented Generation (RAG), improving factual accuracy by 85%.",
      longDescription: "Cut model hallucinations by 70% and deployed via a responsive React chatbot interface that improved user engagement by 25%. Designed autonomous AI agents using LangChain to automate multi-step business processes.",
      impact: "85% Accuracy",
      technologies: ["LangChain", "Hugging Face", "RAG", "React", "Celery", "PostgreSQL"],
      icon: MessageSquare,
      color: "text-primary",
      bgGradient: "bg-gradient-primary"
    }
  ];

  const DragDropDemo = ({ isActive }: { isActive: boolean }) => (
    <div className={`relative h-48 bg-card rounded-lg border-2 border-dashed border-border overflow-hidden ${isActive ? 'animate-scale-in' : ''}`}>
      {/* Left Panel - Components */}
      <div className="absolute left-4 top-4 bottom-4 w-24 bg-muted/50 rounded-lg p-2">
        <div className="text-xs text-muted-foreground mb-2">Components</div>
        <div className={`space-y-2 ${isActive ? 'animate-slide-up' : ''}`}>
          {['Text Block', 'Image', 'Button'].map((comp, i) => (
            <div 
              key={comp}
              className={`p-2 bg-primary/20 rounded text-xs text-center cursor-pointer hover:bg-primary/30 transition-all ${
                isActive && i === 1 ? 'animate-pulse transform scale-110' : ''
              }`}
              style={{ animationDelay: `${i * 200}ms` }}
            >
              {comp}
            </div>
          ))}
        </div>
      </div>
      
      {/* Main Canvas */}
      <div className="ml-32 mr-4 mt-4 mb-4 bg-background rounded-lg border relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <Layers className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <div className="text-xs">Drop Zone</div>
          </div>
        </div>
        
        {/* Animated Component Drop */}
        {isActive && (
          <>
            <MousePointer className="absolute top-8 left-8 w-4 h-4 text-primary animate-bounce" />
            <div className="absolute top-12 left-12 p-2 bg-primary text-white rounded text-xs animate-pulse">
              Image Component
            </div>
          </>
        )}
      </div>
      
      {/* Success Text */}
      {isActive && (
        <div className="absolute bottom-2 right-4 text-xs text-accent font-medium animate-fade-in">
          Enhanced user engagement by 40%
        </div>
      )}
    </div>
  );

  const ChatbotDemo = ({ isActive }: { isActive: boolean }) => (
    <div className={`relative h-48 bg-card rounded-lg border overflow-hidden ${isActive ? 'animate-scale-in' : ''}`}>
      {/* Chat Interface */}
      <div className="h-full flex">
        {/* User Input */}
        <div className="flex-1 p-4">
          <div className="bg-muted/50 rounded-lg p-3 mb-4">
            <div className="text-xs text-muted-foreground mb-1">User Query</div>
            <div className={`text-sm ${isActive ? 'animate-slide-up' : ''}`}>
              "Show me last quarter's sales figures"
            </div>
          </div>
          
          {/* Transformation */}
          {isActive && (
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="h-px bg-gradient-primary flex-1 animate-pulse"></div>
                <Brain className="w-4 h-4 mx-2 text-primary animate-spin" />
                <div className="h-px bg-gradient-primary flex-1 animate-pulse"></div>
              </div>
              <div className="bg-primary/20 rounded p-2 text-xs font-mono animate-fade-in" style={{ animationDelay: '1s' }}>
                SELECT * FROM sales WHERE date &gt;= '2023-10-01'...
              </div>
            </div>
          )}
        </div>
        
        {/* Result */}
        <div className="w-1/3 p-4 border-l">
          <div className="text-xs text-muted-foreground mb-2">Result</div>
          {isActive && (
            <div className="bg-accent/20 rounded p-2 animate-scale-in" style={{ animationDelay: '1.5s' }}>
              <TrendingUp className="w-6 h-6 text-accent mb-1" />
              <div className="text-xs">Sales Chart</div>
            </div>
          )}
        </div>
      </div>
      
      {/* Success Text */}
      {isActive && (
        <div className="absolute bottom-2 left-4 text-xs text-primary font-medium animate-fade-in" style={{ animationDelay: '2s' }}>
          Automated database lookups with AI
        </div>
      )}
    </div>
  );

  const PerformanceDemo = ({ isActive }: { isActive: boolean }) => (
    <div className={`relative h-48 bg-card rounded-lg border p-4 ${isActive ? 'animate-scale-in' : ''}`}>
      <div className="grid grid-cols-2 gap-4 h-full">
        {/* Before */}
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground">Before Optimization</div>
          <div className="h-4 bg-muted rounded-full overflow-hidden">
            <div className={`h-full bg-destructive transition-all duration-3000 ${isActive ? 'w-full' : 'w-0'}`}></div>
          </div>
          <div className="space-y-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`h-2 bg-destructive/30 rounded ${isActive ? 'animate-pulse' : ''}`}></div>
            ))}
          </div>
          <div className="text-xs text-destructive">Complex Queries</div>
        </div>
        
        {/* After */}
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground">After Optimization</div>
          <div className="h-4 bg-muted rounded-full overflow-hidden">
            <div className={`h-full bg-accent transition-all duration-1000 ${isActive ? 'w-full' : 'w-0'}`} style={{ animationDelay: '500ms' }}></div>
          </div>
          <div className="space-y-1">
            <div className={`h-2 bg-accent rounded ${isActive ? 'animate-pulse' : ''}`} style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="text-xs text-accent">Optimized Queries</div>
        </div>
      </div>
      
      {/* Success Text */}
      {isActive && (
        <div className="absolute bottom-2 right-4 text-xs text-accent font-medium animate-fade-in" style={{ animationDelay: '2s' }}>
          60% faster data retrieval
        </div>
      )}
    </div>
  );

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 portfolio-section-title">
              Featured <span className="portfolio-text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Interactive demonstrations of cutting-edge solutions that drive real business impact
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className={`portfolio-card hover-lift group transition-all duration-500 ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="p-6">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${project.bgGradient} group-hover:shadow-portfolio-glow transition-all duration-300`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge className={`${project.bgGradient} text-white border-0`}>
                      {project.impact}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.subtitle}</p>
                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  {/* Interactive Demo */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-foreground">Interactive Demo</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setActiveDemo(activeDemo === project.id ? null : project.id)}
                        className="text-xs"
                      >
                        <Play className="w-3 h-3 mr-1" />
                        {activeDemo === project.id ? 'Stop' : 'Play'}
                      </Button>
                    </div>
                    
                    {/* Demo Components */}
                    {project.id === 1 && <DragDropDemo isActive={activeDemo === 1} />}
                    {project.id === 2 && <PerformanceDemo isActive={activeDemo === 2} />}
                    {project.id === 3 && <ChatbotDemo isActive={activeDemo === 3} />}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-muted/50 text-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1 portfolio-button text-white">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View Live
                    </Button>
                    <Button size="sm" variant="outline" className="portfolio-button-outline">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Projects Teaser */}
          <div className="mt-16 text-center">
            <Card className="portfolio-card p-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">More Projects</h3>
              <p className="text-muted-foreground mb-6">
                Explore additional projects including enterprise applications, mobile solutions, and AI-powered tools
              </p>
              <Button className="portfolio-button text-white">
                View All Projects
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;