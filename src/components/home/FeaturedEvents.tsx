
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react';
import AnimatedCard from '@/components/ui/AnimatedCard';
import Button from '@/components/ui/Button';
import { events } from '@/lib/data';

const FeaturedEvents = () => {
  // Get 3 events to display
  const featuredEvents = events.slice(0, 3);
  
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">Featured Events</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Discover opportunities to make a difference in your community through volunteering.
            </p>
          </div>
          <Link to="/events-volunteers" className="mt-4 md:mt-0">
            <Button variant="outline" className="group">
              <span>View All Events</span>
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredEvents.map((event, index) => (
            <AnimatedCard key={event.id} delay={index * 100}>
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                  {event.categories[0]}
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold line-clamp-2">{event.title}</h3>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span>{event.location.city}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground line-clamp-2">{event.description}</p>
                
                <Link to={`/event/${event.id}`} className="block mt-4">
                  <Button variant="outline" className="w-full group">
                    <span>View Details</span>
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
