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
      
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Branding */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 justify-center md:justify-start">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-black text-lg sm:text-2xl text-primary-foreground border-4 border-primary/30 shadow-[0_0_14px_hsl(0,76%,55%/0.4)]">
                95
              </div>
              <div>
                <div className="text-base sm:text-xl font-black chrome-text">SHARIF SHAIKH</div>
                <div className="text-xs text-accent font-bold uppercase tracking-wider">Full-Stack Racer</div>
              </div>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Building high-performance web applications at lightning speed. Always ready for the next race! 🏁
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:pl-4">
            <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2 justify-center md:justify-start">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Quick Navigation
            </h3>
            <ul className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-xs sm:text-sm flex items-center gap-2 px-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2 justify-center md:justify-start">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Connect With Me
            </h3>
            <div className="flex justify-center md:justify-start gap-2 sm:gap-3 mb-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center text-foreground hover:from-primary hover:to-primary/50 hover:text-primary-foreground hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_hsl(0,76%,55%/0.5)] group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground space-y-1">
              <p><a href="mailto:SharifShaikh3534@gmail.com" className="hover:text-primary truncate">📧 SharifShaikh3534@gmail.com</a></p>
              <p>📱 +91 8104607493</p>
              <p>📍 Mumbai, Maharashtra</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-4 sm:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
            <div className="text-center md:text-left">
              <div>© {currentYear} Sharif Shaikh. All rights reserved.</div>
              <div className="flex items-center gap-1 justify-center md:justify-start mt-1">
                <span className="hidden md:inline">Built with</span>
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-pulse" fill="currentColor" />
                <span className="hidden md:inline">and ☕</span>
              </div>
            </div>

            {/* Racing Quote */}
            <div className="text-accent font-semibold italic text-center text-sm sm:text-base">
              <span className="text-lg sm:text-xl">⚡</span>
              <span className="mx-2">"I am speed"</span>
              <span className="text-lg sm:text-xl">🏎️</span>
            </div>
          </div>
        </div>
      </div>
      {/* Checkered Flag Pattern (hidden on small screens) */}
      <div className="hidden sm:block absolute bottom-0 left-0 right-0 h-4 opacity-10">
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
