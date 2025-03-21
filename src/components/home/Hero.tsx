
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    if (!heroRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      
      const el = heroRef.current;
      if (!el) return;
      
      // Subtle parallax effect
      el.querySelectorAll('.parallax').forEach((layer: Element) => {
        const htmlLayer = layer as HTMLElement;
        const speed = parseFloat(htmlLayer.getAttribute('data-speed') || '5');
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;
        
        htmlLayer.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="parallax absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          data-speed="10"
        ></div>
        <div 
          className="parallax absolute -bottom-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          data-speed="15"
        ></div>
      </div>
      
      <div className="container-narrow relative z-10">
        <div className="text-center space-y-6 animate-fade-in-up">
          <div className="inline-block bg-muted px-3 py-1 rounded-full text-sm font-medium text-muted-foreground mb-4">
            {t('heroTagline', language)}
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            {t('heroTitle', language).split('Passionate People').map((part, i) => 
              i === 0 ? part : <><span className="text-primary">Passionate People</span>{part}</>
            )}
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('heroSubtitle', language)}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link to="/volunteer-search">
              <Button size="lg" className="w-full sm:w-auto">
                {t('findVolunteers', language)}
              </Button>
            </Link>
            <Link to="/events-volunteers">
              <Button variant="outline" size="lg" className="w-full sm:w-auto group">
                <span>{t('exploreEvents', language)}</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2,500+</div>
              <div className="text-muted-foreground">{t('activeVolunteers', language)}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">150+</div>
              <div className="text-muted-foreground">{t('partnerOrganizations', language)}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">{t('eventsCompleted', language)}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">15,000+</div>
              <div className="text-muted-foreground">{t('volunteerHours', language)}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <a 
            href="#about" 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-background/80 shadow-md"
            aria-label="Scroll down"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
