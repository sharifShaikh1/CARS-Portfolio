import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Instagram } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "SharifShaikh3534@gmail.com",
      href: "mailto:SharifShaikh3534@gmail.com",
      color: "primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8104607493",
      href: "tel:+918104607493",
      color: "secondary",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, Maharashtra",
      href: "https://maps.google.com/?q=Mumbai,Maharashtra",
      color: "accent",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sharif-shaikh-3b9581361",
      color: "secondary",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/sharifshaikh1",
      color: "primary",
    },
   {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/sharif__shaikh26/",
    color: "accent",
   }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-bold uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full border border-primary/30 animate-pulse">
              Finish Line
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="chrome-text">LET'S RACE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to join forces? Let's create something amazing together. Drop me a message and let's hit the gas!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(0,76%,55%/0.3)] group"
            >
              <a href={contact.href} target="_blank" rel="noopener noreferrer" className="block">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${contact.color} to-${contact.color}/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{contact.label}</h3>
                  <p className="text-muted-foreground break-all">{contact.value}</p>
                </div>
              </a>
            </Card>
          ))}
        </div>

        {/* Social Links Card */}
        <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-2 border-primary/30 relative overflow-hidden">
          <div className="racing-stripes absolute inset-0 opacity-20" />
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-6 text-center chrome-text">Connect With Me</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="racing"
                  size="lg"
                  asChild
                  className="group"
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="mr-2 group-hover:rotate-12 transition-transform" />
                    {social.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </Card>

        {/* Internship Status */}
        <div className="mt-12">
          <Card className="p-8 bg-gradient-to-r from-accent/20 to-transparent border-2 border-accent/50 relative overflow-hidden">
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center flex-shrink-0 animate-rev-engine">
                  <span className="text-4xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-2">Seeking Opportunities</h3>
                  <p className="text-lg text-foreground">Currently looking for internship and full-time positions to accelerate my career.</p>
                </div>
              </div>
              <Button variant="racing" size="lg" asChild className="flex-shrink-0">
                <a href="mailto:SharifShaikh3534@gmail.com">
                  Get In Touch
                  <Mail className="ml-2" />
                </a>
              </Button>
            </div>
          </Card>
        </div>

        {/* Footer Quote */}
        <div className="mt-16 text-center">
          <div className="text-6xl mb-4">🏁</div>
          <p className="text-2xl font-bold text-muted-foreground italic">
            "Float like a Cadillac, sting like a Beemer."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
