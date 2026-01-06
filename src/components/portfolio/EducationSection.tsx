import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  Star,
  Trophy,
  Book
} from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Fitchburg State University",
      location: "Massachusetts, USA",
      period: "January 2024 - December 2025",
      type: "Graduate",
      icon: GraduationCap,
      bgGradient: "bg-gradient-primary"
    },
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Punjab, India",
      period: "August 2017 - June 2021",
      type: "Undergraduate",
      icon: Book,
      bgGradient: "bg-gradient-accent"
    }
  ];

  const certifications = [
    {
      title: "React Professional Certification",
      issuer: "Infosys",
      year: "2023",
      type: "Technical",
      icon: Trophy
    },
    {
      title: "Angular Professional Certification",
      issuer: "Infosys",
      year: "2023",
      type: "Technical",
      icon: Award
    },
    {
      title: "Java Professional Certification",
      issuer: "Infosys",
      year: "2022",
      type: "Technical",
      icon: Star
    },
    {
      title: "Fundamentals of Cloud Computing",
      issuer: "edX",
      year: "2022",
      type: "Cloud",
      icon: Trophy
    },
    {
      title: "Insta Award",
      issuer: "Infosys",
      year: "2023",
      type: "Achievement",
      icon: Award
    },
    {
      title: "Rise Award",
      issuer: "Infosys",
      year: "2022",
      type: "Achievement",
      icon: Star
    }
  ];

  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 portfolio-section-title">
              Education & <span className="portfolio-text-gradient">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Continuous learning and professional development in cutting-edge technologies
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <ScrollReveal direction="left">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-primary flex items-center">
                <GraduationCap className="w-6 h-6 mr-3" />
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <ScrollReveal key={index} delay={index * 200}>
                    <Card className="portfolio-card hover-lift">
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${edu.bgGradient} mr-4`}>
                            <edu.icon className="w-6 h-6 text-white" />
                          </div>
                          <Badge className={`${edu.bgGradient} text-white border-0`}>
                            {edu.type}
                          </Badge>
                        </div>
                        
                        <h4 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h4>
                        <div className="space-y-2 text-muted-foreground">
                          <div className="flex items-center">
                            <Book className="w-4 h-4 mr-2" />
                            <span className="font-medium">{edu.institution}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span>{edu.period}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2" />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Certifications */}
          <ScrollReveal direction="right" delay={100}>
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-accent flex items-center">
                <Award className="w-6 h-6 mr-3" />
                Certifications & Awards
              </h3>
              
              <div className="grid gap-4">
                {certifications.map((cert, index) => (
                  <ScrollReveal key={index} delay={300 + (index * 100)}>
                    <Card className="portfolio-card hover-lift">
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${
                              cert.type === 'Technical' ? 'bg-gradient-primary' :
                              cert.type === 'Cloud' ? 'bg-gradient-accent' :
                              'bg-gradient-primary'
                            } mr-3`}>
                              <cert.icon className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground">{cert.title}</h4>
                              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="secondary" className="text-xs bg-muted/50 text-foreground">
                              {cert.type}
                            </Badge>
                            <p className="text-sm text-muted-foreground mt-1">{cert.year}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Summary Stats */}
        <ScrollReveal delay={800}>
          <div className="mt-16">
            <Card className="portfolio-card p-8">
              <h3 className="text-2xl font-semibold mb-8 text-center text-primary">Academic & Professional Excellence</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold portfolio-text-gradient">MS</div>
                  <p className="text-muted-foreground">Computer Science</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">6</div>
                  <p className="text-muted-foreground">Professional Certifications</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold portfolio-text-gradient">2</div>
                  <p className="text-muted-foreground">Universities</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">8+</div>
                  <p className="text-muted-foreground">Years of Learning</p>
                </div>
              </div>
              
              {/* Learning Philosophy */}
              <div className="mt-8 text-center">
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Committed to continuous learning and staying at the forefront of technology through 
                  <span className="text-primary font-semibold"> formal education</span>, 
                  <span className="text-accent font-semibold"> professional certifications</span>, and 
                  <span className="text-primary font-semibold"> hands-on experience</span>.
                </p>
              </div>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EducationSection;