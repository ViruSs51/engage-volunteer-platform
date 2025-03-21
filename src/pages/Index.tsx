
import React, { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import FeaturedEvents from '@/components/home/FeaturedEvents';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <FeaturedEvents />
        
        {/* Call to action section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container-narrow text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Whether you're looking to volunteer your skills or find capable volunteers for your cause, we're here to help you connect and create impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth?type=signup">
                <Button
                  variant="accent"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Join as a Volunteer
                </Button>
              </Link>
              <Link to="/auth?type=signup&company=true">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white/20 bg-white/10 hover:bg-white/20"
                >
                  Register as an Organization
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Testimonials section */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What People Say</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Hear from volunteers and organizations who have used our platform to create impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-8 shadow-md">
                <div className="space-y-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Engage has been a game-changer for our organization. We've found dedicated volunteers who are passionate about our cause and bring valuable skills to our projects."
                  </p>
                  <div className="pt-4">
                    <p className="font-medium">Sarah Chen</p>
                    <p className="text-sm text-muted-foreground">Executive Director, GreenEarth Foundation</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-8 shadow-md">
                <div className="space-y-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "I've been able to use my design skills to help nonprofits while building my portfolio. The platform makes it easy to find opportunities that match my availability."
                  </p>
                  <div className="pt-4">
                    <p className="font-medium">Marcus Johnson</p>
                    <p className="text-sm text-muted-foreground">Graphic Designer & Volunteer</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-8 shadow-md">
                <div className="space-y-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "The volunteer community on Engage is outstanding. I've met amazing people while working on housing projects and have made connections that extend beyond volunteering."
                  </p>
                  <div className="pt-4">
                    <p className="font-medium">Lisa Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Volunteer Coordinator, HomeBuilders Alliance</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/volunteer-search" className="inline-flex items-center text-primary hover:underline">
                <span>Read more volunteer stories</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
