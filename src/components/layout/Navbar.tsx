
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogIn, Search, Calendar, MapPin } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useIsMobile } from '@/hooks/use-mobile';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const { language } = useLanguage();

  const navItems = [
    { label: t('home', language), path: '/' },
    { label: t('volunteers', language), path: '/volunteer-search', icon: <Search className="h-4 w-4" /> },
    { label: t('events', language), path: '/events-volunteers', icon: <Calendar className="h-4 w-4" /> },
    { label: t('eventMap', language), path: '/event-map', icon: <MapPin className="h-4 w-4" /> },
    { label: t('contact', language), path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'navbar-glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-primary font-bold text-2xl">Engage</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-1 font-medium transition-colors hover:text-primary ${
                location.pathname === item.path
                  ? 'text-primary'
                  : 'text-foreground/80'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Auth Buttons and Language Switcher */}
        <div className="hidden md:flex items-center space-x-4">
          <LanguageSwitcher />
          <Link to="/auth?type=login">
            <Button variant="outline" size="sm" className="flex items-center space-x-1">
              <LogIn className="h-4 w-4" />
              <span>{t('login', language)}</span>
            </Button>
          </Link>
          <Link to="/auth?type=signup">
            <Button size="sm" className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{t('signUp', language)}</span>
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button and Language Switcher */}
        <div className="md:hidden flex items-center space-x-2">
          <LanguageSwitcher />
          <button
            className="p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect animate-fade-in-down">
          <div className="container py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-primary/10 text-primary'
                    : 'hover:bg-secondary'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t border-border">
              <Link to="/auth?type=login" className="w-full">
                <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
                  <LogIn className="h-4 w-4" />
                  <span>{t('login', language)}</span>
                </Button>
              </Link>
              <Link to="/auth?type=signup" className="w-full">
                <Button className="w-full flex items-center justify-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{t('signUp', language)}</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
