import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  TrendingUp,
  Zap,
  CheckCircle
} from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Our National Conversation",
      location: "Remote",
      period: "May 2025 - Present",
      type: "Leadership",
      bgGradient: "bg-gradient-primary",
      achievements: [
        "Architected an AI-driven news analysis platform with autonomous Celery pipeline, reducing data processing overhead by 60%",
        "Developed Generative AI Q&A system using RAG, improving factual accuracy by 85% and cutting model hallucinations by 70%",
        "Engineered AI-driven project lifecycle management system enhancing workflow efficiency by 35%",
        "Designed autonomous AI agents using LangChain, reducing manual intervention by over 50%"
      ],
      technologies: ["React.js", "Django", "PostgreSQL", "Redux", "Docker", "AWS", "Celery", "LangChain"]
    },
    {
      title: "Digital Specialist Engineer",
      company: "Infosys",
      location: "India",
      period: "Feb 2022 - Dec 2023",
      type: "Development",
      bgGradient: "bg-gradient-accent",
      achievements: [
        "Developed no-code drag-and-drop web builder, boosting user engagement by 40%",
        "Engineered AI-powered SQL chatbot using LangChain and Hugging Face models",
        "Implemented Single Sign-On (SSO) integration, reducing login time by 20%",
        "Optimized MySQL database performance with refined query structures and indexing"
      ],
      technologies: ["Angular", "Node.js", "TypeScript", "Python", "Flask", "MongoDB", "LangChain", "Hugging Face"]
    },
    {
      title: "Systems Engineer (MEAN Stack)",
      company: "Appwrk IT Solutions",
      location: "India",
      period: "Jan 2021 - Feb 2022",
      type: "Foundation",
      bgGradient: "bg-gradient-primary",
      achievements: [
        "Enhanced user interactions using Konva.js in Angular with interactive drawings",
        "Collaborated with cross-functional teams, increasing application efficiency by 25%",
        "Developed scalable web and mobile applications using Angular and Ionic Framework",
        "Improved application performance by debugging and implementing code optimizations"
      ],
      technologies: ["Angular", "Ionic", "Konva.js", "JavaScript", "HTML5", "CSS3", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 portfolio-section-title">
              Professional <span className="portfolio-text-gradient">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A journey of growth, innovation, and leadership in full-stack development
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform -translate-x-1/2 hidden md:block"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal 
                key={index} 
                delay={index * 200}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div className="relative flex flex-col md:flex-row items-start md:items-center">
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-primary rounded-full transform -translate-x-1/2 z-10 hidden md:block animate-pulse-glow"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                    <Card className="portfolio-card hover-lift">
                      <div className="p-6">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${exp.bgGradient} mr-3`}>
                                <Building2 className="w-5 h-5 text-white" />
                              </div>
                              <Badge className={`${exp.bgGradient} text-white border-0`}>
                                {exp.type}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                            <div className="flex items-center text-muted-foreground mb-2">
                              <Building2 className="w-4 h-4 mr-2" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span>{exp.period}</span>
                              <MapPin className="w-4 h-4 ml-4 mr-2" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                            <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-accent flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                            <Zap className="w-4 h-4 mr-2 text-primary" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
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
                      </div>
                    </Card>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <ScrollReveal delay={600}>
          <div className="mt-16">
            <Card className="portfolio-card p-8">
              <h3 className="text-2xl font-semibold mb-8 text-center text-primary">Career Impact</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold portfolio-text-gradient">4+</div>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">40%</div>
                  <p className="text-muted-foreground">User Engagement Boost</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold portfolio-text-gradient">60%</div>
                  <p className="text-muted-foreground">Performance Improvement</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">6</div>
                  <p className="text-muted-foreground">Team Members Led</p>
                </div>
              </div>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ExperienceSection;