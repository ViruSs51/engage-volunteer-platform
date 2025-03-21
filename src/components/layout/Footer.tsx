
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/50 pt-16 pb-8">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Engage</h3>
            <p className="text-muted-foreground">
              Connecting volunteers with meaningful opportunities to make a difference.
            </p>
            <div className="flex items-center space-x-1 text-primary">
              <span>Made with</span>
              <Heart className="h-4 w-4 fill-primary" />
              <span>by the community</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/volunteer-search" className="text-muted-foreground hover:text-primary transition-colors">
                  Find Volunteers
                </Link>
              </li>
              <li>
                <Link to="/events-volunteers" className="text-muted-foreground hover:text-primary transition-colors">
                  Explore Events
                </Link>
              </li>
              <li>
                <Link to="/event-map" className="text-muted-foreground hover:text-primary transition-colors">
                  Event Map
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@engage-platform.org</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span>123 Volunteer Street, San Francisco, CA 94110</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <p className="text-muted-foreground">Subscribe to our newsletter for updates</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-background rounded-l-lg px-4 py-2 border border-r-0 border-input focus:outline-none focus:ring-1 focus:ring-primary" 
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-r-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Engage Volunteer Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
