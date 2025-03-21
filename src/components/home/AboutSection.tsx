
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { Award, Clock, Users, Target } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How We Make an Impact</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform connects skilled volunteers with organizations that need their expertise, creating lasting positive change in communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community Building</h3>
                  <p className="text-muted-foreground">
                    We foster connections between volunteers, organizations, and communities, building a network of support and collaboration.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Skill Matching</h3>
                  <p className="text-muted-foreground">
                    Our platform matches volunteers with opportunities that align with their skills, interests, and availability.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Flexible Opportunities</h3>
                  <p className="text-muted-foreground">
                    From one-time events to ongoing commitments, we offer flexible ways to contribute based on your schedule.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Impact Tracking</h3>
                  <p className="text-muted-foreground">
                    We help volunteers and organizations measure and celebrate their collective impact on communities.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/contact">
                  <Button>Learn More About Us</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden aspect-square">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt="Volunteers working together"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 border-2 border-primary rounded-lg hidden md:block"></div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-accent/20 rounded-lg hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
