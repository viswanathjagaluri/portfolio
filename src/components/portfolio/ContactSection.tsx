import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import {
  Mail,
  Linkedin,
  Phone,
  Send,
  CheckCircle,
  MapPin,
  Calendar
} from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const ContactSection = () => {
  // 🔴 Replace with YOUR Formspree form ID
  const [state, handleSubmit] = useForm('xzdzlnoj');

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'viswanathjagaluri@gmail.com',
      href: 'mailto:viswanathjagaluri@gmail.com',
      color: 'text-primary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'viswanathjagaluri',
      href: 'https://www.linkedin.com/in/viswanathjagaluri/',
      color: 'text-accent'
    },
    {
      icon: Phone,
      label: 'Mobile',
      value: '9013380102',
      href: 'tel:+19013380102',
      color: 'text-primary'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Boston',
      href: '',
      color: 'text-accent'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 portfolio-section-title">
              Let&apos;s <span className="portfolio-text-gradient">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your next project to life? Let&apos;s discuss how we
              can work together.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <Card className="portfolio-card p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I&apos;m always open to discussing new opportunities, projects,
                  or collaborations.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center group">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-primary mr-4">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={
                              info.href.startsWith('http')
                                ? '_blank'
                                : undefined
                            }
                            rel={
                              info.href.startsWith('http')
                                ? 'noopener noreferrer'
                                : undefined
                            }
                            className={`font-medium hover:underline ${info.color}`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className={`font-medium ${info.color}`}>
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

             
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={200}>
            <Card className="portfolio-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-accent">
                Send a Message
              </h3>

              {state.succeeded ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 mx-auto mb-4 text-accent" />
                  <h4 className="text-xl font-semibold mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I&apos;ll respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">Full Name</label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="your.email@example.com"
                        required
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2">Message</label>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full portfolio-button text-white"
                  >
                    {state.submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              Typically respond within{' '}
              <span className="text-primary font-semibold">24 hours</span> •
              Available for{' '}
              <span className="text-accent font-semibold">
                remote collaboration
              </span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
