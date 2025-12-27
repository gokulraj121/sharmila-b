import { Link } from "react-router-dom";
import { Heart, Mail, Phone, GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-lg text-foreground">
                Mrs. Sharmila B
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Primary Academic Head with 19 years of experience nurturing young minds 
              and fostering a love for learning.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                About Me
              </Link>
              <Link to="/experience" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Experience & Skills
              </Link>
              <Link to="/events" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Events Gallery
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Get in Touch
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-foreground">Contact</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:sharmibalu2021@gmail.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                sharmibalu2021@gmail.com
              </a>
              <a 
                href="tel:+919626456960" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +91 9626456960
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by Mrs. Sharmila B
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
