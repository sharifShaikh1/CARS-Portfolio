import { Link } from "react-router-dom";
import { Github, Linkedin, ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sharif-shaikh-3b9581361",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/sharifshaikh1",
      label: "GitHub",
    },
    {
      icon: ExternalLink,
      href: "https://sharif-portfolio.onrender.com",
      label: "Old Portfolio",
    },
  ];

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <footer className="relative border-t-2 border-primary/30 bg-card/50 backdrop-blur-lg">
      {/* Racing Stripes */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-accent to-secondary" />
      
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-black text-2xl text-primary-foreground border-4 border-primary/30 shadow-[0_0_20px_hsl(0,76%,55%/0.5)]">
                95
              </div>
              <div>
                <div className="text-xl font-black chrome-text">SHARIF SHAIKH</div>
                <div className="text-xs text-accent font-bold uppercase tracking-wider">Full-Stack Racer</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building high-performance web applications at lightning speed. Always ready for the next race! 🏁
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Quick Navigation
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Connect With Me
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center text-foreground hover:from-primary hover:to-primary/50 hover:text-primary-foreground hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_hsl(0,76%,55%/0.5)] group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>📧 SharifShaikh3534@gmail.com</p>
              <p>📱 +91 8104607493</p>
              <p>📍 Mumbai, Maharashtra</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>© {currentYear} Sharif Shaikh. All rights reserved.</span>
              <span className="hidden md:inline">|</span>
              <span className="flex items-center gap-1">
                Built with <Heart className="w-4 h-4 text-primary animate-pulse" fill="currentColor" /> and ☕
              </span>
            </div>
            
            {/* Racing Quote */}
            <div className="flex items-center gap-2 text-accent font-semibold italic">
              <span className="text-xl">⚡</span>
              "I am speed"
              <span className="text-xl">🏎️</span>
            </div>
          </div>
        </div>
      </div>

      {/* Checkered Flag Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-4 opacity-10">
        <div className="flex h-full">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className={`flex-1 ${i % 2 === 0 ? 'bg-foreground' : 'bg-transparent'}`}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
