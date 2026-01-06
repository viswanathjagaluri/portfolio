import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Globe, 
  BarChart3, 
  Database, 
  Cloud, 
  TestTube,
  Zap
} from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "text-primary",
      bgGradient: "bg-gradient-primary",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "R", "C#", "Node.js"]
    },
    {
      icon: Globe,
      title: "Web & Front-End",
      color: "text-accent",
      bgGradient: "bg-gradient-accent",
      skills: ["React", "Angular", "Ionic", "Tailwind CSS", "Redux", "NGRX", "RXJS"]
    },
    {
      icon: BarChart3,
      title: "AI, Data Science & LLM",
      color: "text-primary",
      bgGradient: "bg-gradient-primary",
      skills: ["LangChain", "Hugging Face", "PyTorch", "NumPy", "Pandas", "Power BI", "Prompt Engineering"]
    },
    {
      icon: Database,
      title: "Databases",
      color: "text-accent",
      bgGradient: "bg-gradient-accent",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "Redis", "FAISS"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-primary",
      bgGradient: "bg-gradient-primary",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Jenkins"]
    },
    {
      icon: TestTube,
      title: "Testing & Tools",
      color: "text-accent",
      bgGradient: "bg-gradient-accent",
      skills: ["Pytest", "Jest", "Jasmine", "Postman", "Jira", "Agile/Scrum"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 portfolio-section-title">
              Technical <span className="portfolio-text-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable, and intelligent web applications
            </p>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="portfolio-card hover-lift group h-full">
                <div className="p-6">
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${category.bgGradient} mr-4 group-hover:shadow-portfolio-glow transition-all duration-300`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center">
                        <Zap className={`w-3 h-3 mr-3 ${category.color}`} />
                        <Badge 
                          variant="secondary" 
                          className="text-sm bg-muted/50 text-foreground hover:bg-muted transition-colors"
                        >
                          {skill}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Skill Highlights */}
        <ScrollReveal delay={600}>
          <div className="mt-16">
            <Card className="portfolio-card p-8 text-center">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Specialized Expertise</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold portfolio-text-gradient">RAG & GenAI</div>
                  <p className="text-muted-foreground">LangChain, Hugging Face, LLMs</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">Full Stack</div>
                  <p className="text-muted-foreground">React, Django, Flask, Node.js</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold portfolio-text-gradient">Cloud</div>
                  <p className="text-muted-foreground">AWS, Azure, Docker, Kubernetes</p>
                </div>
              </div>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillsSection;