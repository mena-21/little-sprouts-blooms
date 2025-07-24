import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary-light/30 to-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">LS</span>
              </div>
              <div className="text-xl font-heading font-bold text-foreground">
                Little Sprouts Daycare
              </div>
            </div>
            <p className="text-muted-foreground mb-4 font-body">
              Where every child blooms in a nurturing, safe environment. 
              Trusted by Seattle families since 2020.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>123 Cherry Blossom Lane, Seattle, WA 98101</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>(206) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@littlesproutsdaycare.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/programs" className="text-muted-foreground hover:text-primary transition-colors">Programs & Rates</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Photo Gallery</Link></li>
              <li><Link to="/enrollment" className="text-muted-foreground hover:text-primary transition-colors">Enrollment Process</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Parenting Resources</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Visit Us</Link></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Stay Connected</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get parenting tips and updates from Little Sprouts!
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="font-body"
              />
              <Button variant="default" size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-3 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Little Sprouts Daycare. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;